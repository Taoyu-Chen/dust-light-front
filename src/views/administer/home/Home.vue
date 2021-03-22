<template>
  <van-notice-bar
  left-icon="volume-o"
  text="Under renovation, please look forward to the complete App."
  />
  <van-swipe :autoplay="3000" lazy-render>
    <van-swipe-item v-for="image in images" :key="image">
      <img :src="image" />
    </van-swipe-item>
  </van-swipe>
  <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
    <van-swipe-item><img src="https://gitee.com/sevensound/pic-cloud/raw/master/home1.png
" alt=""></van-swipe-item>
    <van-swipe-item>2</van-swipe-item>
    <van-swipe-item>3</van-swipe-item>
    <van-swipe-item>4</van-swipe-item>
  </van-swipe>
  <search />
  <icons />
  <announcement />
  <tabbar />
</template>

<script>
import Tabbar from '../../administer/Tabbar.vue'
import Announcement from './Announcement.vue'
import Icons from './Icons.vue'
import Search from './Search.vue'

export default {
  name: 'Home',
  components: {
    Tabbar,
    Search,
    Icons,
    Announcement
  },
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
</style>
