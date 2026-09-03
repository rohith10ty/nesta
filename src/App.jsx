import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';
import Header from './components/Header';
import Hero from './components/Hero';
import MarqueeTicker from './components/MarqueeTicker';
import AtelierGallery from './components/AtelierGallery';
import CategoryFilter from './components/CategoryFilter';
import ProductGrid from './components/ProductGrid';
import ProductDetails from './components/ProductDetails';
import Features from './components/Features';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BottomNavigation from './components/BottomNavigation';
import CartModal from './components/CartModal';
import SearchModal from './components/SearchModal';
import { products } from './data/products';

export default function App() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [favorites, setFavorites] = useState([1, 4]); // Default saved items
  const [cartItems, setCartItems] = useState([
    { product: products[0], quantity: 1 },
  ]);
  const [activeNavTab, setActiveNavTab] = useState('home');
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [onlyFavoritesView, setOnlyFavoritesView] = useState(false);

  // Initialize Lenis smooth scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.5,
    });

    let animationFrameId;

    function raf(time) {
      lenis.raf(time);
      animationFrameId = requestAnimationFrame(raf);
    }

    animationFrameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(animationFrameId);
      lenis.destroy();
    };
  }, []);

  // Toggle favorite status
  const handleToggleFavorite = (productId) => {
    setFavorites((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
    );
  };

  // Add item to cart
  const handleAddToCart = (product, qty = 1) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + qty }
            : item
        );
      }
      return [...prev, { product, quantity: qty }];
    });
  };

  // Update item quantity in cart
  const handleUpdateQuantity = (productId, newQty) => {
    if (newQty <= 0) {
      handleRemoveFromCart(productId);
      return;
    }
    setCartItems((prev) =>
      prev.map((item) =>
        item.product.id === productId ? { ...item, quantity: newQty } : item
      )
    );
  };

  // Remove item from cart
  const handleRemoveFromCart = (productId) => {
    setCartItems((prev) =>
      prev.filter((item) => item.product.id !== productId)
    );
  };

  // Clear cart
  const handleClearCart = () => {
    setCartItems([]);
  };

  // Bottom Navigation handler (for mobile)
  const handleNavTabChange = (tabId) => {
    setActiveNavTab(tabId);

    if (tabId === 'home') {
      setSelectedProduct(null);
      setOnlyFavoritesView(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (tabId === 'explore') {
      setSelectedProduct(null);
      setOnlyFavoritesView(false);
      const el = document.getElementById('collection');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else if (tabId === 'saved') {
      setSelectedProduct(null);
      setOnlyFavoritesView((prev) => !prev);
      const el = document.getElementById('collection');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else if (tabId === 'cart') {
      setIsCartOpen(true);
    } else if (tabId === 'profile') {
      setIsProfileOpen(true);
    }
  };

  // Filter products by category and wishlist
  const displayedProducts = products.filter((p) => {
    if (onlyFavoritesView && !favorites.includes(p.id)) {
      return false;
    }
    if (activeCategory === 'All') return true;
    return p.category === activeCategory;
  });

  const totalCartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-[#F5F1EA] text-[#1D1D1B] flex flex-col justify-between selection:bg-[#171715] selection:text-[#FFFEFB]">
      <div className="w-full flex-1 flex flex-col justify-between">
        {/* Conditional View: Product Details Takeover vs Main Feed */}
        {selectedProduct ? (
          <ProductDetails
            product={selectedProduct}
            onBack={() => setSelectedProduct(null)}
            isFavorite={favorites.includes(selectedProduct.id)}
            onToggleFavorite={handleToggleFavorite}
            onAddToCart={handleAddToCart}
          />
        ) : (
          <>
            {/* 1. Header with mobile hamburger + full desktop nav on tablet/desktop */}
            <Header
              cartCount={totalCartCount}
              wishlistCount={favorites.length}
              onOpenCart={() => setIsCartOpen(true)}
              onOpenSearch={() => setIsSearchOpen(true)}
              onOpenWishlist={() => {
                setOnlyFavoritesView((prev) => !prev);
                const el = document.getElementById('collection');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
            />

            <main className="flex-1 pb-16 md:pb-8">
              {/* 2. Hero Section (with 3D parallax tilt, interactive hotspot pins & highlight cards) */}
              <Hero
                onSelectHeroProduct={() => setSelectedProduct(products[0])}
              />

              {/* 3. Luxury Editorial Marquee Ticker */}
              <MarqueeTicker />

              {/* 4. Atelier Gallery (HoverExpand Skiper 52 Effect) */}
              <AtelierGallery />

              {/* 5. Category Filter */}
              <CategoryFilter
                activeCategory={activeCategory}
                onSelectCategory={(cat) => {
                  setActiveCategory(cat);
                  setOnlyFavoritesView(false);
                }}
              />

              {/* Saved filter indicator banner if active */}
              {onlyFavoritesView && (
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-between text-xs sm:text-sm text-[#77736D]">
                  <span className="font-semibold text-[#1D1D1B]">
                    Showing Wishlist ({favorites.length} {favorites.length === 1 ? 'item' : 'items'})
                  </span>
                  <button
                    type="button"
                    onClick={() => setOnlyFavoritesView(false)}
                    className="underline text-[#1D1D1B] font-medium hover:text-[#77736D]"
                  >
                    Show all designs
                  </button>
                </div>
              )}

              {/* 5. Products Section (with 3D tilt, specular sheen, and hover floating) */}
              <ProductGrid
                products={displayedProducts}
                onSelectProduct={(p) => setSelectedProduct(p)}
                favorites={favorites}
                onToggleFavorite={handleToggleFavorite}
                onAddToCart={handleAddToCart}
              />

              {/* 6. Features Section */}
              <Features />

              {/* 7. About Section */}
              <About />

              {/* 8. Testimonials Section (With artistic animated cartoon avatars) */}
              <Testimonials />

              {/* 9. Contact Section with Real-Time Validation */}
              <Contact />
            </main>

            {/* 10. Footer */}
            <Footer />
          </>
        )}

        {/* 11. Fixed Bottom Mobile Navigation (Visible only on mobile devices < md) */}
        {!selectedProduct && (
          <BottomNavigation
            activeTab={activeNavTab}
            onTabChange={handleNavTabChange}
            wishlistCount={favorites.length}
            cartCount={totalCartCount}
          />
        )}

        {/* Shopping Cart Sheet / Modal */}
        <CartModal
          isOpen={isCartOpen}
          onClose={() => setIsCartOpen(false)}
          cartItems={cartItems}
          onUpdateQuantity={handleUpdateQuantity}
          onRemoveItem={handleRemoveFromCart}
          onClearCart={handleClearCart}
        />

        {/* Interactive Search Modal */}
        <SearchModal
          isOpen={isSearchOpen}
          onClose={() => setIsSearchOpen(false)}
          onSelectProduct={(p) => setSelectedProduct(p)}
        />

        {/* Profile Sheet Modal */}
        {isProfileOpen && (
          <div
            role="dialog"
            aria-modal="true"
            className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/40 backdrop-blur-xs p-0 sm:p-4 animate-fade-in"
            onClick={() => setIsProfileOpen(false)}
          >
            <div
              className="w-full sm:max-w-md bg-[#FFFEFB] rounded-t-[32px] sm:rounded-[36px] p-6 border border-[#E5DED4] shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="w-10 h-1 rounded-full bg-[#E5DED4] mx-auto mb-4 sm:hidden" />
              <div className="flex items-center gap-3.5 mb-5">
                <div className="w-12 h-12 rounded-full bg-[#ECE6DC] text-[#1D1D1B] font-extrabold flex items-center justify-center text-base">
                  AM
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-[#1D1D1B]">
                    Aarav Mehta
                  </h3>
                  <p className="text-xs text-[#77736D]">
                    NESTA Private Member · VIP Tier
                  </p>
                </div>
              </div>
              <div className="p-3.5 rounded-2xl bg-[#F5F1EA] border border-[#E5DED4] text-xs sm:text-sm text-[#77736D] space-y-2 mb-5">
                <div className="flex justify-between">
                  <span>Concierge Access:</span>
                  <span className="font-bold text-[#1D1D1B]">Active (24/7)</span>
                </div>
                <div className="flex justify-between">
                  <span>Saved Delivery Address:</span>
                  <span className="font-bold text-[#1D1D1B]">Mumbai, MH</span>
                </div>
                <div className="flex justify-between">
                  <span>Complimentary Swatches:</span>
                  <span className="font-bold text-[#1D1D1B]">Available</span>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setIsProfileOpen(false)}
                className="w-full py-3 rounded-full bg-[#171715] text-[#FFFEFB] text-xs sm:text-sm font-medium"
              >
                Close Member Card
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
