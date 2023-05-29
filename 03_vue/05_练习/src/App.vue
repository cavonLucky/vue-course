<!--
 * @Author: chengxy666 425247833@qq.com
 * @Date: 2023-05-28 15:18:24
 * @LastEditors: chengxy666 425247833@qq.com
 * @LastEditTime: 2023-05-29 14:18:18
 * @FilePath: /vue-course/03_vue/05_练习/src/App.vue
-->

<script setup>
import { ref } from 'vue';
// 创建一个变量来记录选项卡的状态
const current = ref(0); // 0 表示球员 1 表示球队

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
          <div class="tab-item">
            <!-- 图片 -->
            <div class="photo">
              <img src="/images/messi.png" alt="梅西">
              <span class="ranking-one">1</span>
            </div>
            <!-- 描述 -->
            <div class="desc">
              <span class="name">梅西</span>
              <div class="hot-bar">
                <div class="inner">433760热度</div>
              </div>
            </div>
          </div>

          <div class="tab-item">
            <!-- 图片 -->
            <div class="photo">
              <img src="/images/ronaldo.png" alt="梅西">
              <span>2</span>
            </div>
            <!-- 描述 -->
            <div class="desc">
              <span class="name">C罗</span>
              <div class="hot-bar">
                <div class="inner hot2">233967热度</div>
              </div>
            </div>
          </div>

          <div class="tab-item">
            <!-- 图片 -->
            <div class="photo">
              <img src="/images/neymar.png" alt="梅西">
              <span>3</span>
            </div>
            <!-- 描述 -->
            <div class="desc">
              <span class="name">内马尔</span>
              <div class="hot-bar">
                <div class="inner hot3">222343热度</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div v-show="current === 1">
        <!-- 球队 -->
        <div class="tab-list">
          <div class="tab-item">
            <!-- 图片 -->
            <div class="photo">
              <img src="/images/法国.jpg" alt="梅西">
              <span class="ranking-one">1</span>
            </div>
            <!-- 描述 -->
            <div class="desc">
              <span class="name">法国</span>
              <div class="hot-bar">
                <div class="inner">183845热度</div>
              </div>
            </div>
          </div>

          <div class="tab-item">
            <!-- 图片 -->
            <div class="photo">
              <img src="/images/巴西.jpg" alt="梅西">
              <span>2</span>
            </div>
            <!-- 描述 -->
            <div class="desc">
              <span class="name">巴西</span>
              <div class="hot-bar">
                <div class="inner">183421热度</div>
              </div>
            </div>
          </div>

          <div class="tab-item">
            <!-- 图片 -->
            <div class="photo">
              <img src="/images/荷兰.jpg" alt="梅西">
              <span>3</span>
            </div>
            <!-- 描述 -->
            <div class="desc">
              <span class="name">荷兰</span>
              <div class="hot-bar">
                <div class="inner">173123热度</div>
              </div>
            </div>
          </div>
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

.tab-item {
  display: flex;
}

.tab-item + .tab-item {
  margin-top: 30px;
}

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
  background: #ecac3c;
  border-bottom-right-radius: 16px;
  font-size: 38px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
}

.photo .ranking-one{
  background: #e46f2c;
}

.desc {
  display: flex;
  flex-flow: column;
  flex: auto;
  justify-content: space-evenly;
  margin-left: 30px;
}

.hot-bar {
  background: #0d2463;
  border-radius: 20px;
  overflow: hidden;
}

.hot-bar .inner {
  border-radius: 20px;
  text-indent: 1rem;
  background: linear-gradient(90deg, rgb(170, 0, 39) 50%, rgb(54, 0, 13) 100%);
  white-space: nowrap;
}

.hot-bar .hot2 {
  width: 50%;
}

.hot-bar .hot3 {
  width: 40%;
}
</style>

