<!--
 * @Author: chengfun 425247833@qq.com
 * @Date: 2023-07-31 21:15:21
 * @LastEditors: chengfun 425247833@qq.com
 * @LastEditTime: 2023-08-08 19:32:08
 * @FilePath: /vue-course/03_vue/09_meals/src/components/Checkout/Checkout.vue
 * @Description: 结账的页面
-->

<script setup>
import { useMealsStore } from "../../store/meals";


const porps = defineProps(['isShow']);
const emits = defineEmits(['close']);
const meals = useMealsStore();

</script>

<template>
  <div class="checkout" v-show="porps.isShow">
    <div class="close">
      <i class="ri-close-fill" @click="$emit('close')"></i>
    </div>
    <!-- 设置订单详情 -->
    <div class="details">
      <header>餐品详情</header>
      <div class="list">
        <div v-for="item in meals.cartMelas" :key="item.id">
          {{ item.title }}
        </div>
      </div>
      <footer>合计¥<span>{{ meals.amount }}</span></footer>
    </div>
  </div>
</template>

<style scoped>
.checkout {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #f0f0f0;
  z-index: 99999;
}

.close {
  height: 60rem;
  line-height: 60rem;
  padding-left: 20rem;
  font-size: 36rem;
  font-weight: bold;
}

.details {
  background-color: #fff;
  margin: 0 10rem;
  border-radius: 40rem;
  padding: 0 20rem;
}

.details header {
  height: 100rem;
  line-height: 100rem;
  font-size: 30rem;
  font-weight: bold;
  border-bottom: 1rem dashed #e6e6e6;
}

.details footer {
  position: relative;
  height: 140rem;
  line-height: 140rem;
  text-align: right;
  font-size: 26rem;
  border-top: 1rem dashed #e6e6e6;
}

.details footer::before,
.details footer::after {
  content: "";
  position: absolute;
  width: 20rem;
  height: 20rem;
  background-color: #f0f0f0;
  border-radius: 50%;
  left: -30rem;
  top: -10rem;
}

.details footer::after {
  left: auto;
  right: -30rem;
}

.details footer span {
  font-weight: bold;
  font-size: 30rem;
}
</style>