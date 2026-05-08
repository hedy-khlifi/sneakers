"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { featuredProducts } from "@/lib/data";
import { ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Featured() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate title and cards as one batch — fewer ScrollTrigger instances
      gsap.fromTo(".featured-reveal", { y: 50, opacity: 0 }, {
        y: 0, opacity: 1,
        stagger: 0.12,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="featured" className="py-20 lg:py-28 bg-brand-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Title */}
        <div className="featured-reveal flex flex-col lg:flex-row lg:items-end justify-between mb-14 gap-6">
          <div>
            <span className="font-mono-custom text-xs text-brand-red tracking-[0.3em]">✦ CURATED SELECTION</span>
            <h2 className="font-display text-6xl lg:text-8xl text-brand-white mt-2 leading-none">
              LATEST<br /><span className="text-stroke">DROPS</span>
            </h2>
          </div>
          <a href="#sneakers" className="group inline-flex items-center gap-2 font-mono-custom text-xs tracking-widest text-brand-gray-light hover:text-brand-white transition-colors">
            VIEW ALL
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {featuredProducts.map((p, i) => (
            <div
              key={p.id}
              className={`featured-reveal relative group overflow-hidden cursor-pointer ${i === 0 ? "lg:row-span-2" : ""}`}
            >
              <div className={`relative overflow-hidden bg-brand-gray-mid ${i === 0 ? "h-[420px] lg:h-full lg:min-h-[580px]" : "h-[280px]"}`}>
                <Image
                  src={p.image}
                  alt={p.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black/85 via-brand-black/15 to-transparent" />

                {p.tag && (
                  <span className="absolute top-4 left-4 bg-brand-red text-white font-mono-custom text-[10px] tracking-widest px-3 py-1">
                    {p.tag}
                  </span>
                )}

                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <p className="font-mono-custom text-[10px] text-brand-red tracking-widest uppercase">{p.brand}</p>
                  <h3 className="font-display text-2xl text-brand-white mt-1">{p.name}</h3>
                  <div className="flex items-center justify-between mt-3">
                    <span className="font-display text-2xl text-brand-white">TND {p.price}</span>
                    <button className="bg-brand-red text-white font-mono-custom text-[10px] tracking-widest px-4 py-2 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-250">
                      SHOP →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
