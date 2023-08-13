<!--
 * @Author: chengfun 425247833@qq.com
 * @Date: 2023-07-31 21:15:21
 * @LastEditors: chengfun 425247833@qq.com
 * @LastEditTime: 2023-08-13 13:49:27
 * @FilePath: /vue-course/03_vue/09_meals/src/components/Checkout/Checkout.vue
 * @Description: 结账的页面
-->

<script setup>
import { useMealsStore } from "../../store/meals";
import Counter from "../UI/Counter.vue";

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
        <div class="item" v-for="item in meals.cartMelas" :key="item.id">
          <div class="img-wrap">
            <img :src="item.img" :alt="item.title">
          </div>
          <div class="info">
            <h2 class="title">{{ item.title }}</h2>
            <div class="count">
              <Counter :meal="item" />
              <span class="amount">{{ item.count * item.price }}</span>
            </div>
          </div>
        </div>
      </div>
      <footer>合计¥<span>{{ meals.amount }}</span></footer>
    </div>
    <div class="bar">
      <div class="total-amount">
        <p class="no-goods" v-show="meals.totalCount <= 0">未选购商品</p>
        <p class="has-goods" v-show="meals.totalCount > 0" @click="showDetails = true">
          {{ meals.amount }}
        </p>
      </div>
      <button class="checkout-btn">去支付</button>
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

.list {
  height: 800rem;
  overflow: auto;
}

.item {
  display: flex;
}

.img-wrap {
  width: 160rem;
}

.info {
  flex: auto;
}

.title {
  margin: 26rem 0;
  font-size: 26rem;
}

.count {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.amount {
  font-size: 26rem;
  font-weight: bold;
}

.amount::before {
  content: '¥';
  font-weight: normal;
}

.bar {
  width: 710rem;
  height: 112rem;
  position: fixed;
  background-color: #3a3a3a;
  bottom: 30rem;
  left: 0;
  right: 0;
  margin: 0 auto;
  border-radius: 60rem;
}

.total-amount {
  margin-left: 30rem;
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
  content: "合计¥";
  font-size: 26rem;
  color: #ccc;
}

.checkout-btn {
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