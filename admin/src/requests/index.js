import axios from "axios";
const { VITE_BASIC_API } = import.meta.env;

console.log(VITE_BASIC_API, "process");

axios.defaults.timeout = 5 * 1000;
axios.defaults.baseURL = VITE_BASIC_API;

// 请求拦截器
axios.interceptors.request.use(
  (config) => {
    console.log(config, "confug");
    if (config.url !== "/login") {
      config.headers["Authorization"] = "Bearer ";
    }

    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

// 响应拦截器
axios.interceptors.request.use(
  (config) => {
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

export default axios;
