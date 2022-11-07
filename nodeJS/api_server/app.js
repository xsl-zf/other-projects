/**
 * app.js 是整个程序的的入口文件。
 *  1、安装并配置`express`
 *  2、配置 cors 跨域
*/

//导入express模块
const bodyParser = require('body-parser')
const express = require('express');
//创建express服务器实例
const app = express();

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({
    extended:false
}))

//导入cors中间件
const cors = require('cors');
const { application } = require('express');
//使用cors中间件解决跨域问题。将 cors 注册为全局中间件
app.use(cors());

//配置解析 `application/x-www-form-urlencoded` 格式的表单数据的中间件：
// app.use(express.urlencoded({ extended: false }));


// 响应数据的中间件
app.use(function (req, res, next) {
  // status = 0 为成功； status = 1 为失败； 默认将 status 的值设置为 1，方便处理失败的情况
  res.cc = function (err, status = 1) {
    res.send({
      // 状态
      status,
      // 状态描述，判断 err 是 错误对象 还是 字符串
      message: err instanceof Error ? err.message : err,
    })
  }
  next()
})

// 导入配置文件
const config = require('./config')

// 解析 token 的中间件
const expressJWT = require('express-jwt')

// 使用 .unless({ path: [/^\/api\//] }) 指定哪些接口不需要进行 Token 的身份认证
app.use(expressJWT({ secret: config.jwtSecretKey }).unless({ path: [/^\/api\//] }))


//导入用户登录和注册路由模块
const userRouter = require('./router/user');
app.use('/api',userRouter);

//导入用户信息路由模块
const userinfoRouter = require('./router/userinfo');
app.use('/my',userinfoRouter);

//在 `app.js` 的全局错误级别中间件中，捕获验证失败的错误，
//并把验证失败的结果响应给客户端
const joi = require('@hapi/joi')

// 错误中间件
app.use(function (err, req, res, next) {
  // 数据验证失败
  if (err instanceof joi.ValidationError) return res.cc(err)
   // 捕获身份认证失败的错误
   if (err.name === 'UnauthorizedError') return res.cc('身份认证失败！')
  // 未知错误
  res.cc(err)
})


// 调用 app.listen 方法，指定端口号并启动web服务器
app.listen(8080,()=>{
    console.log('api server running at http://127.0.0.1:8080')
})