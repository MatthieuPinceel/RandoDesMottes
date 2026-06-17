import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  // Base obligatoire pour GitHub Pages : correspond au nom du dépôt
  base: '/RandoDesMottes/',
})
