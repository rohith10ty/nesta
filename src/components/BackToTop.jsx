import React, { useState, useEffect } from 'react';
import { IoArrowUp } from 'react-icons/io5';

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisible = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisible, { passive: true });
    return () => window.removeEventListener('scroll', toggleVisible);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll back to top"
      className="fixed bottom-6 right-6 z-40 p-3 rounded-full bg-[#111844] hover:bg-[#4b5694] text-[#eae0cf] shadow-xl shadow-[#111844]/30 border border-[#eae0cf]/20 active:scale-95 transition-all duration-200"
    >
      <IoArrowUp className="text-xl" />
    </button>
  );
}
