<template>
  <Header :name="'History Tasks'"/>
  <div class="wrapper"></div>
  <task-list></task-list>
</template>

<script>
import Header from '../../../components/Header'
import TaskList from './TaskLIst'

export default {
  components: {
    Header,
    TaskList
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
