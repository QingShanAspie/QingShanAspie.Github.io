function SaveCookies($data, name) {
    let Cookie = {
        "DATA": window.btoa(JSON.stringify($data))
    };
    const objToStr = JSON.stringify(Cookie);
    setCookie(name, objToStr);
}

function addCookie(name, time) {
    let exp = new Date();
    exp.setTime(exp.getTime() + 60 * 60 * time);
    document.cookie = name + "=" + 'true' + ";expires=" + exp.toGMTString() + ";path=/";
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
    if (r != null) {
        return unescape(r[2]);
    } else if (q != null) {
        return unescape(q[2]);
    } else {
        return null;
    }
}