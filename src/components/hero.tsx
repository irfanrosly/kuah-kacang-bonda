"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { PRODUCT } from "@/lib/constants";

export default function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const productRef = useRef<HTMLDivElement>(null);

  // 3D tilt
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      setMousePos({ x, y });
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  // Scroll parallax
  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const tiltX = mousePos.y * 8;
  const tiltY = mousePos.x * -8;
  const parallaxY = scrollY * 0.15;
  const opacity = Math.max(1 - scrollY / 600, 0);

  return (
    <section className="relative min-h-screen bg-brand-bg">
      {/* Animated gradient background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 80% 60% at 70% 40%, rgba(199,59,30,0.25) 0%, transparent 70%),
              radial-gradient(ellipse 50% 50% at 20% 60%, rgba(232,168,124,0.12) 0%, transparent 60%),
              radial-gradient(ellipse 60% 40% at 50% 20%, rgba(199,59,30,0.1) 0%, transparent 60%)
            `,
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Floating decorative particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[1, 2, 3, 4, 5].map((i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${4 + i * 2}px`,
              height: `${4 + i * 2}px`,
              left: `${15 + i * 18}%`,
              top: `${20 + i * 12}%`,
              background: i % 2 === 0 ? "#e8a87c" : "#c73b1e",
              opacity: 0.15 - i * 0.02,
              animation: `float ${3 + i * 0.7}s ease-in-out infinite`,
              animationDelay: `${i * 0.4}s`,
              transform: `translateY(${scrollY * 0.05 * (i % 2 === 0 ? 1 : -1)}px)`,
            }}
          />
        ))}
      </div>

      {/* Main content - always rendered, no mounted gate */}
      <div className="relative z-10 min-h-screen flex flex-col lg:flex-row items-center justify-center px-6 lg:px-16 pt-24 pb-16">
        {/* Left: Text */}
        <div className="flex-1 max-w-xl text-center lg:text-left" style={{ opacity }}>
          <div className="space-y-6 animate-fade-in">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-brand-cream/5 border border-brand-warm/20 rounded-full px-4 py-1.5 text-xs font-medium text-brand-warm/80 tracking-widest uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-warm" />
              Resepi Turun-Temurun
            </div>

            {/* Headline */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.9] text-brand-cream">
              <span className="block">Kuah</span>
              <span className="block text-brand-warm">Kacang</span>
              <span className="block mt-2 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-wide text-brand-cream/80">
                Resepi Bonda
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-brand-warm/80 max-w-md mx-auto lg:mx-0 leading-relaxed">
              {PRODUCT.tagline}
            </p>

            {/* CTA */}
            <div className="flex flex-wrap gap-4 pt-2 justify-center lg:justify-start">
              <a
                href={PRODUCT.shopeeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-2 bg-brand-accent text-white font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 hover:shadow-xl hover:shadow-brand-accent/30 active:scale-95 overflow-hidden"
              >
                <span className="relative z-10">Beli di Shopee</span>
                <span className="relative z-10 group-hover:translate-x-1 transition-transform">→</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/15 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              </a>
              <a
                href="#story"
                className="inline-flex items-center gap-2 border border-brand-cream/20 text-brand-cream/70 hover:text-brand-cream hover:border-brand-cream/40 px-8 py-4 rounded-full text-lg transition-all duration-300"
              >
                Kisah Kami
              </a>
            </div>

            {/* Trust line */}
            <p className="text-xs text-brand-warm/40 tracking-wider flex items-center gap-3 justify-center lg:justify-start">
              <span>★ 5.0 ({PRODUCT.reviewCount} ulasan)</span>
              <span className="w-1 h-1 rounded-full bg-brand-warm/30" />
              <span>Halal ✓</span>
              <span className="w-1 h-1 rounded-full bg-brand-warm/30" />
              <span>{PRODUCT.size}</span>
            </p>
          </div>
        </div>

        {/* Right: Floating product */}
        <div className="flex-1 flex items-center justify-center mt-12 lg:mt-0" ref={productRef}>
          <div
            className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 animate-fade-in"
            style={{
              perspective: "800px",
              transform: `translateY(${parallaxY}px)`,
              opacity,
              animationDelay: "0.3s",
            }}
          >
            {/* 3D tilt */}
            <div
              className="relative w-full h-full transition-transform duration-200 ease-out"
              style={{
                transform: `rotateX(${tiltX}deg) rotateY(${tiltY}deg)`,
              }}
            >
              {/* Glow */}
              <div className="absolute inset-0 rounded-full bg-brand-accent/20 blur-3xl" />

              {/* Product image */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl border border-brand-warm/10">
                <Image
                  src="/images/hero.svg"
                  alt={PRODUCT.name}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 80vw, 40vw"
                />
              </div>

              {/* Floating label */}
              <div
                className="absolute -bottom-4 -right-4 bg-brand-cream text-brand-bg px-5 py-3 rounded-xl shadow-xl text-sm font-bold"
                style={{ transform: "translateZ(30px)" }}
              >
                {PRODUCT.size}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-opacity duration-500"
        style={{ opacity: Math.max(1 - scrollY / 300, 0) }}
      >
        <span className="text-xs text-brand-warm/40 tracking-widest uppercase">Scroll</span>
        <div className="w-5 h-8 border-2 border-brand-warm/30 rounded-full flex justify-center pt-1.5">
          <div className="w-1 h-2 bg-brand-warm/60 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
