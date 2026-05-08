"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { Instagram, ArrowUpRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: "2019", label: "Founded" },
  { value: "500+", label: "Styles in stock" },
  { value: "100%", label: "Authentic gear" },
  { value: "24H",  label: "Shipping" },
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Single trigger for the whole section
      gsap.fromTo(".about-reveal", { y: 40, opacity: 0 }, {
        y: 0, opacity: 1, stagger: 0.1, duration: 0.75, ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 78%" },
      });

      // Image clip wipe — CSS transform is GPU accelerated
      gsap.fromTo(".about-img", { clipPath: "inset(100% 0 0 0)" }, {
        clipPath: "inset(0% 0 0 0)", duration: 1.1, ease: "power3.inOut",
        scrollTrigger: { trigger: ".about-img", start: "top 82%" },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-20 lg:py-28 bg-brand-gray overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="h-px bg-brand-red/30 mb-14" />

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="about-img relative aspect-[4/5] overflow-hidden">
            <Image
              src="https://images.pexels.com/photos/32371311/pexels-photo-32371311.jpeg"
              alt="Catchy99 Brand"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-brand-red" />
            <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-brand-red" />
          </div>

          {/* Content */}
          <div className="flex flex-col gap-5">
            <span className="about-reveal font-mono-custom text-xs text-brand-red tracking-[0.3em]">
              ✦ WHO WE ARE
            </span>
            <h2 className="about-reveal font-display text-5xl lg:text-7xl text-brand-white leading-none">
              BUILT FOR
              <br />
              <span className="text-stroke">SNEAKER</span>
              <br />
              CULTURE
            </h2>
            <p className="about-reveal text-brand-gray-light leading-relaxed">
              Catchy99 was born from a passion for authentic footwear and street
              culture. We curate the freshest sneakers from Nike, Adidas,
              Jordan, and more — alongside genuine NBA gear for the real ones.
            </p>
            <p className="about-reveal text-brand-gray-light leading-relaxed">
              Every pair is 100% authentic. No fakes, no compromises. Just heat.
            </p>
            <a
              href="https://instagram.com/catchy_99"
              target="_blank"
              rel="noreferrer"
              className="about-reveal group inline-flex items-center gap-3 border border-white/15 px-6 py-4 w-fit hover:border-brand-red/50 transition-colors"
            >
              <Instagram size={18} className="text-brand-red" />
              <span className="font-mono-custom text-xs tracking-widest text-brand-gray-light group-hover:text-brand-white transition-colors">
                @CATCHY_99
              </span>
              <ArrowUpRight
                size={14}
                className="text-brand-gray-light group-hover:text-brand-white transition-colors"
              />
            </a>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-16">
          {stats.map((s) => (
            <div
              key={s.label}
              className="about-reveal border border-white/8 bg-brand-black p-6 text-center"
            >
              <div className="font-display text-4xl lg:text-5xl text-brand-red">
                {s.value}
              </div>
              <div className="font-mono-custom text-[10px] text-brand-gray-light tracking-widest mt-2 uppercase">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
