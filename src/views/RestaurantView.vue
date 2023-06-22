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
      </div>
      <div class="cards cards-menu">
        <div class="card">
          <img
            src="../assets/img/pizza-plus/pizza-vesuvius.jpg"
            alt="image"
            class="card-image"
          />
          <div class="card-text">
            <div class="card-heading">
              <h3 class="card-title card-title-reg">Пицца Везувий</h3>
            </div>
            <div class="card-info">
              <div class="ingredients">
                Соус томатный, сыр «Моцарелла», ветчина, пепперони, перец
                «Халапенье», соус «Тобаско», томаты.
              </div>
            </div>
            <div class="card-buttons">
              <button class="button button-primary button-add-cart">
                <span class="button-card-text">В корзину</span>
                <span class="button-cart-svg"></span>
              </button>
              <strong class="card-price-bold">545 ₽</strong>
            </div>
          </div>
        </div>

        <div class="card">
          <img
            src="../assets/img/pizza-plus/pizza-girls.jpg"
            alt="image"
            class="card-image"
          />
          <div class="card-text">
            <div class="card-heading">
              <h3 class="card-title card-title-reg">Пицца Девичник</h3>
            </div>
            <!-- /.card-heading -->
            <div class="card-info">
              <div class="ingredients">
                Соус томатный, постное тесто, нежирный сыр, кукуруза, лук,
                маслины, грибы, помидоры, болгарский перец.
              </div>
            </div>
            <!-- /.card-info -->
            <div class="card-buttons">
              <button class="button button-primary button-add-cart">
                <span class="button-card-text">В корзину</span>
                <span class="button-cart-svg"></span>
              </button>
              <strong class="card-price-bold">450 ₽</strong>
            </div>
          </div>
          <!-- /.card-text -->
        </div>
        <!-- /.card -->

        <div class="card">
          <img
            src="../assets/img/pizza-plus/pizza-oleole.jpg"
            alt="image"
            class="card-image"
          />
          <div class="card-text">
            <div class="card-heading">
              <h3 class="card-title card-title-reg">Пицца Оле-Оле</h3>
            </div>
            <!-- /.card-heading -->
            <div class="card-info">
              <div class="ingredients">
                Соус томатный, сыр «Моцарелла», черри, маслины, зелень, майонез
              </div>
            </div>
            <!-- /.card-info -->
            <div class="card-buttons">
              <button class="button button-primary button-add-cart">
                <span class="button-card-text">В корзину</span>
                <span class="button-cart-svg"></span>
              </button>
              <strong class="card-price-bold">440 ₽</strong>
            </div>
          </div>
          <!-- /.card-text -->
        </div>
        <!-- /.card -->

        <div class="card">
          <img
            src="../assets/img/pizza-plus/pizza-plus.jpg"
            alt="image"
            class="card-image"
          />
          <div class="card-text">
            <div class="card-heading">
              <h3 class="card-title card-title-reg">Пицца Плюс</h3>
            </div>
            <!-- /.card-heading -->
            <div class="card-info">
              <div class="ingredients">
                Соус томатный, сыр «Моцарелла», сыр «Чеддер», томаты, пепперони,
                телятина, грибы, бекон, болгарский перец.
              </div>
            </div>
            <!-- /.card-info -->
            <div class="card-buttons">
              <button class="button button-primary button-add-cart">
                <span class="button-card-text">В корзину</span>
                <span class="button-cart-svg"></span>
              </button>
              <strong class="card-price-bold">805 ₽</strong>
            </div>
          </div>
          <!-- /.card-text -->
        </div>
        <!-- /.card -->

        <div class="card">
          <img
            src="../assets/img/pizza-plus/pizza-hawaiian.jpg"
            alt="image"
            class="card-image"
          />
          <div class="card-text">
            <div class="card-heading">
              <h3 class="card-title card-title-reg">Пицца Гавайская</h3>
            </div>
            <!-- /.card-heading -->
            <div class="card-info">
              <div class="ingredients">
                Соус томатный, сыр «Моцарелла», ветчина, ананасы
              </div>
            </div>
            <!-- /.card-info -->
            <div class="card-buttons">
              <button class="button button-primary button-add-cart">
                <span class="button-card-text">В корзину</span>
                <span class="button-cart-svg"></span>
              </button>
              <strong class="card-price-bold">440 ₽</strong>
            </div>
          </div>
          <!-- /.card-text -->
        </div>
        <!-- /.card -->

        <div class="card">
          <img
            src="../assets/img/pizza-plus/pizza-classic.jpg"
            alt="image"
            class="card-image"
          />
          <div class="card-text">
            <div class="card-heading">
              <h3 class="card-title card-title-reg">Пицца Классика</h3>
            </div>
            <!-- /.card-heading -->
            <div class="card-info">
              <div class="ingredients">
                Соус томатный, сыр «Моцарелла», сыр «Пармезан», ветчина, салями,
                грибы.
              </div>
            </div>
            <!-- /.card-info -->
            <div class="card-buttons">
              <button class="button button-primary button-add-cart">
                <span class="button-card-text">В корзину</span>
                <span class="button-cart-svg"></span>
              </button>
              <strong class="card-price-bold">510 ₽</strong>
            </div>
          </div>
          <!-- /.card-text -->
        </div>
        <!-- /.card -->
      </div>
      <!-- /.cards -->
    </section>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  name: "RestaurantView",
  mounted() {},
  computed: {
    ...mapGetters(["getRestorans"]),
    RestourantSelected() {
      return this.getRestorans.filter((restourant) =>
        restourant.link.includes(this.$route.params.title)
      )[0];
    },
  },
};
</script>
