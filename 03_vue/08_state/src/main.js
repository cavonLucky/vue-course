/*
 * @Author: chengxy666 425247833@qq.com
 * @Date: 2023-06-05 16:25:03
 * @LastEditors: chengxy666 425247833@qq.com
 * @LastEditTime: 2023-06-05 18:38:20
 * @FilePath: /vue-course/03_vue/08_state/src/main.js
 */
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

/*

  使用pinia的步骤
    1. 安装pinia
    2. 在main.js 中引入createPinia()
    3. 通过createPinia() 创建pinia实例
    4. 将pinia配置为vue插件

*/

const pinia = createPinia();
const app = createApp(App);

// 将pinia设置为vue插件
app.use(pinia);
app.mount('#app');
