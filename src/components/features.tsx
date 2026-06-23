"use client";

import { PRODUCT } from "@/lib/constants";

/* Custom SVG icons instead of emojis */
const Icons = {
  homestyle: (
    <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
      {/* House shape */}
      <path d="M24 6L8 18v22h14V28h4v12h14V18L24 6z" fill="currentColor" opacity="0.9" />
      <path d="M24 4L6 18v2l18-14 18 14v-2L24 4z" fill="currentColor" opacity="0.6" />
    </svg>
  ),
  natural: (
    <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
      {/* Leaf */}
      <path d="M24 6C18 14 8 20 8 30c0 8.8 7.2 16 16 16s16-7.2 16-16c0-10-10-16-16-24z" fill="currentColor" opacity="0.3" />
      <path d="M24 10C20 18 12 22 12 30c0 6.6 5.4 12 12 12s12-5.4 12-12c0-8-8-12-12-20z" fill="currentColor" opacity="0.5" />
      <path d="M24 14C21 20 16 24 16 30c0 4.4 3.6 8 8 8s8-3.6 8-8c0-6-5-10-8-16z" fill="currentColor" opacity="0.8" />
      {/* Stem */}
      <path d="M24 6v10M24 6l-4 6M24 6l4 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.9" />
    </svg>
  ),
  freezer: (
    <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
      {/* Snowflake */}
      <path d="M24 4v40M14 10l10 8 10-8M14 38l10-8 10 8M8 16l16 6 16-6M8 32l16-6 16 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.7" />
      {/* Diamond center */}
      <rect x="22" y="22" width="4" height="4" rx="1" fill="currentColor" opacity="0.9" />
    </svg>
  ),
};

export default function Features() {
  const sections = PRODUCT.features.map((f, i) => ({
    ...f,
    icon: [Icons.homestyle, Icons.natural, Icons.freezer][i],
  }));

  return (
    <section className="relative bg-brand-bg py-24 lg:py-32 px-6 overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-accent/5 blur-[120px] rounded-full" />

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16 lg:mb-20">
          <span className="text-xs font-semibold text-brand-warm/50 uppercase tracking-[0.25em]">
            Kenapa Kami Berbeza
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-cream mt-4 leading-tight">
            Masak Dengan{" "}
            <span className="text-brand-warm">Kasih Sayang</span>
          </h2>
          <p className="text-brand-warm/50 mt-4 max-w-md mx-auto">
            Setiap botol adalah hasil dari resipi keluarga yang dijaga
            turun-temurun.
          </p>
        </div>

        {/* Cards */}
          <div className="grid sm:grid-cols-3 gap-5 lg:gap-8">
            {sections.map((feature, i) => (
              <div key={i}>
                <div className="group relative h-full bg-gradient-to-b from-brand-cream/[0.04] to-brand-cream/[0.02] border border-brand-warm/10 rounded-3xl p-8 lg:p-10 transition-all duration-500 hover:border-brand-warm/30 hover:bg-brand-cream/[0.06] overflow-hidden">
                  {/* Hover glow */}
                  <div className="absolute -inset-20 bg-brand-accent/5 blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-full" />

                  <div className="relative z-10 space-y-5">
                    {/* Icon */}
                    <div className="w-14 h-14 rounded-2xl bg-brand-accent/10 text-brand-warm flex items-center justify-center group-hover:bg-brand-accent/20 group-hover:scale-110 transition-all duration-500">
                      {feature.icon}
                    </div>

                    {/* Content */}
                    <h3 className="font-heading text-xl font-bold text-brand-cream group-hover:text-brand-warm transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-brand-cream/50 text-sm leading-relaxed group-hover:text-brand-cream/60 transition-colors duration-300">
                      {feature.desc}
                    </p>
                  </div>

                  {/* Corner accent */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-brand-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-bl-full" />
                </div>
              </div>
            ))}
          </div>
      </div>
    </section>
  );
}
