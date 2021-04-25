<template>
  <van-tabbar route placeholder v-model="active">
    <van-tabbar-item icon="wap-home-o" is-link to="/fd">Home</van-tabbar-item>
    <van-tabbar-item icon="search" is-link to="/fd/bid">Bid</van-tabbar-item>
    <van-tabbar-item icon="friends-o" is-link to="/fd/contact">Contact</van-tabbar-item>
    <van-tabbar-item icon="user-circle-o" is-link to="/fd/my">My</van-tabbar-item>
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
