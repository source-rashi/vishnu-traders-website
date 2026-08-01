import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Vishnu Traders — Premium Wholesale & Retail Trading",
    template: "%s | Vishnu Traders",
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  description:
    "Your trusted partner for premium quality commodities, grains, spices, and essential goods. Wholesale and retail trading since 1990.",
  keywords: [
    "Vishnu Traders",
    "wholesale",
    "retail",
    "trading",
    "commodities",
    "grains",
    "spices",
    "Visakhapatnam",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
