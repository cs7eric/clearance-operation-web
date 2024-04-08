// @ts-ignore
/* eslint-disable */
import request from '../../util/request';

/** getUserById GET /user */
export async function getUserByIdUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getUserByIdUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.ResultUser>('/user', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** pageLikes GET /user/action_page */
export async function pageLikesUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.pageLikesUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.ResultPageResult>('/user/action_page', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** getLikeArticles GET /user/likes */
export async function getLikeArticlesUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getLikeArticlesUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.ResultList>('/user/likes', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** getLikeArticlesById GET /user/likes_id */
export async function getLikeArticlesByIdUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getLikeArticlesByIdUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.ResultList>('/user/likes_id', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 用户登录 POST /user/logino */
export async function loginUsingPost(body: API.UserDTO, options?: { [key: string]: any }) {
  return request<API.Result>('/user/logino', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** getRandomUser GET /user/random */
export async function getRandomUserUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getRandomUserUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.ResultList>('/user/random', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** searchFuzzy GET /user/search_fuzzy */
export async function searchFuzzyUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.searchFuzzyUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.ResultPageResult>('/user/search_fuzzy', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** update PUT /user/update */
export async function updateUsingPut(body: API.User, options?: { [key: string]: any }) {
  return request<API.Resultstring>('/user/update', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 用户注册、登录功能 POST /user/verify */
export async function verifyUsingPost(body: API.UserDTO, options?: { [key: string]: any }) {
  return request<API.Result>('/user/verify', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
