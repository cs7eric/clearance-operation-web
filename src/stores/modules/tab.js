import {defineStore} from 'pinia'
import {ref} from 'vue'
import {useRouter} from 'vue-router'
import {searchFuzzyUsingGet} from '@/openapi/api/userController'
import {useSearchStore} from '@/stores'

export const useTabStore = defineStore('co-tab', {
  state: () => ({
    activeTab: ref(''),
    router: null,
    route: null
  }),
  actions: {
    async setActiveTab(tabName) {

      const pageRequestDTO = ref({
        pageNum: 1,
        pageSize: 7,
        keyword: ''
      })

      this.activeTab = tabName
      console.log("-----------------")
      const key = ref('')
      const searchStore = useSearchStore()
      if (this.activeTab === 'user') {

        pageRequestDTO.value.keyword = searchStore.searchKey
        const res = await searchFuzzyUsingGet(pageRequestDTO.value)
        searchStore.searchResults = res.data

        this.router.push({path: '/search/user', query: {key: searchStore.searchKey}})
        console.log('user')
      } else if (this.activeTab === 'article') {
        this.router.push({path: '/search/discuss', query: {key: key.value}})
      } else if (this.activeTab === 'fraud') {
        this.router.push({path: '/search/fraud', query: {key: key.value}})
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