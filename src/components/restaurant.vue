<template>
  <router-link :to="restoran.link" class="card card-restaurant">
    <img :src="restoran.image" alt="image" class="card-image" />
    <div class="card-text">
      <div class="card-heading">
        <h3 class="card-title">{{ restoran.title }}</h3>
        <span class="card-tag tag">{{ restoran.tag }}</span>
      </div>
      <div class="card-info">
        <div class="rating">{{ restoran.rating }}</div>
        <div class="price">{{ restoran.price }}</div>
        <div class="category">{{ restoran.category }}</div>
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