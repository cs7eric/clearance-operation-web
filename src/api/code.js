import instance from '@/util/request'

//邮箱验证码服务
export const sendCodeService = (email) => {
  return instance.post('/common/sendCode', null, {
    params: {
      email: email
    }
  })
}
