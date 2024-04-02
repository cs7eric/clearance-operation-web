// @ts-ignore
/* eslint-disable */
import request from '../../util/request';

/** getCaseList GET /fraud/list */
export async function getCaseListUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getCaseListUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.ResultList>('/fraud/list', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

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
