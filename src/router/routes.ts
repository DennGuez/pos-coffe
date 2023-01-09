import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('src/products/pages/ProductsListPage.vue') }
    ],
  },
  {
    path: '/test',
    component: () => import('src/textLayut.vue'),
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('src/shared/ErrorNotFound.vue'),
  },
];

export default routes;
