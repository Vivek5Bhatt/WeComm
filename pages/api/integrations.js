import ApiClient from '@/services/apiClient';
import { errorToast } from '@/services/toaster';

/* Get shopify integration info of user */
export const getShopifyIntegration = async () => {
    try {
        return await ApiClient.get('/shopify/get-info').then((response) => { return response; });
    } catch (error) {
        errorToast();
        return { statusCode: 400 };
    }
};

/* Connect shopify integration credentials of user */
export const connectShopify = async (payload) => {
    try {
        return await ApiClient.post('/shopify/integrate', payload).then((response) => { return response; });
    } catch (error) {
        errorToast();
        return { statusCode: 400 };
    }
};

/* Process shopify integration callback */
export const handleShopifyCallback = async (payload) => {
    try {
        return await ApiClient.post('/shopify/callback', null, { params: payload }).then((response) => { return response; });
    } catch (error) {
        errorToast();
        return { statusCode: 400 };
    }
};

/* Get shopify products list */
export const fetchShopifyProducts = async (payload) => {
    try {
        return await ApiClient.get('/shopify/products', { params: payload }).then((response) => { return response; });
    } catch (error) {
        errorToast();
        return { statusCode: 400 };
    }
};

/* store shopify products list */
export const storeShopifyProducts = async (payload) => {
    try {
        return await ApiClient.post('/shopify/products/store').then((response) => { return response; });
    } catch (error) {
        errorToast();
        return { statusCode: 400 };
    }
};