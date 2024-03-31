// @ts-ignore
/* eslint-disable */
import request from '../../util/request';

/** page POST /fraud/page */
export async function pageUsingPost(body: API.PageRequestDTO, options?: { [key: string]: any }) {
  return request<API.ResultPageResult>('/fraud/page', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
