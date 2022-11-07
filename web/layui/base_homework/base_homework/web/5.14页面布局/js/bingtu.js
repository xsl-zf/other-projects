 // 第一张饼图
 Highcharts.chart('chart1', {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: '2018 年浏览器市场份额'
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: false
            },
            showInLegend: true
        }
    },
    series: [{
        name: 'Brands',
        colorByPoint: true,
        data: [{
            name: 'Chrome',
            y: 61.41,
            sliced: true,
            selected: true
        }, {
            name: 'Internet Explorer',
            y: 11.84
        }, {
            name: 'Firefox',
            y: 10.85
        }, {
            name: 'Edge',
            y: 4.67
        }, {
            name: 'Safari',
            y: 4.18
        }, {
            name: 'Other',
            y: 7.05
        }]
    }]
});

// 第二张柱状图
Highcharts.chart('chart2', {
    chart: {
        type: 'column'
    },
    title: {
        text: '月平均降雨量'
    },
    subtitle: {
        text: '数据来源: WorldClimate.com'
    },
    xAxis: {
        categories: ['一月', '二月', '三月', '四月', '五月', '六月', '七月'],
        crosshair: true
    },
    yAxis: {
        min: 0,
        title: {
            text: '降雨量 (mm)'
        }
    },
    tooltip: {

        // head + 每个 point + footer 拼接成完整的 table
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },
    plotOptions: {
        column: {
            borderWidth: 0
        }
    },
    series: [{
        data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0]
    }]
});

// 第三张环图
var chart3 = Highcharts.chart('chart3', {
    chart: {
        type: 'variablepie'
    },
    title: {
        text: '白白'
    },
    tooltip: {
        headerFormat: '',
        pointFormat: '<span style="color:{point.color}">\u25CF</span> <b> {point.name}</b><br/>' +
    '金额: <b>{point.y}</b>'+'日期: <b>{point.z}</b><br/>'
    },
    series: [{
        minPointSize: 10,
        innerSize: '20%',
        zMin: 0,
        name: 'earea',
        data: [{
    name: '西班牙',
    y: 505370,
    z: 92.9
}, {
    name: '法国',
    y: 551500,
    z: 118.7
}, {
    name: '波兰',
    y: 312685,
    z: 124.6
}, {
    name: '捷克共和国',
    y: 78867,
    z: 137.5
}, {
    name: '意大利',
    y: 301340,
    z: 201.8
}, {
    name: '瑞士',
    y: 41277,
    z: 214.5
}, {
    name: '德国',
    y: 357022,
    z: 235.6
}]
    }]
});
