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
      path: '/login',
      component: () => import('@/layout/MainLayout.vue'),
      children: [
        {
          path: '',
          component: () =>  import('@/views/auth/LoginPage.vue'),
          name: 'login'
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
    },
    // 用户信息路由
    {
      path: '/user',
      component: () => import('@/layout/MainLayout.vue'),
      children: [
        {
          path: '',
          component: () => import('@/layout/UserLayout.vue'),
          redirect: '/user/index',
          children: [
            {
              path: 'index',
              component: () => import('@/views/user/IndexPage.vue')
            },
            {
              path: 'info',
              component: () => import('@/views/user/InfoPage.vue')
            }
          ]
        }
      ]
    }
  ]
})

// 全局前置路由守卫
// router.beforeEach((to, from, next) => {
//   const userStore = useUserStore()
//   const requiresAuth = ['']
//   if (requiresAuth && !userStore.isLoggedIn) {
//     next('/login');
//   } else if (to.path === '/login' && userStore.isLoggedIn) {
//     next('/home');
//   } else {
//     next();
//   }
// })

export default router
