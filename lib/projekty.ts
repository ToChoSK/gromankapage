import { BookOpen, MapPin, Music, type LucideIcon } from "lucide-react"

/**
 * Projekty O.Z. Gromanka.
 *
 * Zoznam je zdrojom pravdy pre prehľad `/projekty` aj pre odkazy inde na webe —
 * nový projekt pridaj sem, nie do JSX jednotlivých stránok.
 */

export type ProjektStav = "zive" | "pripravuje-sa"

export type Projekt = {
  slug: string
  nazov: string
  podnadpis: string
  /** Krátky text na kartu v prehľade — drž do troch riadkov. */
  popis: string
  ikona: LucideIcon
  stav: ProjektStav
  tagy: string[]
  /** Podstránka na tomto webe. Zatiaľ ju má iba Skrýša. */
  detail?: string
  /** Vlastná doména projektu, ak beží samostatne. */
  web?: string
  /** Tailwind triedy akcentu, aby mala každá karta vlastnú tvár. */
  akcent: { ikona: string; badge: string }
}

export const PROJEKTY: Projekt[] = [
  {
    slug: "skrysa",
    nazov: "Skrýša",
    podnadpis: "Mapa nálezov húb a lesných plodov",
    popis:
      "Mobilná aplikácia, do ktorej si zapíšeš miesta, kde ti rastú huby a lesné plody. Všetko zostáva v telefóne — appka nemá server ani účty.",
    ikona: MapPin,
    stav: "pripravuje-sa",
    tagy: ["Android", "Mapy", "Príroda"],
    detail: "/projekty/skrysa",
    akcent: { ikona: "text-emerald-600 bg-emerald-500/10", badge: "bg-emerald-50 text-emerald-700 border-emerald-200" },
  },
  {
    slug: "slovenske-ludovky",
    nazov: "Slovenské ľudovky",
    podnadpis: "Texty ľudových piesní z celého Slovenska",
    popis:
      "Zbierka slovenských ľudových piesní na jednom mieste — texty, regióny a interaktívna folklórna mapa Slovenska.",
    ikona: Music,
    stav: "zive",
    tagy: ["Web", "Folklór", "Mapa regiónov"],
    web: "https://slovenskeludovky.sk",
    akcent: { ikona: "text-rose-600 bg-rose-500/10", badge: "bg-rose-50 text-rose-700 border-rose-200" },
  },
  {
    slug: "slovnik-saris",
    nazov: "Šarišský slovník",
    podnadpis: "Slovenské a šarišské slová",
    popis:
      "Slovník šarišského nárečia. Vyhľadáš slovenské heslo a nájdeš jeho šarišské podoby aj s regionálnymi variantmi.",
    ikona: BookOpen,
    stav: "zive",
    tagy: ["Web", "Nárečie", "Šariš"],
    web: "https://slovniksaris.eu",
    akcent: { ikona: "text-amber-600 bg-amber-500/10", badge: "bg-amber-50 text-amber-700 border-amber-200" },
  },
]

export function projektBySlug(slug: string): Projekt | undefined {
  return PROJEKTY.find((p) => p.slug === slug)
}

export const STAV_POPIS: Record<ProjektStav, string> = {
  zive: "Beží",
  "pripravuje-sa": "Pripravuje sa",
}
