import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import './style.css'

// Import des styles Leaflet (obligatoire pour que la carte s'affiche correctement)
import 'leaflet/dist/leaflet.css'

createApp(App).use(router).mount('#app')
