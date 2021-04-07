<template>
  <van-tabbar v-model="active">
    <van-tabbar-item icon="wap-home-o">Home</van-tabbar-item>
    <van-tabbar-item icon="search">Bid</van-tabbar-item>
    <van-tabbar-item icon="friends-o">Contact</van-tabbar-item>
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
