const express = require("express");
const conn = require("../../db/index");
const { jwt, key } = require("../token");

const Router = express.Router();

Router.post("/", function (req, res) {
  const sql = "SELECT * FROM user_info";
  conn.query(sql, function (err, result) {
    if (err) {
      console.log(err);
      res.send(err);
    } else {
      console.log(result[0], "result");
      const { user_name, user_password } = result[0];
      const { username, password } = req.body;
      console.log(user_name, username, user_password, password, "xxxxxxxx");
      if (!username || !password) {
        res.send({
          code: 400,
          message: "参数不合法！",
        });
        return;
      }
      const token = jwt.sign(
        {
          username,
          username,
        },
        key,
        {
          expiresIn: "7d",
        }
      );

      if (user_name === username && user_password === password) {
        res.send({
          code: 200,
          message: "登录成功",
          success: true,
          data: {
            token,
          },
        });
      } else {
        res.send({
          code: 200,
          success: false,
          message: "账号或密码错误",
          data: [],
        });
      }
    }
  });
});

Router.get("/token", function (req, res) {
  console.log(req, "xxxxx");
  res.send({
    code: 200,
    message: "成功",
  });
});

module.exports = Router;
