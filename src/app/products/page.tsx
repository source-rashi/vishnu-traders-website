"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import AddToInquiryButton from "../components/AddToInquiryButton";
import MediaWithFallback from "../components/MediaWithFallback";
import ScrollReveal from "../components/ScrollReveal";
import { useInquiry } from "../context/InquiryContext";

interface ProductItem {
  id: string;
  name: string;
  origin: string;
  purity: string;
  packaging: string;
  badge: string | null;
  description?: string;
  image?: string;
}

interface CategoryGroup {
  id: string;
  title: string;
  icon: string;
  gradient: string;
  description: string;
  products: ProductItem[];
}

const categories: CategoryGroup[] = [
  {
    id: "whole-spices",
    title: "Whole Spices",
    icon: "🌶️",
    gradient: "from-red-50 to-orange-50",
    description:
      "Hand-selected, sortex-cleaned whole spices with high volatile oil retention and natural aroma.",
    products: [
      {
        id: "cumin-seeds",
        name: "Cumin Seeds (Jeera)",
        origin: "Gujarat / Rajasthan Mandis",
        purity: "99.5% - 99.9% Sortex Cleaned",
        packaging: "25kg / 50kg PP Bags",
        badge: "Top Exporter Item",
        image: "/images/products/cumin-seeds.jpg",
      },
      {
        id: "coriander-seeds",
        name: "Coriander Seeds (Dhania)",
        origin: "Madhya Pradesh (Guna / Neemuch)",
        purity: "Eagle / Scooter / Single Parrot Sortex",
        packaging: "25kg / 40kg Jute / PP",
        badge: "Origin Source",
        image: "/images/products/coriander-seeds.jpg",
      },
      {
        id: "turmeric-fingers",
        name: "Turmeric Fingers (Haldi)",
        origin: "Nizamabad / Salem Origin",
        purity: "Curcumin 3.0% - 5.0%+ Polished",
        packaging: "25kg / 50kg Bags",
        badge: "High Curcumin",
        image: "/images/products/turmeric.jpg",
      },
      {
        id: "black-pepper",
        name: "Black Pepper (Tellicherry & Malabar)",
        origin: "South India Plantation Sourced",
        purity: "Garbled / 550GL - 580GL High Density",
        packaging: "25kg / 50kg Multiwall Paper",
        badge: "Export Grade",
        image: "/images/products/black-pepper.jpg",
      },
      {
        id: "green-cardamom",
        name: "Green Cardamom (Elaichi)",
        origin: "Idukki, Kerala",
        purity: "7mm / 8mm Bold Deep Green",
        packaging: "5kg / 10kg Master Cartons",
        badge: "Premium Bold",
        image: "/images/products/cardamom.jpg",
      },
      {
        id: "cloves-bold",
        name: "Cloves (Laung)",
        origin: "Domestic & Selected Import",
        purity: "Handpicked Bold Head, Low Moisture",
        packaging: "10kg / 25kg Cartons",
        badge: "Aromatic",
      },
      {
        id: "fenugreek-seeds",
        name: "Fenugreek Seeds (Methi)",
        origin: "Madhya Pradesh / Rajasthan",
        purity: "Machine Cleaned 99% Sortex",
        packaging: "25kg / 50kg PP Bags",
        badge: null,
        image: "/images/products/fennel-seeds.jpg",
      },
      {
        id: "fennel-seeds",
        name: "Fennel Seeds (Saunf)",
        origin: "Gujarat / Rajasthan",
        purity: "Green / Regular Sortex Cleaned",
        packaging: "25kg / 50kg Bags",
        badge: null,
        image: "/images/products/fennel-seeds.jpg",
      },
    ],
  },
  {
    id: "ground-spices",
    title: "Ground & Powdered Spices",
    icon: "🏺",
    gradient: "from-amber-50 to-yellow-50",
    description:
      "Cold-ground at low temperatures to preserve essential volatiles, colour vibrancy, and flavour depth.",
    products: [
      {
        id: "red-chili-powder",
        name: "Red Chili Powder (Stemless)",
        origin: "Guntur / Byadgi Origin Blends",
        purity: "SHU 20,000 - 90,000 (Custom Heat Levels)",
        packaging: "1kg, 5kg, 25kg Barrier Bags",
        badge: "Custom Heat",
        image: "/images/products/red-chilli.jpg",
      },
      {
        id: "turmeric-powder",
        name: "Turmeric Powder",
        origin: "Pure MP / Nizamabad Finger Grind",
        purity: "Curcumin Verified, No Added Color",
        packaging: "500g - 25kg Bags",
        badge: "100% Pure",
        image: "/images/products/turmeric.jpg",
      },
      {
        id: "coriander-powder",
        name: "Coriander Powder (Dhania Powder)",
        origin: "Fresh Green Crop Milling",
        purity: "100% Pure Aroma Retained",
        packaging: "1kg, 5kg, 20kg",
        badge: null,
      },
      {
        id: "cumin-powder",
        name: "Cumin Powder (Jeera Powder)",
        origin: "Single-Origin Roasted / Raw Ground",
        purity: "Micro-fine / Coarse Mesh",
        packaging: "1kg to 25kg",
        badge: null,
      },
      {
        id: "garam-masala-blend",
        name: "Garam Masala Blend",
        origin: "House Signature Formulation",
        purity: "14-Spice Traditional Formula",
        packaging: "Retail & Foodservice Barrier Packs",
        badge: "Signature Blend",
      },
      {
        id: "amchur-powder",
        name: "Dry Mango Powder (Amchur)",
        origin: "Central India Sun-Dried",
        purity: "Sun-dried Raw Green Mango",
        packaging: "25kg Bags",
        badge: null,
      },
    ],
  },
  {
    id: "agri-commodities",
    title: "Agri Commodities & Oilseeds",
    icon: "🌾",
    gradient: "from-green-50 to-emerald-50",
    description:
      "Bulk agricultural commodities sourced from the Malwa plateau and Central India grain belts.",
    products: [
      {
        id: "yellow-soybean",
        name: "Soybean (Yellow Non-GMO)",
        origin: "Madhya Pradesh (Malwa Hub)",
        purity: "Oil content 18-20%+, Moisture <10%",
        packaging: "50kg Bags / Bulk Container Liner",
        badge: "Malwa Non-GMO",
      },
      {
        id: "sharbati-wheat",
        name: "Wheat (Sharbati & Durum)",
        origin: "Madhya Pradesh (Sehore / Vidisha)",
        purity: "Machine Cleaned / High Gluten",
        packaging: "50kg Export Bags",
        badge: "Premium Grain",
      },
      {
        id: "yellow-maize-corn",
        name: "Yellow Maize / Corn",
        origin: "Central India Mandis",
        purity: "Aflatoxin Tested / Food & Feed Grade",
        packaging: "50kg Bags / FCL Bulk",
        badge: null,
      },
      {
        id: "sesame-seeds-hulled",
        name: "Sesame Seeds (Natural & Hulled)",
        origin: "Gujarat / MP Mandis",
        purity: "99.9% Auto-Sortex / Purity 99.95%",
        packaging: "25kg / 50kg Paper & PP Bags",
        badge: "Sortex 99.95%",
      },
      {
        id: "mustard-seeds",
        name: "Mustard Seeds (Black & Yellow)",
        origin: "Rajasthan / MP Mandis",
        purity: "High Oil Content Machine Cleaned",
        packaging: "50kg Bags",
        badge: null,
        image: "/images/products/mustard-seeds.jpg",
      },
      {
        id: "kabuli-chickpeas",
        name: "Chickpeas / Kabuli Chana (75-80 Count)",
        origin: "Madhya Pradesh Bold Count",
        purity: "Bold Caliber / Sortex Selected",
        packaging: "25kg / 50kg Bags",
        badge: "Export Grade",
      },
    ],
  },
  {
    id: "processed",
    title: "Processed & Roasted Spices",
    icon: "🔥",
    gradient: "from-orange-50 to-amber-50",
    description:
      "In-house roasted and custom-processed spice solutions for food manufacturers, spice blenders, and retail brands.",
    products: [
      {
        id: "roasted-cumin-seeds",
        name: "Drum-Roasted Cumin Seeds",
        origin: "In-House Roastery, Indore",
        purity: "Even Thermal Profile, Deep Aroma",
        packaging: "10kg / 25kg Nitrogen Flushed",
        badge: "In-House Roasting",
      },
      {
        id: "roasted-coriander-seeds",
        name: "Roasted Coriander Seeds",
        origin: "In-House Roastery, Indore",
        purity: "Crisp Texture, Essential Oils Activated",
        packaging: "10kg / 25kg Packs",
        badge: "Custom Toast",
      },
      {
        id: "roasted-sesame-seeds",
        name: "Roasted Sesame Seeds (White / Black)",
        origin: "In-House Roastery, Indore",
        purity: "Nutty Profile, Uniform Roasting",
        packaging: "15kg / 25kg Poly-lined Bags",
        badge: null,
      },
      {
        id: "private-label-blends",
        name: "Custom Contract Blends & Rubs",
        origin: "Bespoke Facility Formulations",
        purity: "Client-Defined Mesh & Specifications",
        packaging: "Private-Label Packaging Available",
        badge: "Private Label",
      },
    ],
  },
];

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const { addItem, openDrawer } = useInquiry();

  const filteredCategories = useMemo(() => {
    return categories
      .filter((cat) => selectedCategory === "all" || cat.id === selectedCategory)
      .map((cat) => {
        const filteredProducts = cat.products.filter((p) => {
          const matchQuery =
            searchQuery.trim() === "" ||
            p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            p.origin.toLowerCase().includes(searchQuery.toLowerCase()) ||
            p.purity.toLowerCase().includes(searchQuery.toLowerCase());
          return matchQuery;
        });
        return { ...cat, products: filteredProducts };
      })
      .filter((cat) => cat.products.length > 0);
  }, [selectedCategory, searchQuery]);

  const addAllFromCategory = (cat: CategoryGroup) => {
    cat.products.forEach((p) => {
      addItem({
        id: p.id,
        name: p.name,
        category: cat.title,
        origin: p.origin,
        purity: p.purity,
      });
    });
    openDrawer();
  };

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-gradient-to-br from-[#1F4A3D] via-[#1a3f34] to-[#0A1B15] overflow-hidden text-white">
        <div className="absolute top-20 right-[10%] w-[500px] h-[500px] rounded-full bg-[#B8934A]/10 blur-3xl" />
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="gold-divider" />
            <span className="text-[#B8934A] text-sm font-semibold uppercase tracking-[0.15em]">
              B2B & Global Export Catalogue
            </span>
          </div>
          <h1
            className="text-4xl lg:text-6xl font-bold mb-6"
            style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}
          >
            Export-Grade <span className="gold-gradient-text">Spices & Commodities</span>
          </h1>
          <p className="text-white/70 text-lg max-w-2xl leading-relaxed mb-8">
            Procured directly from central India&apos;s agricultural heartlands, processed and graded in-house at our Indore facility, and packaged for worldwide container shipping.
          </p>

          {/* Search & Filter Bar */}
          <div className="flex flex-col sm:flex-row gap-3 max-w-2xl bg-white/10 p-2 rounded-2xl backdrop-blur-md border border-white/20">
            <div className="relative flex-1">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search cumin, turmeric, soybeans, cardamom..."
                className="w-full bg-white/10 text-white placeholder:text-white/50 text-xs sm:text-sm px-4 py-3 rounded-xl focus:outline-none focus:bg-white/20 transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-white/60 hover:text-white text-xs"
                >
                  ✕
                </button>
              )}
            </div>
            <button
              onClick={openDrawer}
              className="btn-primary text-xs sm:text-sm !py-2.5 !px-5 whitespace-nowrap flex items-center justify-center gap-2"
            >
              <span>📋 View RFQ Basket</span>
            </button>
          </div>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="bg-[#FAF3E7] border-b border-[#B8934A]/25 sticky top-20 z-30 shadow-sm py-3.5">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
            <button
              onClick={() => setSelectedCategory("all")}
              className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-300 ${
                selectedCategory === "all"
                  ? "bg-[#1F4A3D] text-white shadow-md"
                  : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
              }`}
            >
              All Categories
            </button>
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap flex items-center gap-1.5 transition-all duration-300 ${
                    isSelected
                      ? "bg-[#1F4A3D] text-white shadow-md"
                      : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
                  }`}
                >
                  <span>{cat.icon}</span>
                  <span>{cat.title}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Product List Catalogue */}
      <section className="py-20 lg:py-28 bg-white min-h-[50vh]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 space-y-20">
          {filteredCategories.length === 0 ? (
            <div className="text-center py-20">
              <span className="text-5xl block mb-4">🔍</span>
              <h3 className="text-xl font-bold text-[#1F4A3D] mb-2">
                No commodities matched &ldquo;{searchQuery}&rdquo;
              </h3>
              <p className="text-sm text-gray-500 max-w-md mx-auto mb-6">
                Try searching for another spice or commodity name, or browse all categories.
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("all");
                }}
                className="btn-secondary text-xs"
              >
                Clear Search Filter
              </button>
            </div>
          ) : (
            filteredCategories.map((cat) => (
              <div key={cat.id} id={cat.id} className="scroll-mt-36">
                {/* Category Header */}
                <ScrollReveal animation="fade-up">
                  <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-gray-200 pb-6 mb-8 gap-4">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-3xl">{cat.icon}</span>
                        <h2
                          className="text-2xl lg:text-3xl font-bold text-[#1F4A3D]"
                          style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}
                        >
                          {cat.title}
                        </h2>
                      </div>
                      <p className="text-gray-500 text-sm max-w-2xl">
                        {cat.description}
                      </p>
                    </div>
                    <button
                      onClick={() => addAllFromCategory(cat)}
                      className="btn-secondary text-xs !py-2 !px-4 self-start md:self-auto shrink-0"
                    >
                      + Add All {cat.title} to Inquiry
                    </button>
                  </div>
                </ScrollReveal>

                {/* Product Cards Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {cat.products.map((product, idx) => (
                    <ScrollReveal key={product.id} animation="fade-up" delay={idx * 60}>
                      <div className="glass-card overflow-hidden flex flex-col justify-between group h-full">
                        <div className="relative h-44 overflow-hidden border-b border-[#B8934A]/15">
                          <div className="absolute inset-0 bg-gradient-to-br from-[#1F4A3D] via-[#3F7C67] to-[#B8934A] opacity-30" />
                          <MediaWithFallback
                            src={product.image}
                            alt={product.name}
                            fill
                            className="media-zoom"
                            fallbackIcon={cat.icon}
                            fallbackGradient={cat.gradient}
                          />
                          {product.badge && (
                            <span className="absolute right-3 top-3 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#FAF3E7]/90 text-[#8A6A2E]">
                              {product.badge}
                            </span>
                          )}
                        </div>

                        <div className="p-6 flex flex-col justify-between flex-1">
                          <div>
                            <div className="flex items-start justify-between gap-2 mb-3">
                              <h3
                                className="font-bold text-[#1F4A3D] text-lg group-hover:text-[#B8934A] transition-colors"
                                style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}
                              >
                                {product.name}
                              </h3>
                            </div>

                            <div className="space-y-1.5 text-xs text-gray-500 mb-6">
                              <div className="flex justify-between py-1 border-b border-gray-100">
                                <span className="text-gray-400">Origin:</span>
                                <span className="font-medium text-gray-700 text-right">{product.origin}</span>
                              </div>
                              <div className="flex justify-between py-1 border-b border-gray-100">
                                <span className="text-gray-400">Purity / Spec:</span>
                                <span className="font-medium text-gray-700 text-right">{product.purity}</span>
                              </div>
                              <div className="flex justify-between py-1">
                                <span className="text-gray-400">Standard Packaging:</span>
                                <span className="font-medium text-gray-700 text-right">{product.packaging}</span>
                              </div>
                            </div>
                          </div>

                          <div className="pt-4 border-t border-gray-100 flex items-center justify-between gap-2">
                            <AddToInquiryButton
                              id={product.id}
                              name={product.name}
                              category={cat.title}
                              origin={product.origin}
                              purity={product.purity}
                            />
                            <Link
                              href={`/contact?sample=${encodeURIComponent(product.name)}`}
                              className="text-[11px] text-gray-500 hover:text-[#B8934A] transition-colors"
                            >
                              Request Sample
                            </Link>
                          </div>
                        </div>
                      </div>
                    </ScrollReveal>
                  ))}
                </div>
              </div>
            ))
          )}
        </div>
      </section>

      {/* B2B Custom Specs CTA */}
      <section className="py-24 lg:py-32 bg-[#F5F0E8]">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <ScrollReveal animation="fade-up">
            <span className="text-4xl mb-4 block">🚢</span>
            <h2
              className="text-3xl lg:text-4xl font-bold text-[#1F4A3D] mb-4"
              style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}
            >
              Looking for Custom Mesh, Roast, or Private Packaging?
            </h2>
            <p className="text-gray-600 text-base max-w-2xl mx-auto mb-8 leading-relaxed">
              We work closely with food service distributors, snack food manufacturers, and overseas spice brands. Contact us to discuss target specifications, moisture baselines, or private labelling.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={openDrawer}
                className="btn-primary text-base"
              >
                Review Selected RFQ Items ({filteredCategories.reduce((acc, c) => acc + c.products.length, 0)} Total)
              </button>
              <Link href="/processing" className="btn-secondary text-base">
                View In-House Processing Flow
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
