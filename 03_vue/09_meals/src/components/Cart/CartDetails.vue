<!--
 * @Author: chengxy666 425247833@qq.com
 * @Date: 2023-07-03 13:34:44
 * @LastEditors: chengxy666 425247833@qq.com
 * @LastEditTime: 2023-07-10 15:47:01
 * @FilePath: /vue-course/03_vue/09_meals/src/components/Cart/CartDetails.vue
 * @Description: 购物车详情-添加商品后的详情页
-->

<script setup>
import Mask from '../UI/Mask.vue';
import Meals from '../Meals/Meals.vue';
import { useMealsStore } from '../../store/meals';

const meals = useMealsStore();

</script>

<template>
  <Mask>
    <div class="cart-details">
      <div class="header">
        <h2>餐品详情</h2>
        <a href="javascript:;" @click="meals.clearCart">
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
  max-height: 80%;
  overflow: auto;
  border-top-left-radius: 40rem;
  border-top-right-radius: 40rem;
}

.meals {
  height: 100%;
  padding-top: 40rem;
}

.header {
  display: flex;
  justify-content: space-between;
  padding: 20rem 40rem 0;
  position: fixed;
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