<template>
  <div v-show="show" class="modal modal-cart">
    <div class="modal-dialog">
      <div class="modal-header">
        <h3 class="modal-title">Корзина</h3>
        <button @click="$emit('closeCard')" class="close">&times;</button>
      </div>
      <div class="modal-body">
        <div class="food-row" v-for="itemCard in Card" :key="itemCard.id">
          <span class="food-name">{{ itemCard.title }}</span>
          <strong class="food-price">{{ itemCard.price }}</strong>
          <div class="food-counter">
            <button class="counter-button" @click="RemoveTovar(itemCard.id)">
              -
            </button>
            <span class="counter">{{ itemCard.count }}</span>
            <button class="counter-button" @click="AddTovar(itemCard.id)">
              +
            </button>
          </div>
        </div>
      </div>
      <div class="modal-footer">
        <span class="modal-pricetag">{{ Price }}</span>
        <div class="footer-buttons">
          <button class="button button-primary" @click="MakeOrder()">
            Оформить заказ
          </button>
          <button @click="$emit('closeCard')" class="button clear-cart">
            Отмена
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "AuthModal",
  props: {
    show: Boolean,
  },
  data: () => ({
    login: "",
    password: "",
  }),
  computed: {
    ...mapGetters(["getCard", "getPizza"]),
    Card() {
      let kol_vo = Object.values(this.getCard);
      let Order = this.getPizza
        .filter((prod) =>
          Object.keys(this.getCard)
            .map((g) => Number(g))
            .includes(Number(prod["id"]))
        )
        .map((c, i) => {
          c.count = kol_vo[i];
          return c;
        });
      return Order;
    },
    Price() {
      let price = 0;
      let kol_vo = Object.values(this.getCard);
      this.getPizza.forEach((element, i) => {
        price +=
          Number(element["price"].replace(" ₽", "")) *
          (kol_vo[i] ? kol_vo[i] : 0);
      });
      return price + " ₽";
    },
  },
  methods: {
    Login() {
      this.$store.dispatch("Login");
    },
    AddTovar(id) {
      this.$store.dispatch("AddToCard", id);
    },
    RemoveTovar(id) {
      this.$store.dispatch("RemoveCard", id);
    },
    MakeOrder() {
      this.$store.dispatch("MakeAnOrder").then(() => {
        this.$emit("closeCard");
      });
    },
  },
};
</script>

<style>
</style>