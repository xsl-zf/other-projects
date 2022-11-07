//导入express
const express = require('express');
//创建路由对象
const router = express.Router();
//导入用户信息处理函数
const usreinfo_hander = require('../router_handler/userinfo');

// 导入验证数据合法性的中间件
const expressJoi = require('@escook/express-joi');

// 导入需要的验证规则对象
const { update_userinfo_schema } = require('../schema/user');

//获取用户信息
router.get('/userinfo',usreinfo_hander.getUserInfo);

//更新用户信息 并且加入验证规则
router.post('/userinfo',expressJoi(update_userinfo_schema),usreinfo_hander.updateUserInfo);
//向外共享路由对象
module.exports=router