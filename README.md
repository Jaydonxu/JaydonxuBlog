# JaydonxuBlog

## nodejs + express + ejs

### express 实现服务器，在此项目主要用做创建管理接口&&托管静态资源

1. 导入 `express`

```js
const express = require('express')
```

2. 创建 `express` 实例

```js
const app = express()
```

3. 开启监听端口号

```js
app.listen(3000)
```

4. 可以用实例 `use` 方法使用中间件

```js
// 解决跨域中间件
const cors = require('cors')
app.use(cors())

// 基于body-parser解析带有urlencoded有效负载的传入请求  post请求入参默认获取不到，通过以下中间件可正常获得入参
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
```

5. `express` 路由的使用

- 根目录创建 `router` 文件夹, `router/user.js`

```js
const express = require('express')
// express路由
const Router = express.Router()

Router.get('/user', (req, res) => {
  console.log('req', req.query)
})
// 导出
module.exports = Router
```

- `app.js` 文件

```js
// 导入express——user路由
const userRouter = require('./router/user')
// 使用路由中间件
app.use(userRouter)
```

6. `express` 路由的 `res` 方法

| 方法             | 描述                                                 |
| ---------------- | ---------------------------------------------------- |
| res.download()   | 提示要下载的文件                                     |
| res.end()        | 结束响应过程                                         |
| res.json()       | 发送JSON响应                                         |
| res.jsonp()      | 发送带有JSONP支持的JSON响应                          |
| res.redierct()   | 重定向请求                                           |
| res.render()     | 模板渲染                                             |
| res.send()       | 发送各种类型的响应                                   |
| res.sendFile()   | 将文件作为八位字节流发送                             |
| res.sendStatus() | 设置响应状态代码，并将其字符串标识形式发送为响应正文 |

### ejs 服务端渲染模板

```js

```

## 接口设计文档

#### 个人信息表 `user_info`

> 获取个人信息
> 接口地址：/user/info
> 请求方式：get

- 响应

| 参数名称 |参数说明 | 是否必须 |数据类型 |
| ---- | ---- | | |
| id | key | true | int |
| user_img | 头像 | true | string |
| user_name | 用户名 | true | string |
| user_resume | 简介 | true | string |
