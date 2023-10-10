// 将 html 转换为 普通文本
export const parseHTMLContent = (html) => {
  const doc = new DOMParser().parseFromString(html, 'text/html')
  return doc.body.textContent || ''
}