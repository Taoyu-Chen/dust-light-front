<template>
  <div class="docker">
    <span class="docker__item docker__item--active">
      <div class="iconfont">&#xe6ac;</div>
      <div class="docker__title">Home</div>
    </span>
    <span class="docker__item">
      <div class="iconfont">&#xe685;</div>
      <div class="docker__title">Publish</div>
    </span>
    <span class="docker__item">
      <div class="iconfont">&#xe6e9;</div>
      <div class="docker__title">Contact</div>
    </span>
    <span class="docker__item">
      <div class="iconfont">&#xe658;</div>
      <div class="docker__title">My</div>
    </span>
  </div>
</template>

<script>
export default {
  name: 'Docker'
}
</script>

<style lang="scss">
@import '../../style/variables.scss';
.docker {
  display: flex;
  box-sizing: border-box;
  position: absolute;
  padding: 0 .18rem;
  left: 0;
  bottom: 0;
  width: 100%;
  height: .49rem;
  border-top: .01rem solid $content-bgcolor;
  color: $content-fontcolor;
  &__item {
    flex: 1;
    text-align: center;
    .iconfont {
      margin: .01rem 0 .02rem 0;
      font-size: .22rem;
    }
    &--active {
      color: #1FA4FC;
    }
  }
  &__title {
    font-size: 20px;
    margin-top: -.09rem;
    transform: scale(0.5, 0.5);
    transform-origin: center top;
  }
}
</style>
