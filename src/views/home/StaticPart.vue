<template>
  <div class="header">
      <span class="iconfont header__icon">&#xe646;</span>
      Welcome to Dust Light App
      <span class="iconfont header__notice">&#xe609;</span>
    </div>
    <div class="search">
      <span class="iconfont header__notice">&#xe610;</span>
      <span class="search__text">Order Tracking</span>
    </div>
    <div class="banner">
      <img
        class="banner__img"
        src="https://gitee.com/sevensound/pic-cloud/raw/master/banner.png"
      />
    </div>
    <div class="icons">
      <div
        class="icons__item"
        v-for="(item, index) in iconsList"
        :key="index"
      >
        <img
          class="icons__item__img"
          :src="`https://gitee.com/sevensound/pic-cloud/raw/master/${item.imgName}.png`"
          alt=""
        >
        <p class="icons__item__desc">{{item.desc}}</p>
      </div>
    </div>
    <div class="gap"></div>
</template>

<script>
export default {
  name: 'StaticPart',
  setup () {
    const iconsList = [
      { imgName: 'design', desc: 'design' },
      { imgName: 'design', desc: 'design' },
      { imgName: 'design', desc: 'design' },
      { imgName: 'design', desc: 'design' },
      { imgName: 'design', desc: 'design' }
    ]
    return { iconsList }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/variables.scss';
@import '../../style/mixins.scss';
.header {
  position: relative;
  padding: .16rem 0;
  line-height: .22rem;
  font-size: .21rem;
  @include ellipsis;
  .header__icon {
    position: relative;
    margin-right: .24rem;
    right: .05rem;
    top: .01rem;
    margin: .08rem;
    font-size: .2rem;
  }
  .header__notice {
    position: relative;
    left: .05rem;
    top: .01rem;
    margin: .08rem;
    font-size: .2rem;
  }
  color: $content-fontcolor;
}
.search {
  line-height: .32rem;
  background: #f5f5f5;
  color: #B7B7B7;
  border-radius: .16rem;
  margin-bottom: .12rem;
  .iconfont {
    padding: 0 .12rem 0 .12rem;
    display: inline-block;
    font-size: .25rem;
  }
  &__text {
    display: inline-block;
    font-size: .14rem;
    position: relative;
    bottom: .04rem;
  }
}
.banner {
  height: 0%;
  overflow: hidden;
  padding-bottom: 28.2%;
  &__img {
    width: 100%;
  }
}
.icons {
  display: flex;
  flex-wrap: wrap;
  margin-top: .16rem;
  &__item {
    width: 20%;
    &__img {
      position: relative;
      left: .12rem;
      display: block;
      width: .4rem;
      height: .4rem;
      margin: 0 aoto;
    }
    &__desc {
      margin: .06rem 0 .06rem 0;
      text-align: center;
      color: $content-fontcolor;
    }
  }
}
.gap {
  margin: 0 -.18rem;
  height: .1rem;
  background: $content-bgcolor;
}
</style>
