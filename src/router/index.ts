import NotFound404 from '@/modules/common/views/NotFound404.vue';
import linksRoutes from '@/modules/links/routes';
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'landing',
      redirect: { name: 'home' },
      component: () => import('@/modules/common/layouts/LandingLayout.vue'),
      children: [
        {
          path: '/',
          name: 'home',
          component: () => import('@/modules/common/views/Home.vue'),
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
          component: () => import('../modules/auth/views/LoginView.vue'),
        },
        {
          path: '/register',
          name: 'register',
          component: () => import('../modules/auth/views/RegisterView.vue'),
        },
      ],
    },
    
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: NotFound404
    },
    linksRoutes,
  ],
});

export default router;
