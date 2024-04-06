import {defineStore} from 'pinia'
import {ref} from 'vue'
import {useRouter} from 'vue-router'

export const useTabStore = defineStore('co-tab', {
  state: () => ({
    activeTab: ref(''),
    router: null,
    route: null
  }),
  actions: {
    setActiveTab(tabName) {
      this.activeTab = tabName

      const key = ref('')
      key.value =  this.route.query.key
      if (tabName === 'all') {

        this.router.push({path: '/search/user', query: {key: key.value}})
          .then(res => console.log(res))
        console.log('user')
      } else if (tabName === 'article') {
        this.router.push({path: '/search/discuss', query: {key: key.value}})


      }
    },
    setRouter(router) {
      this.router = router
    },
    setRoute(route) {
      this.route = route
    }
  }
})