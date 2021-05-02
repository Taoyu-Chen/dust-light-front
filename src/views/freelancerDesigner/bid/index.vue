<template>
  <Header :name="'Bid List'"/>
  <div class="wrapper" />
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
  @import '../../../style/variables.scss';
  .wrapper {
    background-color: $docker-bgcolor;
    background-size: 100% 100%;
    height: 100%;
    position: fixed;
    width: 100%
  }
</style>
