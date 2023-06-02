<!--
 * @Author: chengxy666 425247833@qq.com
 * @Date: 2023-05-28 15:18:24
 * @LastEditors: chengxy666 425247833@qq.com
 * @LastEditTime: 2023-05-30 18:16:46
 * @FilePath: /vue-course/03_vue/05_练习/src/App.vue
-->

<script setup>
import { ref, reactive } from 'vue';
import TabItem from './components/TabItem.vue';
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
  <!-- 选项卡的外部容器 -->
  <div class="tab-wrapper">
    <!-- 选项卡的头部 -->
    <header class="tab-head">
      <!-- 定义两个按钮 -->
      <div class="tab-button" :class="{ selected: current === 0 }" @click="current = 0">热门球员</div>
      <div class="tab-button" :class="{ selected: current === 1 }" @click="current = 1">热门球队</div>
    </header>
    <!-- 选项卡的主体 -->
    <div class="main">
      <!--
        current === 0 显示球员
        current === 0 显示球队
          v-show 指令，用来设置一个内容是否显示
            v-show 是通过display来设置一个元素是否显示的
       -->
      <div v-show="current === 0">
        <!-- 球员 -->
        <div class="tab-list">
          <TabItem v-for="(player, index) in players" :key="index" :item="player" :max-hot="playersMaxHot" />
        </div>
      </div>

      <div v-show="current === 1">
        <!-- 球队 -->
        <div class="tab-list">
          <TabItem v-for="(team, index) in teams" :item="team" :key="index" :max-hot="teamsMaxHot" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.tab-wrapper {
  width: 800px;
  background-color: #3652cb;
  padding: 20px;
  box-sizing: border-box;
}

.tab-head {
  display: flex;
  border-radius: 10px;
  overflow: hidden;
}

.tab-button {
  background: #fff;
  font-size: 30px;
  flex: auto;
  padding: 10px 0;
  text-align: center;
  cursor: pointer;
  transition: 0.5s;
}

.tab-button:not(.selected):hover {
  color: #ab2438;
}

.selected {
  background: #ab2438;
  color: #fff;
}

.main {
  color: #fff;
  font-size: 30px;
}

.tab-list {
  margin: 20px;
}
</style>

