<!--
 * @Author: chengxy666 425247833@qq.com
 * @Date: 2023-06-06 17:50:59
 * @LastEditors: chengxy666 425247833@qq.com
 * @LastEditTime: 2023-06-06 20:11:14
 * @FilePath: /vue-course/03_vue/09_meals/src/App.vue
-->

<script setup>
import { useMealsStore } from './store/meals';


const meals = useMealsStore();
console.log(meals.data[0]);

</script>

<template>
  <h1>哈喽</h1>
</template>

<style scoped></style>
