import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { errorToast } from '@/services/toaster';
import { useUserState } from '/context';

import { Form, Button, Row, Col, Card } from 'react-bootstrap';

/* API Functions */
import { getShopifyIntegration, connectShopify } from '@/api/integrations';

/* config */
import { APP_NAME, BASE_URL } from '/environment';

/* components */
import Loader from '@/components/loader';
import SideBar from '@/components/dashboard/sidebar';

/* images */
import shopifyLogo from '@/assets/images/shopify.svg';
import checkIcon from '@/assets/images/tick-blue.svg';
import settingIcon from '@/assets/images/dsettings.svg';

const Shopify = () => {
    const userState = useUserState();
    const [integration, setIntegration] = useState({});
    const [shopifyCredentials, setShopifyCredentials] = useState({ shop_url: '' });

    const [errors, setErrors] = useState({ shop_url: '' });

    useEffect(() => {
        async function getInfo() {
            userState.incrementIsLoading();
            const apiRes = await getShopifyIntegration();
            if (apiRes?.data) {
                setIntegration(apiRes.data);
                setShopifyCredentials({ shop_url: apiRes.data?.credentials?.shop_url });
            }
            userState.decrementIsLoading();
        }

        getInfo();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    const submitShopifyCredentials = async (event) => {
        if (integration?.connected === true) { return false; }
        event.target.disabled = true;

        if (shopifyCredentials.shop_url.trim() === '') {
            setErrors({ ...errors, shop_url: 'The shop url field is required.' });
            errorToast('The given data is invalid!');
            event.target.disabled = false;
            return false;
        }

        userState.incrementIsLoading();
        const response = await connectShopify(shopifyCredentials);

        if (response?.statusCode === 200) {
            window.location.href = response.redirect_url;
        } else if (response?.statusCode === 422) {
            let validationErrors = {};
            const errros = response?.errors || {};

            for (const key in errros) {
                validationErrors[key] = errros[key][0];
            }

            if (Object.keys(validationErrors).length) {
                setErrors({ ...errors, ...validationErrors });
                event.target.disabled = false;
                userState.decrementIsLoading();
                return false;
            }
        }

        event.target.disabled = false;
    }

    return (
        <>
            <Head>
                <title>{`${APP_NAME} | Shopify`}</title>
            </Head>

            <Loader></Loader>

            <div className="register-container">
                <div className="register-inner">
                    <SideBar></SideBar>

                    <div className="ryt-container dash-right">
                        <div className="ryt-heading">
                            <h2 className="mn-heading marketplace-heading">
                                <Image alt="Image" src={shopifyLogo} />
                                <span> Shopify</span>
                            </h2>
                        </div>

                        <div className="min-links">
                        </div>

                        <div className="form-section mt-4">
                            <Row>
                                <Col lg={12}>
                                    <Card>
                                        <Card.Body>
                                            <Form noValidate>
                                                <Row>
                                                    <Col md={9}>
                                                        <Form.Group controlId="shopUrl">
                                                            <Form.Control
                                                                type="text"
                                                                placeholder="Enter your shop url"
                                                                value={shopifyCredentials.shop_url}
                                                                isInvalid={errors.shop_url ? true : false}
                                                                disabled={integration?.connected === true ? true : false}
                                                                onChange={(e) => {
                                                                    setErrors({ ...errors, shop_url: '' });
                                                                    setShopifyCredentials({ ...shopifyCredentials, shop_url: e.target.value });
                                                                }}
                                                            />
                                                            <Form.Control.Feedback type="invalid">{errors.shop_url}</Form.Control.Feedback>
                                                        </Form.Group>
                                                    </Col>
                                                    <Col md={3}>
                                                        <Button
                                                            variant="light"
                                                            type="button"
                                                            className="icon-btn"
                                                            onClick={(event) => submitShopifyCredentials(event)}
                                                        >
                                                            {
                                                                (integration?.connected === true) ?
                                                                    <>
                                                                        <span><Image alt="Image" src={checkIcon} /></span>
                                                                        Connected
                                                                    </>
                                                                :
                                                                    <>
                                                                        <span><Image alt="Image" src={settingIcon} /></span>
                                                                        Connect
                                                                    </>
                                                            }
                                                        </Button>
                                                    </Col>
                                                </Row>
                                            </Form>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </div>

                        {
                            (integration?.connected === true) &&
                            <Card className="mt-4">
                                <Card.Body>
                                    <Row className="justify-content-center">
                                        <Col md={12}>
                                            <Link passHref href={`${BASE_URL}/shopify/products`}>
                                                <a className="btn btn-success px-4 py-2 me-2"><h3 className="mb-0">Products</h3></a>
                                            </Link>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Shopify;