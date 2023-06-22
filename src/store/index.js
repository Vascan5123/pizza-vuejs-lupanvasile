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
  },
  getters: {
    getRestorans: (state) => state.restorans,
    getUser: (state) => state.user,
  },
  mutations: {
    SetUser(state, payload) {
      state.user = payload;
    },
  },
  actions: {
    Login({ commit}) {
      localStorage.setItem("user", true);
      commit("SetUser", true);
    },
    Logout({ commit}) {
      localStorage.setItem("user", false);
      commit("SetUser", false);
    },
  },
  modules: {},
});
