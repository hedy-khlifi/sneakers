"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { Menu, X, ShoppingBag, Search } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const navRef = useRef<HTMLElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const cartCount = 2;

  useEffect(() => {
    gsap.fromTo(navRef.current, { y: -60, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, ease: "power3.out", delay: 0.4 });

    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { label: "Home", href: "#home" },
    { label: "Sneakers", href: "#sneakers" },
    { label: "NBA", href: "#nba" },
    { label: "Drops", href: "#featured" },
    { label: "About", href: "#about" },
  ];

  return (
    <>
      <nav
        ref={navRef}
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
          scrolled ? "bg-brand-black/95 backdrop-blur-sm border-b border-white/5" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-16 lg:h-20">
          <Link href="#home" className="flex items-center gap-0.5">
            <span className="font-display text-3xl text-brand-white tracking-wider">CATCHY</span>
            <span className="font-display text-3xl text-brand-red tracking-wider">99</span>
          </Link>

          <ul className="hidden lg:flex items-center gap-8">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="font-mono-custom text-xs tracking-widest text-brand-gray-light hover:text-brand-white transition-colors relative group">
                  {l.label.toUpperCase()}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-brand-red group-hover:w-full transition-all duration-200" />
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4">
            <button className="text-brand-gray-light hover:text-brand-white transition-colors"><Search size={18} /></button>
            <button className="relative text-brand-gray-light hover:text-brand-white transition-colors">
              <ShoppingBag size={18} />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-brand-red text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center font-mono-custom">
                  {cartCount}
                </span>
              )}
            </button>
            <button className="lg:hidden text-brand-white" onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-40 bg-brand-black transition-transform duration-400 lg:hidden flex flex-col justify-center px-8 ${menuOpen ? "translate-x-0" : "translate-x-full"}`}>
        <ul className="space-y-6">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={() => setMenuOpen(false)} className="font-display text-5xl text-brand-white hover:text-brand-red transition-colors">
                {l.label.toUpperCase()}
              </a>
            </li>
          ))}
        </ul>
        <a href="https://instagram.com/catchy_99" target="_blank" rel="noreferrer" className="mt-12 font-mono-custom text-xs text-brand-gray-light hover:text-brand-white tracking-widest">
          INSTAGRAM →
        </a>
      </div>
    </>
  );
}
