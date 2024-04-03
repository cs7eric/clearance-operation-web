// @ts-ignore
/* eslint-disable */
import request from '../../util/request';

/** getArticleById GET /articles */
export async function getArticleByIdUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getArticleByIdUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.Result>('/articles', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** doAction POST /articles/action */
export async function doActionUsingPost(body: API.UserActionDTO, options?: { [key: string]: any }) {
  return request<API.Resultstring>('/articles/action', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** getAllArticle POST /articles/all */
export async function getAllArticleUsingPost(
  body: API.ArticleDTO,
  options?: { [key: string]: any },
) {
  return request<API.Result>('/articles/all', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** getIssueAnswers GET /articles/answers/${param0} */
export async function getIssueAnswersUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getIssueAnswersUsingGETParams,
  options?: { [key: string]: any },
) {
  const { issueId: param0, ...queryParams } = params;
  return request<API.ResultListArticle>(`/articles/answers/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** getCountByUsername GET /articles/count */
export async function getCountByUsernameUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getCountByUsernameUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.Resultlong>('/articles/count', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** createArticle POST /articles/create */
export async function createArticleUsingPost(
  body: API.ArticleDTO,
  options?: { [key: string]: any },
) {
  return request<API.Resultstring>('/articles/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** getArticlesByPage POST /articles/page */
export async function getArticlesByPageUsingPost(
  body: API.ArticlePageDTO,
  options?: { [key: string]: any },
) {
  return request<API.ResultListArticle>('/articles/page', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** search GET /articles/search */
export async function searchUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.searchUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.ResultArticlePageDTO>('/articles/search', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** getArticlesByUsername GET /articles/user/${param0} */
export async function getArticlesByUsernameUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getArticlesByUsernameUsingGETParams,
  options?: { [key: string]: any },
) {
  const { username: param0, ...queryParams } = params;
  return request<API.ResultListArticle>(`/articles/user/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}
