(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7c60f115"],{3184:function(t,e,i){},"3bbf":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("demo-section",[i("demo-block",{attrs:{title:"基础用法"}},[i("x-address-list",{attrs:{list:t.list,addButtonText:t.add,"disabled-list":t.disabledList,"disabled-text":t.disabledText},on:{add:t.onAdd,edit:t.onEdit},model:{value:t.chosenAddressId,callback:function(e){t.chosenAddressId=e},expression:"chosenAddressId"}})],1)],1)},s=[],d=i("e7ba"),o=i("d99e"),a={name:"index",components:{demoSection:d["a"],demoBlock:o["a"]},data:function(){return{chosenAddressId:"1",list:[{id:"1",name:"张三",tel:"13000000000",address:"浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室"},{id:"2",name:"李四",tel:"1310000000",address:"浙江省杭州市拱墅区莫干山路 50 号"}],disabledList:[{id:"3",name:"王五",tel:"1320000000",address:"浙江省杭州市滨江区江南大道 15 号"}],add:"新增地址",edit:"编辑地址",disabledText:"以下地址超出配送范围"}},methods:{onAdd:function(){this.$toast(this.add)},onEdit:function(t,e){this.$toast(this.edit+":"+e)}}},l=a,c=i("048f"),r=Object(c["a"])(l,n,s,!1,null,null,null);r.options.__file="index.vue";e["default"]=r.exports},"66d9":function(t,e,i){"use strict";var n=i("948f"),s=i.n(n);s.a},"816e":function(t,e,i){"use strict";var n=i("3184"),s=i.n(n);s.a},"948f":function(t,e,i){},d99e:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"demoblock"},[i("p",{staticClass:"labelt"},[t._v(t._s(t.title))]),i("div",[t._t("default")],2)])},s=[],d={name:"demoBlock",props:{title:{type:String,default:"基础用法"}}},o=d,a=(i("816e"),i("048f")),l=Object(a["a"])(o,n,s,!1,null,"1c834994",null);l.options.__file="demoBlock.vue";e["a"]=l.exports},e7ba:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("x-nav-bar",{attrs:{title:t.title,"left-arrow":""},on:{"click-left":t.onClickLeft,"click-right":t.onClickRight}},[i("x-icon",{staticClass:"ricon",attrs:{slot:"right",name:"likeempty"},slot:"right"})],1),i("div",{staticClass:"demoContent"},[t._t("default")],2)],1)},s=[],d={name:"demoSection",data:function(){return{title:this.$route.meta.title}},methods:{onClickLeft:function(){this.$router.push("/demo");var t=window.parent.location.hash;t.indexOf("#/demo")<0&&(window.parent.location.href="#/docs")},onClickRight:function(){this.$toast("感谢关注佳兴")}}},o=d,a=(i("66d9"),i("048f")),l=Object(a["a"])(o,n,s,!1,null,"1aac7074",null);l.options.__file="demoSection.vue";e["a"]=l.exports}}]);
//# sourceMappingURL=chunk-7c60f115.c1da7f7e.js.map