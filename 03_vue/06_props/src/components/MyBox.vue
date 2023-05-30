

<script setup>
/**
 * 父组件可以通过 props 来像子组件传递数据
 * 注意：父组件传递给子组件的props都是只读的，无法修改，
 *      即使可以修改，我们也尽量不要在子组件中去修改父组件的数据
 *      如果非的要改，可以通过自定义事件
 *
 * 属性名
 *    - 定义属性名时，属性名要遵循驼峰命名法
 */

// 定义props
// const props = defineProps(['a']);
// const props = defineProps(['a', 'b']);
// const props = defineProps(['count', 'obj', 'maxLength']);

const props = defineProps({
  count: Number,
  obj: Object,
  isCheck: Boolean,
  maxLength: {
    type: String,
    requires: true,
    default: '哈哈哈',
    // validator() {
    //   // return false
    //   return true
    // }
    validator(value) {
      return value !== '嘻嘻嘻'
    }
  }
});

console.log(props);
</script>

<template>
  <div>
    <hr>
    <!-- <h2>我是子组件 MyBox {{ props.count }}</h2> -->
    <!-- <button @click="props.count++">MyBox 的按钮</button> -->

    <h1>{{ props.maxLength }}</h1>
    <h2>我是子组件 MyBox {{ props.obj.count }}</h2>
    <button @click="props.obj.count++">MyBox 的按钮</button>
    <hr>
  </div>
</template>

<style scoped>
div {
  color: tomato;
}
</style>