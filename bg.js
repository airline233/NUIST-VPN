chrome.browserAction.onClicked.addListener(function (tab) {
    chrome.tabs.create({ url: "https://client.vpn.nuist.edu.cn/https/webvpn52ac993ae6b0449e32dc8fae4390149c6ed190557ad6273320f9ca9a774dd06e/?url=" + tab.url });
    //鉴于你校的神奇vpn对url进行了加密,那我索性就借用夹总的服务器来重定向好了,反正微博不敢在跳转到edu.cn的时候作妖
    /*20250811 夹总的跳转还真变成了白名单且edu.cn后缀不在里面，需要自行申请 更换为了基于cf workers和eu.org后缀永久免费域的跳转url
        原始URL:https://ref.cpc.cn.eu.org/?url=
    */
    /*let url = tab.url.split("/");
    let hexCharCode = [];
    for (let i = 0; i < url[2].length; i++) {
        hexCharCode.push((url[2].charCodeAt(i)).toString(16));
    }
    console.log(url.slice(3));
    if (url[0] == "https:") {
        chrome.tabs.create({ url: "https://client.vpn.nuist.edu.cn/https/webvpn" + hexCharCode.join("") + "/" + url.slice(3).join("/") });
    }
    else {
        chrome.tabs.create({ url: "https://client.vpn.nuist.edu.cn/http/webvpn" + hexCharCode.join("") + "/" + url.slice(3).join("/") });
    }*/
});

