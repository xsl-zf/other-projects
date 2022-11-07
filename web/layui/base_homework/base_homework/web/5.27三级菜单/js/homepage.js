$(function() {
	//获取菜单数据
	getdata_menu();

	function getdata_menu() {
		$.ajax({
			type: "get",
			url: "./js/homepage.json",
			success: function(res) {
				console.log(res);
				if (res.code == "500") {
					layer.msg(res.msg);
				} else {
					var datas = res.obj;
					setData_menu(datas); //渲染菜单
				}
			},
			error: function(error) {
				layer.msg("接口请求失败" + error.status);
			}
		})
	}

	//渲染菜单
	function setData_menu(data) {
		if (data.length > 0) {
			console.log("开始遍历菜单")
			var dom = setMenu_L1(data);
			$("#menu_1").html(dom);
			layui.element.init(); //重新渲染
		} else {
			layer.msg("遍历菜单失败")
		}
	}

	//遍历一级菜单
	function setMenu_L1(data) {
		var L1 = "";
		for (var i = 0; i < data.length; i++) {
			if (data[i].children.length > 0) {
				var L1_item =
					'<li class="layui-nav-item">' +
					'<a href="javascript:;"><i class="iconfont">&#xe60b;</i>' + data[i].name + '</a>' +
					'<dl class="layui-nav-child">' +
					setMenu_L2(data[i].children) +
					'</dl>' +
					'</li>';
			} else {
				var L1_item =
					'<li class="layui-nav-item">' +
					'<a href="' + data[i].url + '" target="iframes"><i class="iconfont">&#xe60b;</i>' + data[i].name + '</a>' +
					'</li>';
			}
			L1 += L1_item;
		}
		return L1;
	};
	// 遍历第二层
	function setMenu_L2(data) {
		var L2 = "";
		for (var i = 0; i < data.length; i++) {
			if (data[i].children.length > 0) {
				var L2_item =
					'<dd>' +
					'<a href="javascript:;">' + data[i].name + '</a>' +
					'<ol class="layui-nav-child">' +
					setMenu_L3(data[i].children) +
					'</ol>' +
					'</dd>';
			} else {
				var L2_item =
					'<dd>' +
					'<a href="' + data[i].url + '" target="iframes">' + data[i].name + '</a>' +
					'</dd>';
			}
			L2 += L2_item;
		}
		return L2;
	}

	// 遍历第三层或更深层
	function setMenu_L3(data) {
		var L3 = "";
		for (var i = 0; i < data.length; i++) {
			if (data[i].children.length > 0) {
				var L3_item =
					'<li class="layui-nav-item">' +
					'<a href="javascript:;">' + data[i].name + '</a>' +
					'<ol class="layui-nav-child">' +
					setMenu_L3(data[i].children) +
					'</ol>' +
					'</li>';
			} else {
				var L3_item =
					'<li class="layui-nav-item">' +
					'<a href="' + data[i].url + '" target="iframes">' + data[i].name + '</a>' +
					'</li>';
			}
			L3 += L3_item
		}
		return L3;
	}


});
