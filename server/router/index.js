const express = require("express");
const conn = require("../db/index");
const { jwt, expressJwt, key } = require("./token");

const Router = express.Router();

/* 查询数据库数据操作 */
// Router.get('/check', function (req, res) {
//   const sql = 'SELECT * FROM ev_users'
//   conn.query(sql, function (err, result) {
//     if (err) {
//       console.log('查询语句执行异常')
//     }
//     res.send(result)
//   })
// })

/* 插入表数据操作 */
// Router.get('/insert', function (req, res) {
//   const sql = 'INSERT INTO ev_users VALUES(?,?,?,?,?,?)'
//   const sqlParams = [3, '李四', '123456', '', 'jsy@163.com', '']
//   conn.query(sql, sqlParams, function (err) {
//     if (err) {
//       console.log('插入语句执行一场')
//     }
//     res.send({ error: 0, message: 'success' })
//   })
// })

/* 获取个人信息 */
Router.use("/login", require("./login/index"));
Router.use("/user", require("./user/index"));

module.exports = Router;
