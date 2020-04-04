let date = new Date();
let eventGrayDay = ["4.4", "9.18", "12.13"]

if (eventGrayDay.indexOf((date.getMonth() + 1) + "." + (date.getDate())) !== -1) {
    $("html").css({
        "-webkit-filter": "grayscale(100%)",
        "-moz-filter": "grayscale(100%)",
        "-ms-filter": "grayscale(100%)",
        "-o-filter": "grayscale(100%)",
        "filter": "progid:DXImageTransform.Microsoft.BasicImage(grayscale=1)",
        "_filter": "none"
    })
}