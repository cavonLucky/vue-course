/*
 * @Author: cavonLucky 425247833@qq.com
 * @Date: 2023-05-07 16:49:05
 * @LastEditors: cavonLucky 425247833@qq.com
 * @LastEditTime: 2023-05-07 17:02:02
 * @FilePath: /vue-course/03_vue/03_vue的基础/test/o1_proxy.js
 */

const obj = {
  name: '孙悟空',
  age: 18
};

const handler = {
  get(target, prop, receiver) {
    console.log('get', target, prop, receiver);
    return target[prop];
  },
  set(target, prop, value, receiver) {
    console.log('set', target, prop, value, receiver);
    target[prop] = value;
  }
}

const proxy = new Proxy(obj, handler);
console.log(proxy);
proxy.age = 28;
console.log(proxy.age);
console.log(obj.age);

