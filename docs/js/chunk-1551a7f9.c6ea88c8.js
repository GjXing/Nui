(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1551a7f9"],{1309:function(t,e,n){},"1f84":function(t,e,n){},"52ff":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("demo-section",[n("demo-block",{attrs:{title:"基础用法"}},[n("x-panel",{attrs:{title:"标题",desc:"描述信息",status:"状态"}},[n("div",[t._v("内容")])])],1),n("demo-block",{attrs:{title:"高级用法"}},[n("x-panel",{attrs:{title:"标题",desc:"描述信息",status:"状态"}},[n("div",[t._v("内容")]),n("div",{attrs:{slot:"footer"},slot:"footer"},[n("x-button",{attrs:{size:"small"}},[t._v("按钮")]),n("x-button",{attrs:{size:"small",type:"danger"}},[t._v("按钮")])],1)])],1)],1)},o=[],a=n("e7ba"),s=n("d99e"),l={name:"index",components:{demoSection:a["a"],demoBlock:s["a"]}},c=l,r=(n("7d8b"),n("048f")),u=Object(r["a"])(c,i,o,!1,null,"edd0ce94",null);u.options.__file="index.vue";e["default"]=u.exports},"7d8b":function(t,e,n){"use strict";var i=n("1309"),o=n.n(i);o.a},"8fc3":function(t,e,n){},"9ba4":function(t,e,n){"use strict";var i=n("8fc3"),o=n.n(i);o.a},d99e:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"demoblock"},[n("p",{staticClass:"labelt"},[t._v(t._s(t.title))]),n("div",[t._t("default")],2)])},o=[],a={name:"demoBlock",props:{title:{type:String,default:"基础用法"}}},s=a,l=(n("9ba4"),n("048f")),c=Object(l["a"])(s,i,o,!1,null,"6b6e97b1",null);c.options.__file="demoBlock.vue";e["a"]=c.exports},e09f:function(t,e,n){"use strict";var i=n("1f84"),o=n.n(i);o.a},e7ba:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("x-nav-bar",{attrs:{title:t.title,"left-arrow":""},on:{"click-left":t.onClickLeft,"click-right":t.onClickRight}},[n("x-icon",{staticClass:"ricon",attrs:{slot:"right",name:"likeempty"},slot:"right"})],1),n("div",{staticClass:"demoContent"},[t._t("default")],2)],1)},o=[],a={name:"demoSection",data:function(){return{title:this.$route.meta.title}},methods:{onClickLeft:function(){this.$router.push("/demo");var t=window.parent.location.hash;t.indexOf("#/demo")<0&&(window.parent.location.href="#/docs")},onClickRight:function(){this.$toast("感谢关注佳兴！")}}},s=a,l=(n("e09f"),n("048f")),c=Object(l["a"])(s,i,o,!1,null,"206466f3",null);c.options.__file="demoSection.vue";e["a"]=c.exports}}]);
//# sourceMappingURL=chunk-1551a7f9.c6ea88c8.js.map