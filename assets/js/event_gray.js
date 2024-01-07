let date = new Date();
let event_grayDay = [ "1.11", "1.14", "1.15", "4.4", "9.18", "11.26", "12.13"]

if (event_grayDay.indexOf((date.getMonth() + 1) + "." + (date.getDate())) !== -1) {
    $("html").css({
        "-webkit-filter": "grayscale(100%)",
        "-moz-filter": "grayscale(100%)",
        "-ms-filter": "grayscale(100%)",
        "-o-filter": "grayscale(100%)",
        "filter": "progid:DXImageTransform.Microsoft.BasicImage(grayscale=1)",
        "_filter": "none"
    })
}
