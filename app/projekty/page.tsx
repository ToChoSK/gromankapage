import Link from "next/link"
import { ArrowRight, ExternalLink, Mail, Sparkles } from "lucide-react"

import PageHeader from "@/components/page-header"
import { PROJEKTY, STAV_POPIS, type Projekt } from "@/lib/projekty"

export const metadata = {
  title: "Projekty — O.Z. Gromanka",
  description:
    "Prehľad projektov občianskeho združenia Gromanka: Skrýša, Slovenské ľudovky a Šarišský slovník.",
  alternates: { canonical: "/projekty" },
  openGraph: {
    title: "Projekty — O.Z. Gromanka",
    description:
      "Čo v Gromanke staviame: mobilná aplikácia Skrýša, zbierka Slovenské ľudovky a Šarišský slovník.",
    type: "website",
    locale: "sk_SK",
  },
}

function StavBadge({ projekt }: { projekt: Projekt }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-xs font-semibold ${projekt.akcent.badge}`}
    >
      <span
        className={`w-1.5 h-1.5 rounded-full ${
          projekt.stav === "zive" ? "bg-current" : "bg-current opacity-50"
        }`}
        aria-hidden="true"
      />
      {STAV_POPIS[projekt.stav]}
    </span>
  )
}

function ProjektKarta({ projekt }: { projekt: Projekt }) {
  const { ikona: Ikona } = projekt
  // Detail na tomto webe má prednosť pred vlastnou doménou — ak ho projekt nemá,
  // karta vedie rovno na jeho stránku.
  const href = projekt.detail ?? projekt.web
  const jeExterny = !projekt.detail && Boolean(projekt.web)

  const obsah = (
    <>
      <div className="flex items-start justify-between gap-4 mb-5">
        <div
          className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${projekt.akcent.ikona}`}
        >
          <Ikona className="w-6 h-6" aria-hidden="true" />
        </div>
        <StavBadge projekt={projekt} />
      </div>

      <h2 className="text-xl font-bold text-blue-950 mb-1 group-hover:text-sky-700 transition-colors">
        {projekt.nazov}
      </h2>
      <p className="text-sm font-medium text-slate-500 mb-4">{projekt.podnadpis}</p>
      <p className="text-slate-600 leading-relaxed mb-6">{projekt.popis}</p>

      <div className="flex flex-wrap gap-2 mb-6">
        {projekt.tagy.map((tag) => (
          <span
            key={tag}
            className="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-600 text-xs font-medium"
          >
            {tag}
          </span>
        ))}
      </div>

      <span className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-sky-600 group-hover:text-sky-700 transition-colors">
        {jeExterny ? (
          <>
            {projekt.web?.replace(/^https:\/\//, "")}
            <ExternalLink className="w-4 h-4" aria-hidden="true" />
          </>
        ) : (
          <>
            Viac o projekte
            <ArrowRight
              className="w-4 h-4 group-hover:translate-x-1 transition-transform"
              aria-hidden="true"
            />
          </>
        )}
      </span>
    </>
  )

  const trieda =
    "group flex flex-col h-full p-6 sm:p-7 bg-white rounded-2xl border border-slate-200 hover:border-sky-300 hover:shadow-xl hover:shadow-sky-900/5 hover:-translate-y-1 transition-all duration-300"

  if (!href) {
    return <div className={trieda}>{obsah}</div>
  }

  return jeExterny ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className={trieda}>
      {obsah}
    </a>
  ) : (
    <Link href={href} className={trieda}>
      {obsah}
    </Link>
  )
}

export default function ProjektyPage() {
  return (
    <>
      <PageHeader
        stitok="O.Z. Gromanka"
        stitokIkona={Sparkles}
        nadpis="Projekty"
        perex="Okrem práce priamo v obci staviame aj veci, ktoré má z čoho čerpať ktokoľvek na Slovensku — od zbierky ľudových piesní cez slovník šarišského nárečia až po appku pre hubárov."
        spat={{ label: "Späť na hlavnú stránku", href: "/" }}
      />

      <div className="bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="py-14 sm:py-20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {PROJEKTY.map((projekt) => (
                <ProjektKarta key={projekt.slug} projekt={projekt} />
              ))}
            </div>

            <div className="mt-14 sm:mt-20 max-w-3xl">
              <div className="rounded-2xl bg-gradient-to-br from-slate-50 to-sky-50 border border-sky-100 p-7 sm:p-9">
                <h2 className="text-2xl font-bold text-blue-950 mb-3">Máš nápad na projekt?</h2>
                <p className="text-slate-600 leading-relaxed mb-6">
                  Ak robíš na niečom, čo dáva zmysel pre obec, pre Šariš alebo pre ľudí, ktorí sa
                  o kraj zaujímajú, ozvi sa. Radi pomôžeme alebo sa pridáme.
                </p>
                <a
                  href="mailto:chovancak@gromanka.eu"
                  className="inline-flex items-center gap-2 px-5 py-3 bg-sky-500 hover:bg-sky-400 text-white font-semibold rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-sky-500/30 hover:-translate-y-0.5"
                >
                  <Mail className="w-4 h-4" aria-hidden="true" />
                  chovancak@gromanka.eu
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
