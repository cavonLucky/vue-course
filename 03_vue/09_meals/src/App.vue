<!--
 * @Author: chengxy666 425247833@qq.com
 * @Date: 2023-06-06 17:50:59
 * @LastEditors: chengxy666 425247833@qq.com
 * @LastEditTime: 2023-07-10 15:22:22
 * @FilePath: /vue-course/03_vue/09_meals/src/App.vue
-->

<script setup>
import { useMealsStore } from './store/meals';
import Meals from './components/Meals/Meals.vue';
import MealsFilter from './components/MealsFilter/MealsFilter.vue';
import CartBar from './components/Cart/CartBar.vue';

const meals = useMealsStore();
// console.log(meals.data[0]);

</script>

<template>
  <div>
    <MealsFilter />
    <Meals :meals="meals.filterMeals" :desc="true" />
    <CartBar />
  </div>
</template>

<style scoped></style>
