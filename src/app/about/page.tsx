import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Vishnu Traders — over 35 years of trusted wholesale and retail trading in premium commodities.",
};

const milestones = [
  { year: "1990", title: "Founded", description: "Vishnu Traders was established as a small family-run provision store." },
  { year: "1998", title: "Wholesale Expansion", description: "Expanded into wholesale trading, serving restaurants and grocery stores." },
  { year: "2005", title: "Product Diversification", description: "Added spices, oils, dry fruits, and jaggery to our product catalogue." },
  { year: "2012", title: "Citywide Delivery", description: "Launched our own delivery fleet for fast and reliable distribution." },
  { year: "2018", title: "Multi-City Reach", description: "Expanded operations to serve 10+ cities across Andhra Pradesh." },
  { year: "2024", title: "Digital Presence", description: "Went digital with online ordering and a modern customer experience." },
];

const values = [
  {
    title: "Integrity",
    description: "Transparent pricing, honest weights, and ethical sourcing are the cornerstones of everything we do.",
    icon: "⚖️",
  },
  {
    title: "Quality",
    description: "We never compromise. Every product is inspected, tested, and verified before it reaches our customers.",
    icon: "🏆",
  },
  {
    title: "Community",
    description: "We believe in giving back. From supporting local farmers to community events, we are deeply rooted in the people we serve.",
    icon: "🤝",
  },
  {
    title: "Innovation",
    description: "From traditional trading to digital platforms, we continuously evolve to serve you better.",
    icon: "💡",
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
            From a humble family shop to a trusted trading name across India — discover the journey
            that has defined Vishnu Traders for over three decades.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="section-heading text-3xl lg:text-4xl mb-6">
                Three Decades of Excellence
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed mb-6">
                Vishnu Traders was founded in 1990 by a family with a simple but powerful
                vision — to bring the finest quality commodities to every household and
                business at fair, transparent prices.
              </p>
              <p className="text-gray-500 leading-relaxed mb-6">
                What started as a small provision store has grown into one of the most
                respected wholesale and retail trading establishments in the region. Our
                success is built on relationships — with the farmers who grow the produce,
                the mills that process it, and the customers who trust us to deliver
                nothing but the best.
              </p>
              <p className="text-gray-500 leading-relaxed">
                Today, we serve thousands of customers across 15+ cities, offering over
                200 products ranging from premium grains and spices to oils, dry fruits,
                and more. But our core values remain unchanged — quality, integrity, and
                an unwavering commitment to customer satisfaction.
              </p>
            </div>
            <div className="rounded-3xl bg-gradient-to-br from-[#F5F0E8] to-[#EAF3F0] p-10 lg:p-14">
              <div className="grid grid-cols-2 gap-6">
                {[
                  { value: "1990", label: "Year Founded" },
                  { value: "200+", label: "Products" },
                  { value: "5000+", label: "Happy Clients" },
                  { value: "15+", label: "Cities Served" },
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
              The principles that guide every transaction, every relationship, and every decision.
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

      {/* Timeline */}
      <section className="py-24 lg:py-32 bg-white">
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
            Whether you are a business looking for a reliable supplier or a family seeking
            premium products, we would love to serve you.
          </p>
          <Link href="/contact" className="btn-primary text-base">
            Contact Us Today
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
