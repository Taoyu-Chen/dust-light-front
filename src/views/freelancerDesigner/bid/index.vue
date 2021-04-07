<template>
  <van-nav-bar
    title="Title"
    left-text="Back"
    right-text="Button"
    left-arrow
    @click-left="onClickLeft"
    @click-right="onClickRight"
  />
  <dropdown-menu />
  <task-list />
  <tabbar />
</template>

<script>
import { Toast } from 'vant'
import DropdownMenu from './DropdownMenu.vue'
import Tabbar from '../../administer/Tabbar.vue'
import TaskList from './TaskList'

export default {
  name: 'Bid',
  components: {
    DropdownMenu,
    Tabbar,
    TaskList
  },
  setup () {
    const onClickLeft = () => Toast('Back')
    const onClickRight = () => Toast('Button')
    return {
      onClickLeft,
      onClickRight
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
