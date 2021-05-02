<template>
  <Header :name="'Task Page'"/>
  <div class="wrapper" />
    <div class="scroll">
      <el-card class="box-card1 card">
        <div class="card-header">
          <p class="card__money">
            <van-icon class="card__money__icon" name="balance-list-o" size="17" />
            <span class="card__money__number">138$</span>
          </p>
          <p class="card__deadline">2021-5-28</p>
        </div>
        <div class="card-body card__title">Computer brand design</div>
        <div class="card-footer">
          <p class="card__type" >Logo Design</p>
          <p class="card__bp">Announcer: Zephania</p>
        </div>
      </el-card>

      <el-card class="box-card2 card">
        <step :status="1"/>
      </el-card>
      <div class="gap"></div>
      <el-card class="box-card3 card">
        <p>HP is a technology company headquartered in California, USA. It was founded in 1939. HP's business is very extensive, but its most famous products are computers, especially notebooks.</p>
      </el-card>
      <van-button class="button" round type="primary" size="large" @click="toSubmitTask"><p>{{text}}</p></van-button>
    </div>
  <tabbar />
</template>

<script>
import Tabbar from '../../freelancerDesigner/Tabbar.vue'
import Header from '../../../components/Header.vue'
import Step from './Step'
import { useRouter } from 'vue-router'

const useRouterEffect = () => {
  const router = useRouter()
  const toSubmitTask = () => {
    router.push({ name: 'SubmitTask' })
  }
  return {
    toSubmitTask
  }
}

export default {
  name: 'FDTask',
  components: {
    Header,
    Tabbar,
    Step
  },
  steup () {
    const text = 'Hello'
    const { toSubmitTask } = useRouterEffect()
    const submit = 'Submit'
    return {
      text,
      toSubmitTask,
      submit
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
