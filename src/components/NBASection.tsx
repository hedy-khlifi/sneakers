"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { nbaItems } from "@/lib/data";
import ProductCard from "./ProductCard";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function NBASection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // One batch trigger for everything in this section
      gsap.fromTo(".nba-reveal", { y: 40, opacity: 0 }, {
        y: 0, opacity: 1, stagger: 0.1, duration: 0.7, ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 78%" },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="nba" className="py-20 lg:py-28 bg-brand-black">
      {/* Banner */}
      <div className="relative h-56 lg:h-72 overflow-hidden mb-14">
        <Image
          src="https://images.unsplash.com/photo-1546519638-68e109498ffc?w=1400&q=75"
          alt="NBA"
          fill
          className="object-cover object-top"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-brand-black/70" />
        <div className="relative h-full flex items-center justify-center text-center">
          <div>
            <span className="font-mono-custom text-xs text-brand-red tracking-[0.3em]">✦ REPRESENTING THE CULTURE</span>
            <h2 className="font-display text-6xl lg:text-8xl text-brand-white mt-2 leading-none">NBA SHIRTS</h2>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="nba-reveal flex flex-col lg:flex-row items-start lg:items-center justify-between mb-10 gap-4">
          <p className="text-brand-gray-light text-sm max-w-md leading-relaxed">
            Authentic NBA jerseys and Mitchell & Ness throwbacks for true fans.
          </p>
          <div className="border border-brand-red/20 bg-brand-red/5 px-6 py-4 text-center">
            <div className="font-display text-3xl text-brand-red">10%</div>
            <div className="font-mono-custom text-[10px] text-brand-gray-light tracking-widest mt-1">OF COLLECTION</div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {nbaItems.map((p) => (
            <div key={p.id} className="nba-reveal">
              <ProductCard product={p} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
