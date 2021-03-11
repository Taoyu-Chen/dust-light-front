<template>
  <el-page-header @back="goBack" content="Publish order">
  </el-page-header>
  <el-divider></el-divider>
  <el-card class="box-card">
  <template #header>
    <div class="card-header">
      <a-select
        show-search
        placeholder="Select a person"
        option-filter-prop="children"
        style="width: 100%"
        :filter-option="filterOption"
        @focus="handleFocus"
        @blur="handleBlur"
        @change="handleChange"
      >
      <a-select-option value="jack">
        Jack
      </a-select-option>
      <a-select-option value="lucy">
        Lucy
      </a-select-option>
      <a-select-option value="tom">
        Tom
      </a-select-option>
    </a-select>
    </div>
  </template>
  <div v-for="o in 4" :key="o" class="text item">
    {{'列表内容 ' + o }}
  </div>
</el-card>
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
.card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .text {
    font-size: .14rem;
  }

  .item {
    margin-bottom: .18rem;
  }

  .box-card {
    width: 100%;
    padding: 0 0.1rem 0 0.1rem;
    margin-top: -.2rem;
  }
</style>
