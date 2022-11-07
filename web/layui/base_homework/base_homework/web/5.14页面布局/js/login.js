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
	记住密码
	监听表单提交按钮
	form.on('submit(submit_btn)', function(data) {

		// var data = form.data;
		// console.log(data.field.username);
		// var shuju = JSON.stringify(data.field);
		// console.log(shuju);
		if (data.field.username===" ") {
			layer.msg("用户名不能为空");
			return false;
		} else if (data.password == " ") {
			layer.msg("密码不能为空");
			return false;
		} else {
			layer.alert("登陆成功");
			remanber(data.field);
		}
		console.log(localStorage);

		return false;
	});
	
	
	// $("#submit_btn").on('click',function(){
	// 	var data = form.val('form');
	// 	console.log(data);
	// })

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
