### Vue
  - vue 是一个前端的框架，主要负责帮助我们构建用户的界面
  - MVVM：Model-View-ViewModel
  - vue 负责vm的工作（视图模型），通过vue可以将视图和模型相关联
    - 当模型发生变化时，视图会自动更新
    - 也可以通过视图去操作模型
  - vue 思想：
    - 组件化开发
    - 声明式开发

### HelloWorld
  1. 直接在网页中使用（像jQuery一样）
      - `<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>`

  2. 使用 vite
      - `yarn add vite -D`

  3. 代码
      ```js
      // 组件就是一个普通js对象
      const App = {};

      // 创建应用
      const app = Vue.createApp(App);

      // 挂载到页面
      app.mount('#app');
      ```
  4. 自动创建项目
      - `npm init vue@latest`
      - `yarn create vue`

### 网页的渲染
  - 浏览器在渲染网页时，做了哪些事：
    1. 加载页面的html和css（源码）
    2. html转换为DOM，css转换为CSSOM
    3. 使用DOM和CSSOM构建成一棵渲染树
    4. 对渲染树进行reflow（回流、重排）（计算元素的位置）
    5. 对网页进行绘制repaint（重绘）
  - 渲染树（Render Tree）
    1. 从根元素来检查哪些元素可见，以及他们的样式
    2. 忽略那些不可见的元素（display:none）
  - 重排、回流
    - 计算渲染树中元素的大小和位置
  - 重绘
    - 绘制页面