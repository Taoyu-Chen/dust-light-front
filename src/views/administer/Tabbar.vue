<template>
  <transition name="van-fade">
      <router-view />
  </transition>
  <van-tabbar route placeholder v-model="active">
    <van-tabbar-item replace icon="wap-home-o" is-link to="/admin">Home</van-tabbar-item>
    <van-tabbar-item replace icon="edit" is-link to="/admin/announcement">Announcement</van-tabbar-item>
    <van-tabbar-item replace icon="manager-o" is-link to="/admin/users" @click="handle">Users</van-tabbar-item>
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
