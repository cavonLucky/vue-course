<!--
 * @Author: chengxy666 425247833@qq.com
 * @Date: 2023-06-05 16:28:03
 * @LastEditors: chengxy666 425247833@qq.com
 * @LastEditTime: 2023-06-05 17:53:30
 * @FilePath: /vue-course/03_vue/08_state/src/components/Root.vue
-->

<script setup>
import ComponentA from './ComponentA.vue';
import ComponentB from './ComponentB.vue';
// import { ref, provide } from 'vue';

// const count = ref(0);
// const increment = () => {
//   count.value++;
// }

// provide('count', {
//   count,
//   increment
// });

</script>
<template>
  <div>
    <h2>根组件</h2>
    <ul>
      <li>
        <ComponentA />
      </li>
      <li>
        <ComponentB />
      </li>
    </ul>
  </div>
</template>