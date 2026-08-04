import Link from "next/link"
import { ArrowLeft, type LucideIcon } from "lucide-react"

/**
 * Tmavá hlavička podstránok.
 *
 * Navbar je nad hero úvodnej stránky priesvitný a na podstránkach prepína na plný
 * tmavý podklad. Aby pod ním nevznikol biely pruh, každá podstránka musí začínať
 * tmavým blokom — tento komponent je preň jediné miesto.
 */

export type Drobcek = { label: string; href: string }

type Props = {
  /** Malý štítok nad nadpisom, napr. „Mobilná aplikácia Skrýša". */
  stitok?: string
  stitokIkona?: LucideIcon
  nadpis: string
  perex?: string
  /** Odkaz „späť" vľavo hore. */
  spat: Drobcek
  /** Voliteľný riadok pod perexom, napr. dátum platnosti. */
  poznamka?: string
  children?: React.ReactNode
}

export default function PageHeader({
  stitok,
  stitokIkona: Ikona,
  nadpis,
  perex,
  spat,
  poznamka,
  children,
}: Props) {
  return (
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
            href={spat.href}
            className="inline-flex items-center gap-2 text-sm font-medium text-white/70 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" aria-hidden="true" />
            {spat.label}
          </Link>

          {stitok && (
            <div className="flex items-center gap-3 mb-5">
              {Ikona && (
                <div className="w-11 h-11 rounded-xl bg-sky-500/20 flex items-center justify-center shrink-0">
                  <Ikona className="w-6 h-6 text-sky-300" aria-hidden="true" />
                </div>
              )}
              <span className="text-sky-300 font-semibold tracking-wide uppercase text-sm">
                {stitok}
              </span>
            </div>
          )}

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5 leading-tight text-balance">
            {nadpis}
          </h1>

          {perex && <p className="text-lg text-white/80 leading-relaxed">{perex}</p>}
          {poznamka && <p className="text-sm text-white/50 mt-6">{poznamka}</p>}
          {children}
        </div>
      </div>
    </header>
  )
}
