<template>
  <div  class="van-hairline--bottom headershop">
    <div :class="b('img-wrap')"
    	 @click="previewImage">
      <img :src="goodsImg" >
    </div>
    <div :class="b('goods-info')">
      <div class="van-sku__goods-name van-ellipsis">{{ goods.title }}</div>
      <!-- price display area -->
      <slot />
      <icon name="close" class="van-sku__close-icon van-icon van-icon-close" @click="skuEventBus.$emit('sku:close')" />
    </div>
  </div>
</template>

<script>
import create from '../../utils/create';

export default create({
  name: 'sku-header',

  props: {
    sku: Object,
    goods: Object,
    skuEventBus: Object,
    selectedSku: Object
  },

  computed: {
    goodsImg() {
      const s1Id = this.selectedSku.s1;
      const skuImg = this.getSkuImg(s1Id);
      // 优先使用选中sku的图片
      return skuImg || this.goods.picture;
    }
  },

  methods: {
    getSkuImg(id) {
      if (!id) return;

      // 目前skuImg都挂载在skuTree中s1那类sku上
      const treeItem = this.sku.tree.filter(treeItem => treeItem.k_s === 's1')[0] || {};

      if (!treeItem.v) {
        return;
      }

      const matchedSku = treeItem.v.filter(skuValue => skuValue.id === id)[0];
      if (matchedSku && matchedSku.imgUrl) {
        return matchedSku.imgUrl;
      }
    },
     previewImage() {
      this.skuEventBus.$emit('sku:previewImage', this.goodsImg);
    }

  }
});
</script>
<style type="text/css">
	.x-icon.x-icon-close.van-sku__close-icon{
	top: 10px;
    right: 15px!important;
    font-size: 20px;
    color: #969799;
    position: absolute;
    text-align: center;
    border-radius: 50%;
}
	.x-icon.x-icon-close.van-sku__close-icon::before{
	content: "\F015";
}
.van-sku-group-container{

    padding: 12px 0 2px;
}
.van-sku-stepper-stock{

    padding: 12px 0 2px;
}
.van-sku__stepper {
    float: right;
}
.van-sku-stepper-stock {
    padding: 12px 0;
    margin-left: 15px;
}
.van-stepper__minus--disabled, .van-stepper__plus--disabled {
    background-color: #f8f8f8;

}

.x-stepper__minus--disabled{
	    background-color: #f8f8f8!important;
    border-color: #f8f8f8!important;

    
}
.x-stepper__minus.x-stepper__minus--disabled::before {
	    background-color: #ccc!important;
	
    }
    
.van-sku__stock {
    display: inline-block;
    margin-right: 10px;
    color: #969799;
    font-size: 12px;
}
.van-sku__quota {
    display: inline-block;
    color: #f44;
    font-size: 12px;
}
.van-sku-stepper-container {
    height: 30px;
    margin-right: 20px;
}
.x-sku-actions{
	position: fixed;
	bottom: 0;
	left: 0;

	width: 100%;
}
.van-sku-actions{
	position: fixed;
	bottom: 0;
	left: 0;

	width: 100%;
}
.headershop{
	padding-left: 15px;
}
.van-sku__goods-price {
    color: #f44;
    margin-top: 10px;
    vertical-align: middle;
}
.van-sku-body{
	overflow: scroll!important;
}

</style>
