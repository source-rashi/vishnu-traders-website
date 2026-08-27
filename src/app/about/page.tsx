import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Vishnu Traders — a global agricultural commodities and spice exporter based in Indore, MP. Sourcing, roasting, sorting, packaging and warehousing under one roof since 1996.",
};

const milestones = [
  {
    year: "1996",
    title: "Founded",
    description:
      "Vishnu Traders was established in Indore, Madhya Pradesh, with a vision to connect India's finest agricultural produce with global markets.",
  },
  {
    year: "2000",
    title: "First Export Order",
    description:
      "Secured our first international shipment, exporting whole spices to buyers in the Middle East — the beginning of our global trading network.",
  },
  {
    year: "2005",
    title: "In-House Processing",
    description:
      "Invested in dedicated processing infrastructure at Pologround Industrial Estate — roasting, sorting, and grading equipment brought fully in-house.",
  },
  {
    year: "2010",
    title: "Warehousing Expansion",
    description:
      "Expanded the Pologround facility with climate-appropriate warehousing, enabling bulk stock management and FIFO dispatch for export orders.",
  },
  {
    year: "2016",
    title: "Pan-India Network",
    description:
      "Built direct farmer-procurement relationships across Madhya Pradesh, Rajasthan, and Maharashtra — securing quality at origin.",
  },
  {
    year: "2024",
    title: "Digital & Global Reach",
    description:
      "Launched our digital presence and expanded to serve buyers across 20+ countries, with a full in-house processing-to-packaging-to-export pipeline.",
  },
];

const values = [
  {
    title: "Quality at Origin",
    description:
      "We source directly from farms and mandis, inspecting at intake — not after the fact. Quality starts before processing, not at the warehouse door.",
    icon: "🌿",
  },
  {
    title: "Transparent Trade",
    description:
      "Honest weights, transparent pricing, and straightforward documentation. We operate the way we'd want our own suppliers to operate with us.",
    icon: "⚖️",
  },
  {
    title: "End-to-End Control",
    description:
      "From raw material procurement through roasting, sorting, packaging, and export dispatch — everything happens under our roof, so quality never leaves our hands.",
    icon: "🏭",
  },
  {
    title: "Long-Term Partnerships",
    description:
      "We don't chase one-time transactions. Our buyers return year after year because consistent quality and reliable delivery build real business relationships.",
    icon: "🤝",
  },
];

const team = [
  {
    name: "Harsh Agrawal",
    role: "Proprietor & Head of Operations",
    initials: "HA",
    bio: "Leading Vishnu Traders with a hands-on approach to quality control, buyer relationships, and export compliance.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-gradient-to-br from-[#1F4A3D] via-[#1a3f34] to-[#0A1B15] overflow-hidden">
        <div className="absolute top-20 right-[10%] w-[400px] h-[400px] rounded-full bg-[#B8934A]/5 blur-3xl" />
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="gold-divider" />
            <span className="text-[#B8934A] text-sm font-semibold uppercase tracking-[0.15em]">About Us</span>
          </div>
          <h1
            className="text-4xl lg:text-6xl font-bold text-white mb-6"
            style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}
          >
            Our Story of <span className="gold-gradient-text">Trust</span>
          </h1>
          <p className="text-white/60 text-lg max-w-2xl leading-relaxed">
            From a focused trading firm in Indore to a global spice and agri-commodity exporter —
            discover the journey that has defined Vishnu Traders since 1996.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="section-heading text-3xl lg:text-4xl mb-6">
                Three Decades of Global Trade
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed mb-6">
                Vishnu Traders was founded in 1996 in Indore, Madhya Pradesh — a city at
                the heart of India's agri-commodity belt. Our founding mission was simple:
                bring the finest Indian spices and agricultural produce to global buyers,
                with full transparency and uncompromising quality.
              </p>
              <p className="text-gray-500 leading-relaxed mb-6">
                What began as a trading operation has grown into a fully integrated
                agri-export business. Today, our Pologround Industrial Estate facility
                handles everything in-house: procurement, pre-cleaning, roasting, sortex
                grading, packaging in consumer-to-bulk formats, and export logistics.
              </p>
              <p className="text-gray-500 leading-relaxed">
                We serve importers, distributors, and food manufacturers across 20+ countries.
                But our operating philosophy hasn't changed: every bag that leaves our facility
                has been handled with the same care we'd expect for our own table.
              </p>
            </div>
            <div className="rounded-3xl bg-gradient-to-br from-[#F5F0E8] to-[#EAF3F0] p-10 lg:p-14">
              <div className="grid grid-cols-2 gap-6">
                {[
                  { value: "1996", label: "Year Founded" },
                  { value: "20+", label: "Export Countries" },
                  { value: "500+", label: "Tonnes / Year" },
                  { value: "100%", label: "In-House Processing" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div
                      className="text-3xl lg:text-4xl font-bold text-[#1F4A3D] mb-1"
                      style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}
                    >
                      {stat.value}
                    </div>
                    <div className="text-xs font-medium text-gray-400 uppercase tracking-wider">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 lg:py-32 bg-[#F5F0E8]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="gold-divider" />
            </div>
            <h2 className="section-heading text-3xl lg:text-4xl mb-4">
              Our Core Values
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg">
              The principles that guide every procurement decision, every processing step, and every export shipment.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="glass-card rounded-2xl p-7 text-center">
                <span className="text-4xl mb-4 block">{v.icon}</span>
                <h3
                  className="text-lg font-bold text-[#1F4A3D] mb-2"
                  style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}
                >
                  {v.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="gold-divider" />
            </div>
            <h2 className="section-heading text-3xl lg:text-4xl mb-4">
              Meet the Team
            </h2>
          </div>
          <div className="flex justify-center">
            {team.map((member) => (
              <div key={member.name} className="glass-card rounded-2xl p-8 text-center max-w-sm w-full">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#B8934A] to-[#C2A159] flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  {member.initials}
                </div>
                <h3
                  className="text-xl font-bold text-[#1F4A3D] mb-1"
                  style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}
                >
                  {member.name}
                </h3>
                <p className="text-sm text-[#B8934A] font-semibold uppercase tracking-wider mb-3">
                  {member.role}
                </p>
                <p className="text-sm text-gray-500 leading-relaxed">{member.bio}</p>
                <a
                  href="tel:+918839966253"
                  className="inline-flex items-center gap-2 mt-4 text-sm text-[#1F4A3D] font-medium hover:text-[#B8934A] transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                  </svg>
                  +91 88399 66253
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 lg:py-32 bg-[#F5F0E8]">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="gold-divider" />
            </div>
            <h2 className="section-heading text-3xl lg:text-4xl mb-4">
              Our Journey
            </h2>
          </div>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-6 lg:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#B8934A] via-[#1F4A3D] to-[#B8934A] lg:-translate-x-0.5" />

            <div className="space-y-12">
              {milestones.map((m, i) => (
                <div
                  key={m.year}
                  className={`relative flex items-start gap-8 ${
                    i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-6 lg:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#B8934A] border-4 border-white z-10 shadow-md" />

                  {/* Card */}
                  <div className={`ml-16 lg:ml-0 lg:w-[45%] ${i % 2 === 0 ? "lg:pr-12" : "lg:pl-12"}`}>
                    <div className="glass-card rounded-xl p-6">
                      <span className="text-sm font-bold text-[#B8934A]">{m.year}</span>
                      <h3
                        className="text-lg font-bold text-[#1F4A3D] mt-1 mb-2"
                        style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}
                      >
                        {m.title}
                      </h3>
                      <p className="text-sm text-gray-500 leading-relaxed">{m.description}</p>
                    </div>
                  </div>

                  {/* Spacer for alternating */}
                  <div className="hidden lg:block lg:w-[45%]" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 bg-[#1F4A3D]">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h2
            className="text-3xl lg:text-5xl font-bold text-white mb-6"
            style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}
          >
            Let&apos;s Build a <span className="gold-gradient-text">Partnership</span>
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto mb-10">
            Whether you are an international importer looking for a reliable Indian spice supplier,
            or a domestic brand seeking private-label processing — we&apos;d love to work with you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary text-base">
              Contact Us Today
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </Link>
            <Link href="/processing" className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full border-2 border-white/20 text-white font-semibold hover:bg-white/10 transition-all duration-300 text-base">
              See Our Process
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
