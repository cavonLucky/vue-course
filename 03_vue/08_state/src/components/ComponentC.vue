<!--
 * @Author: chengxy666 425247833@qq.com
 * @Date: 2023-06-05 17:08:27
 * @LastEditors: chengxy666 425247833@qq.com
 * @LastEditTime: 2023-06-06 17:44:57
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
// const { name, age, title, skills } = storeToRefs(stuStore);
const { name, age, title } = storeToRefs(stuStore);

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
  stuStore.$state = { name: '孙孙孙' }; // mutation.type为patch function的原因是在它内部调用 `$patch()`
}

/**
  store 的订阅
    - 当store订阅的state发生变化时，做一些相应的操作
    - store.$subscribe(函数，配置对象)
 */
// stuStore.$subscribe(() => {
//   console.log(' state发生变化了');
// }, { detached: true })

stuStore.$subscribe((mutation, state) => {
  // mutation 表示修改的信息
  // console.log('mutation', mutation, mutation.type);
  // console.log('mutation', mutation);
  // console.log('mutation', mutation.events);
  // console.log('mutation', mutation.events[0] === mutation.events[1]);

  // console.log('mutation', mutation.payload);

  // if (state.token) {
  //   // 表示登录，向本地存储中添加内容
  // } else {
  //   // 表示登出，从本地存储中移除内容
  // }

  // 使用订阅时不要在回调函数中直接修改state
  // state.age++;
  // console.log(' state发生变化了', state, state.name);
}, { detached: true })

// $onAction 用来订阅action的调用
stuStore.$onAction(({ name, store, args, after, onError }) => {

  /**
      name 调用的action的名字
      store store的实例
      args action接收到的参数
      after() 可以设置一个回调函数，函数会在action成功调用后触发
      onError() 可以设置一个回调函数，函数会在action调用失败后触发
   */


  // console.log('onAction执行了～');
  // console.log('onAction执行了～', args);

  // console.log(name); // growUp
  // console.log(store); // Proxy(Object)
  // console.log(args); // [PointerEvent] || [123]
  // console.log(after); // after(callback)
  // console.log(onError); // onError(callback)

  after(() => {
    console.log(name + '成功执行了'); // growUp成功执行了
  });

  onError((err) => {
    console.log(name + '执行失败！', err); // growUp执行失败！…………
  })
})

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
      <!-- ComponentC -- {{ name }} -- {{ age }} -- {{ title }} -- {{ stuStore.skills }} -->
      ComponentC -- {{ name }} -- {{ age }} -- {{ title }} -- {{ stuStore.skills }} -- {{ stuStore.double }}
      <!-- <button @click="growUp">长大</button> -->
      <!-- <button @click="stuStore.growUp(stuStore)">长大</button> -->
      <!-- <button @click="stuStore.growUp(123)">长大</button> -->
      <button @click="stuStore.growUp">长大</button>
      <hr>
      <!-- <button @click="stuStore.name = '孙大圣'">修改name</button> -->
      <button @click="name = '孙大圣'">state修改name</button>
      <button @click="clickHandler">patch修改name</button>
      <button @click="clickHandler2">patch函数修改name</button>
      <button @click="stuStore.$reset()">重置state</button>
    </h4>
  </div>
</template>