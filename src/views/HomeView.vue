<template>
  <div class="container">
    <section class="container-promo" style="margin-bottom: 56px">
      <v-carousel
        v-model="model"
        height="300px"
        hide-delimiters
        interval="4000"
        show-arrows-on-hover
        cycle
      >
        <v-carousel-item v-for="banner in banners" :key="banner.title">
          <section class="promo" :class="banner.class">
            <h1 class="promo-title" v-html="banner.title"></h1>
            <p class="promo-text" v-html="banner.text"></p>
          </section>
        </v-carousel-item>
      </v-carousel>
    </section>

    <section class="restaurants">
      <div class="section-heading">
        <h2 class="section-title">Рестораны</h2>
        <label class="search">
          <input
            type="text"
            class="input input-search"
            placeholder="Поиск блюд и ресторанов"
          />
        </label>
      </div>
      <div class="cards cards-restaurants">
        <restaurant v-for="restoran in getRestorans" :key="restoran.name" :restoran="restoran" />
      </div>
    </section>
  </div>
</template>

<script>
import restaurant from "@/components/restaurant.vue";
import { mapGetters } from "vuex";

export default {
  name: "HomeView",
  components: {
    restaurant,
  },
  data: () => ({
    model: 0,
    banners: [
      {
        title: "Онлайн-сервис <br />доставки еды на дом",
        class: "pizza",
        text: "Блюда из любимого ресторана привезет курьер в перчатках, маске и с антисептиком",
      },
      {
        title: "Шашлыки на майские <br /> со скидкой 35%",
        class: "kebab",
        text: "Закажите шашлыки в любом ресторане до 10 мая и получите скидку по промокоду OMAGAD",
      },
      {
        title: "Скидка 20% на всю еду <br /> по промокоду LOVE.JS",
        class: "vegetables",
        text: "Блюдо из ресторана привезут вместе с двумя подарочными книгами по фронтенду",
      },
      {
        title: "Сеты со скидкой до 30% <br /> в ресторанах",
        class: "sushi",
        text: "Скидки на сеты до 30 мая по промокоду DADADA",
      },
    ],
  }),
  computed: {
    ...mapGetters(["getRestorans"]),
  },
};
</script>
