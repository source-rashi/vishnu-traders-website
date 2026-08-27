# Vishnu Traders — Global Spice & Agri-Commodity Exporter

Official website and digital trade portal for **Vishnu Traders** — an integrated agricultural commodities and spice exporter based in Indore, Madhya Pradesh, India (Since 1996).

---

## 🌐 Modern Interactive Frontend Architecture

- **Framework**: [Next.js 16 (App Router)](https://nextjs.org/) + React 19 + TypeScript
- **Styling**: Tailwind CSS v4 + Vanilla CSS Design Tokens
- **Interactivity (Zero-Bloat)**:
  - **Full-Bleed Rotating Hero Carousel**: Multi-slide crossfade with slide controls and progress indicators.
  - **Interactive "Around the Globe" Region Selector**: Visual world map with interactive trade corridors and regional volume intelligence.
  - **7-Stage Interactive Processing Flow**: Visual journey covering farm intake, sortex cleaning, drum roasting, QC grading, barrier packaging, FIFO warehousing, and container dispatch.
  - **B2B Inquiry / Quote Basket (RFQ Basket)**: Allows commercial buyers to browse products, click "Add to Inquiry", adjust target volumes (kg/MT/FCL), and submit a pre-filled trade inquiry directly to the export desk.
  - **Animated Stat Counters**: Scroll-triggered counting using custom `useCountUp` hook and `requestAnimationFrame`.
  - **Facility & Equipment Lightbox Gallery**: Interactive modal for inspecting processing machinery and warehousing standards.
  - **Interactive FAQ Accordion**: Category-filtered knowledge base for export buyers.
  - **Testimonials Carousel**: Verified international buyer feedback across UAE, Malaysia, Netherlands, and USA.
  - **Accessibility**: Full `prefers-reduced-motion` compliance across all CSS animations and JavaScript timers.

---

## 📸 Local Image Asset Manifest (Where to Place Real Photos)

Every visual section is built against **named local file paths** in `/public/images/...` with graceful fallback gradients and icons. When real photos are captured, simply drop them into the corresponding directories:

### 1. Hero Carousel (`/public/images/hero/`)
| File Path | Recommended Dimensions | Image Subject / Content | Type |
| :--- | :--- | :--- | :--- |
| `/public/images/hero/hero-1.jpg` | `1920 × 1080` (Landscape) | Wide shot of raw whole spices, cumin/coriander heaps, or farm-origin mandi intake in Central India. | Decorative / Thematic |
| `/public/images/hero/hero-2.jpg` | `1920 × 1080` (Landscape) | Close-up of Sortex optical color sorters or glowing drum roasting machinery in operation. | Specific (Pologround Facility) |
| `/public/images/hero/hero-3.jpg` | `1920 × 1080` (Landscape) | Export container stuffing, stacked pallets, or seaport logistics at Nhava Sheva / Mundra. | Decorative / Logistics |

### 2. Processing & Manufacturing (`/public/images/processing/`)
| File Path | Recommended Dimensions | Image Subject / Content | Type |
| :--- | :--- | :--- | :--- |
| `/public/images/processing/step-1-sourcing.jpg` | `1200 × 800` | Sourcing bags arriving from farm mandis, quality probe testing. | Specific |
| `/public/images/processing/step-2-cleaning.jpg` | `1200 × 800` | Optical Sortex machine discharge chute with 99.5%+ clean cumin/coriander. | Specific |
| `/public/images/processing/step-3-roasting.jpg` | `1200 × 800` | Drum roaster interior or roasted cumin seeds in stainless cooling trays. | Specific |
| `/public/images/processing/step-4-grading.jpg` | `1200 × 800` | Lab technician performing volatile oil distillation or moisture testing. | Specific |
| `/public/images/processing/step-5-packaging.jpg` | `1200 × 800` | Multi-wall export paper sacks being stitched and nitrogen barrier pouches. | Specific |
| `/public/images/processing/step-6-warehouse.jpg` | `1200 × 800` | Elevated palletized storage aisles with lot labels inside Pologround facility. | Specific |
| `/public/images/processing/step-7-export.jpg` | `1200 × 800` | 20ft/40ft shipping container being loaded at facility loading bay. | Specific |

### 3. Facility Lightbox Gallery (`/public/images/facility/`)
| File Path | Recommended Dimensions | Image Subject / Content | Type |
| :--- | :--- | :--- | :--- |
| `/public/images/facility/sortex-machinery.jpg` | `1200 × 800` | Wide photo of the optical color sorters in clean environment. | Specific |
| `/public/images/facility/drum-roaster.jpg` | `1200 × 800` | Precision LPG indirect-fired drum roaster. | Specific |
| `/public/images/facility/warehouse-floor.jpg` | `1200 × 800` | Pallet racking and forklift aisle. | Specific |
| `/public/images/facility/packaging-line.jpg` | `1200 × 800` | Continuous heat sealing and FFS packaging line. | Specific |
| `/public/images/facility/qc-laboratory.jpg` | `1200 × 800` | Analytical testing benches and Clevenger apparatus. | Specific |
| `/public/images/facility/container-dispatch.jpg` | `1200 × 800` | Sealed container truck departing for Nhava Sheva (JNPT). | Specific |

---

## 🚀 Development & Build

```bash
# Run local dev server
npm run dev

# Production build test
npm run build
npm run start
```
