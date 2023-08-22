import Image from 'next/image'
import logo from "../assets/images/logo.svg";
import error from "../assets/images/error-img.svg";
import menu from "../assets/images/menu.svg";
import React, { useState } from 'react';
import { Row, Button, Container, Col, Offcanvas } from 'react-bootstrap';
import Link from 'next/link'
const Error = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (

        <div className="wrapper">
            <div className="top-bar">
                <Container>
                    <div className="bar-inner">
                        <div className="h-logo">
                            <Link passHref href="/"><a><Image alt="Image" src={logo} /></a></Link>
                        </div>
                        <div className="menu-bar">
                            <ul className="menus">
                                <li>
                                    <Link passHref href="/"><a>Home</a></Link>
                                </li>
                                <li>
                                    <Link passHref href="/about">About Us</Link>
                                </li>
                                <li>
                                    <Link passHref href="/contact">Contact Us</Link>
                                </li>
                            </ul>
                            <div className="top-btns">
                                <Link passHref href="/login" ><a className="log-btn">Log in</a></Link>
                                <Link passHref href="/home" ><a className="sign-btn">Join Interest List</a></Link>
                            </div>
                            <Button className="mob-menu" onClick={handleShow}>
                                <Image alt="Image" src={menu} />
                            </Button>
                        </div>
                    </div>
                </Container>
            </div>

            <div className="error-main">
                <Container>
                    <div className="error-in">
                        <Row className="align-items-center">
                            <Col md={7}>
                                <div className="er-text">
                                    <div className="small-text">404 error</div>
                                    <h2>Page not found...</h2>
                                    <p>Sorry, the page you are looking for doesn&rsquo;t exist or has been moved.</p>
                                    <div className="er-btn"> <Link passHref href="/">Go back home</Link> </div>
                                </div>
                            </Col>

                            <Col md={5}>
                                <div className="er-image"> <Image alt="Image" src={error} /> </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>

            <div className="footer-main">
                <Container>
                    {/* <div className="footer-in">
                    <div className="footer-logo"> <Link to=""> <Image alt="Image" src={logo} /> </Link> </div>
                    <p className="align-center">Revolutionize your ecommerce omni-channel strategy with us. Come grow with us!</p>
                    <ul className="foot-links">
                        <li> <Link to="">Home</Link> </li>
                        <li> <Link to="">About Us</Link> </li>
                        <li> <Link to="">Help</Link> </li>
                        <li> <Link to="">Privacy</Link> </li>
                    </ul>
                </div> */}
                    <div className="copy-right">
                        <div className="left">
                            <p>Join our interested list:</p>
                            <Link passHref href="/home" ><a className="join-btn">Join Now</a></Link>
                        </div>
                        <div className="right">
                            <p>© 2077 Untitled UI. All rights reserved.</p>
                        </div>
                    </div>
                </Container>
            </div>

            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title> <Image alt="Image" src={logo} /> </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <div className="side-menu">
                        <ul>
                            <li> <Link passHref href="/"><a>Home</a></Link> </li>
                            <li> <Link passHref href="/aboutus"><a>About Us</a></Link> </li>
                        </ul>
                        <div className="sidebar-btn">
                            <Link passHref href="/login"><a className="log-btn">Log in</a></Link>
                            <Link passHref href="/home" ><a className="sign-btn">Sign Up</a></Link>
                        </div>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    )
}

export default Error;