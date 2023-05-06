/*
 * @Author: cavonLucky 425247833@qq.com
 * @Date: 2023-05-06 12:58:45
 * @LastEditors: cavonLucky 425247833@qq.com
 * @LastEditTime: 2023-05-06 16:11:16
 * @FilePath: /vue-course/03_vue/01_简介/02_使用vite/02-helloVue/src/index.js
 */
import { createApp } from 'vue/dist/vue.esm-bundler.js';
import App from './App';

// 创建应用并挂载
// createApp(App).mount('#root');

// mount() 的返回值是根组件App的实例
const vm = createApp(App).mount('#root');