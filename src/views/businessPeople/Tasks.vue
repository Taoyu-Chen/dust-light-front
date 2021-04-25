<template>
  <Header :name="'Tasks history'"/>
    <van-cell title="Text" />
    <van-cell title="Text" />
    <van-cell title="Text" />
    <van-cell title="Text" />
</template>

<script>
import Header from '../../components/Header'
export default {
  components: {
    Header
  },
  setup () {
    return { indexList: [] }
  }
}
</script>

<style lang="scss" scoped>

</style>
