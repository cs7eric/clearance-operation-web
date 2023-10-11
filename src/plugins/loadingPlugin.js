import LoaderItem from '@/components/common/LoaderItem.vue'
import {createApp} from 'vue'


let loaderInstance;
const createLoader = () => {
  const app = createApp(LoaderItem)
  const mountNode = document.createElement('div')
  document.body.appendChild(mountNode)
  loaderInstance = app.mount(mountNode)
}

const showLoader = () => {
  if (!loaderInstance) {
    createLoader()
  }
  loaderInstance.show()
}

const hideLoader = () => {
  loaderInstance.hide()
}

export  {
  showLoader,
  hideLoader
}
