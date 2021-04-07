<template>
  <div class="gap"></div>
  <van-grid>
    <van-grid-item text="Poster" >
      <template #icon><van-icon  class="iconfont" class-prefix='icon' name='haibaosheji' size="30px" /></template>
    </van-grid-item>
    <van-grid-item text="Icon" >
      <template #icon><van-icon  class="iconfont" class-prefix='icon' name='LOGOsheji' size="30px" /></template>
    </van-grid-item>
    <van-grid-item text="UI" >
      <template #icon><van-icon  class="iconfont" class-prefix='icon' name='UIzhongguo' size="30px" /></template>
    </van-grid-item>
    <van-grid-item text="Brochure" >
      <template #icon><van-icon  class="iconfont" class-prefix='icon' name='yunxuanchuance' size="30px" /></template>
    </van-grid-item>
  </van-grid>
  <div class="gap"></div>
</template>

<script>

export default {
  name: 'Icons',
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
  @import '../../../style/variables.scss';
  .gap {
    margin: 0 0rem;
    height: .02rem;
    background: $content-bgcolor;
  }
</style>
