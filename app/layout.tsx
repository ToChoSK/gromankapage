import type React from "react"
import './globals.css'
import ClientLayout from "./ClientLayout"

export const metadata = {
  title: "O.Z. Gromanka - Občianske združenie Hrabkov",
  description: "Občianske združenie zamerané na rozvoj obce Hrabkov a ochranu jej prírodného bohatstva.",
  keywords: "Gromanka, Hrabkov, občianske združenie, Košice, Šariš, kultúra, príroda",
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    title: "O.Z. Gromanka - Občianske združenie Hrabkov",
    description: "Občianske združenie zamerané na rozvoj obce Hrabkov a ochranu jej prírodného bohatstva.",
    type: "website",
    locale: "sk_SK",
    images: [{ url: "/gromanka-logo.png", width: 1024, height: 1024, alt: "Gromanka logo" }],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <ClientLayout>{children}</ClientLayout>
}
