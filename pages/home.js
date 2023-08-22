import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { Form, Button } from 'react-bootstrap';

import { useUserState } from '/context';
import { successToast, errorToast } from '@/services/toaster';

/* Images */
import logo from '@/assets/images/logo.svg';
import featuredicon from '@/assets/images/featured-icon.svg';
import envelop from '@/assets/images/envelop.svg';
import arrowback from "@/assets/images/back-ico.svg";
import tickblue from "@/assets/images/tick-blue.svg";

/* API Functions */
import { storeInterestList } from "@/api/interestList";

/* config */
import { APP_NAME, BASE_URL, EMAIL_REGEX } from '/environment';

/* components */
import Loader from '@/components/loader';

const JoinInterestList = () => {
    const userState = useUserState();
    const [step, setWizardStep] = useState(0);
    const [isOnlineSeller, setIsOnlineSeller] = useState(false);

    const businessTypes = ["Brand", "Retailer", "Both"];
    const userTypes = ["Business Owner", "Independent Seller", "Both"];
    const titles = ["Let&rsquo;s get started", "Tell us your role", "eCommerce details", "You&rsquo;re all set!"];
    const gmvOptions = [
        "< $5,000,000.00 GMV / Annual",
        "< $18,000,000.00 GMV / Annual",
        "< $60,000,000.00 GMV / Annual",
        "< $200,000,000.00 GMV / Annual",
        "$201,000,000.00 GMV / Annual",
    ];

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone_number: '',
        description: '',
        interest_rating: '',
        user_type: '',
        business_type: '',
        currently_selling_online: 0,
        ecommerce_category: '',
        current_marketplace_list: '',
        monthly_gmv: '',
    });

    const [errors, setErrors] = useState({
        name: '',
        email: '',
        phone_number: ''
    });

    const toggleStatus = (status) => setIsOnlineSeller(status);
    const validate = async () => {
        let invalidInputs = {}

        if (formData.name == '') { invalidInputs['name'] = 'The name field is required.'; }

        if (formData.email == '') {
            invalidInputs['email'] = 'The email field is required.';
        } else if (EMAIL_REGEX.test(formData.email) === false) {
            invalidInputs['email'] = 'The entered email is invalid.';
        }

        if (formData.phone_number === '') {
            invalidInputs['phone_number'] = 'The phone number field is required.';
        } else if (formData.phone_number.length < 10) {
            invalidInputs['phone_number'] = 'The entered phone number is invalid.';
        }

        return invalidInputs;
    };

    const changeStep = async (backward = false) => {
        if (!backward && step === 0) {
            const validationErrors = await validate();
            if (Object.keys(validationErrors).length) {
                setErrors({ ...errors, ...validationErrors });
                errorToast('The given data is invalid!');
                document.getElementById('join-form').scrollIntoView({ behavior: "smooth" });
                return false;
            }
        }

        setWizardStep(backward ? --step : ++step);
    }

    const getRatingContent = () => {
        let content = [];
        for (let i = 1; i <= 5; i++) { content.push(<option key={i} value={i}>{i}</option>); }
        return content;
    };

    const submitFormData = async (event) => {
        event.target.disabled = true;
        userState.incrementIsLoading();
        const response = await storeInterestList(formData);

        if (response.statusCode === 200) {
            setWizardStep(step + 1);
            successToast('Registered Successfully.');

            setFormData({
                name: '',
                email: '',
                phone_number: '',
                description: '',
                interest_rating: '',
                user_type: '',
                business_type: '',
                currently_selling_online: '',
                ecommerce_category: '',
                current_marketplace_list: '',
                monthly_gmv: '',
            });
        } else if (response.statusCode === 422) {
            let validationErrors = {};
            const errros = response?.errors || {};

            for (const key in errros) { validationErrors[key] = errros[key][0]; }

            if (Object.keys(validationErrors).length) {
                setErrors({ ...errors, ...validationErrors });
                setWizardStep(0);
            }
        }

        event.target.disabled = true;
        userState.decrementIsLoading();
    }

    return (
        <div className="login-container">
            <Head>
                <title>{`${APP_NAME} | Join Interest List`}</title>
            </Head>

            <Loader></Loader>

            <div className="login-in">
                <div className="login-left signup-left">
                    <div className="signup-steps">
                        <Link href={`${BASE_URL}/`} passHref>
                            <a><div className="lft-logo"><Image alt="Image" src={logo}/></div></a>
                        </Link>

                        <ul>
                            <li className={`${step === 0 ? 'step-done' : 'complete-st'}`}>
                                <div className="dot">
                                    {   (step > 0)
                                            ? <span className="tick"><Image alt="icon" src={tickblue} /></span>
                                            : <span className="in-dot"></span>
                                    }
                                </div>
                                <div className="text">
                                    <h6>Let&rsquo;s get started</h6>
                                    <p>Please provide your name and email</p>
                                </div>
                            </li>
                            <li className={`${(step > 1) ? 'complete-st' : ((step === 1) ? 'step-done' : '')}`}>
                                <div className="dot">
                                    {   (step > 1)
                                            ? <span className="tick"><Image alt="icon" src={tickblue} /></span>
                                            : <span className="in-dot"></span>
                                    }
                                </div>
                                <div className="text">
                                    <h6>Your role</h6>
                                    <p>A few details about your company</p>
                                </div>
                            </li>
                            <li className={`${(step > 2) ? 'complete-st' : ((step === 2) ? 'step-done' : '')}`}>
                                <div className="dot">
                                    {   (step > 2)
                                            ? <span className="tick"><Image alt="icon" src={tickblue} /></span>
                                            : <span className="in-dot"></span>
                                    }
                                </div>
                                <div className="text">
                                    <h6>eCommerce details</h6>
                                    <p>Share posts to your social accounts</p>
                                </div>
                            </li>
                            <li className={`${(step > 3) ? 'complete-st' : ((step === 3) ? 'step-done' : '')}`}>
                                <div className="dot">
                                    {   (step > 3)
                                            ? <span className="tick"><Image alt="icon" src={tickblue} /></span>
                                            : <span className="in-dot"></span>
                                    }
                                </div>
                                <div className="text">
                                    <h6>Confirmation</h6>
                                    <p>Share posts to your social accounts</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="signup-btm">
                        <p>© Wecomm {new Date().getFullYear()}</p>
                        <a><span><Image alt="icon" src={envelop} /></span> help@wecomm.io</a>
                    </div>
                </div>

                <div className="login-right sign-right">
                    <div className="login-form">
                        <div className="signup-ico">
                            <Image alt="Image" src={featuredicon} />
                        </div>
                        <h2 className="align-center mb-4" dangerouslySetInnerHTML={{ __html: titles[step] }}></h2>
                        <Form noValidate id="join-form">
                            {step === 0 &&
                                <div className="pb-4">
                                    <Form.Group className="mb-3">
                                        <Form.Label className="label-bx">Name*</Form.Label>
                                        <Form.Control
                                            type="text"
                                            isInvalid={errors.name ? true : false}
                                            className="field-bx"
                                            placeholder="Enter your name"
                                            value={formData.name}
                                            onChange={(e) => {
                                                setErrors({ ...errors, name: '' });
                                                setFormData({ ...formData, name: e.target.value });
                                            }}
                                        />
                                        <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Label className="label-bx">Phone Number*</Form.Label>
                                        <Form.Control
                                            type="text"
                                            isInvalid={errors.phone_number ? true : false}
                                            className="field-bx"
                                            placeholder="Enter your Phone number"
                                            value={formData.phone_number}
                                            onChange={(e) => {
                                                setErrors({ ...errors, phone_number: '' });
                                                setFormData({ ...formData, phone_number: e.target.value });
                                            }}
                                        />
                                        <Form.Control.Feedback type="invalid">{errors.phone_number}</Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Label className="label-bx">Email*</Form.Label>
                                        <Form.Control
                                            type="email"
                                            isInvalid={errors.email ? true : false}
                                            className="field-bx"
                                            placeholder="Enter your email"
                                            value={formData.email}
                                            onChange={(e) => {
                                                setErrors({ ...errors, email: '' });
                                                setFormData({ ...formData, email: e.target.value });
                                            }}
                                        />
                                        <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <p className="mb-2">What markets, marketplaces or regions are you interested in? List all that apply.</p>
                                        <textarea
                                            rows={3}
                                            className="field-bx"
                                            placeholder="Enter your response here"
                                            value={formData.description}
                                            onChange={(e) => { setFormData({ ...formData, description: e.target.value }); }}
                                        ></textarea>
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <p className="mb-2">On a scale of 1-5, how interested are you in our product?</p>
                                        <Form.Select
                                            className="field-bx form-control"
                                            value={formData.interest_rating}
                                            onChange={(e) => { setFormData({ ...formData, interest_rating: e.target.value }); }}
                                        >
                                            <option value="">Select rating</option>
                                            {getRatingContent()}
                                        </Form.Select>
                                    </Form.Group>
                                </div>
                            }

                            {step === 1 &&
                                <div className="pb-4">
                                    <Form.Group className="mb-3">
                                        <p className="mb-2">How would you describe yourself?</p>
                                        <div className="radio-btns">
                                            {
                                                userTypes.map((userType, index) => (
                                                    <span key={index}>
                                                        <Form.Group className="mb-3" controlId={'user_type_' + index}>
                                                            <Form.Check
                                                                type="radio"
                                                                name="user_type"
                                                                label={userType}
                                                                checked={formData.user_type === userType}
                                                                value={userType}
                                                                onChange={(e) => { setFormData({ ...formData, user_type: e.target.value }); }}
                                                            />
                                                        </Form.Group>
                                                    </span>
                                                ))
                                            }
                                        </div>
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <p className="mb-2">Which of the following most closely describes your business?</p>
                                        <div className="radio-btns">
                                            {
                                                businessTypes.map((businessType, index) => (
                                                    <span key={index}>
                                                        <Form.Group className="mb-3" controlId={'business_type' + index}>
                                                            <Form.Check
                                                                type="radio"
                                                                name="business_type"
                                                                checked={formData.business_type === businessType}
                                                                label={businessType}
                                                                value={businessType}
                                                                onChange={(e) => { setFormData({ ...formData, business_type: e.target.value }); }}
                                                            />
                                                        </Form.Group>
                                                    </span>
                                                ))
                                            }
                                        </div>
                                    </Form.Group>
                                </div>
                            }

                            {step === 2 &&
                                <div className="pb-4">
                                    <Form.Group className="mb-3">
                                        <p className="mb-2">Are you currently selling online?</p>
                                        <div className="select-ans">
                                            <Form.Group className="mb-3" controlId="currently_selling_online_1">
                                                <Form.Check
                                                    type="radio"
                                                    name="currently_selling_online"
                                                    label="Yes"
                                                    checked={formData.currently_selling_online === 1}
                                                    value={1}
                                                    onChange={(e) => { toggleStatus(true); setFormData({ ...formData, currently_selling_online: 1 }); }}
                                                />
                                            </Form.Group>

                                            <Form.Group className="mb-3" controlId="currently_selling_online_2">
                                                <Form.Check
                                                    type="radio"
                                                    name="currently_selling_online"
                                                    label="No"
                                                    checked={formData.currently_selling_online === 0}
                                                    value={0}
                                                    onChange={(e) => { toggleStatus(false); setFormData({ ...formData, currently_selling_online: 0 }); }}
                                                />
                                            </Form.Group>
                                        </div>
                                    </Form.Group>

                                    {isOnlineSeller &&
                                        <>
                                            <Form.Group className="mb-3">
                                                <p className="mb-2">Select the following that best applies:</p>

                                                <Form.Select
                                                    className="field-bx form-control"
                                                    value={formData.ecommerce_category}
                                                    onChange={(e) => { setFormData({ ...formData, ecommerce_category: e.target.value }); }}
                                                >
                                                    <option value="">Select eCommerce Category</option>
                                                </Form.Select>
                                            </Form.Group>
                                            <Form.Group className="mb-3">
                                                <p className="mb-2">Where are you currently listing your products? List all that apply.</p>
                                                <textarea
                                                    rows={3}
                                                    className="field-bx"
                                                    placeholder="Enter your response here"
                                                    value={formData.current_marketplace_list}
                                                    onChange={(e) => { setFormData({ ...formData, current_marketplace_list: e.target.value }); }}
                                                ></textarea>
                                            </Form.Group>
                                            <Form.Group className="mb-3">
                                                <p className="mb-2">Est. monthly GMV from online sales (optional)</p>
                                                <Form.Select
                                                    className="field-bx form-control"
                                                    value={formData.monthly_gmv}
                                                    onChange={(e) => { setFormData({ ...formData, monthly_gmv: e.target.value }); }}
                                                >
                                                    <option value="">Select Annual GMV</option>
                                                    {
                                                        gmvOptions.map((annualGMV, index) => (
                                                            <option key={index} value={annualGMV}>{annualGMV}</option>
                                                        ))
                                                    }
                                                </Form.Select>
                                            </Form.Group>
                                        </>
                                    }
                                </div>
                            }

                            {step === 3 &&
                                <>
                                    <div className="pb-4">
                                        <p className="align-center">You&rsquo;ve successfully signed up on our interest list! We will be contacting you shortly to follow up.</p>
                                    </div>
                                    <Link href={`${BASE_URL}/`} passHref>
                                        <Button className="signin-btn" type="button">Continue</Button>
                                    </Link>
                                    <Link href={`${BASE_URL}/login`} passHref>
                                        <a className="back-btn"> <Image alt="Image" src={arrowback} /> Back to log in </a>
                                    </Link>
                                </>
                            }

                            <div className="fm-buttons">
                                {(step > 0 && step < 3) &&
                                    <Button className="back-bt" type="button" onClick={() => changeStep(true)}>Back</Button>
                                }
                                {step < 2 &&
                                    <Button className="signin-btn" type="button" onClick={() => changeStep()}>Continue</Button>
                                }
                                {step === 2 &&
                                    <Button className="signin-btn" type="button" onClick={(event) => submitFormData(event)}>Continue</Button>
                                }
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default JoinInterestList;