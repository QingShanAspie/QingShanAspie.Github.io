function getInfo(name) {
    for (let i = 0; i < map_info.length; ++i) {
        if (map_info[i].name == name) {
            if (map_info[i].value == 0) {
                return '<h7>暂无就诊信息<h7>';
            } else {
                let map_data = '<h7>点击查看详细信息</h7>';
                return map_data;
            }
        }
    }
}

function doc_clas(level) {
    if (level == '1') {
        return '可确诊ASD';
    } else if (level == '2') {
        return '可确诊ADHD';
    } else if (level == '3') {
        return '可确诊ASD与ADHD';
    }
}