<!--
 * @Author: chengxy666 425247833@qq.com
 * @Date: 2023-06-04 14:29:57
 * @LastEditors: chengxy666 425247833@qq.com
 * @LastEditTime: 2023-06-05 12:44:01
 * @FilePath: /vue-course/03_vue/07_form/src/components/StudentList.vue
-->

<script setup>

import StudentItem from './StudentItem.vue';

// let props = defineProps(['students', 'fn']);
// let emits = defineEmits(['delStu']);

// // 定义一个删除学生的方法
// const delStuHandler = (index) => {
//   if (confirm('该操作不可恢复，请确认')) {
//     emits('delStu', index);
//   }
// }

</script>

<template>
  <table>
    <caption>学生列表</caption>
    <thead>
      <tr>
        <th>学号</th>
        <th>姓名</th>
        <th>年龄</th>
        <th>性别</th>
        <th>住址</th>
        <th>操作</th>
      </tr>
    </thead>
    <!-- <StudentItem :students="props.students" @del-stu="emits('delStu', $event)" /> -->
    <StudentItem :students="$attrs.students" @del-stu="$attrs.onDelStu" />
  </table>
</template>

<style scoped>
table {
  width: 80%;
  border-collapse: collapse;
  text-align: center;
}

caption {
  font-size: 30px;
  font-weight: bold;
}

th {
  border: 1px solid;
  font-size: 24px;
}
</style>