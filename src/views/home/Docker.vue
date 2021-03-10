<template>
    <div class="docker">
      <div
        v-for="(item, index) in dockerList"
        :class="{'docker__item': true, 'docker__item--active': index ===0}"
        class="docker__item"
        :key="item.icon"
      >
        <div class="iconfont" v-html="item.icon"></div>
        <div class="docker__title">{{item.text}}</div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Docker',
  setup () {
    const dockerList = [
      { icon: '&#xe6ac;', text: 'Home' },
      { icon: '&#xe685;', text: 'Publish' },
      { icon: '&#xe6e9;', text: 'Contact' },
      { icon: '&#xe658;', text: 'My' }
    ]
    return { dockerList }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/variables.scss';
.docker {
  display: flex;
  position: absolute;
  padding: 0 .18rem;
  left: 0;
  bottom: 0;
  width: 100%;
  height: .49rem;
  border-top: .01rem solid $content-bgcolor;
  color: $docker-fontcolor;
  background-color: $docker-bgcolor;
  &__item {
    flex: 1;
    text-align: center;
    .iconfont {
      margin: .01rem 0 .02rem 0;
      font-size: .22rem;
    }
    &--active {
      color: $docker-activeColor;
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
