(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0cf698"],{6437:function(e,s,a){"use strict";a.r(s);var t=function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("demo-section",[a("demo-block",{attrs:{title:"基础用法"}},[a("x-address-edit",{attrs:{"area-list":e.areaList,"show-postal":"","show-delete":"","show-set-default":"","show-search-result":"","search-result":e.searchResult},on:{save:e.onSave,delete:e.onDelete,"change-detail":e.onChangeDetail}})],1)],1)},n=[],d=a("db65"),o=a("e7ba"),r=a("d99e"),i={name:"index",components:{demoSection:o["a"],demoBlock:r["a"]},i18n:{"zh-CN":{searchResult:[{name:"黄龙万科中心",address:"杭州市西湖区"},{name:"黄龙万科中心G座",address:"杭州市西湖区"},{name:"黄龙万科中心H座",address:"杭州市西湖区"}]},"en-US":{searchResult:[{name:"Name1",address:"Address"},{name:"Name2"},{name:"Name3",address:"Address"}]}},data:function(){return{areaList:d["a"],basicUsage:"基础用法",searchResult:[{name:"黄龙万科中心",address:"杭州市西湖区"},{name:"黄龙万科中心G座",address:"杭州市西湖区"},{name:"黄龙万科中心H座",address:"杭州市西湖区"}]}},methods:{onSave:function(){this.$toast(this.$t("save"))},onDelete:function(){this.$toast(this.$t("delete"))},onChangeDetail:function(e){this.searchResult=e?this.searchResult:[]}}},l=i,c=a("048f"),h=Object(c["a"])(l,t,n,!1,null,null,null);h.options.__file="index.vue";s["default"]=h.exports}}]);
//# sourceMappingURL=chunk-2d0cf698.c671e14f.js.map