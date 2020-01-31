$(function () {
    let totop = $("#totop"),
        canvas = $("#totop-canvas"),
        percent = $("#totop-percent"),
        width = 48,
        height = 48,
        center = width / 2,
        radius = parseInt((width - 3) / 2),
        ctx = canvas[0].getContext("2d");
    function drawCircle(color, percent) {
        ctx.beginPath();
        ctx.arc(center, center, radius, - Math.PI / 2, Math.PI * 1.5 * percent, false);
        ctx.strokeStyle = color;
        ctx.lineCap = "round";
        ctx.lineWidth = 3;
        ctx.stroke();
    }

    $(window).scroll(function () {
        let docHeight = $(document).height() - $(window).height(),
            scrollTop = $(window).scrollTop(),
            per = parseInt((scrollTop / docHeight * 100) + 3);
        if (scrollTop >= 200) {
            totop.addClass("display");
            ctx.clearRect(0, 0, width, height);
            drawCircle("#efefef", 1);
            drawCircle("#555555", per / 100);
        } else {
            totop.removeClass("display");
        }
        // 在盒子里你超过
        if (per > 100) {
            per = 100;
        }

        percent.attr("data-percent", per);
    });
});