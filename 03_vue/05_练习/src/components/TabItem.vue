<!--
 * @Author: chengxy666 425247833@qq.com
 * @Date: 2023-05-29 14:36:00
 * @LastEditors: chengxy666 425247833@qq.com
 * @LastEditTime: 2023-05-30 16:37:16
 * @FilePath: /vue-course/03_vue/05_练习/src/components/TabItem.vue
-->

<script setup>

import Photo from './Photo.vue';
import HotBar from './HotBar.vue';

/**
 * 子组件中的数据通常不会在子组件中直接定义，这样会导致数据和试图发生耦合
 * 子组件中的数据通常会在创建组件实例时确定
 * 父组件可以通过props来将数据传递给子组件
 *
 * 使用 props：
 *  - 现在子组件中定义props
 */

const { item, maxHot } = defineProps(['item', 'max-hot']);

</script>

<template>
  <div class="tab-item">
    <!-- 图片 -->
    <Photo :src="item.img" :alt="item.name" :rate="item.rate" />
    <!-- <Photo :item="item" /> -->
    <!-- 描述 -->
    <div class="desc">
      <span class="name">{{ item.name }}</span>
      <HotBar :hot="item.hot" :max-hot="maxHot" />
    </div>
  </div>
</template>

<style scoped>
.tab-item {
  display: flex;
}

.tab-item+.tab-item {
  margin-top: 30px;
}

.desc {
  display: flex;
  flex-flow: column;
  flex: auto;
  justify-content: space-evenly;
  margin-left: 30px;
}
</style>