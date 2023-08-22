import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { Row, Container, Col } from 'react-bootstrap';

/* Images */
import diagram from "@/assets/images/diagram.svg";

/* components */
import Loader from '@/components/loader';
import TopBar from '@/components/topbar';
import Footer2 from '@/components/footer2';

/* environment */
import { APP_NAME, BASE_URL } from '/environment';

const AboutUs = () => {
    return (
        <div className="wrapper">
            <Head>
                <title>{`${APP_NAME} | About Us`}</title>
            </Head>

            <Loader></Loader>

            <div className="top-bar">
                <TopBar />
            </div>

            <div className="about-one">
                <Container>
                    <div className="ab-inner">
                        <div className="small-heading">About us</div>
                        <h1>What is WeComm?</h1>
                        <p>WeComm is an all in one platform for marketplaces, digital marketing, 1P (First Party Solutions), fulfillment/logistics, order management, product management, and networking.</p>
                    </div>
                </Container>
            </div>

            <div className="solution-bx">
                <Container>
                    <div className="solution-in">
                        <Row className="align-items-center">
                            <Col md={5}>
                                <div className="diagram-img"> <Image src={diagram} alt="Diagram" /> </div>
                            </Col>
                            <Col md={7}>
                                <div className="sol-content">
                                    <div className="sl-box">
                                        <h6>All-in-one solution</h6>
                                        <p>Manage all your product data and e-commerce operations, for all marketplaces in a single platform. We&rsquo;ll make sure to provide you solutions, from orders, logistics, and customer journey.</p>
                                    </div>
                                    <div className="sl-box">
                                        <h6>Frictionless experience</h6>
                                        <p>Make expanding your business less intimidating. We will make your life easier, free help with optimizations and strategy, and will help expand your global e-commerce presence with ease.</p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>

            <div className="vision-holder">
                <Container>
                    <div className="vision-in align-center">
                        <div className="small-heading">Our vision</div>
                        <h2>It&rsquo;s in our name WeComm: <br />“World eCommerce.”<br /> We see the demand and we would like to help our users fill that demand.</h2>
                        <Row>
                            <Col md={4}>
                                <div className="vs-box">
                                    <h5>Make it easy</h5>
                                    <p>WEcomm was founded with the goal of creating a simple and easy to use platform for any business or individual to scale and grow their online business without the fear of limited resources or the complexities of international markets.</p>
                                </div>
                            </Col>
                            <Col md={4}>
                                <div className="vs-box">
                                    <h5>Make it global</h5>
                                    <p>There has been an increase in demand for more international cross-border sellers across the globe. But there are businesses that are struggling to navigate on how to sell internationally for numerous reasons. We would like to bridge that gap for our users. The goal is to help businesses grow in their domestic markets and also help build their brand and grow their sales across the world.</p>
                                </div>
                            </Col>
                            <Col md={4}>
                                <div className="vs-box">
                                    <h5>Make it grow</h5>
                                    <p>For us, it&rsquo;s not about getting you there and then forgetting about you. It&rsquo;s about helping businesses succeed in implementing omni-channel marketplace strategies. To see the growth in their domestic markets, and to help them branch out through cross border international commerce.</p>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>

            <div className="story-section">
                <Container>
                    <div className="story-in">
                        <div className="small-heading">Our story</div>
                        <h2>What makes us different?</h2>
                        <p className="mt-3">We are designing a powerful tool with the user in mind.</p>
                        <Row className="mt-5">
                            <Col lg={6}>
                                <div className="lft-box">
                                    <p>What sets us apart in general is the fact that we are a complete full service platform that&rsquo;ll give you full control over your orders, products, logistics, marketing, reporting, and more. Our developers will integrate and work to connect our systems with yours and fix any issues. Or we&rsquo;ll provide you with exact documentation on how to integrate with our APIs. We work with FTP as well. We are a platform but also a company that is catered to our users. We built and are continuing to build improvements to our platform to make it easier for our users, to provide the user tools to be successful without any coding or clicking through multiple pages. </p>
                                </div>
                            </Col>
                            <Col lg={6}>
                                <div className="tr-box">
                                    <p>The other aspect of what sets us apart is the amount of international marketplaces we have partnered with and will continue to partner with to help our users grow internationally.</p>
                                    <p className="mt-5">We truly desire to be a part of your marketplace journey and it&rsquo;s our promise to be right there to help you.</p>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>

            <div className="join-box">
                <Container>
                    <div className="j-box-in align-center">
                        <h3>Revolutionize your ecommerce omni-channel strategy with us.</h3>
                        <p>Be the first to know when new jobs are posted!</p>
                        <div className="btn-jn"> <Link href={`${BASE_URL}/home`} passHref><a>Join Now</a></Link> </div>
                    </div>
                </Container>
            </div>

            <div className="footer-main">
                <Footer2 />
            </div>
        </div>
    )
}

export default AboutUs;