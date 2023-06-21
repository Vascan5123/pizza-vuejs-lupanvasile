import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RestaurantView from '../views/RestaurantView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/restaurant',
    name: 'Restaurant',
    component: RestaurantView
  },
]

const router = new VueRouter({
  mode: "history",
  routes
})

export default router
