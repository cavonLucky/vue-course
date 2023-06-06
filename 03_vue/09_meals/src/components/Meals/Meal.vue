<!--
 * @Author: chengxy666 425247833@qq.com
 * @Date: 2023-06-06 20:32:56
 * @LastEditors: chengxy666 425247833@qq.com
 * @LastEditTime: 2023-06-06 20:41:46
 * @FilePath: /vue-course/03_vue/09_meals/src/components/Meals/Meal.vue
-->

<script setup>

const props = defineProps(['meal']);
const { meal } = props;
console.log(props);

</script>

<template>
  <div>
    {{ meal.img }}
    {{ meal.title }}
    {{ meal.desc }}
    {{ meal.price }}
  </div>
</template>