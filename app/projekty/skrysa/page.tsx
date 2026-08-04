import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  Camera,
  CircleCheckBig,
  Leaf,
  MapPin,
  Mountain,
  Shield,
  Smartphone,
  WifiOff,
} from "lucide-react"

import PageHeader from "@/components/page-header"

export const metadata = {
  title: "Skrýša — mapa nálezov húb a lesných plodov",
  description:
    "Mobilná aplikácia Skrýša si pamätá miesta, kde ti rastú huby a lesné plody. Nemá server ani účty — všetko zostáva v tvojom telefóne.",
  alternates: { canonical: "/projekty/skrysa" },
  openGraph: {
    title: "Skrýša — mapa nálezov húb a lesných plodov",
    description: "Tvoje miesta zostanú tvoje. Aplikácia bez servera, účtov a sledovania.",
    type: "website",
    locale: "sk_SK",
  },
}

const FUNKCIE = [
  {
    ikona: MapPin,
    titul: "Zapíšeš nález tam, kde stojíš",
    text: "Alebo si miesto vyberieš priamo na mape, keď tam práve nie si.",
  },
  {
    ikona: Camera,
    titul: "Priložíš fotky",
    text: "Rovno z fotoaparátu alebo z galérie telefónu.",
  },
  {
    ikona: Leaf,
    titul: "Rozlíšiš konkrétny druh",
    text: "Nie len „huby“ — každý druh má vlastnú ikonu, takže na mape hneď vidíš, čo kde rastie.",
  },
  {
    ikona: Mountain,
    titul: "Vidíš to na turistickej mape",
    text: "Podkladom sú Mapy.com so značenými chodníkmi, vrstevnicami a terénom.",
  },
  {
    ikona: ArrowRight,
    titul: "Zoradíš nálezy podľa vzdialenosti",
    text: "Hneď vidíš, čo máš cestou, a appka ťa na miesto navedie tvojou navigáciou.",
  },
  {
    ikona: Shield,
    titul: "Vyexportuješ si zálohu",
    text: "Celú zbierku aj s fotkami, aby si o ňu neprišiel pri výmene telefónu.",
  },
]

const HUBY = [
  "hríb",
  "kozák",
  "masliak",
  "suchohríb",
  "kuriatko",
  "bedľa",
  "plávka",
  "rýdzik",
  "podpňovka",
  "hliva",
  "šampiňón",
  "smrž",
]

const PLODY = [
  "maliny",
  "čučoriedky",
  "lesné jahody",
  "černice",
  "brusnice",
  "baza",
  "orechy a gaštany",
  "bylinky",
]

function Druhy({ titul, polozky }: { titul: string; polozky: string[] }) {
  return (
    <div>
      <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500 mb-3">{titul}</h3>
      <div className="flex flex-wrap gap-2">
        {polozky.map((p) => (
          <span
            key={p}
            className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-700 text-sm font-medium"
          >
            {p}
          </span>
        ))}
      </div>
    </div>
  )
}

export default function SkrysaPage() {
  return (
    <>
      <PageHeader
        stitok="Mobilná aplikácia"
        stitokIkona={Smartphone}
        nadpis="Skrýša"
        perex="Zápisník miest, kde ti niečo rastie. Našiel si pod tým smrekom kozáky? Zarastený pás malín pri lesnej ceste? Zapíš si ho — o rok v septembri budeš presne vedieť, kam ísť."
        spat={{ label: "Späť na projekty", href: "/projekty" }}
      >
        <div className="mt-8 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white/80 text-sm font-medium">
          <span className="w-2 h-2 rounded-full bg-amber-400" aria-hidden="true" />
          Pripravuje sa vydanie pre Google Play
        </div>
      </PageHeader>

      <div className="bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="py-14 sm:py-20 space-y-16 sm:space-y-20">
            {/* Vizuál appky */}
            <div className="max-w-4xl">
              <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-xl shadow-blue-950/5">
                <Image
                  src="/images/skrysa-feature.png"
                  alt="Skrýša — Tvoje miesta zostanú tvoje."
                  width={1024}
                  height={500}
                  className="w-full h-auto"
                  priority
                />
              </div>
            </div>

            {/* Súkromie — hlavný dôvod, prečo appka vznikla */}
            <section className="max-w-3xl">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-11 h-11 rounded-xl bg-emerald-500/10 flex items-center justify-center shrink-0">
                  <Shield className="w-6 h-6 text-emerald-600" aria-hidden="true" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-blue-950">
                  Tvoje miesta zostanú tvoje
                </h2>
              </div>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  Toto je hlavný dôvod, prečo Skrýša vznikla. Hubárske miesta sa nikomu nedávajú —
                  a appka, ktorá by ich posielala na cudzí server, nemá u hubára čo hľadať.
                </p>
                <p>
                  Skrýša nemá server. Nemá účty. Nemá prihlasovanie. Všetko, čo do nej zapíšeš,
                  zostáva v pamäti tvojho telefónu a neodchádza z neho. Žiadna registrácia, žiadny
                  e-mail, žiadna reklama, žiadna analytika, žiadne sledovanie.
                </p>
              </div>
              <Link
                href="/projekty/skrysa/gdpr"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-sky-600 hover:text-sky-700 transition-colors group"
              >
                Zásady ochrany súkromia
                <ArrowRight
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                  aria-hidden="true"
                />
              </Link>
            </section>

            {/* Čo appka vie */}
            <section>
              <h2 className="text-2xl sm:text-3xl font-bold text-blue-950 mb-8">Čo appka vie</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {FUNKCIE.map(({ ikona: Ikona, titul, text }) => (
                  <div
                    key={titul}
                    className="p-6 bg-slate-50 rounded-2xl border border-slate-200"
                  >
                    <div className="w-10 h-10 rounded-xl bg-sky-500/10 flex items-center justify-center mb-4">
                      <Ikona className="w-5 h-5 text-sky-600" aria-hidden="true" />
                    </div>
                    <h3 className="font-bold text-blue-950 mb-2">{titul}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{text}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Druhy */}
            <section className="max-w-3xl">
              <h2 className="text-2xl sm:text-3xl font-bold text-blue-950 mb-3">
                Pozná konkrétne druhy
              </h2>
              <p className="text-slate-600 leading-relaxed mb-8">
                Každý druh má vlastnú ikonu a farbu, takže na mape rozlíšiš kuriatka od hríbov na
                prvý pohľad — bez otvárania jednotlivých nálezov.
              </p>
              <div className="space-y-8 p-7 rounded-2xl bg-slate-50 border border-slate-200">
                <Druhy titul="Huby" polozky={HUBY} />
                <Druhy titul="Lesné plody a ostatné" polozky={PLODY} />
              </div>
            </section>

            {/* Do lesa */}
            <section className="max-w-3xl grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-7 rounded-2xl bg-gradient-to-br from-slate-50 to-sky-50 border border-sky-100">
                <WifiOff className="w-6 h-6 text-sky-600 mb-4" aria-hidden="true" />
                <h3 className="font-bold text-blue-950 mb-2">Funguje aj bez signálu</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Zapísanie nálezu nepotrebuje internet. Súradnice, fotka aj poznámka sa uložia aj
                  hlboko v lese — mapa sa dokreslí, keď sa vrátiš do civilizácie.
                </p>
              </div>
              <div className="p-7 rounded-2xl bg-gradient-to-br from-slate-50 to-emerald-50 border border-emerald-100">
                <CircleCheckBig className="w-6 h-6 text-emerald-600 mb-4" aria-hidden="true" />
                <h3 className="font-bold text-blue-950 mb-2">Zadarmo a bez reklám</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Bez platenej verzie, bez nákupov v aplikácii a bez reklamných sietí. Appka nemá
                  ako na tebe zarábať, lebo o tebe nič nevie.
                </p>
              </div>
            </section>

            {/* Pätička stránky projektu */}
            <div className="pt-4 border-t border-slate-200 flex flex-wrap gap-x-8 gap-y-3">
              <Link
                href="/projekty"
                className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-sky-600 transition-colors"
              >
                Všetky projekty
              </Link>
              <Link
                href="/projekty/skrysa/gdpr"
                className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-sky-600 transition-colors"
              >
                Ochrana súkromia
              </Link>
              <a
                href="mailto:tchovancak10@gmail.com"
                className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-sky-600 transition-colors"
              >
                Napíš k aplikácii
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
