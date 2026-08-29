import Link from "next/link";
import NewsletterSignup from "./NewsletterSignup";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Areca Catalogue", href: "/products" },
  { label: "In-House Processing", href: "/processing" },
  { label: "Certifications & QR", href: "/certifications" },
  { label: "Contact & RFQ", href: "/contact" },
];

const productLinks = [
  { label: "Raw Areca Nut — Whole", href: "/products" },
  { label: "Raw Areca Nut — Split", href: "/products" },
  { label: "Roasted Areca Nut — Whole", href: "/products" },
  { label: "Roasted Areca Nut — Split", href: "/products" },
  { label: "Grade 95%+ Super Caliber", href: "/products" },
];

const socialLinks = [
  {
    label: "LinkedIn",
    href: "#TODO_LINKEDIN",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "#TODO_FACEBOOK",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    label: "WhatsApp Direct",
    href: "https://wa.me/918839966253?text=Hi%2C%20I%27d%20like%20to%20request%20a%20quote%20for%20areca%20nut%20supply.",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#0A1B15] text-white border-t border-[#B8934A]/20">
      {/* Main footer */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand & Newsletter */}
          <div className="lg:col-span-1 space-y-6">
            <div>
              <div
                className="text-xl font-bold tracking-tight text-white"
                style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}
              >
                VISHNU TRADERS
              </div>
              <div className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#D4B56A]">
                Since 1996 · Areca Nut Supply Partner
              </div>
            </div>
            <p className="text-white/70 text-xs sm:text-sm leading-relaxed">
              Premier importer, processor, and distributor of areca nuts (betel nut / supari). Sourcing from prime global & domestic origins with centralized warehousing and drum roasting in Indore, MP.
            </p>

            {/* Newsletter */}
            <div>
              <span className="block text-xs uppercase font-bold tracking-wider text-[#D4B56A] mb-2">
                Market & Price Intelligence Bulletin
              </span>
              <NewsletterSignup />
            </div>

            {/* Social links */}
            <div className="flex items-center gap-3 pt-2">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  aria-label={s.label}
                  className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-white/70 hover:bg-[#B8934A] hover:text-white transition-all duration-300"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[#B8934A] mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-[#B8934A] transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Product Lines & Resources */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[#B8934A] mb-6">
              Areca Nut Lines
            </h3>
            <ul className="space-y-3">
              {productLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-[#B8934A] transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Download Profile & Catalogue CTAs */}
            <div className="mt-6 pt-6 border-t border-white/10 space-y-2">
              <p className="text-[10px] text-white/40 uppercase tracking-wider">Download Resources</p>
              <div>
                <a
                  href="/documents/vishnu-traders-company-profile.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-[#B8934A] hover:text-[#D4B56A] transition-colors font-medium"
                >
                  <span>📄 Company Profile (PDF)</span>
                </a>
              </div>
              <div>
                <a
                  href="/documents/vishnu-traders-product-catalogue.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-[#B8934A] hover:text-[#D4B56A] transition-colors font-medium"
                >
                  <span>📦 Product Catalogue (PDF)</span>
                </a>
              </div>
            </div>
          </div>

          {/* Physical Locations */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[#B8934A] mb-6">
              Facility & Office
            </h3>
            <ul className="space-y-4 text-xs sm:text-sm">
              <li className="space-y-1">
                <span className="text-[10px] uppercase font-bold text-[#D4B56A] block">
                  Warehouse & Operations:
                </span>
                <span className="text-white/70 leading-relaxed block">
                  R-20 Pologround Industrial Estate, Malti Vanaspati, Indore, MP 452015
                </span>
              </li>
              <li className="space-y-1 pt-1">
                <span className="text-[10px] uppercase font-bold text-[#D4B56A] block">
                  Registered Office:
                </span>
                <span className="text-white/70 leading-relaxed block">
                  Aash Chamber, Siyaganj, Indore, MP 452007
                </span>
              </li>
              <li className="pt-2">
                <a
                  href="tel:+918839966253"
                  className="text-white/80 hover:text-[#B8934A] transition-colors block font-semibold"
                >
                  📞 +91 88399 66253 (Harsh Agrawal)
                </a>
                <a
                  href="mailto:info@vishnutraders.in"
                  className="text-white/60 hover:text-[#B8934A] transition-colors block text-xs mt-1"
                >
                  ✉️ info@vishnutraders.in
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/50">
            © {new Date().getFullYear()} Vishnu Traders. Est. 1996 · Areca Nut Importer & Processor · Indore, MP. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-xs text-white/50">FSSAI | IEC | GST Registered</span>
            <span className="text-xs text-white/50">
              Operations:{" "}
              <a href="tel:+918839966253" className="hover:text-[#B8934A] transition-colors">
                Harsh Agrawal
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
