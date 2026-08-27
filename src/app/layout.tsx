import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import { InquiryProvider } from "./context/InquiryContext";
import InquiryDrawer from "./components/InquiryDrawer";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://vishnutraders.in";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Vishnu Traders — Global Spice & Agri-Commodity Exporter | Indore",
    template: "%s | Vishnu Traders",
  },
  description:
    "Leading agricultural commodities and spice exporter based in Indore, Madhya Pradesh since 1996. In-house sourcing, sortex cleaning, drum roasting, packaging, and climate-controlled warehousing.",
  keywords: [
    "Vishnu Traders",
    "Spice Exporter India",
    "Indore Spice Processor",
    "Pologround Industrial Estate",
    "Madhya Pradesh Spices",
    "Cumin Seeds Exporter",
    "Coriander Seeds Exporter",
    "Turmeric Powder Bulk",
    "Soybean Exporter",
    "Non-GMO Wheat",
    "Roasted Cumin Seeds",
    "Agricultural Commodities Trader",
  ],
  authors: [{ name: "Vishnu Traders" }],
  creator: "Vishnu Traders",
  publisher: "Vishnu Traders",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-best.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/favicon-best.png",
  },
  openGraph: {
    title: "Vishnu Traders — Global Spice & Agri-Commodity Exporter",
    description:
      "Since 1996. Farm-direct sourcing, optical sortex cleaning, precision drum roasting, and export warehousing in Indore, India.",
    url: siteUrl,
    siteName: "Vishnu Traders",
    images: [
      {
        url: "/logo-best.png",
        width: 800,
        height: 600,
        alt: "Vishnu Traders Emblem",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vishnu Traders — Spice & Agri Exporter",
    description:
      "Global agricultural commodities and spices exporter based in Indore, MP. In-house processing & warehousing.",
    images: ["/logo-best.png"],
  },
  alternates: {
    canonical: siteUrl,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Vishnu Traders",
  description:
    "Global agricultural commodities and spice exporter with in-house processing, roasting, sorting, and warehousing.",
  url: siteUrl,
  telephone: "+918839966253",
  address: {
    "@type": "PostalAddress",
    streetAddress: "R-20 Pologround, Pologround Industrial Estate, Malti Vanaspati",
    addressLocality: "Indore",
    addressRegion: "Madhya Pradesh",
    postalCode: "452015",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "22.7533",
    longitude: "75.8577",
  },
  foundingDate: "1996",
  founder: {
    "@type": "Person",
    name: "Harsh Agrawal",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:00",
      closes: "19:00",
    },
  ],
  sameAs: [
    "https://maps.app.goo.gl/KKwyo6uoLbBCuSeD7",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#FAFAF8] text-[#1a1a1a]">
        <InquiryProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <WhatsAppButton />
          <InquiryDrawer />
        </InquiryProvider>
      </body>
    </html>
  );
}
