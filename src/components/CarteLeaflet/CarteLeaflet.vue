<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import L from 'leaflet'
import type { Parcours } from '../../data/editions'

const props = defineProps<{ parcours: Parcours[] }>()

const carteRef = ref<HTMLDivElement | null>(null)
let carteInstance: L.Map | null = null

onMounted(() => {
  if (!carteRef.value) return

  // Conversion {lat,lng}[] → [lat,lng][] pour Leaflet
  const toLatLng = (trace: typeof props.parcours[0]['trace']): [number, number][] =>
    trace.map((c) => [c.lat, c.lng])

  const toutesCoords = props.parcours.flatMap((p) => p.trace)
  const centreDefaut: [number, number] = [50.8508, 2.5472]
  const centre: [number, number] =
    toutesCoords.length > 0
      ? [
          toutesCoords.reduce((s, c) => s + c.lat, 0) / toutesCoords.length,
          toutesCoords.reduce((s, c) => s + c.lng, 0) / toutesCoords.length,
        ]
      : centreDefaut

  carteInstance = L.map(carteRef.value, { zoomControl: true }).setView(centre, 13)

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    maxZoom: 18,
  }).addTo(carteInstance)

  props.parcours.forEach((parcours) => {
    if (parcours.trace.length < 2) return

    const coords = toLatLng(parcours.trace)

    L.polyline(coords, {
      color: parcours.couleur,
      weight: 4,
      opacity: 0.9,
    })
      .bindPopup(`<strong>${parcours.nom}</strong><br>${parcours.distance} km · ${parcours.type}`)
      .addTo(carteInstance!)

    L.circleMarker(coords[0], {
      radius: 6,
      color: '#fff',
      fillColor: parcours.couleur,
      fillOpacity: 1,
      weight: 2,
    })
      .bindTooltip(parcours.nom, { permanent: false })
      .addTo(carteInstance!)
  })

  const bounds = L.featureGroup(props.parcours.map((p) => L.polyline(toLatLng(p.trace)))).getBounds()
  if (bounds.isValid()) carteInstance.fitBounds(bounds, { padding: [32, 32] })
})

onUnmounted(() => {
  carteInstance?.remove()
  carteInstance = null
})
</script>

<template>
  <div class="carte-bloc">
    <div class="carte-legende">
      <span v-for="p in props.parcours" :key="p.nom" class="carte-legende__item">
        <span class="carte-legende__trait" :style="{ background: p.couleur }"></span>
        <span class="carte-legende__nom">{{ p.nom }}</span>
        <span class="carte-legende__km">{{ p.distance }} km</span>
      </span>
    </div>
    <div ref="carteRef" class="carte-leaflet"></div>
  </div>
</template>

<style scoped>
/*
  isolation: isolate crée un nouveau contexte d'empilement.
  Les z-index internes de Leaflet (400–700) restent confinés ici
  et ne passent plus au-dessus du header sticky.
*/
.carte-bloc {
  isolation: isolate;
  border: 1px solid #d6d0c4;
  border-radius: var(--rayon);
  overflow: hidden;
}

.carte-legende {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem 1.5rem;
  padding: 0.65rem 1rem;
  background: var(--blanc);
  border-bottom: 1px solid #e2ddd5;
}

.carte-legende__item {
  display: flex;
  align-items: center;
  gap: 0.45rem;
  font-size: 0.82rem;
}

.carte-legende__trait {
  display: inline-block;
  width: 24px;
  height: 3px;
  border-radius: 2px;
  flex-shrink: 0;
}

.carte-legende__nom {
  color: var(--texte);
  font-weight: 500;
}

.carte-legende__km {
  color: var(--texte-doux);
}

.carte-leaflet {
  height: 440px;
  width: 100%;
}

@media (max-width: 600px) {
  .carte-leaflet { height: 280px; }
}
</style>
