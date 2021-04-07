<template>
  <Header />
  <search />
  <icons />
  <announcement />
  <tabbar />
</template>

<script>
import Tabbar from '../Tabbar.vue'
import Announcement from '../../common/home/Announcement'
import Icons from '../../common/home/Icons.vue'
import Search from '../../common/home/Search.vue'
import Header from '../../common/home/Header.vue'

export default {
  name: 'AdminHome',
  components: {
    Tabbar,
    Search,
    Icons,
    Announcement,
    Header
  },
  setup () {
  }
}
</script>

<style lang="scss" scoped>
</style>
