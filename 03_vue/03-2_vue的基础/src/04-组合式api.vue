<!--
 * @Author: chengxy666 425247833@qq.com
 * @Date: 2023-05-22 21:45:55
 * @LastEditors: chengxy666 425247833@qq.com
 * @LastEditTime: 2023-05-22 21:51:18
 * @FilePath: /vue-course/03_vue/04_vue的基础/src/App.vue
-->

<template>
  <div>
    <h1>演示组合API🥸</h1>
    <h2>{{ msg }} -- {{ count }}</h2>
    <h3>{{ fn() }}</h3>
    <h4>{{ stu.name }}</h4>
  </div>
</template>

<script setup>
import { reactive } from "vue";

  const msg = '我不爱vue我爱你，哈哈哈哈'
  const count = 0;

  function fn() {
    return '哈哈哈哈，分手快乐';
  }

  const stu = reactive({
    name: '程续缘yyds'
  })
</script>