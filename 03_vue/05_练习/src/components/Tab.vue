<!--
 * @Author: chengxy666 425247833@qq.com
 * @Date: 2023-06-02 12:19:30
 * @LastEditors: chengxy666 425247833@qq.com
 * @LastEditTime: 2023-06-02 12:33:25
 * @FilePath: /vue-course/03_vue/05_练习/src/components/Tab.vue
-->

<script setup>
import { ref } from 'vue';
// 创建一个变量来记录选项卡的状态
const current = ref(0); // 0 表示球员 1 表示球队

</script>

<!--
  Tab 组件主要的作用就是多个选项卡之间进行切换，其中显示的主要内容是 TabList，而TabList的数据位于App组件中，
  如果还按照之前的方式编写代码，必须要在 App组件中将数据传递给Tab，然后再由Tab传递给TabList，这样做可以但是比较麻烦。

 -->

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
      <!-- current === 0 显示球员 current === 0 显示球队 -->
      <div v-show="current === 0">
        球员
        <!-- <TabList :items="players" :max-hot="playersMaxHot" /> -->
      </div>

      <div v-show="current === 1">
        球队
        <!-- <TabList :items="teams" :max-hot="teamsMaxHot" /> -->
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