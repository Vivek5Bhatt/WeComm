import ApiClient from '@/services/apiClient';
import { errorToast } from '@/services/toaster';

/* For login user */
export const loginUser = async (payload) => {
    try {
        return await ApiClient.post('/login', payload).then((response) => { return response; });
    } catch (error) {
        errorToast();
        return { statusCode: 400 };
    }
};

/* Get available user */
export const getRoles = async () => {
    try {
        return await ApiClient.get('/get-roles').then((response) => { return response; });
    } catch (error) {
        errorToast();
        return { statusCode: 400 };
    }
};

/* For check user authentication */
export const checkAuthorization = async () => {
    try {
        return await ApiClient.post('/isAuthenticated').then((response) => { return response; });
    } catch (error) {
        return { statusCode: 400 };
    }
};

/* For logout user from application */
export const logoutUser = async () => {
    try {
        return await ApiClient.post('/logout').then((response) => { return response; });
    } catch (error) {
        return { statusCode: 400 };
    }
};

/* For forgot password */
export const forgotPassword = async (payload) => {
    try {
        return await ApiClient.post('/forgot-password', payload).then((response) => { return response; });
    } catch (error) {
        errorToast();
        return { statusCode: 400 };
    }
};

/* For resend password reset token */
export const resendToken = async (payload) => {
    try {
        return await ApiClient.post('/resend-token', payload).then((response) => { return response; });
    } catch (error) {
        errorToast();
        return { statusCode: 400 };
    }
};

/* For verify password reset token */
export const verifyToken = async (payload) => {
    try {
        return await ApiClient.post('/verify-password-reset-token', payload).then((response) => { return response; });
    } catch (error) {
        errorToast();
        return { statusCode: 400 };
    }
};

/* For reset password */
export const resetPassword = async (payload) => {
    try {
        return await ApiClient.post('/reset-password', payload).then((response) => { return response; });
    } catch (error) {
        errorToast();
        return { statusCode: 400 };
    }
};