<template>
  <div class="wrapper">
    <img class="wrapper__img" src="https://gitee.com/sevensound/pic-cloud/raw/master/user.gif"/>
    <div class="wrapper__input">
      <input class="wrapper__input__content" placeholder="Please enter phone number" />
    </div>
    <div class="wrapper__input">
      <input class="wrapper__input__content"  placeholder="Please enter Password" />
    </div>
    <div class="wrapper__login-button" @click="handleLogin">Login</div>
    <div class="wrapper__login-link">Quick Register</div>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'
export default {
  name: 'Login',
  setup () {
    const router = useRouter()
    const handleLogin = () => {
      localStorage.isLogin = true
      router.push({ name: 'Home' })
    }
    return { handleLogin }
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
    display: block;
    margin: 0 auto .4rem auto;
    width: 2rem;
    height: 2rem;
  }
  &__input {
    height: .48rem;
    margin: .25rem .4rem .16rem .4rem;
    padding: 0 .16rem;
    background: #F9F9F9;
    border: 1px solid rgba(0,0,0,0.10);
    border-radius: 6px;
    border-radius: 6px;
    &__content {
      line-height: .48rem;
      border: none;
      outline: none;
      width: 100%;
      background: none;
      font-size: .16rem;
      color: $content-notice-fontcolor;
      &::placeholder {
        color: $content-notice-fontcolor;
      }
    }
  }
  &__login-button {
    margin: .32rem .4rem .16rem .4rem;
    line-height: .48rem;
    background: #0091FF;
    box-shadow: 0 .04rem .08rem 0 rgba(0,145,255,0.32);
    border-radius: .04rem;
    border-radius: .04rem;
    color: #fff;
    font-size: .16rem;
    text-align: center;
  }
  &__login-link {
    text-align: center;
    font-size: .14rem;
    color: $content-notice-fontcolor;
  }
}
</style>
