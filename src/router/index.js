import {createRouter, createWebHistory} from 'vue-router'
import MainLayout from '@/layout/MainLayout.vue'
import HomePage from '@/views/HomePage.vue'
import {useIssueStore, useSearchStore, useUserStore} from '@/stores'
import {searchUsingGet} from '@/openapi/api/articleController'
import {ref} from 'vue'

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
              path: '/issues/profile/:id',
              name: 'IssueProfile',
              props: true,
              component: () => import('@/views/issue/IssueProfile.vue'),
              beforeEnter: async (to, form, next) => {
                const issueStore = useIssueStore()
                try {
                  await issueStore.fetchIssueData(to.params.id)
                  next()
                } catch (error) {
                  console.log(error)
                }
              }
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
        {
          // 搜索结果页路由
          path: '/search',
          component: () => import('@/layout/ResultLayout.vue'),
          name: 'ResultPage',
          children: [
            {
              path: '/search/all/',
              component: () => import('@/views/search/SearchIndex.vue')
            },
            {
              // 用户
              path: `/search/user/`,
              name: 'UserResult',
              props: true,
              component: () => import('@/views/search/UserResult.vue')
            },
            {
              //讨论
              path: '/search/discuss/',
              name: 'DiscussItem',
              component: () => import('@/views/search/DiscussItem.vue'),
              beforeEnter: async (to,from, next) =>{
                const searchStore = useSearchStore()
                const pageRequestDTO = ref({
                  pageNum: 0,
                  pageSize: 5,
                  likeKey: searchStore.searchKey
                })
                const res = await searchUsingGet(pageRequestDTO.value)
                to.params.dataList = res.data.records
                next()
              }

            },
            {
              //ai
              path: '/search/ai/',
              component: () => import('@/views/ai/AIPage.vue')
            },
            {
              //诈骗信息库
              path: '/search/fraud/',
              name: 'FraudCase',
              component: () => import('@/views/fraud/FraudCase.vue')
            }
          ]
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
            },
            {
              path: 'like',
              component: () => import('@/views/user/LikeCollectPage.vue')
            },
          ]
        },
        {
          path: '/user/profile/:userId?',
          props: true,
          component: () => import('@/views/user/UserDetail.vue'),
          beforeEnter: async (to, from, next) => {
            const userStore = useUserStore()
            try {
              await userStore.fetchUserData(to.params.id)
              next()
            } catch (error) {
              console.log(error)
            }
          }
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
      component: () => import('@/layout/MainLayout.vue'),
      children: [
        {
          // 文章首页
          path: '',
          component: () => import('@/views/article/ArticlePage.vue')
        },
      ]
    },
    //富文本编辑器 - editor
    {
      path: '/editor',
      component: () => import('@/views/editor/EditorPage.vue'),
      children: [
        {
          path: `/editor/:issueId?`,
          props: true,
          component: () => import('@/views/editor/EditorPage.vue')
        }
      ]
    },
    {
      //引导页路由
      path: '/guide',
      component: () => import('@/views/guide/GuidePage.vue')
    },
    {
      path: '/ai',
      component: () => import('@/layout/MainLayout.vue'),
      children: [
        {
          // AI 首页
          path: '',
          component:  () => import('@/views/ai/AIPage.vue')
        },
      ]
    },
    {
      path: '/test',
      component: () => import('@/layout/MainLayout.vue'),
      children: [
        {
          path: '',
          component: () => import('@/views/test/TestPage.vue')
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
