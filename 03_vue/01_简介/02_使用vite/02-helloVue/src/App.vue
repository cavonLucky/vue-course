<!--
 * @Author: cavonLucky 425247833@qq.com
 * @Date: 2023-05-06 16:30:26
 * @LastEditors: cavonLucky 425247833@qq.com
 * @LastEditTime: 2023-05-06 17:31:09
 * @FilePath: /vue-course/03_vue/01_简介/02_使用vite/02-helloVue/src/App.vue
-->
<template>
  <div>
    <h1>{{ msg }}</h1>
    <MyButton></MyButton>
  </div>
</template>

<script>
import MyButton from './components/MyButton.vue';
// 编写组简单代码
export default {
  data() {
    return {
      msg: "哈哈哈哈"
    }
  },
  components: {
    MyButton
  }
}
</script>
