import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/views/HomePage.vue';
import ZamestnanciPage from '@/views/ZamestnanciPage.vue';
const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
  },
  {
    path: '/zamestnanci',
    name: 'Zamestnanci',
    component: ZamestnanciPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;