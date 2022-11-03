import vueEmitter from 'core/emitter'
import { createApp, h } from 'vue'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import App from './App.vue'
import AppComponents from './components'
import VueSweetAlert2 from 'vue-sweetalert2'
import Notifications from '@kyvg/vue3-notification'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VueCookies from 'vue-cookies'
import 'sweetalert2/dist/sweetalert2.min.css'
import './index.css'
import firebaseMessaging from './firebase-messaging'
import router from './router'
// create new app instance

const createNewApp = () => {
  const app = createApp({
    render: () => h(App),
  })
  library.add(fas, fab)
  app.component('font-awesome-icon', FontAwesomeIcon)
  app.provide('eventHub', vueEmitter)
  app.use(router)
  app.use(ElementPlus)
  app.use(AppComponents)
  app.use(Notifications)
  app.use(VueCookies)
  app.use(createPinia())
  app.use(VueSweetAlert2)
  app.config.globalProperties.$messaging = firebaseMessaging
  app.mount('#app')
  app.config.performance = true
}

const initApp = async () => {
  createNewApp()
}

initApp().then(() => {
  // requestPermission()
  // initialized
})
