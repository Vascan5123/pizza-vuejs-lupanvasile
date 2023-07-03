import Vue from "vue";
import Vuex from "vuex";
import Db from "../assets/db/db.json";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: localStorage.getItem("user"),
    restorans: Db.db.partners,
    pizza: Db.db,
    card: localStorage.getItem("card")
      ? JSON.parse(localStorage.getItem("card"))
      : {},
  },
  getters: {
    getRestorans: (state) => state.restorans,
    getUser: (state) => state.user,
    getPizza: (state) => state.pizza,
    getCard: (state) => state.card,
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
      localStorage.removeItem("user");
      commit("SetUser", false);
      localStorage.removeItem("card");
      commit("SetCard", {});
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
    RemoveCard({ commit }, payload) {
      if (payload) {
        let card = {};
        if (localStorage.getItem("card")) {
          card = JSON.parse(localStorage.getItem("card"));
          card[payload] = card[payload] ? card[payload] - 1 : 0;
          localStorage.setItem("card", JSON.stringify(card));
          commit("SetCard", card);
        }
      }
    },
    MakeAnOrder({ commit }) {
      localStorage.setItem("card", JSON.stringify({}));
      commit("SetCard", {});
      return;
    },
  },
  modules: {},
});
