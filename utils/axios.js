import axios from "axios"
import {Config} from "../config"
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

axios.interceptors.request.use(function (config) {
    let token = global.token
    config.headers = {
        'Authorization': token ? `Bearer ${token}` : null,
        "Content-Type":"application/json",
        "Accept":"application/json",
        ...config.headers,
    }

    return config;
}, function (error) {
    return Promise.reject(error);
});
export default axios