<!--
 * @Author: chengxy666 425247833@qq.com
 * @Date: 2023-05-30 14:08:54
 * @LastEditors: chengxy666 425247833@qq.com
 * @LastEditTime: 2023-05-30 16:31:23
 * @FilePath: /vue-course/03_vue/05_练习/src/components/HotBar.vue
-->

<script setup>

import {computed} from 'vue';
const props = defineProps(['hot', 'maxHot']);
const width = computed(() => {
  // 计算百分比
  return (props.hot / props.maxHot) * 100 + '%';
});
</script>

<template>
  <div class="hot-bar">
    <div class="inner">{{ props.hot }}热度</div>
  </div>
</template>

<style scoped>
.hot-bar {
  background: #0d2463;
  border-radius: 20px;
  overflow: hidden;
}

.hot-bar .inner {
  border-radius: 20px;
  text-indent: 1rem;
  background: linear-gradient(90deg, rgb(170, 0, 39) 50%, rgb(54, 0, 13) 100%);
  white-space: nowrap;
  width: v-bind(width);
}
</style>