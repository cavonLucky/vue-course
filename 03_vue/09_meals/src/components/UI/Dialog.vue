<!--
 * @Author: chengxy666 425247833@qq.com
 * @Date: 2023-07-31 12:03:47
 * @LastEditors: chengxy666 425247833@qq.com
 * @LastEditTime: 2023-07-31 13:23:55
 * @FilePath: /vue-course/03_vue/09_meals/src/components/UI/Dialog.vue
 * @Description: 清空购物车的对话框
-->
<script setup>
import Mask from './Mask.vue';

const props = defineProps(['msg']);
const emits = defineEmits(['ok']);

</script>

<template>
  <Mask>
    <div class="dialog">
      <p class="msg">{{ props.msg }}</p>
      <div class="btn">
        <button class="cancel" @click="$emit('hide')">取消</button>
        <!-- <button class="ok" @click="$emit('ok')">确认</button> -->
        <button class="ok" @click="() => { $emit('ok'); emits('hide'); }">确认</button>
      </div>
    </div>
  </Mask>
</template>

<style scoped>
.dialog {
  width: 700rem;
  height: 400rem;
  background-color: #fff;
  border-radius: 40rem;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}

.msg {
  height: 260rem;
  font-size: 40rem;
  text-align: center;
  line-height: 260rem;
}

.btn {
  display: flex;
  justify-content: space-around;
}

button {
  width: 300rem;
  height: 80rem;
  border-radius: 40rem;
  border: 1px solid #000;
  background-color: #fff;
  font-size: 30rem;
}

.cancel {}

.ok {
  background-color: rgb(248, 188, 0);
  border: none;
}
</style>