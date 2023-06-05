<!--
 * @Author: chengxy666 425247833@qq.com
 * @Date: 2023-06-05 17:08:27
 * @LastEditors: chengxy666 425247833@qq.com
 * @LastEditTime: 2023-06-05 21:18:15
 * @FilePath: /vue-course/03_vue/08_state/src/components/ComponentC.vue
-->

<script setup>

// import { ref, inject } from 'vue';
import { countStore } from '@/store/count';
import { storeToRefs } from 'pinia';

// const count = ref(0);
// const increment = () => {
//   count.value++;
// }

// const { count, increment } = inject('count');

import { useStudentStore } from '@/store/studentStore';
const stuStore = useStudentStore();
console.log(stuStore);

/*
  store实例本事就是一个reactive对象，可以通过它直接访问state中的数据，
  但是如果直接将state中的数据解构出来，那么数据将会丧失响应式

  可以通过storeToRefs()来对state进行解构，它可以将state和getters中的属性解构为ref属性，从而保留其响应性

  state的修改：
    1. 直接修改
    2. 通过$patch
    3. 通过$patch传函数的形式的修改
    4. 直接替换state
    5. 重置state

*/
// const { name, age } = stuStore;
// 不能解构方法
// const { name, age, title, growUp } = storeToRefs(stuStore);
const { name, age, title, skills } = storeToRefs(stuStore);

// state 中的属性（方法），都可以通过store对象直接访问

const clickHandler = () => {
  stuStore.$patch({
    name: '孙小圣',
    age: 20,
    skills: ['救命毫毛']
  })
}

const clickHandler2 = () => {
  // stuStore.$patch(state => {
  //   state.skills.push('救命毫毛');
  // })

  // stuStore.skills.push('救命毫毛');

  // 直接替换等价于stuStore.$patch = { name: '孙孙孙' };
  stuStore.$state = { name: '孙孙孙' };
}
</script>

<template>
  <div>
    <h4>
      ComponentC -- {{ countStore.count }} --
      <button @click="countStore.increment">按钮</button>
    </h4>
    <h4>
      <!-- ComponentC -- {{ stuStore.name }} -- {{ stuStore.age }} -->
      <!-- ComponentC -- {{ name }} -- {{ age }} -->
      <!-- ComponentC -- {{ name }} -- {{ age }} -- {{ stuStore.title }} -->
      ComponentC -- {{ name }} -- {{ age }} -- {{ title }} -- {{ skills }}
      <button @click="stuStore.growUp">长大</button>
      <!-- <button @click="growUp">长大</button> -->
      <hr>
      <!-- <button @click="stuStore.name = '孙大圣'">修改name</button> -->
      <button @click="name = '孙大圣'">state修改name</button>
      <button @click="clickHandler">patch修改name</button>
      <button @click="clickHandler2">patch函数修改name</button>
      <button @click="stuStore.$reset()">重置state</button>
    </h4>
  </div>
</template>