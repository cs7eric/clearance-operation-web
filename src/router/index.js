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
        },
        {
          path: '/issues',
          children: [
            {
              path: '/issues',
              component: () => import('@/views/issue/IssuesPage.vue')
            },
            {
              path: '/issues/ask',
              component: () => import('@/views/issue/AskIssue.vue')
            },
            {
              path: '/issues/profile',
              component: () => import('@/views/issue/IssueProfile.vue')
            }
          ]
        },
        {
          path: '/find',
          component: () => import('@/views/find/FindPage.vue')
        },
        {
          path: '/topic',
          component: () => import('@/views/specialtopic/TopicPage.vue')
        },
        //用户路由配置
        {
          path: '/user',
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
    },
    {
      path: '/login',
      component: () => import('@/layout/MainLayout.vue'),
      children: [
        {
          path: '',
          component: () => import('@/views/auth/LoginPage.vue'),
          name: 'login'
        }
      ]
    },
    // 文章相关路由
    {
      path: '/article',
      component: import('@/layout/MainLayout.vue'),
      children: [
        {
          // 文章首页
          path: '',
          component: import('@/views/article/ArticlePage.vue')
        },
      ]
    },
    //富文本编辑器 - editor
    {
      path: '/editor',
      component: import('@/views/editor/EditorPage.vue'),
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
