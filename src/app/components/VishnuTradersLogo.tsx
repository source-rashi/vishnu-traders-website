/**
 * VishnuTradersLogo — Production SVG Logo Component
 *
 * Two variants:
 *  - "icon"  : compact icon mark (globe + V), for navbar/favicon
 *  - "full"  : full lockup (icon + wordmark + tagline), for homepage hero/footer
 *
 * ⚠️  MANUAL ACTION REQUIRED: Get visual sign-off from the client/designer
 *      before treating this SVG as the permanent brand mark.
 *
 * Brand tokens: gold #B8934A / #C2A159 / #D4B56A, green #1F4A3D / #3F7C67 / #0A1B15
 */

interface LogoProps {
  variant?: "icon" | "full";
  /** className applied to the root <svg> or <div> wrapper */
  className?: string;
  /** For icon variant: override icon size in px (default 40) */
  iconSize?: number;
  /** invert colour scheme for dark backgrounds (default false = light-bg) */
  dark?: boolean;
}

export function VishnuTradersLogo({
  variant = "icon",
  className = "",
  iconSize = 40,
  dark = true,
}: LogoProps) {
  if (variant === "icon") {
    return <IconMark size={iconSize} className={className} dark={dark} />;
  }
  return <FullLockup className={className} dark={dark} />;
}

/* ─── Icon mark ─────────────────────────────────────────────────────────── */

function IconMark({
  size,
  className,
  dark,
}: {
  size: number;
  className?: string;
  dark: boolean;
}) {
  const bg = dark ? "#0A2E24" : "#EAF3F0";
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Vishnu Traders logo mark"
      className={className}
    >
      {/* ── Circular background ── */}
      <circle cx="24" cy="24" r="23" fill={bg} />

      {/* ── Globe — meridians & parallels ── */}
      {/* Outer ring */}
      <circle cx="24" cy="24" r="18" stroke="#3F7C67" strokeWidth="1.2" fill="none" />
      {/* Vertical ellipse (longitude) */}
      <ellipse cx="24" cy="24" rx="7" ry="18" stroke="#3F7C67" strokeWidth="0.8" fill="none" />
      {/* Horizontal lines (parallels) */}
      <line x1="6" y1="24" x2="42" y2="24" stroke="#3F7C67" strokeWidth="0.8" />
      <path d="M8 17 Q24 21 40 17" stroke="#3F7C67" strokeWidth="0.7" fill="none" />
      <path d="M8 31 Q24 27 40 31" stroke="#3F7C67" strokeWidth="0.7" fill="none" />

      {/* ── Gold "V" ── */}
      {/* Main V strokes — thicker, centered */}
      <path
        d="M13 12 L24 32 L35 12"
        stroke="#B8934A"
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      {/* Inner highlight on V */}
      <path
        d="M15 12 L24 29 L33 12"
        stroke="#D4B56A"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        opacity="0.6"
      />

      {/* ── Leaf / sprig accent at top of V ── */}
      <ellipse
        cx="24"
        cy="10"
        rx="3.5"
        ry="1.6"
        fill="#B8934A"
        transform="rotate(-10 24 10)"
        opacity="0.9"
      />
      <ellipse
        cx="24"
        cy="10"
        rx="3.5"
        ry="1.6"
        fill="#C2A159"
        transform="rotate(10 24 10)"
        opacity="0.7"
      />

      {/* ── Thin gold rim ── */}
      <circle cx="24" cy="24" r="23" stroke="#B8934A" strokeWidth="0.8" fill="none" opacity="0.4" />
    </svg>
  );
}

/* ─── Full lockup ────────────────────────────────────────────────────────── */

function FullLockup({ className, dark }: { className?: string; dark: boolean }) {
  const wordmarkColor = dark ? "#FFFFFF" : "#1F4A3D";
  const taglineColor = dark ? "#B8934A" : "#8A6A2E";

  return (
    <div className={`flex flex-col items-center gap-4 ${className}`}>
      {/* Icon */}
      <IconMark size={80} dark={dark} />

      {/* Wordmark */}
      <div className="text-center">
        <div
          className="text-3xl font-bold tracking-[0.12em] uppercase"
          style={{
            fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif",
            color: wordmarkColor,
            letterSpacing: "0.14em",
          }}
        >
          Vishnu Traders
        </div>

        {/* Decorative rule */}
        <div className="flex items-center gap-3 justify-center my-2">
          <div className="h-px w-10 bg-[#B8934A] opacity-60" />
          <div className="w-1.5 h-1.5 rounded-full bg-[#B8934A] opacity-80" />
          <div className="h-px w-10 bg-[#B8934A] opacity-60" />
        </div>

        {/* Tagline */}
        <p
          className="text-[11px] font-semibold uppercase tracking-[0.22em]"
          style={{ color: taglineColor }}
        >
          Since 1996 &bull; Global Trading &bull; Pan&#8209;India Network
        </p>
      </div>
    </div>
  );
}

export default VishnuTradersLogo;
