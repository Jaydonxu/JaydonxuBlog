const SUCCESS = { code: 200, message: "成功" };
const FAILED = { code: 500, message: "失败" };
const API_NOT_FOUNT = { code: 404, message: "接口不存在" };
exports.resultHandle = (err, req, res, next) => {
  console.log(err, req, res, next, "resultHandle");
};

exports.notFountHandle = (req, res) => {
  res.render("/404.html");
};
