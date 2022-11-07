
$(function () {

    //我的积分详情
    function showMyScore() {
        // console.log(1)
        $.ajax({
            url: "../js/myScore.json",
            success: function (data) {
                // console.log(data)
                let str = "";
                for (let i in data) {
                    str += '<div class="item"><div class="bd"></div><div class = "item-1">';
                    str += '<span class = "title" >' + data[i].title + '</span>';
                    str += '<span class = "time">' + data[i].time + '</span></div>';
                    str += '<div class = "item-2" >' + data[i].deal + '</div></div >';
                }
                // console.log(str)
                $(".score-detail").html(str)
            }
        })
    }

    //排行榜详情
    function showRank() {
        $.ajax({
            url: "../js/myRank.json",
            success: function (data) {
               
                let str = "";
                let top3 = [];
                let topStr = "";
                for (let i in data) {
                    if (i < 3) {
                       
                        top3.push(data[i])
                        continue;
                    }
                    let num = parseInt(i) + 1;
                    data[i].tel.replace(data[i].tel.substring(3, 7), "****")

                    str += '<tr><td>' + num + '</td><td class="name">';
                    str += '<img src= ' + data[i].imgsrc + '><div>';
                    str += '<span>' + data[i].name + '</span>';
                    str += '<span>' + data[i].tel.replace(data[i].tel.substring(3, 7), "****") + '</span>';
                    str += '</div></td><td>' + data[i].totalScore + '</td><td>' + data[i].effective + '</td><td>' + data[i].reward + '</td></tr>'
                }
                // console.log(str)
                //渲染第四名往后
                $("#rank-detail").html(str)

                //渲染前三
               
                //1,2,3名整理顺序后按照3,1,2的顺序渲染，即把数组最后一位放到最前
                top3.unshift(top3.pop());

                for (let i in top3) {
                    let num = 1;
                    if (i == 0) {
                        num = 3;
                    } else if (i == 1) {
                        num = 1
                    } else {
                        num = 2
                    }
                    topStr += '<div class="item"><i></i><span>第' + num + '名</span>';
                    topStr += '<span class="span-margin num">' + top3[i].totalScore + '</span><span>' + top3[i].tel.replace(top3[i].tel.substring(3, 7), "****") + '</span></div>';
                }

                $(".rank").html(topStr)


            }
        })
    }


    //切换积分与我的积分榜
    $(".tab div").click(function () {
        // alert()
        $(this).addClass("active").siblings().removeClass("active");
        let val = $(this).text();
        if (val == "我的积分") {
            $(".tab-content").hide();
            $(".tab-detail").show();
            $("#content").removeClass("bg-rank").addClass("bg-detail")

            showMyScore();
        } else if (val == "积分排行榜") {

            $(".tab-detail").hide();
            $("#content ").addClass("bg-rank").removeClass("bg-detail")
            $(".tab-content").show();

            showRank();
        }
    })

    //排行榜切换
    $(".rank-type ul li").click(function () {
        $(this).addClass("active").siblings().removeClass("active");
    })


    //默认展示我的积分
    showMyScore();

})