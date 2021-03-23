<template>
  <van-search
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

</style>
