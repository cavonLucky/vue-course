<!--
 * @Author: chengxy666 425247833@qq.com
 * @Date: 2023-05-30 11:09:12
 * @LastEditors: chengxy666 425247833@qq.com
 * @LastEditTime: 2023-05-30 11:41:39
 * @FilePath: /vue-course/03_vue/06_props/src/03_动态组件component.vue
-->

<script setup>
import { ref } from 'vue';
import A from './components/A.vue';
import B from './components/B.vue';

const isShow = ref(true);
// const isShow = ref(false);

</script>

<template>
  <!--
    component 是一个动态组件
      - component最终以什么标签呈现由is属性决定
  -->
  <!-- <component v-bind:is="'h1'">我是一个component</component> -->
  <!-- <component is="h1">我是一个component</component>
  <component is="h2">我是一个component</component>
  <component is="h3">我是一个component</component>
  <component is="div">我是一个component</component>
  <component is="p">我是一个component</component> -->

  <!-- <component :is="A"></component> -->
  <!-- <component :is="B"></component> -->

  <button @click="isShow = !isShow">切换</button>
  <component :is="isShow ? A : B"></component>
</template>