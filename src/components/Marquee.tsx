"use client";

export default function Marquee() {
  const items = [
    "FREE SHIPPING ON ORDERS +$100",
    "AUTHENTIC KICKS ONLY",
    "NEW DROPS EVERY FRIDAY",
    "NBA SEASON COLLECTION",
    "LIMITED STOCK",
    "CATCHY99",
  ];

  const repeated = [...items, ...items];

  return (
    <div className="overflow-hidden border-y border-brand-red/20 bg-brand-gray py-3">
      <div className="flex whitespace-nowrap animate-marquee gap-12">
        {repeated.map((item, i) => (
          <span
            key={i}
            className="font-display text-base tracking-widest text-brand-white/70 flex items-center gap-12"
          >
            {item}
            <span className="text-brand-red">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
