import React from 'react';
import { categories } from '../data/products';

export default function CategoryFilter({ activeCategory, onSelectCategory }) {
  return (
    <div id="collection" className="pt-6 pb-4 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="flex items-baseline justify-between mb-4">
          <div>
            <p className="text-[11px] font-semibold tracking-[0.2em] text-[#77736D] uppercase mb-0.5">
              CURATED CATALOGUE
            </p>
            <h2 className="text-[20px] sm:text-[28px] font-extrabold tracking-tight text-[#1D1D1B]">
              Explore Our Collection
            </h2>
          </div>
          <span className="text-xs sm:text-sm font-semibold text-[#77736D]">
            6 Masterpieces
          </span>
        </div>

        {/* Horizontally Scrollable on Mobile, Flex Wrap on Desktop */}
        <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto no-scrollbar sm:flex-wrap py-1 -mx-4 px-4 sm:mx-0 sm:px-0 scroll-smooth">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => onSelectCategory(cat)}
                className={`flex-shrink-0 px-4 sm:px-6 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide transition-all duration-200 active:scale-95 ${
                  isActive
                    ? 'bg-[#171715] text-[#FFFEFB] shadow-xs'
                    : 'bg-[#FCFAF6] text-[#1D1D1B] border border-[#E5DED4] hover:bg-[#ECE6DC]'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
