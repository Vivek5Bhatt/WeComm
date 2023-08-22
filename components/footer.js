import Link from 'next/link';
import Image from 'next/image';
import { Container } from 'react-bootstrap';

/* environment */
import { BASE_URL } from '/environment';
import { useUserState } from '/context';

/* Images */
import logo from '@/assets/images/logo.svg';

const Footer = (props) => {
    const userState = useUserState();

    return (
        <>
            <Container>
                { (props?.hideLinks === false || props?.hideLinks === undefined) &&
                    <div className="footer-in">
                        <div className="footer-logo">
                            <Link passHref href={`${BASE_URL}/`}>
                                <a><Image alt="Image" src={logo} /></a>
                            </Link>
                        </div>
                        <p className="align-center">Revolutionize your ecommerce omni-channel strategy with us. Come grow with us!</p>
                        <ul className="foot-links">
                            <li>
                                <Link passHref href={`${BASE_URL}/`}><a>Home</a></Link>
                            </li>
                            <li>
                                <Link passHref href={`${BASE_URL}/about`}>About Us</Link>
                            </li>
                            <li>
                                <Link passHref href={`${BASE_URL}/contact`}>Contact Us</Link>
                            </li>
                            <li>
                                <Link passHref href="#">Help</Link>
                            </li>
                            <li>
                                <Link passHref href={`${BASE_URL}/privacy-policy`}>Privacy</Link>
                            </li>
                        </ul>
                    </div>
                }
                {   props?.showDiffLink === true &&
                        <div className="footer-in">
                            <div className="footer-logo">
                                <Link href={`${BASE_URL}/`}><a> <Image alt="logo" src={logo} /> </a></Link>
                            </div>
                            <p className="align-center">Design amazing digital experiences that create more happy in the world.</p>

                            <ul className="foot-links">
                                <li>
                                    <Link passHref href="#"><a>Overview</a></Link>
                                </li>
                                <li>
                                    <Link passHref href="#">Features Us</Link>
                                </li>
                                <li>
                                    <Link passHref href="#">Pricing</Link>
                                </li>
                                <li>
                                    <Link passHref href="#">Careers</Link>
                                </li>
                                <li>
                                    <Link passHref href="#">Help</Link>
                                </li>
                                <li>
                                    <Link passHref href={`${BASE_URL}/privacy-policy`}>Privacy</Link>
                                </li>
                            </ul>
                        </div>
                }

                <div className="copy-right">
                    <div className="left">
                    {
                        (!userState.isAuth) &&
                        <>
                            <p>Join our interested list:</p>
                            <Link passHref href={`${BASE_URL}/home`}><a className="join-btn">Join Now</a></Link>
                        </>
                    }
                    </div>
                    <div className="right">
                        <p>© {new Date().getFullYear()} All rights reserved.</p>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default Footer;