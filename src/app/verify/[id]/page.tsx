import Link from "next/link";
import { notFound } from "next/navigation";
import VishnuTradersLogo from "../../components/VishnuTradersLogo";

interface CertData {
  title: string;
  category: string;
  certNumber: string;
  holder: string;
  facilityAddress: string;
  issuingBody: string;
  issueDate: string;
  validUntil: string;
  status: string;
  scope: string;
}

const certDatabase: Record<string, CertData> = {
  "cert-1": {
    title: "Food Safety and Standards Registration",
    category: "National Food Safety Authority",
    certNumber: "FSSAI-TODO-XXXXXXXXXXXXXX",
    holder: "Vishnu Traders (Harsh Agrawal)",
    facilityAddress: "R-20 Pologround Industrial Estate, Malti Vanaspati, Indore, MP 452015",
    issuingBody: "Food Safety and Standards Authority of India (FSSAI) [TODO: Confirm]",
    issueDate: "2022-01-15 [TODO]",
    validUntil: "2027-12-31 [TODO]",
    status: "ACTIVE & VALID",
    scope: "Handling, Sortex Cleaning, Drum Roasting, Packaging and Wholesale Storage of Spices, Pulses, and Food Commodities.",
  },
  "cert-2": {
    title: "Exporter Registration Certificate (RCMC)",
    category: "Export Promotion & Commodity Board",
    certNumber: "EXP-REG-TODO-XXXXXXXX",
    holder: "Vishnu Traders",
    facilityAddress: "R-20 Pologround Industrial Estate, Malti Vanaspati, Indore, MP 452015",
    issuingBody: "Spices Board of India / APEDA [TODO: Confirm]",
    issueDate: "2021-04-01 [TODO]",
    validUntil: "2028-03-31 [TODO]",
    status: "ACTIVE & VALID",
    scope: "Merchant & Processing Exporter for Whole Spices, Ground Spices, Oilseeds, and Agricultural Commodities.",
  },
};

export default async function VerifyPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const cert = certDatabase[id];

  if (!cert) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#F5F0E8] pt-32 pb-24 px-6 lg:px-8 flex items-center justify-center">
      <div className="max-w-2xl w-full bg-white rounded-3xl shadow-2xl border border-[#B8934A]/30 overflow-hidden">
        {/* Certificate Header Banner */}
        <div className="bg-gradient-to-r from-[#1F4A3D] via-[#1a3f34] to-[#0A1B15] p-8 text-center text-white relative">
          <div className="mx-auto w-12 h-12 mb-3">
            <VishnuTradersLogo variant="icon" className="w-full h-full" />
          </div>
          <p className="text-[10px] uppercase tracking-[0.25em] text-[#D4B56A] font-semibold">
            Official Digital Verification Portal
          </p>
          <h1
            className="text-2xl sm:text-3xl font-bold mt-1"
            style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}
          >
            Certificate Verification
          </h1>
          <p className="text-xs text-white/60 mt-1">
            Vishnu Traders · Indore, Madhya Pradesh, India
          </p>

          {/* Verification Badge Stamp */}
          <div className="mt-5 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs font-bold tracking-wide">
            <svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
            </svg>
            <span>{cert.status}</span>
          </div>
        </div>

        {/* Certificate Details */}
        <div className="p-8 sm:p-10 space-y-6">
          <div className="border-b border-gray-100 pb-4">
            <span className="text-xs uppercase tracking-wider font-semibold text-[#B8934A]">
              {cert.category}
            </span>
            <h2
              className="text-xl sm:text-2xl font-bold text-[#1F4A3D] mt-1"
              style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}
            >
              {cert.title}
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 text-sm">
            <div className="bg-gray-50 p-4 rounded-xl">
              <span className="block text-xs text-gray-400 uppercase tracking-wider font-medium">
                Certificate Number
              </span>
              <span className="block font-mono text-gray-900 font-bold mt-0.5">
                {cert.certNumber}
              </span>
            </div>

            <div className="bg-gray-50 p-4 rounded-xl">
              <span className="block text-xs text-gray-400 uppercase tracking-wider font-medium">
                Registered Holder
              </span>
              <span className="block text-gray-900 font-semibold mt-0.5">
                {cert.holder}
              </span>
            </div>

            <div className="bg-gray-50 p-4 rounded-xl">
              <span className="block text-xs text-gray-400 uppercase tracking-wider font-medium">
                Issuing Body
              </span>
              <span className="block text-gray-900 font-medium mt-0.5">
                {cert.issuingBody}
              </span>
            </div>

            <div className="bg-gray-50 p-4 rounded-xl">
              <span className="block text-xs text-gray-400 uppercase tracking-wider font-medium">
                Validity Window
              </span>
              <span className="block text-gray-900 font-medium mt-0.5">
                {cert.issueDate} → {cert.validUntil}
              </span>
            </div>
          </div>

          <div className="bg-[#FAF3E7] p-5 rounded-2xl border border-[#B8934A]/20">
            <span className="block text-xs uppercase tracking-wider font-bold text-[#8A6A2E] mb-1">
              Registered Facility Address
            </span>
            <p className="text-xs sm:text-sm text-gray-800">
              {cert.facilityAddress}
            </p>
          </div>

          <div className="space-y-1">
            <span className="block text-xs uppercase tracking-wider font-bold text-gray-400">
              Certified Scope
            </span>
            <p className="text-sm text-gray-600 leading-relaxed">
              {cert.scope}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="pt-6 border-t border-gray-100 flex flex-col sm:flex-row gap-3 justify-between items-center">
            <Link
              href="/certifications"
              className="text-xs sm:text-sm text-gray-500 hover:text-[#1F4A3D] font-medium"
            >
              ← Back to All Certifications
            </Link>
            <Link
              href="/contact"
              className="btn-primary text-xs !py-2.5 !px-6"
            >
              Inquire About Shipments
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
