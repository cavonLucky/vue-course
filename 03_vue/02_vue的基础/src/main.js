/*
 * @Author: cavonLucky 425247833@qq.com
 * @Date: 2023-05-06 20:02:17
 * @LastEditors: cavonLucky 425247833@qq.com
 * @LastEditTime: 2023-05-07 16:11:41
 * @FilePath: /vue-course/03_vue/02_vue的基础/src/main.js
 */

import { createApp } from 'vue';
import App from './App.vue';

/**
 * App.vue 是根组件
 *  - createApp(App) 将根组件关联到应用上
 *    - 会返回一个应用的实例
 *  - app.mount("#app")将应用挂载到页面中
 *    - 会返回一个根组件的实例，组件的实例通常可以命名为vm
 *    - 组件实例是一个 Proxy对象（代理对象）
 */

// createApp(App).mount('#app');

const app = createApp(App);
console.log(app);

const vm = app.mount('#app');
console.log(vm);

// 将 vm 设置为全局变量
window.vm = vm;
window.app = app;
