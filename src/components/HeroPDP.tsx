import React, { useState } from 'react';
import { Star, ShieldCheck, Truck, RefreshCw, Sparkles, Check, Heart, Clock, Award } from 'lucide-react';
import { ProductVariantId, PurchaseType } from '../types';
import heroImg from '../assets/images/the_qi_hero_render_1794350711469.jpg';
import steepingImg from '../assets/images/steeping_daily_ritual_1794350713554.jpg';
import flatlayImg from '../assets/images/six_botanicals_flatlay_1794350714342.jpg';
import founderImg from '../assets/images/founder_lisa_li_1794350712064.jpg';

interface HeroPDPProps {
  selectedVariant: ProductVariantId;
  onVariantChange: (variant: ProductVariantId) => void;
  purchaseType: PurchaseType;
  onPurchaseTypeChange: (type: PurchaseType) => void;
  quantity: number;
  onQuantityChange: (qty: number) => void;
  onAddToCart: () => void;
}

export const HeroPDP: React.FC<HeroPDPProps> = ({
  selectedVariant,
  onVariantChange,
  purchaseType,
  onPurchaseTypeChange,
  quantity,
  onQuantityChange,
  onAddToCart,
}) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const images = [
    {
      src: heroImg,
      alt: 'The Qi Whole-Flower Daily Longevity Elixir Ritual Set with blooming yellow Royal Chrysanthemum',
      caption: 'Batch 01 Limited Edition Canister & Artisanal Glassware',
    },
    {
      src: steepingImg,
      alt: 'Blooming whole blue lotus flower being steeped in clear glass cup',
      caption: 'Mindful 3-minute whole blossom steep',
    },
    {
      src: flatlayImg,
      alt: 'Six sacred botanicals in handmade ceramic dishes on raw linen',
      caption: 'Six single-origin whole botanicals',
    },
    {
      src: founderImg,
      alt: 'Founder Lisa Li holding brewed flower tea in NYC botanical studio',
      caption: 'Formulated in NYC by Founder Lisa Li',
    },
  ];

  // Pricing calculations
  // 3-Month Set: Base one-time $88 (was $114). Subscription is 15% off = $74.80.
  // 1-Month Box: Base one-time $34 (was $38). Subscription is 15% off = $28.90.
  const isThreeMonth = selectedVariant === '3-month';
  const isSub = purchaseType === 'subscribe';

  const basePrice = isThreeMonth ? 88 : 34;
  const originalPrice = isThreeMonth ? 114 : 38;
  const currentPrice = isSub ? Math.round(basePrice * 0.85 * 100) / 100 : basePrice;
  const perServing = isThreeMonth
    ? (isSub ? '$0.83' : '$0.98')
    : (isSub ? '$0.96' : '$1.13');
  const savingsPct = isThreeMonth ? (isSub ? '34%' : '23%') : (isSub ? '24%' : '11%');

  return (
    <section id="hero" className="pt-6 pb-16 md:pt-10 md:pb-24 border-b border-[#E8DFD8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb / Top kicker */}
        <div className="flex items-center gap-2 text-xs text-[#7E756B] mb-6 tracking-wider uppercase">
          <span className="hover:text-[#1E1B18] transition-colors cursor-pointer">The Qi</span>
          <span aria-hidden="true">/</span>
          <span className="hover:text-[#1E1B18] transition-colors cursor-pointer">Botanical Longevity</span>
          <span aria-hidden="true">/</span>
          <span className="text-[#A65D37] font-medium">Batch 01 Pre-Order</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* LEFT COLUMN: Gallery with Thumbnails (Sticky on desktop) */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            
            {/* Main Stage Image */}
            <div className="relative aspect-4/3 w-full bg-[#F3ECE5] rounded-xl overflow-hidden border border-[#E8DFD8] shadow-xs group">
              <img
                src={images[activeImageIndex].src}
                alt={images[activeImageIndex].alt}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.02]"
              />
              
              {/* Batch Tag / Status Overlay */}
              <div className="absolute top-4 left-4 flex flex-col gap-1.5 pointer-events-none">
                <span className="bg-[#1E1B18]/90 text-[#FAF7F2] text-[11px] font-semibold tracking-widest uppercase px-3 py-1 rounded-sm shadow-xs backdrop-blur-xs">
                  BATCH 01 · 2,500 UNITS RESERVED
                </span>
                {isThreeMonth && (
                  <span className="bg-[#A65D37] text-white text-[10px] font-bold tracking-widest uppercase px-2.5 py-0.5 rounded-sm shadow-xs w-max">
                    Includes Free Ribbed Glass Cup ($28 Value)
                  </span>
                )}
              </div>

              {/* Caption pill at bottom */}
              <div className="absolute bottom-3 left-4 right-4 bg-white/85 backdrop-blur-md px-3.5 py-2 rounded-md border border-[#E8DFD8]/60 text-xs text-[#4A443E] flex items-center justify-between">
                <span>{images[activeImageIndex].caption}</span>
                <span className="text-[11px] font-mono text-[#7E756B] tabular-nums">
                  0{activeImageIndex + 1} / 0{images.length}
                </span>
              </div>
            </div>

            {/* Thumbnail Navigation Strip */}
            <div className="grid grid-cols-4 gap-3">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`relative aspect-4/3 rounded-lg overflow-hidden border-2 transition-all cursor-pointer ${
                    activeImageIndex === idx
                      ? 'border-[#A65D37] ring-2 ring-[#A65D37]/20 shadow-xs'
                      : 'border-[#E8DFD8] opacity-70 hover:opacity-100 hover:border-[#7E756B]'
                  }`}
                  aria-label={`View image ${idx + 1}`}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Value Props Strip under gallery */}
            <div className="grid grid-cols-3 gap-2 pt-3 border-t border-[#E8DFD8]/70 text-center">
              <div className="p-2">
                <p className="font-serif text-lg text-[#1E1B18] font-bold">100%</p>
                <p className="text-[11px] text-[#7E756B] uppercase tracking-wider">Single-Origin Flowers</p>
              </div>
              <div className="p-2 border-x border-[#E8DFD8]/70">
                <p className="font-serif text-lg text-[#1E1B18] font-bold">3 Re-Steeps</p>
                <p className="text-[11px] text-[#7E756B] uppercase tracking-wider">Per Whole Flower</p>
              </div>
              <div className="p-2">
                <p className="font-serif text-lg text-[#1E1B18] font-bold">0.0g</p>
                <p className="text-[11px] text-[#7E756B] uppercase tracking-wider">Sugar or Caffeine</p>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Contiguous Purchase Module */}
          <div className="lg:col-span-5 flex flex-col">
            
            {/* Reviews & Social Proof */}
            <div className="flex items-center gap-2 mb-2">
              <div className="flex text-[#C5A059]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <span className="text-xs font-semibold text-[#1E1B18] tracking-tight">4.9 / 5.0</span>
              <span className="text-xs text-[#7E756B]">· 2,840+ verified ritual reviews</span>
            </div>

            {/* Product Title */}
            <h1 className="font-serif text-3xl sm:text-4xl text-[#1E1B18] font-semibold tracking-tight leading-[1.15] mb-2 text-balance">
              Whole-Flower Daily Longevity Elixir
            </h1>

            {/* Sub-headline / Brand positioning */}
            <p className="text-sm sm:text-base text-[#4A443E] leading-relaxed mb-5">
              An ancestral Eastern daily wellness ritual designed to soothe somatic stress, enhance cellular autophagy, and cultivate radiant skin from within. Handcrafted with six organically wildcrafted whole blossoms.
            </p>

            {/* Price display with savings badge */}
            <div className="flex items-baseline gap-3 mb-5 p-3.5 bg-white rounded-lg border border-[#E8DFD8]">
              <div className="flex items-baseline gap-2">
                <span className="text-2xl sm:text-3xl font-serif font-bold text-[#1E1B18] tabular-nums">
                  ${currentPrice.toFixed(2)}
                </span>
                <span className="text-base text-[#7E756B] line-through tabular-nums">
                  ${originalPrice.toFixed(2)}
                </span>
              </div>
              <span className="text-xs font-semibold text-[#A65D37] tracking-wider uppercase bg-[#A65D37]/10 px-2 py-0.5 rounded-sm">
                Save {savingsPct}
              </span>
              <span className="ml-auto text-xs text-[#7E756B] font-mono tabular-nums">
                {perServing} / ritual
              </span>
            </div>

            {/* OFFER SELECTOR: 3-Month Set vs Single Box */}
            <div className="mb-5">
              <div className="flex items-center justify-between text-xs font-semibold tracking-wider uppercase text-[#1E1B18] mb-2.5">
                <span>Select Supply</span>
                <span className="text-[#A65D37] normal-case text-xs font-normal">
                  {isThreeMonth ? '90 Daily Rituals · Free Cup Included' : '30 Daily Rituals'}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                
                {/* 3-Month Option */}
                <button
                  type="button"
                  onClick={() => onVariantChange('3-month')}
                  className={`relative p-4 text-left rounded-lg border-2 transition-all cursor-pointer ${
                    isThreeMonth
                      ? 'border-[#A65D37] bg-white shadow-xs ring-1 ring-[#A65D37]'
                      : 'border-[#E8DFD8] bg-[#FAF7F2] hover:border-[#7E756B]'
                  }`}
                >
                  <span className="absolute -top-2.5 right-3 bg-[#A65D37] text-white text-[10px] font-bold tracking-widest uppercase px-2 py-0.5 rounded-full shadow-xs">
                    BEST VALUE
                  </span>
                  <div className="flex justify-between items-start mb-1">
                    <span className="font-serif text-lg font-bold text-[#1E1B18]">3-Month Set</span>
                    <span className="text-sm font-bold text-[#1E1B18] tabular-nums">
                      ${isSub ? '74.80' : '88.00'}
                    </span>
                  </div>
                  <p className="text-xs text-[#4A443E] mb-2">90 Whole-Flower Rituals</p>
                  <div className="text-[11px] text-[#A65D37] font-medium flex items-center gap-1">
                    <Check className="w-3.5 h-3.5 shrink-0" />
                    <span>Free Ribbed Glass Cup ($28 value)</span>
                  </div>
                </button>

                {/* 1-Month Option */}
                <button
                  type="button"
                  onClick={() => onVariantChange('1-month')}
                  className={`relative p-4 text-left rounded-lg border-2 transition-all cursor-pointer ${
                    !isThreeMonth
                      ? 'border-[#A65D37] bg-white shadow-xs ring-1 ring-[#A65D37]'
                      : 'border-[#E8DFD8] bg-[#FAF7F2] hover:border-[#7E756B]'
                  }`}
                >
                  <div className="flex justify-between items-start mb-1">
                    <span className="font-serif text-lg font-bold text-[#1E1B18]">Single Box</span>
                    <span className="text-sm font-bold text-[#1E1B18] tabular-nums">
                      ${isSub ? '28.90' : '34.00'}
                    </span>
                  </div>
                  <p className="text-xs text-[#4A443E] mb-2">30 Whole-Flower Rituals</p>
                  <div className="text-[11px] text-[#7E756B] flex items-center gap-1">
                    <span>Standard single cylinder canister</span>
                  </div>
                </button>
              </div>
            </div>

            {/* PURCHASE TYPE: Subscribe & Save vs One-Time */}
            <div className="mb-5 bg-white p-3.5 rounded-lg border border-[#E8DFD8]">
              <div className="space-y-2">
                
                {/* Subscribe Option */}
                <label
                  onClick={() => onPurchaseTypeChange('subscribe')}
                  className={`flex items-start gap-3 p-3 rounded-md border cursor-pointer transition-colors ${
                    isSub
                      ? 'border-[#A65D37] bg-[#FAF7F2]'
                      : 'border-[#E8DFD8] hover:border-[#7E756B]'
                  }`}
                >
                  <input
                    type="radio"
                    name="purchase_type"
                    checked={isSub}
                    onChange={() => onPurchaseTypeChange('subscribe')}
                    className="mt-0.5 text-[#A65D37] focus:ring-[#A65D37]"
                  />
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="text-xs sm:text-sm font-bold text-[#1E1B18]">
                        Subscribe & Save 15%
                      </span>
                      <span className="text-xs font-semibold text-[#A65D37] uppercase tracking-wider">
                        Most Flexible
                      </span>
                    </div>
                    <p className="text-xs text-[#7E756B] mt-0.5">
                      Delivered every {isThreeMonth ? '90' : '30'} days starting Feb 2027. Pause, skip, or cancel anytime with 1 click.
                    </p>
                  </div>
                </label>

                {/* One-Time Option */}
                <label
                  onClick={() => onPurchaseTypeChange('onetime')}
                  className={`flex items-start gap-3 p-3 rounded-md border cursor-pointer transition-colors ${
                    !isSub
                      ? 'border-[#A65D37] bg-[#FAF7F2]'
                      : 'border-[#E8DFD8] hover:border-[#7E756B]'
                  }`}
                >
                  <input
                    type="radio"
                    name="purchase_type"
                    checked={!isSub}
                    onChange={() => onPurchaseTypeChange('onetime')}
                    className="mt-0.5 text-[#A65D37] focus:ring-[#A65D37]"
                  />
                  <div className="flex-1">
                    <span className="text-xs sm:text-sm font-medium text-[#1E1B18]">
                      One-Time Pre-Order
                    </span>
                    <p className="text-xs text-[#7E756B] mt-0.5">
                      Single batch reservation without recurring delivery.
                    </p>
                  </div>
                </label>
              </div>
            </div>

            {/* PRE-ORDER SHIP DATE CALLOUT BANNER */}
            <div className="mb-5 p-3.5 bg-[#FAF7F2] border border-[#E8DFD8] rounded-lg flex items-start gap-3">
              <Clock className="w-5 h-5 text-[#A65D37] shrink-0 mt-0.5" />
              <div className="text-xs text-[#4A443E]">
                <p className="font-semibold text-[#1E1B18]">
                  Pre-Order Ships: <span className="text-[#A65D37]">Early February 2027</span>
                </p>
                <p className="text-[#7E756B] mt-0.5">
                  Batch 01 whole flowers are gently harvested at peak blossom in late autumn and cold-dried. Pre-ordering locks in guaranteed first dispatch and launch pricing.
                </p>
              </div>
            </div>

            {/* QUANTITY STEPPER + PRIMARY ADD TO CART CTA */}
            <div className="flex gap-3 mb-5">
              
              {/* Stepper */}
              <div className="flex items-center border border-[#E8DFD8] bg-white rounded-md px-2 shrink-0">
                <button
                  type="button"
                  onClick={() => onQuantityChange(Math.max(1, quantity - 1))}
                  className="w-8 h-10 flex items-center justify-center text-lg text-[#4A443E] hover:text-[#1E1B18] transition-colors"
                  aria-label="Decrease quantity"
                >
                  −
                </button>
                <span className="w-8 text-center text-sm font-semibold text-[#1E1B18] tabular-nums">
                  {quantity}
                </span>
                <button
                  type="button"
                  onClick={() => onQuantityChange(quantity + 1)}
                  className="w-8 h-10 flex items-center justify-center text-lg text-[#4A443E] hover:text-[#1E1B18] transition-colors"
                  aria-label="Increase quantity"
                >
                  +
                </button>
              </div>

              {/* Main CTA */}
              <button
                type="button"
                onClick={onAddToCart}
                className="flex-1 py-3.5 px-6 bg-[#A65D37] hover:bg-[#8C4724] text-white text-xs sm:text-sm font-semibold tracking-widest uppercase rounded-md shadow-sm transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer group active:scale-[0.99]"
              >
                <span>Pre-Order Batch 01 · ${(currentPrice * quantity).toFixed(2)}</span>
              </button>
            </div>

            {/* TRUST GUARANTEES LIST */}
            <div className="space-y-2 pt-2 border-t border-[#E8DFD8] text-xs text-[#4A443E]">
              <div className="flex items-center gap-2.5">
                <Truck className="w-4 h-4 text-[#A65D37] shrink-0" />
                <span>
                  <strong>Free US Carbon-Neutral Shipping</strong> on 3-month sets & subscriptions.
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-4 h-4 text-[#A65D37] shrink-0" />
                <span>
                  <strong>30-Day Mindful Ritual Guarantee:</strong> Feel the shift in calm and sleep, or full refund.
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Sparkles className="w-4 h-4 text-[#A65D37] shrink-0" />
                <span>
                  <strong>Batch 01 Collector Perk:</strong> Numbered certificates with origin harvest coordinates.
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
