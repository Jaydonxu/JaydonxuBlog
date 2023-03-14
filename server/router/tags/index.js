const express = require("express");
const conn = require("../../db/index");
const { jwt, key } = require("../token");

const Router = express.Router();

Router.post("/list", function (req, res) {
  const sql = "SELECT * FROM tags_list";
  conn.query(sql, function (err, result) {
    if (err) {
      console.log(err);
      res.send(err);
    } else {
    }
  });
});

Router.post("/add", function (req, res) {
  res.send({
    code: 200,
    message: "成功",
  });
});

module.exports = Router;
