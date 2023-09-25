import {createRouter, createWebHistory} from 'vue-router'
import MainLayout from '@/layout/MainLayout.vue'
import HomePage from '@/views/HomePage.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: MainLayout,
      redirect: '/home',
      children: [
        {
          path: '/home',
          component: HomePage
        }
      ]

    },
    {
      path: '/issues',
      component: () => import('@/views/issue/IssuePage.vue')
    },
    {
      path: '/find',
      component: () => import('@/views/find/FindPage.vue')
    },
    {
      path: '/topic',
      component: () => import('@/views/specialtopic/TopicPage.vue')
    }
  ]
})

export default router
