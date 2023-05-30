<!--
 * @Author: chengxy666 425247833@qq.com
 * @Date: 2023-05-30 11:44:24
 * @LastEditors: chengxy666 425247833@qq.com
 * @LastEditTime: 2023-05-30 14:03:48
 * @FilePath: /vue-course/03_vue/05_练习/src/components/Photo.vue
-->

<script setup>

import { computed } from 'vue';

const props = defineProps(['src', 'alt', 'rate']);
// const { item } = defineProps(['item']);

/**
 * 第一名：254 45 70
 * 第二名：245 102 1
 * 第三名：247 169 1
 */
// const color = 'rgb(254, 45, 70)';
const color = computed(() => {
  // 编写判断颜色的代码
  if (props.rate === 1) {
    return 'rgb(254, 45, 70)';
  } else if (props.rate === 2) {
    return 'rgb(245, 102, 1)';
  } else {
    return 'rgb(247, 169, 1)';
  }
});

</script>

<template>
  <div class="photo">
    <img :src="props.src" :alt="props.alt">
    <span class="ranking-one">{{ props.rate }}</span>
  </div>
  <!-- <div class="photo">
    <img :src="item.img" :alt="item.name">
    <span class="ranking-one">{{ item.rate }}</span>
  </div> -->
</template>

<style scoped>
.photo {
  width: 150px;
  background: #fff;
  border-radius: 16px;
  overflow: hidden;
  position: relative;
  top: 0;
  left: 0;
}

.photo img {
  width: 100%;
  vertical-align: top;
}

.photo span {
  position: absolute;
  left: 0;
  top: 0;
  width: 50px;
  height: 50px;
  background-color: v-bind(color);
  border-bottom-right-radius: 16px;
  font-size: 38px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* .photo .ranking-one {
  background-color: #e46f2c;
} */
</style>