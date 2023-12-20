import axios from 'axios';
import application from './application.json';

const instance = axios.create();

instance.interceptors.request.use(function (config) {
    const token = application.OPEN_AI_KEY;
    if (!token) {
        return Promise.reject(new Error('Failed to get access token'));
    }
    config.headers.Authorization = 'Bearer ' + token;
    config.headers['Content-Type'] = 'application/json';
    return config;
}, function (error) {
    return Promise.reject(error);
});

instance.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    return Promise.reject(error);
});

export default instance;
