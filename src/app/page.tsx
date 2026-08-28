import Link from "next/link";
import Image from "next/image";
import HeroCarousel from "./components/HeroCarousel";
import StatCounters from "./components/StatCounters";
import ScrollReveal from "./components/ScrollReveal";
import InteractiveGlobalMap from "./components/InteractiveGlobalMap";
import TestimonialsCarousel from "./components/TestimonialsCarousel";
import FAQAccordion from "./components/FAQAccordion";
import MediaWithFallback from "./components/MediaWithFallback";

/* ────────────────────────────── DATA ────────────────────────────── */

const featuredSpices = [
  {
    name: "Cumin Seeds (Jeera)",
    grade: "99.5% - 99.9% Machine / Sortex Cleaned",
    origin: "Rajasthan & Gujarat Mandis",
    image: "/images/products/cumin-seeds.jpg",
    badge: "Top Exporter Item",
    href: "/products#whole-spices",
  },
  {
    name: "Turmeric Fingers & Powder",
    grade: "High Curcumin 3.5% - 5.0%+",
    origin: "Nizamabad & Salem Origins",
    image: "/images/products/turmeric.jpg",
    badge: "Export Grade",
    href: "/products#whole-spices",
  },
  {
    name: "Coriander Seeds (Dhania)",
    grade: "Eagle, Scooter & Single Parrot",
    origin: "Madhya Pradesh (Guna / Neemuch)",
    image: "/images/products/coriander-seeds.jpg",
    badge: "Farm Direct",
    href: "/products#whole-spices",
  },
  {
    name: "Stemless Red Chilli",
    grade: "High Heat & Rich Color (SHU 20k - 90k)",
    origin: "Guntur / Byadgi Belts",
    image: "/images/products/red-chilli.jpg",
    badge: "Cold Milled",
    href: "/products#ground-spices",
  },
  {
    name: "Tellicherry Black Pepper",
    grade: "Garbled Bold 550GL - 580GL",
    origin: "South India Plantations",
    image: "/images/products/black-pepper.jpg",
    badge: "Bold Caliber",
    href: "/products#whole-spices",
  },
  {
    name: "Green Cardamom (Elaichi)",
    grade: "7mm - 8mm Bold Deep Green",
    origin: "Idukki, Kerala",
    image: "/images/products/cardamom.jpg",
    badge: "Premium Bold",
    href: "/products#whole-spices",
  },
  {
    name: "Mustard Seeds (Rai / Sarson)",
    grade: "High Oil Content Machine Cleaned",
    origin: "Central India Mandis",
    image: "/images/products/mustard-seeds.jpg",
    badge: "Oilseed Crop",
    href: "/products#agri-commodities",
  },
  {
    name: "Fennel Seeds (Saunf)",
    grade: "Extra Green & Regular Sortex",
    origin: "Gujarat & Rajasthan",
    image: "/images/products/fennel-seeds.jpg",
    badge: "Sortex Cleaned",
    href: "/products#whole-spices",
  },
];

const categoryCards = [
  {
    title: "Whole Spices",
    subtitle: "Sortex Cleaned",
    description:
      "Handpicked Cumin, Coriander, Turmeric Fingers, Tellicherry Black Pepper, and Bold Cardamom with high volatile essential oils.",
    image: "/images/products/turmeric.jpg",
    href: "/products#whole-spices",
    badge: "Export Grade",
  },
  {
    title: "Ground & Powders",
    subtitle: "Low-Temp Milled",
    description:
      "Cold-milled Red Chili, Turmeric, Coriander, and custom Garam Masala formulations with zero synthetic coloring or adulteration.",
    image: "/images/products/red-chilli.jpg",
    href: "/products#ground-spices",
    badge: "100% Pure",
  },
  {
    title: "Agri Commodities",
    subtitle: "Malwa Sourced",
    description:
      "Non-GMO Soybeans, Sharbati/Durum Wheat, Yellow Corn/Maize, and Sortex-selected 99.95% Sesame Seeds from Central India.",
    image: "/images/products/mustard-seeds.jpg",
    href: "/products#agri-commodities",
    badge: "Direct Sourcing",
  },
  {
    title: "Processed & Roasted",
    subtitle: "In-House Roastery",
    description:
      "Precision drum-roasted cumin, toasted coriander, and custom contract formulations for overseas food blenders and brands.",
    image: "/images/products/fennel-seeds.jpg",
    href: "/products#processed",
    badge: "Custom Toasting",
  },
];

const processTeaser = [
  {
    num: "01",
    title: "Origin Procurement",
    desc: "Direct farm intake across MP & Rajasthan mandis with strict moisture & purity screening.",
    image: "/images/process/sourcing.jpg",
    tag: "Farm-Gate Traceability",
  },
  {
    num: "02",
    title: "Sortex & Roasting",
    desc: "Optical color sorting up to 99.95% purity and thermostatically controlled drum roasting.",
    image: "/images/process/sorting.jpg",
    tag: "99.5%+ Sortex Purity",
  },
  {
    num: "03",
    title: "Batch QC & Testing",
    desc: "In-house lab analysis of volatile oils, moisture, and international compliance before clearance.",
    image: "/images/process/grading.jpg",
    tag: "COA Certified",
  },
  {
    num: "04",
    title: "Packaging & Freight",
    desc: "Barrier pouches up to 50kg export bags, containerized with phytosanitary documentation.",
    image: "/images/process/warehouse.jpg",
    tag: "JNPT / Mundra Dispatch",
  },
];

const whyUs = [
  {
    title: "100% In-House Processing",
    description:
      "Sourcing, sortex cleaning, drum roasting, and packaging all occur under one roof at Pologround, Indore.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205 3 1.09" />
      </svg>
    ),
  },
  {
    title: "Direct Origin Sourcing",
    description:
      "Zero middlemen in central India's prime agricultural belt, guaranteeing unmatched freshness and farm-level traceability.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-.778.099-1.533.284-2.253" />
      </svg>
    ),
  },
  {
    title: "Batch Quality Assurance",
    description:
      "Strict moisture, volatile oil, and sortex purity grading tested on every outgoing export consignment.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.745 3.745 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
      </svg>
    ),
  },
  {
    title: "Global Export Compliance",
    description:
      "Rapid dispatch with complete Phytosanitary, Certificate of Origin, and customs documentation readiness.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
      </svg>
    ),
  },
];

/* ─────────────────────────── COMPONENT ──────────────────────────── */

export default function Home() {
  return (
    <>
      {/* ═══════ HERO CAROUSEL ═══════ */}
      <HeroCarousel />

      {/* ═══════ ANIMATED STAT COUNTERS ═══════ */}
      <StatCounters />

      {/* ═══════ FEATURED REAL PRODUCT GALLERY ═══════ */}
      <section className="py-20 lg:py-28 bg-white border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal animation="fade-up">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16 gap-6">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="gold-divider" />
                  <span className="text-[#B8934A] text-xs sm:text-sm font-bold uppercase tracking-[0.2em]">
                    Real Crop Imagery · Premium Export Quality
                  </span>
                </div>
                <h2 className="section-heading text-3xl sm:text-4xl lg:text-5xl mb-3">
                  Core Indian Spices & Agri-Commodities
                </h2>
                <p className="text-gray-600 max-w-2xl text-base sm:text-lg">
                  Procured directly from farm mandis across Madhya Pradesh & Rajasthan. Cleaned, graded, and packaged to exacting international trade specifications.
                </p>
              </div>
              <Link href="/products" className="btn-secondary self-start lg:self-auto group">
                <span>View Full Export Catalogue</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </ScrollReveal>

          {/* 8-Card Flat-Lay Grid with Real Images */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredSpices.map((spice, idx) => (
              <ScrollReveal key={spice.name} animation="fade-up" delay={idx * 60}>
                <Link
                  href={spice.href}
                  className="glass-card p-0 flex flex-col justify-between group h-full overflow-hidden hover:border-[#B8934A]/40 transition-all duration-300"
                >
                  {/* Photo Container */}
                  <div className="relative h-56 w-full overflow-hidden bg-gray-100 border-b border-[#B8934A]/15">
                    <MediaWithFallback
                      src={spice.image}
                      alt={spice.name}
                      fill
                      className="media-zoom object-cover"
                      fallbackIcon="🌶️"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                    <span className="absolute right-3 top-3 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md text-[#1F4A3D] shadow-sm">
                      {spice.badge}
                    </span>
                  </div>

                  {/* Card Content */}
                  <div className="p-5 flex flex-col flex-1 justify-between">
                    <div>
                      <h3
                        className="text-lg font-bold text-[#1F4A3D] mb-1.5 group-hover:text-[#B8934A] transition-colors"
                        style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}
                      >
                        {spice.name}
                      </h3>
                      <p className="text-xs font-semibold text-[#B8934A] mb-2">{spice.grade}</p>
                      <p className="text-xs text-gray-500 line-clamp-2">{spice.origin}</p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-xs font-semibold text-[#1F4A3D] group-hover:text-[#B8934A]">
                      <span>Specifications & RFQ</span>
                      <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ CORE EXPORT CATEGORIES PREVIEW ═══════ */}
      <section className="py-20 lg:py-28 bg-[#FAF6F0]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal animation="fade-up">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="gold-divider" />
                <span className="text-[#B8934A] text-xs sm:text-sm font-bold uppercase tracking-[0.2em]">
                  Comprehensive Portfolio
                </span>
              </div>
              <h2 className="section-heading text-3xl sm:text-4xl lg:text-5xl mb-4">
                Specialized Commodity Divisions
              </h2>
              <p className="text-gray-600 text-base sm:text-lg">
                Structured for international importers, spice re-packers, food processing plants, and commodity distributors.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categoryCards.map((cat, idx) => (
              <ScrollReveal key={cat.title} animation="fade-up" delay={idx * 80}>
                <Link
                  href={cat.href}
                  className="glass-card p-0 flex flex-col justify-between group h-full overflow-hidden bg-white hover:border-[#B8934A]/40 transition-all duration-300"
                >
                  <div className="relative h-48 overflow-hidden border-b border-[#B8934A]/15">
                    <MediaWithFallback
                      src={cat.image}
                      alt={cat.title}
                      fill
                      className="media-zoom object-cover"
                      fallbackIcon="✦"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                    <div className="absolute right-3 top-3">
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md text-[#8A6A2E]">
                        {cat.badge}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#B8934A] block mb-1">
                      {cat.subtitle}
                    </span>
                    <h3
                      className="text-xl font-bold text-[#1F4A3D] mb-2.5 group-hover:text-[#B8934A] transition-colors"
                      style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}
                    >
                      {cat.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-500 leading-relaxed flex-1 mb-4">
                      {cat.description}
                    </p>
                    <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-[#1F4A3D] group-hover:text-[#B8934A]">
                      <span>Explore Category</span>
                      <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ IN-HOUSE PROCESSING WITH REAL PHOTOGRAPHY ═══════ */}
      <section className="py-20 lg:py-28 bg-[#0F2922] text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#B8934A]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          <ScrollReveal animation="fade-up">
            <div className="grid lg:grid-cols-12 gap-12 items-center mb-16">
              <div className="lg:col-span-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="gold-divider" />
                  <span className="text-[#D4B56A] text-xs sm:text-sm font-bold uppercase tracking-[0.2em]">
                    Pologround Industrial Estate, Indore
                  </span>
                </div>
                <h2
                  className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4"
                  style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}
                >
                  Inside Our <span className="gold-gradient-text">Processing & Warehousing</span> Facility
                </h2>
                <p className="text-white/80 text-base sm:text-lg max-w-2xl leading-relaxed">
                  Every step — from farm mandi intake to optical Sortex cleaning, precision thermal drum roasting, and export packaging — operates under our direct physical custody.
                </p>
              </div>
              <div className="lg:col-span-4 flex lg:justify-end">
                <Link href="/processing" className="btn-primary text-sm group">
                  <span>Explore Interactive Flow</span>
                  <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </Link>
              </div>
            </div>
          </ScrollReveal>

          {/* 4 Real Process Photo Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processTeaser.map((p, idx) => (
              <ScrollReveal key={p.num} animation="fade-up" delay={idx * 100}>
                <div className="rounded-2xl bg-white/5 border border-white/10 overflow-hidden backdrop-blur-sm hover:border-[#B8934A]/40 transition-all duration-300 h-full flex flex-col justify-between group">
                  <div className="relative h-44 w-full overflow-hidden">
                    <MediaWithFallback
                      src={p.image}
                      alt={p.title}
                      fill
                      className="media-zoom object-cover"
                      fallbackIcon="⚙️"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F2922] via-transparent to-transparent pointer-events-none" />
                    <span className="absolute left-3 top-3 text-xs font-bold text-[#EBD095] bg-black/60 px-2.5 py-1 rounded-full backdrop-blur-sm border border-white/10">
                      Step {p.num}
                    </span>
                  </div>

                  <div className="p-6 flex flex-col flex-1 justify-between">
                    <div>
                      <span className="text-[10px] uppercase font-bold tracking-wider text-[#D4B56A] block mb-1">
                        {p.tag}
                      </span>
                      <h3
                        className="text-lg font-bold text-white mb-2 group-hover:text-[#D4B56A] transition-colors"
                        style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}
                      >
                        {p.title}
                      </h3>
                      <p className="text-white/70 text-xs sm:text-sm leading-relaxed">{p.desc}</p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-white/10 flex items-center text-xs text-[#D4B56A] font-semibold">
                      <span>View Specifications →</span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ INTERACTIVE GLOBAL TRADE NETWORK ═══════ */}
      <section className="py-20 lg:py-28 bg-[#FAF6F0]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal animation="fade-up">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="gold-divider" />
                <span className="text-[#B8934A] text-xs sm:text-sm font-bold uppercase tracking-[0.2em]">
                  Global Trade Corridors
                </span>
              </div>
              <h2 className="section-heading text-3xl sm:text-4xl lg:text-5xl mb-4">
                Worldwide Export Corridors & Port Dispatches
              </h2>
              <p className="text-gray-600 text-base sm:text-lg">
                Click on any continent or region below to explore trade volumes, key discharge ports, and commodity shipments.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={150}>
            <InteractiveGlobalMap />
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════ TESTIMONIALS CAROUSEL ═══════ */}
      <section className="py-20 lg:py-28 bg-white border-y border-gray-100">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal animation="fade-up">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="gold-divider" />
                <span className="text-[#B8934A] text-xs sm:text-sm font-bold uppercase tracking-[0.2em]">
                  Verified Importer Feedback
                </span>
              </div>
              <h2 className="section-heading text-3xl sm:text-4xl lg:text-5xl mb-4">
                Trusted by Global Importers & Food Brands
              </h2>
              <p className="text-gray-600 text-base sm:text-lg">
                Delivering verified purity, consistent roasting, and dependable container freight across 20+ countries.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={150}>
            <TestimonialsCarousel />
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════ CERTIFICATIONS TEASER ═══════ */}
      <section className="py-16 lg:py-20 bg-[#FAF3E7] border-b border-[#B8934A]/25">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal animation="scale-up">
            <div className="rounded-3xl bg-white p-8 lg:p-12 border border-[#B8934A]/25 flex flex-col md:flex-row items-center justify-between gap-8 shadow-md">
              <div className="space-y-2 max-w-xl">
                <span className="text-xs font-bold uppercase tracking-wider text-[#8A6A2E]">
                  Official Compliance
                </span>
                <h3
                  className="text-2xl lg:text-3xl font-bold text-[#1F4A3D]"
                  style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}
                >
                  Food Safety & Export Registrations
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Registered under FSSAI and Indian export commodity authorities. Instant digital QR verification available on all trade documents.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                <Link href="/certifications" className="btn-primary text-sm group">
                  <span>View & Scan Certificates</span>
                  <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════ FAQ ACCORDION ═══════ */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal animation="fade-up">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="gold-divider" />
                <span className="text-[#B8934A] text-xs sm:text-sm font-bold uppercase tracking-[0.2em]">
                  Trade Knowledge Base
                </span>
              </div>
              <h2 className="section-heading text-3xl sm:text-4xl lg:text-5xl mb-4">
                Frequently Asked Export Questions
              </h2>
              <p className="text-gray-600 text-base sm:text-lg">
                Essential information on minimum order quantities, moisture parameters, COA lab tests, and shipping terms.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={150}>
            <FAQAccordion />
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════ WHY CHOOSE US ═══════ */}
      <section className="py-20 lg:py-28 bg-[#FAF6F0] border-t border-gray-100">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal animation="fade-up">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="gold-divider" />
              </div>
              <h2 className="section-heading text-3xl sm:text-4xl lg:text-5xl mb-4">
                Why Partner with Vishnu Traders
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-base sm:text-lg">
                Three decades of trust built on transparent weighing, disciplined quality grading, and dependable container logistics.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyUs.map((item, idx) => (
              <ScrollReveal key={item.title} animation="fade-up" delay={idx * 100}>
                <div className="glass-card rounded-2xl p-7 text-center group hover:-translate-y-2 transition-all duration-300 h-full bg-white">
                  <div className="mx-auto mb-5 w-14 h-14 rounded-2xl bg-gradient-to-br from-[#EAF3F0] to-[#CBE0D8] flex items-center justify-center text-[#1F4A3D] transition-all duration-300 group-hover:from-[#1F4A3D] group-hover:to-[#3F7C67] group-hover:text-[#B8934A] group-hover:scale-110">
                    {item.icon}
                  </div>
                  <h3
                    className="text-lg font-bold text-[#1F4A3D] mb-2"
                    style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{item.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ CTA ═══════ */}
      <section className="py-20 lg:py-28 bg-[#0F2922] text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#3F7C67]/20 via-transparent to-transparent pointer-events-none" />
        <div className="mx-auto max-w-4xl px-6 lg:px-8 relative z-10">
          <ScrollReveal animation="fade-up">
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6"
              style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}
            >
              Ready to Discuss Your <span className="gold-gradient-text">Export Requirements?</span>
            </h2>
            <p className="text-white/80 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
              Contact Harsh Agrawal at our Indore headquarters for commodity availability, current crop prices, sample dispatches, and container logistics.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary text-base group">
                <span>Submit Trade Inquiry</span>
                <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </Link>
              <Link
                href="https://wa.me/918839966253"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full border-2 border-white/20 text-white font-semibold hover:bg-white/10 transition-all duration-300 text-base"
              >
                WhatsApp Business Desk
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
