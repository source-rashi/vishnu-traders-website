import type { Metadata } from "next";
import Link from "next/link";
import QRCodeDisplay from "../components/QRCodeDisplay";

export const metadata: Metadata = {
  title: "Certifications & Compliance",
  description:
    "Official quality certifications, food safety standards, and export compliance documents for Vishnu Traders. Verify certificate validity with instant QR verification.",
};

const certificates = [
  {
    id: "cert-1",
    title: "Food Safety & Standards Authority Registration",
    shortName: "FSSAI Food Safety Compliance",
    category: "National Food Safety",
    certNumber: "FSSAI-TODO-XXXXXXXXXXXXXX",
    issuingBody: "Food Safety and Standards Authority of India (FSSAI) [TODO: Confirm Body]",
    validUntil: "2027-12-31 [TODO]",
    description:
      "Authorizes hygienic processing, warehousing, and wholesale trade of spices, pulses, and agricultural commodities under standard food safety frameworks.",
    status: "Active & Compliant",
    imagePlaceholder: "[TODO: replace with actual FSSAI certificate scan / PDF]",
  },
  {
    id: "cert-2",
    title: "Spices Board / APEDA Export Registration (RCMC)",
    shortName: "Export Registration (RCMC)",
    category: "Export & Commodity Board",
    certNumber: "EXP-REG-TODO-XXXXXXXX",
    issuingBody: "Spices Board of India / APEDA [TODO: Confirm Issuing Authority]",
    validUntil: "2028-03-31 [TODO]",
    description:
      "Official exporter registration certificate certifying export-grade commodities, adherence to maximum residue limits (MRLs), and customs clearance eligibility.",
    status: "Active & Compliant",
    imagePlaceholder: "[TODO: replace with actual Export / RCMC certificate scan / PDF]",
  },
];

export default function CertificationsPage() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://vishnutraders.in";

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-gradient-to-br from-[#1F4A3D] via-[#1a3f34] to-[#0A1B15] overflow-hidden text-white">
        <div className="absolute top-20 right-[10%] w-[450px] h-[450px] rounded-full bg-[#B8934A]/10 blur-3xl" />
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="gold-divider" />
            <span className="text-[#B8934A] text-sm font-semibold uppercase tracking-[0.15em]">
              Trust & Compliance
            </span>
          </div>
          <h1
            className="text-4xl lg:text-6xl font-bold mb-6"
            style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}
          >
            Certifications & <span className="gold-gradient-text">Verification</span>
          </h1>
          <p className="text-white/70 text-lg max-w-2xl leading-relaxed">
            Every shipment leaving our Pologround, Indore facility complies with established Indian and international export protocols. Scan any QR code below to verify credentials.
          </p>
        </div>
      </section>

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
                  {/* Left Column: Certificate Document Mockup */}
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
                      <p className="text-[11px] text-amber-700 mt-2 font-mono bg-amber-50 px-2.5 py-1.5 rounded-lg border border-amber-200 leading-tight">
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
                        <span className="text-gray-400 font-medium">Certificate No.:</span>
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

                    <div className="pt-2">
                      <Link
                        href={`/verify/${cert.id}`}
                        className="inline-flex items-center gap-2 text-sm font-semibold text-[#B8934A] hover:text-[#8A6A2E] transition-colors"
                      >
                        Open Digital Verification Page →
                      </Link>
                    </div>
                  </div>

                  {/* Right Column: Live QR Code Card */}
                  <div className="lg:col-span-3 flex flex-col items-center text-center p-6 rounded-2xl bg-[#F5F0E8] border border-[#B8934A]/20">
                    <QRCodeDisplay value={verifyUrl} size={130} />
                    <span className="mt-4 text-xs font-bold uppercase tracking-wider text-[#1F4A3D]">
                      Scan to Verify
                    </span>
                    <p className="text-[11px] text-gray-500 mt-1">
                      Direct link to Vishnu Traders official digital certificate record.
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Compliance Notice */}
          <div className="mt-16 p-8 rounded-3xl bg-[#EAF3F0] border border-[#3F7C67]/30 text-center max-w-3xl mx-auto">
            <h3 className="text-lg font-bold text-[#1F4A3D] mb-2" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
              Need Batch-Specific Lab Certificates?
            </h3>
            <p className="text-sm text-gray-600 mb-6 leading-relaxed">
              We provide Phytosanitary Certificates, Certificate of Analysis (COA), Fumigation Certificates, and Non-GMO declarations with individual export consignments upon request.
            </p>
            <Link href="/contact" className="btn-primary text-sm">
              Request Certificate Documentation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
