import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { Offcanvas, Button, Form } from 'react-bootstrap';

/* environment */
import { BASE_URL } from '/environment';
import { useUserState } from '/context';

/* Images */
import logo from '@/assets/images/logo.svg';
import support from '@/assets/images/support.svg';
import stico from '@/assets/images/st-ico.svg';
import mobmenu from '@/assets/images/mob-menu.svg';

/* components */
import ProfileBar from '@/components/dashboard/profilebar';
import MenuBar from '@/components/dashboard/menubar';

const SideBar = () => {
    const router = useRouter();
    const userState = useUserState();
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const toggleMenu = (status) => setShowMobileMenu(status);
    const pathArr = router.asPath.split('/').filter(element => element);

    return (
        <>
            {/* Desktop SideMenu */}
            <div className="left-container dash-left side-desktop">
                <div className="tp-box">
                    <div className="logo">
                        <Link passHref href={`${BASE_URL}/dashboard`}>
                            <a><Image alt="Logo" src={logo} /></a>
                        </Link>
                    </div>

                    {/* Search Element Desktop */}
                    <div className="left-search">
                        <Form.Control type="text" placeholder="Search" className="search" />
                    </div>

                    <MenuBar baseUrl={BASE_URL} activeRouteArr={pathArr}></MenuBar>

                    <div className="support-box">
                        <ul>
                            <li>
                                <Link passHref href={'#'}>
                                    <a className={ pathArr[0] === 'support' ? 'active' : '' }>
                                        <span><Image alt="Image" src={support}/></span> Support
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link passHref href={'#'}>
                                    <a className={ pathArr[0] === 'settings' ? 'active' : '' }>
                                        <span><Image alt="Image" src={stico}/></span> Settings
                                    </a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <ProfileBar authUser={userState?.authUser} logoutUser={userState.logoutUser} ></ProfileBar>
            </div>

            {/* Mobile SideMenu */ }

            <Offcanvas show={showMobileMenu} onHide={() => toggleMenu(false)}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>
                        <Image alt="Image" src={logo} />
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body className="pd-0">
                    <div className="register-container">
                        <div className="register-inner">
                            <div className="left-container mob-left">
                                <div className="tp-box">
                                    <div className="left-search">
                                        <Form.Control type="text" placeholder="Search" />
                                    </div>
                                    <MenuBar baseUrl={BASE_URL} activeRouteArr={pathArr}></MenuBar>
                                </div>

                                <ProfileBar authUser={userState?.authUser} logoutUser={userState.logoutUser} ></ProfileBar>
                            </div>
                        </div>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
            
            <div className='dash-right mobilemenu-bar'>
                <div className="mob-topbar ">
                    <Link passHref href="">
                        <a><Image alt="Image" src={logo} /></a>
                    </Link>
                    <Button className="mob-menu" onClick={() => toggleMenu(true)}>
                        <Image alt="Image" src={mobmenu} />
                    </Button>
                </div>  
            </div>
        </>
    )
}

export default SideBar;