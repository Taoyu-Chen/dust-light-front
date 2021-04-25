<template>
  <Header :name="'Contact Book'" />
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
import Header from '../../../components/Header'
import { useRouter } from 'vue-router'

export default {
  name: 'FDContact',
  components: {
    Tabbar,
    Header
  },
  setup () {
    const router = useRouter()
    const currentContact = reactive({
      name: 'Zhangsan',
      tel: '13000000000'
    })
    const onAdd = () => router.push({ path: '/fd/contact/add' })
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
