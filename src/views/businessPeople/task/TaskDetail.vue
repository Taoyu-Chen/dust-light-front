<template>
  <Header :name="'Task Page'"/>
  <div class="wrapper" />
    <div class="scroll">
    <el-card class="box-card1 card">
      <div class="card-header">
        <p class="card__money">
          <van-icon class="card__money__icon" name="balance-list-o" size="17" />
          <span class="card__money__number">{{task.budget}}$</span>
        </p>
        <p class="card__deadline">{{task.deadline}}</p>
      </div>
      <div class="card-body card__title">{{task.name}}</div>
      <div class="card-footer">
        <p class="card__type" >{{task.type}}</p>
        <p class="card__bp">Announcer: {{task.bpUsername}}</p>
      </div>
    </el-card>
    <el-card class="box-card2 card">
      <step :status="task.status" />
    </el-card>
    <div class="gap"></div>
    <el-card class="box-card3 card">
      <p>{{task.detail}}</p>
    </el-card>
    <van-swipe-cell v-if="task.status === 0">
      <div
        v-for="item in task.biddingList"
        :key="item._id"
      >
        <van-cell :border="true" :title="item.bidder_username">
        <van-button type="danger" size="small" round @click="onDeleteTaskFD(taskId, item.bidder_username)">Delete</van-button>&nbsp;&nbsp;&nbsp;
        <van-button type="primary" size="small" round @click="onSelectTaskFD(taskId, item.bidder_username)">Select</van-button>&nbsp;&nbsp;
      </van-cell>
      </div>
    </van-swipe-cell>
    <el-card v-if="task.status === 2 || task.status === 3" class="box-card2 card">
      <van-empty :description="task.work.uploader_description" class="card"/>
    </el-card>
    <van-button v-if="task.status === 0 || task.status === 1" class="button" round type="warning" size="large" @click="onCancelTask(taskId)">Cancel Task</van-button>
    <van-button v-if="task.status === 2" class="button" round type="primary" size="large" @click="onAcceptTask(taskId)">Accept Task</van-button>
    <van-button v-if="task.status === 2" class="button" round type="danger" size="large" @click="onReturnTask(taskId)">Return Task</van-button>
    </div>
  <tabbar />
</template>

<script>
import { reactive, toRefs, watchEffect } from 'vue'
import Tabbar from '../../businessPeople/Tabbar.vue'
import { get, post, del } from '../../../utils/request'
import Header from '../../../components/Header'
import Step from './Step'
import { useRoute, useRouter } from 'vue-router'
import { Notify } from 'vant'

// logic about get a task and cancel
const useTaskEffect = (taskId) => {
  const content = reactive({ task: {} })
  const getContentData = async () => {
    const result = await get(`/api/tasks/${taskId}`)
    if (result?.errno === 0) {
      content.task = result.data
    }
  }
  watchEffect(() => { getContentData() })

  const onCancelTask = async (taskId) => {
    const result = await get(`/api/tasks/bp/cancel/${taskId}`)
    if (result?.errno === 0) {
      content.task = result.data
    }
  }
  const { task } = toRefs(content)
  return { task, onCancelTask }
}

// logic about select and delete task bidder
const useBidderEffect = () => {
  const router = useRouter()
  const onSelectTaskFD = async (taskId, username) => {
    const bidder = {
      fdUsername: username
    }
    const result = await post(`/api/tasks/bp/selectFD/${taskId}`, bidder)
    if (result?.errno === 0) {
      router.go(0)
      Notify({ type: 'success', message: 'You have successfully bid this task!' })
    } else {
      Notify({ type: 'danger', message: 'You did not successfully bid for this task!' })
    }
  }
  const onDeleteTaskFD = async (taskId, username) => {
    const bidder = {
      fdUsername: username
    }
    console.log(bidder)
    const result = await del(`/api/tasks/bp/deleteFD/${taskId}`, bidder)
    console.log(result)
    if (result?.errno === 0) {
      Notify({ type: 'success', message: 'You have successfully delete this task!' })
    } else {
      Notify({ type: 'danger', message: 'You did not successfully delete for this task!' })
    }
  }
  return { onSelectTaskFD, onDeleteTaskFD }
}
// logic about accept and return task
const useHandleTaskEffect = () => {
  const router = useRouter()
  const onAcceptTask = async (taskId) => {
    const result = await get(`/api/tasks/bp/accept/${taskId}`)
    if (result?.errno === 0) {
      router.go(0)
      Notify({ type: 'success', message: 'You have successfully accept this work!' })
    } else {
      Notify({ type: 'danger', message: 'You did not successfully accept this work!' })
    }
  }
  const onReturnTask = async (taskId) => {
    const result = await get(`/api/tasks/bp/return/${taskId}`)
    console.log(result)
    if (result?.errno === 0) {
      router.go(0)
      Notify({ type: 'success', message: 'You have successfully return this work!' })
    } else {
      Notify({ type: 'danger', message: 'You did not successfully return this work!' })
    }
  }
  return { onAcceptTask, onReturnTask }
}

export default {
  components: {
    Header,
    Tabbar,
    Step
  },
  setup () {
    const route = useRoute()
    const taskId = route.params.id
    const { task, onCancelTask } = useTaskEffect(taskId)
    const { onSelectTaskFD, onDeleteTaskFD } = useBidderEffect()
    const { onAcceptTask, onReturnTask } = useHandleTaskEffect()
    return {
      taskId,
      task,
      onSelectTaskFD,
      onDeleteTaskFD,
      onCancelTask,
      onAcceptTask,
      onReturnTask
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../../../style/variables.scss';
  .wrapper {
    background-color: $docker-bgcolor;
    background-size: 100% 100%;
    height: 100%;
    position: fixed;
    width: 100%
  }
  .scroll {
    overflow-y: auto;
  }
  .box-card1 {
    width: 98%;
    margin-left: 1%;
    margin-right: 1%;
    padding-top: 1%;
  }
  .box-card2 {
    width: 100%;
    padding-top: 1%;
    padding-bottom: 1%;
  }
  .box-card3 {
    width: 100%;
    padding-bottom: 1%;
  }
  .card{
    &-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    &-footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
  .gap {
    margin: 0 0rem;
    height: .02rem;
    background: $content-bgcolor;
  }
  .el-header {
    background-color: #E9EEF3;
    text-align: center;
    line-height: .8rem;
  }
  .el-main {
    background-color: aliceblue;
    color: #333;
  }
  .el-button {
    width: 30%;
  }
  .card {
    position: relative;
    &__money {
      color: red;
      &__icon {
        padding-top: -.1rem;
      }
      &__number {
        padding-bottom: .2rem;
        font-size: .25rem;
      }
    }
    &__deadline {
      color: grey;
      font-size: .15rem;
    }
    &__title {
      margin-top: -.2rem;
      font-size: .3rem;
    }
    &__type {
      color: grey;
      font-size:.2rem;
    }
    &__bp {
      color: grey;
      font-size:.2rem;
    }
  }
  .button {
    margin-top: .1rem;
  }
</style>
