<!--
 * @Author: chengxy666 425247833@qq.com
 * @Date: 2023-06-06 20:22:26
 * @LastEditors: chengxy666 425247833@qq.com
 * @LastEditTime: 2023-06-06 21:10:15
 * @FilePath: /vue-course/03_vue/09_meals/src/components/Meals/Meals.vue
 * @Description: 所有的汉堡列表相关的组件
-->

<script setup>

import Meal from './Meal.vue';
import { useMealsStore } from '@/store/meals';

const meals = useMealsStore();
console.log('pppp', meals);

</script>

<template>
  <!-- 所有的汉堡的容器 -->
  <div class="meals">
    <!-- 显示商品信息 -->
    <Meal v-for="item in meals.data" :key="item.id" :meal="item" />
  </div>
</template>

<style scoped>
.meals {
  height: 100vh;
  overflow: auto;
  /* padding: 120rem 0; */
}
</style>