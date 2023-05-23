
<template>
  <header>
    <!-- ref 对象在模板中可以自动解包（要求ref必须时顶层对象） -->
    <h1>{{ msg }}</h1>
    <h1>{{ newMsg }}</h1>
    <!-- <button @click="msg = '哈哈哈'">点我一下</button> -->
    <button @click="changeMsgHandler">点我一下</button>

    <h2>{{ obj.name }}</h2>
    <!-- name不是顶层响应式对象，所以不能自动解包 -->
    <h2>{{ obj2.name.value }}</h2>
    <h2>{{ name }}</h2>

    <hr>

    <h2>{{ obj.age + 1 }}</h2>
    <h2>{{ obj2.age + 1 }}</h2>
    <h2>{{age + 1 }}</h2>
  </header>
</template>

<script setup>
import { ref, computed } from "vue";

const msg = ref('Hello Vue');

// {value: obj} --> obj.vlaue.name
const obj = ref({
  name: '啊啊啊',
  age: 17
})

const obj2 = {
  name: ref('嘿嘿嘿'), // obj2.name.value {value: '嘿嘿嘿'}
  age: ref(22) // obj2.age.value {value: 22}
}

const { name, age } = obj2;

const changeMsgHandler = () => {
  // 修改ref对象时，必须通过value
  msg.value = '哈哈哈哈'
  name.value = '你看我变不变'
}

// computed 用来生成计算属性
const newMsg = computed(() => {
  return msg.value + ' - 你好'
})
</script>

