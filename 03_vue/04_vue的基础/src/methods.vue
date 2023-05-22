<!--
 * @Author: chengxy666 425247833@qq.com
 * @Date: 2023-05-19 11:32:48
 * @LastEditors: chengxy666 425247833@qq.com
 * @LastEditTime: 2023-05-22 15:30:47
 * @FilePath: /vue-course/03_vue/04_vue的基础/src/App.vue
-->

<template>
  <div>
    <h1>{{ msg }}</h1>
    <h2>{{ sum(500, 20) }}</h2>
    <button @click="chengeMsg">点我一下</button>
  </div>
</template>

<script>
export default {
  // data()用来指定实例对象中的响应式属性
  data() {
    return {
      msg: '好热呀好热呀'
    }
  },
  /**
   * methods用来指定实例对象中的方法
   *  - 他是一个对象，可以在它里边定义多个方法
   *  - 这些方法最终将会被挂载到组件实例上
   *  - 可以直接通过组件实例来调用这些方法
   *  - 所有组件实例上的属性都可以在模板中直接访问
   */
  methods: {
    // test() {
    //   alert('哈哈哈哈');
    // },
    // hello() {
    //   console.log(' hello 函数');
    // }
    sum(a, b) {
      console.log(this); // 组件实例
      return a + b;
    },
    chengeMsg() {
      this.msg = '  新的消息！';
    }
  }
}
</script>