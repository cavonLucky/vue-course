<!--
 * @Author: chengxy666 425247833@qq.com
 * @Date: 2023-06-06 20:32:56
 * @LastEditors: chengxy666 425247833@qq.com
 * @LastEditTime: 2023-06-09 20:12:27
 * @FilePath: /vue-course/03_vue/09_meals/src/components/Meals/Meal.vue
-->

<script setup>

import Counter from '../UI/Counter.vue';

const props = defineProps(['meal']);

</script>

<template>
  <div class="meal">
    <div class="img">
      <img :src="props.meal.img" :alt="props.meal.title">
    </div>
    <div class="info">
      <div class="desc">
        <h2>{{ props.meal.title }}</h2>
        <p>{{ props.meal.desc }}</p>
      </div>

      <div class="price-btn">
        <span class="price">{{ props.meal.price }}</span>
        <Counter :meal="props.meal" />
      </div>
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

.price-btn {
  margin-top: 40rem;
  display: flex;
  justify-content: space-between;
}

.price {
  font-size: 30rem;
  font-weight: bold;
}

.price::before {
  content: '¥';
}
</style>