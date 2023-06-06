/*
 * @Author: chengxy666 425247833@qq.com
 * @Date: 2023-06-05 20:23:12
 * @LastEditors: chengxy666 425247833@qq.com
 * @LastEditTime: 2023-06-06 17:43:55
 * @FilePath: /vue-course/03_vue/08_state/src/store/studentStore.js
 */
import { defineStore } from 'pinia';

export const useStudentStore = defineStore('student', {
  state: () => ({
    name: '孙悟空',
    age: 18,
    gender: '男',
    address: '花果山',
    skills: ['七十二变', '金箍棒', '筋斗云']
  }),

  getters: {
    title: state => {
      return 'Mr.' + state.name;
    },
    double() {
      return this.age * 2;
    }
  },

  actions: {
    growUp() {
      throw new Error('出错啦～～');
      this.age++;
    }
    // growUp: (...args) => {
    //   console.log(args);
    //   // this.age++;
    // }
  }
})

