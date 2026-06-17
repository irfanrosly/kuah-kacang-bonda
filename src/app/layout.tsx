import type { Metadata } from "next";
import { PRODUCT } from "@/lib/constants";
import "./globals.css";

const baseUrl = "https://kuahkacangbonda.com";

export const metadata: Metadata = {
  title: {
    default: `${PRODUCT.name} 500g — ${PRODUCT.tagline}`,
    template: `%s | ${PRODUCT.name}`,
  },
  description: `${PRODUCT.description} ${PRODUCT.story.slice(0, 100)}...`,
  applicationName: PRODUCT.nameShort,
  keywords: [
    "kuah kacang",
    "resepi bonda",
    "satay sauce",
    "peanut sauce malaysia",
    "kuah kacang malaysia",
    "resepi tradisional",
    "melaka",
    "sos satay homemade",
  ],
  authors: [{ name: "Kuah Kacang Bonda" }],
  creator: "Kuah Kacang Bonda",
  publisher: "Kuah Kacang Bonda",
  metadataBase: new URL(baseUrl),
  openGraph: {
    title: `${PRODUCT.name} 500g — ${PRODUCT.tagline}`,
    description: PRODUCT.description,
    url: baseUrl,
    siteName: PRODUCT.name,
    locale: "ms_MY",
    type: "website",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: PRODUCT.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${PRODUCT.name} 500g`,
    description: PRODUCT.description,
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-icon.svg",
  },
  manifest: "/manifest.webmanifest",
  other: {
    "theme-color": "#1a0a00",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: PRODUCT.name,
  description: PRODUCT.description,
  brand: {
    "@type": "Brand",
    name: "Resepi Bonda",
  },
  category: "Food & Beverages > Sauces & Dressings",
  countryOfOrigin: "Malaysia",
  material: "Peanut-based sauce",
  size: PRODUCT.size,
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: PRODUCT.rating,
    reviewCount: PRODUCT.reviewCount,
    bestRating: 5,
    worstRating: 1,
  },
  offers: {
    "@type": "Offer",
    price: "15.90",
    priceCurrency: "MYR",
    url: PRODUCT.shopeeUrl,
    availability: "https://schema.org/InStock",
    seller: {
      "@type": "Organization",
      name: "Kuah Kacang Bonda",
      areaServed: "Malaysia",
    },
  },
  image: `${baseUrl}/images/product-1.svg`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ms">
      <body className="min-h-screen flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', () => {
                  navigator.serviceWorker.register('/sw.js');
                });
              }
            `,
          }}
        />
      </body>
    </html>
  );
}
