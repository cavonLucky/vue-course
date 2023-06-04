<!--
 * @Author: chengxy666 425247833@qq.com
 * @Date: 2023-06-03 17:17:55
 * @LastEditors: chengxy666 425247833@qq.com
 * @LastEditTime: 2023-06-04 11:43:55
 * @FilePath: /vue-course/03_vue/07_form/src/02_v-model.vue
-->
<script setup>
// let text = '';
// let text = '默认值';

import { ref } from 'vue';
// 双向绑定
let text = ref('');
// let bool = ref(false);
let bool = ref('是');
let hobbies = ref([]);
let gender = ref('女');
// let friend = ref('孙悟空');
let friend = ref('');

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
        在vue中，为我们提供了v-model可以快速完成表单的双向数据绑定

        <input type="text" v-model="text" />
        <input type="text" :value="text" @input="event => (text = event.target.value)" />

       -->
      <div>
        信息：<input type="text" v-model="text" />
      </div>

      <div>
        <!-- 是否：<input type="checkbox" v-model="bool" /> -->
        <!-- 是否：<input type="checkbox" v-model="bool" true-value="是" /> -->
        是否：<input type="checkbox" v-model="bool" true-value="是" false-value="否" />
      </div>

      <div>
        爱好：
        <input type="checkbox" name="hobby" v-model="hobbies" value="篮球" />
        <input type="checkbox" name="hobby" v-model="hobbies" value="足球" />
        <input type="checkbox" name="hobby" v-model="hobbies" value="羽毛球" />
        <input type="checkbox" name="hobby" v-model="hobbies" value="乒乓球" />
      </div>

      <div>
        性别：
        <input type="radio" name="gender" v-model="gender" value="男">男
        <input type="radio" name="gender" v-model="gender" value="女">女
      </div>

      <div>
        朋友：
        <!-- <select v-model="friend" multiple>
          <option>孙悟空</option>
          <option>猪八戒</option>
          <option>沙和尚</option>
          <option>唐僧</option>
        </select> -->

        <select v-model="friend">
          <option disabled value="">请选择你的好朋友</option>
          <option>孙悟空</option>
          <option>猪八戒</option>
          <option>沙和尚</option>
          <option>唐僧</option>
        </select>
      </div>

      <div>
        <input type="text" v-model="text" />
      </div>

      <div>
        <button>提交</button>
      </div>
    </form>
  </div>
</template>

<style scoped></style>
