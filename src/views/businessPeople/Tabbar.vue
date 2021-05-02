<template>
  <transition name="van-fade">
    <router-view />
  </transition>
  <van-tabbar route placeholder v-model="active">
    <van-tabbar-item icon="wap-home" is-link to="/bp">Home</van-tabbar-item>
    <van-tabbar-item icon="bill" is-link to="/bp/publish">Publish</van-tabbar-item>
    <van-tabbar-item icon="friends" is-link to="/bp/contact">Contact</van-tabbar-item>
    <van-tabbar-item icon="manager" is-link to="/bp/my">My</van-tabbar-item>
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
