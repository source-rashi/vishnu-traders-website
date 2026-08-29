import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "../components/ScrollReveal";
import ImageLightbox from "../components/ImageLightbox";
import MediaWithFallback from "../components/MediaWithFallback";
import TrustBadgeStrip from "../components/TrustBadgeStrip";

export const metadata: Metadata = {
  title: "About Us — 30-Year Areca Nut Trading Legacy",
  description:
    "Learn about Vishnu Traders — a premier importer, processor, and distributor of areca nuts based in Indore, MP since 1996. Sourcing globally and domestically with Pologround processing & warehousing.",
};

const leadershipTeam = [
  {
    name: "Nilesh Agrawal",
    role: "Executive Director, Finance",
    initials: "NA",
    bio: "Guiding financial strategy, credit governance, and institutional commodity trade management across three decades.",
  },
  {
    name: "Amit Makhija",
    role: "Managing Director, Operations",
    initials: "AM",
    bio: "Directing central warehouse operations, inventory movement, and industrial batch packaging at Pologround.",
  },
  {
    name: "Harsh Agrawal",
    role: "Director, Global Sourcing & Markets",
    initials: "HA",
    bio: "Leading international procurement partnerships across Southeast Asia, domestic farm sourcing, and market intelligence.",
  },
  {
    name: "Krish Makhija",
    role: "Director, Sales & Business Development",
    initials: "KM",
    bio: "Managing institutional client relationships, pan-India distribution accounts, and industrial supply agreements.",
  },
];

const values = [
  {
    title: "Origin Integrity",
    description:
      "Direct relationships with farmers and trusted trading partners across Indonesia, Thailand, Myanmar, Sri Lanka, Kerala, and Karnataka.",
    icon: "🌱",
  },
  {
    title: "Batch Compliance & COA",
    description:
      "Every batch is screened for moisture, caliber size, and purity, certified with an official Certificate of Analysis (COA).",
    icon: "🔬",
  },
  {
    title: "High-Volume Supply Stability",
    description:
      "500M+ Kg traded volume till date, built to guarantee consistent stock availability for large-scale food manufacturing.",
    icon: "🏭",
  },
  {
    title: "Long-Term Partnerships",
    description:
      "Serving 100+ institutional clients, wholesalers, and distributors across every major Indian state with market-linked transparency.",
    icon: "🤝",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden text-white bg-[#0A1B15]">
        <div className="absolute inset-0 z-0">
          <MediaWithFallback
            src="/images/about/about-banner.jpg"
            alt="Vishnu Traders areca nut trading legacy since 1996"
            fill
            className="object-cover opacity-35"
            fallbackIcon="✦"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A1B15] via-[#0A1B15]/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A1B15]/95 via-[#0A1B15]/75 to-transparent" />
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="gold-divider" />
            <span className="text-[#D4B56A] text-xs sm:text-sm font-bold uppercase tracking-[0.2em]">
              About Vishnu Traders · Est. 1996
            </span>
          </div>
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-white drop-shadow-md"
            style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}
          >
            A 30-Year Legacy in <span className="gold-gradient-text">Areca Nut Trading</span>
          </h1>
          <p className="text-white/85 text-base sm:text-lg max-w-2xl leading-relaxed">
            Connecting prime global and domestic areca nut origins with Indian food manufacturers, wholesalers, and distributors nationwide.
          </p>
        </div>
      </section>

      {/* Trust Strip */}
      <TrustBadgeStrip variant="gold" />

      {/* ═══════ OUR LEGACY & WHAT WE DO (Parts 2a, 2b) ═══════ */}
      <section className="py-24 lg:py-32 bg-white text-[#1a1a1a]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            {/* Left Story Column */}
            <div className="lg:col-span-7 space-y-8">
              <ScrollReveal animation="fade-up">
                <div className="flex items-center gap-3 mb-3">
                  <div className="gold-divider" />
                  <span className="text-[#B8934A] text-xs sm:text-sm font-bold uppercase tracking-[0.2em]">
                    Our Heritage & Mission
                  </span>
                </div>
                <h2
                  className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1F4A3D] mb-6 leading-tight"
                  style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}
                >
                  Strategic Supply Partner for Food Manufacturers
                </h2>
                
                {/* 2a. Our Legacy */}
                <div className="p-6 rounded-2xl bg-[#FAF3E7] border-l-4 border-l-[#B8934A] space-y-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#8A6A2E]">
                    Our Legacy
                  </span>
                  <p className="text-gray-800 text-base sm:text-lg leading-relaxed font-medium">
                    Vishnu Traders traces its roots to 1996. What began as a regional trading operation has grown into a Pan-India importer and distributor of areca nuts, connecting leading global growing regions and domestic Indian sourcing with manufacturers, wholesalers, and distributors nationwide.
                  </p>
                </div>

                {/* 2b. What We Do */}
                <div className="p-6 rounded-2xl bg-[#FAFAF8] border border-gray-200 space-y-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#1F4A3D]">
                    What We Do
                  </span>
                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                    Vishnu Traders operates across the full areca nut supply chain: sourcing directly from farmers and trading partners across every major overseas growing and producing nation — including Indonesia, Thailand, Myanmar, and Sri Lanka — alongside domestic sourcing across Kerala and Karnataka, then distributing Pan-India to manufacturers, wholesalers, and distributors.
                  </p>
                </div>
              </ScrollReveal>
            </div>

            {/* Right Stat Card */}
            <div className="lg:col-span-5">
              <ScrollReveal animation="scale-up" delay={150}>
                <div className="rounded-3xl bg-[#0F2922] text-white p-8 lg:p-10 border border-[#B8934A]/40 shadow-2xl space-y-6">
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div className="p-4 rounded-2xl bg-white/10 border border-white/10 backdrop-blur-sm">
                      <span
                        className="text-3xl font-bold text-[#EBD095] block"
                        style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}
                      >
                        1996
                      </span>
                      <span className="text-[10px] uppercase font-bold text-white/70 mt-1 block">
                        Established Legacy
                      </span>
                    </div>
                    <div className="p-4 rounded-2xl bg-white/10 border border-white/10 backdrop-blur-sm">
                      <span
                        className="text-3xl font-bold text-[#EBD095] block"
                        style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}
                      >
                        100+
                      </span>
                      <span className="text-[10px] uppercase font-bold text-white/70 mt-1 block">
                        Institutional Clients
                      </span>
                    </div>
                    <div className="p-4 rounded-2xl bg-white/10 border border-white/10 backdrop-blur-sm">
                      <span
                        className="text-3xl font-bold text-[#EBD095] block"
                        style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}
                      >
                        500M+
                      </span>
                      <span className="text-[10px] uppercase font-bold text-white/70 mt-1 block">
                        Kg Traded Volume
                      </span>
                    </div>
                    <div className="p-4 rounded-2xl bg-white/10 border border-white/10 backdrop-blur-sm">
                      <span
                        className="text-3xl font-bold text-[#EBD095] block"
                        style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}
                      >
                        COA
                      </span>
                      <span className="text-[10px] uppercase font-bold text-white/70 mt-1 block">
                        On Every Batch
                      </span>
                    </div>
                  </div>

                  <div className="p-5 rounded-2xl bg-black/40 border border-[#B8934A]/30 text-white text-center space-y-2">
                    <span className="text-[11px] font-bold text-[#D4B56A] uppercase tracking-wider block">
                      Direct Trade Inquiries
                    </span>
                    <h4 className="text-lg font-bold">Harsh Agrawal</h4>
                    <p className="text-xs text-white/70">Director, Global Sourcing & Markets</p>
                    <a
                      href="https://wa.me/918839966253?text=Hi%20Harsh%2C%20I%27d%20like%20to%20discuss%20areca%20nut%20supply%20requirements."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-bold text-[#D4B56A] hover:underline mt-2"
                    >
                      <span>💬 WhatsApp Desk: +91 88399 66253</span>
                    </a>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ LEADERSHIP TEAM (Part 2c) ═══════ */}
      <section className="py-20 lg:py-28 bg-[#FAF6F0] border-t border-gray-100">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal animation="fade-up">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="gold-divider" />
                <span className="text-[#B8934A] text-xs sm:text-sm font-bold uppercase tracking-[0.2em]">
                  Executive Governance
                </span>
              </div>
              <h2 className="section-heading text-3xl sm:text-4xl lg:text-5xl mb-4">
                Leadership Team
              </h2>
              <p className="text-gray-600 text-base sm:text-lg">
                Decades of specialized experience steering commodity trade, global origins, operational logistics, and institutional client partnerships.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {leadershipTeam.map((leader, idx) => (
              <ScrollReveal key={leader.name} animation="fade-up" delay={idx * 80}>
                <div className="glass-card rounded-3xl p-7 text-center bg-white border border-gray-200 hover:border-[#B8934A]/40 shadow-sm transition-all duration-300 h-full flex flex-col justify-between group hover:-translate-y-1">
                  <div>
                    {/* Initials Avatar Badge (Tasteful gold/green gradient) */}
                    <div className="w-20 h-20 rounded-full mx-auto mb-5 bg-gradient-to-br from-[#1F4A3D] via-[#143228] to-[#B8934A] p-0.5 shadow-md flex items-center justify-center">
                      <div className="w-full h-full rounded-full bg-[#1F4A3D] flex items-center justify-center text-white text-xl font-bold tracking-wider font-serif group-hover:scale-105 transition-transform duration-300">
                        <span className="gold-gradient-text">{leader.initials}</span>
                      </div>
                    </div>

                    <h3
                      className="text-lg font-bold text-[#1F4A3D] mb-1 group-hover:text-[#B8934A] transition-colors"
                      style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}
                    >
                      {leader.name}
                    </h3>
                    <span className="text-xs font-semibold text-[#8A6A2E] block mb-3 leading-snug">
                      {leader.role}
                    </span>
                    <p className="text-xs text-gray-500 leading-relaxed">{leader.bio}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ HEADQUARTERS & FACILITY DUAL ADDRESSES (Part 2d) ═══════ */}
      <section className="py-20 lg:py-28 bg-white border-y border-gray-100">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal animation="fade-up">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="gold-divider" />
                <span className="text-[#B8934A] text-xs sm:text-sm font-bold uppercase tracking-[0.2em]">
                  Physical Presence
                </span>
              </div>
              <h2 className="section-heading text-3xl sm:text-4xl lg:text-5xl mb-4">
                Headquarters & Facility Locations
              </h2>
              <p className="text-gray-600 text-base sm:text-lg">
                Operating two distinct nodes in Indore — commercial trade governance in Siyaganj and centralized warehousing & processing in Pologround.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Address 1: Registered Office */}
            <ScrollReveal animation="fade-up" delay={0}>
              <div className="p-8 rounded-3xl bg-[#FAF3E7] border border-[#B8934A]/30 shadow-md h-full flex flex-col justify-between space-y-6">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="w-10 h-10 rounded-xl bg-[#1F4A3D] text-[#D4B56A] flex items-center justify-center text-lg">
                      🏢
                    </span>
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#8A6A2E]">
                        Commercial Headquarters
                      </span>
                      <h3
                        className="text-xl font-bold text-[#1F4A3D]"
                        style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}
                      >
                        Registered Office
                      </h3>
                    </div>
                  </div>
                  <p className="text-gray-800 text-sm leading-relaxed font-medium pt-2">
                    Aash Chamber, Siyaganj,<br />
                    Indore, Madhya Pradesh 452007, India
                  </p>
                  <p className="text-xs text-gray-500">
                    Trade administration, corporate invoicing, and institutional contracting desk.
                  </p>
                </div>

                <div className="pt-4 border-t border-[#B8934A]/20">
                  <span className="text-xs font-semibold text-[#8A6A2E]">
                    Siyaganj Mandi Commercial Hub
                  </span>
                </div>
              </div>
            </ScrollReveal>

            {/* Address 2: Warehouse / Operations */}
            <ScrollReveal animation="fade-up" delay={100}>
              <div className="p-8 rounded-3xl bg-[#0F2922] text-white border border-[#B8934A]/40 shadow-md h-full flex flex-col justify-between space-y-6">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="w-10 h-10 rounded-xl bg-[#B8934A] text-[#0A1B15] flex items-center justify-center text-lg">
                      🏭
                    </span>
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#D4B56A]">
                        Central Processing Hub
                      </span>
                      <h3
                        className="text-xl font-bold text-white"
                        style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}
                      >
                        Warehouse & Operations
                      </h3>
                    </div>
                  </div>
                  <p className="text-white/90 text-sm leading-relaxed font-medium pt-2">
                    R-20 Pologround Industrial Estate,<br />
                    Malti Vanaspati, Indore,<br />
                    Madhya Pradesh 452015, India
                  </p>
                  <p className="text-xs text-white/70">
                    Bulk warehousing, grading, drum roasting, QC lab, and nationwide container dispatch.
                  </p>
                </div>

                <div className="pt-4 border-t border-white/15">
                  <a
                    href="https://maps.app.goo.gl/KKwyo6uoLbBCuSeD7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-[#D4B56A] hover:underline inline-flex items-center gap-1"
                  >
                    <span>View Pologround on Google Maps</span>
                    <span>↗</span>
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Facility & Equipment Gallery */}
      <section className="py-20 lg:py-28 bg-[#FAF6F0]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal animation="fade-up">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="gold-divider" />
                <span className="text-[#B8934A] text-xs sm:text-sm font-bold uppercase tracking-[0.2em]">
                  Facility Showcase
                </span>
              </div>
              <h2 className="section-heading text-3xl sm:text-4xl lg:text-5xl mb-4">
                Inside Our Pologround Infrastructure
              </h2>
              <p className="text-gray-600 text-base sm:text-lg">
                Explore our bulk warehousing, precision grading lines, drum roasters, and custom packaging units.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={150}>
            <ImageLightbox />
          </ScrollReveal>
        </div>
      </section>

      {/* Operational Values */}
      <section className="py-20 lg:py-28 bg-white border-t border-gray-100">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal animation="fade-up">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="gold-divider" />
                <span className="text-[#B8934A] text-xs sm:text-sm font-bold uppercase tracking-[0.2em]">
                  Core Principles
                </span>
              </div>
              <h2 className="section-heading text-3xl sm:text-4xl lg:text-5xl mb-4">
                Our Operational Values
              </h2>
              <p className="text-gray-600 text-base sm:text-lg">
                The commitments governing every origin intake, in-house grading batch, and dispatch.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, idx) => (
              <ScrollReveal key={v.title} animation="fade-up" delay={idx * 100}>
                <div className="glass-card rounded-3xl p-7 text-center h-full hover:-translate-y-1.5 transition-all duration-300 bg-[#FAFAF8] border border-gray-200">
                  <span className="text-4xl mb-4 block">{v.icon}</span>
                  <h3
                    className="text-lg font-bold text-[#1F4A3D] mb-2"
                    style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}
                  >
                    {v.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">{v.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-[#0F2922] text-white text-center relative overflow-hidden">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 relative z-10">
          <ScrollReveal animation="fade-up">
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6"
              style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}
            >
              Partner with an Established <span className="gold-gradient-text">Areca Nut Importer</span>
            </h2>
            <p className="text-white/80 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
              Get in touch with Harsh Agrawal today for product catalogues, quality specifications, and market-linked quotes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary text-base">
                Contact Operations Desk
              </Link>
              <Link href="/products" className="btn-secondary !text-white !border-white/30 hover:!bg-white/20 text-base">
                Browse Full Catalogue
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
