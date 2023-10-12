import {ref} from 'vue'
import {defineStore} from 'pinia'

export const useUserStore = defineStore('co-user', () => {

    const userInfo = ref({})
    const setUser = (newUser) => {
      userInfo.value = newUser
    }
    const removeUser = () => {
      userInfo.value = ''
    }
    const jwt = ref('')
    const setJWT = (newJWT) => {
      jwt.value = newJWT
    }

    const removeJWT = () => {
      jwt.value = ''
    }

    const userExist = () => {
      return userInfo.value !== ''
    }

    return {
      userInfo,
      setUser,
      removeUser,
      userExist,
      jwt,
      setJWT,
      removeJWT
    }
  }
  , {
    persist: true
  })