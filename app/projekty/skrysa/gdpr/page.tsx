import SkrysaGdpr, { GDPR_URL } from "@/components/skrysa-gdpr"

export const metadata = {
  title: "Ochrana súkromia — Skrýša",
  description:
    "Zásady ochrany súkromia mobilnej aplikácie Skrýša. Aplikácia nezbiera žiadne osobné údaje — poloha, fotky a nálezy zostávajú výhradne v zariadení používateľa.",
  robots: { index: true, follow: true },
  alternates: { canonical: GDPR_URL },
  openGraph: {
    title: "Ochrana súkromia — Skrýša",
    description:
      "Aplikácia Skrýša nezbiera žiadne osobné údaje. Všetko zostáva v tvojom telefóne.",
    type: "article",
    locale: "sk_SK",
  },
}

export default function OchranaSukromiaSkrysa() {
  return <SkrysaGdpr />
}
