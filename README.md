# La Rando des Mottes — Site vitrine

Site web de présentation de l'association de randonnée **La Rando des Mottes**.  
DÉMO uniquement : aucun backend, toutes les données sont fictives.

## Lancement

```sh
npm install
npm run dev
```

Ouvrez ensuite [http://localhost:5173](http://localhost:5173) dans votre navigateur.

## Où éditer les données

**Tout se passe dans un seul fichier :**

```
src/data/editions.ts
```

Ce fichier contient la liste de toutes les éditions (2023 à 2026).  
Chaque édition possède :

| Champ          | Description                                                        |
|----------------|--------------------------------------------------------------------|
| `annee`        | L'année (ex. `2026`)                                               |
| `date`         | Date en clair (ex. `"Dimanche 17 mai 2026"`)                       |
| `lieuDepart`   | Commune + département                                              |
| `active`       | `true` = édition de l'année en cours (une seule !)                 |
| `presentation` | Texte de présentation affiché en page                              |
| `parcours`     | Liste des parcours (nom, distance, difficulté, couleur, tracé GPS) |
| `animations`   | Programme du jour (nom, horaire, description)                      |

### Ajouter une nouvelle édition

1. Passer l'édition actuellement `active: true` à `active: false`
2. Ajouter un nouvel objet en tête du tableau avec `active: true`
3. Renseigner les champs `trace` avec des coordonnées `[lat, lng]` réelles ou fictives

### Modifier un parcours

Les coordonnées `trace` sont des tableaux `[latitude, longitude]`.  
Vous pouvez les générer sur [geojson.io](https://geojson.io) ou [OpenStreetMap](https://www.openstreetmap.org).

## Structure du projet

```text
src/
├── data/
│   └── editions.ts          ← FICHIER DE DONNÉES (seul fichier à éditer)
├── components/
│   ├── Header/              ← Barre de navigation
│   ├── BandeauEdition/      ← Bandeau date + lieu (accueil & éditions passées)
│   ├── CarteLeaflet/        ← Carte interactive (Leaflet + OpenStreetMap)
│   ├── ListeParcours/       ← Grille des parcours
│   └── ListeAnimations/     ← Programme chronologique
├── pages/
│   ├── Accueil.vue          ← Page principale (édition en cours)
│   └── EditionPassee.vue    ← Page /edition/:annee
├── router/
│   └── index.ts             ← Configuration Vue Router
├── App.vue
├── main.ts
└── style.css                ← Variables CSS (couleurs, dimensions)
```

## Stack technique

- [Vue 3](https://vuejs.org/) + [Vite](https://vitejs.dev/) + TypeScript
- [Vue Router 4](https://router.vuejs.org/) pour la navigation
- [Leaflet](https://leafletjs.com/) + tuiles [OpenStreetMap](https://www.openstreetmap.org/) pour les cartes
- CSS Modules natifs, aucune dépendance CSS tierce
