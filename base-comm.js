function BASE_GRAY(destEle) {
    let X_App_Css = document.createElement('style');
    let X_App_Css_Str = destEle + ' { -webkit-filter: grayscale(100%); -moz-filter: grayscale(100%); -ms-filter: grayscale(100%); -o-filter: grayscale(100%); filter: grayscale(100%); filter: progid:DXImageTransform.Microsoft.BasicImage(grayscale=1); filter: gray; }';
    X_App_Css.type='text/css';
    X_App_Css.innerHTML = X_App_Css_Str;
    document.getElementsByTagName('head')[0].appendChild(X_App_Css);
}

if (location.host.indexOf('hbcf.') > 0 || location.host === 'wx.n.gongyibao.cn' || location.host === 'zhcszhxfjy.wx.n.gongyibao.cn') {
//    BASE_GRAY('.baseGrayscale');
}

if (location.host === 'www.gongyibao.cn') {
//    BASE_GRAY('html');
}
