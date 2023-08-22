import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { Row, Container, Col } from 'react-bootstrap';

import error from "@/assets/images/error-img.svg";

/* components */
import TopBar from '@/components/topbar';
import Footer2 from '@/components/footer2';

/* environment */
import { APP_NAME, BASE_URL } from '/environment';

const Error = () => {
    return (
        <div className="wrapper">
            <Head>
                <title>{`${APP_NAME} | 404`}</title>
            </Head>

            <div className="top-bar">
                <TopBar />
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
                                    <div className="er-btn">
                                        <Link href={`${BASE_URL}/`} passHref><a>Go back home</a></Link>
                                    </div>
                                </div>
                            </Col>

                            <Col md={5}>
                                <div className="er-image">
                                    <Image src={error} alt="Error" />
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>

            <div className="footer-main">
                <Footer2 />
            </div>
        </div>
    )
}

export default Error;