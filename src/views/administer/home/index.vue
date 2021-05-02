<template>
  <Header />
  <div class="wrapper" />
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
  name: 'BPHome',
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
  @import '../../../style/variables.scss';
  .wrapper {
    background-color: $docker-bgcolor;
    background-size: 100% 100%;
    height: 100%;
    position: fixed;
    width: 100%
  }
</style>
