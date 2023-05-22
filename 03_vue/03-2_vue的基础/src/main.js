/*
 * @Author: chengxy666 425247833@qq.com
 * @Date: 2023-05-19 11:32:48
 * @LastEditors: chengxy666 425247833@qq.com
 * @LastEditTime: 2023-05-19 18:15:59
 * @FilePath: /vue-course/03_vue/04_vue的基础/src/main.js
 */

import { createApp } from 'vue'
import App from './App.vue'

// createApp(App).mount('#app')

const app = createApp(App);
console.log(app);

const vm = app.mount('#app');
console.log(vm);

window.vm = vm;
window.app = app;


