<template>
  <div class="container">
    <section class="menu">
      <div class="section-heading">
        <h2 class="section-title restaurant-title">
          {{ RestourantSelected.name }}
        </h2>
        <div class="card-info">
          <div class="rating">{{ RestourantSelected.stars }}</div>
          <div class="price">От {{ RestourantSelected.price }} ₽</div>
          <div class="category">{{ RestourantSelected.kitchen }}</div>
        </div>
        <div class="sorting">
          <button class="button" @click="sort = 'max'">Сначала дорогие</button>
          <button class="button" @click="sort = 'min'">Сначала дешевые</button>
        </div>
      </div>
      <div class="cards cards-menu">
        <pizza v-for="p in PizzaSort" :key="p.id" :pizza="p" />
      </div>
    </section>
  </div>
</template>
<script>
import pizza from "@/components/pizza.vue";
import { mapGetters } from "vuex";

export default {
  name: "RestaurantView",
  components: {
    pizza,
  },
  data: () => ({
    sort: "none",
  }),
  computed: {
    ...mapGetters(["getRestorans", "getPizza"]),
    RestourantSelected() {
      return this.getRestorans.filter((restourant) =>
        restourant.products.includes(this.$route.params.title)
      )[0];
    },
    PizzaSort() {
      if (this.sort == "max") {
        return this.getPizza[this.$route.params.title].slice().sort((a, b) => {
          return b.price - a.price;
        });
      } else if (this.sort == "min") {
        return this.getPizza[this.$route.params.title].slice().sort((a, b) => {
          return a.price - b.price;
        });
      } else {
        return this.getPizza[this.$route.params.title];
      }
    },
  },
};
</script>

<style scoped>
.sorting {
  display: flex;
  margin-left: auto;
}
</style>