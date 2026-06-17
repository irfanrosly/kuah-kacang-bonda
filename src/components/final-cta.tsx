"use client";

import { PRODUCT } from "@/lib/constants";
import { useScrollReveal, useParallax } from "@/lib/use-scroll-reveal";

export default function FinalCta() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="relative bg-gradient-to-br from-brand-accent via-brand-accent to-[#8B2500] py-28 lg:py-36 px-6 overflow-hidden">
      {/* Animated mesh gradient */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-[100px] animate-pulse" style={{ animationDuration: "6s" }} />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-brand-warm/10 rounded-full blur-[80px] animate-pulse" style={{ animationDuration: "8s", animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-white/5 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: "10s", animationDelay: "1s" }} />
      </div>

      {/* Grain */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #fff8f0 1px, transparent 0)`,
          backgroundSize: "30px 30px",
        }}
      />

      <div
        ref={ref}
        className={`relative z-10 max-w-lg mx-auto text-center space-y-8 transition-all duration-800 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        {/* Badge */}
        <span className="inline-block text-[10px] font-semibold text-white/50 uppercase tracking-[0.25em] border border-white/15 rounded-full px-4 py-1.5">
          Sedia Untuk merasa?
        </span>

        {/* Headline */}
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
          Cuba Sendiri
          <span className="block text-brand-cream/80 text-2xl sm:text-3xl lg:text-4xl mt-2 font-light">
            Rasai kelainannya
          </span>
        </h2>

        <p className="text-white/70 text-lg max-w-sm mx-auto">
          Beli sekarang di Shopee & dapatkan penghantaran ke seluruh Malaysia!
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <a
            href={PRODUCT.shopeeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-2 bg-white text-brand-accent font-bold px-10 py-4 rounded-full text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-white/20 hover:scale-105 active:scale-95"
          >
            <span>Beli di Shopee</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
          <a
            href={PRODUCT.shopeeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 border-2 border-white/20 text-white/80 hover:text-white hover:border-white/40 px-10 py-4 rounded-full text-lg transition-all duration-300"
          >
            <span className="text-sm">★</span>
            <span>{PRODUCT.reviewCount} Ulasan</span>
          </a>
        </div>

        {/* Price */}
        <p className="text-white/40 text-sm">
          Hanya RM 15.90 • Halal ✓ • Penghantaran ke seluruh Malaysia
        </p>
      </div>
    </section>
  );
}
