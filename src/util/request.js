import axios from 'axios'
import {ElMessage} from 'element-plus'
import {useUserStore} from '@/stores/modules/user'
import {useLoaderStore} from '@/stores/modules/loader'
import {hideLoader, showLoader} from '@/plugins/loadingPlugin'

const baseURL = 'http://localhost:8089/'
const request = axios.create({
  baseURL,
  headers: {'Content-Type': 'application/json'}
})

// 请求拦截器
request.interceptors.request.use(
  (config) => {
    showLoader()
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
request.interceptors.response.use(

  (res) => {
    hideLoader()
    const loaderStore = useLoaderStore()
    loaderStore.hide()
    if (res.data.success) {
      // 处理成功响应
      return res.data // 返回响应数据部分
    } else {
      // 处理失败响应
      ElMessage.error(res.data.message || '网络异常')
      return Promise.reject(res.data)
    }
  },
  (error) => {
    hideLoader()

    // 处理网络错误等
    ElMessage.error(error.message || '网络错误')
    return Promise.reject(error)
  }
)

export default request
export {baseURL}
