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

    const setAvatar = (newAvatar) => {
      userInfo.value.user.avatar = newAvatar
    }

    const setNickname = (newNickname) => {
      userInfo.value.user.nickName = newNickname
    }
    const setSex = (newSex) => {
      userInfo.value.user.sex = newSex
    }
    const setPhonenum = (newPhonenum) => {
      userInfo.value.user.phonenumber = newPhonenum
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
      setAvatar,
      setNickname,
      setSex,
      setPhonenum,
      userExist,
      jwt,
      setJWT,
      removeJWT
    }
  }
  , {
    persist: true
  })