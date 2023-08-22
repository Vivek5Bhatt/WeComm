import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { Form, Button } from 'react-bootstrap';

/* Images */
import seticon from '@/assets/images/set-icon.svg';
import backicon from '@/assets/images/back-ico.svg';
import messageicon from '@/assets/images/message.svg';

/* config */
import { APP_NAME, BASE_URL, EMAIL_REGEX } from '/environment';
import { useUserState } from '/context';
import { successToast, errorToast } from '@/services/toaster';

/* API Functions */
import Loader from '@/components/loader';
import { forgotPassword, resendToken, verifyToken, resetPassword } from "@/api/authentication";

const ForgotPassword = () => {
    const userState = useUserState();
    const [status, setStatus] = useState('forgot'); // forgot, otp, reset
    const [OTPCODE, setOTPCode] = useState({
        first: '',
        second: '',
        third: '',
        fourth: ''
    });

    const [formData, setFormData] = useState({
        email: '',
        code: '',
        password:  '',
        password_confirmation: ''
    });

    const [errors, setErrors] = useState({
        email: '',
        code: '',
        password:  '',
        password_confirmation: ''
    });

    const submitForgotForm = async(event) => {
        event.preventDefault();
        const button = document.getElementById('send-email');
        button.disabled = true;

        let validationErrors = {};

        if (formData.email == '') {
            validationErrors['email'] = 'The email field is required.';
        } else if (EMAIL_REGEX.test(formData.email) === false) {
            validationErrors['email'] = 'The entered email is invalid.';
        }

        if (Object.keys(validationErrors).length > 0) {
            setErrors({ ...errors, ...validationErrors });
            errorToast('The given data is invalid!');
            button.disabled = false;
            return false;
        }

        userState.incrementIsLoading();
        const response = await forgotPassword({ email: formData.email });

        if (response?.statusCode === 200) {
            successToast(response?.message);
            button.disabled = false;
            setStatus('otp');
            userState.decrementIsLoading();
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
    }

    const resendOTP = async(event) => {
        event.target.disabled = true;
        userState.incrementIsLoading();
        const response = await resendToken({ email: formData.email });

        if (response?.statusCode === 200) {
            successToast(response?.message);
        }

        event.target.disabled = true;
        userState.decrementIsLoading();
    }

    const toggleBox = async(event, index) => {
        const column = (index === 1 ? 'first' : ( index === 2 ? 'second' : ( index === 3 ? 'third' : 'fourth' )));

        if (event.target.value && !isNaN(parseInt(event.nativeEvent.data))) {
            const element = document.getElementsByClassName(`code-box-${index + 1}`);
            OTPCODE[column] = event.target.value;
            setOTPCode({ ...OTPCODE });

            if (index === 4) {
                const elementArr = document.getElementsByClassName('code-fld');
                let emptyBox = false;

                for (let i = 0; i < elementArr.length; i++) {
                    const ele = elementArr[i];
                    if (!ele.value.trim()) { emptyBox = ele; break; }                    
                }

                if (!emptyBox) {
                    event.target.blur();
                } else {
                    emptyBox.focus();
                }

            } else {
                element[0].focus();
            }

            setFormData({ ...formData, code: Object.values(OTPCODE).join('') });
        } else if (!event.target.value) {
            OTPCODE[column] = event.target.value;
            setOTPCode({ ...OTPCODE });
            setFormData({ ...formData, code: Object.values(OTPCODE).join('') });
        }
    }

    const submitOTPForm = async(event) => {
        event.preventDefault();
        const button = document.getElementById('verify-otp');
        button.disabled = true;

        let error = '';

        if (formData.code == '') {
            error = 'Please enter otp code.';
        } else if (formData.code.length !== 4) {
            error = 'Please enter otp code.';
        }

        if (error) {
            errorToast(error);
            button.disabled = false;
            return false;
        }

        userState.incrementIsLoading();
        const response = await verifyToken({ code: formData.code });

        if (response?.statusCode === 200) {
            successToast(response?.message);
            button.disabled = false;
            setStatus('reset');
            userState.decrementIsLoading();
        } else if (response?.statusCode === 498) {
            errorToast(response?.message);
            button.disabled = false;
            userState.decrementIsLoading();
            return false;
        }
    }

    const submitResetForm = async(event) => {
        event.preventDefault();
        const button = document.getElementById('reset-password');
        button.disabled = true;

        let validationErrors = {};

        if (formData.password == '') {
            validationErrors['password'] = 'The password field is required.';
        } else if (formData.password.length < 8) {
            validationErrors['password'] = 'The password field must be at least 8 characters long.';
        } else if (formData.password !== formData.password_confirmation) {
            validationErrors['password'] = 'The password confirmation does not match.';
        }

        if (Object.keys(validationErrors).length > 0) {
            setErrors({ ...errors, ...validationErrors });
            errorToast('The given data is invalid!');
            button.disabled = false;
            return false;
        }

        userState.incrementIsLoading();
        let payload = formData;
        delete payload.email;

        const response = await resetPassword(payload);

        if (response?.statusCode === 200) {
            successToast(response?.message);
            button.disabled = false;
            setStatus('reset');
            userState.decrementIsLoading();
            setTimeout(() => { window.location.href = '/login'; }, 2000);
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
        } else if (response?.statusCode === 498) {
            errorToast(response?.message);
            button.disabled = false;
            userState.decrementIsLoading();
            return false;
        }
    }

    return (
        <div className="container login-container">
            <Head>
                <title>{`${APP_NAME} | Forgot Password`}</title>
            </Head>

            <Loader></Loader>

            <div className={`verify-container ${(status === 'otp') ? 'align-center' : ''}`}>
                <div className={`signup-ico ${(status !== 'otp') ? 'align-center' : ''}`}>
                    <Image alt="Image" src={(status !== 'otp') ? seticon : messageicon} />
                </div>

                <h2 className="align-center mb-4">
                    { (status === 'reset') ? 'Email verified' : ((status === 'otp') ? 'Check your email' : 'Forgot Password') }
                </h2>

                {
                    (status === 'reset') &&
                        <>
                            <p className="align-center">Your new password must be different to previously used passwords.</p>
                            <Form className="mt-3" onSubmit={(event) => submitResetForm(event)}>
                                <Form.Group className="mb-3" controlId="password">
                                    <Form.Label className="label-bx">Password</Form.Label>
                                    <Form.Control
                                        type="password"
                                        placeholder="Password"
                                        className="field-bx"
                                        isInvalid={errors.password ? true : false}
                                        value={formData.password}
                                        onChange={(e) => {
                                            setErrors({ ...errors, password: '' });
                                            setFormData({ ...formData, password: e.target.value });
                                        }}
                                    />
                                    <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group className="mb-4" controlId="passwordConfiramtion">
                                    <Form.Label className="label-bx">Password Confirmation</Form.Label>
                                    <Form.Control
                                        type="password"
                                        placeholder="Password Confirmation"
                                        className="field-bx"
                                        value={formData.password_confirmation}
                                        onChange={(e) => {
                                            setErrors({ ...errors, password_confirmation: '' });
                                            setFormData({ ...formData, password_confirmation: e.target.value });
                                        }}
                                    />
                                </Form.Group>
                                <Button className="signin-btn mb-4" id="reset-password" type="submit" onClick={(event) => submitResetForm(event)}>Set new password</Button>
                            </Form>
                        </>
                }
                {
                    (status === 'otp') &&
                        <>
                            <p className="align-center">We sent a verification link to
                                <span><strong>{formData.email}</strong></span>
                            </p>

                            <Form className="mt-3" onSubmit={(event) => submitOTPForm(event)}>
                                <div className="code-fields">
                                    <Form.Control
                                        type="text"
                                        className="code-fld code-box-1"
                                        maxLength={1}
                                        value={OTPCODE.first}
                                        onChange={(e) => toggleBox(e, 1)}
                                    />

                                    <Form.Control
                                        type="text"
                                        className="code-fld code-box-2"
                                        maxLength={1}
                                        value={OTPCODE.second}
                                        onChange={(e) => toggleBox(e, 2)}
                                    />

                                    <Form.Control
                                        type="text"
                                        className="code-fld code-box-3"
                                        maxLength={1}
                                        value={OTPCODE.third}
                                        onChange={(e) => toggleBox(e, 3)}
                                    />

                                    <Form.Control
                                        type="text"
                                        className="code-fld code-box-4"
                                        maxLength={1}
                                        value={OTPCODE.fourth}
                                        onChange={(e) => toggleBox(e, 4)}
                                    />

                                </div>
                                <Button
                                    type="submit"
                                    id="verify-otp"
                                    className="verify-btn"
                                    onClick={(event) => submitOTPForm(event)}
                                >
                                    Verify email
                                </Button>

                                <p className="resend-txt">
                                    Didn’t receive the email?
                                    <Button
                                        variant="light"
                                        className="ms-2 resend-btn"
                                        onClick={(event) => resendOTP(event)}
                                    >Click To Resend</Button>
                                </p>
                            </Form>
                        </>
                }
                {
                    (status === 'forgot') &&
                        <>
                            <p className="align-center">Verify your email to reset password.</p>
                            <Form className="mt-3" onSubmit={(event) => submitForgotForm(event)}>
                                <Form.Group className="mb-4" controlId="email">
                                    <Form.Label className="label-bx">Email</Form.Label>
                                    <Form.Control
                                        type="email"
                                        placeholder="Enter your email"
                                        className="field-bx"
                                        isInvalid={errors.email ? true : false}
                                        value={formData.email}
                                        onChange={(e) => {
                                            setErrors({ ...errors, email: '' });
                                            setFormData({ ...formData, email: e.target.value });
                                        }}
                                    />
                                    <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group className="mb-4">
                                    <Button className="signin-btn" id="send-email" type="submit" onClick={(event) => submitForgotForm(event)}>Send Email</Button>
                                </Form.Group>
                            </Form>
                        </>
                }

                <Link passHref href={`${BASE_URL}/login`}>
                    <a className="back-btn">
                        <span><Image alt="Image" src={backicon} /></span> Back to log in
                    </a>
                </Link>
            </div>
        </div>
    )
}

export default ForgotPassword;