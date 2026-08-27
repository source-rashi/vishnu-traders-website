"use client";

import { useState, type FormEvent } from "react";

const contactInfo = [
  {
    title: "Visit Us",
    description: "R-20 Pologround, Pologround Industrial Estate, Malti Vanaspati, Indore, Madhya Pradesh 452015",
    href: "https://maps.app.goo.gl/KKwyo6uoLbBCuSeD7",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
      </svg>
    ),
  },
  {
    title: "Call Us",
    description: "+91 88399 66253 (Harsh Agrawal)",
    href: "tel:+918839966253",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
      </svg>
    ),
  },
  {
    title: "WhatsApp",
    /* TODO: Confirm +91 8839966253 is the business WhatsApp number before go-live */
    description: "+91 88399 66253",
    href: "https://wa.me/918839966253",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
      </svg>
    ),
  },
  {
    title: "Email Us",
    /* TODO: Replace with confirmed business email address */
    description: "info@vishnutraders.in",
    href: "mailto:info@vishnutraders.in",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
      </svg>
    ),
  },
  {
    title: "Business Hours",
    description: "Mon – Sat: 9:00 AM – 7:00 PM IST",
    href: null,
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
    ),
  },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: Wire to a real email backend (Formspree, Resend, or server action)
    // with the confirmed business email before go-live.
    setSubmitted(true);
  }

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-gradient-to-br from-[#1F4A3D] via-[#1a3f34] to-[#0A1B15] overflow-hidden">
        <div className="absolute top-20 right-[10%] w-[400px] h-[400px] rounded-full bg-[#B8934A]/5 blur-3xl" />
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="gold-divider" />
            <span className="text-[#B8934A] text-sm font-semibold uppercase tracking-[0.15em]">
              Contact
            </span>
          </div>
          <h1
            className="text-4xl lg:text-6xl font-bold text-white mb-6"
            style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}
          >
            Get in <span className="gold-gradient-text">Touch</span>
          </h1>
          <p className="text-white/60 text-lg max-w-2xl leading-relaxed">
            Looking for a reliable spice or agri-commodity export partner? We'd love
            to hear from you. Reach out for bulk pricing, samples, or export inquiries.
          </p>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Left – Info */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="section-heading text-2xl lg:text-3xl mb-4">
                  Contact Information
                </h2>
                <p className="text-gray-500 leading-relaxed">
                  Based in Indore's Pologround Industrial Estate — one of central India's
                  key agri-processing hubs. Reach us through any channel below.
                </p>
              </div>

              <div className="space-y-5">
                {contactInfo.map((info) => (
                  <div key={info.title} className="flex items-start gap-4">
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
                          className="text-gray-500 text-sm mt-0.5 hover:text-[#B8934A] transition-colors"
                        >
                          {info.description}
                        </a>
                      ) : (
                        <p className="text-gray-500 text-sm mt-0.5">{info.description}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Google Maps Embed */}
              <div className="rounded-2xl overflow-hidden border border-gray-100 h-64 shadow-sm">
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
              </div>
              {/* Fallback if Maps API key not set */}
              <p className="text-xs text-gray-400 -mt-4">
                <a
                  href="https://maps.app.goo.gl/KKwyo6uoLbBCuSeD7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-[#B8934A] transition-colors"
                >
                  Open in Google Maps ↗
                </a>
              </p>
            </div>

            {/* Right – Form */}
            <div className="lg:col-span-3">
              <div className="glass-card rounded-3xl p-8 lg:p-10">
                {submitted ? (
                  <div className="text-center py-16">
                    <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                      <svg className="w-10 h-10 text-[#1F4A3D]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                      </svg>
                    </div>
                    <h3
                      className="text-2xl font-bold text-[#1F4A3D] mb-3"
                      style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}
                    >
                      Thank You!
                    </h3>
                    <p className="text-gray-500 max-w-md mx-auto">
                      Your inquiry has been received. Harsh Agrawal or a member of our team
                      will get back to you within 1 business day.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="btn-secondary mt-8 text-sm"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <>
                    <h3
                      className="text-xl font-bold text-[#1F4A3D] mb-2"
                      style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}
                    >
                      Send Us a Message
                    </h3>
                    <p className="text-gray-400 text-sm mb-6">
                      For export inquiries, bulk quotes, and B2B partnerships.
                    </p>
                    <form onSubmit={handleSubmit} className="space-y-5">
                      {/* Honeypot anti-spam field — hidden from real users */}
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
                          <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                            Full Name *
                          </label>
                          <input
                            required
                            type="text"
                            placeholder="Your name"
                            className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-800 placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#B8934A]/30 focus:border-[#B8934A] transition-all"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                            Phone / WhatsApp *
                          </label>
                          <input
                            required
                            type="tel"
                            placeholder="+91 XXXXX XXXXX"
                            className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-800 placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#B8934A]/30 focus:border-[#B8934A] transition-all"
                          />
                        </div>
                      </div>
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                            Email Address
                          </label>
                          <input
                            type="email"
                            placeholder="you@company.com"
                            className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-800 placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#B8934A]/30 focus:border-[#B8934A] transition-all"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                            Company / Organisation
                          </label>
                          <input
                            type="text"
                            placeholder="Your company name"
                            className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-800 placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#B8934A]/30 focus:border-[#B8934A] transition-all"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                          Enquiry Type
                        </label>
                        <select
                          className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#B8934A]/30 focus:border-[#B8934A] transition-all bg-white"
                        >
                          <option>Export / Bulk Order Inquiry</option>
                          <option>Request a Sample</option>
                          <option>Pricing & MOQ</option>
                          <option>Certification / Compliance Query</option>
                          <option>General Enquiry</option>
                          <option>Partnership / Distribution</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                          Message *
                        </label>
                        <textarea
                          required
                          rows={5}
                          placeholder="Tell us about your requirements — product, quantity, destination country, timeline..."
                          className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-800 placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#B8934A]/30 focus:border-[#B8934A] transition-all resize-none"
                        />
                      </div>
                      <button type="submit" className="btn-primary w-full text-base">
                        Send Message
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                        </svg>
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 lg:py-32 bg-[#F5F0E8]">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="gold-divider" />
            </div>
            <h2 className="section-heading text-3xl lg:text-4xl mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Common questions from our international buyers and B2B partners.
            </p>
          </div>
          <div className="space-y-4">
            {[
              {
                q: "What is the minimum order quantity (MOQ) for export?",
                a: "For most spice categories, the MOQ is 500 kg per product. For certain premium spices (e.g. saffron, cardamom), the MOQ may vary. Contact us for a product-specific quote.",
              },
              {
                q: "Which certifications do you hold?",
                a: "We hold the required certifications for export under Indian food safety and trade norms. Specific certificate details are available on our Certifications page. Contact us if you need documentation for customs or compliance purposes.",
              },
              {
                q: "What destinations do you currently export to?",
                a: "We export to markets across the Middle East, Southeast Asia, Europe, and North America. For new markets, please reach out and we'll advise on regulatory requirements and logistics.",
              },
              {
                q: "Can you provide product samples before a bulk order?",
                a: "Yes — we offer samples (typically 100–500 g) for approved buyers. Shipping charges apply. Request a sample through our contact form above.",
              },
              {
                q: "What packaging options are available?",
                a: "We offer flexible packaging from 100 g retail pouches up to 50 kg woven bags for export. Custom branding and private-label packaging is available for qualified buyers.",
              },
              {
                q: "How is quality controlled?",
                a: "All processing is done in-house at our Pologround facility. We check moisture content, colour, aroma, and foreign matter at every stage — from raw material intake through to final packaging. See our Processing page for the full flow.",
              },
            ].map((faq, i) => (
              <div key={i} className="glass-card rounded-xl p-6">
                <h3 className="font-semibold text-[#1F4A3D] mb-2">{faq.q}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
