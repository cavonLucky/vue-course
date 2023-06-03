<!--
 * @Author: chengxy666 425247833@qq.com
 * @Date: 2023-06-03 16:07:30
 * @LastEditors: chengxy666 425247833@qq.com
 * @LastEditTime: 2023-06-03 17:11:03
 * @FilePath: /vue-course/03_vue/06_props/src/10_透传属性.vue
-->

<script setup>
import C from './components/C.vue';
/**
 * 透传属性
 *    - 在组件上设置属性，会自动传递给组件的根元素
 *    - 这样一来可以方便我们在父组件中为子组件来设置属性
 *    - 透传会发生在没有被声明为 props和emit的属性上
 *    - 自动的透传只适用单根组件
 */

function showMsg() {
  alert('hello');
}
</script>

<template>
  <div>
    <h1>哈哈哈</h1>
    <h2 class="box1">我是h2</h2>
    <C  class="box2" style="color: red;" @click="showMsg"/>
  </div>
</template>

<style scoped></style>