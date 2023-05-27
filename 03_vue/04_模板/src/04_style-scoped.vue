<!--
 * @Author: chengxy666 425247833@qq.com
 * @Date: 2023-05-23 20:41:44
 * @LastEditors: chengxy666 425247833@qq.com
 * @LastEditTime: 2023-05-27 15:12:40
 * @FilePath: /vue-course/03_vue/04_模板/src/04_style-scoped.vue
-->

<script setup>
import MyBox from "./components/MyBox.vue";
</script>


<template>
  <div class="app">
    <h1>今天天气真不错！</h1>
    <div class="box1">App中的box1</div>
    <MyBox></MyBox>
  </div>
</template>


<!--
  可以直接通过style标签来编写样式
  如果直接通过style标签编写样式，此时编写的样式是全局样式
  会影响到所有的组件
 -->
<!-- <style>
h1 {
  background: violet;
}

.box1 {
  width: 200px;
  height: 200px;
  background: firebrick;
}
</style> -->

<!--
  可以为style标签添加一个scoped属性，这样样式将成为局部样式，只对当前组件生效
  如何实现的？
    - 当我们在组件中使用scoped样式时，vue会自动为组件中的所有元素生成一个随机的属性，
      形如：data-v-7a7a37b1 属性选择器
      h1 -> h1[data-v-7a7a37b1]
      .box1 -> .box1[data-v-7a7a37b1]

    - 主意：
      - 随机生成的属性，除了会添加到当前组件内的所有元素上，也会添加到当前组件引入到其他组件的根元素上，
        这样设计是为了，可以通过父组件来为子组件设置一些样式
          - 比如：引入的组件data-v-7a7a37b1只会添加到根元素上
          - 如果有多个根元素，data-v-7a7a37b1谁都不会添加
          - 如果子组件也设置了scoped并且改写了样式，那么根元素上有两个属性: 子组件本身的，父组件添加的 (data-v-f3c0e9ba data-v-7a7a37b1)
-->
<style scoped>
h1 {
  background: orange;
}

.box1 {
  width: 200px;
  height: 200px;
  background-color: #bfa;
}

/* 将组件中所有的 h2的字体颜色 设置为黄色
  .app h2 -> .app h2[data-v-7a7a37b1]
  .app :deep(h2) -> .app[data-v-7a7a37b1] h2

  .app h2[data-v-7a7a37b1] 没用 deep

  .app[data-v-7a7a37b1] h2 用了 deep

*/
/* .app h2 {
  color: yellow;
} */

.app :deep(h2) {
  color: yellow;
}

/* 全局选择器 */
:global(div) {
  border: 1px solid red;
}

</style>

<!-- <style>
  div {
    border: 1px solid red;
  }
</style> -->



