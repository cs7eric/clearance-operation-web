// @ts-ignore
/* eslint-disable */
import request from '../../util/request';

/** getFirstLevelComments GET /comments/${param0} */
export async function getFirstLevelCommentsUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getFirstLevelCommentsUsingGETParams,
  options?: { [key: string]: any },
) {
  const { articleId: param0, ...queryParams } = params;
  return request<API.ResultListComment>(`/comments/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** getRepliesToParentComment GET /comments/${param0}/${param1}/replies */
export async function getRepliesToParentCommentUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getRepliesToParentCommentUsingGETParams,
  options?: { [key: string]: any },
) {
  const { articleId: param0, commentId: param1, ...queryParams } = params;
  return request<API.ResultListComment>(`/comments/${param0}/${param1}/replies`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** createComment POST /comments/create */
export async function createCommentUsingPost(
  body: API.CommentDTO,
  options?: { [key: string]: any },
) {
  return request<API.Resultstring>('/comments/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** deleteComment POST /comments/delete */
export async function deleteCommentUsingPost(
  body: API.CommentDTO,
  options?: { [key: string]: any },
) {
  return request<API.ResultComment>('/comments/delete', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** updateComment POST /comments/update */
export async function updateCommentUsingPost(
  body: API.CommentDTO,
  options?: { [key: string]: any },
) {
  return request<API.Result>('/comments/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
