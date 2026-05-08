"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Newsletter() {
  const sectionRef = useRef<HTMLElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        innerRef.current,
        { scale: 0.9, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 bg-brand-black px-6 lg:px-12">
      <div
        ref={innerRef}
        className="max-w-4xl mx-auto bg-brand-red relative overflow-hidden"
      >
        {/* Bg pattern */}
        <div className="absolute inset-0 opacity-10">
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              className="absolute border border-white rounded-full"
              style={{
                width: `${(i + 1) * 200}px`,
                height: `${(i + 1) * 200}px`,
                top: "50%",
                left: "80%",
                transform: "translate(-50%, -50%)",
              }}
            />
          ))}
        </div>

        <div className="relative px-8 py-12 lg:px-16 lg:py-16 flex flex-col lg:flex-row items-start lg:items-center gap-8">
          <div className="flex-1">
            <span className="font-mono-custom text-[10px] tracking-[0.3em] text-white/70">
              ✦ EXCLUSIVE DROPS
            </span>
            <h3 className="font-display text-4xl lg:text-5xl text-white mt-2 leading-tight">
              GET FIRST ACCESS
              <br />
              TO NEW DROPS
            </h3>
          </div>
          <div className="flex-1 w-full">
            <div className="flex gap-0">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 bg-white/10 border border-white/20 text-white placeholder-white/50 font-mono-custom text-xs tracking-widest px-4 py-4 outline-none focus:border-white/60 transition-colors min-w-0"
              />
              <button className="bg-white text-brand-red font-mono-custom text-[10px] tracking-widest px-6 py-4 whitespace-nowrap hover:bg-brand-black hover:text-white transition-colors">
                JOIN NOW →
              </button>
            </div>
            <p className="font-mono-custom text-[9px] text-white/50 tracking-widest mt-3">
              NO SPAM. ONLY HEAT. UNSUBSCRIBE ANYTIME.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
