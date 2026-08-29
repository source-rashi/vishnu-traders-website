"use client";

import React, { useState, type FormEvent } from "react";

export default function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) return;
    setSubscribed(true);
  };

  if (subscribed) {
    return (
      <div className="p-4 rounded-xl bg-white/10 border border-[#B8934A]/40 text-left animate-scale-in">
        <div className="flex items-center gap-2 text-[#D4B56A] text-xs font-bold mb-1">
          <span>✓</span>
          <span>Subscribed to Market Intelligence</span>
        </div>
        <p className="text-[11px] text-white/70">
          You will receive our regular areca nut mandi rates and origin harvest bulletins.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-2">
      <div className="flex flex-col sm:flex-row gap-2">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your corporate email"
          className="bg-white/10 text-white placeholder:text-white/40 text-xs px-3.5 py-2.5 rounded-xl border border-white/15 focus:outline-none focus:border-[#B8934A] focus:bg-white/20 transition-all flex-1"
        />
        <button
          type="submit"
          className="btn-primary text-xs !py-2.5 !px-4 whitespace-nowrap"
        >
          Subscribe
        </button>
      </div>
      <p className="text-[10px] text-white/40 text-left">
        Monthly areca nut market price updates & origin harvest bulletins. No spam.
      </p>
    </form>
  );
}
