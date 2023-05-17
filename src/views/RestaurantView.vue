<template>
  <main class="main">
    <div class="container">
      <section class="menu">
        <div class="section-heading">
          <h2 class="section-title restaurant-title">Пицца Плюс</h2>
          <div class="card-info">
            <div class="rating">4.5</div>
            <div class="price">От 900 ₽</div>
            <div class="category">Пицца</div>
          </div>
          <!-- /.card-info -->
        </div>
        <div class="cards cards-menu">
          <product-card
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
</template>

<script>
import ProductCard from '@/components/ProductCard.vue'
import axios from 'axios'
export default {
  name: 'restaurant-view',
  components: { ProductCard },
  data() {
    return {
      currentProducts: [],
    }
  },
  methods: {
    getCurrentCards() {
      axios
        .get(`../db/${this.$route.params.products}`)
        .then((response) => (this.currentProducts = response.data))
        .catch((error) => console.log(error))
    },
  },
  mounted() {
    this.getCurrentCards()
  },
}
</script>

<style></style>
