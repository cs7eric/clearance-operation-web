import instance from '@/util/request'

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