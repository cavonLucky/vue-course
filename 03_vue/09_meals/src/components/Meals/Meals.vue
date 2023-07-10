<!--
 * @Author: chengxy666 425247833@qq.com
 * @Date: 2023-06-06 20:22:26
 * @LastEditors: chengxy666 425247833@qq.com
 * @LastEditTime: 2023-07-10 15:21:27
 * @FilePath: /vue-course/03_vue/09_meals/src/components/Meals/Meals.vue
 * @Description: 所有的汉堡列表相关的组件
-->

<script setup>

import Meal from './Meal.vue';
// import { useMealsStore } from '@/store/meals';
import Empty from '../UI/Empty.vue';

const props = defineProps(['meals']);

// const meals = useMealsStore();

</script>

<template>
  <!-- 所有的汉堡的容器 -->
  <div class="meals">
    <!-- 显示商品信息 -->
    <Meal v-for="item in props.meals" :key="item.id" :meal="item" :desc="$attrs.desc" />
    <!-- <h2 v-if="meals.filterMeals.length === 0">没有找到指定的商品</h2> -->
    <!-- <Empty v-if="props?.meals?.length === 0" :desc="'没有找到指定的商品'"/> -->
    <Empty v-if="!props.meals || props.meals.length === 0" :desc="'没有找到指定的商品'" />
  </div>
</template>

<style scoped>
.meals {
  height: calc(100vh - 120rem);
  overflow: auto;
  padding-bottom: 160rem;
}
</style>