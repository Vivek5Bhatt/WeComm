import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { Row, Button, Container, Col, Form } from 'react-bootstrap';
import { useUserState } from '/context';
import { successToast, errorToast } from '@/services/toaster';

/* Images */
import globe from '@/assets/images/globe.svg';

/* API Functions */
import { storeUserQueries } from "@/api/interestList";

/* components */
import TopBar from '@/components/topbar';
import Footer2 from '@/components/footer2';
import Loader from '@/components/loader';

/* config */
import { APP_NAME, BASE_URL, EMAIL_REGEX } from '/environment';

const ContactUs = () => {
    const userState = useUserState();
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        message: '',
        accept_terms: false
    });

	const [errors, setErrors] = useState({
        first_name: '',
        last_name: '',
        email: '',
        message: '',
        accept_terms: false
	});

	const validate = async () => {
		let invalidInputs = {}

		if (formData.first_name == '') {
			invalidInputs['first_name'] = 'The first name field is required.';
		}

		if (formData.last_name == '') {
			invalidInputs['last_name'] = 'The last name field is required.';
		}

        if (formData.email == '') {
			invalidInputs['email'] = 'The email field is required.';
		} else if (EMAIL_REGEX.test(formData.email) === false) {
			invalidInputs['email'] = 'The provided email is invalid.';
		}

		if (formData.message === '') {
			invalidInputs['message'] = 'The message field is required.';
		}

        if (formData.accept_terms !== true) {
			invalidInputs['accept_terms'] = 'Please check privacy policy before submit.';
        }

		return invalidInputs;
	};

    const submitFormData = async (event) => {
        event.target.disabled = true;

        const validationErrors = await validate();
        if (Object.keys(validationErrors).length) {
            setErrors({ ...errors, ...validationErrors });
            errorToast('The given data is invalid!');
            document.getElementsByClassName('ct-form')[0].scrollIntoView({ behavior: "smooth" });
            event.target.disabled = false;
            return false;
        }

        userState.incrementIsLoading();
        const response = await storeUserQueries(formData);

        if (response?.statusCode === 200) {
            successToast('Your query saved successfully we will contact you soon.');
            setFormData({ first_name: '', last_name: '', email: '', message: '', accept_terms: false });
            userState.decrementIsLoading();
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
                document.getElementsByClassName('ct-form')[0].scrollIntoView({ behavior: "smooth" });
                return false;
            }
        }

        event.target.disabled = false;
        userState.decrementIsLoading();
    }

    return (
        <div className="wrapper">
            <Head>
                <title>{`${APP_NAME} | Contact Us`}</title>
            </Head>

            <Loader></Loader>

            <div className="top-bar">
                <TopBar />
            </div>

            <div className="contact-main">
                <Container>
                    <div className="contact-in">
                        <Row className="align-items-center">
                            <Col md={5}>
                                <div className="ct-form">
                                    <h2>Get in touch</h2>
                                    <p>Our friendly team would love to hear from you.</p>
                                    <Form noValidate>
                                        <Row>
                                            <Col md={6}>
                                                <Form.Group className="mb-4" controlId="firstName">
                                                    <Form.Label>First Name</Form.Label>
                                                    <Form.Control
                                                        type="text"
                                                        placeholder="First Name"
                                                        value={formData.first_name}
                                                        className={`${errors.first_name ? 'is-invalid' : ''}`}
                                                        onChange={(e) => {
                                                            setErrors({ ...errors, first_name: '' });
                                                            setFormData({ ...formData, first_name: e.target.value });
                                                        }}
                                                    />
                                                    <Form.Control.Feedback type="invalid">{errors.first_name}</Form.Control.Feedback>
                                                </Form.Group>
                                            </Col>
                                            <Col md={6}>
                                                <Form.Group className="mb-4" controlId="lastName">
                                                    <Form.Label>Last Name</Form.Label>
                                                    <Form.Control
                                                        type="text"
                                                        placeholder="Last Name"
                                                        value={formData.last_name}
                                                        className={`${errors.last_name ? 'is-invalid' : ''}`}
                                                        onChange={(e) => {
                                                            setErrors({ ...errors, last_name: '' });
                                                            setFormData({ ...formData, last_name: e.target.value });
                                                        }}
                                                    />
                                                    <Form.Control.Feedback type="invalid">{errors.last_name}</Form.Control.Feedback>
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                        <Form.Group className="mb-4" controlId="email">
                                            <Form.Label>Email address</Form.Label>
                                            <Form.Control
                                                type="email"
                                                placeholder="Enter email"
                                                value={formData.email}
                                                className={`${errors.email ? 'is-invalid' : ''}`}
                                                onChange={(e) => {
                                                    setErrors({ ...errors, email: '' });
                                                    setFormData({ ...formData, email: e.target.value });
                                                }}
                                            />
                                            <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
                                        </Form.Group>
                                        <Form.Group className="mb-4" controlId="message">
                                            <Form.Label>Message</Form.Label>
                                            <Form.Control
                                                as="textarea"
                                                rows={3}
                                                placeholder="Leave us a message..."
                                                value={formData.message}
                                                className={`${errors.message ? 'is-invalid' : ''}`}
                                                onChange={(e) => {
                                                    setErrors({ ...errors, message: '' });
                                                    setFormData({ ...formData, message: e.target.value });
                                                }}
                                            />
                                            <Form.Control.Feedback type="invalid">{errors.message}</Form.Control.Feedback>
                                        </Form.Group>
                                        <Form.Group controlId="terms" className="mb-4">
                                            <Form.Label className={`agree-text ${errors.accept_terms ? 'is-invalid' : ''}`}>
                                                <Form.Check
                                                    type="checkbox"
                                                    className="check-txt"
                                                    defaultChecked={formData.accept_terms}
                                                    onChange={(e) => {
                                                        setErrors({ ...errors, accept_terms: '' });
                                                        setFormData({ ...formData, accept_terms: e.target.checked });
                                                    }}
                                                /> 
                                                I agree to the <Link href={`${BASE_URL}/privacy-policy`} passHref><a>privacy policy</a></Link>.
                                            </Form.Label>
                                            <Form.Control.Feedback type="invalid">{errors.accept_terms}</Form.Control.Feedback>
                                        </Form.Group>
                                        <Button className="send-btn" type="button" onClick={(event) => submitFormData(event)}>Send message</Button>
                                    </Form>
                                </div>
                            </Col>

                            <Col md={7}>
                                <div className="ct-right">
                                    <div className="img"> <Image alt="Image" src={globe} /> </div>
                                    <h3 className="align-center">A simple solution for Global E-commerce</h3>
                                    <p className="align-center">Revolutionize your ecommerce omni-channel strategy with us. Come grow with us!</p>
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

export default ContactUs;