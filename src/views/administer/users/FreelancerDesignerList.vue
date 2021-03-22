<template>
  <el-card class="box-card">
    <van-cell-group>
      <freelancer-designer-item />
    </van-cell-group>
  </el-card>
</template>

<script>
import FreelancerDesignerItem from './FreelancerDesignerItem.vue'
export default {
  components: { FreelancerDesignerItem },
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
