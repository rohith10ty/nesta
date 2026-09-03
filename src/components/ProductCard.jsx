import React, { useState, useRef } from 'react';
import { IoHeart, IoHeartOutline, IoStar, IoBagAddOutline, IoSparkles } from 'react-icons/io5';

export default function ProductCard({
  product,
  onSelect,
  isFavorite,
  onToggleFavorite,
  onAddToCart,
}) {
  const cardRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [justFavorited, setJustFavorited] = useState(false);
  const [addedAnimation, setAddedAnimation] = useState(false);

  // 3D Tilt calculation on mouse move
  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Max 8 degrees tilt for an elegant, premium physical feel
    const rotateX = ((y - centerY) / centerY) * -7;
    const rotateY = ((x - centerX) / centerX) * 7;

    setTilt({ x: rotateX, y: rotateY });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ x: 0, y: 0 });
  };

  const handleHeartClick = (e) => {
    e.stopPropagation();
    setJustFavorited(true);
    onToggleFavorite(product.id);
    setTimeout(() => setJustFavorited(false), 500);
  };

  const handleAddClick = (e) => {
    e.stopPropagation();
    setAddedAnimation(true);
    onAddToCart(product);
    setTimeout(() => setAddedAnimation(false), 600);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={() => onSelect(product)}
      style={{
        transform: isHovered
          ? `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) translateY(-4px)`
          : 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)',
      }}
      className="group relative rounded-[24px] sm:rounded-[32px] bg-[#FCFAF6] border border-[#E5DED4] p-3 sm:p-5 flex flex-col justify-between cursor-pointer transition-all duration-300 ease-out shadow-xs hover:shadow-2xl hover:border-[#171715]/25 overflow-hidden"
    >
      {/* Specular Diagonal Light Sheen on Hover */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-[24px] sm:rounded-[32px]">
        <div className="w-[120%] h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-[150%] skew-x-[-25deg] group-hover:translate-x-[250%] transition-transform duration-1000 ease-in-out" />
      </div>

      {/* Top Media Area with warm backdrop */}
      <div className="relative w-full h-[150px] sm:h-[210px] md:h-[240px] rounded-[18px] sm:rounded-[24px] bg-[#F5F1EA] p-3 flex items-center justify-center overflow-hidden mb-3">
        {/* Abstract subtle background glow */}
        <div className="absolute inset-0 bg-radial from-white/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

        {/* Badge if available */}
        {product.badge && (
          <span className="absolute top-2.5 left-2.5 z-10 text-[9px] sm:text-[10px] font-bold tracking-wider uppercase px-2.5 py-0.5 sm:py-1 rounded-full bg-[#171715] text-[#FFFEFB] shadow-xs flex items-center gap-1">
            <IoSparkles className="text-[#E9BD61] text-[10px]" />
            <span>{product.badge}</span>
          </span>
        )}

        {/* Favorite Heart Button with spring scale */}
        <button
          type="button"
          aria-label={`Save ${product.title} to wishlist`}
          onClick={handleHeartClick}
          className={`absolute top-2.5 right-2.5 z-10 w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-[#FFFEFB]/90 backdrop-blur-xs border border-[#E5DED4] flex items-center justify-center text-[#1D1D1B] hover:bg-[#FFFEFB] transition-all shadow-2xs ${
            justFavorited ? 'scale-125 bg-amber-50 ring-2 ring-[#C99235]' : 'active:scale-90'
          }`}
        >
          {isFavorite ? (
            <IoHeart className="text-sm sm:text-base text-[#C99235] animate-scale-in" />
          ) : (
            <IoHeartOutline className="text-sm sm:text-base text-[#77736D]" />
          )}
        </button>

        {/* Product Photography with floating scale */}
        <img
          src={product.image}
          alt={product.title}
          loading="lazy"
          className="w-full h-full object-contain drop-shadow-md group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-500 ease-out"
        />
      </div>

      {/* Product Information */}
      <div className="px-1 flex-1 flex flex-col justify-between">
        <div>
          {/* Category & Rating Row */}
          <div className="flex items-center justify-between text-[11px] sm:text-xs text-[#77736D] mb-1.5">
            <span className="uppercase font-semibold tracking-wider text-[10px] sm:text-[11px]">
              {product.category}
            </span>
            <div className="flex items-center gap-1 font-bold text-[#1D1D1B]">
              <IoStar className="text-xs text-[#E9BD61]" />
              <span>{product.rating}</span>
            </div>
          </div>

          {/* Title */}
          <h3 className="text-xs sm:text-base font-bold text-[#1D1D1B] line-clamp-1 group-hover:text-[#171715] transition-colors">
            {product.title}
          </h3>
        </div>

        {/* Price & Add Button Row */}
        <div className="flex items-center justify-between pt-2.5 mt-2 border-t border-[#E5DED4]/70">
          <div>
            <span className="text-xs sm:text-lg font-extrabold text-[#1D1D1B]">
              {product.formattedPrice}
            </span>
            <span className="hidden sm:inline-block text-[10px] text-[#77736D] ml-1">
              incl. taxes
            </span>
          </div>

          {/* Add to Cart Button with tap burst */}
          <button
            type="button"
            aria-label={`Add ${product.title} to cart`}
            onClick={handleAddClick}
            className={`w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-[#171715] text-[#FFFEFB] flex items-center justify-center hover:bg-[#2c2c28] transition-all shadow-2xs ${
              addedAnimation ? 'scale-125 bg-emerald-700' : 'active:scale-90'
            }`}
          >
            <IoBagAddOutline className="text-xs sm:text-sm" />
          </button>
        </div>
      </div>
    </div>
  );
}
