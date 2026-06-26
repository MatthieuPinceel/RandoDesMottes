import { createRouter, createWebHistory } from 'vue-router'
import Accueil from '../pages/Accueil.vue'
import EditionPassee from '../pages/EditionPassee.vue'

const router = createRouter({
  // Netlify gère les redirections SPA via public/_redirects
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Accueil,
    },
    {
      // Route dynamique : /edition/2025, /edition/2024, etc.
      path: '/edition/:annee',
      component: EditionPassee,
    },
  ],
  // Scroll en haut de page à chaque navigation
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router
