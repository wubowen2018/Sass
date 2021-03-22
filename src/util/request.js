import axios from 'axios'
import { requestConfig } from '../config/default.config'

export function request(config) {
    // 1.创建axios的实例
    const instance = axios.create({
        baseURL: requestConfig.baseURL,
        timeout: requestConfig.timeout
    })

    // 2.axios的拦截器
    // 2.1.请求拦截的作用
    instance.interceptors.request.use(config => {
        console.log(config.url);
        if (config.url === '/login' || config.url === '/register') {
            return config
        }

        return config
    }, err => {
        console.log(err);
    })

    // 2.2.响应拦截
    instance.interceptors.response.use(respone => {
        const res = respone.data
        if (res.code !== "000000") {
            console.log('err:' + res.code);
        }
        return res
    }, err => {
        console.log(err);
    })

    // 3.发送真正的网络请求
    return instance(config)
}






