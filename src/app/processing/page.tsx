import type { Metadata } from "next";
import Link from "next/link";
import InteractiveProcessingFlow from "../components/InteractiveProcessingFlow";
import ScrollReveal from "../components/ScrollReveal";
import MediaWithFallback from "../components/MediaWithFallback";

export const metadata: Metadata = {
  title: "In-House Warehousing & Processing Flow",
  description:
    "Interactive 7-stage processing journey at Vishnu Traders' Pologround Industrial Estate facility in Indore. Farm-direct sourcing, Sortex optical cleaning, precision drum roasting, batch QC, and container export logistics.",
};

const compliancePillars = [
  {
    title: "Hygienic Environment",
    desc: "Dust extraction systems, epoxy flooring, clean-room packaging zones, and mandatory personnel food-handling hygiene.",
    icon: "🧼",
  },
  {
    title: "Moisture & Fumigation Control",
    desc: "Strict moisture testing below 10-12% baseline to prevent aflatoxin development, paired with compliant phytosanitary treatments.",
    icon: "💧",
  },
  {
    title: "Traceability & Lot Coding",
    desc: "Every pallet and carton receives clear lot tracking metadata, linking finished goods back to origin farm batches.",
    icon: "🏷️",
  },
  {
    title: "Export Document Readiness",
    desc: "Fast turnaround for Certificate of Origin, Phytosanitary Certificate, Bill of Lading, and Custom Packing Lists.",
    icon: "📜",
  },
];

export default function ProcessingPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden text-white">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#1F4A3D] via-[#183D32] to-[#0A1B15] opacity-90" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.70)_0%,rgba(0,0,0,0.28)_40%,rgba(0,0,0,0.12)_100%)]" />
          <div className="absolute inset-0 opacity-30">
            <MediaWithFallback
              src="/images/process/process-hero.jpg"
              alt="Processing and warehousing at Vishnu Traders"
              fill
              className="object-cover"
              fallbackIcon="⚙️"
              fallbackGradient="from-[#1F4A3D] via-[#3F7C67] to-[#B8934A]"
            />
          </div>
        </div>
        <div className="absolute top-20 right-[10%] w-[500px] h-[500px] rounded-full bg-[#B8934A]/10 blur-3xl" />
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="gold-divider" />
            <span className="text-[#B8934A] text-sm font-semibold uppercase tracking-[0.15em]">
              Infrastructure & Operations
            </span>
          </div>
          <h1
            className="text-4xl lg:text-6xl font-bold leading-tight mb-6"
            style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}
          >
            In-House Warehousing & <span className="gold-gradient-text">Processing</span>
          </h1>
          <p className="text-white/70 text-lg max-w-3xl leading-relaxed">
            Our core differentiator: complete end-to-end custody of agricultural commodities and spices.
            From farm intake and Sortex cleaning to precision drum roasting, packaging, and container dispatch —
            all operated inside our Pologround Industrial Estate facility in Indore.
          </p>
        </div>
      </section>

      {/* Overview Stat Strip */}
      <section className="bg-[#FAF3E7] border-b border-[#B8934A]/20 py-8">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <p className="text-2xl lg:text-3xl font-bold text-[#1F4A3D]" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
                100%
              </p>
              <p className="text-xs uppercase tracking-wider text-gray-600 mt-1">In-House Controlled</p>
            </div>
            <div>
              <p className="text-2xl lg:text-3xl font-bold text-[#1F4A3D]" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
                99.5%+
              </p>
              <p className="text-xs uppercase tracking-wider text-gray-600 mt-1">Sortex Purity Standard</p>
            </div>
            <div>
              <p className="text-2xl lg:text-3xl font-bold text-[#1F4A3D]" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
                100g – 50kg
              </p>
              <p className="text-xs uppercase tracking-wider text-gray-600 mt-1">Packaging Range</p>
            </div>
            <div>
              <p className="text-2xl lg:text-3xl font-bold text-[#1F4A3D]" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
                Pologround, Indore
              </p>
              <p className="text-xs uppercase tracking-wider text-gray-600 mt-1">Central Logistics Hub</p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive 7-Step Step-by-Step Visual Flow */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal animation="fade-up">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="gold-divider" />
                <span className="text-[#B8934A] text-sm font-semibold uppercase tracking-[0.15em]">
                  Interactive Workflow
                </span>
              </div>
              <h2 className="section-heading text-3xl lg:text-4xl mb-4">
                Our 7-Stage Processing & Quality Pipeline
              </h2>
              <p className="text-gray-500 text-lg">
                Click on any processing stage to inspect technical parameters, equipment, and quality control protocols.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={150}>
            <InteractiveProcessingFlow />
          </ScrollReveal>
        </div>
      </section>

      {/* Quality & Compliance Section */}
      <section className="py-24 lg:py-32 bg-[#F5F0E8]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal animation="fade-up">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="gold-divider" />
              </div>
              <h2 className="section-heading text-3xl lg:text-4xl mb-4">
                Quality Assurance & Compliance
              </h2>
              <p className="text-gray-600 text-lg">
                Food safety and international trade compliance are built directly into our day-to-day operations.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {compliancePillars.map((item, idx) => (
              <ScrollReveal key={item.title} animation="fade-up" delay={idx * 100}>
                <div className="glass-card rounded-2xl p-8 text-left bg-white h-full hover:-translate-y-1 transition-all duration-300">
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
              </ScrollReveal>
            ))}
          </div>

          {/* Buyer-Specific Customization Notice */}
          <ScrollReveal animation="scale-up" delay={300}>
            <div className="mt-12 p-6 rounded-2xl bg-white/80 border border-[#B8934A]/30 text-center max-w-2xl mx-auto shadow-sm">
              <p className="text-xs text-gray-600 leading-relaxed">
                <span className="font-semibold text-[#1F4A3D]">Buyer-specific requirements:</span> We accommodate custom testing certificates (SGS, Intertek, Geo-Chem), specialized fumigation standards, and country-specific labelling upon request.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 bg-[#1F4A3D] text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#3F7C67]/20 via-transparent to-transparent pointer-events-none" />
        <div className="mx-auto max-w-4xl px-6 lg:px-8 relative z-10">
          <ScrollReveal animation="fade-up">
            <h2
              className="text-3xl lg:text-5xl font-bold mb-6"
              style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}
            >
              Schedule a Facility Visit or <span className="gold-gradient-text">Request Quote</span>
            </h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
              Interested in private labelling or contract processing? Contact our export operations desk at Pologround Industrial Estate, Indore.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary text-base group">
                <span>Submit Processing Inquiry</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Link>
              <Link
                href="/certifications"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full border-2 border-white/20 text-white font-semibold hover:bg-white/10 transition-all duration-300 text-base"
              >
                View Certifications & QR
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
