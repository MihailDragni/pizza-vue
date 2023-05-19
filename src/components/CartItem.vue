<template>
  <div class="food-row">
    <span class="food-name">{{ product.name }}</span>
    <strong class="food-price">{{ product.price }} ₽</strong>
    <div class="food-counter">
      <button class="counter-button" @click="decrementItem">-</button>
      <span class="counter">{{ product.quantity }}</span>
      <button class="counter-button" @click="incrementItem">+</button>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'cart-item',
  props: {
    product: {
      type: Object,
      default: () => {},
    },
  },
  methods: {
    ...mapActions([
      'INCREMENT_CART_ITEM',
      'DECREMENT_CART_ITEM',
      'DELETE_FROM_CART',
    ]),
    removeItem() {
      this.DELETE_FROM_CART(this.product.id)
    },
    decrementItem() {
      if (this.product.quantity <= 1) {
        this.removeItem()
        return
      }
      this.DECREMENT_CART_ITEM(this.product.id)
      return
    },
    incrementItem() {
      this.INCREMENT_CART_ITEM(this.product.id)
    },
  },
}
</script>

<style></style>
