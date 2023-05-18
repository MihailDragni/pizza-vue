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
            @showModalCart="showModalCart"
            :product="product"
            v-for="product in currentProducts"
            :key="product.id"
          ></product-card>
          <!-- /.card -->
        </div>
        <!-- /.cards -->
      </section>
    </div>
    <!-- /.container -->
  </main>
  <modal-cart v-model:show="modalCartVisible" />
</template>

<script>
import ProductCard from '@/components/ProductCard.vue'
import axios from 'axios'
export default {
  name: 'restaurant-view',
  components: { ProductCard },
  data() {
    return {
      modalCartVisible: false,
      currentProducts: [],
      currentRestaurant: {},
    }
  },
  methods: {
    showModalCart() {
      this.modalCartVisible = true
    },

    getCurrentProducts() {
      axios
        .get(`../db/${this.$route.params.products}`)
        .then((response) => (this.currentProducts = response.data))
        .catch((error) => console.log(error))
    },

    getCurrentRestaurant() {
      axios
        .get('../db/db.json')
        .then(
          (response) =>
            (this.currentRestaurant = response.data.db.partners.find(
              (elem) => elem.products === String(this.$route.params.products)
            ))
        )
        .catch((error) => console.log(error))
    },
  },
  mounted() {
    this.getCurrentRestaurant()
    this.getCurrentProducts()
  },
}
</script>

<style></style>
