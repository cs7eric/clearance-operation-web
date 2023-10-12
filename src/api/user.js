import instance from '@/util/request'
import {ElNotification} from 'element-plus'

// 用户注册、登录
export const userLoginService = async ({email, code}) => {

  try {
    const userData = await instance.post('/user/verify', {email, code})
    console.log(userData)
    return userData
  } catch (error) {
    console.error('Error during the API call:', error)
    throw error
  }
}


export const userUpdateService = async (user) => {
  await instance.put('/user/update', user)
  ElNotification({
    type: 'success',
    message: '更新成功'
  })
}