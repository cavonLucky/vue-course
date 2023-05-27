<!--
 * @Author: chengxy666 425247833@qq.com
 * @Date: 2023-05-27 16:16:47
 * @LastEditors: chengxy666 425247833@qq.com
 * @LastEditTime: 2023-05-27 16:24:32
 * @FilePath: /vue-course/03_vue/04_模板/src/06_类和内联样式.vue
-->

<script setup>
const arr = ['box1', 'box2', 'box3'];
// const arr2 = [{ box1: true, box2: false, box3: false }];
const arr2 = [{ box1: true, box2: false, box3: true }];
const styles = {
  color: 'red',
  background: '#bfa'
}
</script>

<template>
  <div>
    <h1 class="header">今天天气真不错！</h1>
    <div :class="arr">我是div</div>
    <div :class="arr2">我是div</div>
    <div :class="arr2" style="color: red;">我是div</div>
    <div :class="arr2" :style="styles">我是div</div>
  </div>
</template>

<style scoped>
.header {
  background: orange;
}
</style>



