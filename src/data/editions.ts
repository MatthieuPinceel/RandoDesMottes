// ============================================================
// DONNÉES — La Rando des Mottes
// Les éditions sont stockées dans src/data/editions/*.json
// Éditez les fichiers JSON directement ou via le panneau /admin
// ============================================================

export type TypeActivite = "velo" | "marche" | "moto"

export interface Coordonnee {
  lat: number
  lng: number
}

export interface Parcours {
  nom: string
  distance: number
  type: TypeActivite
  couleur: string
  trace: Coordonnee[]
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
  active: boolean
  photo?: string     // URL optionnelle d'une photo de couverture
  presentation: string
  parcours: Parcours[]
  animations: Animation[]
}

// Chargement automatique de tous les fichiers JSON du dossier editions/
const modules = import.meta.glob<Edition>('./editions/*.json', { eager: true })

const editions: Edition[] = (Object.values(modules) as Edition[])
  .sort((a, b) => b.annee - a.annee)

export default editions

export function getEditionActive(): Edition {
  const active = editions.find((e) => e.active)
  if (!active) throw new Error("Aucune édition active trouvée dans src/data/editions/")
  return active
}

export function getEditionsPassees(): Edition[] {
  return editions.filter((e) => !e.active)
}

export function getEditionParAnnee(annee: number): Edition | undefined {
  return editions.find((e) => e.annee === annee)
}
