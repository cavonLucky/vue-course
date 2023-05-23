import { createApp } from 'vue'
import App from './App.vue'

// createApp(App).mount('#app')

const app = createApp(App);
console.log(app);

// 设置之前想一下需不需要这个全局变量...
// app.config.globalProperties.hello = '你好，我是全局的属性';
// app.config.globalProperties.alert = alert;
// app.config.globalProperties.alert = alert.bind(this);

const vm = app.mount('#app');
console.log(vm);

window.vm = vm;
window.app = app;

