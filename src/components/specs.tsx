"use client";

import { PRODUCT } from "@/lib/constants";

/* Custom SVG icons for each spec */
const SpecIcons: Record<string, React.ReactNode> = {
  Berat: (
    <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8">
      <rect x="8" y="14" width="24" height="20" rx="4" stroke="currentColor" strokeWidth="1.5" opacity="0.6" />
      <rect x="6" y="12" width="28" height="4" rx="2" fill="currentColor" opacity="0.4" />
      <text x="20" y="28" textAnchor="middle" fill="currentColor" fontSize="10" fontWeight="bold">500</text>
    </svg>
  ),
  Asal: (
    <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8">
      <circle cx="20" cy="20" r="12" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
      <ellipse cx="20" cy="20" rx="8" ry="4" stroke="currentColor" strokeWidth="1.2" opacity="0.4" />
      <path d="M12 20c0 4 3 8 8 8s8-4 8-8" stroke="currentColor" strokeWidth="1.2" opacity="0.4" />
      <circle cx="20" cy="18" r="3" fill="currentColor" opacity="0.6" />
    </svg>
  ),
  Penghantaran: (
    <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8">
      <rect x="4" y="16" width="26" height="12" rx="3" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
      <circle cx="12" cy="30" r="4" stroke="currentColor" strokeWidth="1.5" opacity="0.6" />
      <circle cx="12" cy="30" r="2" fill="currentColor" opacity="0.4" />
      <circle cx="24" cy="30" r="4" stroke="currentColor" strokeWidth="1.5" opacity="0.6" />
      <circle cx="24" cy="30" r="2" fill="currentColor" opacity="0.4" />
      <path d="M30 22h4l4 4v4h-4" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
    </svg>
  ),
  Penyimpanan: (
    <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8">
      <rect x="8" y="6" width="24" height="28" rx="4" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
      <rect x="12" y="10" width="16" height="6" rx="2" fill="currentColor" opacity="0.2" />
      <path d="M16 16v14M24 16v14" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
      <path d="M14 20h12M14 24h12M14 28h12" stroke="currentColor" strokeWidth="0.8" opacity="0.2" />
      <path d="M20 4v8M16 6l4 3 4-3M16 10l4-3 4 3" stroke="#6BB5E0" strokeWidth="1" opacity="0.7" />
    </svg>
  ),
  "Jangka Hayat": (
    <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8">
      <circle cx="20" cy="20" r="12" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
      <path d="M20 12v8l5 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.8" />
      <circle cx="20" cy="20" r="2" fill="currentColor" opacity="0.6" />
      <text x="20" y="37" textAnchor="middle" fill="currentColor" fontSize="6" opacity="0.5">6 BLN</text>
    </svg>
  ),
  Halal: (
    <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8">
      <circle cx="20" cy="20" r="12" fill="currentColor" opacity="0.1" />
      <circle cx="20" cy="20" r="12" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
      <path d="M14 20l4 4 8-8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.9" />
    </svg>
  ),
};

export default function Specs() {
  return (
    <section className="relative bg-brand-bg py-24 lg:py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(232,168,124,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(232,168,124,0.5) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-semibold text-brand-warm/50 uppercase tracking-[0.25em]">
            Apa Yang Anda Dapat
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-cream mt-4">
            Spesifikasi
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {PRODUCT.specs.map((spec, i) => (
            <div
              key={i}
              className="group bg-brand-cream/[0.03] border border-brand-warm/10 rounded-2xl p-5 text-center hover:bg-brand-cream/[0.06] hover:border-brand-warm/25 transition-all duration-500"
            >
              <div className="text-brand-warm/70 mb-3 group-hover:scale-110 group-hover:text-brand-warm transition-all duration-500 inline-block">
                {SpecIcons[spec.label] || (
                  <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8 text-brand-warm/50">
                    <rect x="8" y="12" width="24" height="18" rx="3" stroke="currentColor" strokeWidth="1.5" opacity="0.6" />
                    <path d="M8 16h24" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
                    <path d="M16 12v-2a2 2 0 012-2h4a2 2 0 012 2v2" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
                  </svg>
                )}
              </div>
              <p className="text-sm font-bold text-brand-cream mb-1">
                {spec.value}
              </p>
              <p className="text-[10px] text-brand-warm/40 uppercase tracking-wider">
                {spec.label}
              </p>
            </div>
          ))}
        </div>

        <p className="text-center text-brand-warm/30 text-xs mt-8">
          Berat mungkin berbeza sedikit disebabkan proses pembungkusan manual.
        </p>
      </div>
    </section>
  );
}
