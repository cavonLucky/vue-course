<!--
 * @Author: cavonLucky 425247833@qq.com
 * @Date: 2023-05-06 17:25:32
 * @LastEditors: cavonLucky 425247833@qq.com
 * @LastEditTime: 2023-05-06 17:27:00
 * @FilePath: /vue-course/03_vue/01_简介/02_使用vite/02-helloVue/src/components/MyButton.vue
-->
<template>
  <button @click="count++">点我一下{{ count }}</button>
</template>

<script>
  export default {
    data() {
      return {
        count: 0
      }
    }
  }
</script>