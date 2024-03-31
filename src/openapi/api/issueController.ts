// @ts-ignore
/* eslint-disable */
import request from '../../util/request';

/** postIssue POST /issues */
export async function postIssueUsingPost(body: API.IssueDTO, options?: { [key: string]: any }) {
  return request<API.Resultstring>('/issues', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** getIssue GET /issues/${param0} */
export async function getIssueUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getIssueUsingGETParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.ResultIssue>(`/issues/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** getAllIssues GET /issues/all */
export async function getAllIssuesUsingGet(options?: { [key: string]: any }) {
  return request<API.ResultListIssue>('/issues/all', {
    method: 'GET',
    ...(options || {}),
  });
}
