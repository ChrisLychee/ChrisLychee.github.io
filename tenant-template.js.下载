let $gyb_sdk_tenant_wx_template = {};
$gyb_sdk_tenant_wx_template.cfg = [
    {
        "host": "zzhsz.wx.dx.houpukeji.com",
        "templat": "rctemplate",
        "skinTheme": "dark"
    },
    {
        "host": "zzshszh.wx.n.gongyibao.cn",
        "templat": "rctemplate",
        "skinTheme": "light"
    },
    {
        "host": "192.168.6.183:9001",
        "templat": "rctemplate",
        "skinTheme": "dark"
    }
];

$gyb_sdk_tenant_wx_template.getCfg = function () {
    let host = location.host
    let cfgInfo = $gyb_sdk_tenant_wx_template.cfg.find(item => item.host == host);
    if (!cfgInfo) {
        //普通模板
        return "normal";
    }
    return cfgInfo.templat;
}

$gyb_sdk_tenant_wx_template.getTheme = function () {
    let host = location.host
    let cfgInfo = $gyb_sdk_tenant_wx_template.cfg.find(item => item.host == host);
    if (!cfgInfo) {
        //默认主题
        return "light";
    }
    return cfgInfo.skinTheme;
}