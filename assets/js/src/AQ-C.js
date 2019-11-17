const D = '孩子非常可能有高功能孤独症谱系障碍';

function GetResult(count) {
    if (parseInt('{{ site.data.AQ-C.count }}') !== Object.keys($data).length) {
        $('.result').html('<h1>请完成量表！！！</h1>');
    } else {
        if (count > 76) {
            $('.result').html('<h1>测试得分：' + count + '</h1><br/>' + D);
        } else {
            $('.result').html('<h1>请完成量表！！！</h1>');
        }
    }
    chart_rader($data, 30);
}