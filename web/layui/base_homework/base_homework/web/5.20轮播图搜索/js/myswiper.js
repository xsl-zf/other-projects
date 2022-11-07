layui.use(['table', 'layer', 'jquery', 'form'], function () {
	$ = layui.jquery;
	var table = layui.table;
	var layer = layui.layer;
	var form = layui.form;
	var data;
	//取数据
	$.ajax({
		type: 'get',
		url: "js/myswiper.json",
		success: function (data) {
			data = data;
			// console.log(data);

			// 遍历一下数组取出对象的值，渲染页面
			var a = 0;
			$.each(data, function (i, items) {
				var str1 = "<h2>" + i + "</h2>";
				$(".swiper-slide>ul").eq(a).before(str1);
				var attr = JSON.stringify(items[a].id);
				$(".swiper-slide").eq(a).attr("name", attr);
				var str = "<li><span>" + items[0].name + "</span><span> " + items[0].age + "</span> <span>" + items[0].job +
					"</span></li>";
				str += "<li><span>" + items[1].name + "</span><span> " + items[1].age + "</span> <span>" + items[1].job +
					"</span></li>";
				str += "<li><span>" + items[2].name + "</span><span> " + items[2].age + "</span> <span>" + items[2].job +
					"</span></li>";
				str += "<li><span>" + items[3].name + "</span><span> " + items[3].age + "</span> <span>" + items[3].job +
					"</span></li>";
				str += "<li><span>" + items[4].name + "</span><span> " + items[4].age + "</span> <span>" + items[4].job +
					"</span></li>";

				$(".swiper-slide>ul").eq(a).append(str);

				a++;
			});
		}
	})





	//轮播图控件：
	var swiper = new Swiper('.swiper-container', {
		slidesPerView: 3,
		spaceBetween: 30,
		centeredSlides: true,
		loop: false,
		scrollbar: {
			el: '.swiper-scrollbar',
		},
	})

	//搜功能的实现：

	// //输入框获得字段
	$(".searchInput").bind('input propertychange', function () {
		var text = $("#searchInput").val();
		$(".search-trips>ul").empty();
		if (text !== "") {
			var result = $(".swiper-slide>ul>li").filter(":contains('" + text + "')");
			// console.log(result);
			
			result.each(function () {
				var resultData = $(this).find("span").eq(0).text();
				var li = "<li>" + resultData + "</li>";
				$(".search-trips>ul").append(li);
			});
			//显示提示框
			$(".search-trips").show();
		} else {
			$("*").removeClass("public-li"); //清除上次残留样式
			$(".search-trips").hide();
			$(".search-trips>ul").empty();
			
		}
		$(".search-trips>ul>li").each(function () {
			$(this).click(function () {
				$("#searchInput").val($(this).html());
				
			})
		})


	});

	//点击搜索
	$("#searchBtn").click(function () {
		var text = $("#searchInput").val();
		var result = $(".swiper-slide>ul>li").filter(":contains('" + text + "')");
		if ($.trim(text) == "") {
			layer.msg("请输入关键字");
		} else {
			// 进行数据对比
			var search = result.parent().parent().attr("name");
			console.log(search);
			swiper.slideTo(search - 1, 500, ); //切换到第一个slide，速度为1秒
			result.addClass("public-li");
		}
		swiper.on("sliderMove", function () {
			result.removeClass("public-li");
		})

		//搜索后清除数据
		$(".search-trips>ul").empty();
		$(".search-trips").hide();
		// $("#searchInput").val("");
	})



})