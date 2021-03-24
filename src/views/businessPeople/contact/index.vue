<template>
  <van-contact-card type="add" @click="onAdd" />

  <van-contact-card
    type="edit"
    :name="currentContact.name"
    :tel="currentContact.tel"
    @click="onEdit"
  />
  <tabbar />
</template>

<script>
import { reactive } from 'vue'
import { Toast } from 'vant'
import Tabbar from '../../businessPeople/Tabbar.vue'

export default {
  components: { Tabbar },
  setup () {
    const currentContact = reactive({
      name: '张三',
      tel: '13000000000'
    })
    const onAdd = () => Toast('新增')
    const onEdit = () => Toast('新增')
    return {
      onAdd,
      onEdit,
      currentContact
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
