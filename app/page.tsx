"use client"

import Image from "next/image"
import { useState, useRef } from "react"
import {
  Info,
  Calendar,
  Leaf,
  MapPin,
  Mail,
  Phone,
  ChevronDown,
  Camera,
  GraduationCap,
  Building2,
  User,
  Home,
  Users,
  Facebook,
  Instagram,
  TreePine,
  Mountain,
  Shield,
  ArrowRight,
  CheckCircle2,
} from "lucide-react"

export default function HomePage() {
  const [activeTab, setActiveTab] = useState<"cultural" | "environmental">("cultural")

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = 64
      const top = element.getBoundingClientRect().top + window.scrollY - offset
      window.scrollTo({ top, behavior: "smooth" })
    }
  }

  const galleryImages = [
    { src: "hrabkov-panorama.jpeg", title: "Panoráma Hrabkova", desc: "Nádherný výhľad na obec a okolie" },
    { src: "hrabkov-mountain.jpeg", title: "Hory pri Hrabkove", desc: "Majestátne pohorie obklopujúce obec" },
    { src: "hrabkov-village.jpeg", title: "Obec Hrabkov", desc: "Pohľad na centrum obce" },
    { src: "hrabkov-fields.jpeg", title: "Polia pri Hrabkove", desc: "Rozľahlé polia v okolí obce" },
    { src: "hrabkov-rock.jpeg", title: "Prírodné útvary", desc: "Zaujímavé skalné formácie v okolí" },
    { src: "hrabkov-aerial.jpeg", title: "Letecký pohľad", desc: "Obec Hrabkov z vtáčej perspektívy" },
    { src: "hrabkov-view.jpeg", title: "Výhľad na obec", desc: "Krásny pohľad na Hrabkov" },
    { src: "hrabkov-autumn.jpeg", title: "Jesenné farby", desc: "Hrabkov v jesennom období" },
    { src: "hrabkov-ruins.jpeg", title: "Historické pamiatky", desc: "Pozostatky histórie obce" },
  ]

  const stats = [
    { value: "2024", label: "Rok založenia" },
    { value: "Hrabkov", label: "Naša obec" },
    { value: "100%", label: "Zápal pre obec" },
  ]

  return (
    <div className="min-h-screen bg-white" id="home">

      {/* ═══════════════════════════════════════════
          HERO SECTION
      ═══════════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/hrabkov-panorama.jpeg"
            alt="Panoráma obce Hrabkov"
            fill
            priority
            className="object-cover animate-slow-zoom"
          />
          {/* Gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-950/85 via-blue-950/60 to-blue-900/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-blue-950/60 via-transparent to-transparent" />
        </div>

        {/* Decorative elements */}
        <div className="absolute top-1/4 right-10 w-64 h-64 bg-sky-400/10 rounded-full blur-3xl animate-pulse-slow hidden md:block" />
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-float hidden md:block" />

        <div className="relative z-10 container mx-auto px-4 sm:px-6 py-20">
          <div className="max-w-3xl">
            {/* Logo */}
            <div className="mb-8 animate-fade-in">
              <div className="relative inline-flex items-center justify-center">
                {/* Outer dashed spinning ring */}
                <div className="absolute w-56 h-56 rounded-full border-2 border-dashed border-sky-400/40 animate-spin-slow" />
                {/* Counter-spinning inner ring */}
                <div className="absolute w-44 h-44 rounded-full border border-sky-300/30 animate-spin-slow" style={{ animationDirection: "reverse", animationDuration: "20s" }} />
                {/* Glow halo */}
                <div className="absolute w-40 h-40 rounded-full bg-sky-500/20 blur-2xl animate-pulse-slow" />
                {/* Logo circle */}
                <div className="relative w-36 h-36 rounded-full overflow-hidden bg-white shadow-2xl shadow-sky-500/50 ring-4 ring-white/30 animate-float">
                  <Image
                    src="/logoG.png"
                    alt="Gromanka logo"
                    fill
                    className="object-contain p-1"
                    priority
                  />
                </div>
              </div>
            </div>

            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-sky-500/20 border border-sky-400/30 rounded-full text-sky-300 text-sm font-medium mb-6 animate-fade-in">
              <TreePine size={14} />
              <span>Občianske združenie · Obec Hrabkov</span>
            </div>

            {/* Main heading */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-white mb-4 leading-tight animate-fade-in-up">
              <span className="gradient-text">Gromanka</span>
            </h1>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white/90 mb-6 animate-fade-in-up delay-100">
              Spájame komunitu,<br className="hidden sm:block" /> chránime prírodu
            </h2>
            <p className="text-lg sm:text-xl text-white/75 max-w-xl mb-8 leading-relaxed animate-fade-in-up delay-200">
              Rozvíjame kultúrno-spoločenské aktivity a chránime životné prostredie v malebnej obci Hrabkov v srdci Šariša.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 animate-fade-in-up delay-300">
              <button
                onClick={() => scrollToSection("o-nas")}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-sky-500 hover:bg-sky-400 text-white font-semibold rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-sky-500/30 hover:-translate-y-0.5 group"
              >
                O združení
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => scrollToSection("aktivity")}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 text-white font-semibold rounded-xl transition-all duration-200 backdrop-blur-sm"
              >
                Naše aktivity
              </button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-6 mt-12 animate-fade-in-up delay-400">
              {stats.map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-2xl font-bold text-sky-400">{stat.value}</div>
                  <div className="text-sm text-white/60">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-subtle">
          <button
            onClick={() => scrollToSection("o-nas")}
            className="flex flex-col items-center gap-1 text-white/60 hover:text-white transition-colors group"
            aria-label="Posunúť nadol"
          >
            <span className="text-xs font-medium">Prejsť dolu</span>
            <ChevronDown size={20} className="group-hover:translate-y-1 transition-transform" />
          </button>
        </div>
      </section>


      {/* ═══════════════════════════════════════════
          O NÁS SECTION
      ═══════════════════════════════════════════ */}
      <section className="py-16 sm:py-24 bg-white" id="o-nas">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

            {/* Image - shown first on mobile */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl group order-first lg:order-last">
              <div className="aspect-[4/3] relative">
                <Image
                  src="/images/hrabkov-village.jpeg"
                  alt="Obec Hrabkov"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-950/60 via-transparent to-transparent" />
              </div>
              {/* Overlay card */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-sky-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-sky-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-blue-950 text-sm">Napájadlá 5, 2277/5</p>
                    <p className="text-gray-500 text-xs">040 22, Košice · gromanka.eu</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div>
              <span className="inline-block px-3 py-1 bg-sky-100 text-sky-700 text-sm font-semibold rounded-full mb-4">
                O nás
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-blue-950 mb-5 leading-tight">
                O združení{" "}
                <span className="gradient-text">Gromanka</span>
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed mb-6">
                <p>
                  Občianske združenie Gromanka bolo založené s cieľom podporovať a rozvíjať kultúrno-spoločenské
                  aktivity v obci Hrabkov, ako aj chrániť jej jedinečné prírodné prostredie.
                </p>
                <p>
                  Naším poslaním je zachovávať historické a kultúrne dedičstvo obce, organizovať vzdelávacie a
                  environmentálne aktivity a prispievať k zveľaďovaniu obce Hrabkov.
                </p>
              </div>

              {/* Values */}
              <div className="space-y-3 mb-8">
                {[
                  { icon: Shield, text: "Ochrana prírodného bohatstva obce" },
                  { icon: Users, text: "Podpora miestnej komunity a tradícií" },
                  { icon: GraduationCap, text: "Vzdelávanie a kultúrne aktivity" },
                ].map(({ icon: Icon, text }, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-7 h-7 bg-sky-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-4 h-4 text-sky-600" />
                    </div>
                    <span className="text-gray-700 text-sm">{text}</span>
                  </div>
                ))}
              </div>

              {/* Contact info */}
              <div className="flex flex-col sm:flex-row gap-3 mb-8">
                <a
                  href="mailto:chovancak@gromanka.eu"
                  className="flex items-center gap-2 px-4 py-2.5 bg-sky-50 hover:bg-sky-100 rounded-xl text-sky-700 text-sm font-medium transition-colors"
                >
                  <Mail size={16} />
                  chovancak@gromanka.eu
                </a>
                <a
                  href="tel:+421917917384"
                  className="flex items-center gap-2 px-4 py-2.5 bg-sky-50 hover:bg-sky-100 rounded-xl text-sky-700 text-sm font-medium transition-colors"
                >
                  <Phone size={16} />
                  0917 917 384
                </a>
              </div>

              <button
                onClick={() => scrollToSection("aktivity")}
                className="inline-flex items-center gap-2 px-6 py-3 bg-sky-500 hover:bg-sky-400 text-white font-semibold rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-sky-500/30 group"
              >
                Naše aktivity
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>


      {/* ═══════════════════════════════════════════
          PREDSEDA SECTION
      ═══════════════════════════════════════════ */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-slate-50 to-white" id="predseda">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <span className="inline-block px-3 py-1 bg-sky-100 text-sky-700 text-sm font-semibold rounded-full mb-4">
              Vedenie
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-blue-950 mb-3">Vedenie združenia</h2>
            <p className="text-gray-500 max-w-xl mx-auto">Spoznajte ľudí, ktorí vedú naše združenie</p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
              <div className="grid sm:grid-cols-3 gap-0">
                {/* Photo side */}
                <div className="sm:col-span-1 bg-gradient-to-br from-sky-50 to-blue-100 flex flex-col items-center justify-center p-8">
                  <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-2xl bg-white shadow-lg flex items-center justify-center mb-4">
                    <User className="w-14 h-14 sm:w-20 sm:h-20 text-sky-300" />
                  </div>
                  <span className="inline-block px-3 py-1 bg-sky-500 text-white text-xs font-semibold rounded-full">
                    Predseda
                  </span>
                </div>

                {/* Info side */}
                <div className="sm:col-span-2 p-6 sm:p-8">
                  <h3 className="text-2xl font-bold text-blue-950 mb-1">Michal Chovančák</h3>
                  <p className="text-sky-600 font-medium text-sm mb-6">Predseda a štatutár O.Z. Gromanka</p>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-sky-50 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Home className="w-4 h-4 text-sky-600" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-400 font-medium uppercase tracking-wide mb-0.5">Miestne korene</p>
                        <p className="text-gray-700">Má korene z Hrabkova</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-sky-50 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                        <GraduationCap className="w-4 h-4 text-sky-600" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-400 font-medium uppercase tracking-wide mb-0.5">Vzdelanie</p>
                        <p className="text-gray-700">Študent TUKE v Košiciach</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-sky-50 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Building2 className="w-4 h-4 text-sky-600" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-400 font-medium uppercase tracking-wide mb-0.5">Univerzita</p>
                        <p className="text-gray-700">Technická univerzita v Košiciach</p>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-500 text-sm leading-relaxed mt-6 pt-6 border-t border-gray-100">
                    Michal Chovančák vedie naše združenie s cieľom rozvíjať jeho aktivity. Ako študent technickej
                    univerzity prináša moderné riešenia a pohľad na rozvoj združenia.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ═══════════════════════════════════════════
          HRABKOV SECTION
      ═══════════════════════════════════════════ */}
      <section className="py-16 sm:py-24 bg-white relative overflow-hidden" id="hrabkov">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-sky-50 to-transparent opacity-60 hidden lg:block" />

        <div className="container mx-auto px-4 sm:px-6 relative">
          <div className="text-center mb-10">
            <span className="inline-block px-3 py-1 bg-sky-100 text-sky-700 text-sm font-semibold rounded-full mb-4">
              Naša obec
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-blue-950 mb-3">Obec Hrabkov</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Malebná obec v prekrásnom prostredí Šarišskej vrchoviny
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {[
              {
                image: "hrabkov-fields.jpeg",
                alt: "Príroda Hrabkova",
                icon: Leaf,
                title: "Prírodné bohatstvo",
                desc: "Hrabkov sa nachádza v malebnom údolí obklopenom lesmi a lúkami. Okolitá príroda ponúka nádherné výhľady a možnosti turistiky.",
                color: "text-emerald-600",
                bg: "bg-emerald-50",
              },
              {
                image: "hrabkov-ruins.jpeg",
                alt: "História Hrabkova",
                icon: Mountain,
                title: "Bohatá história",
                desc: "Obec má bohatú históriu siahajúcu do dávnych čias. Na území obce sa nachádzajú historické pamiatky a archeologické náleziská.",
                color: "text-amber-600",
                bg: "bg-amber-50",
              },
              {
                image: "hrabkov-aerial.jpeg",
                alt: "Komunita Hrabkova",
                icon: Users,
                title: "Živá komunita",
                desc: "Hrabkov je domovom priateľskej komunity, ktorá udržiava tradície a zvyky regiónu. Obec pravidelne organizuje kultúrne podujatia.",
                color: "text-sky-600",
                bg: "bg-sky-50",
              },
            ].map(({ image, alt, icon: Icon, title, desc, color, bg }, i) => (
              <div key={i} className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={`/images/${image}`}
                    alt={alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </div>
                <div className="p-5 sm:p-6">
                  <div className={`inline-flex items-center gap-2 px-3 py-1.5 ${bg} rounded-lg mb-3`}>
                    <Icon className={`w-4 h-4 ${color}`} />
                    <span className={`text-sm font-semibold ${color}`}>{title}</span>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ═══════════════════════════════════════════
          AKTIVITY SECTION
      ═══════════════════════════════════════════ */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-slate-50 to-white" id="aktivity">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <span className="inline-block px-3 py-1 bg-sky-100 text-sky-700 text-sm font-semibold rounded-full mb-4">
              Čo robíme
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-blue-950 mb-3">Naše aktivity</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Aktivity združenia Gromanka zamerané na rozvoj obce Hrabkov
            </p>
          </div>

          {/* Tab buttons */}
          <div className="flex gap-2 p-1.5 bg-slate-100 rounded-xl max-w-md mx-auto mb-8">
            {[
              { key: "cultural", label: "Kultúrno-spoločenské" },
              { key: "environmental", label: "Environmentálne" },
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key as "cultural" | "environmental")}
                className={`flex-1 px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeTab === tab.key
                    ? "bg-white text-blue-950 shadow-sm font-semibold"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab content */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-3xl mx-auto">
            {activeTab === "cultural" ? (
              <>
                <div className="bg-white rounded-2xl p-5 sm:p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                    <Calendar className="w-5 h-5 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-bold text-blue-950 mb-2">Kultúrne podujatia</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    Organizujeme rôzne kultúrne podujatia, ktoré podporujú miestne tradície a zvyky. Medzi naše aktivity
                    patria folklórne vystúpenia, výstavy a komunitné stretnutia.
                  </p>
                </div>
                <div className="bg-white rounded-2xl p-5 sm:p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                    <Info className="w-5 h-5 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-bold text-blue-950 mb-2">Vzdelávacie aktivity</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    Realizujeme vzdelávacie programy zamerané na históriu a kultúru obce Hrabkov. Organizujeme
                    prednášky, workshopy a exkurzie pre miestnych obyvateľov aj návštevníkov.
                  </p>
                </div>
              </>
            ) : (
              <>
                <div className="bg-white rounded-2xl p-5 sm:p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center mb-4">
                    <Leaf className="w-5 h-5 text-emerald-600" />
                  </div>
                  <h3 className="text-lg font-bold text-blue-950 mb-2">Ochrana prírody</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    Aktívne sa podieľame na ochrane prírodného bohatstva obce Hrabkov. Organizujeme čistenie okolia,
                    výsadbu stromov a vzdelávacie aktivity o ochrane životného prostredia.
                  </p>
                </div>
                <div className="bg-white rounded-2xl p-5 sm:p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 bg-sky-100 rounded-xl flex items-center justify-center mb-4">
                    <Camera className="w-5 h-5 text-sky-600" />
                  </div>
                  <h3 className="text-lg font-bold text-blue-950 mb-2">Dokumentácia krajiny</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    Dokumentujeme prírodné krásy a zmeny v krajine obce Hrabkov. Vytvárame fotografický a video archív,
                    ktorý slúži na vzdelávanie a propagáciu obce.
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      </section>


      {/* ═══════════════════════════════════════════
          GALLERY SECTION
      ═══════════════════════════════════════════ */}
      <section className="py-16 sm:py-24 bg-blue-950" id="galeria">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <span className="inline-block px-3 py-1 bg-sky-500/20 text-sky-400 text-sm font-semibold rounded-full mb-4">
              Galéria
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">Fotografická galéria</h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Krásne zábery obce Hrabkov a okolitej prírody
            </p>
          </div>

          {/* Mobile: single column, Desktop: masonry-like grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-xl cursor-pointer ${
                  index === 0 ? "sm:col-span-2 lg:col-span-1 lg:row-span-2" : ""
                }`}
              >
                <div className={`relative ${index === 0 ? "aspect-[16/9] sm:aspect-[16/9] lg:aspect-[3/4]" : "aspect-[4/3]"}`}>
                  <Image
                    src={`/images/${image.src}`}
                    alt={image.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-950/80 via-blue-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="font-bold text-sm mb-1">{image.title}</h3>
                    <p className="text-white/70 text-xs">{image.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ═══════════════════════════════════════════
          ČLENSTVO SECTION
      ═══════════════════════════════════════════ */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-sky-500 to-blue-700 relative overflow-hidden" id="clenstvo">
        {/* Decorative circles */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/10 rounded-full translate-y-1/2 -translate-x-1/2" />

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <span className="inline-block px-3 py-1 bg-white/20 text-white text-sm font-semibold rounded-full mb-6">
              Členstvo
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
              Staňte sa členom<br />
              <span className="text-sky-200">združenia Gromanka</span>
            </h2>
            <p className="text-white/80 text-lg mb-10 leading-relaxed">
              Členstvo je otvorené pre všetkých, ktorí chcú podporiť rozvoj obce Hrabkov a zapojiť sa do
              našich aktivít. Pridajte sa k nám a pomôžte nám chrániť a rozvíjať našu obec.
            </p>

            {/* Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
              {[
                { icon: Users, text: "Byť súčasťou komunity" },
                { icon: Leaf, text: "Ochrana prírody" },
                { icon: Calendar, text: "Účasť na podujatiach" },
              ].map(({ icon: Icon, text }, i) => (
                <div key={i} className="flex flex-col items-center gap-2 p-4 bg-white/10 rounded-xl border border-white/20">
                  <Icon className="w-6 h-6 text-sky-200" />
                  <span className="text-white text-sm font-medium">{text}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="mailto:chovancak@gromanka.eu?subject=Prihláška za člena OZ Gromanka"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white text-blue-700 font-semibold rounded-xl hover:bg-sky-50 transition-all duration-200 hover:shadow-lg"
              >
                <Mail size={18} />
                Prihláška za člena
              </a>
              <button
                onClick={() => scrollToSection("kontakt")}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold rounded-xl transition-all duration-200"
              >
                Viac informácií
              </button>
            </div>
          </div>
        </div>
      </section>


      {/* ═══════════════════════════════════════════
          KONTAKT SECTION
      ═══════════════════════════════════════════ */}
      <section className="py-16 sm:py-24 bg-white" id="kontakt">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <span className="inline-block px-3 py-1 bg-sky-100 text-sky-700 text-sm font-semibold rounded-full mb-4">
              Kontakt
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-blue-950 mb-3">Kontaktujte nás</h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Radi vám odpovieme na akékoľvek otázky týkajúce sa nášho združenia alebo aktivít v obci Hrabkov
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">

              {/* Contact info */}
              <div className="bg-gradient-to-br from-blue-900 to-blue-950 rounded-2xl p-6 sm:p-8 text-white">
                <h3 className="text-xl font-bold mb-6">Kontaktné informácie</h3>
                <div className="space-y-5">
                  <a
                    href="https://maps.google.com/?q=Napájadlá+5,+Košice"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-10 h-10 bg-white/10 group-hover:bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-semibold text-sm mb-0.5">Adresa</p>
                      <p className="text-white/70 text-sm">Napájadlá 5, 2277/5, 040 22, Košice</p>
                    </div>
                  </a>
                  <a
                    href="mailto:chovancak@gromanka.eu"
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-10 h-10 bg-white/10 group-hover:bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-semibold text-sm mb-0.5">Email</p>
                      <p className="text-white/70 text-sm">chovancak@gromanka.eu</p>
                    </div>
                  </a>
                  <a
                    href="tel:+421917917384"
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-10 h-10 bg-white/10 group-hover:bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-semibold text-sm mb-0.5">Telefón</p>
                      <p className="text-white/70 text-sm">0917 917 384</p>
                    </div>
                  </a>
                </div>

                <div className="mt-8 pt-6 border-t border-white/10">
                  <p className="text-sm font-semibold mb-3">Sledujte nás</p>
                  <div className="flex gap-3">
                    <span
                      title="Facebook – čoskoro dostupné"
                      className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center opacity-50 cursor-not-allowed"
                      aria-label="Facebook – čoskoro dostupné"
                    >
                      <Facebook className="w-5 h-5" />
                    </span>
                    <span
                      title="Instagram – čoskoro dostupné"
                      className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center opacity-50 cursor-not-allowed"
                      aria-label="Instagram – čoskoro dostupné"
                    >
                      <Instagram className="w-5 h-5" />
                    </span>
                    <a
                      href="mailto:chovancak@gromanka.eu"
                      className="w-10 h-10 bg-white/10 hover:bg-sky-500 rounded-xl flex items-center justify-center transition-all duration-200"
                      aria-label="Email"
                    >
                      <Mail className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Contact form */}
              <div className="bg-slate-50 rounded-2xl p-6 sm:p-8">
                <h3 className="text-xl font-bold text-blue-950 mb-6">Napíšte nám správu</h3>
                <form
                  className="space-y-4"
                  onSubmit={(e) => {
                    e.preventDefault()
                    const form = e.target as HTMLFormElement
                    const data = new FormData(form)
                    window.location.href = `mailto:chovancak@gromanka.eu?subject=${encodeURIComponent(data.get('subject') as string || 'Správa z webu')}&body=${encodeURIComponent(`Meno: ${data.get('name')}\nEmail: ${data.get('email')}\n\n${data.get('message')}`)}`
                  }}
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1.5">
                        Meno
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all"
                        placeholder="Vaše meno"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1.5">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all"
                        placeholder="vas@email.sk"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1.5">
                      Predmet
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all"
                      placeholder="Predmet správy"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1.5">
                      Správa
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all resize-none"
                      placeholder="Vaša správa..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3.5 bg-sky-500 hover:bg-sky-400 text-white font-semibold rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-sky-500/30"
                  >
                    Odoslať správu
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ═══════════════════════════════════════════
          FOOTER
      ═══════════════════════════════════════════ */}
      <footer className="bg-blue-950 text-white py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">

            {/* Brand */}
            <div className="sm:col-span-2 lg:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-sky-500/20 flex items-center justify-center">
                  <TreePine className="w-4 h-4 text-sky-400" />
                </div>
                <span className="text-xl font-bold">O.Z. Gromanka</span>
              </div>
              <p className="text-white/60 text-sm leading-relaxed mb-4">
                Občianske združenie zamerané na rozvoj obce Hrabkov a ochranu jej prírodného bohatstva.
              </p>
              <a
                href="https://maps.google.com/?q=Napájadlá+5,+Košice"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/50 hover:text-sky-400 text-sm transition-colors"
              >
                <MapPin size={14} />
                Napájadlá 5, 2277/5, 040 22, Košice
              </a>
            </div>

            {/* Quick links */}
            <div>
              <h3 className="font-semibold text-sm uppercase tracking-wider text-white/50 mb-4">Rýchle odkazy</h3>
              <ul className="space-y-2.5">
                {[
                  { id: "o-nas", label: "O združení" },
                  { id: "predseda", label: "Predseda" },
                  { id: "hrabkov", label: "Obec Hrabkov" },
                  { id: "aktivity", label: "Naše aktivity" },
                  { id: "galeria", label: "Galéria" },
                  { id: "clenstvo", label: "Členstvo" },
                ].map(({ id, label }) => (
                  <li key={id}>
                    <button
                      onClick={() => scrollToSection(id)}
                      className="text-white/60 hover:text-sky-400 text-sm transition-colors"
                    >
                      {label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-semibold text-sm uppercase tracking-wider text-white/50 mb-4">Kontakt</h3>
              <div className="space-y-3">
                <a
                  href="mailto:chovancak@gromanka.eu"
                  className="flex items-center gap-2 text-white/60 hover:text-sky-400 text-sm transition-colors"
                >
                  <Mail size={14} />
                  chovancak@gromanka.eu
                </a>
                <a
                  href="tel:+421917917384"
                  className="flex items-center gap-2 text-white/60 hover:text-sky-400 text-sm transition-colors"
                >
                  <Phone size={14} />
                  0917 917 384
                </a>
              </div>
              <div className="flex gap-3 mt-6">
                <span
                  title="Facebook – čoskoro dostupné"
                  className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center opacity-50 cursor-not-allowed"
                  aria-label="Facebook – čoskoro dostupné"
                >
                  <Facebook className="w-4 h-4" />
                </span>
                <span
                  title="Instagram – čoskoro dostupné"
                  className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center opacity-50 cursor-not-allowed"
                  aria-label="Instagram – čoskoro dostupné"
                >
                  <Instagram className="w-4 h-4" />
                </span>
                <a
                  href="mailto:chovancak@gromanka.eu"
                  className="w-9 h-9 bg-white/10 hover:bg-sky-500 rounded-lg flex items-center justify-center transition-all duration-200"
                  aria-label="Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-3">
            <p className="text-white/40 text-xs">
              © {new Date().getFullYear()} O.Z. Gromanka. Všetky práva vyhradené.
            </p>
            <a
              href="https://gromanka.eu"
              className="text-white/40 hover:text-sky-400 text-xs transition-colors"
            >
              gromanka.eu
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
