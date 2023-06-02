<!--
 * @Author: chengxy666 425247833@qq.com
 * @Date: 2023-06-02 13:27:25
 * @LastEditors: chengxy666 425247833@qq.com
 * @LastEditTime: 2023-06-02 13:47:12
 * @FilePath: /vue-course/03_vue/06_props/src/App.vue
-->

<script setup>
import MyButton from './components/MyButton.vue';
import A from './components/A.vue';
</script>

<template>
  <h1>App组件</h1>
  <!--
    希望在父组件中指定子组件中的内容
      - 我们可以通过插槽（slot）来实现该需求

    <MyButton>插槽的入口</MyButton>

    <button>
      <slot></slot> 插槽的出口
    </button>

  -->
  <!-- <MyButton /> -->
  <!-- <MyButton>这是App自定义的文字</MyButton> -->
  <!-- <MyButton>嘻嘻嘻</MyButton> -->
  <!-- <MyButton><div>哈哈哈</div></MyButton> -->
  <MyButton><A></A></MyButton>
</template>