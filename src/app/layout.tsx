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
    default: "Vishnu Traders — Premier Importer & Processor of Areca Nut (Betel Nut / Supari) | Indore",
    template: "%s | Vishnu Traders",
  },
  description:
    "Leading importer, processor, and distributor of areca nuts (betel nut / supari) based in Indore, Madhya Pradesh since 1996. Strategic supply partner for food manufacturers with raw, roasted, whole, and split areca nuts backed by Certificate of Analysis (COA) documentation.",
  keywords: [
    "Vishnu Traders",
    "Areca Nut Importer",
    "Areca Nut Supplier India",
    "Betel Nut Wholesale",
    "Supari Supplier Indore",
    "Raw Areca Nut Whole",
    "Raw Areca Nut Split",
    "Roasted Areca Nut Whole",
    "Roasted Areca Nut Split",
    "Pologround Industrial Estate",
    "Indore Commodity Trader",
    "Betel Nut Exporter India",
    "Areca Nut Certificate of Analysis",
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
    title: "Vishnu Traders — Premier Importer & Processor of Areca Nut",
    description:
      "Since 1996. High-volume areca nut supply chain for food manufacturers & institutional buyers. Sourced globally and domestically with Pologround processing & warehousing.",
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
    title: "Vishnu Traders — Areca Nut Importer & Processor",
    description:
      "30-year commodity trading legacy in areca nuts (betel nut / supari). Sourcing from Indonesia, Thailand, Myanmar, Sri Lanka, Kerala & Karnataka.",
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
    "Premier importer, processor, and distributor of areca nuts (betel nut / supari) with centralized processing and bulk warehousing in Indore, MP.",
  url: siteUrl,
  telephone: "+918839966253",
  address: {
    "@type": "PostalAddress",
    streetAddress: "R-20 Pologround Industrial Estate, Malti Vanaspati",
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
      opens: "09:30",
      closes: "19:30",
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
