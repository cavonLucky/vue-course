<!--
 * @Author: chengxy666 425247833@qq.com
 * @Date: 2023-06-02 13:27:25
 * @LastEditors: chengxy666 425247833@qq.com
 * @LastEditTime: 2023-06-02 14:05:24
 * @FilePath: /vue-course/03_vue/06_props/src/App.vue
-->

<script setup>
import MyButton from './components/MyButton.vue';
import A from './components/A.vue';
import MyWrapper from './components/MyWrapper.vue';

const name = '孙悟空';

</script>

<template>
  <h1>App组件</h1>
  <!--
    希望在父组件中指定子组件中的内容
      - 我们可以通过插槽（slot）来实现该需求

    <MyButton>插槽的入口</MyButton>

    <button>
      <slot></slot> 插槽的出口
    </button>

    通过插槽引入的组件位于父组件的作用域中

  -->
  <!-- <MyButton /> -->
  <!-- <MyButton>这是App自定义的文字</MyButton> -->
  <!-- <MyButton>嘻嘻嘻</MyButton> -->
  <!-- <MyButton><div>哈哈哈</div></MyButton> -->
  <!-- <MyButton><A></A></MyButton> -->
  <!-- A组件和App组件是父子关系可以传入name，但是A组件和MyButton是引用关系，因此age暂时传入不了 -->
  <!-- <MyButton>
    <A :name="name" :age="age"></A>
  </MyButton> -->

  <!-- <MyWrapper>哈哈哈</MyWrapper> -->
  <MyWrapper>
    <!-- 具名插槽的入口 -->
    <template v-slot:h1>一级标题</template>
    <template v-slot:bb>二级标题</template>
    <template #aa>三级标题：简写方式</template>
  </MyWrapper>

</template>