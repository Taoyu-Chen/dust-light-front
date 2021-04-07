<template>
  <van-pull-refresh v-model="state.refreshing" @refresh="onRefresh">
    <van-list
      v-model:loading="state.loading"
      :finished="state.finished"
      finished-text="Finished"
      @load="onLoad"
    >
      <card />
      <van-cell v-for="item in state.list" :key="item" :title="item" />
    </van-list>
  </van-pull-refresh>
</template>

<script>
import { reactive } from 'vue'
import Card from './Card.vue'

export default {
  components: { Card },
  setup () {
    const state = reactive({
      list: [],
      loading: false,
      finished: false,
      refreshing: false
    })

    const onLoad = () => {
      setTimeout(() => {
        if (state.refreshing) {
          state.list = []
          state.refreshing = false
        }

        for (let i = 0; i < 10; i++) {
          state.list.push(state.list.length + 1)
        }
        state.loading = false

        if (state.list.length >= 40) {
          state.finished = true
        }
      }, 1000)
    }

    const onRefresh = () => {
      state.finished = false
      state.loading = true
      onLoad()
    }

    return {
      state,
      onLoad,
      onRefresh
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
