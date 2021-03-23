import axios from 'axios'
import { requestConfig } from '../config/default.config'

let instance = axios.create({
    baseURL: requestConfig.baseURL,
    timeout: requestConfig.timeout
})


// 请求拦截的作用
instance.interceptors.request.use(
    config => {
        console.log("url ---  " + config.url);
        console.log("params ---  " + config.params);
        console.log("method ---  " + config.method);
        if (config.url === '/login' || config.url === '/register') {
            return config
        }

        return config
    }, error => {
        console.log(error);
        return Promise.reject(error)
    })

// 响应拦截
instance.interceptors.response.use(
    respone => {
        const res = respone.data
        if (res.code !== "000000") {
            console.log('err:' + res.code);
        }
        console.log(res);
        return res
    }, error => {
        console.log(error);
        return Promise.reject(error)
    })

export default instance
