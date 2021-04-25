<template>
  <van-steps :active="data" active-icon="success" active-color="#38f">
    <van-step>Step1</van-step>
    <van-step>Step2</van-step>
    <van-step>Step3</van-step>
    <van-step>Step4</van-step>
  </van-steps>
</template>

<script>
export default {
  setup () {
    const data = 1
    return { data }
  }
}
</script>

<style lang="scss" scoped>

</style>
