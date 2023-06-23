<template>
  <div class="container">
    <section class="menu">
      <div class="section-heading">
        <h2 class="section-title restaurant-title">
          {{ RestourantSelected.title }}
        </h2>
        <div class="card-info">
          <div class="rating">{{ RestourantSelected.rating }}</div>
          <div class="price">{{ RestourantSelected.price }}</div>
          <div class="category">{{ RestourantSelected.category }}</div>
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
        restourant.link.includes(this.$route.params.title)
      )[0];
    },
    PizzaSort() {
      if (this.sort == "max") {
        return this.getPizza.slice().sort((a, b) => {
          return (
            Number(b.price.replace(/[^+\d]/g, "")) -
            Number(a.price.replace(/[^+\d]/g, ""))
          );
        });
      } else if (this.sort == "min") {
        return this.getPizza.slice().sort((a, b) => {
          return (
            Number(a.price.replace(/[^+\d]/g, "")) -
            Number(b.price.replace(/[^+\d]/g, ""))
          );
        });
      } else {
        return this.getPizza;
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