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
import { Toast } from 'vant'
import { useRouter } from 'vue-router'

export default {
  name: 'FDAddContact',
  setup () {
    const router = useRouter()
    const editingContact = ref({})
    const onSave = (contactInfo) => Toast('Save')
    const onDelete = (contactInfo) => Toast('Delete')
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
