<template>
  <a-form layout="" :model="formInline" @submit="handleSubmit" @submit.prevent>
    <a-form-item label="Username">
      <a-input  v-model:value="formInline.user" placeholder="Username">
        <template #prefix><UserOutlined style="color:rgba(0,0,0,.25)"/></template>
      </a-input>
    </a-form-item>
    <a-form-item label="Password">
      <a-input v-model:value="formInline.password" type="password" placeholder="Password">
        <template #prefix><LockOutlined style="color:rgba(0,0,0,.25)"/></template>
      </a-input>
    </a-form-item>
    <a-form-item label="Login type">
      <a-checkbox-group v-model="formInline.type">
        <a-checkbox value="1" name="type">
          Administer
        </a-checkbox>
        <a-checkbox value="2" name="type">
          Business People
        </a-checkbox>
        <a-checkbox value="3" name="type">
          Freelancer Designer
        </a-checkbox>
      </a-checkbox-group>
    </a-form-item>
    <a-form-item>
      <a-button
        type="primary"
        html-type="submit"
        :disabled="formInline.user === '20091612' || formInline.password === '123456'"
      >
        Log in
      </a-button>
    </a-form-item>
  </a-form>
</template>
<script>
import { UserOutlined, LockOutlined } from '@ant-design/icons-vue'

export default {
  components: {
    UserOutlined,
    LockOutlined
  },
  data () {
    return {
      formInline: {
        user: '',
        password: '',
        type: ''
      }
    }
  },
  methods: {
    handleSubmit (e) {
      console.log(this.formInline)
    }
  }
}
</script>
