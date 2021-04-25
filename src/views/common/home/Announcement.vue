<template>
  <a-page-header
      class="demo-page-header"
      style="border: 1px solid rgb(235, 237, 240)"
      title="Announcement Title"
      sub-title="Post time"
    >
      <a-descriptions size="small" :column="1">
        <a-descriptions-item>content summary</a-descriptions-item>
    </a-descriptions>

  </a-page-header>
  <van-cell-group>
    <div
      v-for="item in list"
      :key="item._id"
    >
      <van-cell @click="showDialog(item)" is-link>
        <!-- Use the title slot to customize the title -->
        <template #title>
          <span class="custom-title">{{item.title+'&nbsp;&nbsp;&nbsp;'}}</span>
          <van-tag plain type="primary">{{item.type}}</van-tag>
        </template>
      </van-cell>
    </div>
  </van-cell-group>
</template>

<script>
import { reactive, toRefs, watchEffect } from 'vue'
import { get } from '../../../utils/request'
import { Dialog } from 'vant'

// Logic related to the announcement list
const useAnnounancetListEffect = () => {
  const content = reactive({ list: [] })
  const getContentData = async () => {
    const result = await get('/api/announcements')
    if (result?.errno === 0 && result?.data?.length) {
      content.list = result.data
    }
  }
  watchEffect(() => { getContentData() })
  const { list } = toRefs(content)
  return { list }
}
export default {
  name: 'Announcement',
  setup () {
    const { list } = useAnnounancetListEffect()
    const showDialog = (item) => {
      Dialog.alert({
        title: item.title,
        message: item.text,
        theme: 'round-button'
      }).then(() => {
        // on close
      })
    }
    return {
      list,
      showDialog
    }
  }
}
</script>

<style lang="scss" scoped>
  .demo-page-header :deep(tr:last-child td) {
  padding-bottom: 0;
  }
</style>
