<template>
<Header :name="'Publish Task'"/>
<div class="wrapper">
    <el-card class="box-card">
  <van-form @submit="onSubmit">
    <van-index-bar :index-list="indexList">
      <van-index-anchor
        index="bi"
        style="text-align: center"
      >
        Basic Information
      </van-index-anchor>
      <van-field
        v-model="state.name"
        name="Task name"
        label="Task name"
        placeholder="Please enter task name"
        :rules="[{ required: true, message: 'Task name is required' }]"
      />
      <van-field
        v-model="state.budget"
        name="Task budget"
        label="Task budget"
        placeholder="Please enter task budget"
        :rules="[{ required: true, message: 'Task budget is required' }]"
      />
      <van-field
        v-model="state.type"
        readonly
        clickable
        name="tasktype"
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
        name="Deadline"
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
      <van-field name="stepper" label="Bid Number">
        <template #input>
          <van-stepper v-model="bidNumber" />
        </template>
      </van-field>
      <van-field name="uploader" label="Uploader">
        <template #input>
          <van-uploader v-model="uploadFile" />
        </template>
      </van-field>
      <van-index-anchor index="" />
      <van-field
        v-model="state.detail"
        rows="2"
        autosize
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
export default {
  name: 'PublishTask',
  components: {
    Header
  },
  setup () {
    const indexList = [' ', ' ']
    const columns = ['Logo Design', 'Poster Design', 'H5 Design', 'Interaction Design']
    const state = reactive({
      name: '',
      budget: '',
      type: '',
      deadline: '',
      bidNumber: 1,
      uploadFile: '',
      detail: ''
    })
    const onSubmit = (values) => {
      console.log('submit', values)
    }
    const onConfirm = (type) => {
      state.type = type
      state.showPicker = false
    }
    const onDeadlineConfirm = (date) => {
      state.deadline = `${date.getMonth() + 1}/${date.getDate()}`
      state.showCalendar = false
    }
    return {
      state,
      onSubmit,
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
