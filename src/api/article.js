import request from '@/util/request'

// 获取全部文章信息
export const articleGetAllService = async (articleDTO) => {
  return await request.post('/articles/all', articleDTO)
}

// 发布文章
export const articleCreateService = async (articleData) => {
  return await request.post('/articles/create', articleData)
}

// 获取该 文章下的评论条数
export const articleGetCountService = async (articleId) => {
  return await request.get('/articles/count', articleId)
}


//获取该问题下的文章列表
export const articleGetIssueAnswerService = async (issueId) => {
  return await request.get(`/articles/answers/${issueId}`)

}

