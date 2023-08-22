import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { Badge, Row, Col, Form, Container } from 'react-bootstrap';

/* images */
import logo from "@/assets/images/logo.svg";
import heartBlue from "@/assets/images/heart-blue.svg";
import policyicon from "@/assets/images/policy-icon.svg";
import fileblue from "@/assets/images/file-blue.svg";
import billingBlue from "@/assets/images/billing-blue.svg"; 
import mailBlue from "@/assets/images/mail-blue.svg"; 
import switchHorizontal from "@/assets/images/switch-horizontal.svg";
import Avatar2 from "@/assets/images/Avatar2.svg";
import Avatar3 from "@/assets/images/Avatar3.svg";
import Avatar4 from "@/assets/images/Avatar4.svg";
import customerBg from "@/assets/images/customer-bg.svg";
import customerBgMobile from "@/assets/images/customer-bg-mobile.svg";
import twiiter from "@/assets/images/twiiter.svg";
import linkedin from "@/assets/images/linkedin.svg";
import facebook from "@/assets/images/facebook.svg";
import github from "@/assets/images/github.svg";
import dribble from "@/assets/images/dribble.svg";
import Socialicon from "@/assets/images/Socialicon.svg";

/* config */
import { APP_NAME, BASE_URL } from '/environment';

/* components */
import TopBar from '@/components/topbar';
import Loader from '@/components/loader';

const FAQ = () => {
    return (
        <div className="wrapper">
            <Head>
                <title>{`${APP_NAME} | FAQ`}</title>
            </Head>

            <Loader></Loader>

            <div className="top-bar">
                <TopBar />
            </div>

            <div className='policy-mainbx py-90 faq-mainbx'>
                <div className='container'>
                    <div className='card-header-box'>
                        <h5>FAQs</h5>
                        <h1>Frequently asked questions</h1>
                        <h4 className='mx-wt-700'>Have questions? We&rsquo;re here to help.</h4> 
                        <div className='serchbox custm-serchbox'>
                            <Form.Control type="text" placeholder="Search" className="search m-auto" />
                        </div>
                    </div>
                </div>
            </div>
            
            <div className='faq-cardouter pb-15'>
                <div className='container'>
                    <div className='faq-cardinner'>
                        <Row>
                            <Col md={6} lg={4}>
                                <div className='cardinner-faq text-center max-380 m-auto pb-50'>
                                    <div className='card-icon'>
                                        <span className='circle-icon'>
                                            <Image alt="Image" src={heartBlue} className="image-icon"></Image>
                                        </span>   
                                    </div>
                                    <div className='cardinner-descrip'>
                                        <h5>Is there a free trial available?</h5>
                                        <p>Yes, you can try us for free for 30 days. Our friendly team will work with you to get you up and running as soon as possible.</p>
                                    </div>
                                </div>
                            </Col>
                            <Col md={6} lg={4}>
                                <div className='cardinner-faq text-center max-380 m-auto pb-50'>
                                    <div className='card-icon'>
                                        <span className='circle-icon'>
                                            <Image alt="Image" src={switchHorizontal} className="image-icon"></Image>
                                        </span>   
                                    </div>
                                    <div className='cardinner-descrip'>
                                        <h5>Can I change my plan later?</h5>
                                        <p>Of course. Our pricing scales with your company. Chat to our friendly team to find a solution that works for you.</p>
                                    </div>
                                </div>
                            </Col>
                            <Col md={6} lg={4}>
                                <div className='cardinner-faq text-center max-380 m-auto pb-50'>
                                    <div className='card-icon'>
                                        <span className='circle-icon'>
                                            <Image alt="Image" src={policyicon} className="image-icon"></Image>
                                        </span>   
                                    </div>
                                    <div className='cardinner-descrip'>
                                        <h5>What is your cancellation policy?</h5>
                                        <p>We understand that things change. You can cancel your plan at any time and we&rsquo;ll refund you the difference already paid.</p>
                                    </div>
                                </div>
                            </Col>
                            <Col md={6} lg={4}>
                                <div className='cardinner-faq text-center max-380 m-auto pb-50'>
                                    <div className='card-icon'>
                                        <span className='circle-icon'>
                                            <Image alt="Image" src={fileblue} className="image-icon"></Image>
                                        </span>   
                                    </div>
                                    <div className='cardinner-descrip'>
                                        <h5>Can other info be added to an invoice?</h5>
                                        <p>At the moment, the only way to add additional information to invoices is to add the information to the workspace&rsquo;s name.</p>
                                    </div>
                                </div>
                            </Col>
                            <Col md={6} lg={4}>
                                <div className='cardinner-faq text-center max-380 m-auto pb-50'>
                                    <div className='card-icon'>
                                        <span className='circle-icon'>
                                            <Image alt="Image" src={billingBlue} className="image-icon"></Image>
                                        </span>   
                                    </div>
                                    <div className='cardinner-descrip'>
                                        <h5>How does billing work?</h5>
                                        <p>Plans are per workspace, not per account. You can upgrade one workspace, and still have any number of free workspaces.</p>
                                    </div>
                                </div>
                            </Col>
                            <Col md={6} lg={4}>
                                <div className='cardinner-faq text-center max-380 m-auto pb-50'>
                                    <div className='card-icon'>
                                        <span className='circle-icon'>
                                            <Image alt="Image" src={mailBlue} className="image-icon"></Image>
                                        </span>   
                                    </div>
                                    <div className='cardinner-descrip'>
                                        <h5>How do I change my account email?</h5>
                                        <p>You can change the email address associated with your account by going to untitled.com/account from a laptop or desktop.</p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>   
                </div>
            </div>

            <div className='question-cards'>
                <div className='container'>
                    <div className='question-innercard text-center'>
                        <div className='avtar-listing'>
                            <ul className='avtar-groupbx'>
                                <li>
                                    <span className='avtar-sml'>
                                        <Image alt="Image" src={Avatar2} className="image-icon"></Image>
                                    </span>
                                </li>
                                <li>
                                <span className='avtar-sml center-bx1'>
                                        <Image alt="Image" src={Avatar3} className="image-icon"></Image>
                                    </span>     
                                </li>
                                <li>
                                <span className='avtar-sml'>
                                        <Image alt="Image" src={Avatar4} className="image-icon"></Image>
                                    </span>
                                </li>
                            </ul>
                        </div> 
                        <div className='question-descrip'>
                            <h4>Still have questions?</h4>
                            <h5>Can&rsquo;t find the answer you&rsquo;re looking for? Please chat to our friendly team.</h5>
                            <div className='get-btnbx pt-30'>
                                <Link passHref href="#"><a className='get-touch btn-md-solid'>Get in touch</a></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='free-trail-main'>
                <div className='container'>
                    <div className='free-trail-inner text-center'>
                        <h3>Start your <span className='day-trial'>30-day</span> free trial</h3>
                        <h4>Join over 4,000+ startups already growing with Untitled.</h4>
                        <ul className='listing-btn-inner'>
                            <li className='order-2 order-md-1'>
                                <Link passHref href="#"><a className='btn-custm btn-md-outline'>Learn more</a></Link>
                            </li>
                            <li className='order-1 order-md-2'>
                                <Link passHref href="#"><a className='btn-custm btn-md-solid'>Get started</a></Link>
                            </li>
                        </ul>
                    </div>
                    <div className='bg-innerbx'>
                        <div className="desktop-bg">
                            <Image alt="Image" src={customerBg} ></Image>
                        </div>
                        <div className="mobile-bg">
                        <Image alt="Image" src={customerBgMobile} className="mobile-bg" layout="responsive"></Image>
                        </div>
                        
                    </div>
                </div>
            </div>

            <div className='footer-section'>
                <Container>
                    <div className='footer-section-inner'>
                        <Row>
                            <Col lg={3} xxl={3}>
                                <div className='footer-logobx'>
                                    <div className='logo-contain'>
                                    <Link passHref href="/"><a> <Image alt="Image" src={logo} /> </a></Link>
                                    </div>
                                    <p>Design amazing digital experiences that create more happy in the world.</p>
                                </div>
                            </Col>
                            <Col lg={9} xxl={9}>
                                <div className='ftr-menulist'>
                                    <Row className='custm-row'>
                                        <Col className='custom-box'>
                                            <div className='ftr-menubar-outer'>
                                                <h5>Product</h5>
                                                <ul className='ftr-listing-menu'>
                                                    <li>
                                                        <Link passHref href="#">
                                                        <a className='ftr-inner-lisitng'>Overview</a>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link passHref href="#">
                                                        <a className='ftr-inner-lisitng'>Features</a>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link passHref href="#">
                                                            <a className='ftr-inner-lisitng'>Solutions</a>
                                                        </Link>
                                                            <Badge pill className="green-badge">
                                                                New
                                                            </Badge>
                                                    </li>
                                                    <li>
                                                        <Link passHref href="#">
                                                        <a className='ftr-inner-lisitng'>Tutorials</a>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link passHref href="#">
                                                        <a className='ftr-inner-lisitng'>Pricing</a>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link passHref href="#">
                                                        <a className='ftr-inner-lisitng'>Releases</a>
                                                        </Link>
                                                    </li>

                                                </ul>
                                            </div>
                                        </Col>
                                        <Col className='custom-box'>
                                            <div className='ftr-menubar-outer'>
                                                <h5>Company</h5>
                                                <ul className='ftr-listing-menu'>
                                                    <li>
                                                        <Link passHref href={`${BASE_URL}/about`}>
                                                        <a className='ftr-inner-lisitng'>About us</a>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link passHref href="#">
                                                        <a className='ftr-inner-lisitng'>Careers</a>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link passHref href="#">
                                                            <a className='ftr-inner-lisitng'>Press</a>
                                                        </Link>
                                                       
                                                    </li>
                                                    <li>
                                                        <Link passHref href="#">
                                                        <a className='ftr-inner-lisitng'>News</a>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link passHref href="#">
                                                        <a className='ftr-inner-lisitng'>Media kit</a>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link passHref href={`${BASE_URL}/contact`}>
                                                        <a className='ftr-inner-lisitng'>Contact</a>
                                                        </Link>
                                                    </li>

                                                </ul>
                                            </div>
                                        </Col>
                                        <Col className='custom-box'>
                                            <div className='ftr-menubar-outer'>
                                                <h5>Resources</h5>
                                                <ul className='ftr-listing-menu'>
                                                    <li>
                                                        <Link passHref href="#">
                                                        <a className='ftr-inner-lisitng'>Blog</a>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link passHref href="#">
                                                        <a className='ftr-inner-lisitng'>Newsletter</a>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link passHref href="#">
                                                            <a className='ftr-inner-lisitng'>Events</a>
                                                        </Link>
                                                       
                                                    </li>
                                                    <li>
                                                        <Link passHref href="#">
                                                        <a className='ftr-inner-lisitng'>Help centre</a>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link passHref href="#">
                                                        <a className='ftr-inner-lisitng'>Tutorials</a>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link passHref href="#">
                                                        <a className='ftr-inner-lisitng'>Support</a>
                                                        </Link>
                                                    </li>

                                                </ul>
                                            </div>
                                        </Col>
                                        <Col className='custom-box'>
                                            <div className='ftr-menubar-outer'>
                                                <h5>Social</h5>
                                                <ul className='ftr-listing-menu'>
                                                    <li>
                                                        <Link passHref href="#">
                                                        <a className='ftr-inner-lisitng'>Twitter</a>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link passHref href="#">
                                                        <a className='ftr-inner-lisitng'>Twitter</a>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link passHref href="#">
                                                            <a className='ftr-inner-lisitng'>Facebook</a>
                                                        </Link>
                                                       
                                                    </li>
                                                    <li>
                                                        <Link passHref href="#">
                                                        <a className='ftr-inner-lisitng'>GitHub</a>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link passHref href="#">
                                                        <a className='ftr-inner-lisitng'>AngelList</a>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link passHref href="#">
                                                        <a className='ftr-inner-lisitng'>Dribbble</a>
                                                        </Link>
                                                    </li>

                                                </ul>
                                            </div>
                                        </Col>
                                        <Col className='custom-box'>
                                            <div className='ftr-menubar-outer'>
                                                <h5>Legal</h5>
                                                <ul className='ftr-listing-menu'>
                                                    <li>
                                                        <Link passHref href={`${BASE_URL}/terms`}>
                                                        <a className='ftr-inner-lisitng'>Terms</a>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link passHref href={`${BASE_URL}/privacy-policy`}>
                                                        <a className='ftr-inner-lisitng'>Privacy</a>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link passHref href="#">
                                                            <a className='ftr-inner-lisitng'>Cookies</a>
                                                        </Link>
                                                       
                                                    </li>
                                                    <li>
                                                        <Link passHref href="#">
                                                        <a className='ftr-inner-lisitng'>Licenses</a>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link passHref href="#">
                                                        <a className='ftr-inner-lisitng'>Settings</a>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link passHref href={`${BASE_URL}/contact`}>
                                                        <a className='ftr-inner-lisitng'>Contact</a>
                                                        </Link>
                                                    </li>

                                                </ul>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>

            <div className="footer-bototm">
                <Container>
                    <div className="copy-right">
                        <Row>
                            <Col md={6} className="order-md-2 order-md-1">
                            <div className="left">
                            <p>© 2077 Untitled UI. All rights reserved.</p>
                        </div>
                            </Col>
                            <Col md={6} className="order-md-1 order-md-2">
                            <div className="right">
                                <ul className='social-listing'>
                                    <li>
                                        <Link passHref href="#">
                                        <a className='social-listname'>
                                            <Image alt="Image" src={twiiter}></Image>
                                        </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link passHref href="#">
                                        <a className='social-listname'>
                                            <Image alt="Image" src={linkedin}></Image>
                                        </a>
                                        </Link>
                                        </li>
                                        <li>
                                        <Link passHref href="#">
                                        <a className='social-listname'>
                                            <Image alt="Image" src={facebook}></Image>
                                        </a>
                                        </Link>
                                        </li>
                                        <li>
                                        <Link passHref href="#">
                                        <a className='social-listname'>
                                            <Image alt="Image" src={github}></Image>
                                        </a>
                                        </Link>
                                        </li>
                                        <li>
                                        <Link passHref href="#">
                                        <a className='social-listname'>
                                            <Image alt="Image" src={Socialicon}></Image>
                                        </a>
                                        </Link>
                                        </li>
                                        <li>
                                        <Link passHref href="#">
                                        <a className='social-listname'>
                                            <Image alt="Image" src={dribble}></Image>
                                        </a>
                                        </Link>
                                    </li>
                                    
                            </ul>
                            </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default FAQ;