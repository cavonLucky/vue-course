<!--
 * @Author: chengxy666 425247833@qq.com
 * @Date: 2023-06-02 17:20:41
 * @LastEditors: chengxy666 425247833@qq.com
 * @LastEditTime: 2023-06-03 11:44:07
 * @FilePath: /vue-course/03_vue/06_props/src/08_event.vue
-->

<script setup>
import { ref } from 'vue';

const count = ref(0);

// function clickHandler(...args) {
//   // alert('函数执行了');
//   console.log(args);
// }

function clickHandler(event) {
  /**
   * 方法事件处理器的回调函数，vue会将事件对象作为参数传递
   * 这个事件对象就是DOM中原生的事件对象，它里边包含了事件触发时的相关信息
   * 通过该对象，可以获取：触发事件的对象、触发事件时一些情况……
   * 同时通过该对象，也可以对事件进行一些配置：取消事件的传播、取消事件的默认行为
   */
  console.log(event);
}

function clickHandler2(...args) {
  /**
   * 内联事件处理器，回调函数由我们自己调用，参数也是我们自己传递的
   *
   * 在内联事件处理器中，可以使用$event来访问事件对象
   */
  console.log(args);
}

// function boxHandler(event, text) {
//   // 可以通过事件对象来取消事件的传播
//   event.stopPropagation();
//   alert(text);
// }

function boxHandler2(text) {
  // 可以通过事件对象来取消事件的传播
  // 此处可以使用是因为为了兼容IE, 将event挂载到window，不建议使用
  // event.stopPropagation();
  alert(text);
}


</script>

<template>
  <div>
    <h1>{{ count }}</h1>
    <!--

      为元素绑定事件：
        1. 绑定事件使用 v-on 指令
            v-on: 事件名
            @事件名
        2. 绑定事件的两种方式
            a. 内联事件处理器（自己调用函数）
              - 事件触发时，直接执行js语句
            b. 方法事件处理器（vue帮我们调用函数）
              - 事件触发时，vue会对事件的函数进行调用

            vue如何区分内联和方法两种处理器：
              检查事件的值是否是合法的 js标识符（变量名） 或属性访问路径，
              如果是，则表示它是方法事件处理器
              否则，表示它是内联事件处理器

            例如：
              foo（方法）
              foo.bar（方法）

              foo++（内联）
              foo()（内联）
     -->
    <!-- <button v-on:click="count++">点我一下</button> -->
    <button @click="count++">点我一下</button>
    <hr>
    <!-- clickHandler 类似 btn01.onclick = fn -->
    <!-- 方法事件处理器 -->
    <button @click="clickHandler">点我一下 -- 方法事件处理器</button>
    <hr>
    <!-- 内联事件处理器 -->
    <!-- <button @click="clickHandler()">也点我一下 -- 内联事件处理器</button> -->
    <!-- <button @click="clickHandler2()">也点我一下 -- 内联事件处理器</button> -->
    <!-- <button @click="clickHandler2(1, 3, 'hello')">也点我一下 -- 内联事件处理器</button> -->
    <button @click="clickHandler2(1, 3, 'hello', $event)">也点我一下 -- 内联事件处理器</button>
    <hr>
    <!-- <div class="box1" @click="boxHandler($event, 'box1')">box1
      <div class="box2" @click="boxHandler($event, 'box2')">box2
        <div class="box3" @click="boxHandler($event, 'box3')">box3</div>
      </div>
    </div> -->

    <!-- @click.stop修饰符是vue自带的阻止冒泡事件 -->
    <div class="box1" @click="boxHandler2('box1')">box1
      <div class="box2" @click.stop="boxHandler2('box2')">box2
        <div class="box3" @click.stop="boxHandler2('box3')">box3</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.box1 {
  width: 200px;
  height: 200px;
  background-color: aquamarine;
}

.box2 {
  width: 100px;
  height: 100px;
  background-color: orange;
}

.box3 {
  width: 50px;
  height: 50px;
  background-color: tomato;
}
</style>