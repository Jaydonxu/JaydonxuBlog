const jwt = require('jsonwebtoken')  //引入jsonwebtoken jwt.sgin  生成jwt
const expressJwt = require('express-jwt')
const key = 'jaydxonxuBloguserIdzq'  //定义jsonwebtoken的加密字符串，这个是随便定的，
module.exports = {jwt,expressJwt, key}