<template>
  <el-card class="box-card">
    <van-cell-group>
      <card />
    </van-cell-group>
    <van-cell-group>
      <card />
    </van-cell-group>
  </el-card>
</template>

<script>
import Card from './Card.vue'
export default {
  components: { Card },
  setup () {

  }
}
</script>

<style lang="scss" scoped>
  .box-card {
    width: 98%;
    margin-left: 1%;
    margin-right: 1%;
    padding-top: 1%;
  }
</style>
