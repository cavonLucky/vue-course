<!--
 * @Author: chengxy666 425247833@qq.com
 * @Date: 2023-05-19 11:32:48
 * @LastEditors: chengxy666 425247833@qq.com
 * @LastEditTime: 2023-05-22 16:42:48
 * @FilePath: /vue-course/03_vue/04_vue的基础/src/App.vue
-->

<template>
  <div>
    <h2>{{ msg }}</h2>
    <h1>{{ stu.name }} -- {{ stu.age }} -- {{ stu.gender }}</h1>
    <!-- <h2>评语：{{ stu.age === 18 ? '你是一个成年人' : '你是一个未成年人' }}</h2> -->
    <h2>评语：{{ info }}</h2>
    <h2>methods: {{ getInfo() }}</h2>
    <button @click="uodateAge">减龄</button>
    <!-- <h3>{{ info }}</h3> -->
  </div>
</template>

<script>
export default {
  // data()用来指定实例对象中的响应式属性
  data() {
    return {
      stu: {
        name: 'ffffff',
        age: 11,
        gender: '男'
      },
      msg: '今天大风呼呼的吹～～'
    }
  },
  methods: {
    uodateAge() {
      if (this.stu.age === 18) {
        this.stu.age = 17;
      } else {
        this.stu.age = 18;
      }
    },
    // methods 中的方法每次组件重新渲染都会调用
    getInfo() {
      console.log('getInfo 调用');
      return this.stu.age >= 18 ? '你是一个成年人了' : '你不是一个成年人';
    }
  },
  /**
   * computed: 用来指定计算属性（有getter、setter 的属性）
   * {
        属性名: getter
   * }
   * 与data() 相比，computed 函数中可以写逻辑
   *
   * 举例：当在浏览器的控制台修改 vm.msg = 'hahhhha' 时，getInfo函数会被调用，而info函数不会
   * - 计算属性，只在其依赖的数据发生变化时才回重新执行
   * - 会对数据进行缓存
   */
  computed: {
    info() {
      // return '哈哈哈';
      console.log('info 调用');
      return this.stu.age >= 18 ? '嫩是一个成年人了' : '嫩不是一个成年人';
    }
  }
}
</script>