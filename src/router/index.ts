import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/RootView.vue'
import AboutView from '@/views/AboutView.vue'
import FeedView from '@/views/FeedView.vue'
import UserView from '@/views/UserView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/feed',
      name: 'feed',
      component: FeedView
    },
    {
      path: '/user/:name',
      name: 'user',
      component: UserView
    }
  ]
})

export default router
