<!--
 * @Author: chengxy666 425247833@qq.com
 * @Date: 2023-06-02 13:29:16
 * @LastEditors: chengxy666 425247833@qq.com
 * @LastEditTime: 2023-06-02 13:56:49
 * @FilePath: /vue-course/03_vue/06_props/src/components/MyButton.vue
-->

<script setup>
  const age = 18;
</script>

<template>
  <!-- <button>点我一下</button> -->
  <button>
    <!-- slot标签会被组件的标签体所替换 -->
    <slot></slot>
  </button>
</template>