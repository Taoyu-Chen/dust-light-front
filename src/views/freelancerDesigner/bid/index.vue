<template>
  <Header :name="'Bid List'"/>
  <dropdown-menu />
  <task-list />
</template>

<script>
import { Toast } from 'vant'
import DropdownMenu from './DropdownMenu.vue'
import TaskList from './TaskList'
import Header from '../../../components/Header'
export default {
  name: 'Bid',
  components: {
    DropdownMenu,
    TaskList,
    Header
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
