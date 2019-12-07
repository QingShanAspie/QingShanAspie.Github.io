function Resoult($data) {
    let i;
    let count = 0;
    for (i = 0; i < Object.keys($data).length; ++i) {
        count += $data[i];
    }
    return count;
}

function ADHD_Resoult_A($data) {
    let i;
    let count = 0;
    for (i = 0; i < 9; ++i) {
        count += $data[i];
    }
    return count;
}

function ADHD_Resoult_B($data) {
    let i;
    let count = 0;
    for (i = 9; i < 18; ++i) {
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