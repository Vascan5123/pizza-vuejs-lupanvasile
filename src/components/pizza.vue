<template>
  <div class="card">
    <img :src="pizza.image" alt="image" class="card-image" />
    <div class="card-text">
      <div class="card-heading">
        <h3 class="card-title card-title-reg">{{ pizza.title }}</h3>
      </div>
      <div class="card-info">
        <div class="ingredients">
          {{ pizza.ingredients }}
        </div>
      </div>
      <div class="card-buttons">
        <button
          class="button button-primary button-add-cart"
          :disabled="!getUser"
          @click="addItemToCart(pizza.id)"
        >
          <span class="button-card-text">В корзину</span>
          <span class="button-cart-svg"></span>
        </button>
        <strong class="card-price-bold">
          {{ pizza.price }}
        </strong>
      </div>
    </div>
  </div>
</template>
  
<script>
import { mapGetters } from "vuex";

export default {
  name: "PizzaComponent",
  props: {
    pizza: Object,
  },
  computed: {
    ...mapGetters(["getUser"]),
  },
  methods: {
    addItemToCart(id) {
      this.$store.dispatch("AddToCard", id);
    },
  },
};
</script>
