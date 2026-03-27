import type React from "react"
import './globals.css'
import ClientLayout from "./ClientLayout"

export const metadata = {
  title: "O.Z. Gromanka - Občianske združenie Hrabkov",
  description: "Občianske združenie zamerané na rozvoj obce Hrabkov a ochranu jej prírodného bohatstva.",
  keywords: "Gromanka, Hrabkov, občianske združenie, Košice, Šariš, kultúra, príroda",
  openGraph: {
    title: "O.Z. Gromanka - Občianske združenie Hrabkov",
    description: "Občianske združenie zamerané na rozvoj obce Hrabkov a ochranu jej prírodného bohatstva.",
    type: "website",
    locale: "sk_SK",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <ClientLayout>{children}</ClientLayout>
}
