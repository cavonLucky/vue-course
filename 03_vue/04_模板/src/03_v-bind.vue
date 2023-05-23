<!--
 * @Author: chengxy666 425247833@qq.com
 * @Date: 2023-05-23 19:22:22
 * @LastEditors: chengxy666 425247833@qq.com
 * @LastEditTime: 2023-05-23 20:37:16
 * @FilePath: /vue-course/03_vue/04_模板/src/01_组合式API补充.vue
-->

<template>
  <!--
    当我们需要为标签动态的设置属性时，需要使用v-bind指令
        v-bind 可以简写为 :

    当我们为一个布尔值设置属性时，
      如果值为true，则元素上有该属性（转换后为true，也算true）；
      如果值为false，则元素上没有该属性（转换后为false，也算false）
      特殊情况："" 空字符串，在这里会被当成真值

   -->
  <header>

    <!-- <input type="text" disabled="disabled"> -->
    <input type="text" :disabled="idDisabled">

    <hr>
    <button @click="changeImg">切换图片</button>
    <!-- <img src="/images/messi.png" alt="梅西"> -->
    <!-- <img src="{{ imgPath }}" alt="梅西"> -->
    <!-- <img v-bind:src="imgPath" alt="梅西"> -->
    <!-- <img v-bind:[attrName]="attrValue" :src="imgPath" alt="梅西"> -->
    <img :[attrName]="attrValue" :src="imgPath" alt="梅西">

    <div v-bind="attrs"></div>
    <div :="attrs"></div>

  </header>
</template>

<script setup>
import { ref } from 'vue';
const imgPath = ref("/images/messi.png");

const changeImg = () => {
  imgPath.value = "/images/neymar.png";
}

// <div id="box1" class="hello"></div>
const attrs = {
  id: 'box1',
  class: 'hello'
}

// const idDisabled = true;
// const idDisabled = false;
// const idDisabled = 0;
// const idDisabled = 'hello';
// const idDisabled = NaN;
const idDisabled = '';

const attrName = 'title';
const attrValue = '这是一个 title 属性';
</script>

