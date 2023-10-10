import instance from '@/util/request'

// 获取全部文章信息
export const articleGetAllService = async () => {
  return await instance.get('/articles/all')
}

export const articleCreateService = async (articleData) => {
  return await instance.post('/articles/create', articleData)
}