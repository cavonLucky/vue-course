<!--
 * @Author: chengxy666 425247833@qq.com
 * @Date: 2023-05-30 10:36:51
 * @LastEditors: chengxy666 425247833@qq.com
 * @LastEditTime: 2023-05-30 11:07:14
 * @FilePath: /vue-course/03_vue/06_props/src/02_v-show和v-if.vue
-->

<script setup>
import { ref } from 'vue';

// const isShow = ref(true);
const isShow = ref(false);

</script>

<template>
  <h1>我是App组件</h1>
  <button @click="isShow = !isShow">切换</button>
  <!--
    v-show 可以根据值来决定元素是否显示，（通过display来切换元素的显示状态）
      - 通过 css 来切换组件的显示与否，切换时不会涉及到组件的重新渲染，切换的性能会比较高。
        但是初始化时，需要对所有组件进行初始化，即使组件暂时不显示，所以它的初始化的性能要差一些。


    v-if 可以根据表达式的值来决定是否显示，（会直接将元素删除）
      - 通过删除添加元素的方式，来切换元素的显示，切换时反复的渲染组件，切换的性能比较差。
        v-if只会初始化需要用到的组件，所有它的初始化性能比较好。
      
      - 可以和v-else-if 和 v-else 结合使用
      - 可以配合template使用

   -->
  <!-- <div v-show="isShow">
    <h2>你猜我会显示吗？</h2>
  </div> -->
  <!-- <div v-if="isShow">
    <h2>你猜我会显示吗？</h2>
  </div> -->

  <!-- <div v-if="isShow">
    <h2>我是if中的内容</h2>
  </div>
  <div v-else>
    <h2>我是else中的内容</h2>
  </div> -->

  <!-- <h2 v-if="isShow">我是一个h2</h2>
  <h3>我是h3</h3> -->

  <!-- <div v-if="isShow">
    <h2>我是一个h2</h2>
    <h3>我是h3</h3>
  </div> -->

  <template v-if="isShow">
    <h2>我是一个h2</h2>
    <h3>我是h3</h3>
  </template>
</template>