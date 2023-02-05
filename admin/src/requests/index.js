import axios from 'axios'



axios.defaults.timeout = 5 * 1000
axios.defaults.baseURL = 'http://localhost:3001'

// 请求拦截器
axios.interceptors.request.use(config => {
    console.log(config, 'confug');

    return config
}, (err) => {
    return Promise.reject(err) 
})

// 响应拦截器
axios.interceptors.request.use(config => {
    return config
}, (err) => {
    return Promise.reject(err) 
})

export default axios