<!--
 * @Author: chengxy666 425247833@qq.com
 * @Date: 2023-06-03 16:08:52
 * @LastEditors: chengxy666 425247833@qq.com
 * @LastEditTime: 2023-06-03 16:52:02
 * @FilePath: /vue-course/03_vue/06_props/src/components/C.vue
-->

<template>
  <!-- <h2>我是C组件</h2> -->
  <h2 class="box3" style="font-size: 60px;">我是组件C</h2>
  <h3>我也是组件C</h3>
  <!--
    在模板中，可以通过$attrs来访问透传过来的属性，可以手动指定透传过来的属性要添加到哪些元素
   -->
  {{ $attrs }}
  <h2 class="box3" :class="$attrs.class" style="font-size: 60px;">我是组件C</h2>
  <!-- <h3 :class="$attrs.class" :style="$attrs.style">我也是组件C</h3> -->
  <h3 :="$attrs">我也是组件C</h3>
</template>