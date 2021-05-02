<template>
  <van-swipe-cell>
    <div
      v-for="item in list"
      :key="item._id"
    >
      <van-cell :border="true" :title="item.username">
        <van-button type="danger" size="mini" @click="onDeleteUser(item._id)" round>Delete</van-button>&nbsp;
        <van-button v-if="item.isLock===false" type="warning" size="mini" @click="onLockUser(item._id)" round>Lock</van-button>
        <van-button v-if="item.isLock===true" type="success" size="mini" @click="onUnlockUser(item._id)" round>Unlock</van-button>
      </van-cell>
    </div>
  </van-swipe-cell>
</template>

<script>
import { reactive, toRefs, watchEffect } from 'vue'
import { get, del } from '../../../utils/request'
import { useRouter } from 'vue-router'
import { Notify } from 'vant'
// Logic related to the business people user list
const useBPListEffect = () => {
  const content = reactive({ list: [] })
  const getContentData = async () => {
    const result = await get('/api/users/bp')
    if (result?.errno === 0) {
      content.list = result.data
    }
    console.log(result.data)
  }

  watchEffect(() => { getContentData() })
  const { list } = toRefs(content)
  return { list }
}

// logic about manage user
const useManageUserEffect = () => {
  const router = useRouter()
  const onDeleteUser = async (userId) => {
    const result = await del(`/api/users/${userId}`)
    console.log(result)
    if (result?.errno === 0) {
      router.go(0)
      Notify({ type: 'success', message: 'You have successfully delete a user!' })
    } else {
      Notify({ type: 'danger', message: 'You did not successfully delete a user' })
    }
  }
  const onLockUser = async (userId) => {
    const result = await get(`/api/users/lock/${userId}`)
    console.log(result)
    if (result?.errno === 0) {
      router.go(0)
      Notify({ type: 'success', message: 'You have successfully lock a user!' })
    } else {
      Notify({ type: 'danger', message: 'You did not successfully lock a user' })
    }
  }
  const onUnlockUser = async (userId) => {
    const result = await get(`/api/users/unlock/${userId}`)
    console.log(result)
    if (result?.errno === 0) {
      router.go(0)
      Notify({ type: 'success', message: 'You have successfully unlock a user!' })
    } else {
      Notify({ type: 'danger', message: 'You did not successfully unlock a user' })
    }
  }
  return { onDeleteUser, onUnlockUser, onLockUser }
}

export default {
  setup () {
    const { list } = useBPListEffect()
    const { onDeleteUser, onUnlockUser, onLockUser } = useManageUserEffect()
    return {
      list,
      onDeleteUser,
      onUnlockUser,
      onLockUser
    }
  }
}
</script>

<style>
  .goods-card {
    margin: 0;
    background-color: white;
  }

  .delete-button {
    height: 100%;
  }

  .warning-button {
    height: 100%;
  }
</style>
