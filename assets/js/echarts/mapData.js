function getInfo(name) {
    for (let i = 0; i < MapInfo.length; ++i) {
        if (MapInfo[i].name == name) {
            if (MapInfo[i].value == 0) {
                return '<h7>暂无就诊信息<h7>';
            } else {
                let map_data = '<h5>就诊地点：</h5><br>';
                MapInfo[i].location.forEach(element => {
                    map_data += element.name + '：<br>';
                    element.doctor.forEach(ele => {
                        map_data += ele.name;
                        if (ele.name.search('科室') == -1) {
                            map_data += ' 医生';
                        }
                        if (ele.desc != null) {
                            map_data += '<small>' + ele.desc + '</small><br>';
                        }
                    });
                    map_data += '<br>';
                });
                if (MapInfo[i].info_link != null) {
                    map_data += '<br><h4>点击地图可查看就诊故事</h4>';
                }
                return map_data;
            }
        }
    }
}
