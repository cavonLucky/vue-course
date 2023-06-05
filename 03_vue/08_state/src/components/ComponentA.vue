<!--
 * @Author: chengxy666 425247833@qq.com
 * @Date: 2023-06-05 16:28:37
 * @LastEditors: chengxy666 425247833@qq.com
 * @LastEditTime: 2023-06-05 20:13:49
 * @FilePath: /vue-course/03_vue/08_state/src/components/ComponentA.vue
-->

<script setup>

// import { ref, inject } from 'vue';
import { countStore } from '@/store/count';
// 引入store钩子
import { useCountStore } from '../store/countStore';

// 获取store实例
const countStore2 = useCountStore();

// const count = ref(0);

// const increment = () => {
//   count.value++;
// }

/*
  状态管理
      - 状态（state）
          - 应用当中的数据就是状态
          - 状态即数据
      - 视图（view）
          - 视图用来呈现数据，用户通过视图访问数据
      - 交互（actions）
          - 用户的操作
          - 状态会根据用户在视图中的操作发生变化
  提升状态
      - 当有多个组件需要使用到同一个state时，可以将state提升到这些组件共同的祖先组件中声明，这样一来所有这些组件便都可以通过祖先元素来访问到这个state

*/

// const { count, increment } = inject('count');

</script>

<template>
  <div>
    <h3>
      ComponentA -- {{ countStore.count }} --
      <button @click="countStore.increment">按钮</button>
    </h3>
    <h3>
      ComponentA -- {{ countStore2.count }} -- {{ countStore2.name }} -- {{ countStore2.double }}
      <button @click="countStore2.increment">按钮</button>
    </h3>
  </div>
</template>