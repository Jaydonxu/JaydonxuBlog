const express = require('express')
const conn = require('../../db/index')
const {jwt, key} = require('../token')

const Router = express.Router()

Router.post('/', function(req, res) {
    const {userId} = req.body  
    if (!userId) {
        res.send({
            code: 400, 
        message: '参数不合法！'
        })
    }
    const token = jwt.sign({
        userId, userId
    },
    key,
    {
        expiresIn: '7d'
    }
    )

    console.log(token, 'token');

    res.send({
        code: 200,
        message: '登录成功',
        data: {
            token
        }
    })
})


Router.get('/token', function(req, res) {
    console.log(req, 'xxxxx');
    res.send({
        code: 200,
        message: '成功'
    })
})

module.exports = Router