<template>
  <div class="modal modal-cart" v-if="show" @click="hideDialog">
    <div @click.stop class="modal-dialog">
      <div class="modal-header">
        <h3 class="modal-title">Корзина</h3>
        <button class="close" @click="hideDialog">&times;</button>
      </div>
      <!-- /.modal-header -->
      <div class="modal-body">
        <template v-if="CART.length">
          <cart-item
            v-for="product in CART"
            :key="product.id"
            :product="product"
          ></cart-item>
        </template>
        <h3 v-else>Добавьте товар</h3>
        <!-- /.foods-row -->
      </div>
      <!-- /.modal-body -->
      <div class="modal-footer">
        <span class="modal-pricetag">{{ cartTotalCost }} ₽</span>
        <div class="footer-buttons">
          <button class="button button-primary">Оформить заказ</button>
          <button class="button clear-cart" @click="clearCart">Отмена</button>
        </div>
      </div>
      <!-- /.modal-footer -->
    </div>
    <!-- /.modal-dialog -->
  </div>
</template>

<script>
import CartItem from '@/components/CartItem.vue'
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'modal-cart',
  components: { CartItem },
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    ...mapActions(['CLEAR_CART']),
    hideDialog() {
      this.$emit('update:show', false)
    },
    clearCart() {
      this.CLEAR_CART()
    },
  },
  computed: {
    ...mapGetters(['CART']),
    cartTotalCost() {
      if (!this.CART.length) {
        return 0
      }
      let result = []
      this.CART.forEach((el) => {
        result.push(el.price * el.quantity)
      })

      result = result.reduce((sum, el) => {
        return sum + el
      })

      return result
    },
  },
}
</script>

<style></style>
