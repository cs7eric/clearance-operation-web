// @ts-ignore
/* eslint-disable */
import request from '../../util/request';

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
