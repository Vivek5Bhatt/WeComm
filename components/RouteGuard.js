import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

function RouteGuard({ children }) {
    const router = useRouter();
    const [authorized, setAuthorized] = useState(false);

    useEffect(() => {
        // on initial load - run auth check 
        authCheck(router.asPath);

        // on route change start - hide page content by setting authorized to false  
        const hideContent = () => setAuthorized(false);
        router.events.on('routeChangeStart', hideContent);

        // on route change complete - run auth check 
        router.events.on('routeChangeComplete', authCheck)

        // unsubscribe from events in useEffect return function
        return () => {
            router.events.off('routeChangeStart', hideContent);
            router.events.off('routeChangeComplete', authCheck);
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    async function authCheck(url) {
        // redirect to login page if accessing a private page and not logged in 
        const path = url.split('?')[0];
        const guestPaths = [ '/login', '/home', '/forgot-password' ];

        const hasToken = localStorage.getItem('access_token');
        const segmentsArr = path.split('/').filter((segment) => { return segment; });

        if (segmentsArr[0] !== 'static' && guestPaths.includes(path)) {
            if (hasToken) {
                setAuthorized(false);
                router.push({ pathname: '/dashboard' });
            }
        }

        setAuthorized(true);
    }

    return (authorized && children);
}

export { RouteGuard };