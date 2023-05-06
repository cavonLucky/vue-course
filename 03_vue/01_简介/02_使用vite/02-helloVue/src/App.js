/*
 * @Author: cavonLucky 425247833@qq.com
 * @Date: 2023-05-06 14:02:02
 * @LastEditors: cavonLucky 425247833@qq.com
 * @LastEditTime: 2023-05-06 16:10:53
 * @FilePath: /vue-course/03_vue/01_简介/02_使用vite/02-helloVue/src/App.js
 */

// 1. 引入子组件
import MyButton from "./components/MyButton";



// 创建根组件
export default {

  data() {
    return {
      message: "在vue的花园里面挖呀挖呀挖"
    }
  },

  // 在组件中注册子组件
  components: {
    // MB: MyButton
    // MyButton: MyButton
    // MyButton
    "my-button": MyButton // 如果小写命名最好加引号
  },

  // template: `
  //   <h1>{{ message }}</h1>
  //   <MyButton></MyButton>
  //   <MyButton></MyButton>
  //   <MyButton></MyButton>
  //   <MyButton></MyButton>
  //   <MyButton></MyButton>
  // `,
}