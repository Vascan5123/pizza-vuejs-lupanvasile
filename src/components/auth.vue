<template>
  <div v-show="show" class="modal-auth">
    <div class="modal-dialog modal-dialog-auth">
      <button @click="$emit('closeAuth')" class="close-auth">&times;</button>
      <form id="logInForm">
        <fieldset class="modal-body">
          <legend class="modal-title">Авторизация</legend>
          <label class="label-auth">
            <span>Логин</span>
            <input v-model="login" id="login" type="text" />
          </label>
          <label class="label-auth">
            <span>Пароль</span>
            <input v-model="password" id="password" type="password" />
          </label>
        </fieldset>
        <div class="modal-footer">
          <div class="footer-buttons">
            <button :disabled="!login || !password" class="button button-primary button-login" type="submit" @click="Login">
              Войти
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "AuthModal",
  props: {
    show: Boolean,
  },
  data: () => ({
    login: "",
    password: ""
  }),
  methods: {
    Login() {
      this.$store.dispatch("Login");
    },
  },
};
</script>

<style>
</style>