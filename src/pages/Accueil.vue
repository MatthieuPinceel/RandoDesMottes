<script setup lang="ts">
import { getEditionActive } from '../data/editions'
import BandeauEdition from '../components/BandeauEdition/BandeauEdition.vue'
import CarteLeaflet from '../components/CarteLeaflet/CarteLeaflet.vue'
import ListeParcours from '../components/ListeParcours/ListeParcours.vue'
import ListeAnimations from '../components/ListeAnimations/ListeAnimations.vue'

const edition = getEditionActive()
</script>

<template>
  <BandeauEdition :edition="edition" />

  <div class="conteneur page">

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

<style scoped>
.page {
  padding-top: 2.5rem;
  padding-bottom: 4rem;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
}

.page__presentation {
  font-size: 1.05rem;
  color: var(--texte-doux);
  line-height: 1.75;
  max-width: 680px;
  border-left: 3px solid var(--ambre);
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

@media (max-width: 860px) {
  .page__grille {
    grid-template-columns: 1fr;
  }
  .page__col-laterale {
    position: static;
    order: -1;
  }
}
</style>
