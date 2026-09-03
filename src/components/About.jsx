import React from 'react';

export default function About() {
  const stats = [
    { value: '10K+', label: 'Happy Homes' },
    { value: '120+', label: 'Designs' },
    { value: '4.9', label: 'Average Rating' },
  ];

  return (
    <section id="about" className="py-8 md:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto rounded-[32px] sm:rounded-[40px] bg-[#ECE6DC] p-5 sm:p-8 md:p-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 lg:gap-14 items-center">
          {/* Left Column (Brand Narrative & Metrics) */}
          <div className="md:col-span-6 lg:col-span-6 flex flex-col justify-center">
            <p className="text-[11px] sm:text-xs font-semibold tracking-[0.2em] text-[#77736D] uppercase mb-1.5">
              ABOUT NESTA
            </p>
            <h2 className="text-[26px] sm:text-[34px] md:text-[40px] font-extrabold tracking-tight text-[#1D1D1B] leading-tight mb-3 md:mb-4">
              Furniture that feels <br className="hidden sm:inline" />
              like home.
            </h2>

            <p className="text-xs sm:text-sm md:text-base leading-relaxed text-[#77736D] mb-6">
              At NESTA, we believe beautiful furniture should feel as good as it looks.
              Our collections combine thoughtful craftsmanship, contemporary design
              and everyday comfort.
            </p>

            <p className="hidden md:block text-xs sm:text-sm leading-relaxed text-[#77736D] mb-8">
              Every curve is considered. Every wood grain tells a story. Sourced from sustainable forests and certified master ateliers across Scandinavia and Japan, our pieces become cherished companions for generations.
            </p>

            {/* Statistics 3-column Row */}
            <div className="grid grid-cols-3 gap-3 pt-4 border-t border-[#D9D4CB]">
              {stats.map((item) => (
                <div key={item.label} className="text-left">
                  <p className="text-lg sm:text-2xl font-extrabold text-[#1D1D1B] tracking-tight">
                    {item.value}
                  </p>
                  <p className="text-[10px] sm:text-xs font-medium text-[#77736D] uppercase tracking-wider mt-0.5">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column (Large Lifestyle Interior Image) */}
          <div className="md:col-span-6 lg:col-span-6">
            <div className="relative w-full h-[210px] sm:h-[300px] md:h-[400px] lg:h-[440px] rounded-[24px] sm:rounded-[32px] overflow-hidden shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80"
                alt="NESTA Interior living room setup"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 text-[#FFFEFB] text-xs sm:text-sm font-medium tracking-wide">
                Nordic Minimal Studio · 2026 Collection
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
