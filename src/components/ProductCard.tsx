"use client";

import Image from "next/image";
import { ShoppingBag, Heart } from "lucide-react";
import { Product } from "@/lib/data";

interface Props {
  product: Product;
  index?: number;
}

const tagStyles: Record<string, string> = {
  NEW:     "bg-brand-accent text-brand-black",
  HOT:     "bg-brand-red text-white",
  SALE:    "bg-brand-orange text-white",
  LIMITED: "bg-white text-brand-black",
};

export default function ProductCard({ product }: Props) {
  const discount = product.originalPrice
    ? Math.round((1 - product.price / product.originalPrice) * 100)
    : null;

  return (
    <div className="group bg-brand-gray border border-white/5 overflow-hidden hover:border-brand-red/30 transition-colors duration-200">
      {/* Image */}
      <div className="relative aspect-square overflow-hidden bg-brand-gray-mid">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-gray/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200" />

        {product.tag && (
          <span className={`absolute top-3 left-3 px-2 py-1 font-mono-custom text-[9px] tracking-widest font-bold ${tagStyles[product.tag]}`}>
            {product.tag}
          </span>
        )}
        {discount && (
          <span className="absolute top-3 right-3 bg-brand-red text-white font-mono-custom text-[9px] px-2 py-1 tracking-widest">
            -{discount}%
          </span>
        )}

        <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-200 flex gap-2">
          <button className="flex-1 bg-brand-red text-white font-mono-custom text-xs py-3 tracking-widest flex items-center justify-center gap-2 hover:bg-white hover:text-brand-black transition-colors">
            <ShoppingBag size={13} /> ADD TO BAG
          </button>
          <button className="w-11 h-11 bg-brand-gray-mid border border-white/10 flex items-center justify-center hover:border-brand-red/40 transition-colors">
            <Heart size={13} className="text-brand-gray-light" />
          </button>
        </div>
      </div>

      {/* Info */}
      <div className="p-4">
        <div className="flex items-start justify-between gap-2">
          <div>
            <p className="font-mono-custom text-[10px] text-brand-red tracking-widest uppercase mb-1">{product.brand}</p>
            <h3 className="font-display text-lg text-brand-white leading-tight">{product.name}</h3>
            <p className="font-mono-custom text-[10px] text-brand-gray-light mt-1 tracking-wide">{product.colorway}</p>
          </div>
          <div className="text-right shrink-0">
            <div className="font-display text-xl text-brand-white"> TND {product.price}</div>
            {product.originalPrice && (
              <div className="font-mono-custom text-[10px] text-brand-gray-light line-through">TND {product.originalPrice}</div>
            )}
          </div>
        </div>

        <div className="flex gap-1 mt-3 flex-wrap">
          {product.sizes.slice(0, 4).map((size) => (
            <span key={size} className="font-mono-custom text-[9px] text-brand-gray-light border border-white/10 px-2 py-1 hover:border-brand-red/40 hover:text-brand-white transition-colors cursor-pointer">
              {size}
            </span>
          ))}
          {product.sizes.length > 4 && (
            <span className="font-mono-custom text-[9px] text-brand-gray-light px-1 py-1">+{product.sizes.length - 4}</span>
          )}
        </div>
      </div>
    </div>
  );
}
