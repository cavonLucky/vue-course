<!--
 * @Author: chengxy666 425247833@qq.com
 * @Date: 2023-05-30 17:56:32
 * @LastEditors: chengxy666 425247833@qq.com
 * @LastEditTime: 2023-05-30 18:05:02
 * @FilePath: /vue-course/03_vue/06_props/src/App.vue
-->

<script setup>
import { ref } from 'vue';

const arr = ref(['孙悟空', '猪八戒', '沙和尚']);

</script>

<template>

  <ul>
    <!-- <li>{{ arr[0] }}</li>
    <li>{{ arr[1] }}</li>
    <li>{{ arr[2] }}</li> -->

    <li v-for="name in arr">{{ name }}</li>
  </ul>
</template>