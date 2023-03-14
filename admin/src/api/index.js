import axios from "../requests/index";
/* 验证登录 */
export function handleLogin(data) {
  return axios.post("/login", data);
}

/* tag新增 */
export function tagAdd(data) {
  return axios.post("/tag/add", data);
}
