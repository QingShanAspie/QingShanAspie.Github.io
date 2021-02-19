function setClipboardText(event) {
    event.preventDefault();
    let node = document.createElement('div');
    node.appendChild(window.getSelection().getRangeAt(0).cloneContents());
    const htmlData = node.innerHTML
        + '<div> <br/><br/>---------------------------<br/>'
        + '著作权归作者所有。<br/>'
        + '本作品采用知识共享署名-非商业性使用-禁止演绎 4.0 国际许可协议进行许可。<br/>'
        + '您将不可以：无出处转载，重新编辑发布，商业使用!<br/>'
        + 'Link: ' + window.location.href.toString() 
        + '<br/>来源：青衫 Aspie'
        + '</div>';

    const textData = window.getSelection().getRangeAt(0)
        + '\n\n---------------------------\n'
        + '著作权归作者所有。\n'
        + '本作品采用知识共享署名-非商业性使用-禁止演绎 4.0 国际许可协议进行许可。\n'
        + '您将不可以：无出处转载，重新编辑发布，商业使用！\n'
        + 'Link: ' + window.location.href.toString() 
        + '\n来源：青衫 Aspie';

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
