import request from '@/util/request'

//邮箱验证码服务
export const sendCodeService = (email) => {
  return request.post('/common/sendCode', null, {
    params: {
      email: email
    }
  })
}
