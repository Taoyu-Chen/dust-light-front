<template>
  <div class="wrapper">
    <img class="wrapper__img" :src="Logo"/>
    <van-form @submit="handleRegister">
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
      <van-field
        v-model="state.telephone"
        name="telephone"
        label="Telephone"
        placeholder="Please enter your telephone"
        :rules="[{ required: true, message: 'Telephone is required' }]"
      />
      <van-field
        v-model="state.email"
        name="email"
        label="Email"
        placeholder="Please enter your email"
        :rules="[{ required: true, message: 'Email is required' }]"
      />
      <van-field
        v-model="state.personalSignature"
        name="personalSignature"
        label="Personal Signature"
        placeholder="Please enter your personal signature"
      />
      <div style="margin: 20px 15px;">
        <van-button round block type="primary" native-type="submit" size="large">
          Register
        </van-button>
      </div>
    </van-form>
    <div class="wrapper__register-link" >Already have an account to log in</div>
  </div>
</template>

<script>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import { post } from '../../utils/request'
import { Notify } from 'vant'
import Logo from '../../assets/dust_light_logo_v4.png'

const useRegisterEffect = () => {
  const router = useRouter()
  const state = reactive({
    username: '',
    password: '',
    type: '',
    telephone: '',
    personalSignature: ''
  })
  const handleRegister = async (values) => {
    try {
      const result = await post('/api/users/register', values)
      if (result?.errno === 0) {
        Notify({ type: 'success', message: 'You have successfully register!' })
        router.push({ name: 'Login' })
      } else {
        Notify({ type: 'danger', message: 'You did not successfully register!' })
      }
    } catch (e) {
      Notify({ type: 'danger', message: `error is ${e.message}` })
    }
  }
  return { state, handleRegister }
}

const useToLoginEffect = () => {
  const router = useRouter()
  const handleToLoginClick = () => {
    router.push({ name: 'Login' })
  }
  return { handleToLoginClick }
}

export default {
  name: 'Register',
  setup () {
    const columns = ['Business People', 'Freelancer Designer']

    const { state, handleRegister } = useRegisterEffect()
    const { handleToLoginClick } = useToLoginEffect()
    const onConfirm = (type) => {
      state.type = type
      state.showPicker = false
    }

    return { state, handleRegister, handleToLoginClick, columns, onConfirm, Logo }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/variables.scss';
.wrapper {
  position: absolute;
  top: 57%;
  left: 0;
  right: 0;
  transform: translateY(-60%);
  &__img {
    width: 88%;
    height: 2rem;
    margin-bottom: .1rem;
  }
  &__register-link {
    text-align: center;
    font-size: .15rem;
    text-decoration: underline;
    color: $content-notice-fontcolor;
  }
}
</style>
