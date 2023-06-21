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
        <restaurant v-for="restoran in restorans" :key="restoran.title" :restoran="restoran" />
      </div>
    </section>
  </div>
</template>

<script>
import restaurant from "@/components/restaurant.vue";

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
    restorans: [
      {
        link: "/restaurant/pizza-plus",
        image: require("../assets/img/pizza-plus/preview.jpg"),
        title: "Пицца плюс",
        tag: "50 мин",
        rating: "4.5",
        price: "От 900 ₽",
        category: "Пицца",
      },
      {
        link: "/restaurant/tanuki",
        image: require("../assets/img/tanuki/preview.jpg"),
        title: "Тануки",
        tag: "60 мин",
        rating: "4.5",
        price: "От 1 200 ₽",
        category: "Суши, роллы",
      },
      {
        link: "/restaurant/food-band",
        image: require("../assets/img/food-band/preview.jpg"),
        title: "FoodBand",
        tag: "40 мин",
        rating: "4.5",
        price: "От 450 ₽",
        category: "Пицца",
      },
      {
        link: "/restaurant/palki-skalki",
        image: require("../assets/img/palki-skalki/preview.jpg"),
        title: "Палки скалки",
        tag: "55 мин",
        rating: "4.5",
        price: "От 500 ₽",
        category: "Пицца",
      },
      {
        link: "/restaurant/gusi-lebedi",
        image: require("../assets/img/gusi-lebedi/preview.jpg"),
        title: "Гуси Лебеди",
        tag: "75 мин",
        rating: "4.5",
        price: "От 1 000 ₽",
        category: "Русская кухня",
      },
      {
        link: "/restaurant/pizza-burger",
        image: require("../assets/img/pizza-burger/preview.jpg"),
        title: "PizzaBurger",
        tag: "45 мин",
        rating: "4.5",
        price: "От 700 ₽",
        category: "Пицца",
      },
    ],
  }),
};
</script>
