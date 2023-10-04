import instance from '@/util/request'

// 用户注册、登录
export const userLoginService = async ({email, code}) => {

  try {
    return await instance.post('/user/verify', {email, code})
  } catch (error) {
    console.error('Error during the API call:', error)
    throw error
  }
}