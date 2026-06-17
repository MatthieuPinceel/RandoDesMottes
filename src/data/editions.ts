// ============================================================
// FICHIER DE DONNÉES — La Rando des Mottes
// Éditez ce fichier pour mettre à jour les éditions.
// ============================================================

// Types d'activité proposés lors de l'événement
export type TypeActivite = "velo" | "marche" | "moto"

export interface Parcours {
  nom: string
  distance: number         // en kilomètres
  type: TypeActivite
  couleur: string          // couleur hexadécimale pour la carte
  trace: [number, number][] // coordonnées [lat, lng]
}

export interface Animation {
  nom: string
  horaire: string
  description: string
}

export interface Edition {
  annee: number
  date: string
  lieuDepart: string
  presentation: string
  active: boolean          // true = édition de l'année en cours
  parcours: Parcours[]
  animations: Animation[]
}

// ============================================================
// DONNÉES DES ÉDITIONS
// Toutes les éditions se déroulent à Lederzeele (Nord, 59)
// Coordonnées du centre du bourg : 50.8508° N, 2.5472° E
// ============================================================

const editions: Edition[] = [

  // ─────────────────────────────────────────────────────────
  // ÉDITION 2026 — active (à venir)
  // ─────────────────────────────────────────────────────────
  {
    annee: 2026,
    date: "Dimanche 17 mai 2026",
    lieuDepart: "Lederzeele (Nord, 59)",
    active: true,
    presentation:
      "Pour cette 4ᵉ édition, La Rando des Mottes vous donne rendez-vous au " +
      "cœur de la plaine flamande. Trois départs, trois ambiances : à pied pour " +
      "flâner dans les chemins de traverse entre watergangs et moulins, à vélo " +
      "pour parcourir les routes pavées du pays de Cassel, et en moto pour une " +
      "grande boucle à travers les Flandres jusqu'aux portes de Bergues.",
    parcours: [
      {
        nom: "Chemin des Watergangs",
        distance: 9,
        type: "marche",
        couleur: "#2d7a3a",
        // Boucle à pied autour de Lederzeele, longeant les fossés flamands
        trace: [
          [50.8508, 2.5472],
          [50.8530, 2.5540],
          [50.8562, 2.5605],
          [50.8590, 2.5580],
          [50.8608, 2.5520],
          [50.8590, 2.5455],
          [50.8560, 2.5400],
          [50.8530, 2.5420],
          [50.8508, 2.5472],
        ],
      },
      {
        nom: "Circuit du pays de Cassel",
        distance: 38,
        type: "velo",
        couleur: "#1a6ab0",
        // Boucle vélo vers Cassel et retour par les routes flamandes
        trace: [
          [50.8508, 2.5472],
          [50.8450, 2.5380],
          [50.8350, 2.5260],
          [50.8220, 2.5100],
          [50.8090, 2.4980],
          [50.8000, 2.4900],
          [50.7980, 2.5020],
          [50.8060, 2.5200],
          [50.8170, 2.5350],
          [50.8280, 2.5480],
          [50.8380, 2.5560],
          [50.8450, 2.5530],
          [50.8508, 2.5472],
        ],
      },
      {
        nom: "Grande Boucle des Flandres",
        distance: 110,
        type: "moto",
        couleur: "#c0392b",
        // Grande boucle moto vers Bergues, Dunkerque et retour
        trace: [
          [50.8508, 2.5472],
          [50.8700, 2.5600],
          [50.8900, 2.5800],
          [50.9100, 2.5700],
          [50.9400, 2.5200],
          [50.9700, 2.4400],
          [51.0100, 2.3800],
          [51.0300, 2.3400],
          [51.0200, 2.3000],
          [50.9900, 2.2800],
          [50.9600, 2.3000],
          [50.9200, 2.3500],
          [50.8900, 2.4000],
          [50.8700, 2.4400],
          [50.8550, 2.4900],
          [50.8508, 2.5472],
        ],
      },
    ],
    animations: [
      {
        nom: "Accueil & café flamand",
        horaire: "07h30 – 09h00",
        description: "Café, tartines et spéculoos offerts par l'association pour bien démarrer.",
      },
      {
        nom: "Départ des marcheurs",
        horaire: "09h00",
        description: "Coup d'envoi depuis la place du bourg, remise des plans de parcours.",
      },
      {
        nom: "Départ des cyclistes",
        horaire: "09h15",
        description: "Départ groupé des vélos depuis la salle des fêtes.",
      },
      {
        nom: "Départ des motards",
        horaire: "09h30",
        description: "Départ en convoi encadré par les bénévoles moto.",
      },
      {
        nom: "Ravitaillement km 4",
        horaire: "10h30 – 12h30",
        description: "Point d'eau, fruits, pain d'épices. Réservé aux marcheurs.",
      },
      {
        nom: "Repas flamand",
        horaire: "12h00 – 14h30",
        description: "Potjevleesch, frites et bière Ch'ti pour tout le monde sous chapiteau.",
      },
      {
        nom: "Concert de la Fanfare de Wormhout",
        horaire: "13h30 – 15h30",
        description: "Animation musicale en plein air, entrée libre.",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // ÉDITION 2025
  // ─────────────────────────────────────────────────────────
  {
    annee: 2025,
    date: "Dimanche 18 mai 2025",
    lieuDepart: "Lederzeele (Nord, 59)",
    active: false,
    presentation:
      "La 3ᵉ édition s'est tenue sous un ciel gris typiquement flamand, mais " +
      "avec une chaleur humaine qui n'avait rien à envier au soleil. Plus de 320 " +
      "participants avaient fait le déplacement à Lederzeele pour arpenter les " +
      "chemins de crête du mont des Cats ou longer les prairies du Houtland à " +
      "vélo. Une belle réussite malgré quelques averses en fin de matinée.",
    parcours: [
      {
        nom: "Sentier du Houtland",
        distance: 11,
        type: "marche",
        couleur: "#2d7a3a",
        trace: [
          [50.8508, 2.5472],
          [50.8545, 2.5390],
          [50.8575, 2.5310],
          [50.8600, 2.5250],
          [50.8580, 2.5180],
          [50.8540, 2.5220],
          [50.8510, 2.5310],
          [50.8495, 2.5400],
          [50.8508, 2.5472],
        ],
      },
      {
        nom: "Tour du mont des Cats",
        distance: 44,
        type: "velo",
        couleur: "#1a6ab0",
        trace: [
          [50.8508, 2.5472],
          [50.8420, 2.5350],
          [50.8300, 2.5200],
          [50.8200, 2.5300],
          [50.8150, 2.5500],
          [50.8100, 2.5700],
          [50.8050, 2.5900],
          [50.8000, 2.6100],
          [50.8100, 2.6250],
          [50.8250, 2.6200],
          [50.8400, 2.6050],
          [50.8500, 2.5800],
          [50.8508, 2.5472],
        ],
      },
      {
        nom: "Boucle des Monts de Flandre",
        distance: 85,
        type: "moto",
        couleur: "#c0392b",
        trace: [
          [50.8508, 2.5472],
          [50.8300, 2.5200],
          [50.8100, 2.4900],
          [50.7950, 2.4700],
          [50.7800, 2.4900],
          [50.7700, 2.5200],
          [50.7750, 2.5600],
          [50.7850, 2.5900],
          [50.8000, 2.6200],
          [50.8200, 2.6300],
          [50.8400, 2.6100],
          [50.8508, 2.5472],
        ],
      },
    ],
    animations: [
      {
        nom: "Café & accueil",
        horaire: "08h00 – 09h00",
        description: "Accueil des participants, vérification des inscriptions.",
      },
      {
        nom: "Départs échelonnés",
        horaire: "09h00 – 09h30",
        description: "Marche à 09h00, vélo à 09h15, moto à 09h30.",
      },
      {
        nom: "Ravitaillement mi-parcours",
        horaire: "11h00 – 13h00",
        description: "Pain, fromage de Bergues, eau et sodas. Pour toutes les activités.",
      },
      {
        nom: "Déjeuner partagé",
        horaire: "12h30 – 15h00",
        description: "Carbonnade flamande, frites, gaufres de Lille pour le dessert.",
      },
      {
        nom: "Tombola & remise des souvenirs",
        horaire: "14h30",
        description: "Tirage au sort et remise des plaques commémoratives aux finishers.",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // ÉDITION 2024
  // ─────────────────────────────────────────────────────────
  {
    annee: 2024,
    date: "Dimanche 19 mai 2024",
    lieuDepart: "Lederzeele (Nord, 59)",
    active: false,
    presentation:
      "Deuxième édition avec deux nouveautés : l'ajout d'un parcours moto et " +
      "un ravitaillement au fromage de Bergues sponsorisé par la fromagerie " +
      "locale. 250 participants sur les trois activités, une météo clémente et " +
      "une organisation qui montait en puissance. Les traces des cyclistes ont " +
      "traversé pour la première fois les pavés du Steenvoorde.",
    parcours: [
      {
        nom: "Boucle des estaminets",
        distance: 8,
        type: "marche",
        couleur: "#2d7a3a",
        trace: [
          [50.8508, 2.5472],
          [50.8535, 2.5530],
          [50.8560, 2.5570],
          [50.8575, 2.5510],
          [50.8555, 2.5450],
          [50.8525, 2.5410],
          [50.8508, 2.5472],
        ],
      },
      {
        nom: "Circuit des Flandres pavées",
        distance: 52,
        type: "velo",
        couleur: "#1a6ab0",
        trace: [
          [50.8508, 2.5472],
          [50.8420, 2.5600],
          [50.8350, 2.5750],
          [50.8280, 2.5900],
          [50.8200, 2.6050],
          [50.8150, 2.6200],
          [50.8100, 2.6100],
          [50.8180, 2.5900],
          [50.8280, 2.5700],
          [50.8380, 2.5550],
          [50.8450, 2.5490],
          [50.8508, 2.5472],
        ],
      },
    ],
    animations: [
      {
        nom: "Accueil café",
        horaire: "08h30 – 09h00",
        description: "Café et pain d'épices à la salle des fêtes.",
      },
      {
        nom: "Départs",
        horaire: "09h00 – 09h30",
        description: "Marche à 09h00 depuis la place, vélo à 09h30 depuis le parking.",
      },
      {
        nom: "Stand fromage de Bergues",
        horaire: "11h00 – 14h00",
        description: "Dégustation et vente du fameux fromage au cumin, producteur local.",
      },
      {
        nom: "Repas & animations",
        horaire: "12h00 – 15h00",
        description: "Buffet flamand et animations pour les enfants dans la cour de l'école.",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // ÉDITION 2023 — première édition
  // ─────────────────────────────────────────────────────────
  {
    annee: 2023,
    date: "Dimanche 21 mai 2023",
    lieuDepart: "Lederzeele (Nord, 59)",
    active: false,
    presentation:
      "La toute première édition de La Rando des Mottes ! Née d'une poignée " +
      "de passionnés du bourg, cette journée a rassemblé 140 participants pour " +
      "deux parcours inauguraux — une marche dans les chemins creux et une " +
      "sortie vélo vers Cassel. L'ambiance était au rendez-vous, et la promesse " +
      "d'une belle tradition annuelle était déjà dans l'air.",
    parcours: [
      {
        nom: "Chemin des fondateurs",
        distance: 7,
        type: "marche",
        couleur: "#2d7a3a",
        trace: [
          [50.8508, 2.5472],
          [50.8528, 2.5430],
          [50.8550, 2.5390],
          [50.8570, 2.5440],
          [50.8555, 2.5510],
          [50.8530, 2.5520],
          [50.8508, 2.5472],
        ],
      },
      {
        nom: "Route vers Cassel",
        distance: 29,
        type: "velo",
        couleur: "#1a6ab0",
        trace: [
          [50.8508, 2.5472],
          [50.8400, 2.5350],
          [50.8280, 2.5200],
          [50.8150, 2.5100],
          [50.8050, 2.5000],
          [50.7990, 2.4900],
          [50.7980, 2.4980],
          [50.8080, 2.5150],
          [50.8200, 2.5300],
          [50.8350, 2.5430],
          [50.8450, 2.5480],
          [50.8508, 2.5472],
        ],
      },
    ],
    animations: [
      {
        nom: "Inauguration",
        horaire: "09h00",
        description: "Discours de lancement par les fondateurs, sous les tilleuls de la place.",
      },
      {
        nom: "Départs",
        horaire: "09h30",
        description: "Premier départ de l'histoire de La Rando des Mottes.",
      },
      {
        nom: "Repas inaugural",
        horaire: "12h30 – 15h00",
        description: "Chacun apportait son plat : une grande tablée de 140 couverts sur la place.",
      },
      {
        nom: "Moules-frites de clôture",
        horaire: "15h00",
        description: "Moules du Nord et frites pour clore cette première édition mémorable.",
      },
    ],
  },
]

export default editions

export function getEditionActive(): Edition {
  const active = editions.find((e) => e.active)
  if (!active) throw new Error("Aucune édition marquée comme active dans editions.ts")
  return active
}

export function getEditionsPassees(): Edition[] {
  return editions.filter((e) => !e.active).sort((a, b) => b.annee - a.annee)
}

export function getEditionParAnnee(annee: number): Edition | undefined {
  return editions.find((e) => e.annee === annee)
}
