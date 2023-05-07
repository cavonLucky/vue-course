<script>
// const obj = {
//   count: 0
// }
export default {
  data() {
    return {
      count: 0
    }
    // return obj;
  }
}
</script>

<template>
  <button @click="count++">点我一下{{ count }}</button>
</template>