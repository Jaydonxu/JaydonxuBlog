// 导入express
const express = require('express')

// 解决跨域中间件
const cors = require('cors')

// express——user路由
const userRouter = require('./router/user')

const resultHandle = require('./utils/result')

// 创建express实例
const app = express()
app.use(express.static('dist'))
app.use(cors())

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use(userRouter)

// 统一处理返回结果
app.use('/', (req, res, next) => {
  console.log(req.err, 'req')

  res.send({
    success: false,
    error_message: 'shibai'
  })
})

// app.use(resultHandle)

// 开启监听端口号
app.listen(3000, () => {
  console.log('http://localhost:3000')
})
