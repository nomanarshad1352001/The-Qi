import React from 'react';
import { ProductVariantId, PurchaseType } from '../types';
import { ShoppingBag, Sparkles } from 'lucide-react';

interface MobileStickyBuyBarProps {
  selectedVariant: ProductVariantId;
  onVariantChange: (variant: ProductVariantId) => void;
  purchaseType: PurchaseType;
  onAddToCart: () => void;
}

export const MobileStickyBuyBar: React.FC<MobileStickyBuyBarProps> = ({
  selectedVariant,
  onVariantChange,
  purchaseType,
  onAddToCart,
}) => {
  const isThreeMonth = selectedVariant === '3-month';
  const isSub = purchaseType === 'subscribe';

  const basePrice = isThreeMonth ? 88 : 34;
  const originalPrice = isThreeMonth ? 114 : 38;
  const currentPrice = isSub ? Math.round(basePrice * 0.85 * 100) / 100 : basePrice;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-[#FAF7F2]/95 backdrop-blur-md border-t border-[#E8DFD8] px-4 py-2.5 sm:hidden shadow-[0_-4px_16px_rgba(0,0,0,0.06)]">
      <div className="flex items-center justify-between gap-3 max-w-md mx-auto">
        
        {/* Left: Quick variant switcher + Price */}
        <div className="flex flex-col shrink-0">
          <div className="flex items-center gap-1.5 mb-0.5">
            <button
              type="button"
              onClick={() => onVariantChange('3-month')}
              className={`text-[11px] font-semibold tracking-wider uppercase px-2 py-0.5 rounded-sm transition-colors ${
                isThreeMonth
                  ? 'bg-[#A65D37] text-white'
                  : 'bg-[#E8DFD8] text-[#4A443E]'
              }`}
            >
              3-Mo Set
            </button>
            <button
              type="button"
              onClick={() => onVariantChange('1-month')}
              className={`text-[11px] font-semibold tracking-wider uppercase px-2 py-0.5 rounded-sm transition-colors ${
                !isThreeMonth
                  ? 'bg-[#A65D37] text-white'
                  : 'bg-[#E8DFD8] text-[#4A443E]'
              }`}
            >
              1-Mo
            </button>
          </div>

          <div className="flex items-baseline gap-1.5">
            <span className="font-serif text-base font-bold text-[#1E1B18] tabular-nums">
              ${currentPrice.toFixed(2)}
            </span>
            <span className="text-[11px] text-[#7E756B] line-through tabular-nums">
              ${originalPrice.toFixed(2)}
            </span>
            <span className="text-[9px] font-semibold text-[#A65D37] uppercase">
              {isSub ? 'Sub -15%' : 'Pre-Order'}
            </span>
          </div>
        </div>

        {/* Right: Primary Pre-Order CTA Button (Touch target min 44px) */}
        <button
          type="button"
          onClick={onAddToCart}
          className="flex-1 min-h-[44px] px-4 py-2.5 bg-[#A65D37] active:bg-[#8C4724] text-white text-xs font-semibold tracking-wider uppercase rounded-md shadow-xs flex items-center justify-center gap-2 transition-transform active:scale-[0.98] cursor-pointer"
        >
          <ShoppingBag className="w-4 h-4 shrink-0" />
          <span className="truncate">Pre-Order · Feb '27</span>
        </button>

      </div>
    </div>
  );
};
