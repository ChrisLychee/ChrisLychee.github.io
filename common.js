// 支付方式
function getPayTypeList () {
  var payTypeList = [
    { label: '微信', payType: 10 },
    { label: '支付宝', payType: 20 },
    { label: '银联', payType: 30 },
    { label: '财付通', payType: 40 },
    { label: '现金', payType: 50 },
    { label: '物资', payType: 70 },
    { label: 'ICBC', payType: 80 },
    { label: '微信委托代扣', payType: 90 },
    { label: 'CCB', payType: 100 },
    { label: '华为钱包', payType: 110 },
    { label: '交通银行', payType: 130 },
    { label: '数字人民币建行钱包', payType: 140 },
    { label: '农行聚合支付',payType: 210},
	  { label: '农行掌银支付',payType: 213},
	  { label: '农行掌银数币支付',payType: 214},
  	{ label: '数字人民币交行钱包支付',payType: 150},
  	{ label: '数字人民币交行钱包支付(张家港)',payType: 160},
	  { label: '数字人民币工行钱包支付(张家港)',payType: 162},
  	{ label: '兴业扫码支付',payType: 346},
	  { label: '兴业微信聚合支付',payType: 344},
	  { label: '数字人民币兴业银行钱包支付',payType: 348},
	  { label: '微信小程序',payType: 300},
	  { label: '中国银行聚合支付',payType: 170},
	  { label: '建设银行聚合支付',payType: 180},
    { label: '其它', payType: 60 },
	  { label: '智慧财务中心', payType: 888 },
    { label: '银盛支付', payType: 501 }
  ]
  return payTypeList
}
// 获取支付方式
function getPayType (payType) {
  if (payType == 10) {
    return '微信支付'
  } else if (payType == 20) {
    return '支付宝支付'
  } else if (payType == 30) {
    return '银联支付'
  } else if (payType == 40) {
    return '财付通支付'
  } else if (payType == 50) {
    return '现金支付'
  } else if (payType == 60) {
    return '其它支付'
  } else if (payType == 70) {
    return '物资支付'
  } else if (payType == 80) {
    return 'ICBC支付'
  } else if (payType == 90) {
    return '微信委托代扣支付'
  } else if (payType == 100) {
    return 'CCB支付'
  } else if (payType == 110) {
    return '华为钱包支付'
  } else if (payType == 130) {
    return '交通银行支付'
  } else if (payType == 140) {
    return '数字人民币建行钱包支付'
  } else if (payType == 210) { 
    return '农行聚合支付'
  } else if (payType == 213) { 
    return '农行掌银支付'
  } else if (payType == 214) { 
    return '农行掌银数币支付'
  } else if (payType == 150) { 
    return '数字人民币交行钱包支付'
  } else if (payType == 160) { 
    return '数字人民币交行钱包支付(张家港)'
  } else if (payType == 162) { 
    return '数字人民币工行钱包支付(张家港)'
  } else if (payType == 300) { 
    return '微信小程序'
  } else if (payType == 346) { 
    return '兴业扫码支付'
  } else if (payType == 344) { 
    return '兴业微信聚合支付'
  } else if (payType == 348) { 
    return '数字人民币兴业银行钱包支付'
  } else if (payType == 888) { 
    return '智慧财务中心'
  } else if (payType == 170) { 
    return '中国银行聚合支付'
  } else if (payType == 180) { 
    return '建设银行聚合支付'
  } else if (payType == 501) { 
    return '银盛支付'
  } else {
    return '--'
  }
}
// 来源渠道
function getChannelList () {
  var channelList = [
  	{ label: '腾讯公益', channel: 60 },
  	{ label: '支付宝公益', channel: 70 },
  	{ label: '轻松公益', channel: 100 },
  	{ label: '字节跳动公益', channel: 80 },
  	{ label: '中国社会扶贫网', channel: 90 },
  	{ label: '公益宝网站', channel: 20 },
  	{ label: '公益宝微网站', channel: 21 },
    { label: '公益宝APP', channel: 22 },
  	{ label: '乐益购商城', channel: 50 },
  	{ label: '微公益', channel: 110 },
  	{ label: '水滴公益', channel: 120 },
  	{ label: '中银公益', channel: 130 },
  	{ label: '线下', channel: 30 },
  	{ label: '美团公益', channel: 140 },
  	{ label: '哔哩哔哩公益', channel: 150 },
    { label: '网站', channel: 10 },
    { label: '微网站', channel: 11 },
    { label: 'app', channel: 12 },
  	{ label: '微信小程序', channel: 13 },
    { label: '其它', channel: 40 },
  	{ label: '腾讯配捐', channel: 61 },
  	{ label: '帮帮公益', channel: 160 },
  	{ label: '陕西省慈善协会配捐', channel: 170 }
  ]
  return channelList
}
// 获取渠道名称
function getChannel (channel) {
  if (channel == 10) {
    return '网站'
  } else if (channel == 11) {
    return '微网站'
  } else if (channel == 12) {
    return 'app'
  } else if (channel == 13) {
    return '微信小程序'
  } else if (channel == 20) {
    return '公益宝网站'
  } else if (channel == 21) {
    return '公益宝微网站'
  } else if (channel == 22) {
    return '公益宝APP'
  } else if (channel == 30) {
    return '线下'
  } else if (channel == 40) {
    return '其它'
  } else if (channel == 50) {
    return '乐益购商城'
  } else if (channel == 60) {
    return '腾讯公益'
  } else if (channel == 70) {
    return '支付宝公益'
  } else if (channel == 80) {
    return '字节跳动公益'
  } else if (channel == 90) {
    return '中国社会扶贫网'
  }  else if (channel == 100) {
    return '轻松公益'
  }  else if (channel == 110) {
    return '微公益'
  }  else if (channel == 120) {
    return '水滴公益'
  }  else if (channel == 130) {
    return '中银公益'
  }  else if (channel == 140) {
    return '美团公益'
  }  else if (channel == 150) {
    return '哔哩哔哩公益'
  } else if (channel == 61) {
    return '腾讯配捐'
  } else if (channel == 160) {
    return '帮帮公益'
  } else if (channel == 170) {
    return '陕西省慈善协会配捐'
  } else {
    return '--'
  }
}
// 获取渠道图片
function getChannelImage (channel) {
  if (channel == 10) {
    return 'https://res-cdn.n.gongyibao.cn/res_cdn/gyb/pay/image/channel10.png'
  } else if (channel == 11) {
    return 'https://res-cdn.n.gongyibao.cn/res_cdn/gyb/pay/image/channel11.png'
  } else if (channel == 13) {
    return 'https://res-cdn.n.gongyibao.cn/res_cdn/gyb/pay/image/channel22.png'
  } else if (channel == 12) {
    return 'https://res-cdn.n.gongyibao.cn/res_cdn/gyb/pay/image/channel12.png'
  } else if (channel == 20) {
    return 'https://res-cdn.n.gongyibao.cn/res_cdn/gyb/pay/image/channel20.png'
  } else if (channel == 21) {
    return 'https://res-cdn.n.gongyibao.cn/res_cdn/gyb/pay/image/channel21.png'
  } else if (channel == 22) {
    return 'https://res-cdn.n.gongyibao.cn/res_cdn/gyb/pay/image/channel22.png'
  } else if (channel == 30) {
    return 'https://res-cdn.n.gongyibao.cn/res_cdn/gyb/pay/image/channel30.png'
  } else if (channel == 40) {
    return 'https://res-cdn.n.gongyibao.cn/res_cdn/gyb/pay/image/channel40.png'
  } else if (channel == 50) {
    return 'https://res-cdn.n.gongyibao.cn/res_cdn/gyb/pay/image/channel50.png'
  } else if (channel == 60) {
    return 'https://res-cdn.n.gongyibao.cn/res_cdn/gyb/pay/image/channel60.png'
  } else if (channel == 70) {
    return 'https://res-cdn.n.gongyibao.cn/res_cdn/gyb/pay/image/channel70.png'
  } else if (channel == 80) {
    return 'https://res-cdn.n.gongyibao.cn/res_cdn/gyb/pay/image/channel80.png'
  } else if (channel == 90) {
    return 'https://res-cdn.n.gongyibao.cn/res_cdn/gyb/pay/image/channel90.png'
  } else if (channel == 100) {
    return 'https://res-cdn.n.gongyibao.cn/res_cdn/gyb/pay/image/channel100.png'
  } else if (channel == 110) {
    return 'https://res-cdn.n.gongyibao.cn/res_cdn/gyb/pay/image/channel110.png'
  } else if (channel == 120) {
    return 'https://res-cdn.n.gongyibao.cn/res_cdn/gyb/pay/image/channel120.png'
  } else if (channel == 130) {
    return 'https://res-cdn.n.gongyibao.cn/res_cdn/gyb/pay/image/channel130.png'
  } else if (channel == 140) {
    return 'https://res-cdn.n.gongyibao.cn/res_cdn/gyb/pay/image/channel140.png'
  } else if (channel == 150) {
    return 'https://res-cdn.n.gongyibao.cn/res_cdn/gyb/pay/image/channel150.png'
  } else if (channel == 160) {
    return 'https://res-cdn.n.gongyibao.cn/res_cdn/gyb/pay/image/channel160.png'
  } else if (channel == 170) {
    return 'https://res-cdn.n.gongyibao.cn/res_cdn/gyb/pay/image/channel170.png'
  } else {
    return 'https://res-cdn.n.gongyibao.cn/res_cdn/gyb/pay/image/channel00.png'
  }
}

// 捐赠金额
function setAmount () {
  var amountArr = [16.8, 18.8, 28, 38, 68, 88, 88.8, 99, 99.9, 168, 188, 266, 288, 520, 1314]
  return amountArr[Math.floor(Math.random() * amountArr.length)]
}

// 捐赠留言
function setRemark () {
  var remarkArr = [
    '以善之名，从心出发。',
    '点滴爱心，成就善举。',
    '点滴爱心，助力公益。',
    '散是满天星，聚是一团火。',
    '您的每一次爱心参与，都将成为助力公益慈善的“温暖”力量！',
    '送出一份真情，奉献一份爱心。',
    '支持公益，支持中国慈善事业发展。',
    '你一点爱，我一点爱，互帮互助传关爱。',
    '汇小流成大海，积小善成大德。',
    '慈善送温暖，爱心献社会!',
    '“慈善”是一盏灯：温暖别人，照亮自己。',
    '一点爱心，照亮世界。',
    '携手慈善，与爱同行。']
  return remarkArr[Math.floor(Math.random() * remarkArr.length)]
}

// 求助类型
function getHelpTypeList () {
  var helpTypeList = [
    { label: '本站', helpType: 1 },
    { label: '医路同行', helpType: 2 },
    { label: '幸福家园', helpType: 6 },
    { label: '温暖二七（管理员）', helpType: 3 },
    { label: '温暖二七（居民）', helpType: 4 },
    { label: '退役军人', helpType: 10 },
    { label: '团团筑梦', helpType: 12 },
    { label: '宁波慈善医疗众筹', helpType: 5 }
  ]
  return helpTypeList
}
// 获取求助类型
function getHelpType (helpType) {
  if (helpType == 1) {
    return '本站'
  } else if (helpType == 2) {
    return '医路同行'
  } else if (helpType == 6) {
    return '幸福家园'
  } else if (helpType == 3) {
    return '温暖二七（管理员）'
  } else if (helpType == 4) {
    return '温暖二七（居民）'
  } else if (helpType == 10) {
    return '退役军人'
  } else if (helpType == 12) {
    return '团团筑梦'
  } else if (helpType == 5) {
    return '宁波慈善医疗众筹'
  } else {
    return '--'
  }
}

// WEBPACK FOOTER //