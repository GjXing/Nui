(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-106416fa"],{"11a4":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("demo-section",[i("demo-block",{attrs:{title:"基本用法"}},[i("x-steps",{attrs:{active:t.active,"active-color":"#ff5024"}},[i("x-step",[t._v("青铜")]),i("x-step",[t._v("白银")]),i("x-step",[t._v("黄金")]),i("x-step",[t._v("铂金")]),i("x-step",[t._v("钻石")]),i("x-step",[t._v("王者")])],1),i("x-button",{staticStyle:{margin:"10px 0px"},on:{click:t.nextSteps}},[t._v(t._s(t.nextStep))])],1),i("demo-block",{attrs:{title:"描述信息"}},[i("x-steps",{attrs:{active:"2","active-color":"rgb(68, 187, 0)",title:"荣耀黄金","icon-class":"huo11",description:"恭喜您晋级荣耀黄金"}},[i("x-step",[t._v("青铜")]),i("x-step",[t._v("白银")]),i("x-step",[t._v("黄金")]),i("x-step",[t._v("铂金")]),i("x-step",[t._v("钻石")]),i("x-step",[t._v("星耀")])],1)],1),i("demo-block",{attrs:{title:"纵向"}},[i("x-steps",{attrs:{active:2,"active-color":"rgb(68, 187, 0)",direction:"vertical"}},[i("x-step",[i("h3",[t._v("青铜")]),i("p",[t._v("2018-11-11 11:11")])]),i("x-step",[i("h3",[t._v("白银")]),i("p",[t._v("2018-11-11 12:11")])]),i("x-step",[i("h3",[t._v("黄金")]),i("p",[t._v("2018-11-11 13:11")])]),i("x-step",[i("h3",[t._v("铂金")])]),i("x-step",[i("h3",[t._v("钻石")])]),i("x-step",[i("h3",[t._v("星耀")])]),i("x-step",[i("h3",[t._v("最强王者")])])],1)],1)],1)},s=[],o=(i("f4b1"),i("a2f3"),i("e468"),i("e7ba")),c=i("d99e"),a={name:"index",components:{demoSection:o["a"],demoBlock:c["a"]},data:function(){return{active:3,nextStep:"晋级段位"}},methods:{nextSteps:function(){this.active=++this.active%6}}},l=a,r=(i("7b47"),i("048f")),v=Object(r["a"])(l,n,s,!1,null,"25b8965c",null);v.options.__file="index.vue";e["default"]=v.exports},"1f22":function(t,e,i){},6865:function(t,e,i){},"713e":function(t,e,i){"use strict";var n=i("1f22"),s=i.n(n);s.a},"7b47":function(t,e,i){"use strict";var n=i("6865"),s=i.n(n);s.a},d99e:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"demoblock"},[i("p",{staticClass:"labelt"},[t._v(t._s(t.title))]),i("div",[t._t("default")],2)])},s=[],o={name:"demoBlock",props:{title:{type:String,default:"基础用法"}}},c=o,a=(i("713e"),i("048f")),l=Object(a["a"])(c,n,s,!1,null,"32801aa6",null);l.options.__file="demoBlock.vue";e["a"]=l.exports},dc64:function(t,e,i){"use strict";var n=i("f281"),s=i.n(n);s.a},e7ba:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("x-nav-bar",{attrs:{title:t.title,"left-arrow":""},on:{"click-left":t.onClickLeft,"click-right":t.onClickRight}},[i("x-icon",{staticClass:"ricon",attrs:{slot:"right",name:"likeempty"},slot:"right"})],1),i("div",{staticClass:"demoContent"},[t._t("default")],2)],1)},s=[],o={name:"demoSection",data:function(){return{title:this.$route.meta.title}},methods:{onClickLeft:function(){this.$router.push("/demo");var t=window.parent.location.hash;t.indexOf("#/demo")<0&&(window.parent.location.href="#/docs")},onClickRight:function(){this.$toast("感谢关注佳兴！")}}},c=o,a=(i("dc64"),i("048f")),l=Object(a["a"])(c,n,s,!1,null,"09ccd16b",null);l.options.__file="demoSection.vue";e["a"]=l.exports},f281:function(t,e,i){}}]);
//# sourceMappingURL=chunk-106416fa.23566ee1.js.map