layui.use(['layer', 'jquery', 'form'], function () {
    var layer = layui.layer;
    var form = layui.form;
    var surnameData = [];
    console.log(surnameData);
    var name = {};
    var namedata = [];

    //生成按钮
    $("#create").click(function () {
        $("#content").empty();
        name = {};
        namedata = [];
        var num = $("#num").val();
        var tyName = $("#tyName").val();
        var isKey = $("#isKey").val();
        var nameLong = $("#nameLong").val();

        if (num == "" || nameLong == "" || isKey == "") {
            layer.msg("带星号的为必填项，不能为空");
        } else {
            //当字段为必选时的验证
            var isShow = $(".choice-starhide").hasClass("show"); //判断是否拥有类show，从而判断是否为必填
            if (isShow) {
                //如果有，就是必填，需要进行判断是否为空
                if (tyName == "") {
                    layui.layer.msg("带星号的为必填项，不能为空！");
                } else {
                    if (nameLong == 1) {
                        one(num);
                        if (isKey == 1) {
                            for (var i = 0; i < namedata.length; i++) {
                                var str = "<span>{\"" + tyName + "\":\"" + namedata[i].name + "\"}," + "<span>"
                                $("#content").append(str);
                            }
                        } else if (isKey == 2) {
                            for (var i = 0; i < namedata.length; i++) {
                                var str = "<span>" + namedata[i].name + "," + "<span>"
                                $("#content").append(str);
                            }
                        }

                    } else if (nameLong == 2) {
                        two(num);
                        if (isKey == 1) {
                            for (var i = 0; i < namedata.length; i++) {
                                var str = "<span>{\"" + tyName + "\":\"" + namedata[i].name + "\"}," + "<span>"
                                $("#content").append(str);
                            }
                        } else if (isKey == 2) {
                            for (var i = 0; i < namedata.length; i++) {
                                var str = "<span>" + namedata[i].name + "," + "<span>"
                                $("#content").append(str);
                            }
                        }
                    } else {
                        layui.layer.msg("请按照格式输入字长");
                    }
                }
            } else {
                if (nameLong == 1) {
                    one(num);
                    if (isKey == 1) {
                        for (var i = 0; i < namedata.length; i++) {
                            var str = "<span>{\"" + tyName + "\":\"" + namedata[i].name + "\"}," + "<span>"
                            $("#content").append(str);
                        }
                    } else if (isKey == 2) {
                        for (var i = 0; i < namedata.length; i++) {
                            var str = "<span>" + namedata[i].name + "," + "<span>"
                            $("#content").append(str);
                        }
                    }

                } else if (nameLong == 2) {
                    two(num);
                    if (isKey == 1) {
                        for (var i = 0; i < namedata.length; i++) {
                            var str = "<span>{\"" + tyName + "\":\"" + namedata[i].name + "\"}," + "<span>"
                            $("#content").append(str);
                        }
                    } else if (isKey == 2) {
                        for (var i = 0; i < namedata.length; i++) {
                            var str = "<span>" + namedata[i].name + "," + "<span>"
                            $("#content").append(str);
                        }
                    }
                }
            }

        }

    })

    //重置按钮
    $("#reset").click(function () {
        $("#content").empty();
        name = {};
        namedata = [];
    })


    //判定用户选择的消息类型
    form.on('select(isKey)', function (data) {
        // console.log(data.elem); //得到select原始DOM对象
        // console.log(data.value); //得到被选中的值
        // console.log(data.othis); //得到美化后的DOM对象
        var value = data.value;

        //判断消息类型是否为代办事项，如果是的话为他添加一个类名show
        if (value == "1") {
            $(".choice-starhide").css("visibility", "visible").addClass("show");

        } else {
            $(".choice-starhide").css("visibility", "hidden").removeClass("show");
        }
    });

    // 取出百家姓数据
    getData_surname();

    function getData_surname() {
        $.ajax({
            type: "get",
            url: "js/surname.json",
            // // data: where,
            success: function (data) {
                for (var i = 0; i <= data.length; i++) {
                    surnameData.push(
                        data[i]
                        // name: data[i],
                        // value: i
                    );
                }
            }
        })
    }

    //一个字的名字
    function one(num) {
        for (var i = 0; i < num; i++) {
            var myRandom1 = parseInt(499 * Math.random());
            var myRandom2 = parseInt(499 * Math.random());
            name.name = surnameData[myRandom1] + surnameData[myRandom2];
            namedata.push({
                name: name.name
            });

        }


    }
    //两个字的名字
    function two(num) {
        for (var i = 0; i < num; i++) {
            var myRandom1 = parseInt(499 * Math.random());
            var myRandom2 = parseInt(499 * Math.random());
            var myRandom3 = parseInt(499 * Math.random());
            name.name = surnameData[myRandom1] + surnameData[myRandom2] + surnameData[myRandom3];
            namedata.push({
                name: name.name
            });

        }


    }




})