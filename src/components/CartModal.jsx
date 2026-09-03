import React, { useState } from 'react';
import {
  IoClose,
  IoTrashOutline,
  IoBagCheckOutline,
  IoCheckmarkCircle,
  IoSparkles,
  IoCarOutline,
  IoShieldCheckmarkOutline,
} from 'react-icons/io5';

export default function CartModal({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}) {
  const [isProcessing, setIsProcessing] = useState(false);
  const [orderConfirmed, setOrderConfirmed] = useState(null);

  if (!isOpen) return null;

  const totalAmount = cartItems.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  const handleCheckout = () => {
    setIsProcessing(true);

    // Simulate order placement
    setTimeout(() => {
      setIsProcessing(false);
      const randomOrderId = Math.floor(1000 + Math.random() * 9000);
      setOrderConfirmed({
        orderId: `#NESTA-2026-${randomOrderId}`,
        amount: totalAmount,
        itemCount: cartItems.reduce((acc, i) => acc + i.quantity, 0),
        items: [...cartItems],
      });
      onClearCart();
    }, 1200);
  };

  const handleCloseModal = () => {
    setOrderConfirmed(null);
    setIsProcessing(false);
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/45 backdrop-blur-xs p-0 sm:p-4 animate-fade-in"
      onClick={handleCloseModal}
    >
      <div
        className="w-full sm:max-w-[480px] bg-[#FFFEFB] rounded-t-[32px] sm:rounded-[36px] max-h-[88vh] sm:max-h-[85vh] flex flex-col p-5 sm:p-7 shadow-2xl border border-[#E5DED4] transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        {/* State 1: Order Confirmation Success Screen */}
        {orderConfirmed ? (
          <div className="py-4 text-center animate-fade-in flex flex-col items-center">
            {/* Animated Golden Badge */}
            <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#ECE6DC] flex items-center justify-center text-[#1D1D1B] mb-4 shadow-sm">
              <div className="absolute inset-0 rounded-full bg-[#E9BD61]/30 animate-ping pointer-events-none" />
              <IoCheckmarkCircle className="text-4xl sm:text-5xl text-[#74765B]" />
            </div>

            <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#F5F1EA] border border-[#E5DED4] text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#77736D] mb-2">
              <IoSparkles className="text-[#C99235]" />
              <span>{orderConfirmed.orderId}</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-extrabold text-[#1D1D1B] tracking-tight mb-2">
              Order Placed Successfully!
            </h3>

            <p className="text-xs sm:text-sm text-[#77736D] leading-relaxed max-w-xs mb-6">
              Thank you for welcoming NESTA into your living space. Your bespoke
              pieces are now being prepared at our atelier.
            </p>

            {/* Order Receipt Details Card */}
            <div className="w-full rounded-2xl bg-[#F5F1EA] border border-[#E5DED4] p-4 text-xs text-[#1D1D1B] space-y-2.5 mb-6 text-left">
              <div className="flex justify-between items-center pb-2 border-b border-[#E5DED4]/80">
                <span className="text-[#77736D]">Total Amount Paid:</span>
                <span className="font-extrabold text-sm text-[#1D1D1B]">
                  ₹{orderConfirmed.amount.toLocaleString('en-IN')}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[#77736D]">Items Count:</span>
                <span className="font-bold">
                  {orderConfirmed.itemCount}{' '}
                  {orderConfirmed.itemCount === 1 ? 'Design' : 'Designs'}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[#77736D]">Delivery & Assembly:</span>
                <span className="font-bold text-emerald-800">
                  Complimentary White-Glove
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[#77736D]">Estimated Dispatch:</span>
                <span className="font-bold">Within 24–48 Hours</span>
              </div>
            </div>

            {/* Guarantees */}
            <div className="w-full flex items-center justify-around py-2 border-y border-[#E5DED4] text-[11px] text-[#77736D] mb-6">
              <div className="flex items-center gap-1.5">
                <IoCarOutline className="text-sm text-[#1D1D1B]" />
                <span>Zero-Cost Shipping</span>
              </div>
              <div className="flex items-center gap-1.5">
                <IoShieldCheckmarkOutline className="text-sm text-[#1D1D1B]" />
                <span>5-Year Guarantee</span>
              </div>
            </div>

            {/* Action Button */}
            <button
              type="button"
              onClick={handleCloseModal}
              className="w-full py-3.5 px-6 rounded-full bg-[#171715] hover:bg-[#2c2c28] text-[#FFFEFB] text-xs sm:text-sm font-medium active:scale-[0.98] transition-all shadow-md flex items-center justify-center gap-2"
            >
              <span>Continue Exploring Collection</span>
              <span>→</span>
            </button>
          </div>
        ) : (
          /* State 2: Shopping Bag Items List */
          <>
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-3.5 border-b border-[#E5DED4]">
              <div>
                <h3 className="text-base sm:text-lg font-extrabold text-[#1D1D1B]">
                  Your Shopping Bag
                </h3>
                <p className="text-xs text-[#77736D]">
                  {cartItems.length}{' '}
                  {cartItems.length === 1 ? 'curated design' : 'curated designs'}
                </p>
              </div>
              <button
                type="button"
                onClick={handleCloseModal}
                aria-label="Close cart"
                className="w-9 h-9 rounded-full bg-[#F5F1EA] text-[#1D1D1B] flex items-center justify-center hover:bg-[#ECE6DC] transition-colors"
              >
                <IoClose className="text-xl" />
              </button>
            </div>

            {/* Cart Item List */}
            <div className="flex-1 overflow-y-auto no-scrollbar py-3 space-y-3">
              {cartItems.length === 0 ? (
                <div className="py-12 text-center">
                  <p className="text-sm font-semibold text-[#1D1D1B]">
                    Your bag is empty
                  </p>
                  <p className="text-xs text-[#77736D] mt-1">
                    Explore our collection and select your favorite pieces.
                  </p>
                </div>
              ) : (
                cartItems.map(({ product, quantity }) => (
                  <div
                    key={product.id}
                    className="flex items-center gap-3.5 p-3 rounded-2xl bg-[#F5F1EA] border border-[#E5DED4]"
                  >
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl object-contain bg-[#ECE6DC] p-1 flex-shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="text-xs sm:text-sm font-bold text-[#1D1D1B] truncate">
                        {product.title}
                      </h4>
                      <p className="text-xs sm:text-sm font-extrabold text-[#1D1D1B] mt-0.5">
                        ₹{(product.price * quantity).toLocaleString('en-IN')}
                      </p>

                      {/* Quantity adjustment */}
                      <div className="flex items-center gap-3 mt-2">
                        <div className="inline-flex items-center gap-2.5 bg-[#FFFEFB] border border-[#E5DED4] rounded-full px-2.5 py-0.5 text-xs">
                          <button
                            type="button"
                            onClick={() =>
                              onUpdateQuantity(product.id, quantity - 1)
                            }
                            className="font-bold text-[#1D1D1B] hover:text-[#77736D]"
                          >
                            −
                          </button>
                          <span className="font-bold text-[#1D1D1B]">
                            {quantity}
                          </span>
                          <button
                            type="button"
                            onClick={() =>
                              onUpdateQuantity(product.id, quantity + 1)
                            }
                            className="font-bold text-[#1D1D1B] hover:text-[#77736D]"
                          >
                            +
                          </button>
                        </div>

                        <button
                          type="button"
                          onClick={() => onRemoveItem(product.id)}
                          aria-label="Remove item"
                          className="text-[#A19B92] hover:text-rose-500 p-1 transition-colors"
                        >
                          <IoTrashOutline className="text-base" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer & Checkout */}
            {cartItems.length > 0 && (
              <div className="pt-3.5 border-t border-[#E5DED4] space-y-3">
                <div className="flex items-center justify-between text-sm sm:text-base font-extrabold text-[#1D1D1B]">
                  <span>Subtotal</span>
                  <span>₹{totalAmount.toLocaleString('en-IN')}</span>
                </div>
                <p className="text-[11px] text-[#77736D]">
                  Complimentary white-glove assembly & delivery included on all
                  orders.
                </p>
                <button
                  type="button"
                  disabled={isProcessing}
                  onClick={handleCheckout}
                  className="w-full py-3.5 px-4 rounded-full bg-[#171715] hover:bg-[#2c2c28] disabled:opacity-75 text-[#FFFEFB] text-xs sm:text-sm font-medium flex items-center justify-center gap-2 active:scale-[0.98] transition-all shadow-md"
                >
                  {isProcessing ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Securing Your Bespoke Order...</span>
                    </>
                  ) : (
                    <>
                      <IoBagCheckOutline className="text-lg" />
                      <span>
                        Proceed to Checkout · ₹
                        {totalAmount.toLocaleString('en-IN')}
                      </span>
                    </>
                  )}
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
