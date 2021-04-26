<template>
  <Header :name="'Contact Book'" />
  <van-contact-card type="add" @click="onAdd" />
  <div
    v-for="item in list"
    :key="item._id"
  >
    <van-contact-card
      type="edit"
      :name="item.contact_username"
      :tel="item.contact_telephone"
    />
  </div>
  <tabbar />
</template>

<script>
import { reactive, toRefs, watchEffect } from 'vue'
import Tabbar from '../Tabbar.vue'
import { get } from '../../../utils/request'
import Header from '../../../components/Header'
import { useRouter } from 'vue-router'

// Logic related to the contact list
const useContactListEffect = () => {
  const content = reactive({ list: [] })
  const getContentData = async () => {
    const result = await get('/api/contacts')
    console.log(result)
    if (result?.errno === 0) {
      content.list = result.data.contacts
    }
  }
  watchEffect(() => { getContentData() })
  const { list } = toRefs(content)
  return { list }
}

export default {
  name: 'FDContact',
  components: {
    Tabbar,
    Header
  },
  setup () {
    const router = useRouter()

    const { list } = useContactListEffect()
    const onAdd = () => router.push({ path: '/fd/contact/add' })
    return {
      list,
      onAdd
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
