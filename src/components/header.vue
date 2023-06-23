<template>
  <div class="container">
    <header class="header">
      <router-link to="/" class="logo">
        <img src="../assets/img/icon/logo.svg" alt="Logo" />
      </router-link>
      <label class="address">
        <input
          type="text"
          class="input input-address"
          placeholder="Адрес доставки"
        />
      </label>
      <div class="buttons">
        <span class="user-name"></span>
        <button
          v-if="!getUser"
          class="button button-primary button-auth"
          @click="$emit('auth')"
        >
          <span class="button-auth-svg"></span>
          <span class="button-text">Войти</span>
        </button>
        <button
          v-if="getUser"
          class="button button-cart"
          @click="$emit('card')"
          id="cart-button"
        >
          <span class="button-cart-svg"></span>
          <span class="button-text">Корзина</span>
        </button>
        <button
          v-if="getUser"
          class="button button-primary button-out"
          @click="Logout()"
        >
          <span class="button-text">Выйти</span>
          <span class="button-out-svg"></span>
        </button>
      </div>
    </header>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "HeaderComponent",
  props: {
    msg: String,
  },
  methods: {
    Logout() {
      this.$store.dispatch("Logout");
    },
  },
  computed: {
    ...mapGetters(["getUser"]),
  },
};
</script>

<style>
.button-login[disabled] {
  opacity: .7;
}
</style>
