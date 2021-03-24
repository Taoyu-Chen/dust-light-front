<template>
  <van-nav-bar
    title="Contact Book"
    left-text="Back"
    left-arrow
    @click-left="onClickLeft"
    @click-right="onClickRight"
  />
</template>

<script>
import { Toast } from 'vant'

export default {
  setup () {
    const onClickLeft = () => Toast('返回')
    const onClickRight = () => Toast('按钮')
    return {
      onClickLeft,
      onClickRight
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
