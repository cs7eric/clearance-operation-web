// @ts-ignore
/* eslint-disable */
import request from '../../util/request';

/** encrypt GET /common/encrypt */
export async function encryptUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.encryptUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.Resultstring>('/common/encrypt', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** sendCode POST /common/sendCode */
export async function sendCodeUsingPost(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.sendCodeUsingPOSTParams,
  options?: { [key: string]: any },
) {
  return request<API.Resultstring>('/common/sendCode', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** upload POST /common/upload */
export async function uploadUsingPost(body: string, options?: { [key: string]: any }) {
  return request<API.Resultstring>('/common/upload', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
