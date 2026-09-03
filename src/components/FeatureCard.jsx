import React from 'react';
import {
  IoSparklesOutline,
  IoCubeOutline,
  IoCarOutline,
  IoShieldCheckmarkOutline,
} from 'react-icons/io5';

const iconMap = {
  IoSparklesOutline: IoSparklesOutline,
  IoCubeOutline: IoCubeOutline,
  IoCarOutline: IoCarOutline,
  IoShieldCheckmarkOutline: IoShieldCheckmarkOutline,
};

export default function FeatureCard({ num, title, description, icon }) {
  const IconComponent = iconMap[icon] || IoSparklesOutline;

  return (
    <div className="rounded-[24px] bg-[#FCFAF6] border border-[#E5DED4] p-4 flex flex-col justify-between shadow-2xs hover:border-[#171715]/20 transition-all">
      <div className="flex items-start justify-between mb-3">
        <div className="w-9 h-9 rounded-full bg-[#F5F1EA] text-[#1D1D1B] flex items-center justify-center text-lg">
          <IconComponent />
        </div>
        <span className="text-[11px] font-bold text-[#A19B92] tracking-wider">
          {num}
        </span>
      </div>

      <div>
        <h3 className="text-sm font-bold text-[#1D1D1B] mb-1">{title}</h3>
        <p className="text-xs leading-relaxed text-[#77736D]">{description}</p>
      </div>
    </div>
  );
}
