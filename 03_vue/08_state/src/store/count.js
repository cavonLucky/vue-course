/*
 * @Author: chengxy666 425247833@qq.com
 * @Date: 2023-06-05 17:42:13
 * @LastEditors: chengxy666 425247833@qq.com
 * @LastEditTime: 2023-06-05 17:44:49
 * @FilePath: /vue-course/03_vue/08_state/store/count.js
 */

import { reactive } from 'vue';

export const countStore = reactive({
  count: 0,
  increment() {
    this.count++;
  }
});
