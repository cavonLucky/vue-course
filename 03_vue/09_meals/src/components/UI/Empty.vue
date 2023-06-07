<!--
 * @Author: chengxy666 425247833@qq.com
 * @Date: 2023-06-07 20:05:10
 * @LastEditors: chengxy666 425247833@qq.com
 * @LastEditTime: 2023-06-07 20:40:29
 * @FilePath: /vue-course/03_vue/09_meals/src/components/UI/Empty.vue
 * @Description: 无数据状态组件
-->

<script setup>
const props = defineProps(['desc']);
</script>

<template>
  <div class="empty">
    <div class="empty-image">
      <img alt="no-data" src="/images/empty.png" />
    </div>
    <div class="empty-description">{{ props.desc }}</div>
  </div>
</template>

<style scoped>
.empty {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  box-sizing: border-box;
  padding: 200rem 0;
  background: #fff;
}

.empty-image {
  width: 176rem;
}

.empty-image img {
  width: 100%;
  height: 100%;
  vertical-align: middle;
}

.empty-description {
  margin-top: 46rem;
  color: rgba(130, 130, 130, 1);
  font-size: 38rem;
}
</style>