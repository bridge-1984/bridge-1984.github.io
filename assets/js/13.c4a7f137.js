(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{408:function(t,v,_){"use strict";_.r(v);var s=_(1),a=Object(s.a)({},(function(){var t=this,v=t._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h2",{attrs:{id:"https-出现的原因"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#https-出现的原因"}},[t._v("#")]),t._v(" HTTPS 出现的原因")]),t._v(" "),v("p",[t._v("http 协议存在以下问题：")]),t._v(" "),v("ol",[v("li",[t._v("http 协议是透明的，这意味着任何人都可以拦截并获取到传输的内容")]),t._v(" "),v("li",[t._v("不验证身份，可能会遭遇伪装")]),t._v(" "),v("li",[t._v("无法证明报文的完整性，可能会遭到修改")])]),t._v(" "),v("p",[t._v("而 https 的出现正是为了解决这些问题，HTTPS = HTTP + SSL/TSL，在采用SSL后，HTTP就拥有了HTTPS的加密、证书和完整性保护这些功能")]),t._v(" "),v("h2",{attrs:{id:"如何保证安全性"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#如何保证安全性"}},[t._v("#")]),t._v(" 如何保证安全性")]),t._v(" "),v("ul",[v("li",[t._v("对称加密：加密和解密采用同一个密钥")]),t._v(" "),v("li",[t._v("不对称加密：存在公钥和私钥；公钥可以公开，而私钥只由自己保管。使用公钥加密则需要用对应的私钥进行解密")]),t._v(" "),v("li",[t._v("摘要算法：保证内容的完整性")]),t._v(" "),v("li",[t._v("数字签名：验证身份")]),t._v(" "),v("li",[t._v("CA 验证机构：保证公钥的合法有效")])]),t._v(" "),v("h2",{attrs:{id:"加密过程"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#加密过程"}},[t._v("#")]),t._v(" 加密过程")]),t._v(" "),v("ol",[v("li",[t._v("客户端发起请求后，服务器将 CA 验证机构颁发的公钥发给客户端")]),t._v(" "),v("li",[t._v("客户端接收到后，先验证证书是否有效，如果有效，则用这个公钥加密自己的公钥后，发给服务器")]),t._v(" "),v("li",[t._v("服务器用自己的私钥解密后，再用解密后的公钥加密内容后发送给客户端")])])])}),[],!1,null,null,null);v.default=a.exports}}]);