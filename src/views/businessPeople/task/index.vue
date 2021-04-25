<template>
  <Header :name="'Task Page'"/>
  <div class="wrapper">
    <el-card class="box-card1 card">
      <div class="card-header">
        <p class="card__money">money</p>
        <p class="card__deadline">deadline</p>
      </div>
      <div class="card-body card__title">title</div>
      <div class="card-footer">
        <p class="card__type" >type</p>
        <p class="card__bp">bp user</p>
      </div>
    </el-card>
    <el-card class="box-card2">
      <p class="step__title">title</p>
      <step />
    </el-card>
    <div class="gap"></div>
    <el-card class="box-card2">
      <p>Title</p>
      <p>Detail</p>
    </el-card>
      <el-button type="primary" plain>主要按钮</el-button>
      <el-button type="primary" plain>主要按钮</el-button>
    </div>
  <tabbar />

</template>

<script>
import Tabbar from '../../businessPeople/Tabbar.vue'
import Header from '../../../components/Header.vue'
import Step from './Step'

export default {
  name: 'PublishTask',
  components: {
    Header,
    Tabbar,
    Step
  },
  steup () {

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
  .box-card1 {
    width: 98%;
    margin-left: 1%;
    margin-right: 1%;
    padding-top: 1%;
  }
  .box-card2 {
    padding-top: 1%;
  }
  .box-card3 {

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
    &__money {
      color: red;
    }
    &__dealine {

    }
    &__title {

    }
    &__type {

    }
    &__bp {

    }
  }
</style>
