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
      { text: 'Option2', value: 1 },
      { text: 'Option3', value: 2 }
    ]
    const option2 = [
      { text: 'Default Sort', value: 'a' },
      { text: 'Option B', value: 'b' },
      { text: 'Option C', value: 'c' }
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
