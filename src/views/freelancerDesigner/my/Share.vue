<template>
  <van-cell title="Doing task" @click="showShare = true" >
    <template #left-icon>
      <van-icon name="search" class="search-icon" />
    </template></van-cell>
  <van-cell title="Customer service hotline" @click="showShare = true" ><van-icon name="arrow" /></van-cell>
  <van-cell title="Show ShareSheet" @click="showShare = true" ><van-icon name="arrow" /></van-cell>
  <van-cell title="About Me" @click="ToAboutMe" ><van-icon name="arrow" /></van-cell>
  <van-share-sheet
    v-model:show="showShare"
    title="Share"
    :options="options"
    @select="onSelect"
  />
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const useRouterEffect = () => {
  const router = useRouter()
  const ToAboutMe = () => {
    router.push({ name: 'AboutMe' })
  }
  return {
    ToAboutMe
  }
}

export default {
  setup () {
    const showShare = ref(false)
    const options = [
      [
        { name: 'Wechat', icon: 'wechat' },
        { name: 'Wechat Moments', icon: 'wechat-moments' },
        { name: 'Weibo', icon: 'weibo' },
        { name: 'QQ', icon: 'qq' }
      ],
      [
        { name: 'Link', icon: 'link' },
        { name: 'Poster', icon: 'poster' },
        { name: 'Qrcode', icon: 'qrcode' },
        { name: 'Weapp Qrcode', icon: 'weapp-qrcode' }
      ]
    ]
    const { ToAboutMe } = useRouterEffect()
    return {
      options,
      showShare,
      ToAboutMe
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
