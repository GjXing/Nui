(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b85d929c"],{"0145":function(t,e,n){"use strict";var i=n("9e55"),a=n.n(i);a.a},"1f22":function(t,e,n){},"5d36":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("demo-section",[n("demo-block",{attrs:{title:"请看页面最下方"}},[n("x-tabbar",{model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},[n("x-tabbar-item",{attrs:{icon:"tableware"}},[t._v("点餐")]),n("x-tabbar-item",{attrs:{icon:"order"}},[t._v("订单")]),n("x-tabbar-item",{attrs:{icon:"discover",dot:""}},[t._v("发现")]),n("x-tabbar-item",{attrs:{icon:"me",info:"20"}},[t._v("我的")])],1)],1)],1)},a=[],o=n("e7ba"),c=n("d99e"),r={name:"index",components:{demoSection:o["a"],demoBlock:c["a"]},data:function(){return{active:0}}},s=r,l=(n("0145"),n("048f")),u=Object(l["a"])(s,i,a,!1,null,"72bb62e4",null);u.options.__file="index.vue";e["default"]=u.exports},"713e":function(t,e,n){"use strict";var i=n("1f22"),a=n.n(i);a.a},"9e55":function(t,e,n){},d99e:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"demoblock"},[n("p",{staticClass:"labelt"},[t._v(t._s(t.title))]),n("div",[t._t("default")],2)])},a=[],o={name:"demoBlock",props:{title:{type:String,default:"基础用法"}}},c=o,r=(n("713e"),n("048f")),s=Object(r["a"])(c,i,a,!1,null,"32801aa6",null);s.options.__file="demoBlock.vue";e["a"]=s.exports},dc64:function(t,e,n){"use strict";var i=n("f281"),a=n.n(i);a.a},e7ba:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("x-nav-bar",{attrs:{title:t.title,"left-arrow":""},on:{"click-left":t.onClickLeft,"click-right":t.onClickRight}},[n("x-icon",{staticClass:"ricon",attrs:{slot:"right",name:"likeempty"},slot:"right"})],1),n("div",{staticClass:"demoContent"},[t._t("default")],2)],1)},a=[],o={name:"demoSection",data:function(){return{title:this.$route.meta.title}},methods:{onClickLeft:function(){this.$router.push("/demo");var t=window.parent.location.hash;t.indexOf("#/demo")<0&&(window.parent.location.href="#/docs")},onClickRight:function(){this.$toast("感谢关注佳兴！")}}},c=o,r=(n("dc64"),n("048f")),s=Object(r["a"])(c,i,a,!1,null,"09ccd16b",null);s.options.__file="demoSection.vue";e["a"]=s.exports},f281:function(t,e,n){}}]);
//# sourceMappingURL=chunk-b85d929c.f0bfddfc.js.map