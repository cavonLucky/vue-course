<!--
 * @Author: chengxy666 425247833@qq.com
 * @Date: 2023-06-04 11:43:55
 * @LastEditors: chengxy666 425247833@qq.com
 * @LastEditTime: 2023-06-04 13:53:56
 * @FilePath: /vue-course/03_vue/07_form/src/App.vue
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
        v-model 修饰符
          .lazy 使用chenge来处理数据
          .trim 去除前后空格
          .number 将数据转换为数值
       -->
      <div>
        <!-- 信息：<input type="text" v-model="text" /> -->
        <!-- 信息：<input type="text" v-model.lazy="text" /> -->
        <!-- 信息：<input type="text" v-model.lazy.trim="text" /> -->
        信息：<input type="text" v-model.lazy.trim.number="text" />
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
        <button>提交</button>
      </div>
    </form>
  </div>
</template>

<style scoped></style>
