<template>
  <el-page-header @back="goBack" content="Publish order">
  </el-page-header>
</template>

<script>
export default {
  name: 'PublishHeader',
  methods: {
    goBack () {
      console.log('go back')
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
