// @ts-ignore
/* eslint-disable */
import request from '../../util/request';

/** create POST /label */
export async function createUsingPost(body: API.LabelListDTO, options?: { [key: string]: any }) {
  return request<API.Resultstring>('/label', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** getList GET /label/list */
export async function getListUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getListUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.ResultListobject>('/label/list', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
