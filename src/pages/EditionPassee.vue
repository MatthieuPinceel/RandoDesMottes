<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import { getEditionParAnnee } from '../data/editions'
import BandeauEdition from '../components/BandeauEdition/BandeauEdition.vue'
import CarteLeaflet from '../components/CarteLeaflet/CarteLeaflet.vue'
import ListeParcours from '../components/ListeParcours/ListeParcours.vue'
import ListeAnimations from '../components/ListeAnimations/ListeAnimations.vue'

const route = useRoute()
const edition = computed(() => {
  const annee = Number.parseInt(route.params.annee as string, 10)
  return getEditionParAnnee(annee)
})
</script>

<template>
  <div v-if="!edition" class="introuvable conteneur">
    <h1>Édition introuvable</h1>
    <p>L'année {{ $route.params.annee }} ne figure pas dans nos archives.</p>
    <RouterLink to="/" class="lien-retour">← Retour à l'accueil</RouterLink>
  </div>

  <template v-else>
    <BandeauEdition :edition="edition" :passee="true" />

    <div class="conteneur page">

      <RouterLink to="/" class="lien-retour">← Édition en cours</RouterLink>

      <p class="page__presentation">{{ edition.presentation }}</p>

      <div class="page__grille">
        <div class="page__col-principale">
          <section>
            <h2 class="section-label">Carte des parcours</h2>
            <CarteLeaflet :parcours="edition.parcours" />
          </section>
          <ListeAnimations :animations="edition.animations" />
        </div>
        <aside class="page__col-laterale">
          <ListeParcours :parcours="edition.parcours" />
        </aside>
      </div>

    </div>
  </template>
</template>

<style scoped>
.page {
  padding-top: 2rem;
  padding-bottom: 4rem;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
}

.lien-retour {
  display: inline-block;
  font-size: 0.82rem;
  font-weight: 600;
  color: var(--texte-doux);
  letter-spacing: 0.01em;
  transition: color 0.15s;
}
.lien-retour:hover { color: var(--texte); }

.page__presentation {
  font-size: 1.05rem;
  color: var(--texte-doux);
  line-height: 1.75;
  max-width: 680px;
  border-left: 3px solid #7a5c38;
  padding-left: 1.25rem;
}

.page__grille {
  display: grid;
  grid-template-columns: 1fr 300px;
  gap: 2rem;
  align-items: start;
}

.page__col-principale {
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
}

.page__col-laterale {
  position: sticky;
  top: calc(var(--hauteur-header) + 1.5rem);
}

.section-label {
  font-size: 0.72rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: var(--texte-doux);
  margin-bottom: 1rem;
}

.introuvable {
  padding: 5rem 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

@media (max-width: 860px) {
  .page__grille { grid-template-columns: 1fr; }
  .page__col-laterale {
    position: static;
    order: -1;
  }
}
</style>
