import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: localStorage.getItem("user"),
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
    pizza: [
      {
        id: "0",
        image: require("../assets/img/pizza-plus/pizza-vesuvius.jpg"),
        title: "Пицца Везувий",
        ingredients:
          "Соус томатный, сыр «Моцарелла», ветчина, пепперони, перец «Халапенье», соус «Тобаско», томаты.",
        price: "545 ₽",
      },
      {
        id: "1",
        image: require("../assets/img/pizza-plus/pizza-girls.jpg"),
        title: "Пицца Девичник",
        ingredients:
          "Соус томатный, постное тесто, нежирный сыр, кукуруза, лук, маслины, грибы, помидоры, болгарский перец.",
        price: "450 ₽",
      },
      {
        id: "2",
        image: require("../assets/img/pizza-plus/pizza-oleole.jpg"),
        title: "Пицца Оле-Оле",
        ingredients:
          "Соус томатный, сыр «Моцарелла», черри, маслины, зелень, майонез",
        price: "440 ₽",
      },
      {
        id: "3",
        image: require("../assets/img/pizza-plus/pizza-plus.jpg"),
        title: "Пицца Плюс",
        ingredients:
          "Соус томатный, сыр «Моцарелла», сыр «Чеддер», томаты, пепперони, телятина, грибы, бекон, болгарский перец.",
        price: "805 ₽",
      },
      {
        id: "4",
        image: require("../assets/img/pizza-plus/pizza-hawaiian.jpg"),
        title: "Пицца Гавайская",
        ingredients: "Соус томатный, сыр «Моцарелла», ветчина, ананасы",
        price: "440 ₽",
      },
      {
        id: "5",
        image: require("../assets/img/pizza-plus/pizza-classic.jpg"),
        title: "Пицца Классика",
        ingredients:
          "Соус томатный, сыр «Моцарелла», сыр «Пармезан», ветчина, салями, грибы.",
        price: "510 ₽",
      },
    ],
    card: localStorage.getItem("card")
      ? JSON.parse(localStorage.getItem("card"))
      : {},
  },
  getters: {
    getRestorans: (state) => state.restorans,
    getUser: (state) => state.user,
    getPizza: (state) => state.pizza,
  },
  mutations: {
    SetUser(state, payload) {
      state.user = payload;
    },
    SetCard(state, payload) {
      state.card = payload;
    },
  },
  actions: {
    Login({ commit }) {
      localStorage.setItem("user", true);
      commit("SetUser", true);
    },
    Logout({ commit }) {
      localStorage.setItem("user", false);
      commit("SetUser", false);
    },
    AddToCard({ commit }, payload) {
      if (payload) {
        let card = {};
        if (localStorage.getItem("card")) {
          card = JSON.parse(localStorage.getItem("card"));
          card[payload] = card[payload] ? card[payload] + 1 : 1;
        } else {
          card[payload] = 1;
        }
        localStorage.setItem("card", JSON.stringify(card));
        commit("SetCard", card);
      }
    },
  },
  modules: {},
});
