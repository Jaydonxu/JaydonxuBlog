// 导入express
const express = require('express')
// 解决跨域中间件
const cors = require('cors')
// 创建express实例
const app = express()
app.use(express.static('dist'))
app.use(cors())

app.use(express.urlencoded({ extended: false }))

app.use(express.json())
// 开启监听端口号
app.listen(3000, () => {
  console.log('::server start')
})
