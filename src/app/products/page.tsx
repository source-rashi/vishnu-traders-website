import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Browse our premium range of grains, spices, pulses, oils, dry fruits, and more at wholesale and retail prices.",
};

const categories = [
  {
    id: "grains",
    title: "Grains & Cereals",
    icon: "🌾",
    gradient: "from-amber-50 to-yellow-50",
    description: "The finest grains sourced from premium farms across India.",
    products: [
      { name: "Basmati Rice (Premium)", price: "₹120/kg", badge: "Best Seller" },
      { name: "Sona Masoori Rice", price: "₹55/kg", badge: null },
      { name: "Wheat Flour (Atta)", price: "₹42/kg", badge: null },
      { name: "Semolina (Rava)", price: "₹48/kg", badge: null },
      { name: "Broken Wheat (Dalia)", price: "₹38/kg", badge: null },
      { name: "Poha (Flattened Rice)", price: "₹52/kg", badge: "Popular" },
    ],
  },
  {
    id: "spices",
    title: "Spices & Seasonings",
    icon: "🌶️",
    gradient: "from-red-50 to-orange-50",
    description: "Authentic, aromatic spices that elevate every dish.",
    products: [
      { name: "Turmeric Powder", price: "₹180/kg", badge: "Organic" },
      { name: "Red Chili Powder", price: "₹220/kg", badge: null },
      { name: "Cumin Seeds (Jeera)", price: "₹340/kg", badge: null },
      { name: "Coriander Powder", price: "₹160/kg", badge: null },
      { name: "Garam Masala", price: "₹280/kg", badge: "House Blend" },
      { name: "Black Pepper", price: "₹650/kg", badge: "Premium" },
    ],
  },
  {
    id: "pulses",
    title: "Pulses & Lentils",
    icon: "🫘",
    gradient: "from-green-50 to-emerald-50",
    description: "Top-grade dals and lentils for wholesome nutrition.",
    products: [
      { name: "Toor Dal", price: "₹130/kg", badge: "Best Seller" },
      { name: "Moong Dal", price: "₹120/kg", badge: null },
      { name: "Chana Dal", price: "₹85/kg", badge: null },
      { name: "Urad Dal", price: "₹140/kg", badge: null },
      { name: "Masoor Dal", price: "₹95/kg", badge: null },
      { name: "Rajma (Kidney Beans)", price: "₹160/kg", badge: "Popular" },
    ],
  },
  {
    id: "oils",
    title: "Oils & Ghee",
    icon: "🫒",
    gradient: "from-lime-50 to-green-50",
    description: "Pure cooking oils and ghee for healthy, flavorful meals.",
    products: [
      { name: "Groundnut Oil", price: "₹195/L", badge: "Cold Pressed" },
      { name: "Sunflower Oil", price: "₹145/L", badge: null },
      { name: "Mustard Oil", price: "₹170/L", badge: null },
      { name: "Coconut Oil", price: "₹210/L", badge: "Pure" },
      { name: "Pure Cow Ghee", price: "₹580/kg", badge: "Premium" },
      { name: "Sesame Oil (Gingelly)", price: "₹320/L", badge: null },
    ],
  },
  {
    id: "sugar",
    title: "Sugar & Jaggery",
    icon: "🍯",
    gradient: "from-yellow-50 to-amber-50",
    description: "Natural sweeteners from trusted mills across India.",
    products: [
      { name: "Refined Sugar", price: "₹45/kg", badge: null },
      { name: "Organic Jaggery", price: "₹65/kg", badge: "Organic" },
      { name: "Jaggery Powder", price: "₹72/kg", badge: null },
      { name: "Palm Jaggery", price: "₹120/kg", badge: "Premium" },
      { name: "Mishri (Rock Sugar)", price: "₹90/kg", badge: null },
      { name: "Brown Sugar", price: "₹60/kg", badge: null },
    ],
  },
  {
    id: "dryfruits",
    title: "Dry Fruits & Nuts",
    icon: "🥜",
    gradient: "from-orange-50 to-amber-50",
    description: "Premium nuts and dried fruits at competitive wholesale prices.",
    products: [
      { name: "California Almonds", price: "₹750/kg", badge: "Premium" },
      { name: "Cashew Nuts (W320)", price: "₹820/kg", badge: "Best Seller" },
      { name: "Green Raisins", price: "₹280/kg", badge: null },
      { name: "Walnuts", price: "₹680/kg", badge: null },
      { name: "Pistachios", price: "₹1100/kg", badge: "Imported" },
      { name: "Dates (Medjool)", price: "₹550/kg", badge: null },
    ],
  },
];

export default function ProductsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-gradient-to-br from-[#1F4A3D] via-[#1a3f34] to-[#0A1B15] overflow-hidden">
        <div className="absolute top-20 right-[10%] w-[400px] h-[400px] rounded-full bg-[#B8934A]/5 blur-3xl" />
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="gold-divider" />
            <span className="text-[#B8934A] text-sm font-semibold uppercase tracking-[0.15em]">
              Our Products
            </span>
          </div>
          <h1
            className="text-4xl lg:text-6xl font-bold text-white mb-6"
            style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}
          >
            Premium <span className="gold-gradient-text">Products</span>
          </h1>
          <p className="text-white/60 text-lg max-w-2xl leading-relaxed">
            Explore our extensive catalogue of handpicked commodities — from
            everyday essentials to premium specialities, available at wholesale
            and retail prices.
          </p>
        </div>
      </section>

      {/* Products */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 space-y-20">
          {categories.map((cat, catIndex) => (
            <div key={cat.id} id={cat.id}>
              {/* Category header */}
              <div className="flex items-center gap-4 mb-8">
                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${cat.gradient} flex items-center justify-center text-3xl`}
                >
                  {cat.icon}
                </div>
                <div>
                  <h2
                    className="section-heading text-2xl lg:text-3xl"
                  >
                    {cat.title}
                  </h2>
                  <p className="text-sm text-gray-400 mt-0.5">{cat.description}</p>
                </div>
              </div>

              {/* Product grid */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {cat.products.map((product) => (
                  <div
                    key={product.name}
                    className="glass-card rounded-xl p-5 flex items-center justify-between group"
                  >
                    <div>
                      <h3 className="font-semibold text-[#1F4A3D] text-sm">
                        {product.name}
                      </h3>
                      {product.badge && (
                        <span className="inline-block mt-1.5 text-[10px] font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#B8934A]/10 text-[#B8934A]">
                          {product.badge}
                        </span>
                      )}
                    </div>
                    <div className="text-right">
                      <span
                        className="text-lg font-bold text-[#1F4A3D]"
                        style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}
                      >
                        {product.price}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {catIndex < categories.length - 1 && (
                <div className="mt-16 border-b border-gray-100" />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Bulk Order CTA */}
      <section className="py-24 lg:py-32 bg-[#F5F0E8]">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <span className="text-4xl mb-6 block">📦</span>
          <h2 className="section-heading text-3xl lg:text-4xl mb-4">
            Need Bulk Orders?
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto mb-8">
            We offer special wholesale rates for bulk purchases. Contact us for
            customized pricing, dedicated delivery schedules, and priority
            support.
          </p>
          <Link href="/contact" className="btn-primary text-base">
            Request Wholesale Pricing
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
