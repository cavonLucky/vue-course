<!--
 * @Author: chengxy666 425247833@qq.com
 * @Date: 2023-06-07 20:05:10
 * @LastEditors: chengxy666 425247833@qq.com
 * @LastEditTime: 2023-06-07 20:13:34
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
  padding: 100px 0;
  background: #fff;
}

.empty-image {
  width: 92px;
}

.empty-image img {
  width: 100%;
  height: 100%;
  vertical-align: top;
}

.empty-description {
  margin-top: 24px;
  color: rgba(130, 130, 130, 1);
  font-size: 20px;
}
</style>