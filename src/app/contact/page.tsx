"use client";

import React, { useState, useEffect, type FormEvent, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import ScrollReveal from "../components/ScrollReveal";
import FAQAccordion from "../components/FAQAccordion";

const contactInfo = [
  {
    title: "Headquarters & Facility",
    description: "R-20 Pologround, Pologround Industrial Estate, Malti Vanaspati, Indore, Madhya Pradesh 452015, India",
    href: "https://maps.app.goo.gl/KKwyo6uoLbBCuSeD7",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
      </svg>
    ),
  },
  {
    title: "Call Direct (Operations)",
    description: "+91 88399 66253 (Harsh Agrawal)",
    href: "tel:+918839966253",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
      </svg>
    ),
  },
  {
    title: "WhatsApp Business Desk",
    description: "+91 88399 66253 (Instant Response)",
    href: "https://wa.me/918839966253?text=Hello%20Vishnu%20Traders%2C%20I%20would%20like%20to%20inquire%20about%20your%20spice%20and%20agricultural%20commodity%20export%20offerings.",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
      </svg>
    ),
  },
  {
    title: "Official Email",
    description: "info@vishnutraders.in",
    href: "mailto:info@vishnutraders.in",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
      </svg>
    ),
  },
];

function ContactFormInner() {
  const searchParams = useSearchParams();
  const [submitted, setSubmitted] = useState(false);
  const [message, setMessage] = useState("");
  const [enquiryType, setEnquiryType] = useState("Export / Bulk Order Inquiry");

  useEffect(() => {
    const prefill = searchParams.get("inquiry_prefill");
    const sample = searchParams.get("sample");
    const region = searchParams.get("region");

    if (prefill) {
      setMessage(prefill);
      setEnquiryType("Export / Bulk Order Inquiry");
    } else if (sample) {
      setMessage(`Hello, I would like to request an official evaluation sample pack for: ${sample}.`);
      setEnquiryType("Request a Sample");
    } else if (region) {
      setMessage(`Hello, I would like to inquire about container dispatch availability and FOB/CIF rates for destination region: ${region}.`);
      setEnquiryType("Export / Bulk Order Inquiry");
    }
  }, [searchParams]);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="glass-card rounded-3xl p-8 lg:p-10 shadow-xl border border-gray-200">
      {submitted ? (
        <div className="text-center py-16 animate-scale-in">
          <div className="w-20 h-20 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-[#1F4A3D]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
            </svg>
          </div>
          <h3
            className="text-2xl font-bold text-[#1F4A3D] mb-3"
            style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}
          >
            Inquiry Received
          </h3>
          <p className="text-gray-600 max-w-md mx-auto text-sm leading-relaxed">
            Thank you for reaching out. Harsh Agrawal or our export operations desk will review your requirements and respond within 1 business day with specifications and FOB/CIF pricing.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="btn-secondary mt-8 text-xs"
          >
            Submit Another Inquiry
          </button>
        </div>
      ) : (
        <>
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3
                className="text-xl font-bold text-[#1F4A3D]"
                style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}
              >
                Official RFQ & Trade Inquiry
              </h3>
              <p className="text-gray-400 text-xs mt-0.5">
                For export orders, private labelling, custom drum-roasting, and container stuffing.
              </p>
            </div>
            <span className="hidden sm:inline-block text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-[#FAF3E7] text-[#8A6A2E] border border-[#B8934A]/30">
              Direct Desk
            </span>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Honeypot */}
            <input
              type="text"
              name="_honeypot"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              style={{ display: "none" }}
            />

            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-2">
                  Full Name / Contact Person *
                </label>
                <input
                  required
                  type="text"
                  placeholder="e.g. John Doe"
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-800 placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#B8934A]/30 focus:border-[#B8934A] transition-all bg-gray-50/50 focus:bg-white"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-2">
                  Phone / WhatsApp Number *
                </label>
                <input
                  required
                  type="tel"
                  placeholder="+91 XXXXX XXXXX or Intl Code"
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-800 placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#B8934A]/30 focus:border-[#B8934A] transition-all bg-gray-50/50 focus:bg-white"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-2">
                  Corporate Email *
                </label>
                <input
                  required
                  type="email"
                  placeholder="buyer@company.com"
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-800 placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#B8934A]/30 focus:border-[#B8934A] transition-all bg-gray-50/50 focus:bg-white"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-2">
                  Company / Organization
                </label>
                <input
                  type="text"
                  placeholder="Company or Trading Entity Name"
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-800 placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#B8934A]/30 focus:border-[#B8934A] transition-all bg-gray-50/50 focus:bg-white"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-2">
                  Destination Country / Discharge Port
                </label>
                <input
                  type="text"
                  placeholder="e.g. Jebel Ali, Rotterdam, Singapore..."
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-800 placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#B8934A]/30 focus:border-[#B8934A] transition-all bg-gray-50/50 focus:bg-white"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-2">
                  Inquiry Nature
                </label>
                <select
                  value={enquiryType}
                  onChange={(e) => setEnquiryType(e.target.value)}
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#B8934A]/30 focus:border-[#B8934A] transition-all bg-white"
                >
                  <option>Export / Bulk Order Inquiry</option>
                  <option>Request a Sample</option>
                  <option>Private Labelling / Custom Roasting</option>
                  <option>Compliance & Laboratory Spec Request</option>
                  <option>General Trading Query</option>
                </select>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Detailed Specifications / Message *
                </label>
                <span className="text-[10px] text-gray-400">Target quantity, purity, packaging</span>
              </div>
              <textarea
                required
                rows={6}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="List your required commodities, target volume (e.g. 500kg, 2 MT, 1 FCL), purity requirements, and target shipping schedule..."
                className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-800 placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#B8934A]/30 focus:border-[#B8934A] transition-all resize-none bg-gray-50/50 focus:bg-white leading-relaxed"
              />
            </div>

            <button type="submit" className="btn-primary w-full text-base group !py-3.5">
              <span>Send Official Trade Inquiry</span>
              <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
              </svg>
            </button>
          </form>
        </>
      )}
    </div>
  );
}

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-gradient-to-br from-[#1F4A3D] via-[#1a3f34] to-[#0A1B15] overflow-hidden text-white">
        <div className="absolute top-20 right-[10%] w-[400px] h-[400px] rounded-full bg-[#B8934A]/10 blur-3xl" />
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="gold-divider" />
            <span className="text-[#B8934A] text-sm font-semibold uppercase tracking-[0.15em]">
              Trade Inquiries & Global Desk
            </span>
          </div>
          <h1
            className="text-4xl lg:text-6xl font-bold mb-6"
            style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}
          >
            Get in <span className="gold-gradient-text">Touch</span>
          </h1>
          <p className="text-white/70 text-lg max-w-2xl leading-relaxed">
            Looking for a dependable Indian spice or agri-commodity exporter? Reach out for commodity availability, crop harvest rates, or container logistics.
          </p>
        </div>
      </section>

      {/* Info & Interactive Form */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left – Contact Information */}
            <div className="lg:col-span-5 space-y-8">
              <ScrollReveal animation="fade-up">
                <div>
                  <h2 className="section-heading text-2xl lg:text-3xl mb-4">
                    Headquarters & Processing Facility
                  </h2>
                  <p className="text-gray-500 leading-relaxed text-sm">
                    Situated in Indore&apos;s Pologround Industrial Estate — the central processing node connecting Malwa&apos;s spice fields to India&apos;s western seaports.
                  </p>
                </div>
              </ScrollReveal>

              <div className="space-y-4">
                {contactInfo.map((info, idx) => (
                  <ScrollReveal key={info.title} animation="fade-up" delay={idx * 80}>
                    <div className="flex items-start gap-4 p-4 rounded-2xl border border-gray-100 hover:border-[#B8934A]/30 transition-colors bg-[#FAFAF8]">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#EAF3F0] to-[#CBE0D8] flex items-center justify-center text-[#1F4A3D] shrink-0">
                        {info.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-[#1F4A3D] text-sm">
                          {info.title}
                        </h3>
                        {info.href ? (
                          <a
                            href={info.href}
                            target={info.href.startsWith("http") ? "_blank" : undefined}
                            rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                            className="text-gray-500 text-xs mt-0.5 hover:text-[#B8934A] transition-colors block leading-relaxed"
                          >
                            {info.description}
                          </a>
                        ) : (
                          <p className="text-gray-500 text-xs mt-0.5 leading-relaxed">{info.description}</p>
                        )}
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>

              {/* Google Maps Location */}
              <ScrollReveal animation="fade-up" delay={300}>
                <div className="rounded-2xl overflow-hidden border border-gray-200 h-60 shadow-sm relative group">
                  <iframe
                    title="Vishnu Traders location — Pologround Industrial Estate, Indore"
                    src="https://www.google.com/maps/embed/v1/place?q=Pologround+Industrial+Estate+Indore+Madhya+Pradesh&key=AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                  <div className="absolute bottom-2 right-2 z-10 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-gray-200 text-xs font-semibold text-[#1F4A3D]">
                    <a
                      href="https://maps.app.goo.gl/KKwyo6uoLbBCuSeD7"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#B8934A] transition-colors"
                    >
                      Open in Maps ↗
                    </a>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Right – Form with Pre-fill */}
            <div className="lg:col-span-7">
              <ScrollReveal animation="fade-up" delay={150}>
                <Suspense fallback={<div className="p-12 text-center text-gray-400">Loading inquiry form...</div>}>
                  <ContactFormInner />
                </Suspense>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="py-24 lg:py-32 bg-[#F5F0E8] border-t border-gray-200">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal animation="fade-up">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="gold-divider" />
                <span className="text-[#B8934A] text-sm font-semibold uppercase tracking-[0.15em]">
                  Trade FAQ
                </span>
              </div>
              <h2 className="section-heading text-3xl lg:text-4xl mb-4">
                Frequently Asked Export Questions
              </h2>
              <p className="text-gray-600 text-lg">
                Essential answers regarding Minimum Order Quantities, laboratory testing, port dispatches, and private labelling.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={150}>
            <FAQAccordion />
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
