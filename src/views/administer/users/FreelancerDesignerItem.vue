<template>
  <van-swipe-cell>
    <van-cell :border="true" title="fd username" value="phone" >
      <van-button type="danger" size="mini" round>Delete</van-button>
      <van-button type="warning" size="mini" round>Lock</van-button>
    </van-cell>
  </van-swipe-cell>
</template>

<script>
export default {
  setup () {

  }
}
</script>

<style>
  .goods-card {
    margin: 0;
    background-color: white;
  }

  .delete-button {
    height: 100%;
  }

  .warning-button {
    height: 100%;
  }
</style>
