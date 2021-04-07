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

</template>

<script>

export default {
  name: 'Announcement'
}
</script>

<style lang="scss" scoped>
  .demo-page-header :deep(tr:last-child td) {
  padding-bottom: 0;
  }
</style>
