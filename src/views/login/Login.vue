<template>
  <div class="wrapper">
    <img class="wrapper__img" src="https://gitee.com/sevensound/pic-cloud/raw/master/dust_light_logo_v4.png"/>
    <van-form @submit="handleLogin">
      <van-field
        v-model="state.username"
        name="username"
        label="Username"
        placeholder="username"
        :rules="[{ required: true, message: 'Username is required' }]"
      />
      <van-field
        v-model="state.password"
        type="password"
        name="password"
        label="Password"
        placeholder="password"
        :rules="[{ required: true, message: 'Password is required' }]"
      />
      <van-field
        v-model="state.type"
        readonly
        clickable
        name="usertype"
        label="User type"
        placeholder="Select user type"
        @click="state.showPicker = true"
        :rules="[{ required: true, message: 'User type is required' }]"
      />
      <van-popup v-model:show="state.showPicker" position="bottom">
        <van-picker
          :columns="columns"
          @confirm="onConfirm"
          @cancel="state.showPicker = false"
        />
      </van-popup>
      <div style="margin: 20px 15px;">
        <van-button round block type="primary" native-type="submit" size="large">
          Login
        </van-button>
      </div>
    </van-form>
    <div class="wrapper__login-link" @click="handleToRegisterClick">Quick Register</div>
  </div>
</template>

<script>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
export default {
  name: 'Login',
  setup () {
    const router = useRouter()
    const state = reactive({
      username: '',
      password: '',
      type: ''
    })

    const columns = ['Administer', 'Business People', 'Freelancer Designer']

    const handleLogin = (values) => {
      console.log('submit', values)
      localStorage.isLogin = true
      router.push({ name: 'Home' })
    }

    const onConfirm = (type) => {
      state.type = type
      state.showPicker = false
    }

    const handleToRegisterClick = () => {
      router.push({ name: 'Register' })
    }
    return { state, handleLogin, handleToRegisterClick, columns, onConfirm }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/variables.scss';
.wrapper {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  transform: translateY(-60%);
  &__img {
    width: 88%;
    height: 2rem;
    margin-bottom: .4rem;
  }
  &__login-link {
    text-align: center;
    font-size: .15rem;
    text-decoration: underline;
    color: $content-notice-fontcolor;
  }
}
</style>
