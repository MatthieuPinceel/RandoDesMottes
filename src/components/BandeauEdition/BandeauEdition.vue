<script setup lang="ts">
import type { Edition } from '../../data/editions'

const props = defineProps<{
  edition: Edition
  passee?: boolean
}>()
</script>

<template>
  <section class="bandeau" :class="{ 'bandeau--passee': props.passee }">

    <!-- Photo de couverture optionnelle (ajoutée via le CMS) -->
    <div v-if="props.edition.photo" class="bandeau__photo">
      <img :src="props.edition.photo" :alt="`Édition ${props.edition.annee}`" />
    </div>

    <div class="bandeau__interieur conteneur">

      <div class="bandeau__meta">
        <span v-if="props.passee" class="bandeau__tag-passee">Édition archivée</span>
        <span v-else class="bandeau__tag-active">Édition {{ props.edition.annee }}</span>
      </div>

      <h1 class="bandeau__titre">
        La Rando<br>des Mottes
      </h1>

      <div class="bandeau__infos">
        <span class="bandeau__info-date">{{ props.edition.date }}</span>
        <span class="bandeau__info-lieu">{{ props.edition.lieuDepart }}</span>
        <span class="bandeau__info-nb">
          {{ props.edition.parcours.length }} parcours
          · {{ props.edition.animations.length }} animations
        </span>
      </div>

    </div>
  </section>
</template>

<style scoped>
.bandeau {
  position: relative;
  background: var(--vert-moyen);
  padding: 3.5rem 0 3rem;
  border-bottom: 3px solid var(--ambre);
  overflow: hidden;
}

.bandeau--passee {
  background: #2a1f14;
  border-bottom-color: #7a5c38;
}

/* Photo en arrière-plan avec overlay sombre */
.bandeau__photo {
  position: absolute;
  inset: 0;
  z-index: 0;
}
.bandeau__photo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  opacity: 0.35;
}

.bandeau__interieur {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.bandeau__meta {
  display: flex;
}

.bandeau__tag-active,
.bandeau__tag-passee {
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  padding: 3px 10px;
  border-radius: 2px;
}

.bandeau__tag-active {
  background: var(--ambre);
  color: var(--blanc);
}

.bandeau__tag-passee {
  background: rgba(255,255,255,0.12);
  color: rgba(255,255,255,0.92);
  border: 1px solid rgba(255,255,255,0.3);
}

.bandeau__titre {
  color: var(--blanc);
  font-size: clamp(2.8rem, 8vw, 5.5rem);
  font-weight: 900;
  line-height: 0.95;
  letter-spacing: -0.03em;
  text-transform: uppercase;
}

.bandeau__infos {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem 1.5rem;
  margin-top: 0.5rem;
}

.bandeau__info-date,
.bandeau__info-lieu,
.bandeau__info-nb {
  font-size: 0.88rem;
  color: rgba(255,255,255,0.75);
  font-weight: 400;
}

.bandeau__info-date {
  color: rgba(255,255,255,0.9);
  font-weight: 600;
}

@media (max-width: 640px) {
  .bandeau { padding: 2.5rem 0 2rem; }
  .bandeau__infos { flex-direction: column; gap: 0.2rem; }
}
</style>
