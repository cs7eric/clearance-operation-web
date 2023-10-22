import instance from '@/util/request'

//问题发布服务
export const issuePostService = async (issueData) => {

  return await instance.post('/issues', issueData)
}

//获取问题列表
export const issueGetAllService = async () => {
  return await instance.get('/issues/all')
}


