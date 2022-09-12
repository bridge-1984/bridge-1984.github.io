(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{404:function(t,r,s){"use strict";s.r(r);var a=s(1),_=Object(a.a)({},(function(){var t=this,r=t._self._c;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h2",{attrs:{id:"_1-对语义化的理解"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-对语义化的理解"}},[t._v("#")]),t._v(" 1. 对语义化的理解")]),t._v(" "),r("p",[r("strong",[t._v("概念")]),t._v("："),r("br"),t._v("\nhtml 中有许多元素本身就包含了标签所包含内容的一些信息，如浏览器在解析到 h1 标签时，就会将该标签包含的内容解释为最重要的标题；"),r("br"),t._v("\nhtml 的标签语义化即是指正确使用这些具有语义的标签来恰当表示文档的结构"),r("br"),t._v(" "),r("strong",[t._v("优点")]),t._v("："),r("br"),t._v("\n1）在没有css的情况下，也能呈现出良好的内容结构"),r("br"),t._v("\n2）有利于SEO（搜索优化），爬虫依赖于标签来确定关键词的权重，语义化可以使爬虫抓取到更多有效信息"),r("br"),t._v("\n3）代码结构清晰，更具可读性，方便维护和更新"),r("br"),t._v("\n4）方便其他设备解析，如移动设备、屏幕阅读器、盲人阅读器等")]),t._v(" "),r("h2",{attrs:{id:"_2-script-标签中的-defer-和-async-属性"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-script-标签中的-defer-和-async-属性"}},[t._v("#")]),t._v(" 2. "),r("strong",[t._v("script 标签中的 defer 和 async 属性")])]),t._v(" "),r("p",[t._v("html 中会遇到3种script"),r("br"),t._v("\n1）"),r("code",[t._v("<script src='xxx'><\/script>")]),r("br"),t._v("\n浏览器在解析html时，如果遇到这种没有标签的 script 标签，会暂停解析，先发送网络请求获取该 js 脚本的内容，然后让 JS 引擎执行获得的代码，当代码执行完毕后再继续解析 html。"),r("br"),t._v("\n存在的问题：如果因为网络或其他原因 js 脚本迟迟获取不到，或js 脚本运行时间过长时，html 的解析就会被无限延迟，最终浏览器会呈现出空白的画面。"),r("br"),r("br"),t._v("\n2）"),r("code",[t._v("<script scr='xxx' defer><\/script>")]),r("br"),t._v("\n当浏览器器遇到带 defer 属性的 script 时，会异步 发起对 js 脚本的网络请求，而不会阻塞 html 的解析。当网络请求回来后， 如果 html 还没有解析完，浏览器会继续解析 html 直到完成之后，再执行 js 代码。"),r("br"),t._v("\n有多个defer时，会按照其在 html 的先后顺序运行"),r("br"),r("br"),t._v("\n3）"),r("code",[t._v("<script scr='xxx' async><\/script>")]),r("br"),t._v("\n当浏览器器遇到带 async 属性的 script 时，同样会异步 发起对 js 脚本的网络请求。不同之处在于当网络请求返回后，如果 html 还未解析完毕，会先暂停 html 的解析，转而执行返回的 js 代码，运行完 js 代码后再重新开始 html 的解析"),r("br"),t._v("\n存在的问题："),r("br"),t._v("\n在执行 js 代码时， 我们并不知道此刻 html 的解析情况，这也就导致了如果在 js 代码中需要用到某个 DOM 节点，这个 DOM 元素可能获取得到也可能获取不到，即 async 是不可控的；"),r("br"),t._v("\n而在有多个async时，其运行的先后顺序也是无法确定的，哪个网络请求先返回，就会先执行哪一个。")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://juejin.cn/post/6894629999215640583",target:"_blank",rel:"noopener noreferrer"}},[t._v("图解 async 和 defer 属性"),r("OutboundLink")],1)]),t._v(" "),r("blockquote",[r("p",[t._v("HTML5 相关")])]),t._v(" "),r("h2",{attrs:{id:"_3-html-全局属性-global-attribute-有哪些"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-html-全局属性-global-attribute-有哪些"}},[t._v("#")]),t._v(" 3. HTML "),r("a",{attrs:{href:"https://www.w3school.com.cn/tags/html_ref_standardattributes.asp",target:"_blank",rel:"noopener noreferrer"}},[t._v("全局属性（global attribute）"),r("OutboundLink")],1),t._v("有哪些")]),t._v(" "),r("p",[t._v("概念：全部标签都有的属性，即使属性对某些标签不起作用"),r("br"),t._v("\n1）accesskey：规定激活元素的快捷键"),r("br"),t._v("\n例："),r("code",[t._v('<a href="http://www.baidu.com" accesskey="c"></a>')]),r("br"),t._v("\n按住 alt + c 即可激活该 a 标签，跳转到百度"),r("br"),t._v("\n2）class：为标签定义类名"),r("br"),t._v("\n3）"),r("em",[r("strong",[t._v("contenteditable")])]),t._v("：规定标签是否可编辑，ture为可以，false为不可以"),r("br"),t._v("\n4）"),r("em",[t._v("contextmenu")]),t._v("：规定元素的上下文菜单。上下文菜单会在用户右键点击元素时出现。目前只有 FireFox 支持"),r("br"),t._v("\n5) ......")]),t._v(" "),r("h2",{attrs:{id:"_4-html-文件开头的-doctype-作用"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_4-html-文件开头的-doctype-作用"}},[t._v("#")]),t._v(" 4. HTML 文件开头的 Doctype 作用")]),t._v(" "),r("p",[t._v("doctype 必须位于文档最开始的位置，在所有标签之前，用于告诉浏览器应该按照哪种文档定义来解析文档")]),t._v(" "),r("h2",{attrs:{id:"_5-html5-是什么-为什么要推出html5"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_5-html5-是什么-为什么要推出html5"}},[t._v("#")]),t._v(" 5. HTML5 是什么？为什么要推出HTML5")]),t._v(" "),r("p",[t._v("HTML5 是指包含html、css 和 js 在内的一套技术组合，是HTML的最新版本，由W3C于2014年完成标准制定。"),r("br"),t._v("\n目的是为了增强浏览器的原生功能，以减少Web应用对于插件的需要；同时增强对移动互联网的支持和用户的体验")]),t._v(" "),r("h2",{attrs:{id:"_6-html5-的优缺点"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_6-html5-的优缺点"}},[t._v("#")]),t._v(" 6. HTML5 的优缺点")]),t._v(" "),r("p",[r("strong",[t._v("优点：")]),r("br"),t._v("\n1）HTML5 本身是由 W3C 推荐出来的，网络标准统一"),r("br"),t._v("\n2）多设备、跨平台\n3）即时更新，提高了用户的体验\n4）新增了一些标签，有利于开发者定义新的内容\n5）可以给网页带来更多的多媒体元素，可以很好地代替flash\n6）语义化，有利于SEO")]),t._v(" "),r("p",[r("strong",[t._v("缺点：")]),r("br"),t._v("\n1）浏览器兼容性差，IE9以下基本不支持，许多浏览器对新特性的支持程度也不一样"),r("br"),t._v("\n2）安全性问题，HTML5 新增的 web storage、web socket 这样的功能容易被黑客利用，来盗取用户信息和资料")]),t._v(" "),r("h2",{attrs:{id:"_7-html5-新增的标签、淘汰的标签"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_7-html5-新增的标签、淘汰的标签"}},[t._v("#")]),t._v(" 7. HTML5 新增的标签、淘汰的标签")]),t._v(" "),r("h2",{attrs:{id:"_8-html5-新增的-api"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_8-html5-新增的-api"}},[t._v("#")]),t._v(" 8. HTML5 新增的 API")]),t._v(" "),r("h2",{attrs:{id:"_9-html5-新增的-input-元素"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_9-html5-新增的-input-元素"}},[t._v("#")]),t._v(" 9. HTML5 新增的 input 元素")])])}),[],!1,null,null,null);r.default=_.exports}}]);