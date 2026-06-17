<script setup lang="ts">
import type { Animation } from '../../data/editions'

defineProps<{ animations: Animation[] }>()
</script>

<template>
  <section class="animations">
    <h2 class="section-titre">Programme de la journée</h2>

    <div class="animations__tableau">
      <div
        v-for="(a, i) in animations"
        :key="i"
        class="animations__ligne"
      >
        <div class="animations__horaire">{{ a.horaire }}</div>
        <div class="animations__contenu">
          <strong class="animations__nom">{{ a.nom }}</strong>
          <p class="animations__desc">{{ a.description }}</p>
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

.animations__tableau {
  border: 1px solid #ddd8ce;
  border-radius: var(--rayon);
  overflow: hidden;
  background: var(--blanc);
}

.animations__ligne {
  display: grid;
  grid-template-columns: 130px 1fr;
  border-bottom: 1px solid #ece8df;
}
.animations__ligne:last-child {
  border-bottom: none;
}

.animations__horaire {
  padding: 0.9rem 1rem;
  font-size: 0.78rem;
  font-weight: 700;
  color: var(--blanc);
  background: var(--vert-moyen);
  display: flex;
  align-items: flex-start;
  letter-spacing: 0.02em;
  font-variant-numeric: tabular-nums;
  line-height: 1.4;
}

/* Alternance légère sur les horaires */
.animations__ligne:nth-child(even) .animations__horaire {
  background: #183d22;
}

.animations__contenu {
  padding: 0.85rem 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}

.animations__nom {
  font-size: 0.92rem;
  font-weight: 600;
  color: var(--texte);
  line-height: 1.3;
}

.animations__desc {
  font-size: 0.84rem;
  color: var(--texte-doux);
  line-height: 1.5;
}

@media (max-width: 500px) {
  .animations__ligne {
    grid-template-columns: 1fr;
  }
  .animations__horaire {
    padding: 0.45rem 1rem;
    font-size: 0.72rem;
  }
}
</style>
