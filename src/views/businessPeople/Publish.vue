<template>
<Header :name="'Publish Task'"/>
<div class="wrapper">
    <el-card class="box-card">
  <van-form @submit="handlePublishTask">
    <van-index-bar :index-list="indexList">
      <van-index-anchor
        index="bi"
        style="text-align: center"
      >
        Basic Information
      </van-index-anchor>
      <van-field
        v-model="state.name"
        name="name"
        label="Task name"
        placeholder="Please enter task name"
        :rules="[{ required: true, message: 'Task name is required' }]"
      />
      <van-field
        v-model="state.budget"
        name="budget"
        label="Task budget"
        placeholder="Please enter task budget"
        :rules="[{ required: true, message: 'Task budget is required' }]"
      />
      <van-field
        v-model="state.type"
        readonly
        clickable
        name="type"
        label="Task type"
        placeholder="Select task type"
        @click="state.showPicker = true"
        :rules="[{ required: true, message: 'Task type is required' }]"
      />
      <van-popup v-model:show="state.showPicker" position="bottom">
        <van-picker
          :columns="columns"
          @confirm="onConfirm"
          @cancel="state.showPicker = false"
        />
      </van-popup>
      <van-field
        v-model="state.deadline"
        readonly
        clickable
        name="deadline"
        label="Deadline"
        placeholder="Select task deadline"
        @click="state.showCalendar = true"
        :rules="[{ required: true, message: 'Deadline is required' }]"
      />
      <van-calendar v-model:show="state.showCalendar" @confirm="onDeadlineConfirm" />
      <van-index-anchor
        index="bi"
        style="text-align: center"
      >
        Supplement Information
      </van-index-anchor>
      <van-field name="bidNumber" label="Bid Number">
        <template #input>
          <van-stepper v-model="bidNumber" />
        </template>
      </van-field>
      <van-field name="uploader" label="Uploader">
        <template #input>
          <van-uploader v-model="uploader" />
        </template>
      </van-field>
      <van-index-anchor index="" />
      <van-field
        v-model="state.detail"
        rows="2"
        autosize
        name="detail"
        label="Detail"
        type="textarea"
        maxlength="200"
        placeholder="Please enter a detailed description of the project"
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
</div>
</template>

<script>
import { reactive } from 'vue'
import Header from '../../components/Header'
import { post } from '../../utils/request'
import { Notify } from 'vant'
// handle publish task logic
const useTaskEffect = () => {
  const state = reactive({
    name: '',
    budget: '',
    type: '',
    deadline: '',
    bidNumber: 1,
    uploader: '',
    detail: ''
  })
  const handlePublishTask = async (values) => {
    try {
      const result = await post('/api/tasks/create', values)
      if (result?.errno === 0) {
        Notify({ type: 'success', message: 'You have successfully publish a task!' })
      } else {
        Notify({ type: 'danger', message: 'You did not successfully publish a task!' })
      }
    } catch (e) {
      Notify({ type: 'danger', message: `error is ${e.message}` })
    }
  }
  return { state, handlePublishTask }
}
export default {
  name: 'PublishTask',
  components: {
    Header
  },
  setup () {
    const indexList = [' ', ' ']
    const columns = ['Logo Design', 'Poster Design', 'H5 Design', 'Interaction Design']

    const onConfirm = (type) => {
      state.type = type
      state.showPicker = false
    }

    const onDeadlineConfirm = (date) => {
      state.deadline = `2021-${date.getMonth() + 1}-${date.getDate()}`
      state.showCalendar = false
    }
    const { state, handlePublishTask } = useTaskEffect()
    return {
      state,
      handlePublishTask,
      indexList,
      columns,
      onConfirm,
      onDeadlineConfirm
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../../style/variables.scss';
  .wrapper {
    background-color: $docker-bgcolor;
  }
  .box-card {
    width: 98%;
    margin-left: 1%;
    margin-right: 1%;
    padding-top: 1%;
  }
</style>
