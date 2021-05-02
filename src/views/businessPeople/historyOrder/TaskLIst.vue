<template>
  <van-pull-refresh v-model="state.refreshing" @refresh="onRefresh">
    <van-list
      v-model:loading="state.loading"
      :finished="state.finished"
      finished-text="Finished"
      @load="onLoad"
    >
    <div
      v-for="item in list"
      :key="item._id"
    >
      <a-card @click="toTaskDetail(item._id)" size="small" :title="item.name" style="margin: 1% 1%;width: 98%">
        <template #extra>
          <van-button type="danger" size="small" @click="onCancel" round>Cancel</van-button>
        </template>
        <div class="item">
          <p>
            <span v-if="item.status===0">Bidding</span>
            <span v-if="item.status===1">Selected</span>
            <span v-if="item.status===2">Contributed</span>
            <span v-if="item.status===3">Finished</span>
          </p>
          <p>Bidder: <span v-if="item.fdUsername===''"> </span>{{item.fdUsername}}</p>
          <p>{{item.type}}</p>
        </div>
      </a-card>
    </div>
    </van-list>
  </van-pull-refresh>
</template>

<script>
import { reactive, toRefs, watchEffect } from 'vue'
import { get } from '../../../utils/request'
import { Dialog } from 'vant'
import { useRouter } from 'vue-router'
// import { Notify } from 'vant'

const useRouterEffect = () => {
  const router = useRouter()

  const toTaskDetail = (id) => {
    router.push({ path: `/bp/task/${id}` })
  }
  return {
    toTaskDetail
  }
}

// Logic related to the biderable task list
const useBPTaskListEffect = () => {
  const content = reactive({ list: [] })
  const getContentData = async () => {
    const result = await get('/api/tasks/bp/lists')
    if (result?.errno === 0) {
      content.list = result.data
    }
  }

  watchEffect(() => { getContentData() })
  const { list } = toRefs(content)
  return { list }
}

export default {
  setup () {
    const state = reactive({
      list: [],
      loading: false,
      finished: false,
      refreshing: false
    })

    const onCancel = () => {
      Dialog.confirm({
        title: 'Warning',
        message: 'Canceled tasks cannot be rolled back, please proceed with caution!'
      })
        .then(() => {
          // on confirm
        })
        .catch(() => {
          // on cancel
        })
    }

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
    const { toTaskDetail } = useRouterEffect()
    const { list } = useBPTaskListEffect()
    return {
      state,
      onLoad,
      onRefresh,
      onCancel,
      toTaskDetail,
      list
    }
  }
}
</script>

<style lang="scss" scoped>
  .item {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>
