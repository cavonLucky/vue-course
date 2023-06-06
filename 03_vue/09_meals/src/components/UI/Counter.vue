<!--
 * @Author: chengxy666 425247833@qq.com
 * @Date: 2023-06-06 21:46:54
 * @LastEditors: chengxy666 425247833@qq.com
 * @LastEditTime: 2023-06-06 22:08:40
 * @FilePath: /vue-course/03_vue/09_meals/src/components/UI/Counter.vue
 * @Description: 控制商品的数量组件
-->

<script setup>
import { ref } from 'vue';
const count = ref(0);
</script>

<template>
  <div class="counter">
    <template v-if="count > 0">
      <button class="sub" @click="count--"><i class="ri-subtract-line"></i></button>
      <span class="count">{{ count }}</span>
    </template>
    <button class="add" @click="count++"><i class="ri-add-line"></i></button>
  </div>
</template>

<style scoped>
.counter {
  display: flex;
  align-items: center;
}

.sub,
.add {
  width: 34rem;
  height: 34rem;
  background-color: #efbe41;
  border: none;
  border-radius: 50%;
  text-align: center;
  font-size: 34rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.sub {
  background-color: #fff;
  border: 1px solid rgb(0, 0, 0);
}

.count {
  font-size: 30rem;
  margin: 0 20rem;

}
</style>