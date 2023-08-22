import Image from 'next/image';

import { useUserState } from '/context';
import { successToast } from '@/services/toaster';
import { logoutUser } from '@/api/authentication';

/* Images */
import logout from '@/assets/images/logout.svg';
import avatar from '@/assets/images/user.png';

const ProfileBar = (props) => {
    const userState = useUserState();

    const handleLogout = async (event) => {
        event.preventDefault();
        event.target.disabled = true;
        userState.incrementIsLoading();

        const response = await logoutUser();
        if (response?.statusCode === 200) {
            successToast(response?.message);
            event.target.disabled = false;
            props.logoutUser();
            window.location.href = '/login';
        }

        event.target.disabled = false;
    }

    return (
        <div className="profile-bar">
            <span className="pr-details">
                {
                    props?.authUser?.first_name &&
                    <>
                        <div className="img"> <Image alt="Image" src={avatar} /> </div>
                        <div className="pro-text">
                            <h6>{`${props?.authUser?.first_name} ${props?.authUser?.last_name}`}</h6>
                            <p>{props?.authUser?.email}</p>
                        </div>
                    </>
                }
            </span>
            <a className="logout-btn" href="#" onClick={(event) => handleLogout(event)}>
                <Image alt="Image" src={logout} />
            </a>
        </div>
    )
}

export default ProfileBar;