<!--
 * @Author: chengxy666 425247833@qq.com
 * @Date: 2023-06-05 17:06:11
 * @LastEditors: chengxy666 425247833@qq.com
 * @LastEditTime: 2023-06-06 10:52:44
 * @FilePath: /vue-course/03_vue/08_state/src/components/ComponentB.vue
-->
<script setup>
import ComponentC from './ComponentC.vue';
import { ref } from 'vue';

const isShow = ref(true);

</script>
<template>
  <div>
    <h3>ComponentB</h3>
    <ul>
      <li v-if="isShow">
        <ComponentC />
      </li>
    </ul>
  </div>
</template>