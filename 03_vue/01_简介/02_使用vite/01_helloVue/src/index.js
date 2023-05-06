/*
 * @Author: cavonLucky 425247833@qq.com
 * @Date: 2023-05-06 12:16:28
 * @LastEditors: cavonLucky 425247833@qq.com
 * @LastEditTime: 2023-05-06 12:37:31
 * @FilePath: /vue-course/03_vue/01_简介/02_使用vite/01_helloVue/src/index.js
 */
// 引入vue, 这里引入的vue，默认不支持通过template属性来设置模板
import { createApp } from 'vue/dist/vue.esm-bundler.js';

// 创建一个根组件
const App = {
  data() {
    return {
      message: '种下vue的种子，开出浪漫的花'
    }
  },
  template: '<h1>在vue的世界里面挖呀挖呀挖～</h1>{{message}}'
};

// 创建应用挂载到页面中
createApp(App).mount('#app');