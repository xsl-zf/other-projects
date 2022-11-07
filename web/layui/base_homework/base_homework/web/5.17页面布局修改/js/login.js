layui.use(['layer', 'jquery', 'form'], function() {
	var layer = layui.layer;
	var form = layui.form;
	$ = layui.jquery;

	// 控制密码输入框小眼睛
	$("span>img").on("click", function() {

		if ($(this).hasClass("active")) {

			$("#pwd").attr("type", "password");
			$(this).attr("src", "./images/hide.png");
			$(this).removeClass("active");
		} else {

			$("#pwd").attr("type", "text");
			$(this).attr("src", "./images/show.png");
			$(this).addClass("active");
		}

	})


	// //表单验证
	// form.verify({
	// 	username: function(value, item) { //value：表单的值、item：表单的DOM对象
	// 			if (value == "") {
	// 				return '用户名不能为空';
	// 			}
	// 			if (!new RegExp("^[a-zA-Z0-9_\u4e00-\u9fa5\\s·]+$").test(value)) {
	// 				return '用户名不能有特殊字符';
	// 			}
	// 			if (/(^\_)|(\__)|(\_+$)/.test(value)) {
	// 				return '用户名首尾不能出现下划线\'_\'';
	// 			}
	// 			if (/^\d+\d+\d$/.test(value)) {
	// 				return '用户名不能全为数字';
	// 			}

	// 			//如果不想自动弹出默认提示框，可以直接返回 true，这时你可以通过其他任意方式提示（v2.5.7 新增）
	// 			if (value === 'xxx') {
	// 				layer.msg("用户名不能为敏感词")
	// 				return false;
	// 			}
	// 		}

	// 		//我们既支持上述函数式的方式，也支持下述数组的形式
	// 		//数组的两个值分别代表：[正则匹配、匹配不符时的提示文字]
	// 		,
	// 	pass: [
	// 		/^[\S]{6,12}$/, '密码必须6到12位，且不能出现空格'
	// 	]
	// });


	// 提交表单并记住密码

	$("#submit_btn").on("click", function(data) {
		var data = form.val("form");
		console.log(data);
		if (data.username == "") {
			layer.msg("用户名不能为空");
			return false;
		} else if (data.password == "") {
			layer.msg("密码不能为空");
			return false;
		} else {
			layer.msg("登陆成功");
			remanber(data);
		}
		console.log(localStorage);


		return false;
	})



	// 监听表单提交按钮
	// form.on('submit(submit_btn)', function(data) {

	// 	// var data = form.data;
	// 	// console.log(data.field.username);
	// 	// var shuju = JSON.stringify(data.field);
	// 	// console.log(shuju);
	// 	if (data.field.username==" ") {
	// 		layer.msg("用户名不能为空");
	// 		return false;
	// 	} else if (data.password == " ") {
	// 		layer.msg("密码不能为空");
	// 		return false;
	// 	} else {
	// 		layer.alert("登陆成功");
	// 		remanber(data.field);
	// 	}
	// 	console.log(localStorage);

	// 	return false;
	// });

	// 保存密码
	function remanber(data) {

		if (data.preservation === "on") {
			localStorage.clear();
			let dd = JSON.stringify(data);
			localStorage.setItem("data", dd);
		} else {
			localStorage.clear();
		};


	}
	voluation();
	//如果保存了密码，进入页面时赋值
	function voluation() {
		let dd = localStorage.getItem("data");
		var data2 = JSON.parse(dd);
		console.log(data2)
		if (data2 != null) {
			// var data = form.val('ward', {
			// 	"username": data2.username,
			// 	"password": data2.password,
			// 	'preservation': 'on'
			// })

			$("#user").val(data2.username);
			$("#pwd").val(data2.password);
		}
	}

});
