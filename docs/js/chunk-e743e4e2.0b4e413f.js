(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e743e4e2"],{"0e39":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("demo-section",[n("demo-block",{attrs:{title:"基础用法"}},[n("x-nav-bar",{attrs:{title:"标题","left-text":"返回","right-text":"按钮","left-arrow":""},on:{"click-left":t.onClickLeft,"click-right":t.onClickRight}})],1),n("demo-block",{attrs:{title:"高级用法"}},[n("x-nav-bar",{attrs:{title:"标题","left-text":"返回","left-arrow":""}},[n("x-icon",{attrs:{slot:"right",name:"search"},slot:"right"})],1)],1)],1)},o=[],c=n("e7ba"),a=n("d99e"),l={name:"index",components:{demoSection:c["a"],demoBlock:a["a"]},methods:{onClickLeft:function(){this.$toast("返回")},onClickRight:function(){this.$toast("按钮")}}},s=l,r=(n("deee"),n("048f")),f=Object(r["a"])(s,i,o,!1,null,"07d2a0b5",null);f.options.__file="index.vue";e["default"]=f.exports},3184:function(t,e,n){},"66d9":function(t,e,n){"use strict";var i=n("948f"),o=n.n(i);o.a},"816e":function(t,e,n){"use strict";var i=n("3184"),o=n.n(i);o.a},"948f":function(t,e,n){},cfb3:function(t,e,n){},d99e:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"demoblock"},[n("p",{staticClass:"labelt"},[t._v(t._s(t.title))]),n("div",[t._t("default")],2)])},o=[],c={name:"demoBlock",props:{title:{type:String,default:"基础用法"}}},a=c,l=(n("816e"),n("048f")),s=Object(l["a"])(a,i,o,!1,null,"1c834994",null);s.options.__file="demoBlock.vue";e["a"]=s.exports},deee:function(t,e,n){"use strict";var i=n("cfb3"),o=n.n(i);o.a},e7ba:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("x-nav-bar",{attrs:{title:t.title,"left-arrow":""},on:{"click-left":t.onClickLeft,"click-right":t.onClickRight}},[n("x-icon",{staticClass:"ricon",attrs:{slot:"right",name:"likeempty"},slot:"right"})],1),n("div",{staticClass:"demoContent"},[t._t("default")],2)],1)},o=[],c={name:"demoSection",data:function(){return{title:this.$route.meta.title}},methods:{onClickLeft:function(){this.$router.push("/demo");var t=window.parent.location.hash;t.indexOf("#/demo")<0&&(window.parent.location.href="#/docs")},onClickRight:function(){this.$toast("感谢关注佳兴")}}},a=c,l=(n("66d9"),n("048f")),s=Object(l["a"])(a,i,o,!1,null,"1aac7074",null);s.options.__file="demoSection.vue";e["a"]=s.exports}}]);
//# sourceMappingURL=chunk-e743e4e2.0b4e413f.js.map