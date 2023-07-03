<template>
  <router-link :to="'/restaurant/' + restoran.products.replace('.json', '')" class="card card-restaurant">
    <img :src="require('../assets/' + restoran.image)" alt="image" class="card-image" />
    <div class="card-text">
      <div class="card-heading">
        <h3 class="card-title">{{ restoran.name }}</h3>
        <span class="card-tag tag">{{ restoran.time_of_delivery }} мин</span>
      </div>
      <div class="card-info">
        <div class="rating">{{ restoran.stars }}</div>
        <div class="price">От {{ restoran.price }} ₽</div>
        <div class="category">{{ restoran.kitchen }}</div>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "RestaurantComponent",
  props: {
    restoran: Object,
  },
};
</script>