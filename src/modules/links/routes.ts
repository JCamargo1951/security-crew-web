// src/modules/links/routes.ts
import type { RouteRecordRaw } from 'vue-router'

const linksRoutes: RouteRecordRaw = {
  path: '/links',
  component: () => import('@/modules/common/layouts/LandingLayout.vue'),
  children: [
    {
      path: '',
      name: 'links.dashboard',
      component: () => import('./views/LinksDashboardView.vue'),
    },
    {
      path: 'manage',
      name: 'links.manage',
      component: () => import('./views/ManageLinkView.vue'),
    },
    {
      path: ':id/stats',
      name: 'links.stats',
      component: () => import('./views/LinkStatsView.vue'),
    },
  ],
}

export default linksRoutes
