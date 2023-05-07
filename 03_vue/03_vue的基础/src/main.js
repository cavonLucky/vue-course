/*
 * @Author: cavonLucky 425247833@qq.com
 * @Date: 2023-05-07 16:44:47
 * @LastEditors: cavonLucky 425247833@qq.com
 * @LastEditTime: 2023-05-07 16:55:16
 * @FilePath: /vue-course/03_vue/03_vue的基础/src/main.js
 */

import { createApp } from 'vue'
import App from './App.vue'

// createApp(App).mount('#app');
const app = createApp(App);
console.log(app);

const vm = app.mount('#app');
console.log(vm);

window.vm = vm;
window.app = app
