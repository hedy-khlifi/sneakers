import { Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-brand-gray border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-1">
            <div className="flex items-center gap-1 mb-4">
              <span className="font-display text-3xl text-brand-white">CATCHY</span>
              <span className="font-display text-3xl text-brand-red">99</span>
            </div>
            <p className="text-brand-gray-light text-sm leading-relaxed max-w-xs">
              Premium sneakers & NBA streetwear. Authentic kicks, authentic culture.
            </p>
            <a
              href="https://instagram.com/catchy_99"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 mt-4 text-brand-gray-light hover:text-brand-red transition-colors"
            >
              <Instagram size={18} />
              <span className="font-mono-custom text-xs tracking-widest">@CATCHY_99</span>
            </a>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-mono-custom text-[10px] tracking-[0.3em] text-brand-white mb-4">SHOP</h4>
            <ul className="space-y-3">
              {["All Sneakers", "Nike", "Adidas", "Jordan Brand", "New Balance", "NBA Jerseys"].map((l) => (
                <li key={l}>
                  <a href="#sneakers" className="font-mono-custom text-xs text-brand-gray-light hover:text-brand-white transition-colors tracking-wider">
                    {l.toUpperCase()}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div>
            <h4 className="font-mono-custom text-[10px] tracking-[0.3em] text-brand-white mb-4">INFO</h4>
            <ul className="space-y-3">
              {["About Us", "Shipping Policy", "Returns", "Size Guide", "Contact"].map((l) => (
                <li key={l}>
                  <a href="#about" className="font-mono-custom text-xs text-brand-gray-light hover:text-brand-white transition-colors tracking-wider">
                    {l.toUpperCase()}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-mono-custom text-[10px] tracking-[0.3em] text-brand-white mb-4">CONTACT</h4>
            <ul className="space-y-3">
              <li className="font-mono-custom text-xs text-brand-gray-light tracking-wider">
                catchy_99@instagram.com
              </li>
              <li className="font-mono-custom text-xs text-brand-gray-light tracking-wider">
                DM US ON INSTAGRAM
              </li>
            </ul>
            <div className="mt-6 flex gap-3">
              <div className="w-2 h-2 bg-brand-red rounded-full animate-pulse" />
              <span className="font-mono-custom text-[9px] text-brand-gray-light tracking-widest">
                ONLINE & READY
              </span>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/8 pt-8 flex flex-col lg:flex-row items-center justify-between gap-4">
          <span className="font-mono-custom text-[10px] text-brand-gray-light tracking-widest">
            © {new Date().getFullYear()} CATCHY99. ALL RIGHTS RESERVED.
          </span>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service"].map((l) => (
              <a key={l} href="#" className="font-mono-custom text-[10px] text-brand-gray-light hover:text-brand-white transition-colors tracking-widest">
                {l.toUpperCase()}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
