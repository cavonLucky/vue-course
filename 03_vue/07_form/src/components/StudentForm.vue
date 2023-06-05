<!--
 * @Author: chengxy666 425247833@qq.com
 * @Date: 2023-06-04 16:25:53
 * @LastEditors: chengxy666 425247833@qq.com
 * @LastEditTime: 2023-06-05 16:02:39
 * @FilePath: /vue-course/03_vue/07_form/src/components/StudentForm.vue
-->

<script setup>
// const props = defineProps(['newStu']);
// console.log(props);

import { ref, inject } from 'vue';

// 必须得有一个依赖关系，比如 父子、后代、子孙，因为StudentForm组件和StudentList组件没什么关系，显然获取的msg为undefined
// const mag = inject('mag');
// console.log('form组件', mag); // undefined

const emits = defineEmits(['addStudent']);
const { addStu } = inject('student');

const newStu = ref({
  name: '',
  age: 1,
  gender: '男',
  address: ''
});

const submitHandler = () => {
  // console.log(newStu.value);
  // 调用方法，将newStu添加到数据中
  // emits('addStudent', Object.assign({}, newStu.value));
  // emits('addStudent', { ...newStu.value });
  addStu({ ...newStu.value });

  newStu.value.name = '';
  newStu.value.age = 1;
  newStu.value.gender = '男';
  newStu.value.address = '';
}


</script>

<template>
  <form action="" method="get" @submit.prevent="submitHandler">
    <div>
      姓名：<input type="text" name="" v-model="newStu.name">
    </div>

    <div>
      年龄：<input type="number" name="" min="1" v-model="newStu.age">
    </div>

    <div>
      性别：
      <input type="radio" name="gender" value="男" v-model="newStu.gender">男
      <input type="radio" name="gender" value="女" v-model="newStu.gender">女
    </div>

    <div>
      住址：<input type="text" name="" v-model="newStu.address">
    </div>

    <div>
      <button>添加</button>
    </div>
  </form>
</template>