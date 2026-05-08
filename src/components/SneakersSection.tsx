"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { sneakers } from "@/lib/data";
import ProductCard from "./ProductCard";

gsap.registerPlugin(ScrollTrigger);

export default function SneakersSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const [activeBrand, setActiveBrand] = useState("All");

  const sneakerBrands = ["All", ...Array.from(new Set(sneakers.map((s) => s.brand)))];
  const filtered = activeBrand === "All" ? sneakers : sneakers.filter((p) => p.brand === activeBrand);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".sneakers-title", { y: 40, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.7, ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 82%" },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  // Grid animation on filter change
  useEffect(() => {
    if (!gridRef.current) return;
    gsap.fromTo(gridRef.current.children, { opacity: 0, y: 20 }, {
      opacity: 1, y: 0, stagger: 0.05, duration: 0.4, ease: "power2.out",
    });
  }, [activeBrand]);

  return (
    <section ref={sectionRef} id="sneakers" className="py-20 lg:py-28 bg-brand-gray">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="sneakers-title mb-10">
          <span className="font-mono-custom text-xs text-brand-red tracking-[0.3em]">✦ 90% OF OUR COLLECTION</span>
          <h2 className="font-display text-6xl lg:text-8xl text-brand-white mt-2 leading-none">SNEAKERS</h2>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-8">
          {sneakerBrands.map((brand) => (
            <button
              key={brand}
              onClick={() => setActiveBrand(brand)}
              className={`font-mono-custom text-[10px] tracking-widest px-4 py-2 border transition-colors duration-150 ${
                activeBrand === brand
                  ? "bg-brand-red text-white border-brand-red"
                  : "border-white/15 text-brand-gray-light hover:border-brand-red/40 hover:text-brand-white"
              }`}
            >
              {brand.toUpperCase()}
            </button>
          ))}
          <span className="ml-auto font-mono-custom text-[10px] text-brand-gray-light self-center">
            {filtered.length} PRODUCTS
          </span>
        </div>

        {/* Grid */}
        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-5">
          {filtered.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <button className="group relative inline-flex items-center gap-3 border border-white/20 text-brand-white px-10 py-4 font-mono-custom text-xs tracking-widest overflow-hidden hover:border-brand-red/50 transition-colors">
            LOAD MORE
          </button>
        </div>
      </div>
    </section>
  );
}
