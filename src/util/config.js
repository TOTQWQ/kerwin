import axios from 'axios';
import { showLoadingToast, closeToast } from 'vant';

//请求前的回调方法，请求前的拦截器
axios.interceptors.request.use((config) => {

    showLoadingToast({
        message: '加载中...',
        forbidClick: true
    });

    return config;

}, (error) => {

    return Promise.reject(error);

});

//请求后的回调方法，请求后的拦截器
axios.interceptors.response.use((response) => {

    closeToast();

    return response;

}, (error) => {

    Promise.reject(error);

})

export default axios;