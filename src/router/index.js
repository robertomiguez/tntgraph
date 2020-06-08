import Vue from 'vue'
import VueRouter from 'vue-router'
import Pages from '../views/Pages.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: `/`,
    name: `Pages`,
    component: Pages
  },
  {
    path: `/covid19`,
    name: `Covid19`,
    component: () => import(`../views/Covid19.vue`)
  },
  {
    path: `/homicides`,
    name: `Homicides`,
    component: () => import(`../views/Homicides.vue`)
  }
]

const router = new VueRouter({
  mode: `history`,
  base: process.env.BASE_URL,
  routes
})

export default router
