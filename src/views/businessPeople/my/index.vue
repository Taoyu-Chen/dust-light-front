<template>
  <Nav />
  <div class="wrapper">
    <el-card class="box-card">
      <div class="user">
          <div class="user__info">
            <img class="user__img" src="https://gitee.com/sevensound/pic-cloud/raw/master/user_logo.png"/>
            <div class="user__desc">
              <span>Username：{{userInfo.username}}</span>
              <span>Email：{{userInfo.email}}</span>
              <span class="name">Telephone:{{userInfo.telephone}}</span>
            </div>
          </div>
        </div>
    </el-card>
    <div class="gap"></div>
    <div class="message">
      <van-cell title="History Task" @click="toHistoryTasks" >
        <van-icon name="arrow" />
      </van-cell>
      <van-cell title="Customer service hotline" >
        <van-icon name="arrow" />
      </van-cell>
      <van-cell title="Show ShareSheet" @click="showShare = true" >
        <van-icon name="arrow" />
      </van-cell>
      <van-cell title="About Me" @click="ToAboutMe" >
        <van-icon name="arrow" />
      </van-cell>
      <van-share-sheet
        v-model:show="showShare"
        title="Share"
        :options="options"
        @select="onSelect"
      />
    </div>
    <van-button class="logout-btn" type="primary" size="large" @click="onLogout" round>Logout</van-button>
  </div>
  <tabbar />
</template>

<script>
import { ref, reactive, toRefs, watchEffect } from 'vue'
import { get } from '../../../utils/request'
import Tabbar from '../Tabbar.vue'
import Nav from './Nav'
import { useRouter } from 'vue-router'
import { Notify } from 'vant'

const useUserInfoEffect = () => {
  const router = useRouter()
  const content = reactive({ userInfo: {} })
  const getContentData = async () => {
    const result = await get('/api/users/user_info')
    console.log(result)
    if (result?.errno === 0) {
      content.userInfo = result.data
    }
  }
  const onLogout = async () => {
    const result = await get('/api/users/logout')
    console.log(result)
    if (result?.errno === 0) {
      Notify({ type: 'danger', message: 'You have successfully logged out!' })
      localStorage.clear()
      router.push({ name: 'Login' })
    }
  }
  watchEffect(() => { getContentData() })
  const { userInfo } = toRefs(content)
  console.log(userInfo)
  return { userInfo, onLogout }
}

const useRouterEffect = () => {
  const router = useRouter()
  const ToAboutMe = () => {
    router.push({ name: 'AboutMe' })
  }
  const toHistoryTasks = () => {
    router.push({ path: '/bp/history_task' })
  }
  return {
    ToAboutMe,
    toHistoryTasks
  }
}

export default {
  components: { Tabbar, Nav },
  setup () {
    const showShare = ref(false)
    const options = [
      [
        { name: 'Wechat', icon: 'wechat' },
        { name: 'Wechat Moments', icon: 'wechat-moments' },
        { name: 'Weibo', icon: 'weibo' },
        { name: 'QQ', icon: 'qq' }
      ],
      [
        { name: 'Link', icon: 'link' },
        { name: 'Poster', icon: 'poster' },
        { name: 'Qrcode', icon: 'qrcode' },
        { name: 'Weapp Qrcode', icon: 'weapp-qrcode' }
      ]
    ]
    const { ToAboutMe, toHistoryTasks } = useRouterEffect()
    const { userInfo, onLogout } = useUserInfoEffect()
    return {
      userInfo,
      options,
      showShare,
      ToAboutMe,
      onLogout,
      toHistoryTasks
    }
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
  .logout-btn {
    margin-top: .2rem;
    margin-left: 2%;
    width: 96%;
  }
</style>
