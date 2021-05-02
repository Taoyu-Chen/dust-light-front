<template>
  <div class="gap"></div>
  <van-search
    class="find"
    shape="round"
    v-model="value"
    placeholder="Enter search keywords"
  />
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'Search',
  setup () {
    const value = ref('')
    return { value }
  }
}
</script>

<style lang="scss" scoped>
  @import '../../../style/variables.scss';
  .gap {
    margin: 0 0rem;
    height: .03rem;
    background: $content-bgcolor;
  }
  .find {
    position: relative;
  }
</style>
