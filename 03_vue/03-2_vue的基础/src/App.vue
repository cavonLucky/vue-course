<!--
 * @Author: chengxy666 425247833@qq.com
 * @Date: 2023-05-22 20:08:49
 * @LastEditors: chengxy666 425247833@qq.com
 * @LastEditTime: 2023-05-22 21:39:05
 * @FilePath: /vue-course/03_vue/04_vue的基础/src/App.vue
-->

<template>
  <div>
    <h1>演示组合API🥸</h1>
    <h2>{{ msg }}</h2>
    <h3>{{ count }}</h3>
    <button @click="count++">点我一下</button>
    <hr>
    <h2>{{ stu.name }} -- {{ stu.age }} -- {{ stu.denger }}</h2>
    <button @click="changeAge">点我一下</button>
  </div>
</template>

<script>
import { reactive } from 'vue';

export default {
  // setup 是一个钩子函数，可以通过这个函数向外部暴露组件的配置
  setup() {
    // 定义变量
    /**
     * 在组合api中直接声明的变量，就是一个普通的变量，不是响应式属性，修改这些属性时，不会在试图中产生效果
     */
    let msg = '今天天气真晴朗';
    let count = 0;

    // 可以通过 reactive() 来创建一个响应式对象
    const stu = reactive({
      name: '孙悟空',
      age: 18,
      denger: '男'
    });

    function changeAge() {
      stu.age = 28;
    }

    // 在setup()中可以通过返回值来指定哪些内容要暴露给外部, 暴露后的内容，可以在模板中直接使用
    return { msg, count, stu, changeAge }
  }
}
</script>