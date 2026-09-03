import React, { useState } from 'react';
import {
  IoArrowBack,
  IoEllipsisVertical,
  IoHeart,
  IoHeartOutline,
  IoStar,
  IoBagHandleOutline,
  IoSparkles,
  IoShieldCheckmarkOutline,
  IoCarOutline,
  IoRibbonOutline,
} from 'react-icons/io5';

export default function ProductDetails({
  product,
  onBack,
  isFavorite,
  onToggleFavorite,
  onAddToCart,
}) {
  const [quantity, setQuantity] = useState(1);
  const [selectedColorIndex, setSelectedColorIndex] = useState(0);
  const [addedToast, setAddedToast] = useState(false);

  if (!product) return null;

  const handleBuyNow = () => {
    onAddToCart(product, quantity);
    setAddedToast(true);
    setTimeout(() => {
      setAddedToast(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-[#F5F1EA] flex flex-col justify-between pb-24 md:pb-12 animate-fade-in relative">
      {/* Toast Notification */}
      {addedToast && (
        <div className="fixed top-14 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-[420px] p-3.5 rounded-2xl bg-[#171715] text-[#FFFEFB] shadow-2xl flex items-center justify-between gap-3 text-xs sm:text-sm animate-fade-in">
          <div className="flex items-center gap-2.5">
            <span className="w-5 h-5 rounded-full bg-[#E9BD61] text-[#171715] flex items-center justify-center font-bold text-xs">
              ✓
            </span>
            <span>
              Added {quantity} × {product.title} to bag
            </span>
          </div>
          <span className="text-xs text-[#A19B92] font-semibold">View Bag →</span>
        </div>
      )}

      {/* Top Header Bar */}
      <div className="sticky top-0 z-40 w-full bg-[#F5F1EA]/95 backdrop-blur-md border-b border-[#E5DED4]/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between">
          <button
            type="button"
            onClick={onBack}
            aria-label="Go back to products"
            className="inline-flex items-center gap-2 py-2 px-4 rounded-full bg-[#FFFEFB] border border-[#E5DED4] text-[#1D1D1B] shadow-2xs hover:bg-[#ECE6DC] active:scale-95 transition-all text-xs sm:text-sm font-semibold"
          >
            <IoArrowBack className="text-base" />
            <span>Back to Collection</span>
          </button>

          <span className="text-xs sm:text-sm font-bold tracking-[0.15em] uppercase text-[#77736D]">
            {product.category}
          </span>

          <button
            type="button"
            aria-label="More options"
            className="w-10 h-10 rounded-full bg-[#FFFEFB] border border-[#E5DED4] text-[#1D1D1B] flex items-center justify-center shadow-2xs hover:bg-[#ECE6DC] active:scale-90 transition-all"
          >
            <IoEllipsisVertical className="text-base" />
          </button>
        </div>
      </div>

      {/* Main Content Area (Mobile Stacked, Desktop 2-Column Split) */}
      <div className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-4 md:pt-8 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 lg:gap-14 items-start">
          {/* Left Column (Large Image Showcase) */}
          <div className="md:col-span-6 lg:col-span-7">
            <div className="relative w-full h-[290px] sm:h-[380px] md:h-[480px] lg:h-[540px] rounded-[32px] sm:rounded-[40px] bg-gradient-to-b from-[#ECE6DC] to-[#E5DED4]/70 p-6 flex items-center justify-center overflow-hidden shadow-sm">
              {/* Soft abstract shape */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 md:w-96 h-64 md:h-96 rounded-full bg-[#FFFEFB]/60 blur-3xl pointer-events-none" />

              {/* Badge */}
              {product.badge && (
                <div className="absolute top-4 sm:top-6 left-4 sm:left-6 z-10 inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#171715] text-[#FFFEFB] text-[10px] sm:text-xs font-bold tracking-wider shadow-sm">
                  <IoSparkles className="text-[#E9BD61] text-xs sm:text-sm" />
                  <span>{product.badge}</span>
                </div>
              )}

              {/* Floating Favorite Button */}
              <button
                type="button"
                onClick={() => onToggleFavorite(product.id)}
                aria-label="Save to wishlist"
                className="absolute top-4 sm:top-6 right-4 sm:right-6 z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#FFFEFB] border border-[#E5DED4] text-[#1D1D1B] flex items-center justify-center shadow-md hover:scale-105 active:scale-90 transition-all"
              >
                {isFavorite ? (
                  <IoHeart className="text-xl sm:text-2xl text-[#C99235]" />
                ) : (
                  <IoHeartOutline className="text-xl sm:text-2xl text-[#77736D]" />
                )}
              </button>

              {/* Product Image */}
              <img
                src={product.image}
                alt={product.title}
                className="relative z-1 w-full h-full object-contain drop-shadow-xl"
              />
            </div>
          </div>

          {/* Right Column (Product Information & Actions) */}
          <div className="md:col-span-6 lg:col-span-5 flex flex-col justify-between">
            <div>
              {/* Title & Price */}
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#1D1D1B] leading-tight">
                  {product.title}
                </h1>
                <span className="text-2xl sm:text-3xl font-extrabold text-[#1D1D1B] whitespace-nowrap">
                  {product.formattedPrice}
                </span>
              </div>

              {/* Rating Row & Review Count */}
              <div className="flex items-center gap-2 text-xs sm:text-sm mb-4">
                <div className="flex items-center text-[#C99235]">
                  {[...Array(5)].map((_, i) => (
                    <IoStar
                      key={i}
                      className={`text-sm ${
                        i < Math.floor(product.rating)
                          ? 'text-[#E9BD61]'
                          : 'text-[#E5DED4]'
                      }`}
                    />
                  ))}
                </div>
                <span className="font-bold text-[#1D1D1B]">{product.rating}</span>
                <span className="text-[#77736D]">
                  ({product.reviewCount} verified client reviews)
                </span>
              </div>

              {/* Quantity Controls & Color Swatches Row */}
              <div className="flex flex-wrap items-center justify-between gap-4 py-4 my-4 border-y border-[#E5DED4]">
                {/* Quantity Selector */}
                <div>
                  <p className="text-[11px] font-semibold text-[#77736D] uppercase tracking-wider mb-2">
                    Quantity
                  </p>
                  <div className="inline-flex items-center gap-3 bg-[#FFFEFB] border border-[#E5DED4] rounded-full px-3.5 py-1.5 shadow-2xs">
                    <button
                      type="button"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      aria-label="Decrease quantity"
                      className="w-6 h-6 rounded-full text-[#1D1D1B] hover:bg-[#ECE6DC] active:scale-90 flex items-center justify-center font-bold text-sm transition-all"
                    >
                      −
                    </button>
                    <span className="text-sm font-extrabold text-[#1D1D1B] min-w-[20px] text-center">
                      {quantity}
                    </span>
                    <button
                      type="button"
                      onClick={() => setQuantity(quantity + 1)}
                      aria-label="Increase quantity"
                      className="w-6 h-6 rounded-full text-[#1D1D1B] hover:bg-[#ECE6DC] active:scale-90 flex items-center justify-center font-bold text-sm transition-all"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Color Swatches */}
                {product.colors && (
                  <div className="text-left sm:text-right">
                    <p className="text-[11px] font-semibold text-[#77736D] uppercase tracking-wider mb-2">
                      Color: <span className="text-[#1D1D1B]">{product.colors[selectedColorIndex]?.name}</span>
                    </p>
                    <div className="flex items-center gap-2.5">
                      {product.colors.map((color, idx) => {
                        const isSelected = selectedColorIndex === idx;
                        return (
                          <button
                            key={color.name}
                            type="button"
                            onClick={() => setSelectedColorIndex(idx)}
                            aria-label={`Select ${color.name}`}
                            style={{ backgroundColor: color.hex }}
                            className={`w-7 h-7 rounded-full border border-black/10 transition-all ${
                              isSelected
                                ? 'ring-2 ring-offset-2 ring-[#171715] scale-110'
                                : 'opacity-85 hover:opacity-100 hover:scale-105'
                            }`}
                          />
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>

              {/* Description */}
              <div className="mb-5">
                <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#1D1D1B] mb-2">
                  About This Design
                </h2>
                <p className="text-xs sm:text-sm leading-relaxed text-[#77736D]">
                  {product.description}
                </p>
              </div>

              {/* Specifications Breakdown */}
              <div className="grid grid-cols-2 gap-3 text-xs text-[#1D1D1B] mb-6">
                <div className="p-3.5 rounded-2xl bg-[#FCFAF6] border border-[#E5DED4]">
                  <p className="text-[10px] text-[#A19B92] uppercase font-semibold">Dimensions</p>
                  <p className="font-bold text-xs sm:text-sm mt-0.5">{product.dimensions}</p>
                </div>
                <div className="p-3.5 rounded-2xl bg-[#FCFAF6] border border-[#E5DED4]">
                  <p className="text-[10px] text-[#A19B92] uppercase font-semibold">Craft Materials</p>
                  <p className="font-bold text-xs sm:text-sm mt-0.5">{product.material}</p>
                </div>
              </div>

              {/* Desktop Direct Purchase CTAs (Hidden on mobile, prominent on md+) */}
              <div className="hidden md:flex items-center gap-4 pt-2">
                <button
                  type="button"
                  onClick={handleBuyNow}
                  className="flex-1 py-4 px-6 rounded-full bg-[#171715] hover:bg-[#2c2c28] text-[#FFFEFB] font-medium text-sm flex items-center justify-center gap-2 active:scale-[0.98] transition-all shadow-md"
                >
                  <IoBagHandleOutline className="text-xl" />
                  <span>Add to Bag · {product.formattedPrice}</span>
                </button>

                <button
                  type="button"
                  onClick={() => onToggleFavorite(product.id)}
                  aria-label="Wishlist"
                  className="w-12 h-12 rounded-full bg-[#FFFEFB] border border-[#E5DED4] text-[#1D1D1B] flex items-center justify-center hover:bg-[#ECE6DC] active:scale-95 transition-all shadow-2xs"
                >
                  {isFavorite ? (
                    <IoHeart className="text-2xl text-[#C99235]" />
                  ) : (
                    <IoHeartOutline className="text-2xl text-[#1D1D1B]" />
                  )}
                </button>
              </div>

              {/* Delivery & Warranty Guarantees */}
              <div className="mt-6 pt-4 border-t border-[#E5DED4] space-y-2 text-xs text-[#77736D]">
                <div className="flex items-center gap-2">
                  <IoCarOutline className="text-base text-[#1D1D1B]" />
                  <span>Complimentary white-glove assembly in your living space</span>
                </div>
                <div className="flex items-center gap-2">
                  <IoShieldCheckmarkOutline className="text-base text-[#1D1D1B]" />
                  <span>Backed by 5-Year NESTA structural guarantee</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile-Only Sticky Bottom Purchase Bar (hidden on md and up) */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 px-4 py-3 bg-[#F5F1EA]/95 backdrop-blur-md border-t border-[#E5DED4]">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => onToggleFavorite(product.id)}
            aria-label="Wishlist"
            className="w-12 h-12 rounded-full bg-[#FFFEFB] border border-[#E5DED4] text-[#1D1D1B] flex items-center justify-center hover:bg-[#ECE6DC] active:scale-95 transition-all shadow-2xs flex-shrink-0"
          >
            {isFavorite ? (
              <IoHeart className="text-xl text-[#C99235]" />
            ) : (
              <IoHeartOutline className="text-xl text-[#1D1D1B]" />
            )}
          </button>

          <button
            type="button"
            onClick={handleBuyNow}
            className="flex-1 h-12 rounded-full bg-[#171715] hover:bg-[#2c2c28] text-[#FFFEFB] font-medium text-sm flex items-center justify-center gap-2 active:scale-[0.97] transition-all shadow-md"
          >
            <IoBagHandleOutline className="text-lg" />
            <span>Buy Now · {product.formattedPrice}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
