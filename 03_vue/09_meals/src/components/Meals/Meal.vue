<!--
 * @Author: chengxy666 425247833@qq.com
 * @Date: 2023-06-06 20:32:56
 * @LastEditors: chengxy666 425247833@qq.com
 * @LastEditTime: 2023-06-06 21:13:11
 * @FilePath: /vue-course/03_vue/09_meals/src/components/Meals/Meal.vue
-->

<script setup>

const props = defineProps(['meal']);
const { meal } = props;
console.log(meal);

</script>

<template>
  <div class="meal">
    <div class="img">
      <img :src="meal.img" :alt="meal.title">
    </div>
    <div class="info">
      <div class="desc">
        <h2>{{ meal.title }}</h2>
        <p>{{ meal.desc }}</p>
      </div>


      <!-- {{ meal.price }} -->
    </div>
  </div>
</template>

<style scoped>
.meal {
  height: 280rem;
  border-bottom: 1px #e6e6e6 solid;
  display: flex;
  align-items: center;
  padding: 0 20rem;
}

.img {
  width: 200rem;
}

.info {
  width: 450rem;
  margin-left: 20rem;
}

.info h2 {
  color: #000;
  font-size: 30rem;
  font-weight: bold;
}

.info p {
  color: #ada9a7;

}

.desc {}
</style>