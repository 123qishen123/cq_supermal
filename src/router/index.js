import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: () => import('views/home/Home.vue')
  },
  {
    path: '/category',
    component: () => import('views/category/Category.vue')
  },
  {
    path: '/shopCart',
    component: () => import('views/shopCart/ShopCart.vue')
  },
  {
    path: '/profile',
    component: () => import('views/profile/Profile.vue')
  }
]

const router = new Router({
  routes,
  mode: 'history'
})

export default router
// 108
