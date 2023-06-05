<!--
 * @Author: chengxy666 425247833@qq.com
 * @Date: 2023-06-05 17:08:27
 * @LastEditors: chengxy666 425247833@qq.com
 * @LastEditTime: 2023-06-05 17:21:47
 * @FilePath: /vue-course/03_vue/08_state/src/components/ComponentC.vue
-->

<script setup>

import { ref, inject } from 'vue';

// const count = ref(0);
// const increment = () => {
//   count.value++;
// }

const { count, increment } = inject('count');


</script>

<template>
  <h4>
    ComponentC -- {{ count }} --
    <button @click="increment">按钮</button>
  </h4>
</template>