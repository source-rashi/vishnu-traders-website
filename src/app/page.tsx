import Link from "next/link";
import HeroCarousel from "./components/HeroCarousel";
import StatCounters from "./components/StatCounters";
import ScrollReveal from "./components/ScrollReveal";
import FAQAccordion from "./components/FAQAccordion";
import MediaWithFallback from "./components/MediaWithFallback";
import TrustBadgeStrip from "./components/TrustBadgeStrip";

/* ────────────────────────────── ARECA NUT PRODUCTS DATA ────────────────────────────── */

const arecaProducts = [
  {
    id: "raw-whole",
    title: "Raw Areca Nut — Whole",
    subtitle: "Sun-Dried / Machine-Dried Whole Betel Nut",
    image: "/images/products/raw-whole.jpg",
    hsCode: "0802.80",
    moisture: "10–12%",
    grades: [
      { name: "Grade 80–85%", desc: "Standard Commercial Batch" },
      { name: "Grade 90–95%", desc: "Premium Selected Caliber" },
      { name: "Grade 95%+ (Super)", desc: "Export Super Quality" },
    ],
    whatsappMsg:
      "Hi, I'm interested in Raw Whole Areca Nut — please share your best price.",
  },
  {
    id: "raw-split",
    title: "Raw Areca Nut — Split",
    subtitle: "Precision-Cut Split Varieties with Limited In-House Cutting",
    image: "/images/products/raw-split.jpg",
    hsCode: "0802.80",
    moisture: "10–12%",
    grades: [
      { name: "Grade 80–85%", desc: "Commercial Clean Splits" },
      { name: "Grade 90–95%", desc: "Uniform Graded Cut" },
      { name: "Grade 95%+ (Super)", desc: "Premium Clean Split" },
    ],
    whatsappMsg:
      "Hi, I'm interested in Raw Split Areca Nut — please share your best price.",
  },
  {
    id: "roasted-whole",
    title: "Roasted Areca Nut — Whole",
    subtitle: "Controlled Drum-Roasted Under Calibrated Heat Profiles",
    image: "/images/products/roasted-whole.jpg",
    hsCode: "2008.19.91",
    moisture: "≤10%",
    grades: [
      { name: "Grade 80–85%", desc: "Standard Roasted Batch" },
      { name: "Grade 90–95%", desc: "Evenly Toasted Premium" },
      { name: "Grade 95%+ (Super)", desc: "Super Roasted Caliber" },
    ],
    whatsappMsg:
      "Hi, I'm interested in Roasted Whole Areca Nut — please share your best price.",
  },
  {
    id: "roasted-split",
    title: "Roasted Areca Nut — Split",
    subtitle: "Evenly Roasted Split Nuts for Industrial Formulations",
    image: "/images/products/roasted-split.jpg",
    hsCode: "2008.19.91",
    moisture: "≤10%",
    grades: [
      { name: "Grade 80–85%", desc: "Uniform Roasted Splits" },
      { name: "Grade 90–95%", desc: "High Purity Roasted" },
      { name: "Grade 95%+ (Super)", desc: "Prime Selected Super" },
    ],
    whatsappMsg:
      "Hi, I'm interested in Roasted Split Areca Nut — please share your best price.",
  },
];

/* ────────────────────────────── DIVISIONS DATA ────────────────────────────── */

const specializedDivisions = [
  {
    title: "International Sourcing",
    tag: "Global Origin Network",
    description:
      "Direct relationships across every major areca-nut growing and producing nation, including Indonesia, Thailand, Myanmar, and Sri Lanka.",
    icon: (
      <svg className="w-8 h-8 text-[#B8934A]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-.778.099-1.533.284-2.253" />
      </svg>
    ),
  },
  {
    title: "Domestic Sourcing",
    tag: "Direct Farm Procurement",
    description:
      "Direct from farmers and trusted trading partners across Kerala and Karnataka, ensuring consistent batch availability and farm-gate traceability.",
    icon: (
      <svg className="w-8 h-8 text-[#B8934A]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
      </svg>
    ),
  },
  {
    title: "Domestic Bulk Supply",
    tag: "Pan-India Distribution",
    description:
      "Pan-India bulk distribution to manufacturers, wholesalers, and distributors with customized industrial packaging and high-volume dispatch.",
    icon: (
      <svg className="w-8 h-8 text-[#B8934A]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.25V3.375c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75M8.25 21h8.25" />
      </svg>
    ),
  },
];

/* ────────────────────────────── PROCESS TEASER DATA ────────────────────────────── */

const processTeaser = [
  {
    num: "01",
    title: "Origin Procurement",
    desc: "Direct sourcing from growers and trusted trading partners, overseas and domestic.",
    image: "/images/process/sourcing.jpg",
    tag: "Global & Domestic Origin",
  },
  {
    num: "02",
    title: "Grading & Cutting",
    desc: "In-house moisture, size, and purity screening, with limited in-house cutting capability for select split varieties.",
    image: "/images/process/grading.jpg",
    tag: "Precision Caliber Screening",
  },
  {
    num: "03",
    title: "Roasting (Roasted Line)",
    desc: "Controlled-heat drum roasting under calibrated thermal profiles for consistent toasting.",
    image: "/images/process/roasting.jpg",
    tag: "Controlled Drum Roasting",
  },
  {
    num: "04",
    title: "QC & Packing",
    desc: "Batch testing with Certificate of Analysis (COA) and export-grade packaging in 50–80kg bags.",
    image: "/images/process/packaging.jpg",
    tag: "COA Certified & Bagged",
  },
];

/* ────────────────────────────── WHY PARTNER DATA ────────────────────────────── */

const whyPartner = [
  {
    title: "Established Trading Legacy",
    subtitle: "Since 1996",
    description:
      "Three decades of specialized commodity trading and supply stability for institutional food buyers across India.",
    icon: "🏛️",
  },
  {
    title: "Direct Sourcing",
    subtitle: "Overseas & Domestic",
    description:
      "From farmers and trusted trading partners across Indonesia, Thailand, Myanmar, Sri Lanka, Kerala, and Karnataka.",
    icon: "🌱",
  },
  {
    title: "Full Compliance Documentation",
    subtitle: "FSSAI, IEC, GST & COA",
    description:
      "Every shipment is accompanied by a Certificate of Analysis (COA) confirming quality, moisture, and purity parameters.",
    icon: "📜",
  },
  {
    title: "Consistent Pan-India & Intl Supply",
    subtitle: "Institutional Scale",
    description:
      "Built for institutional volume with 500M+ Kg traded volume till date, supporting recurring manufacturer demand.",
    icon: "🚢",
  },
  {
    title: "Competitive, Transparent Pricing",
    subtitle: "Market-Linked Rates",
    description:
      "Transparent pricing tied directly to origin mandis and current market conditions on every institutional quote.",
    icon: "⚖️",
  },
  {
    title: "Fast WhatsApp Response",
    subtitle: "Same-Day Desk",
    description:
      "Direct line to our sourcing and operations desk in Indore for stock availability, specs, and rapid quotation.",
    icon: "⚡",
  },
];

/* ────────────────────────────── COMPONENT ────────────────────────────── */

export default function Home() {
  return (
    <>
      {/* ═══════ HERO ROTATING CAROUSEL (Part 1a) ═══════ */}
      <HeroCarousel />

      {/* ═══════ TRUST STRIP 1 (Part 1i - Right After Hero) ═══════ */}
      <TrustBadgeStrip variant="gold" />

      {/* ═══════ STAT BAR (Part 1b - 3 Client Stats) ═══════ */}
      <StatCounters />

      {/* ═══════ MARKETS & REACH STRIP (Part 7f) ═══════ */}
      <section className="py-8 bg-[#0F2922] text-white border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3 text-center lg:text-left">
              <span className="w-2.5 h-2.5 rounded-full bg-[#B8934A] animate-pulse" />
              <span className="text-xs uppercase font-bold tracking-widest text-[#D4B56A]">
                Origin Sourcing Corridors:
              </span>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-xs">
              <span className="px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-white/90 font-medium">
                🇮🇩 Indonesia
              </span>
              <span className="px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-white/90 font-medium">
                🇹🇭 Thailand
              </span>
              <span className="px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-white/90 font-medium">
                🇲🇲 Myanmar
              </span>
              <span className="px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-white/90 font-medium">
                🇱🇰 Sri Lanka
              </span>
              <span className="px-3.5 py-1.5 rounded-full bg-[#B8934A]/20 border border-[#B8934A]/40 text-[#EBD095] font-semibold">
                🇮🇳 Kerala & Karnataka (Domestic)
              </span>
              <span className="px-3.5 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 font-semibold">
                🚚 Pan-India Bulk Supply
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ CORE PRODUCT RANGE (Part 1c) ═══════ */}
      <section className="py-20 lg:py-28 bg-white" id="products">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal animation="fade-up">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16 gap-6">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="gold-divider" />
                  <span className="text-[#B8934A] text-xs sm:text-sm font-bold uppercase tracking-[0.2em]">
                    Institutional Areca Catalogue
                  </span>
                </div>
                <h2 className="section-heading text-3xl sm:text-4xl lg:text-5xl mb-3">
                  Core Areca Nut Product Range
                </h2>
                <p className="text-gray-600 max-w-2xl text-base sm:text-lg">
                  Procured from prime global and domestic origins. Available in Raw & Roasted lines, Whole & Split forms, across three standardized industrial grade tiers.
                </p>
              </div>
              <Link href="/products" className="btn-secondary self-start lg:self-auto group">
                <span>View Full Product Specifications</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </ScrollReveal>

          {/* 4 Core Scannable Product Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {arecaProducts.map((product, idx) => (
              <ScrollReveal key={product.id} animation="fade-up" delay={idx * 80}>
                <div className="glass-card p-0 rounded-3xl overflow-hidden border border-gray-200 hover:border-[#B8934A]/50 transition-all duration-300 bg-white shadow-lg flex flex-col justify-between group h-full">
                  {/* Photo & Badge Header */}
                  <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-[#0A1B15]">
                    <MediaWithFallback
                      src={product.image}
                      alt={product.title}
                      fill
                      className="media-zoom object-cover"
                      fallbackIcon="🥜"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
                    
                    {/* Top badging */}
                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                      <span className="text-[11px] font-mono font-bold uppercase px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-[#D4B56A] border border-white/20">
                        HS: {product.hsCode}
                      </span>
                      <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#1F4A3D]/90 backdrop-blur-md text-white border border-white/10">
                        Moisture: {product.moisture}
                      </span>
                    </div>

                    {/* Bottom Title on Image */}
                    <div className="absolute bottom-4 left-6 right-6 text-white">
                      <h3
                        className="text-2xl font-bold mb-1"
                        style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}
                      >
                        {product.title}
                      </h3>
                      <p className="text-xs text-white/80 line-clamp-1">{product.subtitle}</p>
                    </div>
                  </div>

                  {/* Card Content: 3 Grade Tiers Inside */}
                  <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-gray-500 block mb-3">
                        Available Grade Tiers:
                      </span>
                      <div className="grid grid-cols-3 gap-2.5">
                        {product.grades.map((grade) => (
                          <div
                            key={grade.name}
                            className="p-3 rounded-2xl bg-[#FAF3E7] border border-[#B8934A]/25 text-center"
                          >
                            <span className="block font-bold text-[#1F4A3D] text-xs sm:text-sm">
                              {grade.name}
                            </span>
                            <span className="block text-[10px] text-gray-500 mt-0.5 leading-tight">
                              {grade.desc}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Primary WhatsApp Deep Link Button per Card (Part 7a) */}
                    <div className="pt-4 border-t border-gray-100 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                      <a
                        href={`https://wa.me/918839966253?text=${encodeURIComponent(product.whatsappMsg)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary !py-2.5 !px-5 text-xs flex items-center justify-center gap-2 group/wa"
                      >
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                        </svg>
                        <span>WhatsApp for Price Quote</span>
                      </a>
                      <Link
                        href={`/contact?sample=${encodeURIComponent(product.title)}`}
                        className="text-xs font-semibold text-gray-600 hover:text-[#B8934A] transition-colors text-center sm:text-right py-2 sm:py-0"
                      >
                        Request Sample Lot →
                      </Link>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ SPECIFICATIONS BLOCK (Part 1d) ═══════ */}
      <section className="py-16 lg:py-20 bg-[#FAF3E7] border-y border-[#B8934A]/25">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal animation="fade-up">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#8A6A2E] block mb-2">
                Industry Trade Standards
              </span>
              <h2
                className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1F4A3D]"
                style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}
              >
                Standard Technical Specifications (All Lines)
              </h2>
              <p className="text-xs sm:text-sm text-gray-600 mt-2">
                Verified batch-by-batch with official Certificate of Analysis (COA) documentation.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-4">
            <div className="p-4 rounded-2xl bg-white border border-[#B8934A]/25 text-center shadow-sm">
              <span className="text-[10px] uppercase font-bold text-gray-500 block">HS Codes</span>
              <span className="text-xs sm:text-sm font-bold text-[#1F4A3D] mt-1 block">
                0802.80 (Raw)<br />2008.19.91 (Roasted)
              </span>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-[#B8934A]/25 text-center shadow-sm">
              <span className="text-[10px] uppercase font-bold text-gray-500 block">Moisture</span>
              <span className="text-xs sm:text-sm font-bold text-[#1F4A3D] mt-1 block">
                Raw 10–12%<br />Roasted ≤10%
              </span>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-[#B8934A]/25 text-center shadow-sm">
              <span className="text-[10px] uppercase font-bold text-gray-500 block">Foreign Matter</span>
              <span className="text-xs sm:text-sm font-bold text-[#1F4A3D] mt-1 block">
                ≤ 1%
              </span>
              <span className="text-[10px] text-gray-400">Strictly Screened</span>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-[#B8934A]/25 text-center shadow-sm">
              <span className="text-[10px] uppercase font-bold text-gray-500 block">Broken Rate</span>
              <span className="text-xs sm:text-sm font-bold text-[#1F4A3D] mt-1 block">
                ≤ 3–5%
              </span>
              <span className="text-[10px] text-gray-400">Caliber Graded</span>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-[#B8934A]/25 text-center shadow-sm">
              <span className="text-[10px] uppercase font-bold text-gray-500 block">Minimum Order (MOQ)</span>
              <span className="text-xs sm:text-sm font-bold text-[#1F4A3D] mt-1 block">
                10 Tons
              </span>
              <span className="text-[10px] text-gray-400">Institutional</span>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-[#B8934A]/25 text-center shadow-sm">
              <span className="text-[10px] uppercase font-bold text-gray-500 block">Packaging</span>
              <span className="text-xs sm:text-sm font-bold text-[#1F4A3D] mt-1 block">
                50–80 kg Bags
              </span>
              <span className="text-[10px] text-gray-400">Varies by batch</span>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-[#B8934A]/25 text-center shadow-sm col-span-2 sm:col-span-1">
              <span className="text-[10px] uppercase font-bold text-gray-500 block">Drying Method</span>
              <span className="text-xs sm:text-sm font-bold text-[#1F4A3D] mt-1 block">
                Sun-Dried /<br />Machine-Dried
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ TRUST STRIP 2 (Part 1i - After Products & Specs) ═══════ */}
      <TrustBadgeStrip variant="light" />

      {/* ═══════ SPECIALIZED DIVISIONS (Part 1e) ═══════ */}
      <section className="py-20 lg:py-28 bg-[#FAF6F0]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal animation="fade-up">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="gold-divider" />
                <span className="text-[#B8934A] text-xs sm:text-sm font-bold uppercase tracking-[0.2em]">
                  Supply Chain Infrastructure
                </span>
              </div>
              <h2 className="section-heading text-3xl sm:text-4xl lg:text-5xl mb-4">
                Specialized Trading Divisions
              </h2>
              <p className="text-gray-600 text-base sm:text-lg">
                Structured to provide institutional buyers and food processors with seamless global and domestic commodity supply.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            {specializedDivisions.map((div, idx) => (
              <ScrollReveal key={div.title} animation="fade-up" delay={idx * 100}>
                <div className="glass-card rounded-3xl p-8 bg-white h-full flex flex-col justify-between hover:border-[#B8934A]/40 transition-all duration-300 shadow-md">
                  <div>
                    <div className="w-14 h-14 rounded-2xl bg-[#FAF3E7] border border-[#B8934A]/25 flex items-center justify-center mb-6">
                      {div.icon}
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#B8934A] block mb-2">
                      {div.tag}
                    </span>
                    <h3
                      className="text-xl font-bold text-[#1F4A3D] mb-3"
                      style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}
                    >
                      {div.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{div.description}</p>
                  </div>
                  <div className="mt-8 pt-4 border-t border-gray-100">
                    <Link
                      href="/contact"
                      className="text-xs font-bold text-[#1F4A3D] hover:text-[#B8934A] transition-colors inline-flex items-center gap-1.5"
                    >
                      <span>Inquire About Division Capacity</span>
                      <span>→</span>
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ SOURCING, DISTRIBUTION & LOGISTICS PIPELINE (Part 1g) ═══════ */}
      <section className="py-20 lg:py-28 bg-[#0F2922] text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#B8934A]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          <ScrollReveal animation="fade-up">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="gold-divider" />
                <span className="text-[#D4B56A] text-xs sm:text-sm font-bold uppercase tracking-[0.2em]">
                  End-to-End Operational Pipeline
                </span>
              </div>
              <h2
                className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4"
                style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}
              >
                Sourcing, Processing & <span className="gold-gradient-text">Logistics Flow</span>
              </h2>
              <p className="text-white/80 text-base sm:text-lg">
                Connecting global areca plantations and South Indian growers to manufacturers across every Indian state.
              </p>
            </div>
          </ScrollReveal>

          {/* 4-Step Sourcing & Logistics Architecture */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <ScrollReveal animation="fade-up" delay={0}>
              <div className="p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm h-full flex flex-col justify-between space-y-4 hover:border-[#B8934A]/40 transition-colors">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl">🌏</span>
                    <span className="text-xs font-mono font-bold text-[#D4B56A] bg-black/40 px-2.5 py-1 rounded-full">
                      Step 01
                    </span>
                  </div>
                  <h3
                    className="text-lg font-bold text-white mb-2"
                    style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}
                  >
                    International Sourcing
                  </h3>
                  <p className="text-white/70 text-xs sm:text-sm leading-relaxed">
                    Direct procurement relationships across every major areca-nut growing and producing nation: Indonesia, Thailand, Myanmar, and Sri Lanka.
                  </p>
                </div>
                <div className="pt-3 border-t border-white/10 text-[11px] text-[#EBD095] font-medium">
                  Direct Import Lines
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={100}>
              <div className="p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm h-full flex flex-col justify-between space-y-4 hover:border-[#B8934A]/40 transition-colors">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl">🌴</span>
                    <span className="text-xs font-mono font-bold text-[#D4B56A] bg-black/40 px-2.5 py-1 rounded-full">
                      Step 02
                    </span>
                  </div>
                  <h3
                    className="text-lg font-bold text-white mb-2"
                    style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}
                  >
                    Domestic Sourcing
                  </h3>
                  <p className="text-white/70 text-xs sm:text-sm leading-relaxed">
                    Direct from farmers and trusted trading partners across the primary South Indian areca belts of Kerala and Karnataka.
                  </p>
                </div>
                <div className="pt-3 border-t border-white/10 text-[11px] text-[#EBD095] font-medium">
                  Farm-Gate Traceability
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={200}>
              <div className="p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm h-full flex flex-col justify-between space-y-4 hover:border-[#B8934A]/40 transition-colors">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl">🏭</span>
                    <span className="text-xs font-mono font-bold text-[#D4B56A] bg-black/40 px-2.5 py-1 rounded-full">
                      Step 03
                    </span>
                  </div>
                  <h3
                    className="text-lg font-bold text-white mb-2"
                    style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}
                  >
                    Central Distribution
                  </h3>
                  <p className="text-white/70 text-xs sm:text-sm leading-relaxed">
                    Pan-India supply to food manufacturers, wholesale mandis, and industrial distributors from our central Pologround facility in Indore.
                  </p>
                </div>
                <div className="pt-3 border-t border-white/10 text-[11px] text-[#EBD095] font-medium">
                  Indore Hub Consolidation
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={300}>
              <div className="p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm h-full flex flex-col justify-between space-y-4 hover:border-[#B8934A]/40 transition-colors">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl">🚚</span>
                    <span className="text-xs font-mono font-bold text-[#D4B56A] bg-black/40 px-2.5 py-1 rounded-full">
                      Step 04
                    </span>
                  </div>
                  <h3
                    className="text-lg font-bold text-white mb-2"
                    style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}
                  >
                    Integrated Logistics
                  </h3>
                  <p className="text-white/70 text-xs sm:text-sm leading-relaxed">
                    In-house dispatch for local movement; nationwide delivery coordinated through trusted, time-sensitive logistics partners.
                  </p>
                </div>
                <div className="pt-3 border-t border-white/10 text-[11px] text-[#EBD095] font-medium">
                  Pan-India Transit Coordination
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═══════ IN-HOUSE PROCESSING TEASER (Part 1f) ═══════ */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal animation="fade-up">
            <div className="grid lg:grid-cols-12 gap-12 items-center mb-16">
              <div className="lg:col-span-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="gold-divider" />
                  <span className="text-[#B8934A] text-xs sm:text-sm font-bold uppercase tracking-[0.2em]">
                    Pologround Industrial Estate, Indore
                  </span>
                </div>
                <h2 className="section-heading text-3xl sm:text-4xl lg:text-5xl mb-4">
                  Our In-House Processing Standards
                </h2>
                <p className="text-gray-600 text-base sm:text-lg max-w-2xl leading-relaxed">
                  Every batch of areca nuts is screened, graded, tested, and bagged under direct physical custody at our centralized facility.
                </p>
              </div>
              <div className="lg:col-span-4 flex lg:justify-end">
                <Link href="/processing" className="btn-primary text-sm group">
                  <span>Explore Interactive Processing Flow</span>
                  <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </Link>
              </div>
            </div>
          </ScrollReveal>

          {/* 4 Process Photo Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processTeaser.map((p, idx) => (
              <ScrollReveal key={p.num} animation="fade-up" delay={idx * 100}>
                <div className="rounded-3xl border border-gray-200 overflow-hidden bg-white hover:border-[#B8934A]/40 transition-all duration-300 h-full flex flex-col justify-between shadow-sm group">
                  <div className="relative h-48 w-full overflow-hidden bg-[#0A1B15]">
                    <MediaWithFallback
                      src={p.image}
                      alt={p.title}
                      fill
                      className="media-zoom object-cover"
                      fallbackIcon="⚙️"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
                    <span className="absolute left-3 top-3 text-xs font-bold text-[#EBD095] bg-black/70 px-2.5 py-1 rounded-full backdrop-blur-sm border border-white/10">
                      Step {p.num}
                    </span>
                  </div>

                  <div className="p-6 flex flex-col flex-1 justify-between">
                    <div>
                      <span className="text-[10px] uppercase font-bold tracking-wider text-[#B8934A] block mb-1">
                        {p.tag}
                      </span>
                      <h3
                        className="text-lg font-bold text-[#1F4A3D] mb-2 group-hover:text-[#B8934A] transition-colors"
                        style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}
                      >
                        {p.title}
                      </h3>
                      <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{p.desc}</p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-gray-100 flex items-center text-xs text-[#1F4A3D] font-semibold group-hover:text-[#B8934A]">
                      <span>Processing Protocol →</span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ DOWNLOADABLE RESOURCES BLOCK (Part 7c) ═══════ */}
      <section className="py-16 bg-[#FAF3E7] border-y border-[#B8934A]/25">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal animation="fade-up">
            <div className="rounded-3xl bg-white p-8 lg:p-12 border border-[#B8934A]/30 shadow-md flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="space-y-2 max-w-xl text-center lg:text-left">
                <span className="text-xs font-bold uppercase tracking-wider text-[#8A6A2E]">
                  Corporate & Technical Documentation
                </span>
                <h3
                  className="text-2xl lg:text-3xl font-bold text-[#1F4A3D]"
                  style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}
                >
                  Downloadable Trade Resources
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Access Vishnu Traders&apos; official company credentials and comprehensive areca nut product catalogue deck.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <a
                  href="/documents/vishnu-traders-company-profile.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-2xl bg-[#FAF3E7] border border-[#B8934A]/30 hover:border-[#B8934A] transition-all flex items-center gap-3 text-left group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#1F4A3D] text-[#D4B56A] flex items-center justify-center shrink-0">
                    📄
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-[#1F4A3D] group-hover:text-[#B8934A]">
                      Company Profile (PDF)
                    </span>
                    <span className="text-[10px] text-gray-500">Corporate Overview & Deck</span>
                  </div>
                </a>

                <a
                  href="/documents/vishnu-traders-product-catalogue.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-2xl bg-[#FAF3E7] border border-[#B8934A]/30 hover:border-[#B8934A] transition-all flex items-center gap-3 text-left group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#1F4A3D] text-[#D4B56A] flex items-center justify-center shrink-0">
                    📦
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-[#1F4A3D] group-hover:text-[#B8934A]">
                      Product Catalogue (PDF)
                    </span>
                    <span className="text-[10px] text-gray-500">Areca Nut Specs & Grades</span>
                  </div>
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════ LEGACY TIMELINE (Part 7e) ═══════ */}
      <section className="py-20 lg:py-28 bg-[#FAF6F0]">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <ScrollReveal animation="fade-up">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="gold-divider" />
                <span className="text-[#B8934A] text-xs sm:text-sm font-bold uppercase tracking-[0.2em]">
                  30-Year Trading Journey
                </span>
              </div>
              <h2 className="section-heading text-3xl sm:text-4xl lg:text-5xl mb-4">
                From Regional Origins to Pan-India Supply
              </h2>
              <p className="text-gray-600 text-base sm:text-lg">
                Three decades of steady growth, direct origin partnerships, and processing discipline.
              </p>
            </div>
          </ScrollReveal>

          <div className="space-y-6">
            <ScrollReveal animation="fade-up" delay={0}>
              <div className="glass-card rounded-2xl p-6 sm:p-8 bg-white flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 border-l-4 border-l-[#B8934A] shadow-sm">
                <div className="shrink-0 text-center sm:text-left">
                  <span
                    className="text-2xl sm:text-3xl font-bold text-[#B8934A]"
                    style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}
                  >
                    1996
                  </span>
                </div>
                <div className="border-t sm:border-t-0 sm:border-l border-gray-200 pt-3 sm:pt-0 sm:pl-6">
                  <h3
                    className="text-lg font-bold text-[#1F4A3D] mb-1"
                    style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}
                  >
                    Founded in Indore, Madhya Pradesh
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    Vishnu Traders established its commodity trading operations in Indore, setting up direct domestic procurement routes.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={80}>
              <div className="glass-card rounded-2xl p-6 sm:p-8 bg-white flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 border-l-4 border-l-gray-300 shadow-sm">
                <div className="shrink-0 text-center sm:text-left">
                  <span
                    className="text-xl sm:text-2xl font-bold text-gray-500 font-mono"
                  >
                    Expansion
                  </span>
                </div>
                <div className="border-t sm:border-t-0 sm:border-l border-gray-200 pt-3 sm:pt-0 sm:pl-6">
                  <h3
                    className="text-lg font-bold text-[#1F4A3D] mb-1"
                    style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}
                  >
                    Pologround Infrastructure & Global Import Expansion
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    Consolidated bulk warehousing, grading, drum roasting, and packaging at R-20 Pologround Industrial Estate, alongside international origin sourcing across Southeast Asia.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={160}>
              <div className="glass-card rounded-2xl p-6 sm:p-8 bg-white flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 border-l-4 border-l-emerald-600 shadow-sm">
                <div className="shrink-0 text-center sm:text-left">
                  <span
                    className="text-2xl sm:text-3xl font-bold text-emerald-700"
                    style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}
                  >
                    Today
                  </span>
                </div>
                <div className="border-t sm:border-t-0 sm:border-l border-gray-200 pt-3 sm:pt-0 sm:pl-6">
                  <h3
                    className="text-lg font-bold text-[#1F4A3D] mb-1"
                    style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}
                  >
                    Pan-India Distribution & High-Volume Stability
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    500M+ Kg traded volume till date, serving 100+ institutional food manufacturers, wholesalers, and distributors nationwide.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═══════ WHY PARTNER WITH VISHNU TRADERS (Part 1k) ═══════ */}
      <section className="py-20 lg:py-28 bg-white border-t border-gray-100">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal animation="fade-up">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="gold-divider" />
                <span className="text-[#B8934A] text-xs sm:text-sm font-bold uppercase tracking-[0.2em]">
                  Competitive Advantage
                </span>
              </div>
              <h2 className="section-heading text-3xl sm:text-4xl lg:text-5xl mb-4">
                Why Partner With Vishnu Traders
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-base sm:text-lg">
                Delivering reliable commodity volume, verified lab compliance, and rapid WhatsApp desk responsiveness.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyPartner.map((item, idx) => (
              <ScrollReveal key={item.title} animation="fade-up" delay={idx * 80}>
                <div className="glass-card rounded-3xl p-8 text-left group hover:-translate-y-1.5 transition-all duration-300 h-full bg-[#FAFAF8] border border-gray-200 hover:border-[#B8934A]/50 shadow-sm flex flex-col justify-between">
                  <div>
                    <span className="text-4xl mb-5 block">{item.icon}</span>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#B8934A] block mb-1">
                      {item.subtitle}
                    </span>
                    <h3
                      className="text-lg font-bold text-[#1F4A3D] mb-2.5"
                      style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}
                    >
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ FAQ ACCORDION (Part 1j) ═══════ */}
      <section className="py-20 lg:py-28 bg-[#FAF6F0] border-t border-gray-200">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal animation="fade-up">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="gold-divider" />
                <span className="text-[#B8934A] text-xs sm:text-sm font-bold uppercase tracking-[0.2em]">
                  Areca Nut Trade FAQ
                </span>
              </div>
              <h2 className="section-heading text-3xl sm:text-4xl lg:text-5xl mb-4">
                Frequently Asked Trade Questions
              </h2>
              <p className="text-gray-600 text-base sm:text-lg">
                Essential answers on grading tiers, moisture parameters, COA lab tests, sample requests, and WhatsApp pricing.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={150}>
            <FAQAccordion />
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════ TRUST STRIP 3 (Part 1i - Before Final CTA) ═══════ */}
      <TrustBadgeStrip variant="dark" />

      {/* ═══════ FINAL CTA (Part 1l) ═══════ */}
      <section className="py-20 lg:py-28 bg-[#0A1B15] text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#1F4A3D]/50 via-transparent to-transparent pointer-events-none" />
        <div className="mx-auto max-w-4xl px-6 lg:px-8 relative z-10">
          <ScrollReveal animation="fade-up">
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6"
              style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}
            >
              Ready to Discuss Your <span className="gold-gradient-text">Supply Requirements?</span>
            </h2>
            <p className="text-white/85 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
              Contact Harsh Agrawal at our Indore headquarters for stock availability, current pricing, sample dispatch, and logistics.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact" className="btn-primary text-base group !py-3.5 !px-8 w-full sm:w-auto">
                <span>Submit Trade Inquiry</span>
                <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 inline ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </Link>
              <a
                href="https://wa.me/918839966253?text=Hi%2C%20I%27d%20like%20to%20request%20a%20quote%20for%20areca%20nut%20supply."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full border-2 border-emerald-400/60 bg-emerald-500/10 hover:bg-emerald-500/20 text-white font-semibold transition-all duration-300 text-base w-full sm:w-auto shadow-lg hover:border-emerald-400"
              >
                <svg className="w-5 h-5 fill-emerald-400" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                </svg>
                <span>WhatsApp Business Desk → +91 88399 66253 (Fast Response)</span>
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
