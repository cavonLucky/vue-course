<!--
 * @Author: chengxy666 425247833@qq.com
 * @Date: 2023-06-02 16:04:22
 * @LastEditors: chengxy666 425247833@qq.com
 * @LastEditTime: 2023-06-02 17:16:26
 * @FilePath: /vue-course/03_vue/06_props/src/components/SlotDemo.vue
-->

<script setup>
  const stu = {
    name: '猪八戒',
    age: 28,
    gender: '男'
  };

  const gender = '男';
  const age = 18;
  const stuName = '孙悟空';
</script>

<template>
  <div>
    SlotDemo组件
    <!-- 可以在slot中指定一个默认内容，默认会在组件中没有内容时显示 -->
    <!-- <h1>
      <slot>插槽的默认内容</slot>
    </h1> -->
    <h1>
      <slot name="s1"></slot>
    </h1>
    <h2>
      <slot name="s2" :gender="gender" :age="age" :stuName="stuName"></slot>
      <slot name="s3" :stu="stu"></slot>
    </h2>
    <!-- 不指定name属性的插槽是默认插槽（default） -->
    <!-- <h3><slot></slot></h3> -->
  </div>
</template>