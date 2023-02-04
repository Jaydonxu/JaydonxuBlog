import axios from 'axios'

const instance = axios.create({
    baseURL: '127.0.0.1:3000',
    timeout: 10000,
    headers: { 'X-Custom-Header': 'foobar' }
})

// 请求拦截器
instance.interceptors.request.use(config => {
    

    return config
}, (err) => {
    return Promise.reject(err) 
})

// 响应拦截器
instance.interceptors.request.use(config => {
    return config
}, (err) => {
    return Promise.reject(err) 
})