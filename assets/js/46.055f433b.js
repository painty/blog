(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{277:function(e,t,n){"use strict";n.r(t);var v=n(2),r=Object(v.a)({},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"译-js事件顺序-捕获-冒泡详解"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#译-js事件顺序-捕获-冒泡详解","aria-hidden":"true"}},[e._v("#")]),e._v(" [译]JS事件顺序/捕获/冒泡详解")]),e._v(" "),n("p",[e._v("**问题：**如果一个元素和其父元素都绑定了同一事件，哪一个先触发？——这当然取决于浏览器。")]),e._v(" "),n("p",[e._v("先来看一个简单的问题，假设你有一个一个element1元素，里面还有一个element2元素。")]),e._v(" "),n("pre",[n("code",[e._v("-----------------------------------\n| element1                        |\n|   -------------------------     |\n|   |element2               |     |\n|   -------------------------     |\n|                                 |\n-----------------------------------\n")])]),e._v(" "),n("p",[e._v("这两个元素都绑定了click事件，如果用户点击element2，则element1和element2都会触发点击事件，但是哪一个先触发呢？换种说法，事件触发的的顺序。")]),e._v(" "),n("h2",{attrs:{id:"两种事件模型"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#两种事件模型","aria-hidden":"true"}},[e._v("#")]),e._v(" 两种事件模型")]),e._v(" "),n("p",[e._v("很久很久以前，那时候网景公司Netscape还如日中天的时候，它和微软在这一事情上反着干。")]),e._v(" "),n("hr"),e._v(" "),n("ul",[n("li",[e._v("网景公司说element1优先，这叫事件捕获（event capturing）")]),e._v(" "),n("li",[e._v("微软则坚持element2优先，这叫事件冒泡（event bubbling）")])]),e._v(" "),n("hr"),e._v(" "),n("p",[e._v("这两种顺序完全是反着的嘛。IE只支持事件冒泡，Mozilla, Opera 7 和 Konqueror 两者都支持。再老版本的Opera和iCab都不支持。（这篇文章好老的感觉，iCab我都没听说过——Bob注）")]),e._v(" "),n("h3",{attrs:{id:"事件捕获"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#事件捕获","aria-hidden":"true"}},[e._v("#")]),e._v(" 事件捕获")]),e._v(" "),n("p",[e._v("当使用事件捕获的时候")]),e._v(" "),n("pre",[n("code",[e._v("               | |\n---------------| |-----------------\n| element1     | |                |\n|   -----------| |-----------     |\n|   |element2  \\ /          |     |\n|   -------------------------     |\n|        Event CAPTURING          |\n-----------------------------------\n")])]),e._v(" "),n("p",[e._v("element1上面的事件处理函数先触发，element2上面的事件处理函数后触发。")]),e._v(" "),n("h3",{attrs:{id:"事件冒泡"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#事件冒泡","aria-hidden":"true"}},[e._v("#")]),e._v(" 事件冒泡")]),e._v(" "),n("p",[e._v("当使用时间冒泡的时候")]),e._v(" "),n("pre",[n("code",[e._v("                / \\\n ---------------| |-----------------\n | element1     | |                |\n |   -----------| |-----------     |\n |   |element2  | |          |     |\n |   -------------------------     |\n |        Event BUBBLING           |\n -----------------------------------\n")])]),e._v(" "),n("p",[e._v("element2上面的事件处理函数先触发，element1上面的事件处理函数后触发。")]),e._v(" "),n("h2",{attrs:{id:"w3c事件模型"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#w3c事件模型","aria-hidden":"true"}},[e._v("#")]),e._v(" W3C事件模型")]),e._v(" "),n("p",[e._v("W3C很巧妙地在这场对抗中保持中立：任何W3C事件模型中发生的事件都是先捕获，直到它到达目标元素，然后再向外冒泡。")]),e._v(" "),n("pre",[n("code",[e._v("                 | |  / \\\n-----------------| |--| |-----------------\n| element1       | |  | |                |\n|   -------------| |--| |-----------     |\n|   |element2    \\ /  | |          |     |\n|   --------------------------------     |\n|        W3C event model                 |\n------------------------------------------\n")])]),e._v(" "),n("p",[e._v("作为Web开发者，可以选择是否在捕获或者冒泡的阶段注册事件，这是通过addEventListener()方法来实现的。如果addEventListener()的最后一个参数设置为true，那么这个事件是在捕获阶段被触发的；如果设置为false则是在冒泡阶段被触发。")]),e._v(" "),n("p",[e._v("假设你这样做：")]),e._v(" "),n("pre",[n("code",[e._v("element1.addEventListener('click',doSomething2,true)\nelement2.addEventListener('click',doSomething,false)\n")])]),e._v(" "),n("p",[e._v("当用户点击element2的时候，会发生下面的事情：")]),e._v(" "),n("ol",[n("li",[e._v("click事件从捕获阶段开始，寻找element2的父元素们是否绑定了click事件的处理函数")]),e._v(" "),n("li",[e._v("事件在element1上面找到了一个click的事件处理函数doSomething2()，然后就执行了doSomething2")]),e._v(" "),n("li",[e._v("然后事件就跑到了目标元素element2自身，这个过程中没发现它其他的父元素的click事件处理函数了，然后事件进入了冒泡阶段，执行绑定在element2上面的doSomething()")]),e._v(" "),n("li",[e._v("事件继续往上冒泡，并检查有没有父元素设置了冒泡阶段触发的click事件处理函数，这个例子中梅苑，所以接下来什么都不会发生了。")])]),e._v(" "),n("p",[e._v("反过来的过程是：")]),e._v(" "),n("pre",[n("code",[e._v("element1.addEventListener('click',doSomething2,false)\nelement2.addEventListener('click',doSomething,false)\n")])]),e._v(" "),n("p",[e._v("当用户点击element2的时候，会发生下面的事情：")]),e._v(" "),n("ol",[n("li",[e._v("click时间从捕获阶段开始，寻找element2的父元素们是否绑定了click事件的处理函数，在这个例子中没有")]),e._v(" "),n("li",[e._v("然后事件就跑到了目标元素element2自身，然后事件进入了冒泡阶段，执行绑定在element2上面的doSomething()")]),e._v(" "),n("li",[e._v("事件继续往上冒泡，并检查有没有父元素设置了冒泡阶段触发的click事件处理函数")]),e._v(" "),n("li",[e._v("事件在element1上面找到了一个冒泡阶段触发的click的事件处理函数doSomething2，执行之")])]),e._v(" "),n("h3",{attrs:{id:"和传统事件模型的兼容性"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#和传统事件模型的兼容性","aria-hidden":"true"}},[e._v("#")]),e._v(" 和传统事件模型的兼容性")]),e._v(" "),n("p",[e._v("在支持W3C DOM的浏览器里面，传统的事件注册")]),e._v(" "),n("pre",[n("code",[e._v("element1.onclick = doSomething2;\n")])]),e._v(" "),n("p",[e._v("将会被视作是在冒泡阶段注册的。（原文：is seen as a registration in the bubbling phase.）")]),e._v(" "),n("h2",{attrs:{id:"事件冒泡的用途"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#事件冒泡的用途","aria-hidden":"true"}},[e._v("#")]),e._v(" 事件冒泡的用途")]),e._v(" "),n("p",[e._v("很少有开发者清醒地使用事件捕获和事件冒泡。当今的页面，不是很必要让事件冒泡从而触发好几个事件处理函数，用户可能会因此感到困惑（我好翻译腔啊_(:з」∠)_——Bob说），开发者也希望脚本能够分开处理而不同的事件。用户点击一个元素触发一个函数，点击另一个元素触发另一个函数。")]),e._v(" "),n("p",[e._v("当然将来不会是这样的了（其实这篇文章很老了，所以作者这么讲——Bob注），当然前提是有了这个完善的兼容性高的事件模型。如今的事件捕获和冒泡是注册默认函数。")]),e._v(" "),n("h2",{attrs:{id:"其实它总是在发生了"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#其实它总是在发生了","aria-hidden":"true"}},[e._v("#")]),e._v(" 其实它总是在发生了")]),e._v(" "),n("p",[e._v("首先要明白的是，事件捕获和冒泡总是在发生。当你给document绑定了一个点击事件处理函数之后：")]),e._v(" "),n("pre",[n("code",[e._v("document.onclick = doSomething;\nif (document.captureEvents) document.captureEvents(Event.CLICK);\n")])]),e._v(" "),n("p",[e._v("页面中的任何元素上的点击事件将会最终冒泡到document然后触发这个函数，除非前面有一个事件处理函数明确地命定事件：你给我停止冒泡了。")]),e._v(" "),n("h2",{attrs:{id:"使用"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#使用","aria-hidden":"true"}},[e._v("#")]),e._v(" 使用")]),e._v(" "),n("p",[e._v("由于所有的事件都会将document作为终点，如果需要设置一个默认函数变得可能。假设有如下的页面：")]),e._v(" "),n("pre",[n("code",[e._v("------------------------------------\n| document                         |\n|   ---------------  ------------  |\n|   | element1    |  | element2 |  |\n|   ---------------  ------------  |\n|                                  |\n------------------------------------\n\nelement1.onclick = doSomething;\nelement2.onclick = doSomething;\ndocument.onclick = defaultFunction;\n")])]),e._v(" "),n("p",[e._v("当用户点击element1或者element2，doSomething()执行。如果你想，你可以在doSomething()里面让事件传播停止，否则事件会冒泡直到执行默认函数defaultFunction()。当用户点击任何其它地方，defaultFunction()也会执行的。有时这将会很有用。")]),e._v(" "),n("p",[e._v("在为拖放操作写脚本的时候，有必要让事件响应范围扩大到整个文档这么大，不过通常的做法是，目标图层上的mousedown事件触发脚本，并让它响应mousemove事件。尽管为了避免浏览器bug，mousedown常常是注册到目标图层上面，不过mousedown和mousemove必须是全文档响应的。")]),e._v(" "),n("p",[e._v("记住浏览器定律第一法则（the First Law of Browserology）：任何事都可能发生，并且常常是在你最毫无防备的时候。有可能用户大范围地移动了鼠标，脚本没有跟上，因此鼠标此时已经不在目标图层上面了。")]),e._v(" "),n("ul",[n("li",[e._v("如果mousemove事件处理函数是注册给目标图层的，目标图层此时当然不会响应鼠标的移动，这会让用户奇怪。")]),e._v(" "),n("li",[e._v("如果mouseup事件处理函数注册给了目标图层，事件同样不会触发，因此即便是用户已经释放了鼠标，当前图层上绑定的mousemove处理函数依然会继续随着鼠标的移动而运行，这更会让用户奇怪。")])]),e._v(" "),n("p",[e._v("所以在上面的例子中，事件冒泡变得尤为重要，它能使得事件处理函数在整个文档的范围内都能得到合理的执行。")]),e._v(" "),n("h2",{attrs:{id:"关闭捕获和冒泡"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#关闭捕获和冒泡","aria-hidden":"true"}},[e._v("#")]),e._v(" 关闭捕获和冒泡")]),e._v(" "),n("p",[e._v("不过通常你是想要关闭捕获和冒泡来避免事件之间的互相干扰。此外，如果你的文档结构非常复杂，有许多的嵌套什么的，通过关闭事件捕获和冒泡也能节省系统资源。浏览器必须穿过事件的目标元素的一个一个的父元素，来检查是否有事件处理函数。即使没有找到，这个寻找过程依然消耗时间。")]),e._v(" "),n("p",[e._v("想要关闭，在微软的事件模型中，设置事件的cancelBubble属性为true")]),e._v(" "),n("pre",[n("code",[e._v("window.event.cancelBubble = true\n")])]),e._v(" "),n("p",[e._v("在W3C事件模型里面，执行stopPropagation()方法")]),e._v(" "),n("pre",[n("code",[e._v("e.stopPropagation()\n")])]),e._v(" "),n("p",[e._v("这将会阻止事件冒泡阶段所有的传播，为了浏览器兼容性，写成下面的形式")]),e._v(" "),n("pre",[n("code",[e._v("function doSomething(e)\n{\n    if (!e) var e = window.event;\n    e.cancelBubble = true;\n    if (e.stopPropagation) e.stopPropagation();\n}\n")])]),e._v(" "),n("p",[e._v("对于不支持cancelBubble属性的浏览器来说，设置cancelBubble属性也没关系，浏览器也只是设置罢了，不会产生副作用当然也不会产生停止冒泡的效果。")]),e._v(" "),n("h2",{attrs:{id:"currenttarget"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#currenttarget","aria-hidden":"true"}},[e._v("#")]),e._v(" currentTarget")]),e._v(" "),n("p",[e._v("正如之前看到的，事件有一个 target 或者 srcElement 属性，包含了事件发生的目标元素的引用。在我们的例子中这是element2，因为用户点击了它。")]),e._v(" "),n("p",[e._v("非常重要的是，在事件捕获和冒泡阶段（如果有），这个目标不会变，一直是element2")]),e._v(" "),n("p",[e._v("不过如果是下面的例子：")]),e._v(" "),n("pre",[n("code",[e._v("element1.onclick = doSomething;\nelement2.onclick = doSomething;\n")])]),e._v(" "),n("p",[e._v("当用户点击element2的时候，doSomething会执行两次，但是你怎么知道哪个HTML元素对应哪个事件处理函数呢？target/srcElement不会提供线索，它们始终指向element2因为它是事件的源头。")]),e._v(" "),n("p",[e._v("为了解决这个问题，W3C添加了一个currentTarget 属性，它包含了当前事件处理函数对应的HTML元素：这正是我们需要的。不幸的是，微软事件模型不包含类似的属性。")]),e._v(" "),n("p",[e._v("你可以使用this关键字。在上面的例子中它指向当前事件处理函数对应的HTML元素，就像currentTarget一样。")]),e._v(" "),n("h2",{attrs:{id:"微软事件模型的问题"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#微软事件模型的问题","aria-hidden":"true"}},[e._v("#")]),e._v(" 微软事件模型的问题")]),e._v(" "),n("p",[e._v("但是当你使用微软事件模型的时候，this关键字不会指向HTML元素。加上没有类似currentTarget的属性，这意味着当你执行如下代码的时候")]),e._v(" "),n("pre",[n("code",[e._v("element1.attachEvent('onclick',doSomething)\nelement2.attachEvent('onclick',doSomething)\n")])]),e._v(" "),n("p",[e._v("你不能知道哪个HTML元素当前处理事件，这是微软事件模型最大的问题，对我来说这也是从来不使用它的原因。")]),e._v(" "),n("p",[e._v("希望微软能够添加currentTarget类似的属性，或者干脆就跟随标准？开发者需要这个。（IE9已经标准化了，再次说明这篇文章有点历史了。——Bob注）")]),e._v(" "),n("blockquote",[n("p",[e._v("原文地址："),n("a",{attrs:{href:"http://www.quirksmode.org/js/events_order.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Event order"),n("OutboundLink")],1)])])])},[],!1,null,null,null);t.default=r.exports}}]);