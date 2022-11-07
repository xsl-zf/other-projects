var myChart_div1 = echarts.init(document.getElementById('div1'));
var value = 0.9842;
var data = [value, value, value,];
option = {
    //  backgroundColor: new echarts.graphic.RadialGradient(0.3, 0.3, 0.8, [{
    //     offset: 0,
    //     color: '#431ab8'
    // }, {
    //     offset: 1,
    //     color: '#471bba'
    // }]),
    title: {
        text: (value * 100),
        textStyle: {
            fontSize: 50,
            fontFamily: 'Microsoft Yahei',
            fontWeight: 'normal',
            color: '#ffffff',
            rich: {
                a: {
                    fontSize: 28,
                }
            }
        },
        x: 'center',
        y: '50%'
    },
    graphic: [{
        type: 'group',
        left: 'center',
        top: '40%',
        children: [{
            type: 'text',
            z: 100,
            left: '10',
            top: 'middle',
            style: {
                fill: '#ffffff',
                text: '总分',
                font: '38px Microsoft YaHei',
                fontWeight: "600"
            }
        }]
    }],
    series: [{
        type: 'liquidFill',
        radius: '80%',
        center: ['50%', '50%'],
        //  shape: 'roundRect',
        data: [0.9, 0.9, 0.9],
        backgroundStyle: {
            color: {
                type: 'linear',
                x: 1,
                y: 0,
                x2: 0.5,
                y2: 1,
                colorStops: [{
                    offset: 1,
                    color: 'rgba(68, 145, 253, 0)'
                }, {
                    offset: 0.5,
                    color: 'rgba(68, 145, 253, .25)'
                }, {
                    offset: 0,
                    color: 'rgba(68, 145, 253, 0)'
                }],
                globalCoord: false
            },
        },
        outline: {
            borderDistance: 0,
            itemStyle: {
                borderWidth: 20,
                borderColor: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0,
                        color: 'rgba(3, 145, 254, 0)'
                    }, {
                        offset: 0.5,
                        color: 'rgba(3, 145, 254, .25)'
                    }, {
                        offset: 1,
                        color: 'rgba(3, 145, 254, 1)'
                    }],
                    globalCoord: false
                },
                shadowBlur: 10,
                shadowColor: '#000',
            }
        },
        color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [{
                offset: 1,
                color: 'rgba(3,145,254, .6)'
            }, {
                offset: 0.5,
                color: 'rgba(3,145,254,.2)'
            }, {
                offset: 0,
                color: 'rgba(3,145,254, 1)'
            }],
            globalCoord: false
        },
        label: {
            normal: {
                formatter: '',
            }
        }
    },]
};

myChart_div1.setOption(option);