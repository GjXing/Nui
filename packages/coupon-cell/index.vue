<template>
  <cell-group :class="b()" :border="border">
    <cell
      :title="title || $t('title')"
      :value="values"
      :is-link="editable"
      @click="$emit('click')"
    />
  </cell-group>
</template>

<script>
import create from '../utils/create';

export default create({
  name: 'coupon-cell',

  model: {
    prop: 'chosenCoupon'
  },

  props: {
    title:  {
      type: String,
      default: '优惠券'
    },
    values:  {
      type: String,
      default: '你有 2个可用优惠'
    },
    border: {
      type: Boolean,
      default: true
    },
    coupons: {
      type: Array,
      default: () => []
    },
    chosenCoupon: {
      type: Number,
      default: -1
    },
    editable: {
      type: Boolean,
      default: true
    }
  },

  computed: {
    value() {
      const { coupons } = this;
      const coupon = coupons[this.chosenCoupon];
      if (coupon) {
        const value = coupon.denominations || coupon.value;
        return `-￥${(value / 100).toFixed(2)}`;
      }
      return coupons.length === 0 ? this.$t('tips') : this.$t('count', coupons.length);
    }
  }
});
</script>
