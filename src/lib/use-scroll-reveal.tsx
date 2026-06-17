"use client";

import { useEffect, useRef, useState, createContext, useContext, type ReactNode } from "react";

/* ─── Single element reveal (starts visible, no flicker) ─── */
export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(
  threshold = 0.1
) {
  const ref = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(true); // starts visible

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const o = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) { setIsVisible(true); o.unobserve(el); }
      },
      { threshold }
    );
    o.observe(el);
    return () => o.disconnect();
  }, [threshold]);

  return { ref, isVisible };
}

/* ─── Staggered children reveal (starts visible, staggers on reveal) ─── */
const StaggerCtx = createContext<"idle" | "active" | "done">("idle");

export function StaggerProvider({ children, threshold = 0.05 }: { children: ReactNode; threshold?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [state, setState] = useState<"idle" | "active" | "done">("idle");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // Mark as "done" immediately so child items render visible
    requestAnimationFrame(() => setState("done"));

    const o = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setState("active"); o.unobserve(el); } },
      { threshold }
    );
    o.observe(el);
    return () => o.disconnect();
  }, [threshold]);

  return (
    <div ref={ref}>
      <StaggerCtx.Provider value={state}>
        {children}
      </StaggerCtx.Provider>
    </div>
  );
}

export function StaggerChild({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const state = useContext(StaggerCtx);
  // Always visible. The stagger animation only adds a subtle polish on reveal.
  const isRevealed = state !== "idle";
  return (
    <div
      className={`stagger-child ${isRevealed ? "revealed" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

/* ─── Parallax ─── */
export function useParallax(speed = 0.25) {
  const ref = useRef<HTMLDivElement>(null);
  const [y, setY] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onScroll = () => {
      const r = el.getBoundingClientRect();
      const p = window.innerHeight - r.top;
      if (p > 0 && r.top < window.innerHeight) setY(Math.min(p * speed, 60));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [speed]);

  return { ref, style: { transform: `translateY(${y}px)` } };
}
