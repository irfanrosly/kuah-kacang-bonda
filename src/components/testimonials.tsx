"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { PRODUCT } from "@/lib/constants";

const INTERVAL_MS = 4500;

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const animRef = useRef<number>(0);
  const startRef = useRef<number>(0);
  const t = PRODUCT.testimonials;

  const advance = useCallback(() => {
    setCurrent((i) => (i + 1) % t.length);
    setProgress(0);
  }, [t.length]);

  // Progress bar animation
  useEffect(() => {
    if (isPaused) return;
    startRef.current = performance.now();
    let running = true;

    const tick = (now: number) => {
      if (!running) return;
      const elapsed = now - startRef.current;
      const pct = Math.min(elapsed / INTERVAL_MS, 1);
      setProgress(pct);
      if (pct >= 1) {
        advance();
      } else {
        animRef.current = requestAnimationFrame(tick);
      }
    };

    animRef.current = requestAnimationFrame(tick);
    return () => { running = false; cancelAnimationFrame(animRef.current); };
  }, [current, isPaused, advance]);

  return (
    <section className="relative bg-gradient-to-b from-brand-cream to-white py-24 lg:py-32 px-6 overflow-hidden">
      {/* Decorative quote marks */}
      <div className="absolute top-10 left-10 text-[200px] font-serif text-brand-accent/5 leading-none select-none pointer-events-none">
        &ldquo;
      </div>
      <div className="absolute bottom-10 right-10 text-[200px] font-serif text-brand-accent/5 leading-none select-none pointer-events-none">
        &rdquo;
      </div>

      <div className="relative z-10 max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-xs font-semibold text-brand-accent uppercase tracking-[0.25em]">
            Testimonial
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-bg mt-4">
            Apa Kata Mereka?
          </h2>
          <div className="flex items-center justify-center gap-2 mt-4">
            <span className="flex text-yellow-500 text-lg">
              {"★".repeat(5)}
            </span>
            <span className="text-brand-bg/50 text-sm">
              {PRODUCT.rating} dari {PRODUCT.reviewCount}+ ulasan
            </span>
          </div>
        </div>

        {/* Carousel */}
        <div
          className="relative min-h-[200px]"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {t.map((item, i) => (
            <div
              key={i}
              className={`absolute inset-0 transition-all duration-600 ease-in-out text-center ${
                i === current
                  ? "opacity-100 translate-y-0 z-10"
                  : "opacity-0 translate-y-6 z-0 pointer-events-none"
              }`}
            >
              {/* Quote */}
              <blockquote className="text-xl sm:text-2xl text-brand-bg/85 leading-relaxed font-medium px-4">
                &ldquo;{item.quote}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="mt-8 space-y-2">
                <div className="flex items-center justify-center gap-4">
                  {/* Avatar circle */}
                  <div className="w-10 h-10 rounded-full bg-brand-accent/15 flex items-center justify-center text-brand-accent font-bold text-sm">
                    {item.name.charAt(0)}
                  </div>
                  <div className="text-left">
                    <p className="font-semibold text-brand-bg">
                      {item.name}
                    </p>
                    <p className="text-yellow-500 text-sm tracking-wider">
                      {"★".repeat(item.rating)}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Progress bar */}
        <div className="flex items-center gap-3 mt-10 justify-center">
          {t.map((_, i) => (
            <button
              key={i}
              onClick={() => { setCurrent(i); setProgress(0); }}
              className="relative h-1.5 rounded-full transition-all duration-300 bg-brand-accent/15 overflow-hidden"
              style={{ width: i === current ? "48px" : "24px" }}
              aria-label={`Testimonial ${i + 1}`}
            >
              {i === current && (
                <div
                  className="absolute inset-y-0 left-0 bg-brand-accent rounded-full"
                  style={{ width: `${progress * 100}%`, transition: "none" }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Rating link */}
        <div className="text-center mt-8">
          <a
            href={PRODUCT.shopeeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-brand-bg/40 hover:text-brand-accent transition-colors group"
          >
            <span>Lihat semua {PRODUCT.reviewCount} ulasan di Shopee</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
