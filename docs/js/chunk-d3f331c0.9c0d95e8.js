(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d3f331c0"],{"06da":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("demo-section",[n("demo-block",{staticClass:"demo_block",attrs:{title:"基本用法"}},[n("x-badge-group",{attrs:{"active-key":t.activeKey}},[n("x-badge",{attrs:{title:"标签名称"},on:{click:t.onClick}}),n("x-badge",{attrs:{title:"标签名称",info:"8"},on:{click:t.onClick}}),n("x-badge",{attrs:{title:"标签名称",info:"99"},on:{click:t.onClick}}),n("x-badge",{attrs:{title:"标签名称",info:"199"},on:{click:t.onClick}})],1)],1)],1)},o=[],c=n("e7ba"),a=n("d99e"),l={name:"index",data:function(){return{activeKey:0}},components:{demoSection:c["a"],demoBlock:a["a"]},methods:{onClick:function(t){this.activeKey=t}}},s=l,r=(n("23ab"),n("048f")),u=Object(r["a"])(s,i,o,!1,null,"11821b17",null);u.options.__file="index.vue";e["default"]=u.exports},"23ab":function(t,e,n){"use strict";var i=n("80e7"),o=n.n(i);o.a},3184:function(t,e,n){},"66d9":function(t,e,n){"use strict";var i=n("948f"),o=n.n(i);o.a},"80e7":function(t,e,n){},"816e":function(t,e,n){"use strict";var i=n("3184"),o=n.n(i);o.a},"948f":function(t,e,n){},d99e:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"demoblock"},[n("p",{staticClass:"labelt"},[t._v(t._s(t.title))]),n("div",[t._t("default")],2)])},o=[],c={name:"demoBlock",props:{title:{type:String,default:"基础用法"}}},a=c,l=(n("816e"),n("048f")),s=Object(l["a"])(a,i,o,!1,null,"1c834994",null);s.options.__file="demoBlock.vue";e["a"]=s.exports},e7ba:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("x-nav-bar",{attrs:{title:t.title,"left-arrow":""},on:{"click-left":t.onClickLeft,"click-right":t.onClickRight}},[n("x-icon",{staticClass:"ricon",attrs:{slot:"right",name:"likeempty"},slot:"right"})],1),n("div",{staticClass:"demoContent"},[t._t("default")],2)],1)},o=[],c={name:"demoSection",data:function(){return{title:this.$route.meta.title}},methods:{onClickLeft:function(){this.$router.push("/demo");var t=window.parent.location.hash;t.indexOf("#/demo")<0&&(window.parent.location.href="#/docs")},onClickRight:function(){this.$toast("感谢关注佳兴")}}},a=c,l=(n("66d9"),n("048f")),s=Object(l["a"])(a,i,o,!1,null,"1aac7074",null);s.options.__file="demoSection.vue";e["a"]=s.exports}}]);
//# sourceMappingURL=chunk-d3f331c0.9c0d95e8.js.map