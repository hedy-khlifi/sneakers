"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const subRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Single lightweight entrance timeline — no char splitting
      const tl = gsap.timeline({
        delay: 0.3,
        defaults: { ease: "power3.out" },
      });

      tl.fromTo(
        headlineRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7 },
        0,
      )
        .fromTo(
          subRef.current,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6 },
          0.25,
        )
        .fromTo(
          imageRef.current,
          { x: 60, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.8 },
          0.15,
        )
        .fromTo(
          badgeRef.current,
          { scale: 0, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.5, ease: "back.out(1.7)" },
          0.5,
        );

      // Subtle scroll parallax — only on image, scrub keeps it GPU-friendly
      gsap.to(imageRef.current, {
        yPercent: 12,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1.5,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-brand-black"
    >
      {/* Soft red glow — CSS only, zero JS cost */}
      <div className="absolute top-1/2 right-1/3 w-[500px] h-[500px] bg-brand-red/8 rounded-full blur-[100px] -translate-y-1/2 pointer-events-none" />

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pt-20 sm:pt-24 lg:pt-0 pb-12 sm:pb-0 grid lg:grid-cols-2 gap-8 sm:gap-12 items-center min-h-screen">
        {/* Left */}
        <div className="z-10 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 border border-brand-red/30 bg-brand-red/10 px-3 sm:px-4 py-2 rounded-full mb-5 sm:mb-6 mx-auto lg:mx-0">
            <span className="w-2 h-2 bg-brand-red rounded-full animate-pulse" />
            <span className="font-mono-custom text-[10px] sm:text-xs text-brand-red tracking-widest">
              NEW DROPS AVAILABLE
            </span>
          </div>

          <div ref={headlineRef}>
            <h1 className="font-display text-[12vw] sm:text-[10vw] lg:text-[9vw] leading-[1.1] lg:leading-none text-brand-white">
              STEP INTO
            </h1>
            <h1 className="font-display text-[12vw] sm:text-[10vw] lg:text-[9vw] leading-[1.1] lg:leading-none text-brand-red">
              THE GAME
            </h1>
          </div>

          <div
            ref={subRef}
            className="mt-5 sm:mt-6 flex flex-col gap-5 sm:gap-6"
          >
            <p className="text-brand-gray-light text-sm sm:text-base lg:text-lg max-w-md leading-relaxed mx-auto lg:mx-0">
              Premium sneakers & NBA streetwear. Curated drops, authentic gear —
              exclusively at{" "}
              <span className="text-brand-white font-medium">Catchy99</span>.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <a
                href="#sneakers"
                className="group relative inline-flex items-center justify-center gap-3 bg-brand-red text-white px-6 sm:px-8 py-3 sm:py-4 font-mono-custom text-xs tracking-widest overflow-hidden"
              >
                <span className="relative z-10">SHOP SNEAKERS</span>
                <span className="relative z-10 transition-transform duration-200 group-hover:translate-x-1">
                  →
                </span>
                <span className="absolute inset-0 bg-white translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-300 mix-blend-difference" />
              </a>
              <a
                href="#nba"
                className="inline-flex items-center justify-center gap-3 border border-white/20 text-brand-white px-6 sm:px-8 py-3 sm:py-4 font-mono-custom text-xs tracking-widest hover:border-brand-red/50 transition-colors"
              >
                NBA SHIRTS →
              </a>
            </div>
          </div>

          {/* Stats */}
          <div className="flex gap-6 sm:gap-8 mt-8 sm:mt-10 justify-center lg:justify-start">
            {[
              { val: "500+", label: "Styles" },
              { val: "50+", label: "Brands" },
              { val: "10K+", label: "Happy Clients" },
            ].map((s) => (
              <div key={s.label}>
                <div className="font-display text-2xl sm:text-3xl text-brand-white">
                  {s.val}
                </div>
                <div className="font-mono-custom text-[10px] sm:text-xs text-brand-gray-light tracking-widest mt-1">
                  {s.label.toUpperCase()}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right */}
        <div className="relative flex justify-center items-center mt-8 lg:mt-0">
          <div ref={imageRef} className="relative">
            <div className="relative w-[260px] h-[330px] sm:w-[300px] sm:h-[380px] lg:w-[400px] lg:h-[500px]">
              <Image
                src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80"
                alt="Hero Sneaker"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 640px) 260px, (max-width: 768px) 300px, 400px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black/40 via-transparent to-transparent" />
            </div>

            <div
              ref={badgeRef}
              className="absolute -top-3 -left-3 sm:-top-5 sm:-left-5 w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-brand-red rounded-full flex flex-col items-center justify-center text-center"
            >
              <span className="font-display text-base sm:text-xl lg:text-2xl text-white leading-none">
                NEW
              </span>
              <span className="font-mono-custom text-[7px] sm:text-[8px] text-white/80 tracking-widest">
                SEASON
              </span>
            </div>

            <div className="absolute -right-2 sm:-right-4 bottom-8 sm:bottom-10 bg-brand-gray-mid border border-white/10 px-3 sm:px-4 py-2 sm:py-3">
              <div className="font-mono-custom text-[8px] sm:text-[10px] text-brand-gray-light tracking-widest whitespace-nowrap">
                FROM
              </div>
              <div className="font-display text-xl sm:text-2xl text-brand-white mt-1">
                195 TND
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <div className="w-px h-10 bg-gradient-to-b from-brand-red to-transparent" />
      </div>
    </section>
  );
}
