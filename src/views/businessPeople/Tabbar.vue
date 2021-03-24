<template>
  <van-tabbar v-model="active">
    <van-tabbar-item icon="wap-home">Home</van-tabbar-item>
    <van-tabbar-item icon="bill">Publish</van-tabbar-item>
    <van-tabbar-item icon="friends">Contact</van-tabbar-item>
    <van-tabbar-item icon="user-circle-o">My</van-tabbar-item>
  </van-tabbar>

</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    const active = ref(0)
    return { active }
  }
}
</script>

<style lang="scss" scoped>
</style>
