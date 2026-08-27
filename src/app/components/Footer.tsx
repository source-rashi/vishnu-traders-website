import Link from "next/link";
import NewsletterSignup from "./NewsletterSignup";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Export Catalogue", href: "/products" },
  { label: "In-House Processing", href: "/processing" },
  { label: "Certifications & QR", href: "/certifications" },
  { label: "Contact & RFQ", href: "/contact" },
];

const productLinks = [
  { label: "Whole Spices", href: "/products#whole-spices" },
  { label: "Ground & Powdered Spices", href: "/products#ground-spices" },
  { label: "Agri Commodities & Oilseeds", href: "/products#agri-commodities" },
  { label: "Processed & Roasted Spices", href: "/products#processed" },
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
    label: "Instagram",
    href: "#TODO_INSTAGRAM",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
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
              <div className="text-xl font-bold tracking-tight text-white" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>VISHNU TRADERS</div>
              <div className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#D4B56A]">Since 1996 · Global Trading</div>
            </div>
            <p className="text-white/60 text-xs sm:text-sm leading-relaxed">
              Global agricultural commodities & spice exporter. Direct farm sourcing, sortex cleaning, drum roasting, customized packaging, and warehousing in Indore, MP.
            </p>
            {/* Newsletter */}
            <div>
              <span className="block text-xs uppercase font-bold tracking-wider text-[#D4B56A] mb-2">
                Crop & Harvest Bulletin
              </span>
              <NewsletterSignup />
            </div>
            {/* Social links */}
            <div className="flex items-center gap-3 pt-2">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-white/50 hover:bg-[#B8934A] hover:text-white transition-all duration-300"
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
                    className="text-sm text-white/60 hover:text-[#B8934A] transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[#B8934A] mb-6">
              Our Products
            </h3>
            <ul className="space-y-3">
              {productLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-[#B8934A] transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Download Profile CTA */}
            <div className="mt-6 pt-6 border-t border-white/10">
              <p className="text-xs text-white/40 mb-2 uppercase tracking-wider">Company Profile</p>
              <a
                href="#TODO_COMPANY_PROFILE_PDF"
                className="inline-flex items-center gap-2 text-xs text-[#B8934A] hover:text-[#D4B56A] transition-colors font-medium"
              >
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                </svg>
                Download PDF Profile [TODO]
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[#B8934A] mb-6">
              Headquarters & Facility
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[#B8934A] mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>
                <span className="text-sm text-white/60 leading-relaxed">
                  R-20 Pologround,<br />
                  Pologround Industrial Estate,<br />
                  Malti Vanaspati, Indore,<br />
                  Madhya Pradesh 452015, India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-[#B8934A] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                </svg>
                <a href="tel:+918839966253" className="text-sm text-white/60 hover:text-[#B8934A] transition-colors">
                  +91 88399 66253 (Harsh Agrawal)
                </a>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-[#B8934A] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                </svg>
                <a href="mailto:info@vishnutraders.in" className="text-sm text-white/60 hover:text-[#B8934A] transition-colors">
                  info@vishnutraders.in
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} Vishnu Traders. Since 1996 · Global Trading · Pan-India Network. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-xs text-white/40">GST / Tax Registered</span>
            <span className="text-xs text-white/40">
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
