function ResCac($data) {
    // 社交技巧 1, 11, 13, 15, 22, 36, 44, 45, 47, 48
    let dim1 = $data[0] + $data[10] + $data[12] + $data[14] + $data[21] + $data[35] + $data[43] + $data[44] + $data[46] + $data[48];

    // 注意力切换 2, 4, 10, 16, 25, 32, 34, 37, 43, 46
    let dim2 = $data[1] + $data[3] + $data[9] + $data[15] + $data[24] + $data[31] + $data[33] + $data[36] + $data[42] + $data[45];

    // 细节注意力 5, 6, 9, 12, 19, 23, 28, 29, 30, 49
    let dim3 = $data[4] + $data[5] + $data[8] + $data[11] + $data[18] + $data[22] + $data[27] + $data[28] + $data[29] + $data[48];

    // 交流 7, 17, 18, 26, 27, 31, 33, 35, 38, 39
    let dim4 = $data[6] + $data[16] + $data[17] + $data[25] + $data[26] + $data[30] + $data[32] + $data[34] + $data[37] + $data[38];

    // 想象力 3, 8, 14, 20, 21, 24, 40, 41, 42, 50
    let dim5 = $data[2] + $data[7] + $data[13] + $data[19] + $data[20] + $data[23] + $data[39] + $data[40] + $data[41] + $data[49];

    return {dim1, dim2, dim3, dim4, dim5};
}

function ReSizeOn() {
    let chartSize;

    if ($(window).width() > 1024) {
        chartSize = $(window).width() / 2.5;
    } else if ($(window).width() <= 375) {
        chartSize = $(window).width() / 1.3 - 50;
    } else {
        chartSize = $(window).width() / 1.5;
    }

    $(".chart-radar").css({
        'display': 'block',
        'margin': '0 auto',
        'width': chartSize + 80,
        'height': chartSize + 70
    });
}