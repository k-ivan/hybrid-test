import { createRouter, createWebHistory  } from 'vue-router';
import fakeStore from './fakeStore.js';
import Index from './pages/index.vue';

const BASE = import.meta.env.BASE_URL;

const router = createRouter({
  linkActiveClass: 'active',
  history: createWebHistory(),
  routes: [
    { path: `${BASE}`, component: Index, name: 'Home' },
    { path: `${BASE}login`, component: () => import('./pages/login.vue'), name: 'Login' },
    {
      path: `${BASE}dashboard`,
      component: () => import('./pages/dashboard/index.vue'),
      name: 'Dasboard',
      meta: { requiresAuth: true }
    },
    {
      path: `${BASE}dashboard/create`,
      component: () => import('./pages/dashboard/create.vue'),
      name: 'Create',
      meta: { requiresAuth: true }
    },
    {
      path: `${BASE}dashboard/edit/:slug`,
      component: () => import('./pages/dashboard/edit.vue'),
      name: 'Edit',
      meta: { requiresAuth: true }
    },
    { path: `${BASE}posts/:slug`, component: () => import('./pages/posts/slug.vue'), name: 'PostDetail' },
    { path: `${BASE}:pathMatch(.*)*`, name: 'NotFound', component: () => import('./pages/notfound.vue') }
  ]
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!fakeStore.isAdmin) {
      next({
        name: 'Login'
      })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router;
