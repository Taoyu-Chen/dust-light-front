<template>
  <van-notice-bar
  left-icon="volume-o"
  text="Under renovation, please look forward to the complete App."
  />
  <van-swipe :autoplay="3000" lazy-render>
    <van-swipe-item v-for="image in images" :key="image">
      <img :src="image" class="swipe__img"/>
    </van-swipe-item>
  </van-swipe>
</template>

<script>
export default {
  setup () {
    const images = [
      'https://gitee.com/sevensound/pic-cloud/raw/master/home1.png',
      'https://img.yzcdn.cn/vant/apple-2.jpg'
    ]
    return { images }
  }
}
</script>

<style lang="scss" scoped>
  .my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background-color: #39a9ed;
  }
  .swipe__img {
    width: 3.75rem;
    height: 1.5rem;
  }
</style>
