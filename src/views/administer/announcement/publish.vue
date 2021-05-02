<template>
  <van-notice-bar scrollable color="#1989fa" background="#ecf9ff" left-icon="info-o">
    Please follow the Dust Light application announcement specification!
  </van-notice-bar>
  <el-card class="box-card">
    <van-form @submit="handlePublishAnnouncement">
      <van-field
        v-model="state.title"
        name="title"
        placeholder="Please enter announcement title"
        :rules="[{ required: true, message: 'Please enter announcement title' }]"
      />
      <van-field
        v-model="state.type"
        readonly
        clickable
        name="type"
        placeholder="Select announcement type"
        @click="showPicker = true"
      />
      <van-popup v-model:show="showPicker" position="bottom">
        <van-picker
          :columns="columns"
          @confirm="onConfirm"
          @cancel="showPicker = false"
        />
      </van-popup>
      <van-field
        v-model="state.text"
        rows="2"
        autosize
        name="text"
        type="textarea"
        maxlength="500"
        placeholder="Dear Dust Light users:
Hello, due to temporary upgrade and maintenance, it may affect the XX function in XX.
In order to avoid abnormal data, please try to log in to the application at XX time to experience it.
Please forgive me for the inconvenience caused to you, and at the same time, please continue to support our XX application, thank you!"
        show-word-limit
      />
      <div style="margin: 16px;">
        <van-button round block type="primary" native-type="submit">
          Submit
        </van-button>
      </div>
    </van-form>
  </el-card>
</template>

<script>
import { ref, reactive } from 'vue'
import { post } from '../../../utils/request'
import { Notify } from 'vant'

// Logic related to the publish announcement
const usePublishAnnounancetEffect = () => {
  const state = reactive({
    title: '',
    type: '',
    text: ''
  })
  const handlePublishAnnouncement = async (values) => {
    try {
      const result = await post('/api/announcements', values)
      if (result?.errno === 0) {
        Notify({ type: 'success', message: 'Successful announcement' })
      } else {
        Notify({ type: 'danger', message: 'Unsuccessful announcement' })
      }
    } catch (e) {
      Notify({ type: 'danger', message: `error is ${e.message}` })
    }
  }
  return { state, handlePublishAnnouncement }
}

export default {
  setup () {
    const showPicker = ref(false)
    const columns = ['beta', 'stable', 'maintain']
    const onConfirm = (value) => {
      state.type = value
      showPicker.value = false
    }
    const { state, handlePublishAnnouncement } = usePublishAnnounancetEffect()
    return {
      state,
      showPicker,
      columns,
      onConfirm,
      handlePublishAnnouncement
    }
  }
}
</script>

<style lang="scss" scoped>
  .box-card {
    width: 98%;
    margin-left: 1%;
    margin-right: 1%;
    padding-top: 1%;
  }
</style>
