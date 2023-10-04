import {defineStore} from 'pinia'
import {ref} from 'vue'

export const useLoaderStore = defineStore('co-loader', () => {
    const isLoading = ref(false)

    const show = () => {
      console.log("显示loader")
      isLoading.value = true
    }

    const hide = () => {
      console.log("隐藏loader")
      isLoading.value = false
    }

    return {
      isLoading,
      hide,
      show
    }
  }
  , {
    persist: true
  })