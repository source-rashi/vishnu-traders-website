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
  officialPortalUrl: string;
}

const certDatabase: Record<string, CertData> = {
  "fssai-central": {
    title: "FSSAI Central License",
    category: "Food Safety and Standards Authority of India",
    certNumber: "FSSAI-TODO-XXXXXXXXXXXXXX",
    holder: "Vishnu Traders (Harsh Agrawal)",
    facilityAddress: "R-20 Pologround Industrial Estate, Malti Vanaspati, Indore, MP 452015",
    issuingBody: "Food Safety and Standards Authority of India (FSSAI)",
    issueDate: "Verified & Regulatory Ongoing",
    validUntil: "Active / Regulatory Renewal Window",
    status: "ACTIVE & COMPLIANT",
    scope: "Handling, Grading, Sizing, Drum Roasting, Storage, and Wholesale Distribution of Areca Nut (Betel Nut / Supari) Commodities.",
    officialPortalUrl: "https://foscos.fssai.gov.in/",
  },
  "iec-code": {
    title: "IEC (Import Export Code)",
    category: "Directorate General of Foreign Trade (DGFT)",
    certNumber: "IEC-TODO-XXXXXXXXXX",
    holder: "Vishnu Traders",
    facilityAddress: "Aash Chamber, Siyaganj, Indore, MP 452007",
    issuingBody: "Directorate General of Foreign Trade (DGFT), Ministry of Commerce & Industry",
    issueDate: "Verified Exporter-Importer Code",
    validUntil: "Active / Annual Profile Renewal Window",
    status: "ACTIVE & COMPLIANT",
    scope: "Direct International Procurement and Importation of Areca Nut Commodities across Global Producing Regions (Indonesia, Thailand, Myanmar, Sri Lanka).",
    officialPortalUrl: "https://dgft.gov.in/",
  },
  "gst-registration": {
    title: "GST Registration Certificate",
    category: "Department of Revenue, Ministry of Finance",
    certNumber: "GSTIN-23XXXXXXXXXXXZX",
    holder: "Vishnu Traders",
    facilityAddress: "Aash Chamber, Siyaganj, Indore, MP 452007",
    issuingBody: "Central Board of Indirect Taxes and Customs (CBIC) & MP State Commercial Tax Department",
    issueDate: "Verified Tax Entity",
    validUntil: "Active & Verified",
    status: "ACTIVE & COMPLIANT",
    scope: "Pan-India Institutional Supply, Interstate Transit Documentation, and B2B Invoicing for Areca Nut Commodities.",
    officialPortalUrl: "https://services.gst.gov.in/services/searchtp",
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
        <div className="bg-gradient-to-r from-[#1F4A3D] via-[#143228] to-[#0A1B15] p-8 text-center text-white relative">
          <div className="mx-auto w-12 h-12 mb-3">
            <VishnuTradersLogo variant="icon" className="w-full h-full" />
          </div>
          <p className="text-[10px] uppercase tracking-[0.25em] text-[#D4B56A] font-semibold">
            Official Digital Verification Record
          </p>
          <h1
            className="text-2xl sm:text-3xl font-bold mt-1"
            style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}
          >
            Certificate Verification
          </h1>
          <p className="text-xs text-white/70 mt-1">
            Vishnu Traders · Since 1996 · Indore, MP, India
          </p>

          {/* Verification Badge */}
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
                Registration / Ref No.
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
                {cert.validUntil}
              </span>
            </div>
          </div>

          <div className="bg-[#FAF3E7] p-5 rounded-2xl border border-[#B8934A]/20">
            <span className="block text-xs uppercase tracking-wider font-bold text-[#8A6A2E] mb-1">
              Registered Operating Address
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
              ← Back to Certifications Overview
            </Link>
            <a
              href={cert.officialPortalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-xs !py-2.5 !px-5 flex items-center gap-1.5"
            >
              <span>Verify on Official Govt Portal</span>
              <span>↗</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
