<!--
 * @Author: chengxy666 425247833@qq.com
 * @Date: 2023-06-04 14:29:57
 * @LastEditors: chengxy666 425247833@qq.com
 * @LastEditTime: 2023-06-04 16:23:28
 * @FilePath: /vue-course/03_vue/07_form/src/components/StudentList.vue
-->

<script setup>

/*
  通过defineProps定义的属性在attrs中就不存在了
  使用自定义属性时，最好通过defineProps来声明一下
*/
let props = defineProps(['students', 'fn']);
let emits = defineEmits(['delStu']);

// // 定义一个删除学生的方法
// const delStuHandler = (index) => {
//   if (confirm('该操作不可恢复，请确认')) {
//     // 删除当前学生
//     props.students.splice(index, 1); // props.students 是app组件（父组件）传过来的，不建议这样使用
//   }
// }

const delStuHandler = (index) => {
  if (confirm('该操作不可恢复，请确认')) {
    // 自己的数据自己管，因此，可以在父组件定义一个函数来进行删除
    // props.fn(index);
    // props.fn(index);

    emits('delStu', index);
  }
}

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
    <tbody>
      <!-- 不推荐使用 -->
      <!-- {{ $attrs.students }} -->
      <!-- <tr v-for="stu in $attrs.students" :key="stu.id">
        <td>{{ stu.id }}</td>
        <td>{{ stu.name }}</td>
        <td>{{ stu.age }}</td>
        <td>{{ stu.gender }}</td>
        <td>{{ stu.address }}</td>
      </tr> -->

      <!-- 这样使用更规范 -->
      <!-- {{ props.students }} -->
      <tr v-for="(stu, index) in props.students" :key="stu.id">
        <td>{{ stu.id }}</td>
        <td>{{ stu.name }}</td>
        <td>{{ stu.age }}</td>
        <td>{{ stu.gender }}</td>
        <td>{{ stu.address }}</td>
        <!-- <td><a href="javascript:;" @click.prevent="delStuHandler(index)">删除</a></td> -->
        <!-- 在模板中可以通过 $emit() 来触发自定义事件 -->
        <!-- <td><a href="javascript:;" @click.prevent="$emit('delStu', index)">删除</a></td> -->

        <!-- <td><a href="javascript:;" @click.prevent="emits('delStu', index)">删除</a></td> -->
        <td><a href="javascript:;" @click.prevent="delStuHandler(index)">删除</a></td>
      </tr>
    </tbody>
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

th,
td {
  border: 1px solid;
  font-size: 24px;
}
</style>