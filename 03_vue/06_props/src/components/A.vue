<!--
 * @Author: chengxy666 425247833@qq.com
 * @Date: 2023-05-30 11:29:17
 * @LastEditors: chengxy666 425247833@qq.com
 * @LastEditTime: 2023-06-02 13:54:05
 * @FilePath: /vue-course/03_vue/06_props/src/components/A.vue
-->

<script setup>
  const props = defineProps(['name']);
</script>

<template>
  <h1>A组件 {{ props.name }}</h1>
</template>