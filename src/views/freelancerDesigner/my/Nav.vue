<template>
  <van-nav-bar
    title="Personal center"
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
