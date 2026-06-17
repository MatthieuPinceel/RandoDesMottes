import { createRouter, createWebHashHistory } from 'vue-router'
import Accueil from '../pages/Accueil.vue'
import EditionPassee from '../pages/EditionPassee.vue'

const router = createRouter({
  // Hash history : GitHub Pages ne gère pas les redirections serveur,
  // donc les URLs du type /edition/2025 retourneraient 404.
  // Avec le hash, les URLs deviennent /#/edition/2025 et ça fonctionne partout.
  history: createWebHashHistory(),
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
