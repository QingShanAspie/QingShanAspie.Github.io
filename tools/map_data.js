const MapData = [
    { name: '北京', value: 3 },
    { name: '天津', value: 0 },
    { name: '上海', value: 2 },
    { name: '重庆', value: 3 },
    { name: '河北', value: 0 },
    { name: '河南', value: 1 },
    { name: '云南', value: 3 },
    { name: '辽宁', value: 3 },
    { name: '黑龙江', value: 0 },
    { name: '湖南', value: 2 },
    { name: '安徽', value: 0 },
    { name: '山东', value: 2 },
    { name: '新疆', value: 0 },
    { name: '江苏', value: 3 },
    { name: '浙江', value: 2 },
    { name: '江西', value: 0 },
    { name: '湖北', value: 2 },
    { name: '广西', value: 0 },
    { name: '甘肃', value: 0 },
    { name: '山西', value: 2 },
    { name: '内蒙古', value: 0 },
    { name: '陕西', value: 2 },
    { name: '吉林', value: 0 },
    { name: '福建', value: 0 },
    { name: '贵州', value: 0 },
    { name: '广东', value: 3 },
    { name: '青海', value: 0 },
    { name: '西藏', value: 0 },
    { name: '四川', value: 2 },
    { name: '宁夏', value: 0 },
    { name: '海南', value: 0 },
    { name: '台湾', value: 0 },
    { name: '香港', value: 0 },
    { name: '澳门', value: 0 },
    { name: '南海诸岛', value: 0 }
];

let yml = ' '
for (let index = 0; index < MapData.length; index++) {
    yml = yml +
    '  - name: ' + MapData[index].name + 
    '\n    value: ' + MapData[index].value + 
    '\n    location: ' + 
    '\n    describe: ' +
    '\n    mutiLink: ' + 
    '\n    infoLink: ' + 
    '\n      - title: ' +
    '\n        url: ' +
    '\n      - title: ' +
    '\n        url: \n\n' 
}

console.log(yml)