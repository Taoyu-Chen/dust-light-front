<template>
  <Header :name="'History Order'"/>
  <orders />
</template>

<script>
import Header from '../../../components/Header'
import Orders from './orders.vue'

export default {
  components: {
    Header,
    Orders
  },
  setup () {

  }
}
</script>

<style lang="scss" scoped>

</style>
