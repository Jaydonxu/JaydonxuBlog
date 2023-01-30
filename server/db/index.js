const mysql = require('mysql')

const db = mysql.createPool({
  host: '127.0.0.1',
  user: 'jaydonxu',
  password: 'xhj623',
  datebase: 'my_dv'
})
// console.log(db)

db.getConnection(function (error) {
  if (error) {
    console.log('连接失败！', error)
  } else {
    console.log('连接成功，当前连接线程ID：' + db.threadId)
  }
})

module.exports = db
