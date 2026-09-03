import React from 'react';
import { featuresData } from '../data/features';
import FeatureCard from './FeatureCard';

export default function Features() {
  return (
    <section id="features" className="py-8 md:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="mb-6 md:mb-10 text-left md:text-center max-w-2xl md:mx-auto">
          <p className="text-[11px] sm:text-xs font-semibold tracking-[0.2em] text-[#77736D] uppercase mb-1">
            THE NESTA PROMISE
          </p>
          <h2 className="text-[24px] sm:text-[32px] md:text-[38px] font-extrabold tracking-tight text-[#1D1D1B] leading-tight">
            Designed Around Better Living.
          </h2>
          <p className="hidden md:block text-sm text-[#77736D] mt-2">
            Every material, joint, and tactile cushion is engineered to deliver lifelong durability and sensory comfort.
          </p>
        </div>

        {/* 2x2 Grid on Mobile, 4 Columns on iPad / Laptop / Desktop */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-4 md:gap-6">
          {featuresData.map((f) => (
            <FeatureCard
              key={f.num}
              num={f.num}
              title={f.title}
              description={f.description}
              icon={f.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
