// 导入express
const express = require('express')

// 解决跨域中间件
const cors = require('cors')

// express——user路由
const userRouter = require('./router/user')

var debug = require('debug')('my-application'); // debug模块

const resultHandle = require('./utils/result')

// 创建express实例
const app = express()
app.set('port', 3000); // 设定监听端口
app.use(express.static('dist'))
app.use(cors())

// 配置解析post参数---不用在下载第三方，express内置
app.use(express.urlencoded({ extended: false }))
// 响应json对象
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
// app.listen(3000, () => {
//   console.log('http://localhost:3000')
// })

var server = app.listen(app.get('port'), function () {
  debug('Express server listening on port ' + server.address().port);
});
