Highcharts.chart('chart1', {
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
Highcharts.chart('chart3', {
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

Highcharts.chart('chart2', {
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