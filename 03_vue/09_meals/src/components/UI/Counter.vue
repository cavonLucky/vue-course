<!--
 * @Author: chengxy666 425247833@qq.com
 * @Date: 2023-06-06 21:46:54
 * @LastEditors: chengxy666 425247833@qq.com
 * @LastEditTime: 2023-06-09 20:17:07
 * @FilePath: /vue-course/03_vue/09_meals/src/components/UI/Counter.vue
 * @Description: 控制商品的数量组件
-->

<script setup>
// import { ref } from 'vue';
// const count = ref(0);

import { useMealsStore } from '@/store/meals';
const meals = useMealsStore();
const props = defineProps(['meal']);

</script>

<template>
  <div class="counter">
    <template v-if="props.meal.count > 0">
      <button class="sub" @click="meals.subMealFromCart(props.meal)"><i class="ri-subtract-line"></i></button>
      <span class="count">{{ props.meal.count }}</span>
    </template>
    <button class="add" @click="meals.addMealToCart(props.meal)"><i class="ri-add-line"></i></button>
  </div>
</template>

<style scoped>
.counter {
  display: flex;
  align-items: center;
}

.sub,
.add {
  width: 34rem;
  height: 34rem;
  background-color: #efbe41;
  border: none;
  border-radius: 50%;
  text-align: center;
  font-size: 34rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.sub {
  background-color: #fff;
  border: 1px solid rgb(0, 0, 0);
}

.count {
  font-size: 30rem;
  margin: 0 20rem;

}
</style>