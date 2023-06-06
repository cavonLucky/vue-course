<!--
 * @Author: chengxy666 425247833@qq.com
 * @Date: 2023-06-06 17:50:59
 * @LastEditors: chengxy666 425247833@qq.com
 * @LastEditTime: 2023-06-06 20:26:30
 * @FilePath: /vue-course/03_vue/09_meals/src/App.vue
-->

<script setup>
import { useMealsStore } from './store/meals';
import Meals from './components/Meals/Meals.vue';


const meals = useMealsStore();
console.log(meals.data[0]);

</script>

<template>
  <Meals />
</template>

<style scoped></style>
