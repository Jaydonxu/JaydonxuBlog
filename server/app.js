// 导入express
const express = require('express')

// 解决跨域中间件
const cors = require('cors')

const db = require('./db/index')

// express——user路由
const userRouter = require('./router/user')

// 创建express实例
const app = express()
app.use(express.static('dist'))
app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use(userRouter)
// 开启监听端口号
app.listen(3000, () => {
  console.log('http://localhost:3000')
})
