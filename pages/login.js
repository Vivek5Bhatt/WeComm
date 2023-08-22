import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { Form, Button } from 'react-bootstrap';

import { useUserState } from '/context';
import { successToast, errorToast } from '@/services/toaster';

/* Images */
import logo from '@/assets/images/logo.svg';
import mobileLogo from '@/assets/images/logo-old.svg';
import linetop from '@/assets/images/line-top.svg';
import heroasset from '@/assets/images/hero-asset.svg';
import linebottom from '@/assets/images/line-bottom.svg';
import googleicon from "@/assets/images/google-icon.svg";

/* API Functions */
import { loginUser } from "@/api/authentication";

/* config */
import { APP_NAME, BASE_URL, EMAIL_REGEX } from '/environment';

/* components */
import TopBar from '@/components/topbar';
import Loader from '@/components/loader';

const Login = () => {
    const router = useRouter();
    const userState = useUserState();

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const [errors, setErrors] = useState({
        email: '',
        password: ''
    });

    const validate = async () => {
        let invalidInputs = {}

        if (formData.email == '') {
            invalidInputs['email'] = 'The email field is required.';
        } else if (EMAIL_REGEX.test(formData.email) === false) {
            invalidInputs['email'] = 'The entered email is invalid.';
        }

        if (formData.password === '') {
            invalidInputs['password'] = 'The password field is required.';
        }

        return invalidInputs;
    };

    const submitFormData = async (event) => {
        event.preventDefault();
        const button = document.getElementById('login-btn');
        button.disabled = true;

        const validationErrors = await validate();
        if (Object.keys(validationErrors).length) {
            setErrors({ ...errors, ...validationErrors });
            errorToast('The given data is invalid!');
            button.disabled = false;
            return false;
        }

        userState.incrementIsLoading();
        const response = await loginUser(formData);

        if (response?.statusCode === 200) {
            successToast(response?.message);
            userState.loggedInUser(response?.data);
        } else if (response?.statusCode === 422) {
            let validationErrors = {};
            const errros = response?.errors || {};

            for (const key in errros) { validationErrors[key] = errros[key][0]; }

            if (Object.keys(validationErrors).length) {
                setErrors({ ...errors, ...validationErrors });
                button.disabled = false;
                userState.decrementIsLoading();
                return false;
            }
        }

        if (response?.statusCode !== 200) {
            setFormData({ ...formData, password: '' });
            button.disabled = false;
            userState.decrementIsLoading();
            return false;
        } else {
            userState.decrementIsLoading();
            router.push({ pathname: '/dashboard' });
        }
    }

    return (
        <div className="login-container">
            <Head>
                <title>{`${APP_NAME} | Login`}</title>
            </Head>

            <Loader></Loader>

            <div className="top-bar login-topbar">
                <TopBar />
            </div>

            <div className="login-in">
                <div className="login-left">
                    <div className="top-sec"><Image src={linetop} alt="linetop" /></div>
                    <div className="globe-sec"><Image src={heroasset} alt="heroasset" /></div>
                    <div className="bottom-sec"><Image src={linebottom} alt="linebottom" /></div>
                </div>

                <div className="login-right">
                    <div className="login-form">
                        <div className="logo-bx">
                            <Link passHref href={`${BASE_URL}/`}><a><Image src={logo} alt="Logo" /></a></Link>
                            <Link passHref href={`${BASE_URL}/`}><a className="mobile-logo d-none"><Image src={mobileLogo} alt="Logo" /></a></Link>
                        </div>
                        <h2>Log in</h2>
                        <p>Welcome back! Please enter your details.</p>
                        <Form noValidate id="loginform" onSubmit={(event) => submitFormData(event)}>
                            <Form.Group className="mb-3" controlId="formEmail">
                                <Form.Label className="label-bx">Email address</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="Enter email"
                                    className={`field-bx ${errors.email ? 'is-invalid' : ''}`}
                                    value={formData.email}
                                    onChange={(e) => {
                                        setErrors({ ...errors, email: '' });
                                        setFormData({ ...formData, email: e.target.value });
                                    }}
                                />
                                <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formPassword">
                                <Form.Label className="label-bx">Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="Password"
                                    className={`field-bx ${errors.password ? 'is-invalid' : ''}`}
                                    value={formData.password}
                                    onChange={(e) => {
                                        setErrors({ ...errors, password: '' });
                                        setFormData({ ...formData, password: e.target.value });
                                    }}
                                />
                                <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <div className="check-bar">
                                    <Form.Check type="checkbox" className="check-bx-in" label="Remember for 30 days" />
                                    <Link passHref href={`${BASE_URL}/forgot-password`}>Forgot password</Link>
                                </div>
                            </Form.Group>

                            <div className="mb-5">
                                <Button className="signin-btn" id="login-btn" type="submit" onClick={(event) => submitFormData(event)}>Sign in</Button>
                            </div>

                            <div className="mb-3">
                                <Button className="gl-btn" type="button">
                                    <Image src={googleicon} alt="Google Icon" /> Sign in with Google
                                </Button>
                            </div>

                            <p className="signup-link">Don&rsquo;t have an account?
                                <Link passHref href="/home">Join Interest List</Link>
                            </p>
                        </Form>
                    </div>

                    <div className="copyright-txt"><p>© Wecomm {new Date().getFullYear()}</p></div>
                </div>
            </div>
        </div>
    )
}

export default Login;