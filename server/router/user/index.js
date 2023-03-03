const express = require("express");
const conn = require("../../db/index");
const { jwt, expressJwt, key } = require("../../router/token");
const Router = express.Router();

Router.get("/", function (req, res) {
  res.send({
    code: 201,
    message: "还行",
  });
});

Router.get("/info", function (req, res) {
  res.send({
    code: 200,
    message: "成功",
  });
});

Router.post("/info", function (req, res) {
  res.send({
    code: 200,
    message: "成功",
  });
});

module.exports = Router;
