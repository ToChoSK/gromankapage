import Link from "next/link"
import {
  ArrowLeft,
  Camera,
  Database,
  Eye,
  Globe,
  Mail,
  MapPin,
  Scale,
  Shield,
  Trash2,
} from "lucide-react"

export const metadata = {
  title: "Ochrana súkromia — Skrýša",
  description:
    "Zásady ochrany súkromia mobilnej aplikácie Skrýša. Aplikácia nezbiera žiadne osobné údaje — poloha, fotky a nálezy zostávajú výhradne v zariadení používateľa.",
  robots: { index: true, follow: true },
  openGraph: {
    title: "Ochrana súkromia — Skrýša",
    description:
      "Aplikácia Skrýša nezbiera žiadne osobné údaje. Všetko zostáva v tvojom telefóne.",
    type: "article",
    locale: "sk_SK",
  },
}

const PLATNE_OD = "3. augusta 2026"
const VYDAVATEL = "Tomáš Chovančák"
const EMAIL = "tchovancak10@gmail.com"

function Section({
  icon: Icon,
  title,
  children,
}: {
  icon: React.ElementType
  title: string
  children: React.ReactNode
}) {
  return (
    <section className="scroll-mt-24">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-xl bg-sky-500/10 flex items-center justify-center shrink-0">
          <Icon className="w-5 h-5 text-sky-600" aria-hidden="true" />
        </div>
        <h2 className="text-xl sm:text-2xl font-bold text-blue-950">{title}</h2>
      </div>
      <div className="space-y-4 text-slate-600 leading-relaxed pl-0 sm:pl-13">{children}</div>
    </section>
  )
}

export default function OchranaSukromiaSkrysa() {
  return (
    <>
      {/* Tmavá hlavička — navbar je hore priesvitný, na bielom podklade by zanikol. */}
      <header className="relative bg-gradient-to-br from-blue-950 via-blue-900 to-sky-900 overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 30%, white 1px, transparent 1px), radial-gradient(circle at 70% 60%, white 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
          aria-hidden="true"
        />
        <div className="container mx-auto px-4 sm:px-6 relative">
          <div className="py-14 sm:py-20 max-w-3xl">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm font-medium text-white/70 hover:text-white transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" aria-hidden="true" />
              Späť na hlavnú stránku
            </Link>

            <div className="flex items-center gap-3 mb-5">
              <div className="w-11 h-11 rounded-xl bg-sky-500/20 flex items-center justify-center">
                <Shield className="w-6 h-6 text-sky-300" aria-hidden="true" />
              </div>
              <span className="text-sky-300 font-semibold tracking-wide uppercase text-sm">
                Mobilná aplikácia Skrýša
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5 leading-tight text-balance">
              Zásady ochrany súkromia
            </h1>
            <p className="text-lg text-white/80 leading-relaxed">
              Skrýša o tebe nezbiera žiadne údaje. Tvoje miesta, fotky a poloha zostávajú
              výhradne v tvojom telefóne a nikam sa neodosielajú.
            </p>
            <p className="text-sm text-white/50 mt-6">Platné od {PLATNE_OD}</p>
          </div>
        </div>
      </header>

      <div className="bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl py-14 sm:py-20 space-y-12">
            <Section icon={Eye} title="Kto aplikáciu vydáva">
              <p>
                Mobilnú aplikáciu Skrýša (ďalej „aplikácia“) vydáva{" "}
                <strong className="text-blue-950">{VYDAVATEL}</strong>. V otázkach ochrany
                súkromia ma môžeš kontaktovať na{" "}
                <a
                  href={`mailto:${EMAIL}`}
                  className="text-sky-600 font-medium hover:text-sky-700 underline underline-offset-2"
                >
                  {EMAIL}
                </a>
                .
              </p>
            </Section>

            <Section icon={Database} title="S akými údajmi aplikácia pracuje">
              <p>Iba s tým, čo do nej sám vložíš:</p>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <MapPin className="w-5 h-5 text-sky-600 shrink-0 mt-0.5" aria-hidden="true" />
                  <span>
                    <strong className="text-blue-950">Poloha (GPS)</strong> — použije sa na
                    zapísanie miesta nálezu a na zobrazenie tvojej polohy na mape. Aplikácia
                    pýta iba polohu na popredí, teda kým ju máš otvorenú. Oprávnenie na polohu
                    na pozadí nemá a ani ho nepýta.
                  </span>
                </li>
                <li className="flex gap-3">
                  <Camera className="w-5 h-5 text-sky-600 shrink-0 mt-0.5" aria-hidden="true" />
                  <span>
                    <strong className="text-blue-950">Fotografie</strong> — tie, ktoré k nálezu
                    odfotíš alebo vyberieš z galérie.
                  </span>
                </li>
                <li className="flex gap-3">
                  <Database className="w-5 h-5 text-sky-600 shrink-0 mt-0.5" aria-hidden="true" />
                  <span>
                    <strong className="text-blue-950">Text, ktorý zadáš</strong> — názov miesta,
                    poznámka, druh nálezu, dátum a hodnotenie.
                  </span>
                </li>
              </ul>
            </Section>

            <Section icon={Shield} title="Kam sa údaje ukladajú">
              <p>
                Výhradne do interného úložiska tvojho zariadenia. Aplikácia nemá žiadny server,
                nemá používateľské účty a tvoje údaje neposiela nikomu — ani vydavateľovi
                aplikácie, ani tretím stranám. Nič sa nesynchronizuje do cloudu.
              </p>
              <p>
                Ak si v aplikácii sám vytvoríš zálohu, vznikne súbor ZIP, s ktorým ďalej
                nakladáš výhradne ty — kam ho uložíš alebo komu ho pošleš, je plne pod tvojou
                kontrolou.
              </p>
            </Section>

            <Section icon={Globe} title="Kedy aplikácia komunikuje po sieti">
              <p>
                Jediný dôvod, prečo sa aplikácia pripája na internet, je sťahovanie mapových
                podkladov zo služby{" "}
                <a
                  href="https://mapy.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-600 font-medium hover:text-sky-700 underline underline-offset-2"
                >
                  Mapy.com
                </a>{" "}
                (Seznam.cz a.s.).
              </p>
              <p>
                Pri tom sa odosielajú <strong className="text-blue-950">iba súradnice
                mapových dlaždíc</strong>, ktoré sa práve zobrazujú na obrazovke, a technický
                kľúč aplikácie. Neodosiela sa tvoja poloha, tvoje zapísané nálezy, fotky ani
                žiadny identifikátor tvojej osoby či zariadenia. Prevádzkovateľ mapovej služby
                spracúva IP adresu tak, ako pri každom bežnom sieťovom volaní — jeho podmienky
                nájdeš na{" "}
                <a
                  href="https://developer.mapy.com/terms-and-conditions/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-600 font-medium hover:text-sky-700 underline underline-offset-2"
                >
                  developer.mapy.com
                </a>
                .
              </p>
              <div className="rounded-xl bg-sky-50 border border-sky-100 p-5">
                <p className="text-slate-700">
                  Ak si mapu nezobrazuješ, aplikácia sa na internet nepripája vôbec.
                </p>
              </div>
            </Section>

            <Section icon={Eye} title="Reklama, analytika, sledovanie">
              <p>
                Aplikácia neobsahuje reklamu, analytické nástroje, nástroje na hlásenie pádov
                ani žiadne sledovacie knižnice tretích strán. Nevytvára reklamné profily
                a nesleduje tvoje správanie.
              </p>
              <p>Žiadne údaje sa tretím stranám neposkytujú ani nepredávajú.</p>
            </Section>

            <Section icon={Trash2} title="Ako svoje údaje zmažeš">
              <ul className="space-y-2 list-disc pl-5 marker:text-sky-500">
                <li>Jednotlivý nález zmažeš priamo v aplikácii v jeho detaile.</li>
                <li>
                  Všetky údaje naraz zmažeš v <em>Nastavenia → Zmazať všetky dáta</em>.
                </li>
                <li>
                  Odinštalovaním aplikácie sa zmažú všetky jej údaje vrátane fotiek
                  a databázy.
                </li>
              </ul>
              <p>
                Keďže vydavateľ tvoje údaje nikdy nemá k dispozícii, nedokáže ich za teba
                obnoviť ani zmazať — všetko máš vo vlastných rukách.
              </p>
            </Section>

            <Section icon={Scale} title="Tvoje práva">
              <p>
                Podľa nariadenia GDPR máš právo na prístup k svojim osobným údajom, ich opravu,
                vymazanie a prenosnosť. Keďže aplikácia žiadne tvoje osobné údaje nespracúva na
                svojich systémoch — všetko zostáva v tvojom zariadení — tieto práva uplatňuješ
                priamo v nej: údaje máš vždy k dispozícii, vieš ich upraviť, exportovať aj
                zmazať.
              </p>
            </Section>

            <Section icon={Shield} title="Deti">
              <p>
                Aplikácia nie je zameraná na deti a nezbiera údaje o nikom, teda ani o deťoch.
              </p>
            </Section>

            <Section icon={Mail} title="Zmeny týchto zásad a kontakt">
              <p>
                Ak sa zásady zmenia, zverejním novú verziu na tejto adrese a upravím dátum
                platnosti v hlavičke. Podstatné zmeny oznámim aj priamo v aplikácii.
              </p>
              <div className="rounded-xl bg-slate-50 border border-slate-200 p-5">
                <p className="font-semibold text-blue-950 mb-1">{VYDAVATEL}</p>
                <a
                  href={`mailto:${EMAIL}`}
                  className="text-sky-600 font-medium hover:text-sky-700 underline underline-offset-2"
                >
                  {EMAIL}
                </a>
              </div>
            </Section>

            <div className="pt-4 border-t border-slate-200">
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-sky-600 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" aria-hidden="true" />
                Späť na hlavnú stránku
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
