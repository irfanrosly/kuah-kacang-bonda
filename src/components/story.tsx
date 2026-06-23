"use client";

import Image from "next/image";
import { PRODUCT } from "@/lib/constants";
import { useScrollReveal, useParallax } from "@/lib/use-scroll-reveal";

export default function Story() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal();
  const { ref: textRef, isVisible: textVisible } = useScrollReveal();
  const { ref: imgRef, style: imgParallax } = useParallax(0.2);

  return (
    <section id="story" className="relative bg-brand-cream overflow-hidden">
      {/* Subtle pattern */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #1a0a00 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 lg:py-32">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
          {/* Image - takes 3 cols */}
          <div className="lg:col-span-3 relative" ref={imgRef} style={imgParallax}>
            {/* Blob frame */}
            <div className="relative aspect-[4/3] lg:aspect-[5/4]">
              <svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 600 450"
                preserveAspectRatio="none"
              >
                <defs>
                  <clipPath id="blobClip">
                    <path d="M120,20 C200,0 320,10 400,40 C480,70 520,120 540,200 C560,280 540,340 480,380 C420,420 320,440 240,420 C160,400 100,360 70,290 C40,220 20,140 60,80 C100,20 80,30 120,20 Z" />
                  </clipPath>
                </defs>
              </svg>
              <div
                className="absolute inset-0"
                style={{
                  clipPath: "url(#blobClip)",
                  borderRadius: "0",
                }}
              >
                <div className="relative w-full h-full">
                  <Image
                    src="/images/product-1.svg"
                    alt="Resepi Bonda"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 60vw"
                  />
                </div>
                {/* Decorative colored overlay */}
                <div className="absolute inset-0 mix-blend-multiply bg-brand-accent/5" />
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-4 bg-brand-bg text-brand-cream px-6 py-4 rounded-2xl shadow-xl max-w-[180px]">
              <div className="flex items-center gap-3">
                <span className="text-3xl">❤️</span>
                <div>
                  <p className="font-bold text-sm">{PRODUCT.favorites}+</p>
                  <p className="text-[10px] text-brand-warm/60 uppercase tracking-widest">Peminat Setia</p>
                </div>
              </div>
            </div>
          </div>

          {/* Text - takes 2 cols */}
          <div className="lg:col-span-2 space-y-8">
            {/* Section label */}
            <div ref={titleRef} className={`transition-all duration-700 ${titleVisible ? "opacity-100" : "opacity-0 translate-y-4"}`}>
              <span className="text-xs font-semibold text-brand-accent uppercase tracking-[0.25em]">
                Kisah Di Sebalik Resepi
              </span>
            </div>

            {/* Headline */}
            <h2 className="font-heading text-4xl sm:text-5xl font-bold leading-[1.1]">
              <span className="text-brand-bg">Warisi Rasa</span>
              <br />
              <span className="text-brand-accent">Dari Dapur Nenek</span>
            </h2>

            {/* Body text */}
            <div
              ref={textRef}
              className={`space-y-5 transition-all duration-800 delay-200 ${
                textVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              <p className="text-brand-bg/80 leading-relaxed text-lg">
                {PRODUCT.story}
              </p>
              <p className="text-brand-bg/80 leading-relaxed">
                Kami percaya kuah kacang yang sedap bermula dari bahan yang berkualiti.
                Kacang tanah segar, rempah ratus pilihan, dan santan asli — tanpa
                sebarang bahan pengawet atau perisa tiruan.
              </p>
              <p className="text-brand-bg/80 leading-relaxed">
                Hasilnya? Kuah kacang yang pekat, creamy, dan penuh dengan rasa
                tradisional yang sukar dilupakan.
              </p>
            </div>

            {/* Origin */}
            <div className={`flex items-center gap-4 transition-all duration-700 delay-400 ${
              textVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}>
              <div className="w-12 h-12 rounded-full bg-brand-accent/10 flex items-center justify-center text-xl">
                📍
              </div>
              <div>
                <p className="font-semibold text-brand-bg">Dihasilkan di</p>
                <p className="text-brand-bg/50 text-sm">{PRODUCT.shipFrom}, Malaysia</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
