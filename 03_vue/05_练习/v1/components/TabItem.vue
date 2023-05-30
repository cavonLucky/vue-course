<!--
 * @Author: chengxy666 425247833@qq.com
 * @Date: 2023-05-29 14:36:00
 * @LastEditors: chengxy666 425247833@qq.com
 * @LastEditTime: 2023-05-29 15:18:18
 * @FilePath: /vue-course/03_vue/05_练习/src/components/TabItem.vue
-->

<script setup>
// export default{
//   name: 'TabItem',
//   // props: [String]
// }

import { reactive } from 'vue';

/**
 * 子组件中的数据通常不会在子组件中直接定义，这样会导致数据和试图发生耦合
 * 子组件中的数据通常会在创建组件实例时确定
 * 父组件可以通过props来将数据传递给子组件
 *
 * 使用 props：
 *  - 现在子组件中定义props
 */

// const props = defineProps(['a', 'b', 'c'])
// console.log(props);

// const props = defineProps(['item']);
// console.log(props, props.item.name, props.item.img);

const { item } = defineProps(['item']);

// 创建一个响应式
// const item = reactive({
//   name: '梅西',
//   img: '/images/messi.png',
//   rate: 1,
//   hot: 433760
// });

</script>

<template>
  <div class="tab-item">
    <!-- 图片 -->
    <div class="photo">
      <img :src="item.img" :alt="item.name">
      <span class="ranking-one">{{ item.rate }}</span>
    </div>
    <!-- 描述 -->
    <div class="desc">
      <span class="name">{{ item.name }}</span>
      <div class="hot-bar">
        <div class="inner">{{ item.hot }}热度</div>
      </div>
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

.photo .ranking-one {
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
</style>