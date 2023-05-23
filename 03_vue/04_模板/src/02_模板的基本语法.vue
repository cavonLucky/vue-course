<!--
 * @Author: chengxy666 425247833@qq.com
 * @Date: 2023-05-23 15:39:55
 * @LastEditors: chengxy666 425247833@qq.com
 * @LastEditTime: 2023-05-23 18:40:14
 * @FilePath: /vue-course/03_vue/04_模板/src/01_组合式API补充.vue
-->

<template>
  <header>
    <h1>{{ msg }}</h1>
    <h1>{{ Math.random() }}</h1>
    <h1>{{ new Date() }}</h1>
    <!-- <h1>不支持❌{{ alert(1) }}</h1> -->
    <hr>
    <!-- <h1>{{ hello }}</h1> -->
    <!-- <h1>{{ alert }}</h1> -->
    <!-- <h1>{{ alert(123) }}</h1> -->
    <h1>{{ 1 }}</h1>
    <h1>{{ 'hello' + 'world' }}</h1>
    <h1>{{ fn() }}</h1>
    <hr>
    <div>{{ html }}</div>
    <div v-text="html"></div>
    <div v-html="html"></div>
  </header>
</template>

<script setup>
/**
 * - 在模板中，可以直接访问到组件中声明的变量
 * - 除了组件中的变量外，vue 也为我们提供了一些全局对象可以访问：
 *      比如：Date、Math、RegExp......
 *      除此之外，也可以通过 app 对象来向vue 中添加一些全局变量
 *      app.config.globalProperties
 * - 使用插值（双大括号），只能使用表达式
 *      表达式，就是有返回值的语句
 * - 插值实际上就是在修改元素的textContent, 标签会被转义显示，不会作为标签生效
 *
 * 指令：
 *    - 指令模板中为标签设置的一些特殊属性，它可以用来设置标签如何显示内容
 *    - 指令使用 v- 开头
 *        v-text 将表达式的值作为元素的textContent插入，作用同{{}}
 *          使用指令时，不需要通过 {{}} 来指定表达式
 *        v-html 将表达式的值作为元素的innerHTML插入，有xss共计的风险
 */
const msg = '站住，别跑';
const fn = () => {
  console.log('hahhhahah')
}

const html = `<h2>今天心情不好～</h2>`;
</script>

