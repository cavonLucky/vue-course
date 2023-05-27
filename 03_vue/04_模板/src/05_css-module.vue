<!--
 * @Author: chengxy666 425247833@qq.com
 * @Date: 2023-05-27 15:22:33
 * @LastEditors: chengxy666 425247833@qq.com
 * @LastEditTime: 2023-05-27 16:16:27
 * @FilePath: /vue-course/03_vue/04_模板/src/05_css-module.vue
-->

<script setup>
import MyBox from "./components/MyBox.vue";
</script>

<template>
  <div class="app">
    <h1>今天天气真不错！</h1>
    <!-- <div :class="$style.box1">App中的box1</div> -->
    <div :class="classes.box1">App中的box1</div>
    <MyBox></MyBox>
  </div>
</template>

<!--
  css 模块
    - 自动的对模板中的类名进行hash化来确保类名的唯一性
    - 在模板中可以通过 $style.类名 使用
    - 也可以通过 module 的属性值来指定变量名
 -->
<!-- <style module>
  .box1 {
    background: #bfa;
  }
</style> -->

<style module="classes">
  .box1 {
    background: #bfa;
  }
</style>



