<template>
  <main class="main">
    <div class="container">
      <section class="menu">
        <div class="section-heading">
          <h2 class="section-title restaurant-title">
            {{ currentRestaurant.name }}
          </h2>
          <div class="card-info">
            <div class="rating">{{ currentRestaurant.stars }}</div>
            <div class="price">От {{ currentRestaurant.price }} ₽</div>
            <div class="category">{{ currentRestaurant.kitchen }}</div>
          </div>
          <!-- /.card-info -->
        </div>
        <div class="cards cards-menu">
          <product-card
            @addToCart="addToCart"
            :product="product"
            v-for="product in PRODUCTS"
            :key="product.id"
          ></product-card>
          <!-- /.card -->
        </div>
        <!-- /.cards -->
      </section>
    </div>
    <!-- /.container -->
  </main>
  <modal-cart v-model:show="isModalCartVisible" />
</template>

<script>
import ProductCard from '@/components/ProductCard.vue'
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'restaurant-view',
  components: { ProductCard },
  data() {
    return {
      isModalCartVisible: false,
      currentRestaurant: {},
    }
  },
  computed: {
    ...mapGetters(['PRODUCTS', 'RESTAURANTS']),
  },
  methods: {
    ...mapActions([
      'GET_PRODUCTS_FROM_API',
      'GET_RESTAURANTS_FROM_API',
      'ADD_TO_CART',
    ]),

    addToCart(product) {
      this.isModalCartVisible = true
      this.ADD_TO_CART(product)
    },

    async getCurrentRestaurant() {
      const res = await this.GET_RESTAURANTS_FROM_API()
      return (this.currentRestaurant = res.find(
        (elem) => String(elem.products) === String(this.$route.params.products)
      ))
    },
  },
  mounted() {
    this.GET_PRODUCTS_FROM_API(this.$route.params.products)
    this.getCurrentRestaurant()
  },
}
</script>

<style></style>
