import {ref} from 'vue'
import {defineStore} from 'pinia'

export const useUserStore = defineStore('co-modules', () => {

    const user = ref({
      user: {
        createBy: '',
        createTime: '',
        updateBy: '',
        updateTime: '',
        delFlag: '',
        version: '',
        id: '',
        username: '',
        nickName: '',
        password: '',
        email: '',
        phonenumber: '',
        sex: '',
        avatar: '',
        userType: ''
      },
      permissions: '',
      authorities: '',
      enabled: '',
      password: '',
      username: '',
      accountNonExpired: '',
      accountNonLocked: '',
      credentialsNonExpired: ''
    })
    const setUser = (newUser) => {
      user.value = newUser
    }
    const removeUser = (user) => {
      user.value = ''
    }
    const jwt = ref('')
    const setJWT = (newJWT) => {
      jwt.value = newJWT
    }

    const removeJWT = () => {
      jwt.value = ''
    }

    return {
      user,
      setUser,
      removeUser,
      jwt,
      setJWT,
      removeJWT
    }
  }
  , {
    persist: true
  })