<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
  <!-- 1 -->
  {{ shop.getPrice }}
  {{ shop.secret }}
  <!-- 2 -->
  {{ product }}
  <button type="button" @click="increment">按鈕</button>
  <input type="text" v-model="product"><br>
  <!-- 3 -->
  <button type="button" @click="updateShop">patch</button>
  <button type="button" @click="resetShop">reset</button>
</template>

<script>
import { useShopStore } from '@/stores/product.js'
import { storeToRefs } from 'pinia'
export default {
  setup () {
    // 1
    const shop = useShopStore()
    shop.product = '火腿'
    // 2
    const { product } = storeToRefs(shop)
    const { increment } = shop
    // 3
    function updateShop () {
      shop.$patch({
        product: '牛奶',
        price: 100
      })
    }
    // 4
    function resetShop () {
      shop.$reset()
    }
    return {
      shop,
      product,
      increment,
      updateShop,
      resetShop
    }
  }
}
</script>
