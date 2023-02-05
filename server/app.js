// 导入express
const express = require('express')

// 解决跨域中间件
const cors = require('cors')

// express——user路由
const Router = require('./router/index.js')

var debug = require('debug')('my-application'); // debug模块

const resultHandle = require('./utils/result')

// 创建express实例
const app = express()
app.set('port', 3001); // 设定监听端口
app.use(express.static('dist'))
app.use(cors())

// 配置解析post参数---不用在下载第三方，express内置
app.use(express.urlencoded({ extended: false }))
// 响应json对象
app.use(express.json())

app.use(Router)

var server = app.listen(app.get('port'), function () {
  debug('Express server listening on port ' + server.address().port);
});
