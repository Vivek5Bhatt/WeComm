import axios from 'axios';
import { errorToast } from '@/services/toaster';
import { API_ENDPOINT } from '/environment';

const ApiClient = () => {
    const axiosInstance = axios.create({ baseURL: API_ENDPOINT, withCredentials: true  })
    axiosInstance.interceptors.request.use(async (request) => {
        const accessToken = localStorage.getItem('access_token');
        if (accessToken && accessToken !== undefined) {
            request.headers.common = { Authorization: `Bearer ${accessToken}`}
        }
        return request
    })

    axiosInstance.interceptors.response.use((response) => {
        let apiRes = response?.data;
        if (apiRes === undefined) { apiRes = {}; }
        apiRes['statusCode'] = 200;
        return apiRes;
    }, ({ response }) => {
        let apiRes = response?.data;

        if (apiRes === undefined) { apiRes = {}; }
        apiRes['statusCode'] = response?.status ? response.status : 400;

        if (apiRes.statusCode === 401) {
            window.location.href = '/';
        }
        
        if (apiRes.statusCode === 422 || apiRes.statusCode === 401 || apiRes.statusCode === 403) { errorToast(apiRes?.message); }
        return apiRes;
    });

    return axiosInstance
}

export default ApiClient();