//导入my sql数据库模块
const mysql = require('mysql');
//创建数据库链接对象
const db = mysql.createPool({
    host:'localhost',
    user:'root',
    password:'123456',
    database: 'my_db_01',
})

// 向外共享 db 数据库连接对象
module.exports = db