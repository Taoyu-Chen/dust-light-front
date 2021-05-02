<template>
  <div class="wrapper">
    <img class="wrapper__img" :src="Logo"/>
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
        name="type"
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
import { post } from '../../utils/request'
import { Notify } from 'vant'
import Logo from '../../assets/dust_light_logo_v4.png'
// handle login logic
const useLoginEffect = () => {
  const router = useRouter()
  const state = reactive({
    username: '',
    password: '',
    type: ''
  })
  const handleLogin = async (values) => {
    try {
      const result = await post('/api/users/login', values)
      console.log(result)
      if (result?.errno === 0) {
        Notify({ type: 'success', message: 'You have successfully logged in!' })
        localStorage.isLogin = true
        const type = result.data.type
        localStorage.type = type
        if (type === 'Administer') {
          router.push({ name: 'AdminHome' })
        }
        if (type === 'Business People') {
          router.push({ name: 'BPHome' })
        }
        if (type === 'Freelancer Designer') {
          router.push({ name: 'FDHome' })
        }
      } else {
        Notify({ type: 'danger', message: 'You did not successfully logged in!' })
      }
    } catch (e) {
      Notify({ type: 'danger', message: `error is ${e.message}` })
    }
  }
  return { state, handleLogin }
}

const useToRegisterEffect = () => {
  const router = useRouter()
  const handleToRegisterClick = () => {
    router.push({ name: 'Register' })
  }
  return { handleToRegisterClick }
}

export default {
  name: 'Login',
  setup () {
    const columns = ['Administer', 'Business People', 'Freelancer Designer']
    const onConfirm = (type) => {
      state.type = type
      state.showPicker = false
    }

    const { state, handleLogin } = useLoginEffect()
    const { handleToRegisterClick } = useToRegisterEffect()

    return { state, handleLogin, handleToRegisterClick, columns, onConfirm, Logo }
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
