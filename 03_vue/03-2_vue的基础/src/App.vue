<!--
 * @Author: chengxy666 425247833@qq.com
 * @Date: 2023-05-19 11:32:48
 * @LastEditors: chengxy666 425247833@qq.com
 * @LastEditTime: 2023-05-22 20:03:38
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
    <hr>
    <!-- <h3>{{ info }}</h3> -->
    <!-- <h3>{{ lastName + firstName }}</h3> -->
    <h3>{{ name }}</h3>
    <hr>
    <h2>{{ arr[2] }} -- {{ arr[1] }} -- {{ arr[0] }}</h2>
  </div>
</template>

<script>
export default {
  // data()用来指定实例对象中的响应式属性
  data() {
    return {
      stu: {
        name: 'learn-vue',
        age: 11,
        gender: '男'
      },
      msg: '今天大风呼呼的吹～～',
      firstName: '嘿嘿嘿嘿哈',
      lastName: '学习学习学习',
      arr: ['猪八戒', '沙和尚', '孙悟空']
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
    // 在计算属性的getter中，尽量只做读取相关的逻辑，不要执行那些会产生(副)作用的代码
    info() {
      // return '哈哈哈';
      console.log('info 调用');
      return this.stu.age >= 18 ? '嫩是一个成年人了' : '嫩不是一个成年人';
    },
    // 计算属性的简写（只有getter时）
    // name() {
    //   return this.lastName + this.firstName;
    // }

    // 可以为计算属性设置setter，使得计算属性可写，但是不建议这么做
    name:{
      get() {
        return this.lastName + this.firstName;
      },
      // set 在计算属性被修改时调用
      set(value) {
        this.lastName = value[0];
        this.firstName = value.slice(1);
        console.log(value[0]);
        console.log(value.slice(1));
        console.log(value);
      }
    }
  }
}
</script>