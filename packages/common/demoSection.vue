<template>  <div>    <x-nav-bar            :title="title"            left-arrow            @click-left="onClickLeft"            @click-right="onClickRight">      <x-icon name="likeempty" slot="right" class="ricon"/>    </x-nav-bar>    <div class="demoContent">      <slot></slot>    </div>  </div></template><script>  export default {    name: "demoSection",    data(){      return {        title:this.$route.meta.title      }    },    methods:{      onClickLeft(){//    	window.history.go(-1)        this.$router.push('/demo')

        let {hash} = window.parent.location
        if(hash.indexOf('#/demo')<0){
          window.parent.location.href=`#/docs`
        }      },      onClickRight(){        this.$toast('感谢关注佳兴！')      }    }  }</script><style scoped lang="less">  .demoContent{padding: 10px;  }  .x-nav-bar{    box-shadow: 1px 1px 3px rgba(0,0,0,.1);  }  .ricon{    font-size: 20px;  }</style>