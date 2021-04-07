<template>
  <div class="wrapper">
    <el-card class="box-card">
    </el-card>
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
  .box-card {
    width: 98%;
    margin-left: 1%;
    margin-right: 1%;
    padding-top: 1%;
  }
</style>
