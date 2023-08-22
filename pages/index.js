import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { Row, Container, Col } from 'react-bootstrap';
import { useUserState } from '/context';

/* Images */
import globe from "@/assets/images/globe.svg";
import amazon from "@/assets/images/amazon.svg";
import shopify from "@/assets/images/shopify.svg";
import coupang from "@/assets/images/coupang.svg";
import bannerbg from "@/assets/images/banner-bg.svg";
import feature1 from "@/assets/images/feature-1.svg";
import feature2 from "@/assets/images/feature-2.svg";
import feature3 from "@/assets/images/feature-3.svg";
import feature4 from "@/assets/images/feature-4.svg";
import feature5 from "@/assets/images/feature-5.svg";
import feature6 from "@/assets/images/feature-6.svg";
import rightico from "@/assets/images/right-ico.svg";

/* components */
import TopBar from '@/components/topbar';
import Footer from '@/components/footer';
import Loader from '@/components/loader';

/* config */
import { APP_NAME, BASE_URL } from '/environment';

const Home = () => {
    const userState = useUserState();

    return (
        <div className="wrapper">
            <Head>
                <title>{`${APP_NAME} | Home`}</title>
            </Head>

            <Loader></Loader>

            <div className="top-bar">
                <TopBar />
            </div>

            <div className="banner-holder">
                <div className="pattern-one">
                    <Image alt="Image" src={bannerbg} layout="responsive" />
                </div>

                <Container>
                    <div className="banner-in">
                        <Row className="align-items-center">
                            <Col md={6}>
                                <div className="banner-text">
                                    <h1>A simple solution for Global E-commerce</h1>
                                    <p>Revolutionize your ecommerce omni-channel strategy with us. Come grow with us!</p>
                                    {
                                        !userState.isAuth &&
                                        <div className="button-gp">
                                            <Link passHref href={`${BASE_URL}/home`} ><a className="btn-bx">Sign up</a></Link>
                                        </div>
                                    }
                                </div>
                            </Col>
                            <Col md={6}>
                                <div className="banner-img"> <Image alt="Image" src={globe} layout="responsive" /> </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>

            <div className="feature-holder">
                <Container>
                    <div className="feature-in">
                        <Row>
                            <Col md={4}>
                                <div className="box align-center">
                                    <div className="icon-bx"> <Image alt="Image" src={feature1} /> </div>
                                    <h3>Optimize</h3>
                                    <p>Manage all your product data, for all marketplaces in a single platform.</p>
                                </div>
                            </Col>
                            <Col md={4}>
                                <div className="box align-center">
                                    <div className="icon-bx"> <Image alt="Image" src={feature2} /> </div>
                                    <h3>Full Service</h3>
                                    <p>Make expanding your business less intimidating.</p>
                                </div>
                            </Col>
                            <Col md={4}>
                                <div className="box align-center">
                                    <div className="icon-bx"> <Image alt="Image" src={feature3} /> </div>
                                    <h3>Streamline</h3>
                                    <p>Manage all of your e-commerce operations in one place.</p>
                                </div>
                            </Col>
                            <Col md={4}>
                                <div className="box align-center">
                                    <div className="icon-bx"> <Image alt="Image" src={feature4} /> </div>
                                    <h3>Dedicated Help</h3>
                                    <p>We will make your life easier, free help with optimizations and strategy.</p>
                                </div>
                            </Col>
                            <Col md={4}>
                                <div className="box align-center">
                                    <div className="icon-bx"> <Image alt="Image" src={feature5} /> </div>
                                    <h3>Simplify</h3>
                                    <p>Expand your global e-commerce presence with ease.</p>
                                </div>
                            </Col>
                            <Col md={4}>
                                <div className="box align-center">
                                    <div className="icon-bx"> <Image alt="Image" src={feature6} /> </div>
                                    <h3>Versatility</h3>
                                    <p>All in one solutions provider, from orders, logistics, and customer journey.</p>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>

            <div className="integration-main">
                <Container>
                    <div className="integration-in">
                        <div className="min-heading"> <span>Integrations</span> </div>
                        <h3>Get more with marketplace integrations</h3>
                        <h5>Connect your stores...</h5>

                        <Row>
                            <Col md={4}>
                                <div className="int-box">
                                    <div className="icon"><Image alt="Image" src={amazon} /></div>
                                    <h3>Amazon</h3>
                                    <p>Work faster and smarter by integrating directly with Notion, right in the app.</p>
                                    <div className="link-bx">
                                        <Link passHref href={`${BASE_URL}/`}>
                                            <a>View integration <Image alt="Image" layout="fixed" src={rightico} /></a>
                                        </Link>
                                    </div>
                                </div>
                            </Col>
                            <Col md={4}>
                                <div className="int-box">
                                    <div className="icon"><Image alt="Image" src={coupang} /></div>
                                    <h3>Coupang</h3>
                                    <p>Work faster and smarter by integrating directly with Slack, right in the app.</p>
                                    <div className="link-bx">
                                        <Link passHref href={`${BASE_URL}/`}>
                                            <a>View integration <Image alt="Image" src={rightico} /></a>
                                        </Link>
                                    </div>
                                </div>
                            </Col>
                            <Col md={4}>
                                <div className="int-box">
                                    <div className="icon"><Image alt="Image" src={shopify} /></div>
                                    <h3>Shopify</h3>
                                    <p>Work faster and smarter by integrating directly with Google Drive, right in the app.</p>
                                    <div className="link-bx">
                                        <Link passHref href={`${BASE_URL}/`}>
                                            <a>View integration <Image alt="Image" src={rightico} /></a>
                                        </Link>
                                    </div>
                                </div>
                            </Col>
                        </Row>

                    </div>
                </Container>
            </div>

            <div className="footer-main">
                <Footer hideLinks={false} />
            </div>
        </div>
    )
}

export default Home;