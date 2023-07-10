<!--
 * @Author: chengxy666 425247833@qq.com
 * @Date: 2023-06-06 20:23:57
 * @LastEditors: chengxy666 425247833@qq.com
 * @LastEditTime: 2023-07-03 13:52:15
 * @FilePath: /vue-course/03_vue/09_meals/src/components/Cart/CartBar.vue
 * @Description: 所有和购物车相关的组件
-->

<script setup>
import CartDetails from "./CartDetails.vue";
import cartBag from "../../assets/bag.png";
import { useMealsStore } from "@/store/meals";
import { ref } from "vue";

const meals = useMealsStore();

const showDetails = ref(false);
</script>

<template>
  <div>
    <CartDetails :is-show="showDetails" @hide="showDetails = false" />

    <div class="cart-bar">
      <div class="cart-bag">
        <img :src="cartBag" alt="购物袋" />
        <span class="total-count" v-show="meals.totalCount">{{ meals.totalCount }}</span>
      </div>
      <div class="total-amount">
        <p class="no-goods" v-show="meals.totalCount <= 0">未选购商品</p>
        <p class="has-goods" v-show="meals.totalCount > 0" @click="showDetails = true">
          {{ meals.amount }}
        </p>
      </div>
      <button class="checkout">去结算</button>
    </div>
  </div>
</template>

<style scoped>
.cart-bar {
  width: 710rem;
  height: 112rem;
  position: fixed;
  background-color: #3a3a3a;
  bottom: 30rem;
  left: 0;
  right: 0;
  margin: 0 auto;
  border-radius: 60rem;
  z-index: 9999;
}

.cart-bag {
  position: absolute;
  width: 100rem;
  bottom: -10rem;
}

.total-count {
  width: 40rem;
  height: 40rem;
  text-align: center;
  line-height: 40rem;
  position: absolute;
  background-color: #bf2b20;
  border-radius: 50%;
  color: #fff;
  right: -20rem;
  font-weight: bold;
}

.total-amount {
  margin-left: 130rem;
  /* line-height: 100rem; */
  line-height: 112rem;
}

.no-goods,
.has-goods {
  display: inline-block;
  color: #a9a9a9;
  font-size: 40rem;
  font-weight: bold;
}

.has-goods {
  color: #fff;
}

.has-goods::before {
  content: "¥";
  font-size: 26rem;
}

.checkout {
  position: absolute;
  top: 0;
  right: 0;
  width: 200rem;
  height: 100%;
  border: none;
  border-radius: 60rem;
  background-color: #efbe41;
  font-size: 40rem;
}
</style>
