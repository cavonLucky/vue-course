<!--
 * @Author: chengxy666 425247833@qq.com
 * @Date: 2023-05-31 12:20:46
 * @LastEditors: chengxy666 425247833@qq.com
 * @LastEditTime: 2023-05-31 13:21:22
 * @FilePath: /vue-course/03_vue/06_props/src/05_v-for.vue
-->

<script setup>
import { ref } from 'vue';

const arr = ref(['孙悟空', '猪八戒', '沙和尚', '唐僧']);
const arr2 = ref([
  { id: 1, name: '孙悟空', age: 18 },
  { id: 2, name: '猪八戒', age: 28 },
  { id: 3, name: '沙和尚', age: 38 }
]);

</script>

<template>
  <button @click="arr.push('白骨精')">点我一下</button>
  <!-- <button @click="arr2.push({ id: 4, name: '唐僧', age: 22 })">点我一下2</button> -->
  <button @click="arr2.unshift({ id: 4, name: '唐僧', age: 22 })">点我一下2</button>
  <ul>
    <li v-for="name of arr">{{ name }}</li>
  </ul>

  <ul>
    <li v-for="(name, index) in arr">{{ index }} - {{ name }}</li>
  </ul>

  <div v-for="obj in arr2">{{ obj.name }} -- {{ obj.age }}</div>

  <hr>

  <!-- <template v-for="obj in arr2">{{ obj.name }} -- {{ obj.age }}</template> -->
  <!-- <hr> -->

  <!-- <template v-for="{ id, age, name } in arr2">{{ name }} -- {{ age }}</template> -->

  <!--
    我们在使用v-for遍历时，用的结构和新的结构是按照顺序进行对比的

    旧的结构：
    <div>孙悟空</div>
    <div>猪八戒</div>
    <div>沙和尚</div>

    新的结构(push)：
    <div>孙悟空</div>
    <div>猪八戒</div>
    <div>沙和尚</div>
    <div>唐僧</div>

    旧：
    <div>孙悟空</div>
    <div>猪八戒</div>
    <div>沙和尚</div>

    新（unshift）：
    <div>唐僧</div>
    <div>孙悟空</div>
    <div>猪八戒</div>
    <div>沙和尚</div>

    在使用v-for时，可以为元素指定一个唯一的key，有了key以后，元素在比较时就会按照相同的key去比较，而不是顺序(注意不要用index，一般用id)

    旧：
    <div>孙悟空</div>
    <div>猪八戒</div>
    <div>沙和尚</div>

    新（unshift）：
    <div key="4">唐僧</div>
    <div key="1">孙悟空</div>
    <div key="2">猪八戒</div>
    <div key="3">沙和尚</div>

   -->
  <!-- <div v-for="{ id, age, name } in arr2">{{ name }} -- {{ age }}</div> -->
  <!-- <ul>
    <li v-for="{ id, age, name } in arr2">
      {{ name }} -- {{ age }}
      <input type="text" name="" id="">
    </li>
  </ul> -->
  <ul>
    <!-- <li v-for="({ id, age, name }, index) in arr2" :key="index">
      {{ name }} -- {{ age }}
      <input type="text" name="" id="">
    </li> -->
    <li v-for="{ id, age, name } in arr2" :key="id">
      {{ name }} -- {{ age }}
      <input type="text" name="" id="">
    </li>
  </ul>
</template>