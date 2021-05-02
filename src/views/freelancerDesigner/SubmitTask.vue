<template>
<Header :name="'Publish Task'"/>
<div class="wrapper" />
    <el-card class="box-card card">
  <van-form @submit="handleSubmitTask">
    <van-index-bar :index-list="indexList">
      <van-index-anchor
        index="bi"
        style="text-align: center"
      >
        Please submit what you did
      </van-index-anchor>
      <van-field name="uploader" label="Uploader">
        <template #input>
          <van-uploader v-model="uploader" />
        </template>
      </van-field>
      <van-index-anchor index="" />
      <van-field
        v-model="state.description"
        rows="2"
        autosize
        name="description"
        label="Description"
        type="textarea"
        maxlength="300"
        placeholder="Please enter description of your work"
        :rules="[{ required: true, message: 'Description is required' }]"
        show-word-limit
      />
      <div style="margin: 16px;">
        <van-button round block type="primary" native-type="submit">
          Submit
        </van-button>
      </div>
    </van-index-bar>
  </van-form>
  </el-card>
  <tabbar />
</template>

<script>
import { reactive } from 'vue'
import Header from '../../components/Header'
import { Notify } from 'vant'
import { post } from '../../utils/request'
import { useRoute } from 'vue-router'
import Tabbar from './Tabbar'
// handle publish task logic
const useTaskEffect = () => {
  const route = useRoute()
  const taskId = route.params.id
  const state = reactive({
    description: ''
  })
  const handleSubmitTask = async (values) => {
    console.log(values)
    console.log(`api/tasks/fd/submit/${taskId}`)
    try {
      const description = {
        description: values.description
      }
      console.log(description)
      const result = await post(`api/tasks/fd/submit/${taskId}`, description)
      if (result?.errno === 0) {
        console.log(result)
        Notify({ type: 'success', message: 'Upload your work has been successful' })
      } else {
        console.log('xxx')
      }
    } catch (e) {
      console.log('xxx')
    }
  }
  return { state, handleSubmitTask }
}
export default {
  name: 'PublishTask',
  components: {
    Header,
    Tabbar
  },
  setup () {
    const indexList = [' ', ' ']

    const { state, handleSubmitTask } = useTaskEffect()
    return {
      state,
      handleSubmitTask,
      indexList
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../../style/variables.scss';
  .wrapper {
    background-color: $docker-bgcolor;
    background-size: 100% 100%;
    height: 100%;
    position: fixed;
    width: 100%
  }
  .box-card {
    width: 98%;
    margin-left: 1%;
    margin-right: 1%;
    padding-top: 1%;
  }
  .card {
    position: relative;
  }
</style>
