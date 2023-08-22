import ApiClient from '@/services/apiClient';
import { errorToast } from '@/services/toaster';
import { API_ENDPOINT } from '/environment';

/* Store interested user info */
export const storeInterestList = async (payload) => {
    try {
        return await ApiClient.post('/interest-list/store', payload).then((response) => { return response; });
    } catch (error) {
        errorToast();
        return { statusCode: 400 };
    }
};

/* Get interested user list */
export const getInterestList = async (payload) => {
    try {
        return await ApiClient.get('/interest-list', { params: payload }).then((response) => { return response; });
    } catch (error) {
        errorToast();
        return { statusCode: 400 };
    }
}

/* export interested user list to csv */
export const exportInterestList = async (payload) => {
    try {
        return await ApiClient.post('/interest-list/export', null, { params: payload }).then((response) => { return response; });
    } catch (error) {
        errorToast();
        return { statusCode: 400 };
    }
}

/* For store user submitted queries */
export const storeUserQueries = async (payload) => {
    try {
        return await ApiClient.post('/queries/store', payload).then((response) => { return response; });
    } catch (error) {
        errorToast();
        return { statusCode: 400 };
    }
};