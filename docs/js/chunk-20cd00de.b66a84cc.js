(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-20cd00de"],{"1f22":function(t,e,n){},"20b1":function(t,e,n){"use strict";var a=n("d616"),i=n.n(a);i.a},"713e":function(t,e,n){"use strict";var a=n("1f22"),i=n.n(a);i.a},d5df:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("demo-section",[n("demo-block",{attrs:{title:"基础用法"}},[n("x-pagination",{attrs:{"total-items":24,"items-per-page":5},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}})],1),n("demo-block",{attrs:{title:"简洁模式"}},[n("x-pagination",{attrs:{"page-count":12,mode:"simple"},model:{value:t.currentPage1,callback:function(e){t.currentPage1=e},expression:"currentPage1"}})],1),n("demo-block",{attrs:{title:"显示省略号"}},[n("x-pagination",{attrs:{"total-items":125,"show-page-size":3,"force-ellipses":""},model:{value:t.currentPage2,callback:function(e){t.currentPage2=e},expression:"currentPage2"}})],1)],1)},i=[],o=n("e7ba"),c=n("d99e"),r={name:"index",components:{demoSection:o["a"],demoBlock:c["a"]},data:function(){return{currentPage:1,currentPage1:1,currentPage2:1}}},l=r,s=(n("20b1"),n("048f")),u=Object(s["a"])(l,a,i,!1,null,"0258f78a",null);u.options.__file="index.vue";e["default"]=u.exports},d616:function(t,e,n){},d99e:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"demoblock"},[n("p",{staticClass:"labelt"},[t._v(t._s(t.title))]),n("div",[t._t("default")],2)])},i=[],o={name:"demoBlock",props:{title:{type:String,default:"基础用法"}}},c=o,r=(n("713e"),n("048f")),l=Object(r["a"])(c,a,i,!1,null,"32801aa6",null);l.options.__file="demoBlock.vue";e["a"]=l.exports},dc64:function(t,e,n){"use strict";var a=n("f281"),i=n.n(a);i.a},e7ba:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("x-nav-bar",{attrs:{title:t.title,"left-arrow":""},on:{"click-left":t.onClickLeft,"click-right":t.onClickRight}},[n("x-icon",{staticClass:"ricon",attrs:{slot:"right",name:"likeempty"},slot:"right"})],1),n("div",{staticClass:"demoContent"},[t._t("default")],2)],1)},i=[],o={name:"demoSection",data:function(){return{title:this.$route.meta.title}},methods:{onClickLeft:function(){this.$router.push("/demo");var t=window.parent.location.hash;t.indexOf("#/demo")<0&&(window.parent.location.href="#/docs")},onClickRight:function(){this.$toast("感谢关注佳兴！")}}},c=o,r=(n("dc64"),n("048f")),l=Object(r["a"])(c,a,i,!1,null,"09ccd16b",null);l.options.__file="demoSection.vue";e["a"]=l.exports},f281:function(t,e,n){}}]);
//# sourceMappingURL=chunk-20cd00de.b66a84cc.js.map