<!--
 * @Author: chengxy666 425247833@qq.com
 * @Date: 2023-05-31 15:11:08
 * @LastEditors: chengxy666 425247833@qq.com
 * @LastEditTime: 2023-06-02 10:36:32
 * @FilePath: /vue-course/03_vue/05_练习/src/components/TabList.vue
 * @descript: 用来显示列表
-->

<script setup>
import TabItem from './TabItem.vue';
const props = defineProps(['items', 'maxHot']);
</script>

<template>
  <div class="tab-list">
    <TabItem v-for="(player, index) in props.items" :key="index" :item="player" :max-hot="props.maxHot" />
  </div>
</template>

<style scoped>
.tab-list {
  margin: 20px;
}
</style>


