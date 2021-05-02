<template>
  <van-nav-bar
    title="Add Contact Person"
    left-text="Back"
    left-arrow
    @click-left="onClickLeft"
  />
  <van-contact-edit
    is-edit
    :contact-info="editingContact"
    @save="onSave"
    @delete="onDelete"
  />
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { post } from '../../../utils/request'
import { Notify } from 'vant'
// Logic related to the announcement list
const useContactEffect = () => {
  const onSave = async (contactInfo) => {
    try {
      const values = {
        contact_username: contactInfo.name,
        contact_telephone: contactInfo.tel
      }
      const result = await post('/api/contacts', values)
      console.log(result)
      if (result?.errno === 0) {
        console.log(result)
      } else {
        console.log('failed')
      }
    } catch (e) {
      console.log(e)
    }
  }
  const onDelete = async (contactInfo) => {
    try {
      const values = {
        contact_username: contactInfo.name,
        contact_telephone: contactInfo.tel
      }
      const result = await post('/api/contacts/delete', values)
      console.log(result)
      if (result?.errno === 0) {
        Notify({ type: 'success', message: 'You have successfully add contact!' })
      } else {
        Notify({ type: 'danfer', message: 'You did not succcessfully add contact!' })
      }
    } catch (e) {
      Notify({ type: 'danger', message: `error is ${e.message}` })
    }
  }
  return { onSave, onDelete }
}

export default {
  name: 'FDAddContact',
  setup () {
    const router = useRouter()
    const editingContact = ref({})
    const { onSave, onDelete } = useContactEffect()
    const onClickLeft = () => {
      router.push({ name: 'FDContact' })
    }
    return {
      onSave,
      onDelete,
      editingContact,
      onClickLeft
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
