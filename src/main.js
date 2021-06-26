import './app.scss';
import { createApp } from 'vue';
import { createRouter, createWebHistory  } from 'vue-router';
import 'virtual:svg-icons-register';
import date from './plugins/date.js';
import sanitize from './plugins/sanitize.js';

// fake initial posts
import initialPosts from './api/initialPosts.json';

import App from './App.vue';
import Index from './pages/index.vue';
import SvgIcon from './components/SvgIcon.vue';

const BASE = import.meta.env.BASE_URL;

const router = createRouter({
  linkActiveClass: 'active',
  history: createWebHistory(),
  routes: [
    { path: `${BASE}`, component: Index, name: 'Home' },
    { path: `${BASE}dashboard`, component: () => import('./pages/dashboard/index.vue'), name: 'Dasboard' },
    { path: `${BASE}dashboard/create`, component: () => import('./pages/dashboard/create.vue'), name: 'Create' },
    { path: `${BASE}dashboard/edit/:slug`, component: () => import('./pages/dashboard/edit.vue'), name: 'Edit' },
    { path: `${BASE}posts/:slug`, component: () => import('./pages/posts/slug.vue'), name: 'PostDetail' },
    { path: `${BASE}:pathMatch(.*)*`, name: 'NotFound', component: () => import('./pages/notfound.vue') }
  ]
});


if (!localStorage.getItem('posts')) {
  localStorage.setItem('posts', JSON.stringify(initialPosts));
}
window.addEventListener('storage', ({key, newValue}) => {
  if (key === 'posts' && !newValue) {
    window.location.reload();
  }
});

createApp(App)
  .use(router)
  .use(date)
  .use(sanitize)
  .component('SvgIcon', SvgIcon)
  .mount('#app')
