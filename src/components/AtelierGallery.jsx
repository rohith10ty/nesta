import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoSparkles } from 'react-icons/io5';

const galleryImages = [
  {
    src: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=80',
    alt: 'Solace Lounge Reading Corner',
    code: '# 01',
    title: 'Solace Lounge Sanctuary',
    category: 'LIVING ROOM',
    desc: 'Ochre velvet armchair with arched brass lighting.',
  },
  {
    src: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80',
    alt: 'Nordic Minimal Living Room',
    code: '# 02',
    title: 'Nordic Organic Studio',
    category: 'LOUNGE SUITE',
    desc: 'Warm cream bouclé textures and natural timber flooring.',
  },
  {
    src: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=80',
    alt: 'Haven Emerald Velvet Sofa',
    code: '# 03',
    title: 'Haven Botanical Parlour',
    category: 'SALON',
    desc: 'Deep emerald velvet sofa framed by serene architectural foliage.',
  },
  {
    src: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80',
    alt: 'Wabi-Sabi Sculptural Interior',
    code: '# 04',
    title: 'Wabi-Sabi Atelier',
    category: 'MINIMAL ARCHITECTURE',
    desc: 'Raw travertine textures, plaster walls, and hand-finished oak.',
  },
  {
    src: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80',
    alt: 'Kanso Platform Bed Suite',
    code: '# 05',
    title: 'Kanso Night Sanctuary',
    category: 'BEDROOM',
    desc: 'Low-profile timber platform bed promoting deep circadian calm.',
  },
  {
    src: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80',
    alt: 'Modern Sunlit Interior',
    code: '# 06',
    title: 'Sunlit Pavilion',
    category: 'SUNROOM',
    desc: 'Curved silhouettes welcoming warm morning sunlight.',
  },
  {
    src: 'https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&w=1200&q=80',
    alt: 'Solid Oak Dining Gathering',
    code: '# 07',
    title: 'Vester Oak Gathering',
    category: 'DINING ATELIER',
    desc: 'Master-crafted solid white oak table built for shared memories.',
  },
];

export default function AtelierGallery() {
  // Default expanded image is the second card
  const [activeImage, setActiveImage] = useState(1);

  return (
    <section className="py-8 md:py-14 px-4 sm:px-6 lg:px-8 bg-[#F5F1EA] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Editorial Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 md:mb-8 gap-3">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#ECE6DC] border border-[#E5DED4] text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-[#77736D] mb-2">
              <IoSparkles className="text-[#C99235]" />
              <span>ATELIER ARCHIVES · 2026</span>
            </div>
            <h2 className="text-[24px] sm:text-[34px] md:text-[40px] font-extrabold tracking-tight text-[#1D1D1B] leading-tight">
              Spaces Styled With Character.
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#77736D] max-w-sm">
            Hover or tap across our curated spatial projects to reveal the architectural silhouettes.
          </p>
        </div>

        {/* HoverExpand Accordion Gallery Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="w-full flex items-center justify-center overflow-x-auto no-scrollbar py-2 -mx-4 px-4 sm:mx-0 sm:px-0"
        >
          <div className="flex w-full items-center justify-start sm:justify-center gap-2 md:gap-2.5 min-w-max sm:min-w-0">
            {galleryImages.map((image, index) => {
              const isExpanded = activeImage === index;

              return (
                <motion.div
                  key={index}
                  layout
                  className="relative cursor-pointer overflow-hidden rounded-[24px] sm:rounded-[32px] bg-[#ECE6DC] border border-[#E5DED4] flex-shrink-0 shadow-sm hover:shadow-xl select-none"
                  initial={false}
                  animate={{
                    width: isExpanded ? '24rem' : '4.75rem',
                    height: '24rem',
                  }}
                  transition={{
                    type: 'spring',
                    stiffness: 300,
                    damping: 30,
                  }}
                  onClick={() => setActiveImage(index)}
                  onMouseEnter={() => setActiveImage(index)}
                >
                  {/* Subtle Gradient Overlay on Active Card */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="absolute inset-0 z-10 bg-gradient-to-t from-black/80 via-black/25 to-transparent pointer-events-none"
                      />
                    )}
                  </AnimatePresence>

                  {/* Text Details inside Active Card */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.3, delay: 0.05 }}
                        className="absolute inset-0 z-20 flex flex-col justify-between p-5 text-white pointer-events-none"
                      >
                        {/* Top Code Badge */}
                        <div className="flex items-center justify-between">
                          <span className="px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-md text-[10px] font-mono tracking-widest uppercase border border-white/20">
                            {image.code}
                          </span>
                          <span className="text-[10px] tracking-widest font-bold uppercase text-white/80">
                            {image.category}
                          </span>
                        </div>

                        {/* Bottom Information */}
                        <div>
                          <h3 className="text-lg sm:text-xl font-extrabold tracking-tight text-white mb-1">
                            {image.title}
                          </h3>
                          <p className="text-xs text-white/85 line-clamp-2 leading-relaxed">
                            {image.desc}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Collapsed Vertical Identifier Indicator */}
                  {!isExpanded && (
                    <div className="absolute inset-0 z-10 flex flex-col items-center justify-between py-4 bg-black/20 hover:bg-black/10 transition-colors pointer-events-none">
                      <span className="text-[10px] font-mono font-bold text-white/90 drop-shadow-sm">
                        {image.code}
                      </span>
                      <span className="text-[10px] font-extrabold text-white/80 tracking-widest uppercase rotate-180 [writing-mode:vertical-rl] drop-shadow-sm">
                        {image.category}
                      </span>
                    </div>
                  )}

                  {/* Image with subtle zoom on active */}
                  <motion.img
                    src={image.src}
                    alt={image.alt}
                    loading="lazy"
                    className="w-full h-full object-cover"
                    animate={{
                      scale: isExpanded ? 1.05 : 1,
                    }}
                    transition={{ duration: 0.6 }}
                  />
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
