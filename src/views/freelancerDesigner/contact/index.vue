<template>
  <Nav />
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
import Tabbar from '../Tabbar.vue'
import Nav from './Nav'

export default {
  name: 'FDContact',
  components: {
    Tabbar,
    Nav
  },
  setup () {
    const currentContact = reactive({
      name: 'Zhangsan',
      tel: '13000000000'
    })
    const onAdd = () => Toast('Add')
    const onEdit = () => Toast('Edit')
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
