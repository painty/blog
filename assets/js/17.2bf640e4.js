(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{170:function(t,a,s){t.exports=s.p+"assets/img/1f691e.81f691e2.jpg"},171:function(t,a,s){t.exports=s.p+"assets/img/afaa5b.7afaa5ba.jpg"},283:function(t,a,s){"use strict";s.r(a);var e=s(2),i=Object(e.a)({},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"绝对定位的a链接不可点击-ie6-ie9无一幸免的bug"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#绝对定位的a链接不可点击-ie6-ie9无一幸免的bug","aria-hidden":"true"}},[t._v("#")]),t._v(" 绝对定位的a链接不可点击 IE6-IE9无一幸免的bug")]),t._v(" "),e("p",[t._v("最近遇到一个很奇怪的问题，IE6 IE7 IE8 IE9 全军覆灭。\n现象：\n应该是比较常见的，有时候为了让整块区域可点击，可能使用一个a标签，然后设置display:block等来让a标签可设置长宽；但是，a标签内部如果需要添加比较多的内容，比如好几个div，那么这么做就不符合规范了。\n于是变通地让这个a标签设置position为绝对定位，然后移动覆盖到相应的位置来实现某个区域可点击。\n如下图：")]),t._v(" "),e("img",{staticClass:"size-full wp-image-273",attrs:{src:s(170),alt:"IE10以下，绝对定位的a标签不可点击bug",width:"588",height:"420"}}),t._v(" "),e("p",[t._v("但是在IE10以下，a标签有的部分不可点击，比如上面部分的图片部分，鼠标移上去就变成了文本形状，而本应该是手型的。\n这是一个IE系列的渲染bug，只有渲染部分是可点击的。而让其所有部分都可点击的话，简单，为其设置一个背景即可。可以设置一个透明的gif图片，不过会增加一个请求。还有一个方法是使用background:url(about:blank);得到同样的效果但是不产生http请求。\n"),t._v("\n补充：很多地方，比如有时候使用了渐变滤镜来设置了背景，此时如果没有设置背景的话，还是会被IE当作没有背景的，然后当你移到某些“透明”的区域的时候，IE就会当作是你移出了这个元素！最近在做一个二级菜单的交互的时候遇到了这个bug，当鼠标移到这个由滤镜填充的子菜单的时候，IE就以为鼠标移出了。")]),t._v(" "),e("img",{staticClass:"aligncenter size-full wp-image-274",attrs:{src:s(171),alt:"13-12-11-2",width:"565",height:"314"}}),t._v(" "),e("p",[t._v("解决的方法同上~")])])},[],!1,null,null,null);a.default=i.exports}}]);