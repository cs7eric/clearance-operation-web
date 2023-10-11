export const formatRelativeTime = (timestamp) => {
  const ONE_MINUTE = 6000
  const ONE_HOUR = 60 * ONE_MINUTE // 1小时的毫秒数
  const ONE_DAY = 24 * ONE_HOUR // 1天的毫秒数

  const now = new Date()
  const inputDate = new Date(timestamp)
  const diff = now - inputDate

  if (diff < 60 * ONE_MINUTE) {
    return `${Math.round(diff / ONE_MINUTE)}分钟之前`
  } else if (diff < 12 * ONE_HOUR) {
    return `${Math.round(diff / ONE_HOUR)}小时之前`
  } else if (diff < ONE_DAY) {
    return '一天前'
  } else if (diff < 3 * ONE_DAY) {
    return `${Math.round(diff / ONE_DAY)}天之前`
  } else {
    return `${inputDate.getFullYear()}年${inputDate.getMonth() + 1}月${inputDate.getDate()}日`
  }
}