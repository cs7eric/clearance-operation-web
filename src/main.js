import { createApp } from 'vue'

import 'element-plus/theme-chalk/el-message.css'
import 'element-plus/theme-chalk/el-message-box.css'
import 'element-plus/theme-chalk/el-loading.css'
import '@/style/common.scss'
import Loader from '@/components/common/LoaderItem.vue'
import App from './App.vue'
import router from './router'
import pinia from '@/stores'


const app = createApp(App)

app.use(pinia)
app.use(router)
app.component('LoaderItem', Loader)

app.mount('#app')
