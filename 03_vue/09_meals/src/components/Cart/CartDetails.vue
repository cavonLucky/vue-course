<!--
 * @Author: chengxy666 425247833@qq.com
 * @Date: 2023-07-03 13:34:44
 * @LastEditors: chengfun 425247833@qq.com
 * @LastEditTime: 2023-08-08 19:34:36
 * @FilePath: /vue-course/03_vue/09_meals/src/components/Cart/CartDetails.vue
 * @Description: 购物车详情-添加商品后的详情页
-->

<script setup>
import Mask from '../UI/Mask.vue';
import Meals from '../Meals/Meals.vue';
import { useMealsStore } from '../../store/meals';
import Dialog from '../UI/Dialog.vue';
import { ref } from 'vue';

const meals = useMealsStore();
const showDialog = ref(false);
const emits = defineEmits();

const okHandler = () => {
  /**
   * 1. 把购物车清空 --> meals.clearCart
   * 2. 关闭对话框 Dialog show false
   * 3. 关闭 CartDetails 页面
   */
  meals.clearCart();
  showDialog.value = false;
  emits('hide');
}

</script>

<template>
  <Mask style="z-index: 999;">
    <Dialog @ok="okHandler" :is-show="showDialog" @hide="showDialog = false" :msg="'确认清空购物车吗？'" />
    <div class="cart-details">
      <div class="header">
        <h2>餐品详情</h2>
        <a @click="showDialog = true" href="javascript:;">
          <i class="ri-delete-bin-line"></i>
          清空购物车
        </a>
      </div>
      <Meals :meals="meals.cartMelas" :desc="false" />
    </div>
  </Mask>
</template>

<style scoped>
.cart-details {
  position: absolute;
  bottom: 0;
  width: 750rem;
  background-color: #fff;
  border-top-left-radius: 40rem;
  border-top-right-radius: 40rem;
}

.meals {
  height: auto;
  max-height: calc(280rem * 4);
}

.header {
  display: flex;
  justify-content: space-between;
  padding: 20rem 40rem;
  width: 750rem;
  background-color: #fff;
  border-top-left-radius: 40rem;
  border-top-right-radius: 40rem;
}

.header h2 {
  font-size: 28rem;
}

.header a {
  color: #9f9f9f;
}
</style>