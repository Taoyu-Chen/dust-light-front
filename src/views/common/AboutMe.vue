<template>
    <Header :name="'About Me'"/>
    <div class="about">
      <img class="about__img" :src="Logo" alt="">
      <van-divider :style="{ color: '#1baeae', borderColor: '#1baeae', fontSize: '20px', fontWeight: 500 }">Introduction</van-divider>
      <div>The project aims to develop a crowdsourcing-based project management platform that can meet business people and freelancer designer user needs. It will become an ideal choice for individual business people and small businesses, and get effective management at the lowest cost. It will also allow a freelance designer to accumulate design experience and become a springboard for more professional designers. Through a series of simple operations on the crowdsourcing platform, order management,  task assignment, progress control, and quality supervision can be realized most intuitively, and finally, become a service crowdsourcing platform that balances buyers and purchasers.</div>
      <van-divider :style="{ color: '#1baeae', borderColor: '#1baeae', fontSize: '20px', fontWeight: 500 }">Open source address</van-divider>
      <div>
        <div>My personal blog address:<a target="_blank" href="https://sevensound.gitee.io/">https://sevensound.gitee.io/</a></div>
        <div>Front-end open source address：<a target="_blank" href="https://github.com/Taoyu-Chen/dust-light-front">https://github.com/Taoyu-Chen/dust-light-front</a></div>
        <div>Back-end open source address：<a target="_blank" href="https://github.com/Taoyu-Chen/dust-light-back">https://github.com/Taoyu-Chen/dust-light-back</a></div>
      </div>
    </div>
</template>

<script>
import Header from '../../components/Header'
import Logo from '../../assets/dust_light_logo_v4.png'
export default {
  components: {
    Header
  },
  setup () {
    return {
      Logo
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../../style/variables.scss';
  .about {
    background-color: $docker-bgcolor;
    &__img {
      width: 100%;
      padding-right: .45rem;
      height: 2rem;
    }
  }
</style>
