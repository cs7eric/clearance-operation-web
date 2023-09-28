import {ref} from 'vue'
import {defineStore} from 'pinia'

export const useUserStore = defineStore('co-user', () => {
    const jwt = ref('')
    const setJWT = (newJWT) => {
      jwt.value = newJWT
    }

    const removeJWT = () => {
      jwt.value = ''
    }

    return {
      jwt,
      setJWT,
      removeJWT
    }
  }
  , {
    persist: true
  })