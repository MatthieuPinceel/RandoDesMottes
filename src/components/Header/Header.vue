<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { getEditionsPassees } from '../../data/editions'

const editionsPassees = getEditionsPassees()
const menuOuvert = ref(false)

function toggleMenu() { menuOuvert.value = !menuOuvert.value }
function fermerMenu() { menuOuvert.value = false }
</script>

<template>
  <header class="header">
    <div class="header__interieur conteneur">

      <RouterLink to="/" class="header__logo" @click="fermerMenu">
        <!-- Balisage GR : marqueur blanc + rouge, symbole du randonneur français -->
        <svg class="header__balisage" viewBox="0 0 16 24" aria-hidden="true">
          <rect width="16" height="12" rx="1" fill="#ffffff"/>
          <rect y="12" width="16" height="12" rx="1" fill="#c0392b"/>
        </svg>
        <span class="header__logo-nom">La Rando<br class="br-mobile"> des Mottes</span>
      </RouterLink>

      <nav class="header__nav" :class="{ 'header__nav--ouvert': menuOuvert }">
        <RouterLink to="/" class="header__lien" @click="fermerMenu">
          Édition 2026
        </RouterLink>
        <span class="header__separateur" aria-hidden="true">—</span>
        <span class="header__label">Archives</span>
        <RouterLink
          v-for="edition in editionsPassees"
          :key="edition.annee"
          :to="`/edition/${edition.annee}`"
          class="header__lien header__lien--annee"
          @click="fermerMenu"
        >
          {{ edition.annee }}
        </RouterLink>
      </nav>

      <button class="header__burger" @click="toggleMenu" :aria-expanded="menuOuvert" aria-label="Menu">
        <span></span><span></span><span></span>
      </button>
    </div>
  </header>
</template>

<style scoped>
.header {
  position: sticky;
  top: 0;
  z-index: 1000;
  background: var(--vert);
  height: var(--hauteur-header);
  border-bottom: 1px solid rgba(255,255,255,0.06);
}

.header__interieur {
  display: flex;
  align-items: center;
  gap: 2rem;
  height: 100%;
}

.header__logo {
  display: flex;
  align-items: center;
  gap: 0.65rem;
  flex-shrink: 0;
}

.header__balisage {
  width: 14px;
  height: 21px;
  flex-shrink: 0;
  border-radius: 1px;
  box-shadow: 0 0 0 1px rgba(255,255,255,0.15);
}

.header__logo-nom {
  font-size: 0.95rem;
  font-weight: 700;
  color: var(--blanc);
  letter-spacing: 0.01em;
  line-height: 1.25;
  text-transform: uppercase;
}

.br-mobile { display: none; }

.header__nav {
  display: flex;
  align-items: center;
  gap: 0.1rem;
  margin-left: auto;
}

.header__lien {
  color: rgba(255,255,255,0.6);
  padding: 0.35rem 0.65rem;
  font-size: 0.88rem;
  font-weight: 500;
  border-radius: 3px;
  transition: color 0.15s;
  letter-spacing: 0.01em;
}
.header__lien:hover,
.header__lien.router-link-exact-active {
  color: var(--blanc);
}
.header__lien.router-link-exact-active {
  background: rgba(255,255,255,0.08);
}

.header__separateur {
  color: rgba(255,255,255,0.2);
  font-size: 0.8rem;
  margin: 0 0.4rem;
  user-select: none;
}

.header__label {
  font-size: 0.72rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: rgba(255,255,255,0.3);
  margin-right: 0.25rem;
}

.header__burger {
  display: none;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  width: 36px;
  height: 36px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
  margin-left: auto;
}
.header__burger span {
  display: block;
  height: 2px;
  background: rgba(255,255,255,0.75);
  border-radius: 1px;
}

@media (max-width: 700px) {
  .header__burger { display: flex; }
  .br-mobile { display: inline; }

  .header__nav {
    display: none;
    position: absolute;
    top: var(--hauteur-header);
    left: 0; right: 0;
    background: var(--vert);
    flex-direction: column;
    align-items: flex-start;
    padding: 1rem 1.5rem 1.5rem;
    gap: 0.15rem;
    border-top: 1px solid rgba(255,255,255,0.08);
    margin-left: 0;
  }
  .header__nav--ouvert { display: flex; }
  .header__separateur { display: none; }
  .header__label {
    margin-top: 0.75rem;
    margin-bottom: 0.1rem;
    margin-right: 0;
  }
}
</style>
