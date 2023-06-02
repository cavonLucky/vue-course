<!--
 * @Author: chengxy666 425247833@qq.com
 * @Date: 2023-06-02 15:58:51
 * @LastEditors: chengxy666 425247833@qq.com
 * @LastEditTime: 2023-06-02 17:18:44
 * @FilePath: /vue-course/03_vue/06_props/src/07_slot.vue
-->

<script setup>
import SlotDemo from './components/SlotDemo.vue';
import A from './components/A.vue';

const name = '猪八戒';

</script>

<template>
  <div>
    <h1>App组件</h1>
    <!-- <SlotDemo>App传递的内容</SlotDemo> -->
    <!-- 直接写在组件中内容是默认插槽的内容，只会出现在默认插槽中（没有name属性的插槽） -->
    <SlotDemo>
      <!-- 哈哈哈 -->
      <template #s1>s1插槽</template>
      <!-- <template #s2>s2插槽</template> -->
      <!-- <template #default>哈哈哈</template> -->
      哈哈哈
      <!-- <A :name="'孙悟空'" /> -->
      <!-- <template v-slot:s2="slotProps">
        {{ slotProps }}
        <A :name="slotProps.stuName" />
      </template> -->

      <template v-slot:s2="{stuName, age, gender}">
        <A :name="stuName" :age="age" :gender="gender" />
      </template>
    </SlotDemo>
  </div>
</template>