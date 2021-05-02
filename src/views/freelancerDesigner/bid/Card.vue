<template>
  <div
    v-for="item in list"
    :key="item._id"
  >
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span>{{item.name}}&nbsp;&nbsp;&nbsp;<van-tag type="success">Bidderable</van-tag></span>
          <div>
            <el-button class="button" size="mini" round type="primary" @click="bidTask(item._id)" plain>Bid</el-button>
          </div>
        </div>
      </template>
      <div class="text item">
        <p>budget:{{item.budget}}$</p>
        <p>deadline:{{item.deadline}}</p>
        <p>{{item.type}}</p>
      </div>
    </el-card>
  </div>
</template>

<script>
import { reactive, toRefs, watchEffect } from 'vue'
import { get } from '../../../utils/request'
import { Notify } from 'vant'

// Logic related to the biderable task list
const useTaskListEffect = () => {
  const content = reactive({ list: [] })
  const getContentData = async () => {
    const result = await get('/api/tasks/bid/list')
    if (result?.errno === 0) {
      content.list = result.data
    }
    console.log(result.data)
  }

  watchEffect(() => { getContentData() })
  const { list } = toRefs(content)
  return { list }
}

const useBidTaskEffect = () => {
  const bidTask = async (id) => {
    console.log(`/api/tasks/fd/bid/${id}`)
    const result = await get(`/api/tasks/fd/bid/${id}`)
    if (result?.errno === 0) {
      Notify({ type: 'success', message: 'You have successfully bid this task!' })
    } else {
      Notify({ type: 'danger', message: 'You did not successfully bid for this task!' })
    }
  }
  return { bidTask }
}

export default {
  setup () {
    const { list } = useTaskListEffect()
    const { bidTask } = useBidTaskEffect()
    return { list, bidTask }
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
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .box-card {
    margin-top: 1%;
    width: 100%;
  }
</style>
