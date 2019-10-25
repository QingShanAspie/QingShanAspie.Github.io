function setClipboardText(event) {
    event.preventDefault();
    const htmlData = '<div>非常抱歉：<br/>'
        + '著作权归作者所有。<br/>'
        + '本作品采用知识共享署名-非商业性使用-禁止演绎 4.0 国际许可协议进行许可。<br/>'
        + '您将不可以：转载，重新发布，商业使用!<br/>'
        + '来源：青衫 Aspie<br/><br/>'
        + '</div>';

    const textData = '非常抱歉：'
        + '著作权归作者所有。'
        + '本作品采用知识共享署名-非商业性使用-禁止演绎 4.0 国际许可协议进行许可。'
        + '您将不可以：转载，重新发布，商业使用！'
        + '来源：青衫 Aspie';

    if (event.clipboardData) {
        event.clipboardData.setData("text/html", htmlData);
        event.clipboardData.setData("text/plain", textData);
    } else if (window.clipboardData) {
        return window.clipboardData.setData("text", textData);
    }
}

const answer = document.getElementById("body");
answer.addEventListener('copy', function (e) {
    setClipboardText(e);
});