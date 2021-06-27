import './app.scss';
import 'virtual:svg-icons-register';
import { createApp } from 'vue';
// import { createRouter, createWebHistory  } from 'vue-router';
import router from './router.js';
import date from './plugins/date.js';
import sanitize from './plugins/sanitize.js';

// fake initial posts
import initialPosts from './api/initialPosts.json';

import App from './App.vue';
import SvgIcon from './components/SvgIcon.vue';

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
