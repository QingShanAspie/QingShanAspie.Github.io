let $j = jQuery.noConflict();
$j.ajaxSetup({ cache: false });
let $data = {};

function setAnswer(id, newval) {
    $data[id] = newval;
}

$j(document).on('click', '.decision .caption.left', function () {
    $j(this).next().children('.option').removeClass('active');
    $j(this).next().children('.option.agree.max').addClass('active');
});

$j(document).on('click', '.decision .caption.right', function () {
    $j(this).prev().children('.option').removeClass('active');
    $j(this).prev().children('.option.disagree.max').addClass('active');
});

$j(document).on('click', '.btn-default.option', function () {
    $j(this).parent().children('.option').removeClass('active');
    $j(this).addClass('active');
});

function finish() {
    /* 清除表单 */
    $('.test-body').addClass('Out-hide');

    /* 动画 */
    setTimeout(function () {
        $('.test-body').addClass('hide');
        setTimeout(function () {
            ProcessBar(500);
            setTimeout(function () {
                $('.bar-line').addClass('Out-hide');
                setTimeout(function () {
                    $('.result').addClass('In-display');
                    let res = Resoult($data);
                    GetResult(res);
                }, 10)
            }, 500)
        }, 10)
    }, 100);
}

function ProcessBar(time) {
    document.getElementById('pro-bar').style.display = "block";
    $("#line").each(function (i, item) {
        const a = parseInt($(item).attr("w"));
        $(item).animate({
            width: a + "%"
        }, time);
    });
    let si = window.setInterval(
        function () {
            let a = $("#line").width();
            let b = (a / 200 * 100).toFixed(0);
            document.getElementById('percent').innerHTML = b + "%";
            if (document.getElementById('percent').innerHTML === "100%") {
                clearInterval(si);
                document.getElementById('percent').innerHTML = "分析完成！";
            }
        }, 70);
}

function Resoult($data) {
    let count = 0;
    for (let i = 0; i < Object.keys($data).length; ++i) {
        count += $data[i];
    }
    return count;
}

function ADHD_Resoult_A($data) {
    let count = 0;
    for (let i = 0; i < 9; ++i) {
        count += $data[i];
    }
    return count;
}

function ADHD_Resoult_B($data) {
    let count = 0;
    for (let i = 9; i < 18; ++i) {
        count += $data[i];
    }
    return count;
}

function SaveCookies($data, name) {
    let Cookie = {
        "DATA": window.btoa(JSON.stringify($data))
    };
    const objToStr = JSON.stringify(Cookie);
    setCookie(name, objToStr);
}

function setCookie(name, value) {
    let exp = new Date();
    exp.setTime(exp.getTime() + 60 * 60 * 2000);
    document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString() + ";path=/";
}

function getCookie(name) {
    let arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
    if (arr = document.cookie.match(reg)) {
        return unescape(arr[2]);
    } else {
        return null;
    }
}

function removeCookie(name) {
    let exp = new Date();
    exp.setTime(exp.getTime() - 1);
    document.cookie = name + "=" + escape("value") + ";expires=" + exp.toGMTString() + ";path=/";
}


function getQueryString(name) {
    let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    let reg_rewrite = new RegExp("(^|/)" + name + "/([^/]*)(/|$)", "i");
    let r = window.location.search.substr(1).match(reg);
    let q = window.location.pathname.substr(1).match(reg_rewrite);
    if(r != null){
        return unescape(r[2]);
    }else if(q != null){
        return unescape(q[2]);
    }else{
        return null;
    }
}