function getInfo(name) {
    for (let i = 0; i < MapInfo.length; ++i) {

        if (MapInfo[i].name == name) {
            if (MapInfo[i].value == 0) {
                return '暂无就诊信息'
            } else {
                if (MapInfo[i].infoLink == null) {
                    return '<h5>就诊地点：</h5><br>' + MapInfo[i].location + '<h5><br>可选择的科室/医生：<br></h5>' + MapInfo[i].describe
                } else {
                    return '<h5>就诊地点：</h5><br>' + MapInfo[i].location + '<h5><br>可选择的科室/医生：<br></h5>' + MapInfo[i].describe + '<br><h4>点击地图可查看就诊故事</h4>'
                }
            }
        }
    }
}
