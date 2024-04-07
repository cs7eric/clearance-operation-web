import {defineStore} from 'pinia'

export const useSearchStore = defineStore('search', {
  state: () => ({
    searchKey: '',
    searchType: ''
  }),
  actions: {
    setSearchValue(searchValue) {
      this.searchKey.value = searchValue
      console.log(this.searchKey.value)
    },
    setSearchType(searchType) {
      this.searchType.value = searchType
    }
  }
})