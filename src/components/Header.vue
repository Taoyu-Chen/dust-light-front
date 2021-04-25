<template>
  <van-nav-bar
    :title="name"
    left-text="Back"
    left-arrow
    @click-left="onClickLeft"
    @click-right="onClickRight"
  >

  </van-nav-bar>
</template>

<script>
import { Toast } from 'vant'
import { useRouter } from 'vue-router'

export default {
  props: {
    name: {
      type: String,
      default: ''
    }
  },
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
