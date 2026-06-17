"use client";

import { PRODUCT } from "@/lib/constants";
import { StaggerProvider, StaggerChild, useScrollReveal } from "@/lib/use-scroll-reveal";

/* Custom SVG icons for each usage */
const UseIcons = {
  satay: (
    <svg viewBox="0 0 48 48" fill="none" className="w-7 h-7">
      {/* Stick */}
      <line x1="24" y1="8" x2="24" y2="40" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
      {/* Meat chunks */}
      <rect x="18" y="14" width="12" height="8" rx="3" fill="currentColor" opacity="0.8" />
      <rect x="19" y="24" width="10" height="7" rx="3" fill="currentColor" opacity="0.6" />
    </svg>
  ),
  nasiLemak: (
    <svg viewBox="0 0 48 48" fill="none" className="w-7 h-7">
      {/* Plate */}
      <ellipse cx="24" cy="34" rx="18" ry="6" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
      {/* Rice mound */}
      <path d="M14 30c0-10 4-14 10-14s10 4 10 14" fill="currentColor" opacity="0.3" />
      <path d="M16 30c0-8 3-12 8-12s8 4 8 12" fill="currentColor" opacity="0.5" />
      <path d="M18 30c0-6 2-9 6-9s6 3 6 9" fill="currentColor" opacity="0.7" />
    </svg>
  ),
  laksa: (
    <svg viewBox="0 0 48 48" fill="none" className="w-7 h-7">
      {/* Bowl */}
      <path d="M10 24c0-10 6-14 14-14s14 4 14 14v6H10v-6z" fill="currentColor" opacity="0.3" />
      <ellipse cx="24" cy="30" rx="14" ry="4" fill="currentColor" opacity="0.5" />
      {/* Steam */}
      <path d="M20 16q2-4 0-8M24 14q2-3 0-6M28 16q2-4 0-8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity="0.4" />
      {/* Noodle hint */}
      <path d="M16 28q8-4 16 0" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.6" />
    </svg>
  ),
  dipping: (
    <svg viewBox="0 0 48 48" fill="none" className="w-7 h-7">
      {/* Small bowl */}
      <ellipse cx="24" cy="34" rx="14" ry="5" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
      <path d="M10 30c0-6 6-10 14-10s14 4 14 10" fill="currentColor" opacity="0.4" />
      <path d="M12 30c0-5 5-8 12-8s12 3 12 8" fill="currentColor" opacity="0.6" />
      {/* Dipping item */}
      <rect x="28" y="12" width="4" height="16" rx="2" fill="currentColor" opacity="0.7" />
      <rect x="18" y="16" width="4" height="12" rx="2" fill="currentColor" opacity="0.5" />
    </svg>
  ),
};

const useIcons = [UseIcons.satay, UseIcons.nasiLemak, UseIcons.laksa, UseIcons.dipping];

export default function HowToUse() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="relative bg-brand-cream py-24 lg:py-32 px-6 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-semibold text-brand-accent uppercase tracking-[0.25em]">
            Cara Penggunaan
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-bg mt-4 leading-tight">
            Padanan{" "}
            <span className="text-brand-accent">Sempurna</span>
          </h2>
          <p className="text-brand-bg/50 mt-4 max-w-md mx-auto">
            Kuah kacang yang versatile untuk pelbagai jenis hidangan.
          </p>
        </div>

        {/* Flow timeline */}
        <div ref={ref}>
          {/* Items */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0">
            {PRODUCT.uses.map((use, i) => (
              <div
                key={i}
                className={`flex flex-col items-center text-center transition-all duration-700 ease-out ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                {/* Step number */}
                <div className="relative mb-6">
                  <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-brand-accent/5 border-2 border-brand-accent/15 flex items-center justify-center group-hover:bg-brand-accent/15 transition-all duration-500">
                    <span className="text-brand-accent/70">
                      {useIcons[i]}
                    </span>
                  </div>
                  {/* Step indicator */}
                  <div className="absolute -top-1 -right-1 w-7 h-7 rounded-full bg-brand-accent text-white text-xs font-bold flex items-center justify-center shadow-lg">
                    {i + 1}
                  </div>
                </div>

                {/* Label */}
                <h3 className="text-lg font-bold text-brand-bg mb-1">
                  {use.label}
                </h3>
                <p className="text-xs text-brand-bg/50 max-w-[120px]">
                  {["Celup, cicah, nikmat!", "Lauk kegemaran ramai.", "Kuah pekat membalut.", "Apa saja jadi sedap!"][i]}
                </p>
              </div>
            ))}
          </div>

          {/* Tip card */}
          <div
            className={`mt-16 max-w-lg mx-auto transition-all duration-700 delay-500 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <div className="bg-brand-bg/5 border border-brand-bg/10 rounded-2xl p-6 text-center">
              <span className="text-2xl block mb-2">💡</span>
              <p className="text-sm text-brand-bg/60">
                <strong className="text-brand-bg">Tip:</strong> Panaskan dengan api perlahan
                dan kacau rata sebelum digunakan untuk rasa yang terbaik.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
