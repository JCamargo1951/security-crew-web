import NotFound404 from '@/common/views/NotFound404.vue';
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'landing',
      redirect: { name: 'home' },
      component: () => import('@/modules/landing/layouts/LandingLayout.vue'),
      children: [
        {
          path: '/',
          name: 'home',
          component: () => import('@/modules/landing/views/Home.vue'),
        },
      ],
    },
    {
      path: '/auth',
      name: 'auth',
      redirect: { name: 'login' },
      component: () => import('../modules/auth/layouts/AuthLayout.vue'),
      children: [
        {
          path: '/login',
          name: 'login',
          component: () => import('../modules/auth/views/Login.vue'),
        },
        {
          path: '/register',
          name: 'register',
          component: () => import('../modules/auth/views/Register.vue'),
        },
      ],
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: NotFound404
    }
  ],
});

export default router;
