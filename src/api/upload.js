import instance from '@/util/request'

export const fileUploadService = async (file) => {

  const formData = new FormData()
  formData.append('file', file)
  return await instance.post('/common/upload', formData)
}