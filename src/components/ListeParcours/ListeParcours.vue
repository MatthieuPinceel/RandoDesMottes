<script setup lang="ts">
import type { Parcours } from '../../data/editions'

defineProps<{ parcours: Parcours[] }>()
</script>

<template>
  <section class="parcours">
    <h2 class="section-titre">Parcours</h2>

    <div class="parcours__liste">
      <div
        v-for="p in parcours"
        :key="p.nom"
        class="parcours__ligne"
      >
        <!-- Trait de couleur latéral -->
        <div class="parcours__couleur" :style="{ background: p.couleur }"></div>

        <div class="parcours__corps">
          <span class="parcours__nom">{{ p.nom }}</span>
          <div class="parcours__specs">
            <span class="parcours__dist">{{ p.distance }} km</span>
            <span :class="`badge-activite ${p.type}`">{{ p.type }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.section-titre {
  font-size: 0.72rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: var(--texte-doux);
  margin-bottom: 1rem;
}

.parcours__liste {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.parcours__ligne {
  display: flex;
  align-items: stretch;
  background: var(--blanc);
  border: 1px solid #ddd8ce;
  border-radius: var(--rayon);
  overflow: hidden;
  transition: border-color 0.15s;
}
.parcours__ligne:hover {
  border-color: #b8b0a2;
}

.parcours__couleur {
  width: 5px;
  flex-shrink: 0;
}

.parcours__corps {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 0.9rem 1.25rem;
  flex: 1;
}

.parcours__nom {
  font-size: 0.97rem;
  font-weight: 600;
  color: var(--texte);
}

.parcours__specs {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  flex-shrink: 0;
}

.parcours__dist {
  font-size: 0.88rem;
  font-weight: 700;
  color: var(--texte-doux);
  font-variant-numeric: tabular-nums;
}

@media (max-width: 500px) {
  .parcours__corps {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.4rem;
    padding: 0.75rem 1rem;
  }
}
</style>
