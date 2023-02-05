import axios from '../requests/index'
/* 验证登录 */
export function handleLogin(data){
	return axios.post('/login',data)
}
