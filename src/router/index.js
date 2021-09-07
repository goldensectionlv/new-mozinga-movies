import Vue from 'vue'
import VueRouter from 'vue-router'
import DesktopLayout from '@/views/desktop/DesktopLayout'
import WatchlistPage from '@/views/desktop/WatchlistPage'
import RecommendPage from '@/views/desktop/RecommendPage'
import WatchedPage from '@/views/desktop/WatchedPage'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: DesktopLayout,
    // there will be mobile layout too
    children: [
      {
        path: '/recommend',
        component: RecommendPage
      },
      {
        path: '/watched',
        component: WatchedPage
      },
      {
        path: '/watchlist',
        component: WatchlistPage
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
