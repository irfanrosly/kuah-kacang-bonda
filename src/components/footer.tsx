import { PRODUCT } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-brand-bg border-t border-brand-warm/10 py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="grid sm:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-brand-cream">
              {PRODUCT.name}
            </h3>
            <p className="text-sm text-brand-warm/60 leading-relaxed">
              {PRODUCT.tagline} {PRODUCT.description}
            </p>
          </div>

          {/* Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-brand-cream uppercase tracking-wider">
              Beli
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href={PRODUCT.shopeeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-brand-warm/60 hover:text-brand-warm transition-colors"
                >
                  Shopee Malaysia →
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-brand-cream uppercase tracking-wider">
              Hubungi Kami
            </h4>
            <ul className="space-y-2">
              <li className="text-sm text-brand-warm/60">
                <span className="text-brand-warm">📍</span> {PRODUCT.shipFrom},
                Malaysia
              </li>
              <li>
                <span className="text-sm text-brand-warm/60">
                  ✉️ kuahkacangbonda@gmail.com
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-brand-warm/10 pt-8 text-center">
          <p className="text-xs text-brand-warm/40">
            &copy; {new Date().getFullYear()} {PRODUCT.name}. Hak Cipta
            Terpelihara.
          </p>
          <p className="text-xs text-brand-warm/30 mt-2">
            Dibuat dengan ❤️ di Melaka, Malaysia
          </p>
        </div>
      </div>
    </footer>
  );
}
