<!--
 * @Author: chengxy666 425247833@qq.com
 * @Date: 2023-05-28 15:18:24
 * @LastEditors: chengxy666 425247833@qq.com
 * @LastEditTime: 2023-06-02 12:23:51
 * @FilePath: /vue-course/03_vue/05_练习/src/App.vue
-->

<script setup>
import { ref, reactive } from 'vue';
import Tab from './components/Tab.vue';
// 创建一个变量来记录选项卡的状态
const current = ref(0); // 0 表示球员 1 表示球队

const players = reactive([
  { name: '里奥·梅西', img: '/images/messi.png', rate: 1, hot: 433760 },
  { name: '内马尔·达席尔瓦·儒尼奥尔', img: '/images/neymar.png', rate: 2, hot: 274762 },
  { name: '克里斯蒂亚诺·罗纳尔多', img: '/images/ronaldo.png', rate: 3, hot: 273060 }
]);

const teams = reactive([
  { name: '法国', img: '/images/法国.jpg', rate: 1, hot: 283845 },
  { name: '巴西', img: '/images/巴西.jpg', rate: 2, hot: 203421 },
  { name: '荷兰', img: '/images/荷兰.jpg', rate: 3, hot: 173123 },
]);

const playersMaxHot = players[0].hot;
const teamsMaxHot = teams[0].hot;

</script>

<template>
  <Tab />
</template>


