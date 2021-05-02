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
      <van-button class="button" round type="primary" size="large" @click="toSubmitTask(task._id)">Submit</van-button>
    </div>
  <tabbar />
</template>

<script>
import { reactive, toRefs, watchEffect } from 'vue'
import Tabbar from '../../freelancerDesigner/Tabbar.vue'
import { get } from '../../../utils/request'
import Header from '../../../components/Header.vue'
import Step from './Step'
import { useRouter } from 'vue-router'
// import { Notify } from 'vant'

const useTaskEffect = () => {
  const content = reactive({ task: {} })
  console.log(content)
  const getContentData = async () => {
    const result = await get('/api/tasks/fd/task')
    console.log(result)
    if (result?.errno === 0) {
      content.task = result.data
    }
  }
  watchEffect(() => { getContentData() })

  const { task } = toRefs(content)
  return { task }
}
const useRouterEffect = () => {
  const router = useRouter()
  const toSubmitTask = (id) => {
    router.push({ path: `/fd/submit/${id}` })
  }
  return {
    toSubmitTask
  }
}
export default {
  components: {
    Header,
    Tabbar,
    Step
  },
  setup () {
    const { toSubmitTask } = useRouterEffect()
    const { task } = useTaskEffect()
    return { toSubmitTask, task }
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
    height: .01rem;
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
    margin-left: 2%;
    width: 96%;;
  }
</style>
