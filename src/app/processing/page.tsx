import type { Metadata } from "next";
import Link from "next/link";
import InteractiveProcessingFlow from "../components/InteractiveProcessingFlow";
import ScrollReveal from "../components/ScrollReveal";
import MediaWithFallback from "../components/MediaWithFallback";
import TrustBadgeStrip from "../components/TrustBadgeStrip";

export const metadata: Metadata = {
  title: "In-House Areca Nut Processing & Quality Flow",
  description:
    "Explore the 5-stage areca nut processing pipeline at Vishnu Traders' Pologround Industrial Estate facility in Indore. Origin intake, grading & cutting, drum roasting, batch QC, and export packing.",
};

const qualityPillars = [
  {
    title: "In-House Grading & Sizing",
    desc: "Rigorous grading for density, caliber size, and purity screening, with limited in-house cutting capability for select split varieties.",
    icon: "⚙️",
  },
  {
    title: "Thermal Drum Roasting",
    desc: "Precision LPG drum roasters operating under monitored heat curves to produce uniform, deeply toasted roasted whole and split lines.",
    icon: "🔥",
  },
  {
    title: "Batch QC & COA Certification",
    desc: "Every batch is laboratory tested for moisture, foreign matter (≤1%), and broken rate (≤3–5%), accompanied by an official COA.",
    icon: "🔬",
  },
  {
    title: "Integrated Pan-India Logistics",
    desc: "In-house dispatch for regional Indore movement; nationwide containerized freight coordinated through trusted transport partners.",
    icon: "🚚",
  },
];

export default function ProcessingPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden text-white bg-[#0A1B15]">
        <div className="absolute inset-0">
          <MediaWithFallback
            src="/images/process/warehouse.jpg"
            alt="Areca nut processing and warehousing at Vishnu Traders Indore"
            fill
            className="object-cover opacity-35"
            fallbackIcon="⚙️"
            fallbackGradient="from-[#1F4A3D] via-[#3F7C67] to-[#B8934A]"
          />
          <div className="absolute inset-0 bg-[#0A1B15]/75" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/35" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A1B15] via-transparent to-black/50" />
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="gold-divider" />
            <span className="text-[#D4B56A] text-sm font-semibold uppercase tracking-[0.15em] drop-shadow-sm">
              Pologround Industrial Estate, Indore
            </span>
          </div>
          <h1
            className="text-4xl lg:text-6xl font-bold leading-tight mb-6 text-white drop-shadow-md"
            style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}
          >
            In-House Warehousing & <span className="gold-gradient-text">Processing</span>
          </h1>
          <p className="text-white/85 text-lg max-w-3xl leading-relaxed drop-shadow-sm">
            Consolidating bulk origin procurement across Southeast Asia and South India with precision in-house grading, drum roasting, batch laboratory analysis, and customized 50–80kg bagging.
          </p>
        </div>
      </section>

      {/* Trust Strip */}
      <TrustBadgeStrip variant="gold" />

      {/* Overview Stat Strip */}
      <section className="bg-[#FAF3E7] border-b border-[#B8934A]/20 py-8">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <p
                className="text-2xl lg:text-3xl font-bold text-[#1F4A3D]"
                style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}
              >
                100%
              </p>
              <p className="text-xs uppercase tracking-wider text-gray-600 mt-1">In-House Quality Custody</p>
            </div>
            <div>
              <p
                className="text-2xl lg:text-3xl font-bold text-[#1F4A3D]"
                style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}
              >
                80% – 95%+
              </p>
              <p className="text-xs uppercase tracking-wider text-gray-600 mt-1">Grading Tier Standards</p>
            </div>
            <div>
              <p
                className="text-2xl lg:text-3xl font-bold text-[#1F4A3D]"
                style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}
              >
                50 – 80 kg
              </p>
              <p className="text-xs uppercase tracking-wider text-gray-600 mt-1">Industrial Bagging</p>
            </div>
            <div>
              <p
                className="text-2xl lg:text-3xl font-bold text-[#1F4A3D]"
                style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}
              >
                Pologround, Indore
              </p>
              <p className="text-xs uppercase tracking-wider text-gray-600 mt-1">Central Processing Node</p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive 5-Stage Step-by-Step Visual Flow */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal animation="fade-up">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="gold-divider" />
                <span className="text-[#B8934A] text-sm font-semibold uppercase tracking-[0.15em]">
                  Interactive Processing Flow
                </span>
              </div>
              <h2 className="section-heading text-3xl lg:text-4xl mb-4">
                Our 5-Stage Areca Nut Quality Pipeline
              </h2>
              <p className="text-gray-500 text-lg">
                Click on any processing stage to inspect technical parameters, machinery, and quality control protocols.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={150}>
            <InteractiveProcessingFlow />
          </ScrollReveal>
        </div>
      </section>

      {/* Quality & Compliance Pillars */}
      <section className="py-24 lg:py-32 bg-[#FAF6F0] border-t border-gray-100">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal animation="fade-up">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="gold-divider" />
                <span className="text-[#B8934A] text-sm font-semibold uppercase tracking-[0.15em]">
                  Operational Standards
                </span>
              </div>
              <h2 className="section-heading text-3xl lg:text-4xl mb-4">
                Quality Assurance & Processing Governance
              </h2>
              <p className="text-gray-600 text-lg">
                Standardized parameters applied across all whole and split areca nut batches before release.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {qualityPillars.map((item, idx) => (
              <ScrollReveal key={item.title} animation="fade-up" delay={idx * 100}>
                <div className="glass-card rounded-3xl p-8 text-left bg-white h-full hover:-translate-y-1 transition-all duration-300 border border-gray-200 shadow-sm flex flex-col justify-between">
                  <div>
                    <span className="text-4xl mb-5 block">{item.icon}</span>
                    <h3
                      className="text-lg font-bold text-[#1F4A3D] mb-3"
                      style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}
                    >
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Sample & COA Notice */}
          <ScrollReveal animation="scale-up" delay={300}>
            <div className="mt-12 p-6 rounded-2xl bg-white border border-[#B8934A]/30 text-center max-w-2xl mx-auto shadow-sm">
              <p className="text-xs text-gray-600 leading-relaxed">
                <span className="font-semibold text-[#1F4A3D]">Buyer-specific requirements:</span> We accommodate custom moisture parameters, specialized packaging stenciling, and sample lot evaluations prior to full contract dispatch.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 bg-[#0F2922] text-white text-center relative overflow-hidden">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 relative z-10">
          <ScrollReveal animation="fade-up">
            <h2
              className="text-3xl lg:text-5xl font-bold mb-6"
              style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}
            >
              Discuss Processing Specs or <span className="gold-gradient-text">Request Samples</span>
            </h2>
            <p className="text-white/80 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
              Contact our operations desk at Pologround Industrial Estate, Indore for batch technical sheets and sample dispatches.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary text-base group">
                <span>Submit Processing Inquiry</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Link>
              <a
                href="https://wa.me/918839966253?text=Hi%2C%20I%27d%20like%20to%20learn%20more%20about%20your%20processing%20standards%20and%20request%20a%20sample."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full border-2 border-white/20 text-white font-semibold hover:bg-white/10 transition-all duration-300 text-base"
              >
                <span>WhatsApp Operations Desk</span>
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
