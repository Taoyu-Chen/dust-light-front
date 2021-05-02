<template>
  <van-steps :active="status" active-icon="success" active-color="#38f">
    <van-step>Bidding</van-step>
    <van-step>Selected</van-step>
    <van-step>Contributed</van-step>
    <van-step>Finished</van-step>
  </van-steps>
</template>

<script>
export default {
  props: {
    status: {
      type: Number,
      default: 0
    }
  },
  setup () {
  }
}
</script>

<style lang="scss" scoped>

</style>
