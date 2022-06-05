<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png"><br>
    {{ product }}
    {{ getPrice }}
    <button type="button" @click="increment">加一</button>
  </div>

</template>

<script>
// Options API
import { mapState, mapActions } from 'pinia'
import { useShopStore } from '@/stores/product.js'

export default {
  computed: {
    ...mapState(useShopStore, ['product', 'getPrice'])
  },
  methods: {
    ...mapActions(useShopStore, ['increment'])
  },
  created () {
    this.increment()
  }
}
</script>
