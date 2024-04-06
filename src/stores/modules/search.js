import {defineStore} from 'pinia'

export const useSearchStore = defineStore('search', {
  state: () => ({
    searchKey: ''
  }),
  actions: {
    setSearchValue(searchValue) {
      this.searchKey.value = searchValue
      console.log(this.searchKey.value)
    },
  }
})