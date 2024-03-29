import { defineStore } from 'pinia'

export const useShopStore = defineStore('product store', {
  state: () => ({
    product: '培根',
    price: 100
  }),
  getters: {
    getPrice: (state) => `${state.product} ${state.price} 元`,
    double: (state) => state.price * 2,
    /**
     * @returns {number}
     */
    doublePlusOne () {
      return this.double + 1
    }
  },
  actions: {
    increment () {
      this.price++
    }
  }
})
