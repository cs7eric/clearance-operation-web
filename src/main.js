import {createApp} from 'vue'

import 'element-plus/theme-chalk/el-message.css'
import 'element-plus/theme-chalk/el-message-box.css'
import 'element-plus/theme-chalk/el-loading.css'
import 'element-plus/theme-chalk/el-notification.css'
import '@/style/common.scss'
import '@/assets/font/font.css'
import Loader from '@/components/common/LoaderItem.vue'
import App from './App.vue'
import router from './router'
import pinia from '@/stores'
import {eventBus} from '@/event-bus/event-bus'

const app = createApp(App)
eventBus.provide('eventBus', eventBus);

app.use(pinia)
app.use(router)
app.component('LoaderItem', Loader)
app.provide('eventBus', eventBus);
app.mount('#app')
