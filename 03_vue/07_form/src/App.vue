<!--
 * @Author: chengxy666 425247833@qq.com
 * @Date: 2023-06-04 13:56:09
 * @LastEditors: chengxy666 425247833@qq.com
 * @LastEditTime: 2023-06-04 16:18:14
 * @FilePath: /vue-course/03_vue/07_form/src/App.vue
-->
<script setup>

import StudentList from './components/StudentList.vue';
import { ref } from 'vue';

// 发送请求来向服务器加载数据
const STU_ARR = ref([
  { id: 1, name: '孙悟空', age: 18, gender: '男', address: '花果山' },
  { id: 2, name: '猪八戒', age: 28, gender: '男', address: '高老庄' },
  { id: 3, name: '沙和尚', age: 38, gender: '男', address: '流沙河' },
  { id: 4, name: '唐僧', age: 48, gender: '男', address: '女儿国' }
]);

// 添加一个删除学生的方法
const delStudentByIndex = (index) => {
  STU_ARR.value.splice(index, 1);
  console.log('删除学生', index);
}

</script>

<template>
  <div>
    <!-- <StudentList :students="STU_ARR" :fn="delStudentByIndex" /> -->

    <!-- 可以将组件中的方法以自定义事件的形式发送给其他的组件 -->
    <StudentList :students="STU_ARR" @del-stu="delStudentByIndex" />
  </div>
</template>

<style scoped></style>
