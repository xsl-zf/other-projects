/**
 * 在这里定义和用户相关的路由处理函数，供 /router/user.js 模块进行调用
 */
//导入数据库操作模块：
const db = require('../db/index')
//在当前项目中，使用 `bcryptjs` 对用户密码进行加密,引入加密模块
const bcrypt = require('bcryptjs')
// 用这个包来生成 Token 字符串
const jwt = require('jsonwebtoken')
// 导入配置文件
const config = require('../config')


// 注册用户的处理函数
exports.regUser = (req, res) => {
  /**-------------------------对表单数据进行提交验证---------------------------------- */
  // 接收表单数据
  const userinfo = req.body
  console.log(req.body);
  // 判断数据是否合法
  // if (!userinfo.username || !userinfo.password) {
  // return res.cc('用户名或密码不能为空！')}
  //使用joi 验证
  // 定义 SQL 语句：
  let sqlSelect = `select * from user where username=?`
  db.query(sqlSelect, [userinfo.username], function (err, results) {
    // 执行 SQL 语句失败
    if (err) {
      return res.cc(err)
    }
    // 用户名被占用
    if (results.length > 0) {
      return res.cc('用户名被占用，请更换其他用户名！')
    }
    //如果用户名没有被占用
    /**-------------------------对表单数据存入数据库---------------------------------- */
    // 对用户的密码,进行 bcrype 加密，返回值是加密之后的密码字符串
    userinfo.password = bcrypt.hashSync(userinfo.password, 10)
    let sqlInsert = 'insert into user set ?'
    console.log(userinfo);
    db.query(sqlInsert, {
      username: userinfo.username,
      password: userinfo.password
    }, function (err, results) {
      // 执行 SQL 语句失败
      if (err) return res.send({
        status: 1,
        message: err.message
      })
      // SQL 语句执行成功，但影响行数不为 1
      if (results.affectedRows !== 1) {
        return res.cc('注册用户失败，请稍后再试！')
      }
      // 注册成功
      res.cc('注册成功！', 0)
    })
  })
}

// 登录的处理函数
/**
 * 1. 检测表单数据是否合法
 * 2. 根据用户名查询用户的数据
 * 3. 判断用户输入的密码是否正确
 * 4. 生成 JWT 的 Token 字符串
 */
exports.login = (req, res) => {
  //接收前端所传回的参数
  const userinfo = req.body
  //定义sql语句，根据用户名在数据库中查找用户是否存在
  let sql = `select * from user where username=?`
  //进行数据库查询
  db.query(sql, userinfo.username, function (err, results) {
    // 执行 SQL 语句失败
    if (err) return res.cc(err)
    // 执行 SQL 语句成功，但是查询到数据条数不等于 1
    if (results.length !== 1) return res.cc('登录失败！')
    /**
     * 使用bcrypt.compareSync 然后验证密码是否正确
     * bcrypt.compareSync用法：
     * 调用 `bcrypt.compareSync(用户提交的密码, 数据库中的密码)` 方法比较密码是否一致 
     * 回值是布尔值（true 一致、false 不一致）
     * */
    // 拿着用户输入的密码,和数据库中存储的密码进行对比
    const compareResult = bcrypt.compareSync(userinfo.password, results[0].password)

    // 如果对比的结果等于 false, 则证明用户输入的密码错误
    if (!compareResult) {
      return res.cc('登录失败！')
    }
    //验证成功生成 JWT 的 Token 字符串
    /**
     *  核心注意点：在生成 Token 字符串的时候，一定要剔除 **密码** 和 **头像** 的值
     * 1. 通过 ES6 的高级语法，快速剔除 `密码` 和 `头像` 的值：
     *      剔除完毕之后，user 中只保留了用户的 id, username, nickname, email 这四个属性的值
     */
     const user = { ...results[0], password: '', user_pic: '' }
    //生成Token字符串
    const tokenStr = jwt.sign(user,config.jwtSecretKey,{
      expiresIn:config.expiresIn//token有效期10小时
    })
    console.log(tokenStr);
    res.send({
      status: 0,
      message: '登录成功！',
      // 为了方便客户端使用 Token，在服务器端直接拼接上 Bearer 的前缀
      token: 'Bearer ' + tokenStr,
    })
  })
  
}