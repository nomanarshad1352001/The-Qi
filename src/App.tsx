import React, { useState } from 'react';
import { AnnouncementBar } from './components/AnnouncementBar';
import { Header } from './components/Header';
import { HeroPDP } from './components/HeroPDP';
import { PressLogos } from './components/PressLogos';
import { FounderStory } from './components/FounderStory';
import { ClinicalResearch } from './components/ClinicalResearch';
import { DailyRitual } from './components/DailyRitual';
import { BotanicalsGrid } from './components/BotanicalsGrid';
import { WhoItsFor } from './components/WhoItsFor';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { MobileStickyBuyBar } from './components/MobileStickyBuyBar';
import { CartDrawer } from './components/CartDrawer';
import { CoaModal } from './components/CoaModal';
import { ProductVariantId, PurchaseType, CartItem } from './types';

export default function App() {
  const [selectedVariant, setSelectedVariant] = useState<ProductVariantId>('3-month');
  const [purchaseType, setPurchaseType] = useState<PurchaseType>('subscribe');
  const [quantity, setQuantity] = useState<number>(1);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [isCoaOpen, setIsCoaOpen] = useState<boolean>(false);

  // Initial cart items (default with 1 3-Month Set for great immediate e-commerce state)
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 'item-3mo-sub',
      variantId: '3-month',
      title: 'Whole-Flower Longevity Elixir (3-Month Set)',
      subtitle: '90 Daily Rituals + Free Ribbed Glass Tasting Cup',
      purchaseType: 'subscribe',
      price: 74.80,
      originalPrice: 114.00,
      quantity: 1,
      subscriptionFrequency: '90',
      image: '/src/assets/images/the_qi_hero_render_1794350711469.jpg',
      shipDate: 'Ships Early Feb 2027 (Batch 01)',
    },
  ]);

  const handleAddToCart = () => {
    const isThreeMonth = selectedVariant === '3-month';
    const isSub = purchaseType === 'subscribe';

    const basePrice = isThreeMonth ? 88 : 34;
    const originalPrice = isThreeMonth ? 114 : 38;
    const finalPrice = isSub ? Math.round(basePrice * 0.85 * 100) / 100 : basePrice;

    const itemId = `item-${selectedVariant}-${purchaseType}`;
    const itemTitle = isThreeMonth
      ? 'Whole-Flower Longevity Elixir (3-Month Set)'
      : 'Whole-Flower Longevity Elixir (Single Box)';
    const itemSubtitle = isThreeMonth
      ? '90 Daily Rituals + Free Ribbed Glass Tasting Cup'
      : '30 Daily Whole-Flower Rituals';

    setCartItems((prev) => {
      const existing = prev.find((i) => i.id === itemId);
      if (existing) {
        return prev.map((i) =>
          i.id === itemId ? { ...i, quantity: i.quantity + quantity } : i
        );
      } else {
        return [
          ...prev,
          {
            id: itemId,
            variantId: selectedVariant,
            title: itemTitle,
            subtitle: itemSubtitle,
            purchaseType,
            price: finalPrice,
            originalPrice,
            quantity,
            subscriptionFrequency: isThreeMonth ? '90' : '30',
            image: '/src/assets/images/the_qi_hero_render_1794350711469.jpg',
            shipDate: 'Ships Early Feb 2027 (Batch 01)',
          },
        ];
      }
    });

    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (id: string, qty: number) => {
    if (qty <= 0) {
      handleRemoveItem(id);
    } else {
      setCartItems((prev) =>
        prev.map((item) => (item.id === id ? { ...item, quantity: qty } : item))
      );
    }
  };

  const handleRemoveItem = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleAddDefaultItem = () => {
    setSelectedVariant('3-month');
    setPurchaseType('subscribe');
    setQuantity(1);
    handleAddToCart();
  };

  const scrollToHero = () => {
    const hero = document.getElementById('hero');
    if (hero) {
      hero.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const totalCartCount = cartItems.reduce((acc, i) => acc + i.quantity, 0);

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-[#2C2926] relative pb-16 sm:pb-0">
      {/* 1. Announcement Bar */}
      <AnnouncementBar />

      {/* 2. Replo Shopify Header */}
      <Header
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenPreOrder={scrollToHero}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 3. Hero Section (Product Detail Page) */}
        <HeroPDP
          selectedVariant={selectedVariant}
          onVariantChange={setSelectedVariant}
          purchaseType={purchaseType}
          onPurchaseTypeChange={setPurchaseType}
          quantity={quantity}
          onQuantityChange={setQuantity}
          onAddToCart={handleAddToCart}
        />

        {/* 4. Press & Accolades Proof Strip */}
        <PressLogos />

        {/* 5. Founder Story */}
        <FounderStory />

        {/* 6. Clinical Research & Lab Testing */}
        <ClinicalResearch onOpenCoa={() => setIsCoaOpen(true)} />

        {/* 7. The Daily Ritual (How to Use It) */}
        <DailyRitual />

        {/* 8. Six Sacred Botanicals Deep Dive */}
        <BotanicalsGrid />

        {/* 9. Who It's For vs Who It's Not For */}
        <WhoItsFor />

        {/* 10. Frequently Asked Questions */}
        <FAQSection />
      </main>

      {/* 11. Footer */}
      <Footer />

      {/* 12. Mobile-First Fixed Bottom Add-to-Cart Bar */}
      <MobileStickyBuyBar
        selectedVariant={selectedVariant}
        onVariantChange={setSelectedVariant}
        purchaseType={purchaseType}
        onAddToCart={handleAddToCart}
      />

      {/* 13. Interactive Slide-Over Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onAddDefaultItem={handleAddDefaultItem}
      />

      {/* 14. Certificate of Analysis (COA) / Lab Modal */}
      <CoaModal
        isOpen={isCoaOpen}
        onClose={() => setIsCoaOpen(false)}
      />
    </div>
  );
}
