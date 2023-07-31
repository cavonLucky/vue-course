<!--
 * @Author: chengxy666 425247833@qq.com
 * @Date: 2023-07-03 12:05:18
 * @LastEditors: chengxy666 425247833@qq.com
 * @LastEditTime: 2023-07-31 12:37:48
 * @FilePath: /vue-course/03_vue/09_meals/src/components/UI/Mask.vue
 * @Description: 遮罩层-显示已添加的商品
-->

<script setup>
const props = defineProps(["isShow"]);
const emits = defineEmits(["hide"]);
</script>

<template>
  <!-- Teleport 可以将组件渲染到网页的指定位置 -->
  <!-- <Teleport to="#hello"> -->
  <Teleport to="body">
    <div class="mask" v-show="props.isShow" @click.self="$emit('hide')" :="$attrs">
      <slot></slot>
    </div>
  </Teleport>
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
