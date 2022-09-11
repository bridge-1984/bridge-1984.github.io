(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{418:function(r,t,s){"use strict";s.r(t);var e=s(1),a=Object(e.a)({},(function(){var r=this,t=r._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":r.$parent.slotKey}},[t("h2",{attrs:{id:"浏览器内核"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#浏览器内核"}},[r._v("#")]),r._v(" 浏览器内核")]),r._v(" "),t("p",[t("strong",[r._v("1. 概念")]),t("br"),r._v("\n浏览器内核即浏览器所采用的渲染引擎，是浏览器最核心的部分，决定了浏览器如何显示网页的内容及页面元素的格式。")]),r._v(" "),t("p",[t("strong",[r._v("2. 常用浏览器的内核")])]),r._v(" "),t("ul",[t("li",[r._v("IE：Trident, js引擎-chakra(9.0以上)")]),r._v(" "),t("li",[r._v("firefox：Gecko")]),r._v(" "),t("li",[r._v("Safari：webkit")]),r._v(" "),t("li",[r._v("chrome：Chromium/Blink，js引擎-V8")]),r._v(" "),t("li",[r._v("Opera： blink")]),r._v(" "),t("li",[r._v("Edge：Chromium，js引擎-chakra")])]),r._v(" "),t("p",[t("strong",[r._v("3. 主要组件")]),t("br"),r._v("\n浏览器的主要组件包括：")]),r._v(" "),t("p",[t("strong",[r._v("用户界面 (User Interface)")]),r._v(" － 包括地址栏、后退/前进按钮、书签目录等，也就是你所看到的除了用来显示你所请求页面的主窗口之外的其他部分。"),t("br"),r._v(" "),t("strong",[r._v("浏览器引擎 (Browser engine)")]),r._v(" － 用来查询及操作渲染引擎的接口。"),t("br"),r._v(" "),t("strong",[r._v("渲染引擎 (Rendering engine)")]),r._v(" － 负责解析用户请求的内容(如 HTML 或 XML，渲染引擎会解析 HTML 或 XML，以及相关 CSS，然后返回解析后的内容)"),t("br"),r._v(" "),t("strong",[r._v("网络(Networking)")]),r._v("－ 用来完成网络调用，例如 http 请求，它具有平台无关的接口，可以在不同平台上工作。"),t("br"),r._v(" "),t("strong",[r._v("UI 后端(UI backend)")]),r._v(" － 用来绘制类似组合选择框及对话框等基本组件，具有不特定于某个平台的通用接口，底层使用操作系统的用户接口。"),t("br"),r._v(" "),t("strong",[r._v("JS 解释器(JavaScript interpreter)")]),r._v(" － 用来解释执行 JS 代码。"),t("br"),r._v(" "),t("strong",[r._v("数据存储 (Data storage)")]),r._v(" － 属于持久层，浏览器需要在硬盘中保存类似 cookie 的各种数据，HTML5 定义了 web database 技术，这是一种轻量级完整的客户端存储技术")]),r._v(" "),t("p",[t("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/8d10b817f6774dc79ae0991aa1de6603~tplv-k3u1fbpfcp-zoom-1.image",alt:""}})]),r._v(" "),t("h2",{attrs:{id:"浏览器渲染页面的过程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#浏览器渲染页面的过程"}},[r._v("#")]),r._v(" "),t("a",{attrs:{href:"https://www.liuxing.io/blog/how-browser-rendering-works/",target:"_blank",rel:"noopener noreferrer"}},[r._v("浏览器渲染页面的过程"),t("OutboundLink")],1)]),r._v(" "),t("h3",{attrs:{id:"js-文件为什么要放在尾部"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#js-文件为什么要放在尾部"}},[r._v("#")]),r._v(" js 文件为什么要放在尾部？")]),r._v(" "),t("p",[r._v("首先我们从浏览器的渲染过程可以得知，JS 线程会阻塞 GUI 渲染线程的执行。因为 js 可能会涉及到对 dom 元素的操作，导致样式改变，所以应该等待js加载完后再进行构建 dom 树，避免一些不必要的操作。而放在尾部等dom树构建完之后再执行 js 就不会阻塞 dom 的构建，也不会出现因为 dom 还没构建就要对其进行操作的错误。")]),r._v(" "),t("h3",{attrs:{id:"css-文件为什么要放在头部"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#css-文件为什么要放在头部"}},[r._v("#")]),r._v(" css 文件为什么要放在头部？")]),r._v(" "),t("p",[r._v("css 规则树和 dom 树是分开的，放在首部并不会阻塞 dom 树的构建，而放在尾部可能会导致页面出现无样式再变成有样式的过程，带给用户不好的体验")])])}),[],!1,null,null,null);t.default=a.exports}}]);