import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/branding',
    component: () => import('@/views/Branding.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
