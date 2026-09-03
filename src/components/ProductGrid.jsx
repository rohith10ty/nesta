import React from 'react';
import ProductCard from './ProductCard';

export default function ProductGrid({
  products,
  onSelectProduct,
  favorites,
  onToggleFavorite,
  onAddToCart,
}) {
  if (products.length === 0) {
    return (
      <div className="py-16 px-4 text-center">
        <p className="text-sm sm:text-base font-medium text-[#77736D]">
          No furniture designs found in this category.
        </p>
      </div>
    );
  }

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-3">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2.5 sm:gap-4 md:gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onSelect={onSelectProduct}
              isFavorite={favorites.includes(product.id)}
              onToggleFavorite={onToggleFavorite}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
