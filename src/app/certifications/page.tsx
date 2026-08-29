import type { Metadata } from "next";
import Link from "next/link";
import QRCodeDisplay from "../components/QRCodeDisplay";
import MediaWithFallback from "../components/MediaWithFallback";
import TrustBadgeStrip from "../components/TrustBadgeStrip";

export const metadata: Metadata = {
  title: "Certifications & Regulatory Compliance",
  description:
    "Official quality certifications, food safety registrations, and import-export compliance documents for Vishnu Traders. FSSAI Central License, IEC Code, and GST Registration.",
};

const certificates = [
  {
    id: "fssai-central",
    title: "FSSAI Central License",
    shortName: "FSSAI Food Safety Compliance",
    category: "Food Safety & Standards Authority of India",
    certNumber: "FSSAI-TODO-XXXXXXXXXXXXXX",
    issuingBody: "Food Safety and Standards Authority of India (FSSAI)",
    validUntil: "Active / Regulatory Renewal Window",
    verificationPortalUrl: "https://foscos.fssai.gov.in/",
    description:
      "Authorizes hygienic intake, grading, drum roasting, warehousing, and bulk wholesale trade of areca nuts (supari) under mandatory national food safety standards.",
    status: "Active & Compliant",
    imagePlaceholder: "[TODO: Client to supply actual FSSAI Central License certificate scan / PDF]",
  },
  {
    id: "iec-code",
    title: "IEC (Import Export Code)",
    shortName: "DGFT Exporter-Importer Code",
    category: "Directorate General of Foreign Trade (DGFT)",
    certNumber: "IEC-TODO-XXXXXXXXXX",
    issuingBody: "Ministry of Commerce & Industry, Government of India",
    validUntil: "Active / Lifetime Validity with Annual Profile Update",
    verificationPortalUrl: "https://dgft.gov.in/",
    description:
      "Official trade registration authorizing direct customs clearance and containerized imports of areca nuts from Southeast Asian plantation origins to Indian ports.",
    status: "Active & Compliant",
    imagePlaceholder: "[TODO: Client to supply actual DGFT IEC registration certificate scan / PDF]",
  },
  {
    id: "gst-registration",
    title: "GST Registration Certificate",
    shortName: "Goods and Services Tax Registration",
    category: "Department of Revenue, Ministry of Finance",
    certNumber: "GSTIN-23XXXXXXXXXXXZX",
    issuingBody: "Government of Madhya Pradesh & Central CBIC",
    validUntil: "Active & Verified Tax Entity",
    verificationPortalUrl: "https://services.gst.gov.in/services/searchtp",
    description:
      "Statutory goods and services tax registration governing pan-India institutional trade, B2B invoicing, and interstate commodity transit documentation.",
    status: "Active & Compliant",
    imagePlaceholder: "[TODO: Client to supply actual GST registration certificate scan / PDF]",
  },
];

export default function CertificationsPage() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://vishnutraders.in";

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden text-white bg-[#0A1B15]">
        <div className="absolute inset-0">
          <MediaWithFallback
            src="/images/certifications/cert-banner.jpg"
            alt="Certified areca nut trade documentation Vishnu Traders"
            fill
            className="object-cover opacity-35"
            fallbackGradient="from-[#1F4A3D] via-[#3F7C67] to-[#0A1B15]"
          />
          <div className="absolute inset-0 bg-[#0A1B15]/75" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/35" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A1B15] via-transparent to-black/50" />
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="gold-divider" />
            <span className="text-[#D4B56A] text-sm font-semibold uppercase tracking-[0.15em] drop-shadow-sm">
              Trust, Compliance & Governance
            </span>
          </div>
          <h1
            className="text-4xl lg:text-6xl font-bold mb-6 text-white drop-shadow-md"
            style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}
          >
            Certifications & <span className="gold-gradient-text">Verification</span>
          </h1>
          <p className="text-white/85 text-lg max-w-2xl leading-relaxed drop-shadow-sm">
            Vishnu Traders operates with full statutory registrations across food safety, import-export clearance, and tax compliance.
          </p>
        </div>
      </section>

      {/* Trust Strip */}
      <TrustBadgeStrip variant="gold" />

      {/* Certificates Grid */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="space-y-16">
            {certificates.map((cert) => {
              const verifyUrl = `${baseUrl}/verify/${cert.id}`;

              return (
                <div
                  key={cert.id}
                  id={cert.id}
                  className="rounded-3xl border border-gray-200 bg-white p-8 lg:p-12 shadow-lg hover:shadow-xl transition-all duration-300 grid lg:grid-cols-12 gap-8 lg:gap-12 items-center"
                >
                  {/* Left Column: Certificate Document Preview Mockup */}
                  <div className="lg:col-span-4 flex flex-col items-center">
                    <div className="relative w-full aspect-[3/4] max-w-[280px] rounded-2xl bg-gradient-to-b from-gray-50 to-gray-100 border-2 border-dashed border-[#B8934A]/40 flex flex-col items-center justify-center p-6 text-center shadow-inner group">
                      <div className="w-14 h-14 rounded-full bg-[#B8934A]/10 text-[#B8934A] flex items-center justify-center mb-3">
                        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                        </svg>
                      </div>
                      <span className="text-xs font-bold uppercase tracking-wider text-[#1F4A3D]">
                        Document Preview
                      </span>
                      <p className="text-[11px] text-amber-800 mt-2 font-mono bg-amber-50 px-2.5 py-1.5 rounded-lg border border-amber-200 leading-tight">
                        {cert.imagePlaceholder}
                      </p>
                      <span className="mt-4 inline-flex items-center gap-1.5 text-xs text-[#B8934A] font-semibold">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        {cert.status}
                      </span>
                    </div>
                  </div>

                  {/* Middle Column: Details */}
                  <div className="lg:col-span-5 space-y-4">
                    <span className="inline-block text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#1F4A3D]/5 text-[#1F4A3D]">
                      {cert.category}
                    </span>
                    <h2
                      className="text-2xl lg:text-3xl font-bold text-[#1F4A3D]"
                      style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}
                    >
                      {cert.title}
                    </h2>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {cert.description}
                    </p>

                    <div className="pt-4 border-t border-gray-100 space-y-2 text-sm">
                      <div className="flex flex-col sm:flex-row sm:justify-between py-1">
                        <span className="text-gray-400 font-medium">Registration Reference:</span>
                        <span className="font-mono text-gray-800 font-semibold">{cert.certNumber}</span>
                      </div>
                      <div className="flex flex-col sm:flex-row sm:justify-between py-1">
                        <span className="text-gray-400 font-medium">Issuing Body:</span>
                        <span className="text-gray-800 font-medium">{cert.issuingBody}</span>
                      </div>
                      <div className="flex flex-col sm:flex-row sm:justify-between py-1">
                        <span className="text-gray-400 font-medium">Validity:</span>
                        <span className="text-gray-800 font-medium">{cert.validUntil}</span>
                      </div>
                    </div>

                    <div className="pt-2 flex flex-wrap gap-4">
                      <Link
                        href={`/verify/${cert.id}`}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1F4A3D] hover:text-[#B8934A] transition-colors"
                      >
                        <span>Internal Digital Verification Record</span>
                        <span>→</span>
                      </Link>
                      <a
                        href={cert.verificationPortalUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-semibold text-[#8A6A2E] hover:underline"
                      >
                        <span>Govt Verification Portal</span>
                        <span>↗</span>
                      </a>
                    </div>
                  </div>

                  {/* Right Column: Live QR Code Card */}
                  <div className="lg:col-span-3 flex flex-col items-center text-center p-6 rounded-2xl bg-[#FAF3E7] border border-[#B8934A]/25">
                    <QRCodeDisplay value={verifyUrl} size={130} />
                    <span className="mt-4 text-xs font-bold uppercase tracking-wider text-[#1F4A3D]">
                      Scan to Verify
                    </span>
                    <p className="text-[11px] text-gray-500 mt-1">
                      Direct QR link to Vishnu Traders digital verification record.
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Certificate of Analysis Notice */}
          <div className="mt-16 p-8 rounded-3xl bg-[#FAF3E7] border border-[#B8934A]/30 text-center max-w-3xl mx-auto shadow-sm">
            <h3
              className="text-xl font-bold text-[#1F4A3D] mb-2"
              style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}
            >
              Certificate of Analysis (COA) on Every Consignment
            </h3>
            <p className="text-sm text-gray-600 mb-6 leading-relaxed">
              Every dispatched batch of whole or split areca nuts is accompanied by an official Certificate of Analysis (COA) specifying tested moisture, purity percentages, and caliber consistency.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/contact" className="btn-primary text-sm">
                Request Specifications & Sample Lot
              </Link>
              <a
                href="https://wa.me/918839966253?text=Hi%2C%20I%27d%20like%20to%20request%20a%20Certificate%20of%20Analysis%20(COA)%20sample%20sheet."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-sm"
              >
                WhatsApp Desk for Lab Specs
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
