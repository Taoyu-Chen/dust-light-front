<template>
  <div class="wrapper">
  </div>
</template>

<script>
export default {
  setup () {

  }
}
</script>

<style lang="scss" scoped>
  @import '../../../style/variables.scss';
  .gap {
    margin: 0 0rem;
    height: .02rem;
    background: $content-bgcolor;
  }
  .wrapper {
    overflow-y: auto;
    position: absolute;
    left: 0;
    top: .5rem;
    bottom: .5rem;
    right: 0;
    background: $wrapper-fontcolor;
  }
</style>
