import request from '@/util/request'

//问题发布服务
export const issuePostService = async (issueData) => {

  return await request.post('/issues', issueData)
}

//获取问题列表
export const issueGetAllService = async () => {
  return await request.get('/issues/all')
}


//查询单个问题数据
export const issueGetService = async (id) => {
  return await request.get(`/issues/${id}`)
}


