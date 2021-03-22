<template>
  <el-card class="box-card">
    <van-cell-group>
      <business-people-item />
    </van-cell-group>
  </el-card>
</template>

<script>
import BusinessPeopleItem from './BusinessPeopleItem.vue'
export default {
  components: { BusinessPeopleItem },
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
