<!--
 * @Author: chengxy666 425247833@qq.com
 * @Date: 2023-05-30 11:09:12
 * @LastEditors: chengxy666 425247833@qq.com
 * @LastEditTime: 2023-05-30 11:13:56
 * @FilePath: /vue-course/03_vue/06_props/src/App.vue
-->

<script setup>
import { ref } from 'vue';

</script>

<template>
  <!--
    component 是一个动态组件
      - component最终以什么标签呈现由is属性决定
  -->
  <!-- <component v-bind:is="'h1'">我是一个component</component> -->
  <component is="h1">我是一个component</component>
  <component is="h2">我是一个component</component>
  <component is="h3">我是一个component</component>
  <component is="div">我是一个component</component>
  <component is="p">我是一个component</component>
</template>