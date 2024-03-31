// @ts-ignore
/* eslint-disable */
import request from '../../util/request';

/** testBoot GET /test/boot */
export async function testBootUsingGet(options?: { [key: string]: any }) {
  return request<string>('/test/boot', {
    method: 'GET',
    ...(options || {}),
  });
}

/** testException GET /test/exception */
export async function testExceptionUsingGet(body: API.User, options?: { [key: string]: any }) {
  return request<string>('/test/exception', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
