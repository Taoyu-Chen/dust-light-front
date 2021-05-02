<template>
  <van-dropdown-menu>
    <van-dropdown-item v-model="state.value1" :options="option1" />
    <van-dropdown-item v-model="state.value2" :options="option2" />
  </van-dropdown-menu>
</template>

<script>
import { reactive } from 'vue'

export default {
  name: 'DropdownMenu',
  setup () {
    const state = reactive({
      value1: 0,
      value2: 'a'
    })
    const option1 = [
      { text: 'All', value: 0 },
      { text: 'Poster Design', value: 1 },
      { text: 'Icon Design', value: 2 },
      { text: 'UI Design', value: 3 },
      { text: 'Brochure Design', value: 4 }
    ]
    const option2 = [
      { text: 'Default Sort', value: 'a' },
      { text: 'Order', value: 'b' },
      { text: 'Reverse order', value: 'c' }
    ]

    return {
      state,
      option1,
      option2
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
