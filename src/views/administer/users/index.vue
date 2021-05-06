<template>
  <Nav />
  <div class="wrapper">
    <van-tabs v-model:active="activeName" >
      <div class="gap"></div>
      <van-tab title="Business People" name="bp">
        <business-people-list />
      </van-tab>
      <van-tab title="Freelancer Designer" name="fd">
        <freelaner-designer-list />
      </van-tab>
    </van-tabs>
    <van-button class="logout-btn" type="primary" size="large" @click="onLogout" round>Logout</van-button>
  </div>
  <tabbar />
</template>

<script>
import Tabbar from '../Tabbar.vue'
import { ref } from 'vue'
import Nav from './Nav.vue'
import { get } from '../../../utils/request'
import BusinessPeopleList from './BusinessPeopleList.vue'
import FreelanerDesignerList from './FreelancerDesignerList.vue'
import { Notify } from 'vant'
import { useRouter } from 'vue-router'

const useLogoutEffect = () => {
  const router = useRouter()
  const onLogout = async () => {
    const result = await get('/api/users/logout')
    console.log(result)
    if (result?.errno === 0) {
      localStorage.clear()
      Notify({ type: 'danger', message: 'You have successfully logged out!' })
      router.push({ name: 'Login' })
    }
  }
  return { onLogout }
}

export default {
  components: {
    Tabbar,
    Nav,
    BusinessPeopleList,
    FreelanerDesignerList
  },
  name: 'ManageUsers',
  setup () {
    const activeName = ref('bp')
    const { onLogout } = useLogoutEffect()
    return { activeName, onLogout }
  }
}
</script>

<style lang="scss" scoped>
@import '../../../style/variables.scss';
  .gap {
    margin: 0 0rem;
    height: .02rem;
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
