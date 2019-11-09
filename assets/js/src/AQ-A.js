const A = '非孤独症谱系';
const B = '您有一些孤独症谱系的特质';
const C = '您可能有高功能孤独症谱系障碍';
const D = '您非常可能有高功能孤独症谱系障碍';

function GetResult(count) {
    if (parseInt('{{ site.data.AQ-A.count }}') !== Object.keys($data).length) {
        $('.result').html('<h1>请完成量表！！！</h1>');
    } else {
        if (count <= 21) {
            $('.result').html('<h1>测试得分：' + count + '</h1><br/>' + A);
        } else if (count > 21 && count <= 25) {
            $('.result').html('<h1>测试得分：' + count + '</h1><br/>' + B);
        } else if (count > 25 && count <= 31) {
            $('.result').html('<h1>测试得分：' + count + '</h1><br/>' + C);
        } else if (count > 31) {
            $('.result').html('<h1>测试得分：' + count + '</h1><br/>' + D);
        } else {
            $('.result').html('<h1>请完成量表！！！</h1>');
        }
    }
    chart_rader($data, 10);
}