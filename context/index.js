import { createContext, useEffect, useState, useContext } from 'react';
import { checkAuthorization } from '@/api/authentication';

const UserStateContext = createContext();
const cache = { apiChecked: false };

export function UserProvider({ children }) {
    const [isAuth, setIsAuth] = useState(false);
    const [isLoading, setIsLoading] = useState(0);
    const [authUser, setAuthUser] = useState({});
    const [userRole, setUserRole] = useState('');
    const [accessToken, setAccessToken] = useState('');

    const incrementIsLoading = () => {
        setIsLoading(isLoading + 1);
        setTimeout(() => { setIsLoading(0); }, 10000);
    }

    const decrementIsLoading = () => {
        setIsLoading(isLoading === 0 ? 0 : (isLoading - 1));
    }

    const logoutUser = () => {
        window.localStorage.removeItem('access_token');
        window.localStorage.removeItem('auth_user');
        setIsAuth(false);
        setAuthUser({});
        setUserRole('');
        setAccessToken('');
        window.location.reload();
    };

    const loggedInUser = (data) => {
        window.localStorage.setItem('access_token', data?.access_token);
        window.localStorage.setItem('auth_user', JSON.stringify(data));

        let role = data?.role?.label;

        if (role) {
            role = role.replaceAll(' ', '_').toLowerCase();
        }

        delete data?.access_token;
        setIsAuth(true);
        setAuthUser(data);
        setUserRole(role);
        setAccessToken(data?.access_token);
        return;
    };

    async function getUser() {
        const token = window.localStorage.getItem('access_token');
        let data = false;

        if (token && token !== undefined) {
            incrementIsLoading();
            const apiRes = await checkAuthorization();
            data = apiRes?.data;
        }
        
        if (data && data?.is_authenticated) {
            let user = JSON.parse(window.localStorage.getItem('auth_user'));
            delete user?.access_token;
            setAuthUser(user);
            setUserRole(data?.type);
            setIsAuth(true);
        } else {
            logoutUser();
        }

        cache.apiChecked = true;
        decrementIsLoading();
    }

    useEffect(() => {
        const token = window.localStorage.getItem('access_token');
        setAccessToken(token);
    }, []);

    useEffect(() => {
        if (!accessToken) { return; }
        
        // use cached user data if we’ve already hit the API with this token
        if (cache.apiChecked) {
            setAuthUser(authUser);
            setUserRole(userRole);
            setIsAuth(isAuth);
            return;
        }

        getUser();
    }, [accessToken]);

    const state = {
        isAuth,
        authUser,
        userRole,
        isLoading,
        accessToken,
        loggedInUser,
        logoutUser,
        incrementIsLoading,
        decrementIsLoading
    };

    return (
        <UserStateContext.Provider value={state}>
            {children}
        </UserStateContext.Provider>
    );
}

export function useUserState() {
    const state = useContext(UserStateContext);

    if (state === undefined) {
        throw new Error('useUserState must be used within a UserProvider');
    }

    return state;
}