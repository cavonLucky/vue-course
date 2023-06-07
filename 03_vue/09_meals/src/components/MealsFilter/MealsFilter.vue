<!--
 * @Author: chengxy666 425247833@qq.com
 * @Date: 2023-06-06 20:25:03
 * @LastEditors: chengxy666 425247833@qq.com
 * @LastEditTime: 2023-06-07 18:57:12
 * @FilePath: /vue-course/03_vue/09_meals/src/components/MealsFilter/MealsFilter.vue
 * @Description: 对所有食物过滤的组件
-->

<template>
  <div class="filter">
    <div class="filter-inner">
      <input type="text" placeholder="请输入关键字" class="filter-input">
      <i class="ri-search-line"></i>
    </div>
  </div>
</template>

<style scoped>
.filter {
  padding: 20rem 40rem;
  border-bottom: 1px solid #e6e6e6;
}

.filter-inner {
  height: 80rem;
  position: relative;
  display: flex;
  align-items: center;
}

.filter-input {
  background-color: #f2f2f2;
  border: none;
  height: 100%;
  width: 100%;
  border-radius: 36rem;
  outline: none;
  padding: 0 20rem 0 80rem;
}

.filter-inner i {
  color: rgb(185, 185, 185);
  font-size: 36rem;
  font-weight: bold;
  position: absolute;
  left: 20rem;
}
</style>