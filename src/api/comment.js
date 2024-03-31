import request from '@/util/request'

// 根据parentId获取特定一级评论下的子评论
export const commentGetRepliesListService = async (parentId, articleId) => {
  return await request.get(`/comments/${articleId}/${parentId}/replies`)
}

//获取 该 文章ID下的一级评论
export const commentGet1stCommentService = async (articleId) => {
  return await request.get(`/comments/${articleId}`)
}

// 发表评论
export const commentCreateService = async (commentDto) => {
  await request.post('/comments/create', commentDto)
}