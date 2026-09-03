import React from 'react';
import {
  IoHomeOutline,
  IoHome,
  IoCompassOutline,
  IoCompass,
  IoHeartOutline,
  IoHeart,
  IoBagHandleOutline,
  IoBagHandle,
  IoPersonOutline,
  IoPerson,
} from 'react-icons/io5';

export default function BottomNavigation({
  activeTab,
  onTabChange,
  wishlistCount = 0,
  cartCount = 0,
}) {
  const tabs = [
    {
      id: 'home',
      label: 'Home',
      icon: IoHomeOutline,
      activeIcon: IoHome,
    },
    {
      id: 'explore',
      label: 'Explore',
      icon: IoCompassOutline,
      activeIcon: IoCompass,
    },
    {
      id: 'saved',
      label: 'Saved',
      icon: IoHeartOutline,
      activeIcon: IoHeart,
      badge: wishlistCount,
    },
    {
      id: 'cart',
      label: 'Cart',
      icon: IoBagHandleOutline,
      activeIcon: IoBagHandle,
      badge: cartCount,
    },
    {
      id: 'profile',
      label: 'Profile',
      icon: IoPersonOutline,
      activeIcon: IoPerson,
    },
  ];

  return (
    <nav
      aria-label="Mobile Navigation Bar"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#FFFEFB]/94 backdrop-blur-md border-t border-[#E5DED4] px-3 py-2 shadow-sm transition-all"
    >
      <div className="flex items-center justify-around max-w-[430px] mx-auto">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          const IconComp = isActive ? tab.activeIcon : tab.icon;

          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => onTabChange(tab.id)}
              className={`relative flex flex-col items-center justify-center py-1 px-2.5 rounded-2xl transition-all active:scale-90 ${
                isActive
                  ? 'text-[#171715] font-bold'
                  : 'text-[#77736D] hover:text-[#1D1D1B]'
              }`}
            >
              <div className="relative">
                <IconComp className="text-xl" />
                {tab.badge > 0 && (
                  <span className="absolute -top-1.5 -right-2 min-w-4 h-4 px-1 rounded-full bg-[#171715] text-[#FFFEFB] text-[9px] font-extrabold flex items-center justify-center">
                    {tab.badge}
                  </span>
                )}
              </div>
              <span className="text-[10px] tracking-tight mt-0.5 font-medium">
                {tab.label}
              </span>

              {/* Active Tab Accent Dot */}
              {isActive && (
                <span className="w-1 h-1 rounded-full bg-[#171715] mt-0.5" />
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
}
