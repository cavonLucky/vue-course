<!--
 * @Author: chengxy666 425247833@qq.com
 * @Date: 2023-05-22 20:03:38
 * @LastEditors: chengxy666 425247833@qq.com
 * @LastEditTime: 2023-05-22 20:08:49
 * @FilePath: /vue-course/03_vue/04_vue的基础/src/App.vue
-->

<template>
  <div>
    <button @click="count++">点我一下</button>
    <h1>点击次数：{{ count }}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
    }
  }
}
</script>