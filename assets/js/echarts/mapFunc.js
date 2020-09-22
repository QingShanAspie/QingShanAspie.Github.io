let option = {
    backgroundColor: '#FFFFFF',
    title: {
        text: '国内ADHD/ASD成人可确诊地图',
        x: 'center'
    },
    tooltip: {
        formatter: function (params) {
            let info = '<h3>' + params.name + '</h3><p style="font-size:14px">' + getInfo(params.name) + '</p>'
            return info;
        },
        trigger: 'item',
        backgroundColor: "#ffab91"
    },
    visualMap: {
        show: true,
        type: 'piecewise',
        x: 'left',
        y: 'bottom',
        min: 0,
        max: 3,
        splitNumber: 4,
        inRange: {
            color: ['#e0f2f1', '#c8e6c9', '#f0f4c3', '#ffccbc'],
        },
        pieces: [
            {min: 0, max: 0.5, label: '暂无就诊信息'},
            {min: 0.7, max: 1.3, label: '可诊断ASD'},
            {min: 1.5, max: 2.3, label: '可诊断ADHD'},
            {min: 2.5, max: 3.3, label: '可诊断ADHD与ASD'}
        ],
    },
    series: [{
        type: 'map',
        mapType: 'china',
        roam: false,
        label: {
            normal: { show: true }
        },
        itemStyle: {
            normal: {
                borderWidth: .3,
                borderColor: '#aebfbe',
            },
            emphasis: {
                areaColor: '#f5f5f5'
            }
        },
        data: MapData
    }]
};