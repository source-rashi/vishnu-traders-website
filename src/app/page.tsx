import Image from "next/image";
import Link from "next/link";

/* ────────────────────────────── DATA ────────────────────────────── */

const stats = [
  { value: "35+", label: "Years of Trust" },
  { value: "5000+", label: "Happy Clients" },
  { value: "200+", label: "Products" },
  { value: "15+", label: "Cities Served" },
];

const products = [
  {
    title: "Grains & Cereals",
    description:
      "Premium basmati rice, wheat flour, semolina, and a wide variety of grains sourced from the finest farms.",
    icon: "🌾",
    gradient: "from-amber-50 to-yellow-50",
  },
  {
    title: "Spices & Seasonings",
    description:
      "Authentic Indian spices — turmeric, red chili, cumin, coriander, and custom blends for every palate.",
    icon: "🌶️",
    gradient: "from-red-50 to-orange-50",
  },
  {
    title: "Pulses & Lentils",
    description:
      "Top-grade toor dal, moong dal, chana dal, and a full range of lentils for wholesale and retail.",
    icon: "🫘",
    gradient: "from-green-50 to-emerald-50",
  },
  {
    title: "Oils & Ghee",
    description:
      "Cold-pressed oils, refined cooking oils, and pure ghee — quality assured for families and restaurants.",
    icon: "🫒",
    gradient: "from-lime-50 to-green-50",
  },
  {
    title: "Sugar & Jaggery",
    description:
      "Refined sugar, organic jaggery, and natural sweeteners sourced from trusted mills across India.",
    icon: "🍯",
    gradient: "from-yellow-50 to-amber-50",
  },
  {
    title: "Dry Fruits & Nuts",
    description:
      "Premium almonds, cashews, raisins, and seasonal dry fruits at competitive wholesale prices.",
    icon: "🥜",
    gradient: "from-orange-50 to-amber-50",
  },
];

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "Restaurant Owner, Vizag",
    text: "Vishnu Traders has been our go-to supplier for over 10 years. Their quality is unmatched and delivery is always on time.",
    stars: 5,
  },
  {
    name: "Priya Sharma",
    role: "Grocery Store Owner",
    text: "The best wholesale prices in the market. Their spices and grains are always fresh, and the customer service is exceptional.",
    stars: 5,
  },
  {
    name: "Mohammed Farhan",
    role: "Catering Business",
    text: "We rely on Vishnu Traders for our bulk orders. Consistent quality across all products, every single time.",
    stars: 5,
  },
];

const whyUs = [
  {
    title: "Premium Quality",
    description: "Every product passes our rigorous quality checks. We source only from certified and trusted suppliers.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.745 3.745 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
      </svg>
    ),
  },
  {
    title: "Best Prices",
    description: "Competitive wholesale rates with transparent pricing. No hidden costs, no surprises — just honest business.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
    ),
  },
  {
    title: "Fast Delivery",
    description: "Efficient logistics with same-day dispatch and reliable delivery across the city and beyond.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
      </svg>
    ),
  },
  {
    title: "Trusted Legacy",
    description: "Over three decades of honest trading. A name that families and businesses trust, generation after generation.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M18.75 4.236c.982.143 1.954.317 2.916.52A6.003 6.003 0 0 1 16.27 9.728M18.75 4.236V4.5c0 2.108-.966 3.99-2.48 5.228m0 0a6.023 6.023 0 0 1-2.77.704 6.023 6.023 0 0 1-2.77-.704" />
      </svg>
    ),
  },
];

/* ─────────────────────────── COMPONENT ──────────────────────────── */

export default function Home() {
  return (
    <>
      {/* ═══════ HERO ═══════ */}
      <section className="relative min-h-[100vh] flex items-center overflow-hidden">
        {/* Background with gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1F4A3D] via-[#1a3f34] to-[#0A1B15]" />
        {/* Decorative circles */}
        <div className="absolute top-20 right-[10%] w-[500px] h-[500px] rounded-full bg-[#B8934A]/5 blur-3xl" />
        <div className="absolute bottom-10 left-[5%] w-[400px] h-[400px] rounded-full bg-[#B8934A]/5 blur-3xl" />
        {/* Pattern overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-32 lg:py-40">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Text */}
            <div className="animate-fade-in-up">
              <div className="flex items-center gap-3 mb-8">
                <div className="gold-divider" />
                <span className="text-[#B8934A] text-sm font-semibold uppercase tracking-[0.15em]">
                  Since 1990
                </span>
              </div>
              <h1
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] mb-6"
                style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}
              >
                Your Trusted{" "}
                <span className="gold-gradient-text">Trading</span>{" "}
                Partner
              </h1>
              <p className="text-lg lg:text-xl text-white/60 max-w-lg leading-relaxed mb-10">
                Premium quality commodities, wholesale and retail, delivered
                with the trust and reliability that has defined Vishnu Traders
                for over three decades.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/products" className="btn-primary text-base">
                  Explore Products
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
                <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full border-2 border-white/20 text-white font-semibold hover:bg-white/10 transition-all duration-300">
                  Contact Us
                </Link>
              </div>
            </div>

            {/* Brand logo */}
            <div className="animate-fade-in-up delay-200">
              <div className="relative mx-auto max-w-[560px] rounded-3xl border border-white/15 bg-gradient-to-br from-white/15 via-white/10 to-white/5 p-7 backdrop-blur-xl shadow-[0_28px_60px_-20px_rgba(0,0,0,0.55)]">
                <div className="absolute right-8 top-6 h-24 w-24 rounded-full bg-[#B8934A]/15 blur-2xl" />
                <div className="absolute left-10 bottom-8 h-20 w-20 rounded-full bg-[#3F7C67]/25 blur-xl" />
                <div className="relative flex flex-col items-center justify-center">
                  <div className="relative h-44 w-full max-w-[360px]">
                    <Image
                      src="/logo-best.png"
                      alt="Vishnu Traders logo"
                      fill
                      sizes="(max-width: 1024px) 80vw, 360px"
                      className="object-contain drop-shadow-[0_12px_20px_rgba(0,0,0,0.35)]"
                      priority
                    />
                  </div>
                  <p className="mt-3 text-center text-sm font-semibold uppercase tracking-[0.28em] text-[#D9B97B]">
                    Trusted Global Trading Network
                  </p>
                </div>
              </div>
            </div>

            {/* Stats card */}
            <div className="animate-fade-in-up delay-300">
              <div className="glass-card rounded-3xl p-8 lg:p-10 bg-white/10 !border-white/10 !backdrop-blur-2xl">
                <div className="grid grid-cols-2 gap-6">
                  {stats.map((stat, i) => (
                    <div
                      key={stat.label}
                      className="text-center p-4 rounded-2xl bg-white/5 border border-white/5"
                    >
                      <div
                        className="text-3xl lg:text-4xl font-bold gold-gradient-text mb-1"
                        style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}
                      >
                        {stat.value}
                      </div>
                      <div className="text-xs font-medium text-white/50 uppercase tracking-wider">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-8 pt-6 border-t border-white/10 flex items-center gap-4">
                  <div className="flex -space-x-2">
                    {[0, 1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="w-9 h-9 rounded-full border-2 border-[#1F4A3D] flex items-center justify-center text-xs font-bold"
                        style={{
                          background: [
                            "linear-gradient(135deg, #B8934A, #C2A159)",
                            "linear-gradient(135deg, #1F4A3D, #3F7C67)",
                            "linear-gradient(135deg, #C2A159, #D4B56A)",
                            "linear-gradient(135deg, #3F7C67, #6FA890)",
                          ][i],
                          color: "#fff",
                        }}
                      >
                        {["RK", "PS", "MF", "AV"][i]}
                      </div>
                    ))}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white/80">
                      Trusted by thousands
                    </p>
                    <div className="flex gap-0.5 mt-0.5">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-3.5 h-3.5 text-[#B8934A]" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <div className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-1.5">
            <div className="w-1 h-2.5 bg-[#B8934A] rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* ═══════ WHY CHOOSE US ═══════ */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="gold-divider" />
            </div>
            <h2 className="section-heading text-3xl lg:text-4xl mb-4">
              Why Choose Vishnu Traders
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg">
              For over 35 years, we have been the cornerstone of trust and
              quality in the trading industry.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyUs.map((item, i) => (
              <div
                key={item.title}
                className="glass-card rounded-2xl p-7 text-center group"
              >
                <div className="mx-auto mb-5 w-14 h-14 rounded-2xl bg-gradient-to-br from-[#EAF3F0] to-[#CBE0D8] flex items-center justify-center text-[#1F4A3D] transition-all duration-300 group-hover:from-[#1F4A3D] group-hover:to-[#3F7C67] group-hover:text-[#B8934A] group-hover:scale-110">
                  {item.icon}
                </div>
                <h3
                  className="text-lg font-bold text-[#1F4A3D] mb-2"
                  style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}
                >
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ PRODUCTS PREVIEW ═══════ */}
      <section className="py-24 lg:py-32 bg-[#F5F0E8]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="gold-divider" />
                <span className="text-[#B8934A] text-sm font-semibold uppercase tracking-[0.15em]">
                  Our Range
                </span>
              </div>
              <h2 className="section-heading text-3xl lg:text-4xl mb-3">
                Premium Products
              </h2>
              <p className="text-gray-500 max-w-lg text-lg">
                Handpicked commodities from the finest sources, delivered fresh
                to your doorstep.
              </p>
            </div>
            <Link
              href="/products"
              className="btn-secondary mt-6 lg:mt-0 self-start"
            >
              View All Products
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, i) => (
              <div
                key={product.title}
                className="glass-card rounded-2xl overflow-hidden group"
              >
                <div
                  className={`h-40 bg-gradient-to-br ${product.gradient} flex items-center justify-center transition-transform duration-500 group-hover:scale-105`}
                >
                  <span className="text-5xl group-hover:scale-125 transition-transform duration-500">
                    {product.icon}
                  </span>
                </div>
                <div className="p-6">
                  <h3
                    className="text-xl font-bold text-[#1F4A3D] mb-2"
                    style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}
                  >
                    {product.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {product.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ ABOUT PREVIEW ═══════ */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="gold-divider" />
                <span className="text-[#B8934A] text-sm font-semibold uppercase tracking-[0.15em]">
                  Our Story
                </span>
              </div>
              <h2 className="section-heading text-3xl lg:text-4xl mb-6">
                A Legacy Built on Trust & Quality
              </h2>
              <p className="text-gray-500 leading-relaxed mb-6 text-lg">
                Founded in 1990, Vishnu Traders began as a small family-owned
                shop with a simple mission — to provide the highest quality
                commodities at fair prices. Today, we are one of the most
                respected names in the wholesale and retail trading industry.
              </p>
              <p className="text-gray-500 leading-relaxed mb-8">
                Our commitment to quality, transparency, and customer
                satisfaction has earned us the loyalty of thousands of
                businesses and families over three decades.
              </p>
              <Link href="/about" className="btn-primary">
                Learn More About Us
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>

            {/* Right — visual block */}
            <div className="relative">
              <div className="rounded-3xl overflow-hidden bg-gradient-to-br from-[#1F4A3D] to-[#3F7C67] p-10 lg:p-14 text-white">
                <div className="text-6xl mb-6" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
                  <span className="gold-gradient-text">35+</span>
                </div>
                <h3 className="text-2xl font-bold mb-3" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
                  Years of Excellence
                </h3>
                <p className="text-white/60 leading-relaxed mb-8">
                  From a humble beginning to becoming a trusted name across 15+
                  cities, our journey is a testament to unwavering dedication.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: "🏪", label: "Wholesale" },
                    { icon: "🏠", label: "Retail" },
                    { icon: "🚚", label: "Delivery" },
                    { icon: "✅", label: "Quality" },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="flex items-center gap-3 bg-white/10 rounded-xl p-3"
                    >
                      <span className="text-2xl">{item.icon}</span>
                      <span className="text-sm font-medium">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
              {/* Decorative accent */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-2xl bg-[#B8934A]/10 -z-10" />
              <div className="absolute -top-4 -left-4 w-16 h-16 rounded-2xl bg-[#1F4A3D]/10 -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ TESTIMONIALS ═══════ */}
      <section className="py-24 lg:py-32 bg-[#1F4A3D]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="gold-divider" />
            </div>
            <h2
              className="text-3xl lg:text-4xl font-bold text-white mb-4"
              style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}
            >
              What Our Clients Say
            </h2>
            <p className="text-white/50 max-w-2xl mx-auto text-lg">
              Hear from the businesses and families who trust us every day.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div
                key={t.name}
                className="rounded-2xl bg-white/5 border border-white/10 p-8 backdrop-blur-sm hover:bg-white/10 transition-all duration-400"
              >
                <div className="flex gap-1 mb-5">
                  {[...Array(t.stars)].map((_, j) => (
                    <svg key={j} className="w-4 h-4 text-[#B8934A]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-white/70 text-sm leading-relaxed mb-6 italic">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#B8934A] to-[#C2A159] flex items-center justify-center text-white text-sm font-bold">
                    {t.name.split(" ").map((n) => n[0]).join("")}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">{t.name}</p>
                    <p className="text-xs text-white/40">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ CTA ═══════ */}
      <section className="py-24 lg:py-32 bg-[#F5F0E8]">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h2
            className="section-heading text-3xl lg:text-5xl mb-6"
          >
            Ready to Partner with Us?
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto mb-10">
            Whether you need bulk wholesale orders or premium retail products,
            we are here to serve you with the quality and reliability you
            deserve.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary text-base">
              Get a Free Quote
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </Link>
            <Link href="/products" className="btn-secondary text-base">
              Browse Products
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
