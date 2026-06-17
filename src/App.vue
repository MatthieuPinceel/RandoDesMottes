<script setup lang="ts">
import Header from './components/Header/Header.vue'
</script>

<template>
  <Header />
  <!-- RouterView injecte la page correspondant à la route courante -->
  <main class="contenu-principal">
    <RouterView />
  </main>
</template>

<style scoped>
.contenu-principal {
  min-height: calc(100vh - var(--hauteur-header));
}
</style>
