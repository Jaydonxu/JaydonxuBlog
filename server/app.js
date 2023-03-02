// 导入express
const express = require("express");

const expressJwt = require("express-jwt");
const { key } = require("./router/token");

// 解决跨域中间件
const cors = require("cors");
var debug = require("debug")("my-application"); // debug模块

// 创建express实例
const app = express();
// 配置解析post参数---不用在下载第三方，express内置
app.use(express.urlencoded({ extended: false }));
// 响应json对象
app.use(express.json());
app.use(express.static("dist"));
app.use(cors());

// express——user路由
const Router = require("./router/index.js");
const resultHandle = require("./utils/result");

// 验证接口是否携带了token，初了 /login/login 接口外不需要携带token，其它接口都需要
// app.use(
//   expressJwt({ secret: key, algorithms: ["HS256"] }).unless({
//     path: ["/login"],
//   })
// );

app.use(Router);
// 这个是错误级别的中间件--用来捕获错误的
// app.use(function (err, req, res, next) {
//   console.log(err);
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get("env") === "development" ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   //  res.render('error'); 这个是原来的我现在注释掉了
//   console.log("触发了错误级别的中间件", err);
//   if (err) {
//     res.send({
//       code: 4,
//       msg: err,
//     });
//   }
// });

app.set("port", 3002); // 设定监听端口
var server = app.listen(app.get("port"), function () {
  debug("Express server listening on port " + server.address().port);
});
