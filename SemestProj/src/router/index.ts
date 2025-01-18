import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/views/HomePage.vue';
import MedPage from '@/views/MedPage.vue';
import KosikPage from '@/views/KosikPage.vue';
import ZamestnanciPage from '@/views/ZamestnanciPage.vue';
const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
  },
  {
    path: '/med',
    name: 'Med',
    component: MedPage,
  },
  {
    path: '/kosik',
    name: 'Kosik',
    component: KosikPage,
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