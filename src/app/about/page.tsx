import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "../components/ScrollReveal";
import ImageLightbox from "../components/ImageLightbox";
import TestimonialsCarousel from "../components/TestimonialsCarousel";
import MediaWithFallback from "../components/MediaWithFallback";

export const metadata: Metadata = {
  title: "About Us — Three Decades of Spice Export",
  description:
    "Learn about Vishnu Traders — a global agricultural commodities and spice exporter based in Indore, MP since 1996. Sourcing, roasting, sortex cleaning, and warehousing under one roof.",
};

const milestones = [
  {
    year: "1996",
    title: "Founded in Indore",
    description:
      "Vishnu Traders was established in Indore, Madhya Pradesh, connecting Malwa's rich agricultural produce with domestic and overseas markets.",
  },
  {
    year: "2000",
    title: "First Container Export to GCC",
    description:
      "Secured our first direct international shipment of Whole Spices to Dubai, establishing our core Middle East trade corridor.",
  },
  {
    year: "2005",
    title: "Pologround Processing Facility",
    description:
      "Brought sorting, destoning, and precision drum roasting fully in-house at Pologround Industrial Estate, eliminating third-party quality variance.",
  },
  {
    year: "2012",
    title: "Optical Sortex & Lab Modernization",
    description:
      "Installed high-speed color sorters and established our in-house testing lab for volatile oil, moisture, and purity parameters.",
  },
  {
    year: "2018",
    title: "Packaging & Private Labelling",
    description:
      "Expanded clean-room packaging lines from 100g consumer nitrogen barrier pouches up to 50kg export HDPE & multi-wall sacks.",
  },
  {
    year: "Present",
    title: "Global Supply to 20+ Countries",
    description:
      "Exporting containerized consignments via Nhava Sheva (JNPT) and Mundra with instant digital QR verification on all trade certificates.",
  },
];

const values = [
  {
    title: "Quality at Origin",
    description:
      "We source directly from farm mandis across MP and Rajasthan. Quality is inspected at intake, not after processing.",
    icon: "🌿",
  },
  {
    title: "Transparent Trade",
    description:
      "Digital weighbridges, honest grading, and comprehensive COA lab certificates for every consignment.",
    icon: "⚖️",
  },
  {
    title: "End-to-End Custody",
    description:
      "From raw crop intake to roasting, packaging, and port dispatch — everything remains under our direct control.",
    icon: "🏭",
  },
  {
    title: "Long-Term Partnerships",
    description:
      "Serving recurring importers and food manufacturers across the GCC, Southeast Asia, Europe, and North America.",
    icon: "🤝",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden text-white">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(184,147,74,0.25),transparent_38%)]" />
          <div className="absolute inset-0 bg-gradient-to-br from-[#1F4A3D] via-[#173C33] to-[#0A1B15] opacity-90" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.72)_0%,rgba(0,0,0,0.35)_35%,rgba(0,0,0,0.12)_100%)]" />
          <div className="absolute inset-0 opacity-30">
            <MediaWithFallback
              src="/images/about/about-bg.jpg"
              alt="Vishnu Traders facility and spice processing"
              fill
              className="object-cover"
              fallbackIcon="✦"
              fallbackGradient="from-[#1F4A3D] via-[#3F7C67] to-[#B8934A]"
            />
          </div>
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="gold-divider" />
            <span className="text-[#B8934A] text-sm font-semibold uppercase tracking-[0.15em]">
              About Vishnu Traders
            </span>
          </div>
          <h1
            className="text-4xl lg:text-6xl font-bold mb-6"
            style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}
          >
            A Legacy Built on <span className="gold-gradient-text">Trust & Quality</span>
          </h1>
          <p className="text-white/70 text-lg max-w-2xl leading-relaxed">
            From our founding in 1996 to becoming a premier spice and agricultural commodity exporter in Indore, explore the journey that defines Vishnu Traders.
          </p>
        </div>
      </section>

      {/* Story & Philosophy */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7">
              <ScrollReveal animation="fade-up">
                <h2 className="section-heading text-3xl lg:text-4xl mb-6">
                  Three Decades of Agricultural Export Excellence
                </h2>
                <p className="text-gray-600 text-base lg:text-lg leading-relaxed mb-6">
                  Vishnu Traders was founded in 1996 in Indore, Madhya Pradesh — at the heart of India&apos;s most fertile spice and oilseed growing belt. Our guiding philosophy was simple: connect India&apos;s finest agricultural produce directly to global importers with uncompromising quality and absolute transparency.
                </p>
                <p className="text-gray-600 text-base leading-relaxed mb-6">
                  Over three decades, we invested heavily in our own infrastructure. Today, our facility at R-20 Pologround Industrial Estate is fully integrated — handling farm-gate intake, optical Sortex cleaning, precision drum roasting, batch laboratory analysis, barrier packaging, and export container stuffing.
                </p>
                <p className="text-gray-600 text-base leading-relaxed">
                  Led by Harsh Agrawal, we operate with a hands-on approach to every consignment, ensuring your spice and commodity shipments meet international specifications every single time.
                </p>
              </ScrollReveal>
            </div>

            <div className="lg:col-span-5">
              <ScrollReveal animation="scale-up" delay={150}>
                <div className="rounded-3xl bg-gradient-to-br from-[#FAF3E7] to-[#F5F0E8] p-8 lg:p-10 border border-[#B8934A]/30 shadow-xl space-y-6">
                  <div className="grid grid-cols-2 gap-6 text-center">
                    <div className="p-4 rounded-2xl bg-white shadow-sm">
                      <span className="text-3xl font-bold text-[#1F4A3D] block" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
                        1996
                      </span>
                      <span className="text-[10px] uppercase font-bold text-gray-500 mt-1 block">
                        Founded in Indore
                      </span>
                    </div>
                    <div className="p-4 rounded-2xl bg-white shadow-sm">
                      <span className="text-3xl font-bold text-[#1F4A3D] block" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
                        20+
                      </span>
                      <span className="text-[10px] uppercase font-bold text-gray-500 mt-1 block">
                        Countries Served
                      </span>
                    </div>
                    <div className="p-4 rounded-2xl bg-white shadow-sm">
                      <span className="text-3xl font-bold text-[#1F4A3D] block" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
                        99.5%+
                      </span>
                      <span className="text-[10px] uppercase font-bold text-gray-500 mt-1 block">
                        Sortex Purity
                      </span>
                    </div>
                    <div className="p-4 rounded-2xl bg-white shadow-sm">
                      <span className="text-3xl font-bold text-[#1F4A3D] block" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
                        100%
                      </span>
                      <span className="text-[10px] uppercase font-bold text-gray-500 mt-1 block">
                        In-House Control
                      </span>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#1F4A3D] text-white text-center space-y-1">
                    <span className="text-xs font-bold text-[#D4B56A] uppercase tracking-wider block">
                      Operations Leadership
                    </span>
                    <h4 className="text-lg font-bold">Harsh Agrawal</h4>
                    <p className="text-xs text-white/70">Proprietor & Head of Export Operations</p>
                    <a
                      href="tel:+918839966253"
                      className="text-xs text-[#D4B56A] hover:underline inline-block mt-1"
                    >
                      +91 88399 66253
                    </a>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 lg:py-32 bg-[#F5F0E8]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal animation="fade-up">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="gold-divider" />
              </div>
              <h2 className="section-heading text-3xl lg:text-4xl mb-4">
                Our Operational Values
              </h2>
              <p className="text-gray-600 text-lg">
                The principles that govern every farm intake, sortex cleaning cycle, and container stuffing.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, idx) => (
              <ScrollReveal key={v.title} animation="fade-up" delay={idx * 100}>
                <div className="glass-card rounded-2xl p-7 text-center h-full hover:-translate-y-1.5 transition-all duration-300">
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

      {/* Facility & Equipment Lightbox Gallery */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal animation="fade-up">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="gold-divider" />
                <span className="text-[#B8934A] text-sm font-semibold uppercase tracking-[0.15em]">
                  Facility Showcase
                </span>
              </div>
              <h2 className="section-heading text-3xl lg:text-4xl mb-4">
                Inside Our Pologround Processing Facility
              </h2>
              <p className="text-gray-600 text-lg">
                Explore our Sortex color sorters, roasting drums, testing lab, and clean-room packaging infrastructure.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={150}>
            <ImageLightbox />
          </ScrollReveal>
        </div>
      </section>

      {/* Milestones Timeline */}
      <section className="py-24 lg:py-32 bg-[#F5F0E8]">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <ScrollReveal animation="fade-up">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="gold-divider" />
              </div>
              <h2 className="section-heading text-3xl lg:text-4xl mb-4">
                Our 30-Year Journey
              </h2>
              <p className="text-gray-600 text-lg">
                Key milestones in Vishnu Traders&apos; evolution into a trusted global spice brand.
              </p>
            </div>
          </ScrollReveal>

          <div className="space-y-6">
            {milestones.map((m, idx) => (
              <ScrollReveal key={m.year} animation="fade-up" delay={idx * 80}>
                <div className="glass-card rounded-2xl p-6 sm:p-8 bg-white flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 hover:border-[#B8934A]/50 transition-all">
                  <div className="shrink-0 text-center sm:text-left">
                    <span
                      className="text-2xl sm:text-3xl font-bold text-[#B8934A]"
                      style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}
                    >
                      {m.year}
                    </span>
                  </div>
                  <div className="border-t sm:border-t-0 sm:border-l border-gray-200 pt-3 sm:pt-0 sm:pl-6">
                    <h3
                      className="text-lg font-bold text-[#1F4A3D] mb-1"
                      style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}
                    >
                      {m.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                      {m.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Carousel Section */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal animation="fade-up">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="gold-divider" />
                <span className="text-[#B8934A] text-sm font-semibold uppercase tracking-[0.15em]">
                  Global Client Trust
                </span>
              </div>
              <h2 className="section-heading text-3xl lg:text-4xl mb-4">
                What International Buyers Say
              </h2>
              <p className="text-gray-600 text-lg">
                Direct feedback from spice importers, food processors, and distributors across UAE, Malaysia, Netherlands, and USA.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={150}>
            <TestimonialsCarousel />
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 bg-[#1F4A3D] text-white text-center">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <ScrollReveal animation="fade-up">
            <h2
              className="text-3xl lg:text-5xl font-bold mb-6"
              style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}
            >
              Partner with Vishnu Traders
            </h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
              Connect with Harsh Agrawal to discuss your spice or agri-commodity requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary text-base">
                Contact Our Export Desk
              </Link>
              <Link
                href="/products"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full border-2 border-white/20 text-white font-semibold hover:bg-white/10 transition-all duration-300 text-base"
              >
                Browse Product Range
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
