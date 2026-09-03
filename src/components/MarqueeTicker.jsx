import React from 'react';

export default function MarqueeTicker() {
  const items = [
    'HANDCRAFTED IN ATELIERS',
    'SUSTAINABLY HARVESTED SOLID OAK',
    'ZERO-TOXIN ORGANIC FINISHES',
    'COMPLIMENTARY WHITE-GLOVE DELIVERY',
    '5-YEAR STRUCTURAL WARRANTY',
    'NORDIC SIMPLICITY · JAPANESE PRECISION',
    '10,000+ HOMES TRANSFORMED',
  ];

  return (
    <div className="w-full bg-[#ECE6DC] py-2.5 sm:py-3 border-y border-[#E5DED4] overflow-hidden select-none my-2">
      <div className="animate-marquee flex items-center gap-6 sm:gap-10 text-[10px] sm:text-xs font-bold tracking-[0.25em] text-[#1D1D1B] uppercase">
        {/* Render sequence twice for seamless infinite loop */}
        {[...items, ...items].map((text, idx) => (
          <div key={idx} className="flex items-center gap-6 sm:gap-10 flex-shrink-0">
            <span>{text}</span>
            <span className="text-[#E9BD61] text-xs">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
}
