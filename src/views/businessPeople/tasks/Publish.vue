<template>
  <el-header>Header</el-header>
  <el-container>
    <el-aside width=".6rem">
      <div class="steps" style="height: 600px;">
        <el-steps direction="vertical" :active="1">
        <el-step></el-step>
        <el-step></el-step>
        <el-step></el-step>
      </el-steps>
</div>
    </el-aside>
    <el-main>Main</el-main>
  </el-container>
</template>

<script>
export default {
  name: 'Publish',
  components: {
  }
}
</script>

<style lang="scss" scoped>

.el-header {
  background-color: #B3C0D1;
  color: #333;
  text-align: center;
  line-height: .6rem;
}
.el-container {
  display: flex;
  position: absolute;
  top: .5rem;
  left: 0;
  right: 0;
  bottom: .5rem;
}

.el-aside {
  background-color: #D3DCE6;
  color: #333;
  text-align: center;
  height: 100%;
  .steps {
    height: 100%;
    padding-top: .5rem;
    padding-bottom: 1rem;
    padding-left: .15rem;
  }
}

.el-main {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
  line-height: 160px;
}
</style>
