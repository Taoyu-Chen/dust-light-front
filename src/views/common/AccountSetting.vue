<template>
  <div class="seting-box">
    <Header :name="'Account Setting'"/>
    <div class="input-item">
      <van-field v-model="nickName" label="昵称" />
      <van-field v-model="introduceSign" label="个性签名" />
      <van-field v-model="password" type='password' label="修改密码" />
    </div>
    <van-button round class="save-btn" color="#1baeae" type="primary" @click="save" block>保存</van-button>
    <van-button round class="save-btn" color="#1baeae" type="primary" @click="handleLogout" block>退出登录</van-button>
  </div>
</template>

<script>
import { reactive, onMounted, toRefs } from 'vue'
import Header from '../../components/Header'
export default {
  name: 'AccountSetting',
  components: {
    Header
  },
  setup () {
    const state = reactive({
      username: '',
      personalSignature: '',
      password: ''
    })

    onMounted(async () => {
    })

    const save = async () => {
    }

    const handleLogout = async () => {
    }

    return {
      ...toRefs(state),
      save,
      handleLogout
    }
  }
}
</script>

<style lang="scss" scoped>
  .seting-box {
    .save-btn {
      width: 80%;
      margin: 20px auto ;
    }
  }
</style>
