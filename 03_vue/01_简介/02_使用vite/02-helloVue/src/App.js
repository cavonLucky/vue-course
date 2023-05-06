/*
 * @Author: cavonLucky 425247833@qq.com
 * @Date: 2023-05-06 14:02:02
 * @LastEditors: cavonLucky 425247833@qq.com
 * @LastEditTime: 2023-05-06 17:21:03
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
    MyButton
    // "my-button": MyButton // 如果小写命名最好加引号
  },

  /**
   * template 是用字符串的形式在编写模板
   * 1. 这些字符串会在项目中运行时，在浏览器中被便衣为js的函数
   * 2. 在字符串中编写代码，体验很差
   *
   * 为了解决这个问题，Vue为我们提供了一种单文件组件（SFC）
   *  - 单文件组件的格式vue（vs code需要安装插件 Vue Language Features (Volar)）
   *  - vue 文件用来编写单文件组件，vue 文件本身并不能被浏览器所识别，所以它必须要被构建工具打包后，才可使用
   *  - 同时vue文件在打包时，构建工具会直接将template转换为函数，无需在浏览器中去编译，这样一来性能也会有所提升
   */
  template: `
    <h1>{{ message }}</h1>
    <MyButton></MyButton>
  `,
}