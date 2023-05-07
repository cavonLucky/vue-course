<!--
 * @Author: cavonLucky 425247833@qq.com
 * @Date: 2023-05-07 16:44:47
 * @LastEditors: cavonLucky 425247833@qq.com
 * @LastEditTime: 2023-05-07 18:47:27
 * @FilePath: /vue-course/03_vue/03_vue的基础/src/App.vue
-->
<script>
import MyButton from './components/MyButton.vue';
import { shallowReactive } from 'vue';
export default {
  data() {
    // data返回的对象最终会被Vue所代理
    // this.$data.xxx = "Xxx"; // 动态添加响应式数据（不建议这么做）
    return {
      msg: '在vue的世界里挖呀挖呀挖',
      // vue 在构建响应式对象时，会同时将对象中的属性也做成响应式属性
      stu: {
        name: '孙悟空',
        age: 18,
        gender: '男',
        // 深层响应式对象
        friend: {
          name: '猪八戒'
        }
      },
      // 建议将那些暂时没有使用到的属性，也添加到data返回的对象中，值也可以设置为null
      hello: null
    }

    // 有些情况下，可以通过 shallowReactive() 来创建一个浅层的响应式对象
    // return shallowReactive({
    //   msg: '好想吃油焖大虾啊～',
    //   stu: {
    //     name: '孙悟空',
    //     age: 18,
    //     gender: '男',
    //     friend: {
    //       name: '猪八戒'
    //     }
    //   }
    // });
  },
  components: {
    MyButton
  }
}
</script>

<template>
  <div>
    <h1>{{ msg }}</h1>
    <hr>
    <h2>
      姓名：{{ stu.name }} &nbsp;&nbsp;&nbsp;
      年龄：{{ stu.age }} &nbsp;&nbsp;&nbsp;
      性别：{{ stu.gender }} &nbsp;&nbsp;&nbsp;
      朋友：{{ stu.friend.name }}</h2>
    <hr>
    <h3>{{ hello }}</h3>
    <hr>
    <MyButton />
    <MyButton />
    <MyButton />
    <MyButton />
    <MyButton />
  </div>
</template>
