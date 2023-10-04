import axios from 'axios'
import {ElMessage} from 'element-plus'
import {useUserStore} from '@/stores/modules/user'
import {useLoaderStore} from '@/stores/modules/loader'

const baseURL = 'http://localhost:8089/'

const instance = axios.create({
  baseURL,
  headers: {'Content-Type': 'application/json'}
})

// 请求拦截器
instance.interceptors.request.use(
  (config) => {
    const loaderStore = useLoaderStore()
    loaderStore.show()
    const userStore = useUserStore()
    if (userStore.jwt) {
      config.headers.Authorization = userStore.jwt
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// 响应拦截器
instance.interceptors.response.use(
  (res) => {
    const loaderStore = useLoaderStore()
    loaderStore.hide()
    if (res.data.success) {
      // 处理成功响应
      ElMessage.success(res.data.message || '操作成功')
      return res.data // 返回响应数据部分
    } else {
      // 处理失败响应
      ElMessage.error(res.data.message || '操作失败')
      return Promise.reject(res.data)
    }
  },
  (error) => {
    // 处理网络错误等
    ElMessage.error(error.message || '网络错误')
    return Promise.reject(error)
  }
)

export default instance
export {baseURL}
