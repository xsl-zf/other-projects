// layui相关
var $ = layui.jquery,
    table = layui.table,
    laydate = layui.laydate,
    form = layui.form,
    layer = layui.layer,
    upload = layui.upload,
    element = layui.element,
    laypage = layui.laypage,
    tree =layui.tree;

// layui相关-代码修饰器
layui.code({
    encode: true, //是否转义html标签。默认不开启
    about: false, //关闭广告
});
//一键下载文件
$("#public-down").click(function () {
    // console.info("一键下载文件")
    $(".public-down-box a label").trigger('click');
})
// 时间对象
var date = new Date();

// 获取时范围方法(今天，昨天，近一周，近一个月等)
function getDateRange(dateNow, intervalDays, bolPastTime) {
    let oneDayTime = 24 * 60 * 60 * 1000;
    let list = [];
    let lastDay;

    if (bolPastTime == true) {
        lastDay = new Date(dateNow.getTime() - intervalDays * oneDayTime);
        list.push(this.formateDate(lastDay));
        list.push(this.formateDate(dateNow));
    } else {
        lastDay = new Date(dateNow.getTime() + intervalDays * oneDayTime);
        list.push(this.formateDate(dateNow));
        list.push(this.formateDate(lastDay));
    }
    return list;
}

function formateDate(time) {
    let year = time.getFullYear()
    let month = time.getMonth() + 1
    let day = time.getDate()

    if (month < 10) {
        month = '0' + month
    }
    if (day < 10) {
        day = '0' + day
    }
    return year + '-' + month + '-' + day + ''
}


//获取上个月
function getLastMonth() {
    let nowdays = new Date();
    let year = nowdays.getFullYear();
    let month = nowdays.getMonth();
    if (month == 0) { //跨年的情况
        month = 12;
        year = year - 1;
    }
    if (month < 10) { //补0
        month = '0' + month;
    }
    let myDate = new Date(year, month, 0);
    let startDate = year + '-' + month + "-01"; //上个月第一天
    let endDate = year + '-' + month + '-' + myDate.getDate(); //上个月最后一天
    return [startDate, endDate];
}

//JS 获取上一周
function getLastWeek() {
    //起止日期数组
    var startStop = new Array();
    //获取当前时间
    var currentDate = new Date();
    //返回date是一周中的某一天
    var week = currentDate.getDay();
    //返回date是一个月中的某一天
    var month = currentDate.getDate();
    //一天的毫秒数
    var millisecond = 1000 * 60 * 60 * 24;
    //减去的天数
    var minusDay = week != 0 ? week - 1 : 6;
    //获得当前周的第一天
    var currentWeekDayOne = new Date(currentDate.getTime() - (millisecond * minusDay));
    //上周最后一天即本周开始的前一天
    var priorWeekLastDay = new Date(currentWeekDayOne.getTime() - millisecond);
    //上周的第一天
    var priorWeekFirstDay = new Date(priorWeekLastDay.getTime() - (millisecond * 6));
    var sy = priorWeekFirstDay.getFullYear();
    var sm = priorWeekFirstDay.getMonth() + 1;
    var sd = priorWeekFirstDay.getDate();
    var ey = priorWeekLastDay.getFullYear();
    var em = priorWeekLastDay.getMonth() + 1;
    var ed = priorWeekLastDay.getDate();
    var s = sy + '-' + add0(sm) + '-' + add0(sd) + ' 00:00:00'; //开始
    var e = ey + '-' + add0(em) + '-' + add0(ed) + ' 23:59:59'; //结束

    startStop.push(s);
    startStop.push(e);

    return startStop;
}
//JS 获取上一周 前面添 0 方法
function add0(m) {
    return m < 10 ? '0' + m : m
};

var themeColorValue = window.localStorage.getItem("themeColor");
console.log("主题：" + themeColorValue)
if (themeColorValue) {
    if (themeColorValue == "blue") {
        document.documentElement.style.setProperty('--public-text-color', "#fff");
        document.documentElement.style.setProperty('--public-bg-color', "#1890FF");
        document.documentElement.style.setProperty('--public-layui-text', "#1890FF");
        document.documentElement.style.setProperty('--public-layui-bg', "#1890FF");

    } else if (themeColorValue == "purple") {
        document.documentElement.style.setProperty('--public-text-color', "#fff");
        document.documentElement.style.setProperty('--public-bg-color', "purple");
        document.documentElement.style.setProperty('--public-layui-text', "purple");
        document.documentElement.style.setProperty('--public-layui-bg', "purple");
    } else if (themeColorValue == "green") {
        document.documentElement.style.setProperty('--public-text-color', "#fff");
        document.documentElement.style.setProperty('--public-bg-color', "green");
        document.documentElement.style.setProperty('--public-layui-text', "green");
        document.documentElement.style.setProperty('--public-layui-bg', "green");
    } else {
        document.documentElement.style.setProperty('--public-text-color', "#fff");
        document.documentElement.style.setProperty('--public-bg-color', "#1890FF");
        document.documentElement.style.setProperty('--public-layui-text', "#1890FF");
        document.documentElement.style.setProperty('--public-layui-bg', "#1890FF");
    }
}


// layui渲染时间的方法
function renderTime(elem, type, value, range, fn) {
    layui.laydate.render({
        elem: elem, //绑定元素
        type: type, //时间类别
        // value: value, //默认值
        range: range, //是否开启时间范围
        done: fn, //选择时间触发的回调函数
        trigger: 'click'
    });
}


// 获取链接里参数方法
function getUrlParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
    var r = window.location.search.substr(1).match(reg); //匹配目标参数
    if (r != null) return unescape(r[2]);
    return null; //返回参数值
}

function getUrlParam2(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
    var r = window.location.search.substr(1).match(reg); //匹配目标参数
    if (r != null) return decodeURIComponent(r[2]);
    return null; //返回参数值
}

function getUrlParam3(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
    var r = window.location.search.substr(1).match(reg); //匹配目标参数
    if (r != null) return r[2];
    return null; //返回参数值
}

// 结束时间 时分秒 23:59:59
function renderTime2(elem, type, value, range, fn) {
    layui.laydate.render({
        elem: elem, //绑定元素
        type: type, //时间类别
        // value: value, //默认值
        range: range, //是否开启时间范围
        ready: function (date) {
            $(".layui-laydate-footer [lay-type='datetime'].laydate-btns-time").click();
            $(".laydate-main-list-0 .layui-laydate-content li ol li:last-child").click();
            $(".layui-laydate-footer [lay-type='date'].laydate-btns-time").click();
        },
        done: fn, //选择时间触发的回调函数
        trigger: 'click'
    });
}

// layui渲染时间的方法
function renderTime3(elem, type, value, range, min, max, fn) {
    layui.laydate.render({
        elem: elem, //绑定元素
        type: type, //时间类别
        // value: value, //默认值
        range: range, //是否开启时间范围
        done: fn, //选择时间触发的回调函数
        trigger: 'click',
        minx: min,
        max: max
    });
}