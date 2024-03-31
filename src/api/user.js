import request from '@/util/request'
import {ElMessage, ElNotification} from 'element-plus'

// 用户注册、登录
export const userLoginService = async ({email, code}) => {

  try {
    const userData = await request.post('/user/verify', {email, code})
    console.log(userData)
    return userData
  } catch (error) {
    console.error('Error during the API call:', error)
    throw error
  }
}


export const userUpdateService = async (user) => {
  await request.put('/user/update', user)
  ElNotification({
    type: 'success',
    message: '更新成功'
  })
}

// 用户点赞、收藏行为
export  const userActionService = async (actionType, userId, articleId) => {
  const res = await request.post('/articles/action', {
    userActionType: actionType,
    userId: userId,
    articleId: articleId
  })
  ElMessage({
    message: "success",
    type: 'success'
  })

  return res

}