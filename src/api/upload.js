import request from '@/util/request'

export const fileUploadService = async (file) => {

  const formData = new FormData()
  formData.append('file', file)
  return await request.post('/common/upload', formData)
}