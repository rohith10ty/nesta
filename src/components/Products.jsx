import React, { useState } from 'react';
import { IoShieldCheckmarkOutline, IoPricetagsOutline } from 'react-icons/io5';
import { products } from '../data/siteData';
import ProductCard from './ProductCard';

export default function Products() {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <section id="services" className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#eae0cf] border border-[#7288ae]/30 text-[#111844] text-xs font-bold uppercase tracking-wider mb-3">
            <IoPricetagsOutline className="text-[#4b5694]" />
            <span>Merchant Plans & Tiers</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#111844] tracking-tight">
            Transparent Pricing with Zero Hidden Surcharges
          </h2>
          <p className="mt-3 text-sm sm:text-base lg:text-lg text-[#4b5694] leading-relaxed">
            Whether you are launching your first handmade collection or orchestrating multi-warehouse retail, Market scales with your sales volume.
          </p>

          {/* Billing Toggle */}
          <div className="mt-8 inline-flex items-center p-1.5 rounded-2xl bg-[#eae0cf] border border-[#7288ae]/30">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                !isAnnual
                  ? 'bg-white text-[#111844] shadow-xs'
                  : 'text-[#4b5694] hover:text-[#111844]'
              }`}
            >
              Monthly Billing
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                isAnnual
                  ? 'bg-[#111844] text-[#eae0cf] shadow-xs'
                  : 'text-[#4b5694] hover:text-[#111844]'
              }`}
            >
              <span>Annual Billing</span>
              <span className="bg-[#4b5694] text-[#eae0cf] text-[10px] font-bold px-2 py-0.5 rounded-full">
                Save 20%
              </span>
            </button>
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch pt-4">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              isAnnual={isAnnual}
            />
          ))}
        </div>

        {/* Trust Guarantee Note */}
        <div className="mt-12 text-center flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 text-xs text-[#7288ae]">
          <div className="flex items-center gap-1.5">
            <IoShieldCheckmarkOutline className="text-[#4b5694] text-base" />
            <span className="font-semibold text-[#111844]">30-Day Risk-Free Money-Back Guarantee</span>
          </div>
          <span className="hidden sm:inline text-[#eae0cf]">•</span>
          <span>Upgrade, downgrade, or pause store operations anytime</span>
        </div>
      </div>
    </section>
  );
}
