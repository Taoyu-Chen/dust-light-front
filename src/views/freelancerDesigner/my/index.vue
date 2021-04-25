<template>
  <Nav />
  <div class="wrapper">
    <el-card class="box-card">
      <div class="user">
          <div class="user__info">
            <img class="user__img" src="https://gitee.com/sevensound/pic-cloud/raw/master/user_logo.png"/>
            <div class="user__desc">
              <span>Username：</span>
              <span>Email：</span>
              <span class="name">Telephone:</span>
            </div>
          </div>
        </div>
    </el-card>
    <div class="gap"></div>
    <div class="message">
      <share />
    </div>

  </div>
  <tabbar />
</template>

<script>

import Tabbar from '../Tabbar.vue'
import Nav from './Nav'
import Share from './Share.vue'
export default {
  components: { Tabbar, Nav, Share },
  setup () {

  }
}
</script>

<style lang="scss" scoped>
@import '../../../style/variables.scss';
  .user {
    &__info {
      width: 94%;
      margin: 10px;
      height: .8rem;
      display: flex;
    }
    &__img {
      margin-top: .07rem;
      width: .8rem;
      height: .8rem;
      border-radius: 50%;
    }
    &__desc {
      display: flex;
      flex-direction: column;
      margin-left: .2rem;
      line-height: .3rem;
      font-size: 14px;
      color: black;
    }
  }
  .box-card {
    width: 98%;
    margin-left: 1%;
    margin-right: 1%;
    padding-top: 1%;
  }

  .gap {
    margin: 0 0rem;
    height: .12rem;
    background: $content-bgcolor;
  }
  .wrapper {
    overflow-y: auto;
    position: absolute;
    left: 0;
    top: .5rem;
    bottom: .5rem;
    right: 0;
    background: $wrapper-fontcolor;
  }
</style>
