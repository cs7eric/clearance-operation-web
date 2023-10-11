import {defineStore} from 'pinia'
import {ref} from 'vue'

export const useLoaderStore = defineStore('co-loader', () => {
    const isLoading = ref(false)

    const show = () => {
      isLoading.value = true
    }

    const hide = () => {
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