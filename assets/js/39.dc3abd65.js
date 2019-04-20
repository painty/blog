(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{279:function(t,o,e){"use strict";e.r(o);var r=e(2),n=Object(r.a)({},function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"javascript对象、原型、继承什么的最傲娇了"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#javascript对象、原型、继承什么的最傲娇了","aria-hidden":"true"}},[t._v("#")]),t._v(" Javascript对象、原型、继承什么的最傲娇了")]),t._v(" "),e("p",[t._v("最近辞职鸟，又可以开心地无打扰地学习了。O(∩_∩)O~\n现实是残酷的，JS的对象和继承这部分看了好几个月了，还是没有进展，理解起来一团糟，超级抽象。\n于是我开始自怨自艾，我开始后悔当初没有选择计算机专业，于是……")]),t._v(" "),e("p",[t._v("你是否和我一样的烦恼？\n打住！\n这不是你的错！")]),t._v(" "),e("p",[t._v("说说个人的感觉吧，W3School什么的讲得不错，不过太简略了，而网上百度出来的相关文章良莠不齐，好的文章多半是一些大牛的博客，需要一些背景知识才能看懂，而且他们好喜欢拿Java来类比，难不成为了这个比喻我还要去学习Java 囧rz……余下的，多数文章都是COPY，举的例子都那么雷同，正当我迷茫的时候，突然想起还有书这位好家伙。")]),t._v(" "),e("p",[t._v("书本是个好东西啊啊啊！！！\n书的优点：知识系统！知识专业！表达严密！")]),t._v(" "),e("h1",{attrs:{id:"下面进入正题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#下面进入正题","aria-hidden":"true"}},[t._v("#")]),t._v(" 下面进入正题")]),t._v(" "),e("p",[t._v("我觉得上面的吐槽才是主要的内容，下面的主要是笔记吧。")]),t._v(" "),e("p",[t._v("Javascript的对象这一节相信不是那么简单就能理解的，个人觉得主要的原因不是难，而是知识点比较广，另外比较抽象而又缺少实践。")]),t._v(" "),e("p",[t._v("先有几个概念要弄清：")]),t._v(" "),e("ol",[e("li",[t._v("先是对象的概念，这里不说了，为啥呢，因为网上的文章这部分都讲烂了。//感觉就是该详细的地方略过，不该详细的地方使劲举例。")]),t._v(" "),e("li",[t._v("然后是原型（prototype），网上说那么玄干嘛！说白了就是一个特殊的实例。对一个构造函数A来说，A的原型就是A的一个特殊的实例！用A.prototype来表示。这里补充一下，"),e("strong",[t._v("原型是对构造函数来说的")]),t._v("，实例没有原型的说法，不过在浏览器内部，每一个实例会有一个_proto_的指针，指向的是把a生出来的时候A的原型，这个指向不可见，不过在chrome或者FF的控制台里面看得到，用a._proto_表示的，并且A的prototype和a的_proto_不是永远相等的！当a从A生出来之后，如果执行A.prototyoe=YYY，a._proto_就和A.prototype没有一毛钱关系了！A的原型就是YYY了，后来A生出来的宝宝的_proto_也是指向YYY了，而a._proto_还是指向最初的那个A的原型。")])]),t._v(" "),e("p",[t._v("上面的prototype这个概念把我搞得好辛苦啊，还是看书好，对了，这本书就是《Javascript高级程序设计》Professional.JavaScript.for.Web.Developers.已经出到第三版了，我看的是第二版的。\n然后就是几个检验实例和构造函数之间关系的函数。")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("constructor")]),t._v("属性(Object.prototype.constructor)：指向创造prototype属性所在的构造函数，是prototype的一个属性，可修改，除非是基本数据类型1、'1'、true。例：alert(a.constructor) //A")]),t._v(" "),e("li",[e("strong",[t._v("instanceof")]),t._v("操作符:检查实例是否指向某个构造函数的原型。constructor属性指向是唯一的，instanceof就不是了，a可能既是A的实例又是B的实例，同时所有的实例都是Object的实例。例：")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("function A(){};\nfunction B(){};\nB.prototype = new A();\nb = new B();\nb instanceof B; //true\nb instanceof B; //true\nb instanceof Object; //true\n")])])]),e("ul",[e("li",[t._v("**isPrototypeOf()**方法：检测某个原型是否是被某个实例所指向，正好和instanceof操作符逆向的操作，也就是说a instanceof A 等于 A.prototype.isPrototypeOf(a)。\n继续使用上面的例子，那么B.prototype.isPrototypeOf(b)就是true，A.prototype.isPrototypeOf(b)也是true。\n注意这里的A.prototype和B.prototype是不等的，然后，B.protoype有一个隐藏的_proto_属性指向了A.prototype，而b的_proto_指向B.prototype，所以b当然也指向A.prototype啦。")]),t._v(" "),e("li",[t._v('**hasOwnProperty()**方法：如果实例的某个属性来自于实例，返回true，其余的比如来自于原型啊，就false。例：alert(a.hasOwnProperty("name"))')]),t._v(" "),e("li",[e("strong",[t._v("in")]),t._v('操作符：不管实例的某个属性来自于实例自身还是实例通过原型访问到的，只要存在，都是true。例：alert("name" in a)。  PS:对于in操作符还有一个地方出现就是for in循环。')])]),t._v(" "),e("p",[t._v("来，我们做点题目巩固一下。")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("function A(){};\nfunction B(){};\nfunction C(){};\nB.prototype = new A();\nb = new B();\nB.prototype = new C();\nb2 = new B();\nb instanceof A; //true\nb instanceof B; //false\nb instanceof C; //false\nb instanceof Object; //true \nb.constructor; //A\nb2.constructor; //C\n")])])]),e("p",[t._v("看完了还是一头雾水？那么……看书去吧o("),e("em",[t._v("￣▽￣")]),t._v(")o")])])},[],!1,null,null,null);o.default=n.exports}}]);