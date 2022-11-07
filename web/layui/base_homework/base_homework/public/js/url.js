var urlBase = "http://localhost:8083/electricPowerService"; //基础服务域名
var urlHtml = "http://localhost:8083/webPowerNetwork/"; //基础服务域名
// var pictureUrl = "http://192.168.0.7:8086"; //访问图片或文件地址
var publicUserInfo = {
    operaterId: '2', // 操作人编号
    operaterName: 'admin' // 操作人名称
}


// //测试环境
// var urlBase = "http://fivefu.com.cn/electricPowerService"; //基础服务域名
// var urlHtml = "http://fivefu.com.cn/webPowerNetwork/"; //基础服务域名
var pictureUrl = "http://fivefu.com.cn"; //访问图片或文件地址



var head = document.getElementsByTagName('head')[0];
var script = document.createElement('script');
script.type = 'text/javascript';
script.src = "https://lbs.sgmap.cn/maps?v=2.0.0";
head.appendChild(script);