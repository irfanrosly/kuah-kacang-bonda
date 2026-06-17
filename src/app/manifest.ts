import type { MetadataRoute } from "next";
import { PRODUCT } from "@/lib/constants";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: PRODUCT.name,
    short_name: PRODUCT.nameShort,
    description: `${PRODUCT.name} — ${PRODUCT.tagline}`,
    start_url: "/",
    display: "standalone",
    background_color: "#1a0a00",
    theme_color: "#1a0a00",
    orientation: "portrait-primary",
    categories: ["food", "grocery", "shopping"],
    lang: "ms",
    icons: [
      {
        src: "/favicon.svg",
        sizes: "any",
        type: "image/x-icon",
      },
      {
        src: "/images/icon-192.svg",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/images/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/images/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
