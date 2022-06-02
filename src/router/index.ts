import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '../components/Home.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '',
        component: () => import(/* webpackChunkName: "Page" */ '../views/Page.vue'),
      },
      {
        path: 'Page1',
        component: () => import(/* webpackChunkName: "Page1" */ '../views/Page1.vue'),
      },
      {
        path: 'Page2',
        component: () => import(/* webpackChunkName: "Page2" */ '../views/Page2.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory('/'),
  routes,
});

router.beforeEach(async (route, redirect, next) => {
  next();
});

router.afterEach(route => {

});

export default router;