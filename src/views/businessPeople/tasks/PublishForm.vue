<template>
  <a-form
    ref="ruleForm"
    :model="form"
    :rules="rules"
    :label-col="labelCol"
    :wrapper-col="wrapperCol"
  >
    <el-card class="box-card">
        <div class="card-header">
          <a-form-item label="Warning" validate-status="warning">
            <a-input id="warning" placeholder="Warning" />
          </a-form-item>
          <a-form-item ref="name" label="" name="name">
            <a-input v-model:value="form.name" />
          </a-form-item>
          <a-form-item label="Tasktype" name="type">
            <a-select v-model:value="form.type" placeholder="please select your task type">
              <a-select-option value="logo">
                Logo design
              </a-select-option>
              <a-select-option value="poster">
                Poster Design
              </a-select-option>
              <a-select-option value="h5">
                H5 design
              </a-select-option>
              <a-select-option value="interact">
                Interaction design
              </a-select-option>
            </a-select>
          </a-form-item>
        </div>
      <div v-for="o in 4" :key="o" class="text item">
        {{'列表内容 ' + o }}
      </div>
    </el-card>

    <a-form-item label="Bid deadline" required name="date">
      <a-date-picker
        v-model:value="form.date"
        show-time
        type="date"
        placeholder="Pick a bid deadline"
        style="width: 100%;"
      />
    </a-form-item>
    <a-form-item label="Restricted area" name="restrict">
      <a-switch v-model:checked="form.restrict" />
    </a-form-item>
    <a-form-item label="Integrity guarantee" name="guarantee">
      <a-checkbox-group v-model:value="form.guarantee">
        <a-checkbox value="1" name="guarantee">
          completion
        </a-checkbox>
        <a-checkbox value="2" name="guarantee">
          after sale
        </a-checkbox>
        <a-checkbox value="3" name="guarantee">
          original
        </a-checkbox>
      </a-checkbox-group>
    </a-form-item>
    <a-form-item label="Upload file" name="upload">
      <a-upload
        v-model:fileList="fileList"
        name="file"
        :multiple="true"
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        :headers="headers"
        @change="handleChange"
      >
        <a-button> <upload-outlined /> Click to Upload </a-button>
      </a-upload>
    </a-form-item>
    <a-form-item label="Task details" name="desc">
      <a-textarea v-model:value="form.desc" />
    </a-form-item>
    <a-form-item :wrapper-col="{ span: 14, offset: 4 }">
      <a-button type="primary" @click="onSubmit">
        Create
      </a-button>
      <a-button style="margin-left: 10px;" @click="resetForm">
        Reset
      </a-button>
    </a-form-item>
  </a-form>
</template>
<script>
export default {
  data () {
    return {
      labelCol: { span: 4 },
      wrapperCol: { span: 14 },
      other: '',
      form: {
        name: '',
        type: undefined,
        date: undefined,
        restrict: false,
        guarantee: [],
        desc: ''
      },
      rules: {
        name: [
          { required: true, message: 'Please input Task name', trigger: 'blur' },
          { min: 5, max: 20, message: 'Length should be 5 to 20', trigger: 'blur' }
        ],
        type: [{ required: true, message: 'Please select Task type', trigger: 'change' }],
        date1: [
          { required: true, message: 'Please pick a bid deadline', trigger: 'change', type: 'object' }
        ],
        guarantee: [
          {
            type: 'array',
            required: true,
            message: 'Please select at guarantee type',
            trigger: 'change'
          }
        ],
        desc: [{ required: true, message: 'Please input task detail form', trigger: 'blur' }]
      }
    }
  },
  methods: {
    onSubmit () {
      this.$refs.ruleForm
        .validate()
        .then(() => {
          console.log('values', this.form)
        })
        .catch(error => {
          console.log('error', error)
        })
    },
    resetForm () {
      this.$refs.ruleForm.resetFields()
    }
  }
}
</script>

<style lang="scss" scoped>
  .card-header {
  }

  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .box-card {
    width: 100%;
    padding: 0 0.1rem 0 0.1rem;
    margin-top: -.2rem;
  }
</style>
