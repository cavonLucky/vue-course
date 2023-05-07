<!--
 * @Author: cavonLucky 425247833@qq.com
 * @Date: 2023-05-06 20:02:17
 * @LastEditors: cavonLucky 425247833@qq.com
 * @LastEditTime: 2023-05-07 16:39:14
 * @FilePath: /vue-course/03_vue/02_vue的基础/src/App.vue
-->

<script>

// const obj = {
//   msg: '我是App.vue 里面的obj'
// };

// window.obj = obj;

// 组件，一个组件可以创建多个组件实例
// 组件就是一个普通的js对象
export default {
  // data 是一个函数，在data中，this就是当前的组件实例vm
  data() {
    // this undefined：如果使用箭头函数，则无法通过this来访问组件实例
    // data: () => {
    // data: (vm) => {
    // console.log("vm: ", vm); // Proxy(Object)...
    // 使用vue时，减少使用箭头函数
    console.log('this: ', this);

    // 直接向组件实例中添加的属性不会被vue所代理，不是响应数据，修改后页面不会发生变化
    this.name = '孙悟空';

    // vm.$data 是实际的代理对象, 通过vm可以直接访问到$data中的属性
    // vm.$data.msg 等价于 vm.msg

    // data会返回一个对象作为返回值，vue会对该对象进行代理，从而将其转换为响应式数据，响应式数据可以直接通过组件实例访问
    return {
      msg: '哈哈哈哈哈'
    }

    // return obj;
  },
  created() {
    // 会在组件创建完毕后调用
    this.$data.name = '孙悟空'; // 可以通过vm.$data动态的向组件中添加响应式数据, 但是不建议这么做
  }
}
</script>

<template>
  <div>
    <h1>{{ msg }}</h1>
    <h2>{{ name }}</h2>
  </div>
</template>
