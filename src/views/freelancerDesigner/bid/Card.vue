<template>
  <el-card class="box-card">
  <template #header>
    <div class="card-header">
      <span>Card name</span>
      <div>
        <el-button class="button" type="primary" plain>Bid</el-button>
        <el-button class="Detail" type="primary" plain>Detail</el-button>
      </div>
    </div>
  </template>
  <div class="text item">
    <p>price</p>
    <p>price</p>
    <p>price</p>
  </div>
</el-card>

</template>

<script>
export default {
  setup () {

  }
}
</script>

<style lang="scss" scoped>
  .card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .text {
    font-size: 14px;
  }

  .item {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .box-card {
    width: 100%;
    padding: .02rem .05rem .02rem .05rem;
  }
</style>
