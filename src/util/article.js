
export const truncatedText = (text) =>  () => {
  return text.value.length > 130 ? text.value.slice(0, 130) + '...' : text
}