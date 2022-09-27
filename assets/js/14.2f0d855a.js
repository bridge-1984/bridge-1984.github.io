(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{404:function(e,t,_){"use strict";_.r(t);var s=_(1),r=Object(s.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h2",{attrs:{id:"https-出现的原因"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#https-出现的原因"}},[e._v("#")]),e._v(" HTTPS 出现的原因")]),e._v(" "),t("p",[e._v("http 协议存在以下问题：")]),e._v(" "),t("ol",[t("li",[e._v("http 协议是透明的，这意味着任何人都可以拦截并获取到传输的内容")]),e._v(" "),t("li",[e._v("不验证身份，可能会遭遇伪装")]),e._v(" "),t("li",[e._v("无法证明报文的完整性，可能会遭到修改")])]),e._v(" "),t("p",[e._v("而 https 的出现正是为了解决这些问题，HTTPS = HTTP + SSL/TSL，在采用SSL后，HTTP就拥有了HTTPS的加密、证书和完整性保护这些功能")]),e._v(" "),t("h2",{attrs:{id:"如何保证安全性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#如何保证安全性"}},[e._v("#")]),e._v(" 如何保证安全性")]),e._v(" "),t("ul",[t("li",[e._v("对称加密：加密和解密采用同一个密钥")]),e._v(" "),t("li",[e._v("不对称加密：存在公钥和私钥；公钥可以公开，而私钥只由自己保管。使用公钥加密则需要用对应的私钥进行解密")]),e._v(" "),t("li",[e._v("摘要算法：保证内容的完整性")]),e._v(" "),t("li",[e._v("数字签名：验证身份")]),e._v(" "),t("li",[e._v("CA 验证机构：保证公钥的合法有效")])]),e._v(" "),t("h2",{attrs:{id:"加密过程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#加密过程"}},[e._v("#")]),e._v(" 加密过程")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://img-blog.csdnimg.cn/2021042713534660.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzMxNDQyNzQz,size_16,color_FFFFFF,t_70",alt:""}})]),e._v(" "),t("ol",[t("li",[e._v("客户端通过发送 "),t("strong",[e._v("Client Hello")]),e._v(" 报文开始 SSL 通信。报文中包含客户端支持的 SSL 版本、加密组件列表等，并附带一个随机数，这里记为 A")]),e._v(" "),t("li",[e._v("服务端接收到后，向客户端发送 "),t("strong",[e._v("Server Hello")]),e._v(" 报文，包含 SSL 的版本和加密组件，加密组件是从客户端发送的列表中筛选出来的，也会附带一个随机数，这里记为 B")]),e._v(" "),t("li",[e._v("接着服务端发送 "),t("strong",[e._v("Certificate")]),e._v(" 报文。报文中包含带有数字签名的公钥。"),t("br"),e._v("\n由于直接发送公钥给客户端，可能会被黑客从中拦截，然后伪造公钥发送给客户端，为了保证公钥的有效性，需要引入 CA 验证机构。"),t("br"),e._v("\n服务器将自己的公钥给CA，CA 将服务器的相关信息（域名、颁发者、有效时间等）和公钥采用摘要算法产生摘要，CA 再用自己的私钥加密这个摘要。"),t("br"),e._v("\n摘要 + 服务器信息 + 公钥 合并形成数字证书颁发给服务器"),t("br"),e._v("\n客户端的操作系统和浏览器都植入了大量的 CA 公钥，所以客户端接收到数字证书后，用自己电脑上对应的 CA 公钥进行解密后得到摘要，再用摘要算法对接收到的信息和公钥产生摘要，两者对比即可判断接收到的公钥是否合法，是否有遭到修改")]),e._v(" "),t("li",[e._v("最后服务器发送 "),t("strong",[e._v("Server Hello Done")]),e._v(" 报文通知客户端，最初阶段的SSL握手协商部分结束")]),e._v(" "),t("li",[e._v("客户端发送 "),t("strong",[e._v("Client Key Exchange")]),e._v(" 报文，报文中包含后续通信加密使用的一个随机密码串("),t("strong",[e._v("Pre-master secret")]),e._v(")，并用步骤3中获得的公钥进行了加密")]),e._v(" "),t("li",[e._v("客户端接着发送 "),t("strong",[e._v("Change Cipher Spec")]),e._v(" 报文，该报文提示服务器在此之后的通信会采用步骤5中的密码串进行加密")]),e._v(" "),t("li",[e._v("客户端发送 "),t("strong",[e._v("Finished")]),e._v(" 报文。该报文包含连接至今全部报文的整体校验值。以服务器能否正确解密该报文，来判断这次握手协商能否成功")]),e._v(" "),t("li",[e._v("服务端同样发送 "),t("strong",[e._v("Change Cipher Spec")]),e._v(" 报文")]),e._v(" "),t("li",[e._v("服务端同样发送 "),t("strong",[e._v("Finished")]),e._v(" 报文")]),e._v(" "),t("li",[e._v("交换完毕后，SSL 连接建立完成，往后的通信就是采用 Pre-master secret 进行加密保证安全性")])]),e._v(" "),t("hr"),e._v(" "),t("p",[t("strong",[e._v("为什么最后客户端和服务端都要发送一个Finish报文？")])]),e._v(" "),t("p",[e._v("上面已经提及，Finish报文是对至今全部报文的整体校验值（也就是HASH值）。当客户端把这个值通过得到的公钥进行加密的时候，服务器得到之后对其进行解密，然后再对全部报文进行一个HASH求值。如果这个值跟解密得到的值相等的话，那么说明客户端是可信赖的。\n同样的，服务器发送这样的一个整体校验值，用来客户端验证服务器是否是真正要进行通信的那一个。\n综上，这个Finish报文就是用来校验双方的身份的。")]),e._v(" "),t("p",[t("strong",[e._v("整个过程中产生的三个随机数有什么用呢？")]),t("br"),e._v("\n还有，后面进行HTTP通信的时候，是用哪一个密钥进行加密，还有怎么保证报文的完整性。"),t("br"),e._v("\n对于客户端："),t("br"),e._v("\n当其生成了Pre-master secret之后，会结合原来的A、B随机数，用DH算法计算出一个master secret，紧接着根据这个master secret推导出hash secret和session secret。")]),e._v(" "),t("p",[e._v("对于服务端："),t("br"),e._v("\n当其解密获得了Pre-master secret之后，会结合原来的A、B随机数，用DH算法计算出一个master secret，紧接着根据这个master secret推导出hash secret和session secret。")]),e._v(" "),t("p",[e._v("在客户端和服务端的master secret是依据三个随机数推导出来的，它是不会在网络上传输的，只有双方知道，不会有第三者知道。同时，客户端推导出来的session secret和hash secret与服务端也是完全一样的。")]),e._v(" "),t("p",[e._v("那么现在双方如果开始使用对称算法加密来进行通讯，使用哪个作为共享的密钥呢？过程是这样子的：")]),e._v(" "),t("p",[e._v("双方使用对称加密算法进行加密，用hash secret对HTTP报文做一次运算生成一个MAC，附在HTTP报文的后面，然后用session-secret加密所有数据（HTTP+MAC），然后发送。")]),e._v(" "),t("p",[e._v("接收方则先用session-secret解密数据，然后得到HTTP+MAC，再用相同的算法计算出自己的MAC，如果两个MAC相等，证明数据没有被篡改。")]),e._v(" "),t("p",[e._v("MAC(Message Authentication Code)称为报文摘要，能够查知报文是否遭到篡改，从而保护报文的完整性。")]),e._v(" "),t("p",[t("strong",[e._v("为什么要有3个随机数？")]),t("br"),e._v("\n计算机所谓的随机只是一种伪随机，如果只是单单采用 pre-master secret，不能保证密钥一定不同，且伪随机也容易被人推断出，而用3个随机数组合计算出的结果作为密钥，更具随机性，不容易被猜出")]),e._v(" "),t("blockquote",[t("p",[e._v("参考资料"),t("br"),e._v("\n《图解 HTTP》"),t("br"),e._v(" "),t("a",{attrs:{href:"https://blog.csdn.net/qq_31442743/article/details/116199453",target:"_blank",rel:"noopener noreferrer"}},[e._v("HTTPS通信的过程的三个随机数的作用"),t("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=r.exports}}]);