const A = '非述情障碍';
const B = '可能有述情障碍';
const C = '述情障碍';

function GetResult(count) {
    if (parseInt('{{ site.data.OAQ.count }}') !== Object.keys($data).length) {
        $('.result').html('<h1>请完成量表！！！</h1>');
    } else {
        if (count <= 94) {
            $('.result').html('<h1>测试得分：' + count + '</h1><br/>' + A);
        } else if (count > 94 && count <= 112) {
            $('.result').html('<h1>测试得分：' + count + '</h1><br/>' + B);
        } else if (count > 112) {
            $('.result').html('<h1>测试得分：' + count + '</h1><br/>' + C);
        } else {
            $('.result').html('<h1>请完成量表！！！</h1>');
        }
    }
}