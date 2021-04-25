<template>
  <Header :name="'Publish Announcement'"/>
  <div class="wrapper">
    <div class="gap"></div>
    <publish />
  </div>
  <tabbar />
</template>

<script>
import Publish from './publish'
import Tabbar from '../Tabbar.vue'
import Header from '../../../components/Header'
export default {
  components: { Tabbar, Publish, Header },
  name: 'PublishAnnouncement',
  setup () {

  }
}
</script>

<style lang="scss" scoped>
@import '../../../style/variables.scss';
.gap {
  margin: 0 0rem;
  height: .02rem;
  background: $content-bgcolor;
}
.wrapper {
  overflow-y: auto;
  position: absolute;
  left: 0;
  top: .5rem;
  bottom: .5rem;
  right: 0;
  background: $wrapper-fontcolor;
}
</style>
