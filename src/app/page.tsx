import Link from "next/link";
import HeroCarousel from "./components/HeroCarousel";
import StatCounters from "./components/StatCounters";
import ScrollReveal from "./components/ScrollReveal";
import InteractiveGlobalMap from "./components/InteractiveGlobalMap";

/* ────────────────────────────── DATA ────────────────────────────── */

const productHighlights = [
  {
    title: "Whole Spices",
    subtitle: "Sortex Cleaned",
    description:
      "Handpicked Cumin, Coriander, Turmeric Fingers, Black Pepper, and Bold Cardamom with high essential volatile oils.",
    icon: "🌶️",
    gradient: "from-red-50 to-orange-50",
    href: "/products#whole-spices",
    badge: "Export Grade",
  },
  {
    title: "Ground & Powders",
    subtitle: "Low-Temp Milled",
    description:
      "Cold-ground Red Chili, Turmeric, Coriander, and signature Garam Masala blends without synthetic colors or adulterants.",
    icon: "🏺",
    gradient: "from-amber-50 to-yellow-50",
    href: "/products#ground-spices",
    badge: "100% Pure",
  },
  {
    title: "Agri Commodities",
    subtitle: "Malwa & Central India",
    description:
      "Non-GMO Soybeans, Sharbati/Durum Wheat, Yellow Corn/Maize, and Sortex-selected 99.95% Sesame Seeds.",
    icon: "🌾",
    gradient: "from-green-50 to-emerald-50",
    href: "/products#agri-commodities",
    badge: "Direct Sourcing",
  },
  {
    title: "Processed & Roasted",
    subtitle: "In-House Roastery",
    description:
      "Precision drum-roasted cumin, toasted coriander, and custom contract formulations for international food brands.",
    icon: "🔥",
    gradient: "from-orange-50 to-amber-50",
    href: "/products#processed",
    badge: "Custom Toasting",
  },
];

const processingHighlights = [
  {
    num: "01",
    title: "Direct Farm Procurement",
    desc: "Origin sourcing across MP & Rajasthan mandis with strict incoming moisture & purity testing.",
    icon: "🌿",
  },
  {
    num: "02",
    title: "Sortex & Drum Roasting",
    desc: "Multi-stage optical sortex cleaning and custom thermal roasting at our Pologround facility.",
    icon: "🔥",
  },
  {
    num: "03",
    title: "Export Packaging & FCL",
    desc: "Barrier pouches up to 50kg export bags, containerized with phytosanitary documentation.",
    icon: "🚢",
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

      {/* ═══════ PRODUCTS PREVIEW ═══════ */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal animation="fade-up">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16 gap-6">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="gold-divider" />
                  <span className="text-[#B8934A] text-sm font-semibold uppercase tracking-[0.15em]">
                    Commodities & Spices
                  </span>
                </div>
                <h2 className="section-heading text-3xl lg:text-4xl mb-3">
                  Core Export Categories
                </h2>
                <p className="text-gray-500 max-w-xl text-lg">
                  Procured directly from farm mandis in Madhya Pradesh & Rajasthan, graded to international export purity.
                </p>
              </div>
              <Link href="/products" className="btn-secondary self-start lg:self-auto group">
                <span>View Full Product Catalogue</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {productHighlights.map((cat, idx) => (
              <ScrollReveal key={cat.title} animation="fade-up" delay={idx * 100}>
                <Link
                  href={cat.href}
                  className="glass-card rounded-2xl p-7 flex flex-col justify-between group hover:-translate-y-2 hover:border-[#B8934A]/50 transition-all duration-300 h-full"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div
                        className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${cat.gradient} flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300 shadow-sm`}
                      >
                        {cat.icon}
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#B8934A]/10 text-[#8A6A2E]">
                        {cat.badge}
                      </span>
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#B8934A] block mb-1">
                      {cat.subtitle}
                    </span>
                    <h3
                      className="text-xl font-bold text-[#1F4A3D] mb-2.5 group-hover:text-[#B8934A] transition-colors"
                      style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}
                    >
                      {cat.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                      {cat.description}
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-gray-100 flex items-center gap-1 text-xs font-bold text-[#1F4A3D] group-hover:text-[#B8934A]">
                    <span>Explore Products</span>
                    <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ HOW WE PROCESS (TEASER) ═══════ */}
      <section className="py-24 lg:py-32 bg-[#1F4A3D] text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#B8934A]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          <ScrollReveal animation="fade-up">
            <div className="grid lg:grid-cols-12 gap-12 items-center mb-16">
              <div className="lg:col-span-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="gold-divider" />
                  <span className="text-[#B8934A] text-sm font-semibold uppercase tracking-[0.15em]">
                    Facility & Workflow
                  </span>
                </div>
                <h2
                  className="text-3xl lg:text-5xl font-bold mb-4"
                  style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}
                >
                  In-House Processing at <span className="gold-gradient-text">Pologround, Indore</span>
                </h2>
                <p className="text-white/70 text-lg max-w-2xl leading-relaxed">
                  By controlling every step from origin mandi intake to optical Sortex cleaning, thermal drum roasting, and custom barrier packaging, we eliminate quality variance.
                </p>
              </div>
              <div className="lg:col-span-4 flex lg:justify-end">
                <Link href="/processing" className="btn-primary text-sm group">
                  <span>Explore All 7 Stages</span>
                  <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </Link>
              </div>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6">
            {processingHighlights.map((p, idx) => (
              <ScrollReveal key={p.num} animation="fade-up" delay={idx * 150}>
                <div className="rounded-2xl bg-white/5 border border-white/10 p-8 backdrop-blur-sm hover:bg-white/10 hover:-translate-y-1 transition-all duration-300 h-full flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span
                        className="text-4xl font-bold text-[#B8934A]"
                        style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}
                      >
                        {p.num}
                      </span>
                      <span className="text-2xl">{p.icon}</span>
                    </div>
                    <h3
                      className="text-xl font-bold text-white mb-2"
                      style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}
                    >
                      {p.title}
                    </h3>
                    <p className="text-white/60 text-sm leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ INTERACTIVE GLOBAL TRADE NETWORK ═══════ */}
      <section className="py-24 lg:py-32 bg-[#F5F0E8]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal animation="fade-up">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="gold-divider" />
                <span className="text-[#B8934A] text-sm font-semibold uppercase tracking-[0.15em]">
                  Around the Globe
                </span>
              </div>
              <h2 className="section-heading text-3xl lg:text-4xl mb-4">
                Worldwide Export Corridors & Port Dispatches
              </h2>
              <p className="text-gray-600 text-lg">
                Click on any continent or region below to explore export volumes, key discharge ports, and product demand.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={150}>
            <InteractiveGlobalMap />
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════ CERTIFICATIONS TEASER ═══════ */}
      <section className="py-20 lg:py-28 bg-white border-y border-gray-100">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal animation="scale-up">
            <div className="rounded-3xl bg-gradient-to-br from-[#FAF3E7] to-[#F5F0E8] p-8 lg:p-12 border border-[#B8934A]/25 flex flex-col md:flex-row items-center justify-between gap-8 shadow-sm">
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

      {/* ═══════ WHY CHOOSE US ═══════ */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal animation="fade-up">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="gold-divider" />
              </div>
              <h2 className="section-heading text-3xl lg:text-4xl mb-4">
                Why Partner with Vishnu Traders
              </h2>
              <p className="text-gray-500 max-w-2xl mx-auto text-lg">
                Three decades of reputation built on transparent weighing, disciplined quality grading, and dependable container dispatch.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyUs.map((item, idx) => (
              <ScrollReveal key={item.title} animation="fade-up" delay={idx * 100}>
                <div className="glass-card rounded-2xl p-7 text-center group hover:-translate-y-2 transition-all duration-300 h-full">
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
      <section className="py-24 lg:py-32 bg-[#1F4A3D] text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#3F7C67]/20 via-transparent to-transparent pointer-events-none" />
        <div className="mx-auto max-w-4xl px-6 lg:px-8 relative z-10">
          <ScrollReveal animation="fade-up">
            <h2
              className="text-3xl lg:text-5xl font-bold mb-6"
              style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}
            >
              Ready to Discuss Your <span className="gold-gradient-text">Export Requirements?</span>
            </h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
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
