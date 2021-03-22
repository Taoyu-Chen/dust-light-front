<template>
  <Nav />
  <div class="wrapper">
    <van-tabs v-model:active="activeName" >
      <div class="gap"></div>
      <van-tab title="Business People" name="bp">
        <business-people-list />
      </van-tab>
      <van-tab title="Freelancer Designer" name="fd">
        <freelaner-designer-list />
      </van-tab>
    </van-tabs>
  </div>
  <tabbar />
</template>

<script>
import Tabbar from '../Tabbar.vue'
import { ref } from 'vue'
import Nav from './Nav.vue'
import BusinessPeopleList from './BusinessPeopleList.vue'
import FreelanerDesignerList from './FreelancerDesignerList.vue'

export default {
  components: {
    Tabbar,
    Nav,
    BusinessPeopleList,
    FreelanerDesignerList
  },
  name: 'ManageUsers',
  setup () {
    const activeName = ref('bp')
    return { activeName }
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
