(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0ec55bf4"],{"084b":function(t,e,c){"use strict";var n=c("1412"),i=c.n(n);i.a},1412:function(t,e,c){},"1f22":function(t,e,c){},"713e":function(t,e,c){"use strict";var n=c("1f22"),i=c.n(n);i.a},"9a5a":function(t,e,c){"use strict";c.r(e);var n=function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("demo-section",[c("demo-block",{attrs:{title:"基础用法"}},[c("x-switch",{model:{value:t.checked1,callback:function(e){t.checked1=e},expression:"checked1"}})],1),c("demo-block",{attrs:{title:"禁用状态"}},[c("x-switch",{attrs:{disabled:""},model:{value:t.checked2,callback:function(e){t.checked2=e},expression:"checked2"}})],1),c("demo-block",{attrs:{title:"加载状态"}},[c("x-switch",{attrs:{loading:""},model:{value:t.checked3,callback:function(e){t.checked3=e},expression:"checked3"}})],1)],1)},i=[],o=c("e7ba"),a=c("d99e"),l={name:"index",components:{demoSection:o["a"],demoBlock:a["a"]},data:function(){return{checked1:!0,checked2:!0,checked3:!0,checked4:!0}},methods:{onInput:function(t){var e=this;this.$dialog.confirm({title:"提醒",message:"是否切换开关？"}).then(function(){e.checked4=t},function(){})}}},s=l,d=(c("084b"),c("048f")),r=Object(d["a"])(s,n,i,!1,null,"42d81ccc",null);r.options.__file="index.vue";e["default"]=r.exports},d99e:function(t,e,c){"use strict";var n=function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{staticClass:"demoblock"},[c("p",{staticClass:"labelt"},[t._v(t._s(t.title))]),c("div",[t._t("default")],2)])},i=[],o={name:"demoBlock",props:{title:{type:String,default:"基础用法"}}},a=o,l=(c("713e"),c("048f")),s=Object(l["a"])(a,n,i,!1,null,"32801aa6",null);s.options.__file="demoBlock.vue";e["a"]=s.exports},dc64:function(t,e,c){"use strict";var n=c("f281"),i=c.n(n);i.a},e7ba:function(t,e,c){"use strict";var n=function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",[c("x-nav-bar",{attrs:{title:t.title,"left-arrow":""},on:{"click-left":t.onClickLeft,"click-right":t.onClickRight}},[c("x-icon",{staticClass:"ricon",attrs:{slot:"right",name:"likeempty"},slot:"right"})],1),c("div",{staticClass:"demoContent"},[t._t("default")],2)],1)},i=[],o={name:"demoSection",data:function(){return{title:this.$route.meta.title}},methods:{onClickLeft:function(){this.$router.push("/demo");var t=window.parent.location.hash;t.indexOf("#/demo")<0&&(window.parent.location.href="#/docs")},onClickRight:function(){this.$toast("感谢关注佳兴！")}}},a=o,l=(c("dc64"),c("048f")),s=Object(l["a"])(a,n,i,!1,null,"09ccd16b",null);s.options.__file="demoSection.vue";e["a"]=s.exports},f281:function(t,e,c){}}]);
//# sourceMappingURL=chunk-0ec55bf4.1c37b10f.js.map