<template>
  <div class="header">
    <span class="iconfont header__icon">&#xe646;</span>
      Welcome to Dust Light App
    <span class="iconfont header__notice">&#xe609;</span>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader'
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
</style>
