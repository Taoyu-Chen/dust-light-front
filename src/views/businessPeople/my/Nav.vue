<template>
  <van-nav-bar
    title="Personal center"
    left-text="Back"
    left-arrow
    @click-left="onClickLeft"
  />
</template>

<script>
import { Toast } from 'vant'
import { useRouter } from 'vue-router'

export default {
  setup () {
    const router = useRouter()
    const onClickLeft = () => {
      router.go(-1)
    }
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
