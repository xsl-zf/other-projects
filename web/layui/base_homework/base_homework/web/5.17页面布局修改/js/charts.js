Highcharts.chart('div1', {
    title: {
        text: '',
        style: {
            color: '#FFF',
            fontSize: 16,
        },
    },
    chart: {
        type: 'pie',
        backgroundColor: 'transparent' // 图形背景颜色
    },
    colors: ['#0080FF', '#FF8000'], //自定义颜色
    tooltip: {
        headerFormat: '{series.name}<br>', //标题格式
        pointFormat: '{point.name}:{point.y}件'
    },
    legend: {
        enabled: true, //图例开关
        align: 'center', //对齐方式：left，center，right
        layout: 'horizontal', //布局类型： "horizontal" 或 "vertical" 即水平布局和垂直布局 默认是：horizontal.
        verticalAlign: 'top', //设定图例在图表区中的垂直对齐方式，合法值有 top，middle 和 bottom。垂直位置可以通过 y 选项做进一步设定。
        itemStyle: { // 图例颜色
            color: 'rgba(255,255,255)'
        },
        itemHoverStyle: { //鼠标划过样式
            color: "#ffff00"
        },
        itemMarginLeft: 10
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: true,
                // format: '<span>{point.name}</span>: {point.percentage:.1f} %',
                format: '{point.percentage:.0f} %',
                style: {
                    color: '#fff',
                    fontSize: '12px',
                    fontWeight: "400",
                    textOutline: "none"
                },
                distance: 2, // 连接线的长度
                connectorPadding: 2,
                borderWidth: 0
            },
            showInLegend: true
        },
        series: {
            cursor: 'pointer',
            events: {
                click: function (e) {

                    let index = e.point.index;
                    console.log("您点击了第" + (index + 1) + "个柱子");
                    console.log('您点击的柱子是：' + e.point.category);
                    console.log('您点击您的数据列名字是：' + this.name);
                    console.log('您点击的数据列值是：' + e.point.options.y);
                    console.log('您点击的柱子的颜色是：' + e.point.color);
                    console.log('num1是：' + e.point.num1);
                    console.log('num2是：' + e.point.num2);
                }
            },

        },
    },
    series: [{
        name: '数字城管研判分析',
        colorByPoint: true,
        data: [{
            name: '事件',
            y: 600, //用来控制饼图的面积，必须有
            num1: "232", //指标1
            num2: 232, //指标2

        }, {
            name: '部件',
            y: 400,
            num1: "232", //指标1
            num2: 232, //指标2
        }]
    }],
    credits: {
        enabled: false
    },
});
Highcharts.chart('div2', {
    title: {
        floating: true,
        text: `停车场`,
        verticalAlign: "bottom",
        y: 20,
        style: {
            color: "#fff",
            fontSize: "16px",
            lineHeight: "16px"
        }
    },
    subtitle: {
        floating: true,
        text: `40%<br>繁忙`,
        verticalAlign: "middle",
        y: 20,
        style: {
            color: "#F75000",
            fontSize: "16px",
            lineHeight: "16px"
        }
    },
    chart: {
        type: 'pie',
        marginTop: 40,
        marginBottom: 40,
        backgroundColor: 'transparent' // 图形背景颜色
    },
    colors: ['#EA5514', '#389CF4', '#F4B32D', ],
    tooltip: {
        headerFormat: '{series.name}<br>', //标题格式
        pointFormat: '{point.name}:{point.y}'
    },
    legend: {
        enabled: true, //图例开关
        align: 'center', //对齐方式：left，center，right
        layout: 'horizontal', //布局类型： "horizontal" 或 "vertical" 即水平布局和垂直布局 默认是：horizontal.
        verticalAlign: 'top', //设定图例在图表区中的垂直对齐方式，合法值有 top，middle 和 bottom。垂直位置可以通过 y 选项做进一步设定。
        padding: 0,
        margin: 0,
        itemMarginTop: 15,
        itemDistance: 2, //水平时de间距
        symbolRadius: 1, //小圆点~小方块
        // floating: true,
        itemStyle: { // 图例颜色
            color: 'rgb(255,255,255)',
            fontSize: 12
        },
        itemHoverStyle: { //鼠标划过样式
            color: "#ffff00"
        },
        // itemMarginLeft: 10
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: false,
                format: '{point.percentage:.0f} %',
                style: {
                    color: '#fff',
                    fontSize: '12px',
                    fontWeight: "400",
                    textOutline: "none"
                },
                distance: 2, // 连接线的长度
                connectorPadding: 2,
                borderWidth: 0
            },
            showInLegend: true,
            borderColor: "", //去边框
            borderColor: "rgba(255,255,255,.2)", //去边框
            borderWidth: 5
        }
    },

    series: [{
        type: "pie",
        innerSize: "80%",
        name: '停车场',
        colorByPoint: true,
        data: [{
            name: '繁忙',
            y: 500,
        }, {
            name: '正常',
            y: 400
        }, {
            name: '未知',
            y: 100
        }]
    }],
    credits: {
        enabled: false
    },
});
Highcharts.chart('div3', {
    title: {
        floating: true,
        text: '',
        verticalAlign: "middle",
        y: 40,
        style: {
            color: "#02DF82",
            fontSize: "25px",
            lineHeight: "25px"
        }
    },
    chart: {
        type: 'pie',
        backgroundColor: 'transparent' // 图形背景颜色
    },
    colors: ['#02DF82', '#FF2D2D', '#ff7575', '#FF00FF', '#FF0080', '#4DFFFF', '#2828FF', '#FFD306',
        '#FFFF93', '#97CBFF'
    ],
    tooltip: {
        headerFormat: '', //标题格式
        pointFormat: '{point.name}:{point.y}'
    },
    legend: {
        enabled: true, //图例开关
        align: 'center', //对齐方式：left，center，right
        layout: 'horizontal', //布局类型： "horizontal" 或 "vertical" 即水平布局和垂直布局 默认是：horizontal.
        verticalAlign: 'bottom', //设定图例在图表区中的垂直对齐方式，合法值有 top，middle 和 bottom。垂直位置可以通过 y 选项做进一步设定。
        itemStyle: { // 图例颜色
            color: 'rgba(255,255,255)'
        },
        itemHoverStyle: { //鼠标划过样式
            color: "#ffff00"
        },
        itemMarginLeft: 10
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: true,
                format: '{point.name}:{point.y}',
                style: {
                    color: '#0CE2F6',
                    fontSize: '12px',
                    fontWeight: "400",
                    textOutline: "none"
                },
                distance: 2, // 连接线的长度
                connectorPadding: 2,
                borderWidth: 0
            },
            showInLegend: true
        }
    },

    series: [{
        innerSize: "40%",
        type: "pie",
        data: [{
            name: '暴露垃圾',
            y: 978,
        }, {
            name: '绿地脏乱',
            y: 854
        }, {
            name: '绿化弃料',
            y: 852
        }, {
            name: '非法小广告',
            y: 752
        }, {
            name: '乱堆物堆料',
            y: 732
        }, {
            name: '违规户外广告',
            y: 654
        }, {
            name: '无照经营游商',
            y: 544
        }, {
            name: '废弃家具设备',
            y: 421
        }, {
            name: '启动车乱停放',
            y: 345
        }, {
            name: '其他事件问题',
            y: 200
        }]
    }],
    credits: {
        enabled: false
    },
});
Highcharts.setOptions({
    lang: {
        thousandsSep: ''
    }
});
var div4 = Highcharts.chart('div4', {

    title: {
        text: ``,
    },
    chart: {
        type: 'line',
        marginTop: 50,
        backgroundColor: 'transparent' // 图形背景颜色
    },
    colors: ['#FF8040', '#0072E3', '#F9F900'],
    tooltip: {
        headerFormat: '7月{point.key}<br>', //标题格式
        pointFormat: '{series.name}:{point.y}'
    },
    legend: {
        enabled: true, //图例开关
        align: 'right', //对齐方式：left，center，right
        layout: 'horizontal', //布局类型： "horizontal" 或 "vertical" 即水平布局和垂直布局 默认是：horizontal.
        verticalAlign: 'top', //设定图例在图表区中的垂直对齐方式，合法值有 top，middle 和 bottom。垂直位置可以通过 y 选项做进一步设定。
        itemStyle: { // 图例颜色
            color: 'rgba(255,255,255)'
        },
        itemHoverStyle: { //鼠标划过样式
            color: "#ffff00"
        },
        itemMarginLeft: 10
    },
    yAxis: {
        title: {
            text: '数量(单位: 件)',
            align: 'high', //可用的值有 "low"，"middle" 和 "high"，分别表示于最小值对齐、居中对齐、与最大值对齐。 默认是：middle
            rotation: 0,
            offset: -40,
            // x: 80,
            y: -20,
            style: {
                color: "#fff", //x轴字体颜色
                fontSize: "12px"
            }
        },
        labels: {
            style: {
                color: '#fff',
                fontSize: '12px',
            },

        },
        plotLines: [{
            id: "plotLines-1",
            color: 'red', //线的颜色，定义为红色
            dashStyle: 'solid', //默认值，这里定义为实线
            value: 18500, //定义在那个值上显示标示线，这里是在x轴上刻度为3的值处垂直化一条线
            width: 4, //标示线的宽度，2px
            zIndex: "9",
            label: {
                text: '', //标签的内容
                align: 'center', //标签的水平位置，水平居左,默认是水平居中center
                x: 10, //标签相对于被定位的位置水平偏移的像素，重新定位，水平居左10px

                style: {
                    color: "#fff", //字体颜色
                    fontSize: "12px"
                }
            },
            events: {
                click: function () {
                    //当标示线被单击时，触发的事件

                },
                mouseover: function (e) {
                    //当标示线被鼠标悬停时，触发的事件
                    // div4.yAxis[0].removePlotLine('plotLines-3');
                    // div4.yAxis[0].addPlotLine({ //在x轴上增加
                    //     value: 18500, //在值为2的地方
                    //     width: 4, //标示线的宽度为2px
                    //     color: 'green', //标示线的颜色
                    //     id: 'plotLines-2', //标示线的id，在删除该标示线的时候需要该id标示
                    //     zIndex: "8",
                    //     label: {
                    //         text: '标签的内容', //标签的内容
                    //         align: 'center', //标签的水平位置，水平居左,默认是水平居中center
                    //         x: 10, //标签相对于被定位的位置水平偏移的像素，重新定位，水平居左10px

                    //         style: {
                    //             color: "#fff", //字体颜色
                    //             fontSize: "12px"
                    //         }
                    //     },
                    // });
                    console.log(this);
                    console.log(e);
                    this.label.element.innerHTML = "测试";
                    e.srcElement.attributes[2].value = "green"

                },

                mouseout: function (e) {
                    this.label.element.innerHTML = "";
                    e.srcElement.attributes[2].value = "red"
                    // //当标示线被鼠标移出时，触发的事件
                    // div4.yAxis[0].removePlotLine('plotLines-2');
                    // div4.yAxis[0].addPlotLine({ //在x轴上增加
                    //     value: 18500, //在值为2的地方
                    //     width: 4, //标示线的宽度为2px
                    //     color: 'red', //标示线的颜色
                    //     id: 'plotLines-3', //标示线的id，在删除该标示线的时候需要该id标示
                    //     zIndex: "8",
                    // });
                },

                mousemove: function () {
                    //当标示线被鼠标移动(时，触发的事件
                }
            }

        }],
        lineColor: 'rgba(255,255,255,.5)', //坐标轴的颜色
        tickColor: 'rgba(255,255,255,.5)', //坐标轴上的刻度线的颜色
        tickInterval: 1000, //刻度间隔
        gridLineWidth: 1,
        gridLineColor: "rgba(255,255,255,.5)", //设置网格线的颜色
    },
    xAxis: {
        categories: ['1日', '2日', '3日', '4日', '5日', '6日', '7日', '8日', '9日', '10日', '11日', '12日', '13日',
            '14日', '15日', '16日', '17日', '18日', '19日', '20日', '21日', '22日', '23日', '24日', '25日', '26日',
            '27日', '28日', '29日', '30日'
        ],
        title: {
            text: '',
            align: "high", // 对齐方式
            offset: 0,
        },
        labels: {
            style: {
                color: '#fff',
                fontSize: '12px',
            },
            // step: 4,//步进
        },
        lineColor: 'rgba(255,255,255,.5)', //坐标轴的颜色
        tickColor: 'rgba(255,255,255,.5)', //坐标轴上的刻度线的颜色
        gridLineWidth: 0,
    },
    series: [ //数据数组
        {
            name: '案件总数(153579)',
            type: "line",
            data: [15234, 17948, 18105, 18248, 18989, 15816, 14155, 12354, 13424, 15252, 12785, 14534,
                12424, 14274, 12354, 13424, 15252, 12785, 14534, 12424, 14274, 12354, 13424, 15252,
                12785, 14534, 12424, 14274, 15153, 15315
            ],
        },
        {
            name: '立案总数(143344)',
            type: "line",
            data: [12354, 13424, 15252, 12785, 14534, 12424, 14274, 17122, 16948, 13456, 14534, 13448,
                17844, 17874, 17122, 16948, 13456, 14534, 13448, 17844, 17874, 17122, 16948, 13456,
                14534, 13448, 17844, 17874, 13833, 17813
            ],
        },
        {
            name: '结案总数(124272)',
            type: "line",
            data: [17122, 16948, 13456, 14534, 13448, 17844, 17874, 12424, 14274, 12354, 17844, 17874,
                17122, 16948, 13456, 14534, 17844, 17874, 17122, 16948, 13456, 14534, 17844, 17874,
                17122, 16948, 13456, 14534, 17844, 17874,
            ],
        },

    ],
    credits: {
        enabled: false
    },
});
Highcharts.chart('div5', {
    title: {
        text: ``,
    },
    chart: {
        type: 'column',
        marginTop: 50,
        backgroundColor: 'transparent' // 图形背景颜色
    },
    colors: ['#7cb5ec'],
    tooltip: {
        headerFormat: '{point.key}<br>', //标题格式
        pointFormat: '{series.name}:{point.y}'
    },
    legend: {
        enabled: false, //图例开关
        align: 'right', //对齐方式：left，center，right
        layout: 'horizontal', //布局类型： "horizontal" 或 "vertical" 即水平布局和垂直布局 默认是：horizontal.
        verticalAlign: 'top', //设定图例在图表区中的垂直对齐方式，合法值有 top，middle 和 bottom。垂直位置可以通过 y 选项做进一步设定。
        itemStyle: { // 图例颜色
            color: 'rgba(255,255,255)'
        },
        itemHoverStyle: { //鼠标划过样式
            color: "#ffff00"
        },
        itemMarginLeft: 10
    },
    yAxis: {
        title: {
            text: '数量(单位: 件)',
            align: 'high', //可用的值有 "low"，"middle" 和 "high"，分别表示于最小值对齐、居中对齐、与最大值对齐。 默认是：middle
            rotation: 0,
            offset: -40,
            y: -20,
            style: {
                color: "#fff", //x轴字体颜色
                fontSize: "12px"
            }
        },
        labels: {
            style: {
                color: '#fff',
                fontSize: '12px',
            },
        },
        lineColor: 'rgba(255,255,255,.5)', //坐标轴的颜色
        tickColor: 'rgba(255,255,255,.5)', //坐标轴上的刻度线的颜色
        tickInterval: 50, //刻度间隔
        gridLineWidth: 1,
        gridLineColor: "rgba(255,255,255,.5)", //设置网格线的颜色
    },
    xAxis: {
        categories: ['高新区', '昆山市', '吴江区', '工业园区', '相城区', '姑苏区', '太仓市', '张家港市', '新吴区', '常熟市', ],
        title: {
            text: '',
            align: "high", // 对齐方式
            offset: 0,
        },
        labels: {
            //   useHTML: true,
            style: {
                color: '#fff',
                fontSize: '12px',
            },

            formatter: function () {
                return `<a title="展现暗示形式" href="javascript: roadClick('${this.value}')">${this.value}</a>`;
            }

        },
        lineColor: 'rgba(255,255,255,.5)', //坐标轴的颜色
        tickColor: 'rgba(255,255,255,.5)', //坐标轴上的刻度线的颜色
        gridLineWidth: 0,
    },
    plotOptions: {
        series: {
            cursor: 'pointer',
            events: {
                click: function (e) {

                    let index = e.point.index;
                    console.log("您点击了第" + (index + 1) + "个柱子");
                    console.log('您点击的柱子是：' + e.point.category);
                    console.log('您点击您的数据列名字是：' + this.name);
                    console.log('您点击的数据列值是：' + e.point.options.y);
                    console.log('您点击的柱子的颜色是：' + e.point.color);

                    // 点击柱子变色： #7cb5ec 蓝色； #ffff00 黄色

                    if (e.point.series.data[index].color == '#ffff00') {
                        e.point.series.data[index].color = '#7cb5ec'; //如果是黄色则还原蓝色
                    } else {
                        for (var i = 0; i < e.point.series.data.length; i++) {
                            if (i == index) {
                                e.point.series.data[i].color = '#ffff00'; //把点击的柱子设为黄色其余变为蓝色
                            } else {
                                e.point.series.data[i].color = '#7cb5ec';
                            }
                            e.point.series.data[i].update(e.point.series.data[i]);
                        }
                    }
                }
            },
            // point: {
            //     events: {
            //         click: function (e) {
            //             console.log(e)
            //             let index = this.index;
            //             console.log("第二种：您点击了第" + (index + 1) + "个柱子");
            //             console.log('第二种：您点击的柱子是：' + this.category);
            //             console.log('第二种：您点击的数据列值是：' + this.y);
            //             console.log('第二种：您点击的柱子的颜色是：' + this.color);
            //             console.log('第二种：您点击的柱子的颜色是：' + this.colorIndex);
            //         }
            //     }
            // },

        },

    },

    series: [ //数据数组
        {
            name: '案件数',
            data: [142, 125, 78, 99, 69, 157, 125, 188, 172, 140],
        },

    ],
    credits: {
        enabled: false
    },
});

function roadClick(aa) {
    alert(aa);
}
Highcharts.chart('div6', {
    title: {
        text: `部件高发时间`,
        verticalAlign: "top",

        style: {
            color: "#fff",
            fontSize: "18px",
            lineHeight: "18px"
        }
    },
    chart: {
        type: 'column',
        marginTop: 50,
        backgroundColor: 'transparent' // 图形背景颜色
    },
    colors: ['#7cb5ec'],
    tooltip: {
        headerFormat: '{point.key}<br>', //标题格式
        pointFormat: '{series.name}:{point.y}'
    },
    legend: {
        enabled: false, //图例开关
        align: 'right', //对齐方式：left，center，right
        layout: 'horizontal', //布局类型： "horizontal" 或 "vertical" 即水平布局和垂直布局 默认是：horizontal.
        verticalAlign: 'top', //设定图例在图表区中的垂直对齐方式，合法值有 top，middle 和 bottom。垂直位置可以通过 y 选项做进一步设定。
        itemStyle: { // 图例颜色
            color: 'rgba(255,255,255)'
        },
        itemHoverStyle: { //鼠标划过样式
            color: "#ffff00"
        },
        itemMarginLeft: 10
    },
    yAxis: {
        title: {
            text: '数量(单位: 件)',
            align: 'high', //可用的值有 "low"，"middle" 和 "high"，分别表示于最小值对齐、居中对齐、与最大值对齐。 默认是：middle
            rotation: 0,
            offset: -40,
            y: -20,
            style: {
                color: "#fff", //x轴字体颜色
                fontSize: "12px"
            }
        },
        labels: {
            style: {
                color: '#fff',
                fontSize: '12px',
            },
        },
        lineColor: 'rgba(255,255,255,.5)', //坐标轴的颜色
        tickColor: 'rgba(255,255,255,.5)', //坐标轴上的刻度线的颜色
        tickInterval: 50, //刻度间隔
        gridLineWidth: 1,
        gridLineColor: "rgba(255,255,255,.5)", //设置网格线的颜色
    },
    xAxis: {
        categories: ['1日', '2日', '3日', '4日', '5日', '6日', '7日', '8日', '9日', '10日', '11日', '12日', '13日',
            '14日', '15日',
        ],
        title: {
            text: '',
            align: "high", // 对齐方式
            offset: 0,
        },
        labels: {
            style: {
                color: '#fff',
                fontSize: '12px',
            },

            useHTML: true, //开启html模式
            formatter: function () {
                // return "<span title='点击此处跳转详情'>" + this.value + "</span>";
                return `<span  title="点击此处跳转${this.value}详情">${this.value}</span>`;
            }

        },
        lineColor: 'rgba(255,255,255,.5)', //坐标轴的颜色
        tickColor: 'rgba(255,255,255,.5)', //坐标轴上的刻度线的颜色
        gridLineWidth: 0,
    },
    plotOptions: {
        series: {
            cursor: 'pointer',
            borderColor: '#ffffff',
            allowPointSelect: true,
            events: {
                click: function (e) {
                    console.log(this)
                    console.log(e.point)

                    let index = e.point.index;
                    console.log("您点击了第" + (index + 1) + "个柱子");
                    console.log('您点击的柱子是：' + e.point.category);
                    console.log('您点击您的数据列名字是：' + this.name);
                    console.log('您点击的数据列值是：' + e.point.y);
                    console.log('您点击的柱子的颜色是：' + e.point.color);
                    console.log('您点击的柱子的颜色是：' + this.color);
                    console.log('您点击的数据列的索引是：' + this.index);
                }
            },

        }
    },
    series: [ //数据数组
        {
            name: '案件数',
            data: [188, 172, 140, 132, 128, 120, 115, 110, 101, 100, 99, 98, 88, 76, 55],
        },

    ],
    credits: {
        enabled: false
    },
});
var colors7 = ['#14CBE1', '#89B7E7', '#F8ECA0', "f00"]; //'#E8675D', '#89B7E7', '#F8ECA0'
Highcharts.chart('div7', {
    title: {
        text: '',
        verticalAlign: "top",

        style: {
            color: "#fff",
            fontSize: "18px",
            lineHeight: "18px"
        }
    },
    chart: {
        type: 'column',
        marginTop: 50,
        backgroundColor: 'transparent' // 图形背景颜色
    },
    colors: colors7,
    tooltip: {
        headerFormat: '{point.key}<br>', //标题格式
        pointFormat: '{series.name}:{point.y}'
    },
    legend: {
        enabled: true, //图例开关
        align: 'right', //对齐方式：left，center，right
        layout: 'horizontal', //布局类型： "horizontal" 或 "vertical" 即水平布局和垂直布局 默认是：horizontal.
        verticalAlign: 'top', //设定图例在图表区中的垂直对齐方式，合法值有 top，middle 和 bottom。垂直位置可以通过 y 选项做进一步设定。
        itemStyle: { // 图例颜色
            color: 'rgba(255,255,255)'
        },
        itemHoverStyle: { //鼠标划过样式
            color: "#ffff00"
        },
        itemMarginLeft: 10
    },
    yAxis: {
        title: {
            text: '数量(单位: 件)',
            align: 'high', //可用的值有 "low"，"middle" 和 "high"，分别表示于最小值对齐、居中对齐、与最大值对齐。 默认是：middle
            rotation: 0,
            offset: -40,
            y: -20,
            style: {
                color: "#fff", //x轴字体颜色
                fontSize: "12px"
            }
        },
        labels: {
            style: {
                color: '#fff',
                fontSize: '12px',
            },
        },
        lineColor: 'rgba(255,255,255,.5)', //坐标轴的颜色
        tickColor: 'rgba(255,255,255,.5)', //坐标轴上的刻度线的颜色
        tickInterval: 50, //刻度间隔
        gridLineWidth: 1,
        gridLineColor: "rgba(255,255,255,.5)", //设置网格线的颜色
    },
    plotOptions: {
        series: {
            cursor: 'pointer',
            borderColor: '#ffffff',
            allowPointSelect: true, // 是否允许选中点
            events: {
                click: function (e) {
                    console.log(this)
                    console.log(e.point)

                    let index = e.point.index;
                    console.log("您点击了第" + (index + 1) + "个柱子");
                    console.log('您点击的柱子是：' + e.point.category);
                    console.log('您点击您的数据列名字是：' + this.name);
                    console.log('您点击的数据列值是：' + e.point.y);
                    console.log('您点击的柱子的颜色是：' + e.point.color);
                    console.log('您点击的柱子的颜色是：' + this.color);
                    console.log('您点击的数据列的索引是：' + this.index);
                }
            },

        }
    },
    xAxis: {
        categories: ['高新区', '昆山市', '吴江区', '工业园区', '相城区', '姑苏区', '太仓市', '张家港市', '新吴区', '常熟市', ],

        title: {
            text: '',
            align: "high", // 对齐方式
            offset: 0,
        },
        labels: {
            style: {
                color: '#fff',
                fontSize: '12px',
            },
        },
        lineColor: 'rgba(255,255,255,.5)', //坐标轴的颜色
        tickColor: 'rgba(255,255,255,.5)', //坐标轴上的刻度线的颜色
        gridLineWidth: 0,
    },
    series: [ //数据数组
        {
            name: '案件总数',
            data: [101, 100, 99, 98, 88, 76, 95, 120, 115, 110, ],
        },
        {
            name: '立案总数',
            data: [50, 25, 88, 72, 50, 25, 50, 50, 25, 50, ],
        },
        {
            name: '结案总数',
            data: [100, 40, 40, 40, 50, 30, 100, 100, 70, 90],
        },

    ],
    credits: {
        enabled: false
    },
});
Highcharts.chart('div8', {
    title: {
        text: ``,
    },
    chart: {
        type: 'column',
        marginTop: 50,
        backgroundColor: 'transparent' // 图形背景颜色
    },
    colors: ['#7cb5ec', '#FF8000'],
    tooltip: {
        headerFormat: '{point.key}<br>', //标题格式
        pointFormat: '{series.name}:{point.y}'
    },
    legend: {
        enabled: true, //图例开关
        align: 'center', //对齐方式：left，center，right
        layout: 'horizontal', //布局类型： "horizontal" 或 "vertical" 即水平布局和垂直布局 默认是：horizontal.
        verticalAlign: 'top', //设定图例在图表区中的垂直对齐方式，合法值有 top，middle 和 bottom。垂直位置可以通过 y 选项做进一步设定。
        itemStyle: { // 图例颜色
            color: 'rgba(255,255,255)'
        },
        itemHoverStyle: { //鼠标划过样式
            color: "#ffff00"
        },
        itemMarginLeft: 10
    },
    yAxis: [{
            title: {
                text: '数量(单位: 件)',
                align: 'high', //可用的值有 "low"，"middle" 和 "high"，分别表示于最小值对齐、居中对齐、与最大值对齐。 默认是：middle
                rotation: 0,
                offset: -100,
                y: -20,
                style: {
                    color: "#fff", //x轴字体颜色
                    fontSize: "12px"
                }
            },
            labels: {
                style: {
                    color: '#fff',
                    fontSize: '12px',
                },
            },
            lineColor: 'rgba(255,255,255,.5)', //坐标轴的颜色
            tickColor: 'rgba(255,255,255,.5)', //坐标轴上的刻度线的颜色
            tickInterval: 50, //刻度间隔
            gridLineWidth: 1,
            gridLineColor: "rgba(255,255,255,.5)", //设置网格线的颜色
        },
        {
            title: {
                text: '平均处置时长(单位: 小时)',
                align: 'high', //可用的值有 "low"，"middle" 和 "high"，分别表示于最小值对齐、居中对齐、与最大值对齐。 默认是：middle
                rotation: 0,
                offset: -40,
                y: -20,
                style: {
                    color: "#fff", //x轴字体颜色
                    fontSize: "12px"
                }
            },
            labels: {
                style: {
                    color: '#fff',
                    fontSize: '12px',
                },
            },
            lineColor: 'rgba(255,255,255,.5)', //坐标轴的颜色
            tickColor: 'rgba(255,255,255,.5)', //坐标轴上的刻度线的颜色
            tickInterval: 50, //刻度间隔
            gridLineWidth: 1,
            gridLineColor: "rgba(255,255,255,.5)", //设置网格线的颜色
            opposite: true //y轴对称
        },
    ],
    xAxis: {
        categories: ['高新区', '昆山市', '吴江区', '工业园区', '相城区', '姑苏区', '太仓市', '张家港市', '新吴区', '常熟市', ],
        title: {
            text: '',
            align: "high", // 对齐方式
            offset: 0,
        },
        labels: {
            style: {
                color: '#fff',
                fontSize: '12px',
            },
        },
        lineColor: 'rgba(255,255,255,.5)', //坐标轴的颜色
        tickColor: 'rgba(255,255,255,.5)', //坐标轴上的刻度线的颜色
        gridLineWidth: 0,
    },
    series: [ //数据数组

        {
            name: '数量',
            type: "line",

            data: [4212, 4213, 4557, 6651, 1243, 3852, 4278, 3467, 4143, 2478],
            tooltip: {
                valueSuffix: " 件"
            }
        },
        {
            name: '数量',
            type: "line",

            data: [3212, 2213, 4557, 3651, 4243, 2852, 2278, 1467, 3143, 5478],
            tooltip: {
                valueSuffix: " 件"
            }
        },
        {
            name: '时长',
            type: "column", //有多种样式：line,spline,column
            yAxis: 1,
            data: [42, 43, 57, 61, 43, 52, 78, 67, 43, 78],
            tooltip: {
                valueSuffix: " 小时"
            }
        },

    ],
    credits: {
        enabled: false
    },
});
Highcharts.chart('div9', {
    title: {
        text: ``,
    },
    chart: {
        type: 'area',
        backgroundColor: 'transparent' // 图形背景颜色
    },
    colors: ['#7cb5ec', '#FF8000'],
    tooltip: {
        headerFormat: '{point.key}<br>', //标题格式
        pointFormat: '{series.name}:{point.y}'
    },
    legend: {
        enabled: true, //图例开关
        align: 'center', //对齐方式：left，center，right
        layout: 'horizontal', //布局类型： "horizontal" 或 "vertical" 即水平布局和垂直布局 默认是：horizontal.
        verticalAlign: 'top', //设定图例在图表区中的垂直对齐方式，合法值有 top，middle 和 bottom。垂直位置可以通过 y 选项做进一步设定。
        itemStyle: { // 图例颜色
            color: 'rgba(255,255,255)'
        },
        itemHoverStyle: { //鼠标划过样式
            color: "#ffff00"
        },
        itemMarginLeft: 10
    },
    yAxis: [{
            title: {
                text: '数量(单位: 件)',
                align: 'high', //可用的值有 "low"，"middle" 和 "high"，分别表示于最小值对齐、居中对齐、与最大值对齐。 默认是：middle
                rotation: 0,
                offset: -100,
                y: -20,
                style: {
                    color: "#fff", //x轴字体颜色
                    fontSize: "12px"
                }
            },
            labels: {
                style: {
                    color: '#fff',
                    fontSize: '12px',
                },
                // formatter: function () {
                //     return this.value / 1000 + 'k';
                // }

            },
            alternateGridColor: 'rgba(72, 113, 196, 0.5)', //网格背景
            lineColor: 'rgba(255,255,255,.5)', //坐标轴的轴线颜色
            lineWidth: 1, //坐标轴的轴线宽度
            // tickColor: 'rgba(255,255,255,.5)', //坐标轴上的刻度线的颜色
            // tickInterval: 20, //刻度间隔
            gridLineWidth: 0,
            // gridLineColor: "rgba(255,255,255,.5)", //设置网格线的颜色
        },
        {
            title: {
                text: '处置率',
                align: 'high', //可用的值有 "low"，"middle" 和 "high"，分别表示于最小值对齐、居中对齐、与最大值对齐。 默认是：middle
                rotation: 0,
                offset: -40,
                y: -20,
                style: {
                    color: "#fff", //x轴字体颜色
                    fontSize: "12px"
                }
            },
            labels: {
                style: {
                    color: '#fff',
                    fontSize: '12px',
                },
                max: 100,
                format: '{value}%'

            },

            visible: false,
            // lineColor: 'rgba(255,255,255,.5)', //坐标轴的颜色
            // tickColor: 'rgba(255,255,255,.5)', //坐标轴上的刻度线的颜色
            // // tickInterval: 50, //刻度间隔
            gridLineWidth: 0,
            // gridLineColor: "rgba(255,255,255,.5)", //设置网格线的颜色
            opposite: true
        },
    ],
    xAxis: {
        categories: ['2月', '3月', '4月', '5月'],
        title: {
            text: '',
            align: "high", // 对齐方式
            offset: 0,
        },
        labels: {
            style: {
                color: '#fff',
                fontSize: '12px',
            },
        },
        lineColor: 'rgba(255,255,255,.5)', //坐标轴的颜色
        tickColor: 'rgba(255,255,255,.5)', //坐标轴上的刻度线的颜色
        gridLineWidth: 0,
        showFirstLabel: true, //是否显示第一个标签
        min: 0
    },
    series: [{
        name: '采集问题数',
        data: [79144, 60931, 72415, 52567],
        tooltip: {
            valueSuffix: " 件"
        }

    }, {
        name: '案件处理率',
        data: [75, 55, 68, 49],
        yAxis: 1,
        tooltip: {
            valueSuffix: " %"
        }
    }],
    plotOptions: {
        area: {
            //    pointStart: 0,
            marker: {
                enabled: false,
                symbol: 'circle',
                radius: 2,
                states: {
                    hover: {
                        enabled: true
                    }
                }
            }
        }
    },
    credits: {
        enabled: false
    },
});
Highcharts.chart('div10', {
    title: {
        text: `部件高发时间`,
        verticalAlign: "top",

        style: {
            color: "#fff",
            fontSize: "18px",
            lineHeight: "18px"
        }
    },
    chart: {
        type: 'bar',
        marginTop: 50,
        backgroundColor: 'transparent' // 图形背景颜色
    },
    colors: ['#7cb5ec'],
    tooltip: {
        headerFormat: '{point.key}<br>', //标题格式
        pointFormat: '{series.name}:{point.y}'
    },
    legend: {
        enabled: false, //图例开关
        align: 'right', //对齐方式：left，center，right
        layout: 'horizontal', //布局类型： "horizontal" 或 "vertical" 即水平布局和垂直布局 默认是：horizontal.
        verticalAlign: 'top', //设定图例在图表区中的垂直对齐方式，合法值有 top，middle 和 bottom。垂直位置可以通过 y 选项做进一步设定。
        itemStyle: { // 图例颜色
            color: 'rgba(255,255,255)'
        },
        itemHoverStyle: { //鼠标划过样式
            color: "#ffff00"
        },
        itemMarginLeft: 10
    },
    yAxis: {
        visible: false,
        title: {
            text: '数量(单位: 件)',
            align: 'high', //可用的值有 "low"，"middle" 和 "high"，分别表示于最小值对齐、居中对齐、与最大值对齐。 默认是：middle
            rotation: 0,
            offset: -40,
            y: -20,
            style: {
                color: "#fff", //x轴字体颜色
                fontSize: "12px"
            }
        },
        labels: {
            style: {
                color: '#fff',
                fontSize: '12px',
            },
        },
        lineColor: 'rgba(255,255,255,.5)', //坐标轴的颜色
        tickColor: 'rgba(255,255,255,.5)', //坐标轴上的刻度线的颜色
        tickInterval: 50, //刻度间隔
        gridLineWidth: 0,
        gridLineColor: "rgba(255,255,255,.5)", //设置网格线的颜色
    },
    xAxis: {
        categories: ['1日', '2日', '3日', '4日', '5日', '6日', '7日', '8日', '9日', '10日', ],
        title: {
            text: '',
            align: "high", // 对齐方式
            offset: 0,
        },
        labels: {
            style: {
                color: '#fff',
                fontSize: '12px',
            },
        },
        lineColor: 'rgba(255,255,255,.5)', //坐标轴的颜色
        tickColor: 'rgba(255,255,255,.5)', //坐标轴上的刻度线的颜色
        gridLineWidth: 0,
    },
    series: [ //数据数组
        {
            name: '案件数',
            data: [188, 172, 140, 132, 128, 120, 115, 110, 101, 100],
        },

    ],
    credits: {
        enabled: false
    },
});
Highcharts.chart('div11', {
    title: {
        text: ``,
    },
    chart: {
        type: 'column',
        marginTop: 50,
        backgroundColor: 'transparent', // 图形背景颜色
        options3d: {
            enabled: true,
            alpha: 10,
            beta: 25,
            depth: 70,
            viewDistance: 100, // 视图距离，它对于计算角度影响在柱图和散列图非常重要。此值不能用于3D的饼图
            frame: { // Frame框架，3D图包含柱的面板，我们以X ,Y，Z的坐标系来理解，X轴与 Z轴所形成
                // 的面为bottom，Y轴与Z轴所形成的面为side，X轴与Y轴所形成的面为back，bottom、
                // side、back的属性一样，其中size为感官理解的厚度，color为面板颜色
                bottom: {
                    size: 10
                },
                side: {
                    size: 1,
                    color: 'transparent'
                },
                back: {
                    size: 1,
                    color: 'transparent'
                }
            }
        },

    },
    colors: ['#7cb5ec'],
    tooltip: {
        headerFormat: '{point.key}<br>', //标题格式
        pointFormat: '{series.name}:{point.y}'
    },
    legend: {
        enabled: false, //图例开关
        align: 'right', //对齐方式：left，center，right
        layout: 'horizontal', //布局类型： "horizontal" 或 "vertical" 即水平布局和垂直布局 默认是：horizontal.
        verticalAlign: 'top', //设定图例在图表区中的垂直对齐方式，合法值有 top，middle 和 bottom。垂直位置可以通过 y 选项做进一步设定。
        itemStyle: { // 图例颜色
            color: 'rgba(255,255,255)'
        },
        itemHoverStyle: { //鼠标划过样式
            color: "#ffff00"
        },
        itemMarginLeft: 10
    },
    yAxis: {
        title: {
            text: '数量(单位: 件)',
            align: 'high', //可用的值有 "low"，"middle" 和 "high"，分别表示于最小值对齐、居中对齐、与最大值对齐。 默认是：middle
            rotation: 0,
            offset: -40,
            y: -20,
            style: {
                color: "#fff", //x轴字体颜色
                fontSize: "12px"
            }
        },
        labels: {
            style: {
                color: '#fff',
                fontSize: '12px',
            },
        },
        lineColor: 'rgba(255,255,255,.5)', //坐标轴的颜色
        tickColor: 'rgba(255,255,255,.5)', //坐标轴上的刻度线的颜色
        tickInterval: 50, //刻度间隔
        gridLineWidth: 1,
        gridLineColor: "rgba(255,255,255,.5)", //设置网格线的颜色
    },
    xAxis: {
        categories: ['高新区', '昆山市', '吴江区', '工业园区', '相城区', '姑苏区', '太仓市', '张家港市', '新吴区', '常熟市', ],
        title: {
            text: '',
            align: "high", // 对齐方式
            offset: 0,
        },
        labels: {
            style: {
                color: '#fff',
                fontSize: '12px',
            },
        },
        lineColor: 'rgba(255,255,255,.5)', //坐标轴的颜色
        tickColor: 'rgba(255,255,255,.5)', //坐标轴上的刻度线的颜色
        gridLineWidth: 0,
    },
    series: [ //数据数组
        {
            name: '案件数',
            data: [142, 125, 78, 99, 69, 157, 125, 188, 172, 140],
        },

    ],
    credits: {
        enabled: false
    },
});
Highcharts.chart('div12', {
    title: {
        text: '',
        style: {
            color: '#FFF',
            fontSize: 16,
        },
    },
    chart: {
        type: 'pie',
        backgroundColor: 'transparent', // 图形背景颜色
        options3d: {
            enabled: true,
            alpha: 45
        }
    },
    // colors: ['#0080FF', '#FF8000'],
    tooltip: {
        headerFormat: '{series.name}<br>', //标题格式
        pointFormat: '{point.name}:{point.y}'
    },
    legend: {
        enabled: true, //图例开关
        align: 'center', //对齐方式：left，center，right
        layout: 'horizontal', //布局类型： "horizontal" 或 "vertical" 即水平布局和垂直布局 默认是：horizontal.
        verticalAlign: 'top', //设定图例在图表区中的垂直对齐方式，合法值有 top，middle 和 bottom。垂直位置可以通过 y 选项做进一步设定。
        itemStyle: { // 图例颜色
            color: 'rgba(255,255,255)'
        },
        itemHoverStyle: { //鼠标划过样式
            color: "#ffff00"
        },
        itemMarginLeft: 10
    },

    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            depth: 35,
            dataLabels: {
                enabled: true,
                // format: '<span>{point.name}</span>: {point.percentage:.1f} %',
                format: '{point.percentage:.0f} %',
                style: {
                    color: '#fff',
                    fontSize: '12px',
                    fontWeight: "400",
                    textOutline: "none"
                },
                distance: 2, // 连接线的长度
                connectorPadding: 2,
                borderWidth: 0
            },
            showInLegend: true
        }
    },
    series: [{
        name: '数字城管研判分析',
        colorByPoint: true,
        data: [{
                name: '事件',
                y: 600,
                // sliced: true,
                // selected: true
            }, {
                name: '部件',
                y: 400
            }, {
                name: '部件',
                y: 400
            },
            {
                name: '部件',
                y: 400
            },
            {
                name: '部件',
                y: 400
            }
        ]
    }],
    credits: {
        enabled: false
    },
});
Highcharts.chart('div13', {
    title: {
        text: '',
        style: {
            color: '#FFF',
            fontSize: 16,
        },
    },
    chart: {
        type: 'pie',
        backgroundColor: 'transparent', // 图形背景颜色
        options3d: {
            enabled: true,
            alpha: 45
        }
    },
    // colors: ['#0080FF', '#FF8000'],
    tooltip: {
        headerFormat: '{series.name}<br>', //标题格式
        pointFormat: '{point.name}:{point.y}'
    },
    legend: {
        enabled: true, //图例开关
        align: 'center', //对齐方式：left，center，right
        layout: 'horizontal', //布局类型： "horizontal" 或 "vertical" 即水平布局和垂直布局 默认是：horizontal.
        verticalAlign: 'top', //设定图例在图表区中的垂直对齐方式，合法值有 top，middle 和 bottom。垂直位置可以通过 y 选项做进一步设定。
        itemStyle: { // 图例颜色
            color: 'rgba(255,255,255)'
        },
        itemHoverStyle: { //鼠标划过样式
            color: "#ffff00"
        },
        itemMarginLeft: 10
    },

    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            depth: 35,
            innerSize: 100,
            dataLabels: {
                enabled: true,
                // format: '<span>{point.name}</span>: {point.percentage:.1f} %',
                format: '{point.percentage:.0f} %',
                style: {
                    color: '#fff',
                    fontSize: '12px',
                    fontWeight: "400",
                    textOutline: "none"
                },
                distance: 2, // 连接线的长度
                connectorPadding: 2,
                borderWidth: 0
            },
            showInLegend: true
        }
    },
    series: [{
        name: '数字城管研判分析',
        colorByPoint: true,
        data: [{
                name: '事件',
                y: 600,
                // sliced: true,
                // selected: true
            }, {
                name: '部件',
                y: 400
            }, {
                name: '部件',
                y: 400
            },
            {
                name: '部件',
                y: 400
            },
            {
                name: '部件',
                y: 400
            }
        ]
    }],
    credits: {
        enabled: false
    },
});
Highcharts.chart('div14', {
    title: {
        text: ``,
    },
    chart: {
        type: 'column',
        marginTop: 50,
        backgroundColor: 'transparent' // 图形背景颜色
    },
    colors: ['#14CBE1', '#AD116C', '#E1E114', '#E15114', '#1714E1', '#1467E1', '#6E11A9', '#11B215',
        '#61E114', '#965E5E'
    ],
    tooltip: {
        headerFormat: '7月{point.key}<br>', //标题格式
        pointFormat: '{series.name}:{point.y}'
    },
    legend: {
        enabled: true, //图例开关
        align: 'right', //对齐方式：left，center，right
        layout: 'horizontal', //布局类型： "horizontal" 或 "vertical" 即水平布局和垂直布局 默认是：horizontal.
        verticalAlign: 'bottom', //设定图例在图表区中的垂直对齐方式，合法值有 top，middle 和 bottom。垂直位置可以通过 y 选项做进一步设定。
        itemStyle: { // 图例颜色
            color: 'rgb(255,255,255)'
        },
        itemHoverStyle: { //鼠标划过样式
            color: "#ffff00"
        },
        itemMarginLeft: 10
    },
    plotOptions: {
        column: {
            stacking: 'normal',
            dataLabels: {
                enabled: false,
                color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white',
                style: {
                    // 如果不需要数据标签阴影，可以将 textOutline 设置为 'none'
                    textOutline: '1px 1px black'
                }
            }
        }
    },
    yAxis: {
        title: {
            text: '垃圾出土量 (单位：吨)',
            align: 'high', //可用的值有 "low"，"middle" 和 "high"，分别表示于最小值对齐、居中对齐、与最大值对齐。 默认是：middle
            rotation: 0,
            offset: -80,
            // x: 80,
            y: -20,
            style: {
                color: "#fff", //x轴字体颜色
                fontSize: "12px"
            }
        },
        labels: {
            style: {
                color: '#fff',
                fontSize: '12px',
            },
        },
        lineColor: 'rgba(255,255,255,.5)', //坐标轴的颜色
        tickColor: 'rgba(255,255,255,.5)', //坐标轴上的刻度线的颜色
        tickInterval: 50, //刻度间隔
        gridLineWidth: 1,
        gridLineColor: "rgba(255,255,255,.3)", //设置网格线的颜色
        gridLineDashStyle: 'Dot'
    },
    xAxis: {
        categories: ['1日', '2日', '3日', '4日', '5日', '6日', '7日', '8日', '9日', '10日', '11日', '12日', '13日',
            '14日', '15日', '16日', '17日', '18日', '19日', '20日', '21日', '22日', '23日', '24日', '25日',
            '26日',
            '27日', '28日', '29日', '30日'
        ],
        title: {
            text: '',
            align: "high", // 对齐方式
            offset: 0,
        },
        labels: {
            style: {
                color: '#fff',
                fontSize: '12px',
            },
            // step: 4,
        },
        lineColor: 'rgba(255,255,255,1)', //坐标轴的颜色
        tickColor: 'rgba(255,255,255,1)', //坐标轴上的刻度线的颜色
        gridLineWidth: 0,
    },
    series: [ //数据数组
        {
            name: '高新区',
            data: [113, 58, 180, 108, 180, 137, 95, 87, 161, 133, 91, 119, 139, 77, 187, 162, 147, 149,
                52, 63, 65, 158, 144, 147, 175, 249, 219, 114, 131, 102,
            ],

        },
        {
            name: '昆山市',

            data: [58, 69, 89, 185, 240, 204, 230, 56, 86, 135, 134, 112, 63, 182, 86, 93, 82, 169, 127,
                176, 120, 171, 154, 101, 87, 104, 168, 189, 70, 207
            ],
        },
        {
            name: '吴江区',

            data: [134, 62, 168, 175, 56, 240, 123, 223, 114, 229, 190, 232, 135, 244, 89, 191, 133,
                177, 159, 111, 209, 210, 112, 91, 150, 136, 183, 241, 193, 73,
            ],
        },
        {
            name: '工业园区',

            data: [243, 229, 109, 114, 98, 185, 56, 212, 103, 201, 156, 146, 211, 103, 185, 123, 162,
                107, 236, 233, 67, 203, 72, 135, 123, 183, 213, 74, 137, 246
            ],
            visible: false
        },
        {
            name: '相城区',

            data: [142, 151, 125, 169, 152, 248, 145, 215, 223, 238, 146, 68, 160, 204, 239, 73, 148,
                98, 234, 125, 188, 128, 112, 146, 149, 101, 195, 143, 131, 110,

            ],
            visible: false
        },
        {
            name: '姑苏区',

            data: [61, 210, 123, 77, 114, 90, 247, 118, 142, 111, 231, 193, 79, 245, 233, 227, 161, 180,
                212, 187, 236, 209, 117, 225, 145, 124, 96, 123, 247, 190,
            ],
            visible: false
        },
        {
            name: '太仓市',

            data: [171, 62, 224, 52, 157, 246, 109, 86, 179, 87, 189, 140, 120, 233, 102, 62, 109, 235,
                99, 172, 224, 59, 175, 120, 216, 179, 227, 167, 126, 128,
            ],
            visible: false
        },
        {
            name: '张家港市',

            data: [139, 225, 134, 244, 93, 197, 151, 161, 208, 239, 158, 84, 66, 134, 218, 105, 117,
                136, 135, 110, 62, 180, 68, 199, 238, 214, 128, 156, 236, 150,
            ],
            visible: false
        },
        {
            name: '新吴区',

            data: [232, 84, 217, 101, 121, 162, 128, 59, 128, 185, 88, 128, 80, 103, 116, 71, 247, 96,
                203, 158, 160, 236, 147, 164, 191, 130, 73, 120, 190, 242,
            ],
            visible: false
        },
        {
            name: '常熟市',

            data: [172, 57, 239, 160, 183, 85, 78, 212, 195, 218, 107, 111, 121, 99, 167, 158, 186, 152,
                234, 60, 70, 199, 221, 245, 202, 185, 132, 212, 196, 174,
            ],
            visible: false
        },

    ],
    credits: {
        enabled: false
    },
});
Highcharts.chart('div15', {
    title: {
        text: ``,
    },
    chart: {
        type: 'column',
        marginTop: 50,
        backgroundColor: 'transparent', // 图形背景颜色
        options3d: {
            enabled: true,
            alpha: 15,
            beta: 15,
            viewDistance: 25,
            depth: 40
        },
    },
    colors: ['#14CBE1', '#AD116C', '#E1E114', '#E15114', '#1714E1', '#1467E1', '#6E11A9', '#11B215',
        '#61E114', '#965E5E'
    ],
    tooltip: {
        headerFormat: '7月{point.key}<br>', //标题格式
        pointFormat: '{series.name}:{point.y}'
    },
    legend: {
        enabled: true, //图例开关
        align: 'right', //对齐方式：left，center，right
        layout: 'horizontal', //布局类型： "horizontal" 或 "vertical" 即水平布局和垂直布局 默认是：horizontal.
        verticalAlign: 'bottom', //设定图例在图表区中的垂直对齐方式，合法值有 top，middle 和 bottom。垂直位置可以通过 y 选项做进一步设定。
        itemStyle: { // 图例颜色
            color: 'rgb(255,255,255)'
        },
        itemHoverStyle: { //鼠标划过样式
            color: "#ffff00"
        },
        itemMarginLeft: 10
    },
    plotOptions: {
        column: {
            stacking: 'normal',
            dataLabels: {
                enabled: false,
                color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white',
                style: {
                    // 如果不需要数据标签阴影，可以将 textOutline 设置为 'none'
                    textOutline: '1px 1px black'
                }
            }
        }
    },
    yAxis: {
        title: {
            text: '垃圾出土量 (单位：吨)',
            align: 'high', //可用的值有 "low"，"middle" 和 "high"，分别表示于最小值对齐、居中对齐、与最大值对齐。 默认是：middle
            rotation: 0,
            offset: -80,
            // x: 80,
            y: -20,
            style: {
                color: "#fff", //x轴字体颜色
                fontSize: "12px"
            }
        },
        labels: {
            style: {
                color: '#fff',
                fontSize: '12px',
            },
        },
        lineColor: 'rgba(255,255,255,.5)', //坐标轴的颜色
        tickColor: 'rgba(255,255,255,.5)', //坐标轴上的刻度线的颜色
        tickInterval: 50, //刻度间隔
        gridLineWidth: 1,
        gridLineColor: "rgba(255,255,255,.3)", //设置网格线的颜色
        gridLineDashStyle: 'Dot'
    },
    xAxis: {
        categories: ['1日', '2日', '3日', '4日', '5日', '6日', '7日', '8日', '9日', '10日', '11日', '12日', '13日',
            '14日', '15日', '16日', '17日', '18日', '19日', '20日', '21日', '22日', '23日', '24日', '25日',
            '26日',
            '27日', '28日', '29日', '30日'
        ],
        title: {
            text: '',
            align: "high", // 对齐方式
            offset: 0,
        },
        labels: {
            style: {
                color: '#fff',
                fontSize: '12px',
            },
            // step: 4,
        },
        lineColor: 'rgba(255,255,255,1)', //坐标轴的颜色
        tickColor: 'rgba(255,255,255,1)', //坐标轴上的刻度线的颜色
        gridLineWidth: 0,
    },
    series: [ //数据数组
        {
            name: '高新区',
            data: [113, 58, 180, 108, 180, 137, 95, 87, 161, 133, 91, 119, 139, 77, 187, 162, 147, 149,
                52, 63, 65, 158, 144, 147, 175, 249, 219, 114, 131, 102,
            ],

        },
        {
            name: '昆山市',

            data: [58, 69, 89, 185, 240, 204, 230, 56, 86, 135, 134, 112, 63, 182, 86, 93, 82, 169, 127,
                176, 120, 171, 154, 101, 87, 104, 168, 189, 70, 207
            ],
        },
        {
            name: '吴江区',

            data: [134, 62, 168, 175, 56, 240, 123, 223, 114, 229, 190, 232, 135, 244, 89, 191, 133,
                177, 159, 111, 209, 210, 112, 91, 150, 136, 183, 241, 193, 73,
            ],
        },
        {
            name: '工业园区',

            data: [243, 229, 109, 114, 98, 185, 56, 212, 103, 201, 156, 146, 211, 103, 185, 123, 162,
                107, 236, 233, 67, 203, 72, 135, 123, 183, 213, 74, 137, 246
            ],
            visible: false
        },
        {
            name: '相城区',

            data: [142, 151, 125, 169, 152, 248, 145, 215, 223, 238, 146, 68, 160, 204, 239, 73, 148,
                98, 234, 125, 188, 128, 112, 146, 149, 101, 195, 143, 131, 110,

            ],
            visible: false
        },
        {
            name: '姑苏区',

            data: [61, 210, 123, 77, 114, 90, 247, 118, 142, 111, 231, 193, 79, 245, 233, 227, 161, 180,
                212, 187, 236, 209, 117, 225, 145, 124, 96, 123, 247, 190,
            ],
            visible: false
        },
        {
            name: '太仓市',

            data: [171, 62, 224, 52, 157, 246, 109, 86, 179, 87, 189, 140, 120, 233, 102, 62, 109, 235,
                99, 172, 224, 59, 175, 120, 216, 179, 227, 167, 126, 128,
            ],
            visible: false
        },
        {
            name: '张家港市',

            data: [139, 225, 134, 244, 93, 197, 151, 161, 208, 239, 158, 84, 66, 134, 218, 105, 117,
                136, 135, 110, 62, 180, 68, 199, 238, 214, 128, 156, 236, 150,
            ],
            visible: false
        },
        {
            name: '新吴区',

            data: [232, 84, 217, 101, 121, 162, 128, 59, 128, 185, 88, 128, 80, 103, 116, 71, 247, 96,
                203, 158, 160, 236, 147, 164, 191, 130, 73, 120, 190, 242,
            ],
            visible: false
        },
        {
            name: '常熟市',

            data: [172, 57, 239, 160, 183, 85, 78, 212, 195, 218, 107, 111, 121, 99, 167, 158, 186, 152,
                234, 60, 70, 199, 221, 245, 202, 185, 132, 212, 196, 174,
            ],
            visible: false
        },

    ],
    credits: {
        enabled: false
    },
});
Highcharts.chart('div16', {
    title: {
        text: ``,
    },
    chart: {
        type: 'cylinder',
        marginTop: 50,
        backgroundColor: 'transparent', // 图形背景颜色
        options3d: {
            enabled: true,
            alpha: 15,
            beta: 15,
            depth: 50,
            viewDistance: 25
        }

    },
    colors: ['#7cb5ec'],
    tooltip: {
        headerFormat: '{point.key}<br>', //标题格式
        pointFormat: '{series.name}:{point.y}'
    },
    legend: {
        enabled: false, //图例开关
        align: 'right', //对齐方式：left，center，right
        layout: 'horizontal', //布局类型： "horizontal" 或 "vertical" 即水平布局和垂直布局 默认是：horizontal.
        verticalAlign: 'top', //设定图例在图表区中的垂直对齐方式，合法值有 top，middle 和 bottom。垂直位置可以通过 y 选项做进一步设定。
        itemStyle: { // 图例颜色
            color: 'rgba(255,255,255)'
        },
        itemHoverStyle: { //鼠标划过样式
            color: "#ffff00"
        },
        itemMarginLeft: 10
    },
    yAxis: {
        title: {
            text: '数量(单位: 件)',
            align: 'high', //可用的值有 "low"，"middle" 和 "high"，分别表示于最小值对齐、居中对齐、与最大值对齐。 默认是：middle
            rotation: 0,
            offset: -40,
            y: -20,
            style: {
                color: "#fff", //x轴字体颜色
                fontSize: "12px"
            }
        },
        labels: {
            style: {
                color: '#fff',
                fontSize: '12px',
            },
        },
        lineColor: 'rgba(255,255,255,.5)', //坐标轴的颜色
        tickColor: 'rgba(255,255,255,.5)', //坐标轴上的刻度线的颜色
        tickInterval: 50, //刻度间隔
        gridLineWidth: 1,
        gridLineColor: "rgba(255,255,255,.5)", //设置网格线的颜色
    },
    xAxis: {
        categories: ['高新区', '昆山市', '吴江区', '工业园区', '相城区', '姑苏区', '太仓市', '张家港市', '新吴区', '常熟市', ],
        title: {
            text: '',
            align: "high", // 对齐方式
            offset: 0,
        },
        labels: {
            style: {
                color: '#fff',
                fontSize: '12px',
            },
        },
        lineColor: 'rgba(255,255,255,.5)', //坐标轴的颜色
        tickColor: 'rgba(255,255,255,.5)', //坐标轴上的刻度线的颜色
        gridLineWidth: 0,
    },
    series: [ //数据数组
        {
            name: '案件数',
            data: [142, 125, 78, 99, 69, 157, 125, 188, 172, 140],
        },

    ],
    plotOptions: {
        series: {
            depth: 25,
            colorByPoint: true
        }
    },
    credits: {
        enabled: false
    },
});
Highcharts.chart('div17', {
    title: {
        text: ``,
    },
    chart: {
        type: 'area',
        backgroundColor: 'transparent' // 图形背景颜色
    },
    colors: ['rgba(0, 113, 227, 0.5)', 'rgba(0, 255, 255, 0.5)', 'rgba(255, 81, 81, 0.5)'],
    tooltip: {
        headerFormat: '{point.key}<br>', //标题格式
        pointFormat: '{series.name}:{point.y}'
    },
    legend: {
        enabled: true, //图例开关
        align: 'right', //对齐方式：left，center，right
        layout: 'horizontal', //布局类型： "horizontal" 或 "vertical" 即水平布局和垂直布局 默认是：horizontal.
        verticalAlign: 'top', //设定图例在图表区中的垂直对齐方式，合法值有 top，middle 和 bottom。垂直位置可以通过 y 选项做进一步设定。
        padding: 0,
        margin: 15,
        itemMarginTop: 15,
        itemDistance: 2, //水平时de间距
        symbolRadius: 1, //小圆点~小方块
        // floating: true,
        itemStyle: { // 图例颜色
            color: 'rgb(255,255,255)',
            fontSize: 12
        },
        itemHoverStyle: { //鼠标划过样式
            color: "#ffff00"
        },
        // itemMarginLeft: 10
    },
    yAxis: [{
            title: {
                text: '(数量: 万件)',
                align: 'high', //可用的值有 "low"，"middle" 和 "high"，分别表示于最小值对齐、居中对齐、与最大值对齐。 默认是：middle
                rotation: 0,
                offset: -40,
                y: -20,
                style: {
                    color: "#fff", //x轴字体颜色
                    fontSize: "12px"
                }
            },
            labels: {
                style: {
                    color: '#fff',
                    fontSize: '12px',
                },
                formatter: function () {
                    return this.value / 10000 + '';
                }

            },
            // alternateGridColor: 'rgba(72, 113, 196, 0.5)', //网格背景
            lineColor: 'rgba(255,255,255,0)', //坐标轴的轴线颜色
            lineWidth: 1, //坐标轴的轴线宽度
            // tickColor: 'rgba(255,255,255,.5)', //坐标轴上的刻度线的颜色
            // tickInterval: 20, //刻度间隔
            gridLineWidth: 1, //设置网格线的粗细
            gridLineColor: "rgba(255,255,255,.5)", //设置网格线的颜色
        }

    ],
    xAxis: {
        categories: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13',
            '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26',
            '27', '28', '29', '30'
        ],
        title: {
            text: '',
            align: "high", // 对齐方式
            offset: 0,
        },
        labels: {
            style: {
                color: '#fff',
                fontSize: '12px',
            },
        },
        lineColor: 'rgba(255,255,255,.5)', //坐标轴的颜色
        tickColor: 'rgba(255,255,255,.5)', //坐标轴上的刻度线的颜色
        gridLineWidth: 0,
        showFirstLabel: true, //是否显示第一个标签
        min: 0
    },
    series: [{
            name: '案卷总数',
            data: [102693, 141004, 195485, 172036, 180322, 191453, 146635, 129120, 155397, 192943, 118127, 189228, 194208, 143667, 198043, 148589, 158945, 133880, 162274, 165302, 107924, 182436, 130164, 105514, 184162, 190970, 198196, 159731, 133444, 142539],
            tooltip: {
                valueSuffix: " 件"
            },
            lineColor: 'rgba(0, 113, 227, 1)',
            marker: {
                fillColor: null, //节点填充色, null: inherit from series
                lineWidth: 1, //边框线宽度
                lineColor: '#FFFFFF', //边框线颜色
                enabled: true //数据节点是否显示
            }
        },
        {
            name: '立案总数',
            data: [101771, 132233, 101011, 156107, 116917, 133000, 182692, 192794, 155913, 143515, 116105, 165543, 164013, 110266, 160050, 111335, 186118, 191211, 113846, 156469, 138024, 155541, 185989, 108010, 116325, 171288, 188134, 132630, 177094, 145611],
            tooltip: {
                valueSuffix: " 件"
            },
            lineColor: 'rgba(0, 255, 255, 1)',
            marker: {
                fillColor: null, //节点填充色, null: inherit from series
                lineWidth: 1, //边框线宽度
                lineColor: '#FFFFFF', //边框线颜色
                enabled: true //数据节点是否显示
            }
        },
        {
            name: '结案总数',
            data: [122566, 199216, 114093, 177669, 185977, 139512, 167658, 183877, 139211, 136304, 140494, 132766, 146514, 198137, 194961, 159930, 119533, 134259, 165969, 137805, 179292, 196443, 165260, 143462, 132463, 161562, 120126, 157361, 141906, 173744],
            tooltip: {
                valueSuffix: " 件"
            },
            lineColor: 'rgba(255, 81, 81, 0.5)',
            marker: {
                fillColor: null, //节点填充色, null: inherit from series
                lineWidth: 1, //边框线宽度
                lineColor: '#FFFFFF', //边框线颜色
                enabled: true //数据节点是否显示
            }
        },

    ],
    plotOptions: {
        area: {
            //    pointStart: 0,
            marker: {
                enabled: false,
                symbol: 'circle',
                radius: 2,
                states: {
                    hover: {
                        enabled: true
                    }
                }
            }
        }
    },
    credits: {
        enabled: false
    },
});

Highcharts.chart('div18', {
    chart: {
        type: 'gauge',
        backgroundColor: 'transparent' // 图形背景颜色
    },
    title: {
        text: ''
    },
    pane: {
        startAngle: -135, //开始角度
        endAngle: 135, //结束角度
        background: [{ //背景数组
            backgroundColor: 'transparent', //透明
            borderWidth: 0, //不要边框

        }]
    },
    plotOptions: {
        gauge: {
            dial: {
                radius: '70%', //刻度盘的半径或长度，以相对于仪表本身半径的百分比表示。默认是：80%。
                backgroundColor: '#F2666E', //指针背景色
                borderWidth: 0, //仪表刻度盘边框的宽度（像素）。默认是：0。
                baseWidth: 10, //表盘底部的像素宽度。底部是最接近轴的部分，由baseLength定义。默认是：3。 （指针尾部宽度）
                topWidth: 0, //刻度盘顶部最接近周长的宽度。轴心从底部向顶部收窄。默认是：1。（指针顶部宽度）
                baseLength: '40%', //刻度盘底部的长度，相对于刻度盘的总半径或长度。默认是：70%。
                rearLength: '10%', //表盘后端的长度，在枢轴的另一侧伸出的部分。相对于刻度盘的长度。默认是：10%。（可以是负值）
            },
        },
    },
    yAxis: {
        min: 0, //最小值
        max: 100, //最大值
        tickPixelInterval: 40, //刻度间隔
        tickWidth: 2, //坐标轴刻度线的宽度
        tickLength: 5, //坐标轴刻度线的长度
        tickPosition: 'inside',
        tickColor: '#fff', //坐标轴刻度线的颜色。
        minorTickInterval: 'auto',
        minorTickWidth: 0, //次刻度线宽度
        minorTickLength: 0, //次刻度线长度
        minorTickPosition: 'inside', //次刻度线相对于坐标轴轴线的位置。可用的值有 inside 及 outside。 默认是：outside.
        minorTickColor: '#666', //坐标轴次刻度线颜色
        lineColor: 'transparent', //坐标轴的轴线颜色

        labels: {
            step: 2, //步进
            rotation: 'auto', //旋转
            style: {
                color: '#fff',
                fontSize: '14px',

            }

        },
        title: {
            text: ""
        },
        plotBands: [{
                from: 0,
                to: 30,
                thickness: "25%", //延长打印带的宽度，默认10
                color: {
                    linearGradient: [0, 120, 200, 200],
                    stops: [
                        [0, '#4DCE76'],
                        [1, '#34BA95']
                    ],
                },
            },
            {
                from: 31,
                to: 70,
                thickness: '25%',
                color: {
                    linearGradient: [120, 200, 200, 200],
                    stops: [
                        [0.1, '#E4E016'],
                        [1, '#F98D57']
                    ],
                },
            },
            {
                from: 71,
                to: 100,
                thickness: '25%',
                color: {
                    linearGradient: [200, 180, 200, 0],
                    stops: [
                        [0, '#E74C55'],
                        [0.9, '#F7969C']
                    ],
                },
            },
        ]
    },
    series: [{
        name: '完成率',
        data: [80],
        tooltip: {
            valueSuffix: ' %'
        },
        dataLabels: {
            // enabled: false,
            borderWidth: 0,
            useHTML: true,
            formatter() {
                let s = `
                        <span style="color: #F2666E;font-size: 24px;display: inline-block;font-family: PingFangSC-Medium;">
                            ${this.point.y}
                        </span><span style="color: #F2666E;font-size: 14px";font-family: PingFangSC-Medium;>%</span>
                        <br/>
                        <span style="color: #Ffff;font-size: 14px;display: inline-block;font-family: PingFangSC-Medium;">
                            完成率
                        </span>
                        `;
                return s;
            },
            style: {
                border: 0,
                color: '#F2666E',
            },
            y: 25,
        },
    }]

});

var renderer = new Highcharts.Renderer(document.getElementById('div19'), 220, 220),
    r = 100, // 半径
    perimeter = Math.PI * r * 2, // 周长
    process = null,
    text = null,
    value = document.getElementById('value');
// 背景环
renderer.circle(r + 10, r + 10, r).attr({
    fill: 'none',
    stroke: '#eee',
    'stroke-width': 10
}).add();
// 进度环
process = renderer.circle(r + 10, r + 10, r).attr({
    fill: 'none',
    stroke: '#22b24c',
    'stroke-width': 10,
    transform: 'matrix(0,-1,1,0,0,220)',
    'stroke-linecap': 'round',
    'stroke-dasharray': perimeter * 50 / 100 + ' ' + perimeter
}).add();
// 文字
text = renderer.label('50%', r + 10, r + 10, null, null, null, false, true).css({
    color: '#22b24c',
    fontSize: '20px',
    fontWeight: 'bold'
}).add();
// 文字对齐
text.attr({
    x: text.x - text.width / 2,
    y: text.y + text.height / 4
});
// 监听 input 值并更新进度
Highcharts.addEvent(value, 'change', function () {
    process.attr({
        'stroke-dasharray': perimeter * value.value / 100 + ' ' + perimeter
    });
    text.attr({
        text: value.value + '%'
    });
});

Highcharts.chart('div20', {
    title: {
        text: ``,
    },
    chart: {
        type: 'column',
        marginTop: 50,
        backgroundColor: 'transparent' // 图形背景颜色
    },
    colors: ['#5ab1ef', '#2ec7c9', '#ffb980', '#d87a80', '#b6a2de'],
    // 案例一
    // tooltip: {
    //     headerFormat: '{point.key}<br>', //标题格式
    //     pointFormat: '{series.name}:{point.y}'
    // },
    // 案例二
    // tooltip: {
    //     // head + 每个 point + footer 拼接成完整的 table
    //     headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
    //     pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' + '<td style="padding:0"><b>{point.y} 件</b></td></tr>',
    //     footerFormat: '</table>',
    //     shared: true,
    //     useHTML: true
    // },
    // 案例三
    // tooltip: {
    //     // head + 每个 point + footer 拼接成完整的 table
    //     headerFormat: '<table>',
    //     pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' + '<td style="padding:0"><b>{point.y} 件</b></td></tr>',
    //     footerFormat: '<tr style="color:red"><td>姓名：</td><td>张三</td></tr><tr style="color:red"><td>年龄：</td><td>22岁</td></tr></table>',
    //     shared: true,
    //     useHTML: true
    // },
    // 案例四
    tooltip: {
        backgroundColor: '#000000CC', //提示框背景色
        borderColor: '#22CEEEFF', //提示框边框色
        hideDelay: 2000, //提示框延时隐藏，这里是2秒
        // 方法1
        // headerFormat: `<h2 style="color:#FFFFFFD9">{point.key}</h2><table>`,
        // pointFormat: `
        //     <tr>
        //         <td style="color:{series.color}">{series.name}: </td>
        //         <td style="color:{series.color}">{point.y} 件</td>
        //     </tr>`,
        // footerFormat: `

        // </table>`,
        //方法2
        formatter: function () { //格式化字符串
            let str_all = "";
            let str_title = '<h2 style="color:#FFFFFFD9">' + this.x + '</h2>'; //标题
            let str_points = ""; //表格
            $.each(this.points, function () {
                let str_point = `
                <tr>
                    <td style="color:${this.series.color};padding:0">${this.series.name}: </td>
                    <td style="color:${this.series.color}">${this.point.y} 件</td>
                </tr> 
                <tr>
                    <td style="color:#FFFFFFD9">测试A：</td>
                    <td style="color:#22CEEEFF">${this.point.num1}</td>
                </tr>
                <tr>
                    <td style="color:#FFFFFFD9">测试B：</td>
                    <td style="color:#22CEEEFF">${this.point.num2}</td>
                </tr>`;
                str_points += str_point
            });
            //拼接一下
            str_all = `
                ${str_title}
                <table>
                ${str_points}
                </table>
                `
            return str_all;
        },
        shared: true,
        useHTML: true
    },
    legend: {
        enabled: false, //图例开关
        align: 'right', //对齐方式：left，center，right
        layout: 'horizontal', //布局类型： "horizontal" 或 "vertical" 即水平布局和垂直布局 默认是：horizontal.
        verticalAlign: 'top', //设定图例在图表区中的垂直对齐方式，合法值有 top，middle 和 bottom。垂直位置可以通过 y 选项做进一步设定。
        itemStyle: { // 图例颜色
            color: 'rgba(255,255,255)'
        },
        itemHoverStyle: { //鼠标划过样式
            color: "#ffff00"
        },
        itemMarginLeft: 10
    },
    yAxis: {
        title: {
            text: '数量(单位: 件)',
            align: 'high', //可用的值有 "low"，"middle" 和 "high"，分别表示于最小值对齐、居中对齐、与最大值对齐。 默认是：middle
            rotation: 0,
            offset: -40,
            y: -20,
            style: {
                color: "#fff", //x轴字体颜色
                fontSize: "12px"
            }
        },
        labels: {
            style: {
                color: '#fff',
                fontSize: '12px',
            },
        },
        lineColor: 'rgba(255,255,255,.5)', //坐标轴的颜色
        tickColor: 'rgba(255,255,255,.5)', //坐标轴上的刻度线的颜色
        tickInterval: 50, //刻度间隔
        gridLineWidth: 1,
        gridLineColor: "rgba(255,255,255,.5)", //设置网格线的颜色
    },
    xAxis: {
        categories: ['高新区', '昆山市', '吴江区', '工业园区', '相城区', '姑苏区', '太仓市', '张家港市', '新吴区', '常熟市', ],
        title: {
            text: '',
            align: "high", // 对齐方式
            offset: 0,
        },
        labels: {
            //   useHTML: true,
            style: {
                color: '#fff',
                fontSize: '12px',
            },

            // formatter: function () {
            //     return `<a title="展现暗示形式" href="javascript: roadClick('${this.value}')">${this.value}</a>`;
            // }

        },
        lineColor: 'rgba(255,255,255,.5)', //坐标轴的颜色
        tickColor: 'rgba(255,255,255,.5)', //坐标轴上的刻度线的颜色
        gridLineWidth: 0,
    },

    series: [ //数据数组
        {
            name: '指标', //标题-可以为空
            data: [{
                name: "", //可以为空
                y: 235, //y是用来控制柱子高度的，必须有-上报数
                num1: 102, //指标1
                num2: 133 //指标2 ...以此类推
            }, {
                name: "",
                y: 235,
                num1: 102,
                num2: 133
            }, {
                name: "",
                y: 235,
                num1: 102,
                num2: 133
            }, {
                name: "",
                y: 235,
                num1: 102,
                num2: 133
            }, {
                name: "",
                y: 235,
                num1: 102,
                num2: 133
            }, {
                name: "",
                y: 235,
                num1: 102,
                num2: 133
            }, {
                name: "",
                y: 235,
                num1: 102,
                num2: 133
            }, {
                name: "",
                y: 235,
                num1: 102,
                num2: 133
            }, {
                name: "",
                y: 235,
                num1: 102,
                num2: 133
            }, {
                name: "",
                y: 235,
                num1: 102,
                num2: 133
            }, ]
        },


    ],
    credits: {
        enabled: false
    },
});
// 蓝湖上饼图的颜色
// colors:["#5B8FF9D9","#5AD8A6D9","#A633A3D9","#F6BD16D9","#E8684AD9","#6DC8ECD9","#9270CAD9"]