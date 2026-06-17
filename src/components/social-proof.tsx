"use client";

import { PRODUCT } from "@/lib/constants";
import { useScrollReveal } from "@/lib/use-scroll-reveal";

export default function SocialProof() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      ref={ref}
      className={`bg-brand-cream border-y border-brand-warm/10 py-5 px-6 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
    >
      <div className="max-w-4xl mx-auto flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-sm">
        {/* Rating */}
        <div className="flex items-center gap-2">
          <span className="flex text-yellow-500 text-base">
            {"★".repeat(5)}
          </span>
          <span className="font-semibold text-brand-bg">
            {PRODUCT.rating}
          </span>
          <span className="text-brand-bg/40">
            ({PRODUCT.reviewCount} ulasan)
          </span>
        </div>

        <span className="hidden sm:block w-px h-4 bg-brand-warm/20" />

        <div className="flex items-center gap-1.5 text-brand-bg/60">
          <span>✓</span>
          <span className="font-medium">{PRODUCT.favorites} suka</span>
        </div>

        <span className="hidden sm:block w-px h-4 bg-brand-warm/20" />

        <div className="flex items-center gap-1.5 text-brand-bg/60">
          <span>✓</span>
          <span className="font-medium">{PRODUCT.yearsActive} tahun dipercayai</span>
        </div>
      </div>
    </section>
  );
}
