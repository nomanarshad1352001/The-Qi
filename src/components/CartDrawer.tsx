import React, { useState } from 'react';
import { CartItem } from '../types';
import { X, Trash2, ShieldCheck, Truck, ArrowRight, Tag, Check, Sparkles } from 'lucide-react';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, qty: number) => void;
  onRemoveItem: (id: string) => void;
  onAddDefaultItem: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onAddDefaultItem,
}) => {
  const [promoCode, setPromoCode] = useState('');
  const [discountApplied, setDiscountApplied] = useState<{ code: string; amount: number } | null>(null);
  const [promoError, setPromoError] = useState('');
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [orderConfirmed, setOrderConfirmed] = useState(false);

  if (!isOpen) return null;

  const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const discountAmount = discountApplied ? discountApplied.amount : 0;
  const freeShippingThreshold = 75;
  const shippingRemaining = Math.max(0, freeShippingThreshold - subtotal);
  const isFreeShipping = subtotal >= freeShippingThreshold;
  const finalTotal = Math.max(0, subtotal - discountAmount);

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    const clean = promoCode.trim().toUpperCase();
    if (clean === 'SHARKTANK' || clean === 'VOGUE' || clean === 'QI10') {
      setDiscountApplied({ code: clean, amount: 10 });
      setPromoError('');
    } else if (clean === '') {
      setPromoError('');
    } else {
      setPromoError('Code invalid or expired. Try "SHARKTANK" or "VOGUE"');
    }
  };

  const handleCheckoutSim = () => {
    setIsCheckingOut(true);
    setTimeout(() => {
      setIsCheckingOut(false);
      setOrderConfirmed(true);
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Slide-over panel */}
      <div className="relative w-full max-w-md bg-[#FAF7F2] text-[#1E1B18] h-full flex flex-col shadow-2xl z-10 animate-in slide-in-from-right duration-300">
        
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-[#E8DFD8] flex items-center justify-between bg-white">
          <div className="flex items-center gap-2">
            <h2 className="font-serif text-xl font-bold tracking-tight text-[#1E1B18]">
              Your Ritual Bag
            </h2>
            <span className="text-xs font-mono text-[#7E756B] bg-[#FAF7F2] px-2 py-0.5 rounded-full border border-[#E8DFD8]">
              {items.reduce((sum, item) => sum + item.quantity, 0)} {items.reduce((sum, item) => sum + item.quantity, 0) === 1 ? 'item' : 'items'}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#7E756B] hover:text-[#1E1B18] transition-colors rounded-sm"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Free Shipping Progress Bar */}
        <div className="px-5 py-3 bg-[#F5EFEB] border-b border-[#E8DFD8] text-xs">
          <div className="flex items-center justify-between mb-1.5">
            <span className="font-medium text-[#4A443E] flex items-center gap-1.5">
              <Truck className="w-3.5 h-3.5 text-[#A65D37]" />
              {isFreeShipping ? (
                <span className="text-[#A65D37] font-semibold">
                  ✦ You've Unlocked Free Carbon-Neutral Shipping!
                </span>
              ) : (
                <span>Add ${shippingRemaining.toFixed(2)} more for Free Shipping</span>
              )}
            </span>
            <span className="text-[10px] text-[#7E756B] font-mono">$75 Threshold</span>
          </div>
          <div className="w-full bg-[#E8DFD8] h-1.5 rounded-full overflow-hidden">
            <div
              className="bg-[#A65D37] h-full transition-all duration-300"
              style={{ width: `${Math.min(100, (subtotal / freeShippingThreshold) * 100)}%` }}
            />
          </div>
        </div>

        {/* Pre-Order Batch Alert */}
        <div className="px-5 py-2.5 bg-[#FAF7F2] border-b border-[#E8DFD8] flex items-center gap-2 text-xs text-[#A65D37]">
          <Sparkles className="w-4 h-4 shrink-0" />
          <span>
            <strong>Batch 01 Guaranteed:</strong> Reserved now, ships February 2027.
          </span>
        </div>

        {/* Items List or Confirmation State */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {orderConfirmed ? (
            <div className="py-12 text-center space-y-4 animate-in fade-in">
              <div className="w-16 h-16 bg-[#2D3D32] text-white rounded-full flex items-center justify-center mx-auto">
                <Check className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#1E1B18]">
                Batch 01 Reserved!
              </h3>
              <p className="text-xs sm:text-sm text-[#4A443E] max-w-xs mx-auto leading-relaxed">
                Thank you for joining our founding release. Your order reservation has been secured. You will receive email tracking in early February 2027.
              </p>
              <div className="p-4 bg-white rounded-lg border border-[#E8DFD8] text-xs text-left max-w-xs mx-auto">
                <p className="font-mono text-[11px] text-[#7E756B] mb-1">RESERVATION #QI-2027-0842</p>
                <p className="font-semibold text-[#1E1B18]">Whole-Flower Longevity Elixir</p>
                <p className="text-[#A65D37] mt-1 font-medium">Estimated Delivery: Feb 6–12, 2027</p>
              </div>
              <button
                onClick={() => {
                  setOrderConfirmed(false);
                  onClose();
                }}
                className="px-6 py-2.5 bg-[#1E1B18] text-white text-xs font-semibold tracking-wider uppercase rounded-md hover:bg-[#A65D37] transition-colors"
              >
                Back to Site
              </button>
            </div>
          ) : items.length === 0 ? (
            <div className="py-16 text-center space-y-3">
              <p className="font-serif text-lg text-[#7E756B]">Your ritual bag is empty</p>
              <p className="text-xs text-[#7E756B]">Reserve your Batch 01 harvest before allocation closes.</p>
              <button
                type="button"
                onClick={onAddDefaultItem}
                className="mt-2 px-5 py-2.5 bg-[#A65D37] text-white text-xs font-semibold tracking-wider uppercase rounded-md shadow-xs hover:bg-[#8C4724] transition-colors cursor-pointer"
              >
                Add 3-Month Ritual Set ($88)
              </button>
            </div>
          ) : (
            items.map((item) => (
              <div
                key={item.id}
                className="flex gap-4 p-4 bg-white rounded-xl border border-[#E8DFD8] shadow-2xs"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-20 h-20 rounded-lg object-cover border border-[#E8DFD8] shrink-0 bg-[#FAF7F2]"
                />
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start gap-2">
                      <h4 className="font-serif text-base font-bold text-[#1E1B18] leading-tight">
                        {item.title}
                      </h4>
                      <button
                        onClick={() => onRemoveItem(item.id)}
                        className="text-[#7E756B] hover:text-[#A65D37] p-1"
                        aria-label="Remove item"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                    <p className="text-xs text-[#A65D37] font-medium mt-0.5">{item.subtitle}</p>
                    <p className="text-[11px] text-[#7E756B] mt-0.5">
                      {item.purchaseType === 'subscribe' ? '✦ Auto-refill every 90 days (-15%)' : '✦ One-time reservation'}
                    </p>
                    <p className="text-[11px] text-[#7E756B] font-mono mt-0.5">{item.shipDate}</p>
                  </div>

                  <div className="flex items-center justify-between mt-3 pt-2 border-t border-[#E8DFD8]/60">
                    {/* Stepper */}
                    <div className="flex items-center border border-[#E8DFD8] rounded-md bg-[#FAF7F2]">
                      <button
                        onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                        className="w-6 h-6 flex items-center justify-center text-xs text-[#4A443E] hover:text-[#1E1B18]"
                      >
                        −
                      </button>
                      <span className="w-6 text-center text-xs font-semibold tabular-nums text-[#1E1B18]">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                        className="w-6 h-6 flex items-center justify-center text-xs text-[#4A443E] hover:text-[#1E1B18]"
                      >
                        +
                      </button>
                    </div>

                    {/* Price */}
                    <div className="text-right">
                      <span className="font-serif text-base font-bold text-[#1E1B18] tabular-nums">
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>
                      {item.originalPrice > item.price && (
                        <span className="block text-[10px] text-[#7E756B] line-through tabular-nums">
                          ${(item.originalPrice * item.quantity).toFixed(2)}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer / Checkout */}
        {items.length > 0 && !orderConfirmed && (
          <div className="p-5 border-t border-[#E8DFD8] bg-white space-y-4">
            
            {/* Promo Code Input */}
            <form onSubmit={handleApplyPromo} className="flex gap-2">
              <div className="relative flex-1">
                <input
                  type="text"
                  placeholder="Promo Code (try SHARKTANK)"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  className="w-full text-xs px-3 py-2 border border-[#E8DFD8] rounded-md focus:outline-none focus:border-[#A65D37] bg-[#FAF7F2]"
                />
                <Tag className="w-3.5 h-3.5 text-[#7E756B] absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
              <button
                type="submit"
                className="px-3 py-2 text-xs font-medium uppercase tracking-wider bg-[#FAF7F2] border border-[#E8DFD8] hover:bg-[#E8DFD8] rounded-md transition-colors"
              >
                Apply
              </button>
            </form>
            {discountApplied && (
              <p className="text-xs text-[#A65D37] flex items-center gap-1 font-medium">
                <Check className="w-3.5 h-3.5" />
                <span>Code <strong>{discountApplied.code}</strong> applied: -$10.00 off</span>
              </p>
            )}
            {promoError && (
              <p className="text-xs text-red-600">{promoError}</p>
            )}

            {/* Price Breakdown */}
            <div className="space-y-1.5 text-xs text-[#4A443E]">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="font-mono tabular-nums font-medium text-[#1E1B18]">${subtotal.toFixed(2)}</span>
              </div>
              {discountApplied && (
                <div className="flex justify-between text-[#A65D37]">
                  <span>Pre-Order VIP Discount</span>
                  <span className="font-mono tabular-nums">-${discountAmount.toFixed(2)}</span>
                </div>
              )}
              <div className="flex justify-between">
                <span>Estimated US Shipping</span>
                <span className="font-mono tabular-nums">
                  {isFreeShipping ? <strong className="text-[#A65D37]">FREE</strong> : '$4.95'}
                </span>
              </div>
              <div className="flex justify-between pt-2 border-t border-[#E8DFD8] text-sm font-bold text-[#1E1B18]">
                <span>Total Reserved</span>
                <span className="font-serif text-lg tabular-nums">
                  ${(finalTotal + (isFreeShipping ? 0 : 4.95)).toFixed(2)}
                </span>
              </div>
            </div>

            {/* Shopify Express Checkout Strip */}
            <div className="grid grid-cols-3 gap-2 pt-1">
              <button
                type="button"
                onClick={handleCheckoutSim}
                className="py-2 px-1 bg-[#5A31F4] text-white rounded text-[11px] font-bold tracking-tight hover:opacity-95 transition-opacity"
              >
                Shop Pay
              </button>
              <button
                type="button"
                onClick={handleCheckoutSim}
                className="py-2 px-1 bg-black text-white rounded text-[11px] font-bold tracking-tight hover:opacity-90 transition-opacity"
              >
                Apple Pay
              </button>
              <button
                type="button"
                onClick={handleCheckoutSim}
                className="py-2 px-1 bg-[#FFC439] text-[#003087] rounded text-[11px] font-bold tracking-tight hover:opacity-95 transition-opacity"
              >
                PayPal
              </button>
            </div>

            {/* Primary Checkout Button */}
            <button
              type="button"
              onClick={handleCheckoutSim}
              disabled={isCheckingOut}
              className="w-full py-3.5 px-4 bg-[#A65D37] hover:bg-[#8C4724] text-white text-xs font-semibold tracking-widest uppercase rounded-md shadow-xs transition-colors flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
            >
              {isCheckingOut ? (
                <span>Securing Batch 01 Allocation...</span>
              ) : (
                <>
                  <span>Proceed to Pre-Order Checkout</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>

            {/* Trust badge */}
            <p className="text-center text-[11px] text-[#7E756B] flex items-center justify-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#A65D37]" />
              <span>30-Day Ritual Guarantee · SSL Encrypted Checkout</span>
            </p>
          </div>
        )}

      </div>
    </div>
  );
};
