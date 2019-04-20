(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{278:function(e,n,r){"use strict";r.r(n);var t=r(2),l=Object(t.a)({},function(){var e=this,n=e.$createElement,r=e._self._c||n;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"译-html5-全屏full-screen-api，支持chrome、ff、ie11"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#译-html5-全屏full-screen-api，支持chrome、ff、ie11","aria-hidden":"true"}},[e._v("#")]),e._v(" [译]HTML5 全屏Full-Screen API，支持Chrome、FF、IE11")]),e._v(" "),r("h2",{attrs:{id:"什么是full-screen-api"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#什么是full-screen-api","aria-hidden":"true"}},[e._v("#")]),e._v(" 什么是Full-Screen API")]),e._v(" "),r("p",[e._v("这个API允许单个的元素全屏显示，和F11全屏不同，这个API用来展示某个容器里面的图片、视频等。")]),e._v(" "),r("h2",{attrs:{id:"支持的浏览器"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#支持的浏览器","aria-hidden":"true"}},[e._v("#")]),e._v(" 支持的浏览器")]),e._v(" "),r("p",[e._v("所有的最新浏览器，包括IE11呢。移动端的支持有限，不过没关系，反正移动端的浏览器都是近乎全屏了。")]),e._v(" "),r("p",[e._v("因为这个API还没有规范，所以很可能以后会有改变，同时，使用起来也少不了各种浏览器厂商的前缀了。")]),e._v(" "),r("hr"),e._v(" "),r("h2",{attrs:{id:"javascript-部分的api"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#javascript-部分的api","aria-hidden":"true"}},[e._v("#")]),e._v(" Javascript 部分的API")]),e._v(" "),r("p",[e._v("下面的例子中，想要全屏显示的是ID为myimage的图片。先来看一下几个相应的方法。")]),e._v(" "),r("h3",{attrs:{id:"_1-document-fullscreenenabled"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-document-fullscreenenabled","aria-hidden":"true"}},[e._v("#")]),e._v(" 1. document.fullscreenEnabled")]),e._v(" "),r("p",[e._v("如果当前浏览器允许进入全屏模式，这个属性返回true，可用来检测浏览器是否支持全屏API")]),e._v(" "),r("pre",[r("code",[e._v("if (document.fullscreenEnabled) { ... }\n")])]),e._v(" "),r("p",[e._v("早期的时候，screen中的s是大写的，现在都小写了，除了Firefox；加上前缀，跨浏览器的代码是：")]),e._v(" "),r("pre",[r("code",[e._v("// full-screen 可用?\nif (\n    document.fullscreenEnabled || \n    document.webkitFullscreenEnabled || \n    document.mozFullScreenEnabled ||\n    document.msFullscreenEnabled\n) {\n...\n}\n")])]),e._v(" "),r("p",[e._v("Opera 12是唯一不需要加前缀的浏览器，不过Opera 15+ 需要加webkit，为啥呢？因为两年前就换内核了啊，不过这个不怎么重要，反正很少人用Opera")]),e._v(" "),r("h3",{attrs:{id:"_2-element-requestfullscreen"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-element-requestfullscreen","aria-hidden":"true"}},[e._v("#")]),e._v(" 2. element.requestFullscreen()")]),e._v(" "),r("p",[e._v("这个方法是单个元素全屏显示")]),e._v(" "),r("p",[e._v("例如：")]),e._v(" "),r("pre",[r("code",[e._v('document.getElementById("myimage").requestFullscreen();\n')])]),e._v(" "),r("p",[e._v("同样，Firefox的screen的s是大写的：")]),e._v(" "),r("pre",[r("code",[e._v('var i = document.getElementById("myimage");\n \n// go full-screen\nif (i.requestFullscreen) {\n    i.requestFullscreen();\n} else if (i.webkitRequestFullscreen) {\n    i.webkitRequestFullscreen();\n} else if (i.mozRequestFullScreen) {\n    i.mozRequestFullScreen();\n} else if (i.msRequestFullscreen) {\n    i.msRequestFullscreen();\n}\n')])]),e._v(" "),r("h3",{attrs:{id:"_3-document-fullscreenelement"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-document-fullscreenelement","aria-hidden":"true"}},[e._v("#")]),e._v(" 3. document.fullscreenElement")]),e._v(" "),r("p",[e._v("这个属性返回当前全屏显示的元素，没有则返回null")]),e._v(" "),r("pre",[r("code",[e._v("if (document.fullscreenElement) { ... }\n")])]),e._v(" "),r("p",[e._v("同样，Firefox的screen的s是大写的：")]),e._v(" "),r("pre",[r("code",[e._v("// are we full-screen?\nif (\n    document.fullscreenElement ||\n    document.webkitFullscreenElement ||\n    document.mozFullScreenElement ||\n    document.msFullscreenElement\n) {\n...\n}\n")])]),e._v(" "),r("h3",{attrs:{id:"_4-document-exitfullscreen"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_4-document-exitfullscreen","aria-hidden":"true"}},[e._v("#")]),e._v(" 4. document.exitFullscreen")]),e._v(" "),r("p",[e._v("这个方法退出全屏状态")]),e._v(" "),r("pre",[r("code",[e._v("document.exitFullscreen();\n")])]),e._v(" "),r("p",[e._v("同样的，‘screen’是小写的，不过它之前写作 cancelFullScreen，在Firefox仍然还是这样写。")]),e._v(" "),r("pre",[r("code",[e._v("// exit full-screen\nif (document.exitFullscreen) {\n    document.exitFullscreen();\n} else if (document.webkitExitFullscreen) {\n    document.webkitExitFullscreen();\n} else if (document.mozCancelFullScreen) {\n    document.mozCancelFullScreen();\n} else if (document.msExitFullscreen) {\n    document.msExitFullscreen();\n}\n")])]),e._v(" "),r("h3",{attrs:{id:"_5-document-fullscreenchange-event"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_5-document-fullscreenchange-event","aria-hidden":"true"}},[e._v("#")]),e._v(" 5. document.fullscreenchange event")]),e._v(" "),r("p",[e._v("进/出全屏状态的时候触发事件，不附带任何信息，不过可通过上面介绍的document.fullscreenElement来监测当前是否是全屏状态。")]),e._v(" "),r("pre",[r("code",[e._v('document.addEventListener("fullscreenchange", function() { ... });\n')])]),e._v(" "),r("p",[e._v("下面是各浏览器的写法，注意IE的写法有点特殊")]),e._v(" "),r("pre",[r("code",[e._v('document.addEventListener("fullscreenchange", FShandler);\ndocument.addEventListener("webkitfullscreenchange", FShandler);\ndocument.addEventListener("mozfullscreenchange", FShandler);\ndocument.addEventListener("MSFullscreenChange", FShandler);\n')])]),e._v(" "),r("h3",{attrs:{id:"_6-document-fullscreenerror-event"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_6-document-fullscreenerror-event","aria-hidden":"true"}},[e._v("#")]),e._v(" 6. document.fullscreenerror event")]),e._v(" "),r("p",[e._v("全屏有时会不成功，比如, iframes 如果没有 allowfullscreen 属性 或者窗口化的插件的内容想执行全屏却被阻止（windowed plug-in content may be blocked）的时候，fullscreenerror 事件就可能被触发：")]),e._v(" "),r("pre",[r("code",[e._v('document.addEventListener("fullscreenerror", function() { ... });\n')])]),e._v(" "),r("p",[e._v("同样的，加上个浏览器厂商的前缀，注意IE的写法是驼峰式的（camel-casing）:")]),e._v(" "),r("pre",[r("code",[e._v('document.addEventListener("fullscreenerror", FSerrorhandler);\ndocument.addEventListener("webkitfullscreenerror", FSerrorhandler);\ndocument.addEventListener("mozfullscreenerror", FSerrorhandler);\ndocument.addEventListener("MSFullscreenError", FSerrorhandler);\n')])]),e._v(" "),r("hr"),e._v(" "),r("h2",{attrs:{id:"full-screen-css部分的api"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#full-screen-css部分的api","aria-hidden":"true"}},[e._v("#")]),e._v(" Full-Screen CSS部分的API")]),e._v(" "),r("p",[e._v("全屏状态下的元素也能够被赋予样式")]),e._v(" "),r("h3",{attrs:{id:"_1-fullscreen-伪类"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-fullscreen-伪类","aria-hidden":"true"}},[e._v("#")]),e._v(" 1. :fullscreen 伪类")]),e._v(" "),r("p",[e._v("控制处于全屏状态的元素")]),e._v(" "),r("pre",[r("code",[e._v(":fullscreen {\n    ...\n}\n")])]),e._v(" "),r("p",[e._v("之前被叫做 :full-screen, 然后在Webkit 和 Firefox中还是这样。跨多浏览器代码：")]),e._v(" "),r("pre",[r("code",[e._v(":-webkit-full-screen {\n}\n \n:-moz-full-screen {\n}\n \n:-ms-fullscreen {\n}\n \n:fullscreen {\n}\n")])]),e._v(" "),r("h3",{attrs:{id:"_2-backdrop伪元素"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-backdrop伪元素","aria-hidden":"true"}},[e._v("#")]),e._v(" 2. ::backdrop伪元素")]),e._v(" "),r("p",[e._v("当不同比例的元素，比如图像，全屏的时候，多余的背景色可以用这个伪元素来定义。")]),e._v(" "),r("pre",[r("code",[e._v(":fullscreen::backdrop {\n    background-color: #006; /* dark blue */\n}\n")])]),e._v(" "),r("p",[e._v("backdrop就是全屏元素后面的空白背景，在全屏元素之下、在页面剩下元素之上，IE11支持, Firefox 和 Opera 12不支持。Chrome、Safari 和 Opera 15+ 引入了这个 backdrop element 但是不允许定义样式。目前仅仅能够作用于 IE11，所以实际代码如下")]),e._v(" "),r("pre",[r("code",[e._v(":-ms-fullscreen::-ms-backdrop {\n    background-color: #006; /* dark blue */\n}\n")])]),e._v(" "),r("h3",{attrs:{id:"各浏览器全屏样式区别"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#各浏览器全屏样式区别","aria-hidden":"true"}},[e._v("#")]),e._v(" 各浏览器全屏样式区别")]),e._v(" "),r("p",[e._v("在 IE11, Firefox, 和 Opera 12 全屏元素是 100% 的 width 和 height ，图片因此就拉伸变形了。在IE11 为全屏元素设置width 和 height 的结果是元素跑到了屏幕 的左上角，背景为黑色（可以用::backdrop改为其它色）。Opera 12 和 IE11 类似，不过 backdrop背景是透明的，Firefox 忽略尺寸设置。在Chrome, Safari, 和 Opera 15+ 全屏元素是居中的、背景backdrop元素黑色。")]),e._v(" "),r("p",[e._v("如果要保持浏览器的一致性，同样可以为 Webkit/Blink 内核的浏览器像 Firefox/IE11 这样拉伸图片:")]),e._v(" "),r("pre",[r("code",[e._v(":-webkit-full-screen {\n    position: fixed;\n    width: 100%;\n    top: 0;\n    background: none;\n}\n")])]),e._v(" "),r("p",[e._v("或者，为IE11 赋予和 Webkit/Blink 一样的居中方式：")]),e._v(" "),r("pre",[r("code",[e._v(":-ms-fullscreen {\n  width: auto;\n  height: auto;\n  margin: auto;\n}\n")])]),e._v(" "),r("p",[e._v("这个方法在 Firefox无效，它忽略上面提到的width和height，解决的方法很简单：可以变相地让它的父元素全屏，然后调节它的尺寸。")]),e._v(" "),r("hr"),e._v(" "),r("h2",{attrs:{id:"想要开始使用了？"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#想要开始使用了？","aria-hidden":"true"}},[e._v("#")]),e._v(" 想要开始使用了？")]),e._v(" "),r("p",[e._v("Full-Screen API 相对简单，不过浏览器差异使得代码很丑陋，并且不保证将来不变（原文作者一年前还写了一篇文章，变化挺大）, 把精力放到其它事情上，等到这个 API 稳定之后再来看。")]),e._v(" "),r("p",[e._v("在HTML5 游戏和视频为主的网站，全屏几乎是必须的，如果不想自己维护代码，可以使用一个现成的库，例如 "),r("a",{attrs:{href:"https://github.com/sindresorhus/screenfull.js/",target:"_blank",rel:"noopener noreferrer"}},[e._v("screenfull.js"),r("OutboundLink")],1)]),e._v(" "),r("blockquote",[r("p",[e._v("原文地址："),r("a",{attrs:{href:"http://www.sitepoint.com/use-html5-full-screen-api/",target:"_blank",rel:"noopener noreferrer"}},[e._v("How to Use the HTML5 Full-Screen API (Again)"),r("OutboundLink")],1)])])])},[],!1,null,null,null);n.default=l.exports}}]);