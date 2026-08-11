import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

import HomePage from '../pages/HomePage.vue'
import AboutPage from '../pages/AboutPage.vue'
import PortfolioPage from '../pages/PortfolioPage.vue'
import PartnersPage from '../pages/PartnersPage.vue'
import ContactPage from '../pages/ContactPage.vue'

const routes: RouteRecordRaw[] = [
  { path: '/', name: 'home', component: HomePage },
  { path: '/sobre', name: 'about', component: AboutPage },
  { path: '/portfolio', name: 'portfolio', component: PortfolioPage },
  { path: '/parceiros', name: 'partners', component: PartnersPage },
  { path: '/contato', name: 'contact', component: ContactPage },
  { path: '/:pathMatch(.*)*', redirect: '/' },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0, behavior: 'smooth' }
  },
})

export default router
