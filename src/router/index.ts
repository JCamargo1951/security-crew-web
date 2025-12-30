import App from '@/App.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('../modules/auth/layouts/LoginLayout.vue'),
    },
    {
      path: '/landing',
      name: 'landing',
      component: () => import('../modules/landing/layouts/LandingLayout.vue'),
    },
  ],
})

export default router
