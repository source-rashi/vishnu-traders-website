import Image from "next/image";
import Link from "next/link";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Contact", href: "/contact" },
];

const productLinks = [
  { label: "Grains & Cereals", href: "/products#grains" },
  { label: "Spices & Seasonings", href: "/products#spices" },
  { label: "Pulses & Lentils", href: "/products#pulses" },
  { label: "Oils & Ghee", href: "/products#oils" },
];

export default function Footer() {
  return (
    <footer className="bg-[#1F4A3D] text-white">
      {/* Main footer */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="relative h-11 w-11 overflow-hidden rounded-xl ring-1 ring-[#B8934A]/30">
                <Image
                  src="/logo-best.png"
                  alt="Vishnu Traders logo"
                  fill
                  sizes="44px"
                  className="object-contain"
                />
              </div>
              <div>
                <span
                  className="block text-lg font-bold tracking-tight"
                  style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}
                >
                  Vishnu Traders
                </span>
                <span className="block text-[10px] font-medium uppercase tracking-[0.2em] text-[#B8934A]">
                  Est. Since 1990
                </span>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              Your trusted wholesale and retail partner for premium quality
              commodities. Serving businesses and families across India since
              1990.
            </p>
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
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[#B8934A] mb-6">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[#B8934A] mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>
                <span className="text-sm text-white/60">
                  Main Market Road,<br />
                  Visakhapatnam, AP 530001
                </span>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-[#B8934A] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                </svg>
                <span className="text-sm text-white/60">+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-[#B8934A] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                </svg>
                <span className="text-sm text-white/60">info@vishnuTraders.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} Vishnu Traders. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-xs text-white/40">Privacy Policy</span>
            <span className="text-xs text-white/40">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
