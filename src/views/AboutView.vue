<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
  {{ getPrice }}
</template>

<script>
import { mapState } from 'pinia'
import productStore from '@/stores/product.js'
export default {
  computed: {
    ...mapState(productStore, ['getPrice'])
  }
}
</script>
