import { createRouter, createWebHistory } from 'vue-router'
const Home = () => import('../views/Home.vue')
const Link = () => import('../views/Link.vue')
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'foretnoire666',
      component: Home,
      meta: { titlle: '屑の雨傘 | Home' },
    },
    {
      path: '/link',
      name: 'リンク',
      component: Link,
      meta: { titlle: '屑の雨傘 | Link' },
    },
  ],
})

export default router
