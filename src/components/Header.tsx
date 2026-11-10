import React, { useState } from 'react';
import { ShoppingBag, Menu, X } from 'lucide-react';

interface HeaderProps {
  cartCount: number;
  onOpenCart: () => void;
  onOpenPreOrder: () => void;
}

export const Header: React.FC<HeaderProps> = ({ cartCount, onOpenCart, onOpenPreOrder }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'The Ritual', href: '#ritual' },
    { label: 'Six Botanicals', href: '#botanicals' },
    { label: 'Clinical Science', href: '#clinical' },
    { label: 'Founder Story', href: '#founder' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <>
      <header className="sticky top-0 z-40 bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#E8DFD8] transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-8">
          {/* Zone 1: Brand wordmark (single line, single element) */}
          <a
            href="#"
            className="font-serif text-2xl sm:text-3xl tracking-[0.25em] text-[#1E1B18] font-semibold uppercase whitespace-nowrap shrink-0 hover:opacity-80 transition-opacity"
          >
            THE QI
          </a>

          {/* Zone 2: 4-5 single-line clean text navigation links */}
          <nav className="hidden md:flex items-center gap-7 text-xs lg:text-sm font-medium tracking-wider text-[#4A443E] uppercase">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-[#A65D37] transition-colors whitespace-nowrap shrink-0 py-1 border-b border-transparent hover:border-[#A65D37]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenPreOrder}
              className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-xs font-semibold tracking-wider uppercase text-white bg-[#A65D37] hover:bg-[#8C4724] transition-colors rounded-sm shadow-xs whitespace-nowrap shrink-0"
            >
              Pre-Order Now
            </button>

            <button
              onClick={onOpenCart}
              aria-label="View shopping bag"
              className="relative p-2 text-[#1E1B18] hover:text-[#A65D37] transition-colors flex items-center gap-1.5"
            >
              <ShoppingBag className="w-5 h-5 stroke-[1.75]" />
              <span className="text-xs font-medium tracking-wider hidden sm:inline uppercase">Bag</span>
              {cartCount > 0 && (
                <span className="inline-flex items-center justify-center min-w-[18px] h-[18px] px-1 text-[10px] font-bold text-white bg-[#A65D37] rounded-full">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile menu trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-[#1E1B18] hover:text-[#A65D37]"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#FAF7F2] border-b border-[#E8DFD8] px-6 py-6 shadow-lg animate-in slide-in-from-top-2">
            <nav className="flex flex-col gap-4 text-sm font-medium tracking-wider uppercase text-[#2C2926]">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2 border-b border-[#E8DFD8]/60 hover:text-[#A65D37] transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenPreOrder();
                  }}
                  className="w-full py-3 text-center text-xs font-semibold tracking-wider uppercase text-white bg-[#A65D37] hover:bg-[#8C4724] rounded-sm transition-colors"
                >
                  Reserve Batch 01 (Feb 2027)
                </button>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};
