import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button, Container, Offcanvas } from 'react-bootstrap';

/* environment */
import { BASE_URL } from '/environment';
import { useUserState } from '/context';
import { logoutUser } from "@/api/authentication";
import { successToast } from '@/services/toaster';

/* Images */
import menu from '@/assets/images/menu.svg';
import logo from '@/assets/images/logo.svg';

const TopBar = () => {
    const userState = useUserState();
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const toggleMenu = (status) => setShowMobileMenu(status);

    const handleClick = async (event) => {
        event.target.disabled = true;
        const response = await logoutUser();

        if (response?.statusCode === 200) {
            successToast(response?.message);
            userState.logoutUser();
        }

        event.target.disabled = false;
    }

    return (
        <>
            <Container>
                <div className="bar-inner">
                    <div className="h-logo">
                        <Link passHref href={`${BASE_URL}/`}><a><Image alt="Image" src={logo} /></a></Link>
                    </div>

                    <div className="menu-bar">
                        <ul className="menus">
                            <li>
                                <Link passHref href={`${BASE_URL}/`} shallow><a>Home</a></Link>
                            </li>
                            <li>
                                <Link passHref href={`${BASE_URL}/about`} shallow><a>About Us</a></Link>
                            </li>
                            <li>
                                <Link passHref href={`${BASE_URL}/contact`} shallow><a>Contact Us</a></Link>
                            </li>
                        </ul>
                        <div className="top-btns">
                            {
                                (!userState.isAuth) &&
                                    <>
                                        <Link passHref href={`${BASE_URL}/login`}><a className="log-btn">Log in</a></Link>
                                        <Link passHref href={`${BASE_URL}/home`}><a className="sign-btn">Join Interest List</a></Link>
                                    </>
                            }
                            {
                                (userState.isAuth) &&
                                    <>
                                        <Link passHref href={`${BASE_URL}/dashboard`}><a className="log-btn">Dashboard</a></Link>
                                        <Button className="sign-btn" type="button" onClick={(event) => handleClick(event)}>Logout</Button>
                                    </>
                            }
                        </div>

                        <Button className="mob-menu" onClick={() => toggleMenu(true)}>
                            <Image alt="Image" src={menu} />
                        </Button>
                    </div>
                </div>
            </Container>

            <Offcanvas show={showMobileMenu} onHide={() => toggleMenu(false)} className="offcanvas-topbar">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title> <Image alt="Image" src={logo} /> </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <div className="side-menu">
                        <ul>
                            <li>
                                <Link passHref href={`${BASE_URL}/`}><a>Home</a></Link>
                            </li>
                            <li>
                                <Link passHref href={`${BASE_URL}/about`}>About Us</Link>
                            </li>
                            <li>
                                <Link passHref href={`${BASE_URL}/contact`}>Contact Us</Link>
                            </li>
                        </ul>
                        {
                            (!userState.isAuth) &&
                                <div className="sidebar-btn">
                                    <Link passHref href={`${BASE_URL}/login`}><a className="log-btn">Log in</a></Link>
                                    <Link passHref href={`${BASE_URL}/home`}><a className="sign-btn">Join Interest List</a></Link>
                                </div>
                        }
                        {
                            (userState.isAuth) &&
                                <div className="sidebar-btn">
                                    <Link passHref href={`${BASE_URL}/dashboard`}><a className="log-btn">Dashboard</a></Link>
                                    <Button className="sign-btn" type="button" onClick={(event) => handleClick(event)}>Logout</Button>
                                </div>
                        }
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}

export default TopBar;