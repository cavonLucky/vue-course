<!--
 * @Author: chengxy666 425247833@qq.com
 * @Date: 2023-07-03 12:05:18
 * @LastEditors: chengxy666 425247833@qq.com
 * @LastEditTime: 2023-07-03 13:43:46
 * @FilePath: /vue-course/03_vue/09_meals/src/components/UI/Mask.vue
 * @Description: 遮罩层-显示已添加的商品
-->

<script setup>
const props = defineProps(["isShow"]);
const emits = defineEmits(["hide"]);
</script>

<template>
  <div class="mask" v-show="props.isShow" @click.self="$emit('hide')">
    <slot></slot>
  </div>
</template>

<style scoped>
.mask {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: 999;
}
</style>
