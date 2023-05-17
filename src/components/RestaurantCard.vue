<template>
  <router-link :to="`/${card.products}`" class="card card-restaurant">
    <img
      :src="require(`@/assets/${card.image}`)"
      alt="image"
      class="card-image"
    />
    <div class="card-text">
      <div class="card-heading">
        <h3 class="card-title">{{ card.name }}</h3>
        <span class="card-tag tag">{{ card.time_of_delivery }} мин</span>
      </div>
      <!-- /.card-heading -->
      <div class="card-info">
        <div class="rating">{{ card.stars }}</div>
        <div class="price">От {{ card.price }} ₽</div>
        <div class="category">{{ card.kitchen }}</div>
      </div>
      <!-- /.card-info -->
    </div>
    <!-- /.card-text -->
  </router-link>
</template>

<script>
export default {
  name: 'restaurants-card',
  props: {
    card: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style></style>
