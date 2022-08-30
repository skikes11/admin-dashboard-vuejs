import useStore from 'store'
import { createRouter, createWebHistory, Router } from 'vue-router'
import routes from './routes'
import auth from '../apiAuth'

const router: Router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach(() => {
  const store = useStore()
  store.dashboard.setIsSBOpen(false)
  auth.check_and_setHeaderToken()
})

export default router
