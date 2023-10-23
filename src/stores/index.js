import {createPinia} from 'pinia'

import persist from 'pinia-plugin-persistedstate'

const pinia = createPinia()

pinia.use(persist)

export default pinia
export {useLoaderStore} from './modules/loader'
export {useUserStore} from './modules/user'
export {useIssueStore} from './modules/issue'
