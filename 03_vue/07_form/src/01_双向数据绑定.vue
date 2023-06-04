<!--
 * @Author: chengxy666 425247833@qq.com
 * @Date: 2023-06-03 17:17:55
 * @LastEditors: chengxy666 425247833@qq.com
 * @LastEditTime: 2023-06-04 11:19:45
 * @FilePath: /vue-course/03_vue/07_form/src/01_双向数据绑定.vue
-->
<script setup>
// let text = '';
// let text = '默认值';

import { ref } from 'vue';
// 双向绑定
let text = ref('');

function sunmitHandler() {
  // console.log(text);
  console.log(text.value);
  // 将text提交给服务器，在根据服务器返回的数据做后续的操作
}

</script>

<template>
  <div>
    <h1>哈哈哈哈哈</h1>
    <!-- @submit.prevent 取消浏览器地址栏默认跳转 -->
    <form action="#" method="get" @submit.prevent="sunmitHandler">
      <!--
        这里我们将表单项到value属性和变量text做了绑定，

        当value发生变化时，text变量会随之变化（单向绑定）

        当value或text任意一个发生变化时，另一个也会随之变化（双向绑定）
       -->
      <!-- <input type="text" @input="event => (text = event.target.value)" />
      <button>提交</button> -->
      <div>
        <input type="text" @input="event => (text = event.target.value)" :value="text" />
      </div>

      <div>
        <input type="text" @input="event => (text = event.target.value)" :value="text" />
      </div>

      <div>
        <button>提交</button>
      </div>
    </form>
  </div>
</template>

<style scoped></style>
