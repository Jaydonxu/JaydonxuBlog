const express = require('express')

const Router = express.Router()

// 导入处理函数
const user_handler = require('../router_handler/user.js')

Router.get('/user', user_handler.age)

module.exports = Router
