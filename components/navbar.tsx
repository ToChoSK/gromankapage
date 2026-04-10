"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import Image from "next/image"

const navLinks = [
  { id: "o-nas", label: "O nás" },
  { id: "predseda", label: "Predseda" },
  { id: "hrabkov", label: "Hrabkov" },
  { id: "aktivity", label: "Aktivity" },
  { id: "galeria", label: "Galéria" },
  { id: "clenstvo", label: "Členstvo" },
]

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)

      // Track active section
      const sections = ["home", "o-nas", "predseda", "hrabkov", "aktivity", "galeria", "clenstvo", "kontakt"]
      for (const sectionId of [...sections].reverse()) {
        const el = document.getElementById(sectionId)
        if (el && window.scrollY >= el.offsetTop - 100) {
          setActiveSection(sectionId)
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = 64
      const top = element.getBoundingClientRect().top + window.scrollY - offset
      window.scrollTo({ top, behavior: "smooth" })
      setIsMenuOpen(false)
    }
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-blue-950/95 backdrop-blur-md shadow-lg shadow-blue-950/20"
            : "bg-gradient-to-b from-blue-950/80 to-transparent"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <button
              onClick={() => scrollToSection("home")}
              className="flex items-center gap-2 group"
              aria-label="Domov"
            >
              <div className="bg-white rounded-xl p-1 shadow-md group-hover:shadow-sky-400/30 transition-shadow">
                <Image
                  src="/logoG.png"
                  alt="Gromanka logo"
                  width={36}
                  height={36}
                  className="block rounded-lg"
                  priority
                />
              </div>
              <span className="text-xl font-bold text-white group-hover:text-sky-300 transition-colors">
                Gromanka
              </span>
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1" aria-label="Hlavná navigácia">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    activeSection === link.id
                      ? "text-white bg-white/10"
                      : "text-white/70 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => scrollToSection("kontakt")}
                className="ml-2 px-4 py-2 bg-sky-500 hover:bg-sky-400 text-white text-sm font-semibold rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-sky-500/25 hover:-translate-y-0.5"
              >
                Kontakt
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden flex items-center justify-center w-10 h-10 rounded-lg text-white hover:bg-white/10 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Zavrieť menu" : "Otvoriť menu"}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsMenuOpen(false)}
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-blue-950/60 backdrop-blur-sm" />
      </div>

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed top-16 left-0 right-0 z-40 lg:hidden transition-all duration-300 ${
          isMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0 pointer-events-none"
        }`}
      >
        <nav
          className="mx-4 bg-blue-950 rounded-2xl shadow-2xl shadow-blue-950/50 border border-white/10 overflow-hidden"
          aria-label="Mobilná navigácia"
        >
          <div className="p-3 space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                  activeSection === link.id
                    ? "text-white bg-white/10"
                    : "text-white/70 hover:text-white hover:bg-white/5"
                }`}
              >
                {link.label}
              </button>
            ))}
            <div className="pt-1">
              <button
                onClick={() => scrollToSection("kontakt")}
                className="w-full px-4 py-3 bg-sky-500 hover:bg-sky-400 text-white text-sm font-semibold rounded-xl transition-all duration-200"
              >
                Kontakt
              </button>
            </div>
          </div>
        </nav>
      </div>
    </>
  )
}
