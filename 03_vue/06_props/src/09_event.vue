<!--
 * @Author: chengxy666 425247833@qq.com
 * @Date: 2023-06-03 11:50:43
 * @LastEditors: chengxy666 425247833@qq.com
 * @LastEditTime: 2023-06-03 13:04:55
 * @FilePath: /vue-course/03_vue/06_props/src/09_event.vue
-->

<script setup>
// function clickHandler(text, event) {
//   event.stopPropagation();
//   alert(text);
// }

function clickHandler(text) {
  alert(text);
}

/**
 * 事件修饰符：
 *    .stop       停止事件的传播？似乎stop只能停止冒泡
 *    .capture    在捕获阶段触发事件
 *    .prevent    取消默认行为
 *    .self       只有事件由自身出发时才会有效
 *    .once       绑定一个一次性的事件
 *    .passive    主要用于提升滚动事件的性能
 */

</script>

<template>
  <div>
    <h1>哈哈哈</h1>
    <!-- <div class="box1" @click="clickHandler('box1', $event)">
      <div class="box2" @click="clickHandler('box2', $event)">
        <div class="box3" @click="clickHandler('box3', $event)"></div>
      </div>
    </div> -->
    <!-- <div class="box1" @click="clickHandler('box1')">
      <div class="box2" @click.stop="clickHandler('box2')">
        <div class="box3" @click.stop="clickHandler('box3')"></div>
      </div>
    </div> -->
    <!-- <div class="box1" @click.capture="clickHandler('box1')">
      <div class="box2" @click="clickHandler('box2')">
        <div class="box3" @click.stop="clickHandler('box3')"></div>
      </div>
    </div> -->
    <div class="box1" @click.self="clickHandler('box1')">
      <div class="box2" @click.once="clickHandler('box2')">
        <div class="box3" @click="clickHandler('box3')"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.box1 {
  width: 300px;
  height: 300px;
  background-color: aquamarine;
}

.box2 {
  width: 200px;
  height: 200px;
  background-color: yellow;
}

.box3 {
  width: 100px;
  height: 100px;
  background-color: green;
}
</style>