import {defineStore} from 'pinia'
import {ref} from 'vue'
import {searchFuzzyUsingGet} from '@/openapi/api/userController'
import {useSearchStore} from '@/stores'
import {searchUsingGet} from '@/openapi/api/articleController'

export const useTabStore = defineStore('co-tab', {
  state: () => ({
    activeTab: ref(''),
    router: null,
    route: null,
    result: ref([])
  }),
  actions: {
    async setActiveTab(tabName) {

      const pageRequestDTO = ref({
        pageNum: 1,
        pageSize: 7,
        keyword: '',
        likeKey: ''
      })

      this.activeTab = tabName
      const searchStore = useSearchStore()
      searchStore.setSearchType(this.activeTab)
      if (this.activeTab === 'user') {

        pageRequestDTO.value.keyword = searchStore.searchKey
        const res = await searchFuzzyUsingGet(pageRequestDTO.value)
        searchStore.searchResults = res.data
        console.log(res)

        this.router.push({
          path: '/search/user',
          query: {key: searchStore.searchKey}
        })
        console.log('user')
      } else if (this.activeTab === 'article') {
        pageRequestDTO.value.likeKey = searchStore.searchKey
        pageRequestDTO.value.pageNum = pageRequestDTO.value.pageNum - 1
        await searchUsingGet(pageRequestDTO.value)
          .then(res => {
            console.log(res)
            searchStore.searchResults = res.data
            console.log(searchStore.searchResults)
          })

        this.router.push({
          path: '/search/discuss',
          query: {key: searchStore.searchKey}
        })

      } else if (this.activeTab === 'fraud') {

        pageRequestDTO.value.keyword = searchStore.searchKey
        const res = await searchFuzzyUsingGet(pageRequestDTO.value)
        searchStore.searchResults = res.data
        this.router.push({
          path: '/search/fraud',
          query: {key: searchStore.searchKey}
        })
      }

    },
    setNextTab(tab) {
      this.activeTab = tab
    },
    setRouter(router) {
      this.router = router
    },
    setRoute(route) {
      this.route = route
    }
  }
})