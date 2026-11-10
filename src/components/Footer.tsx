import React, { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
    }
  };

  return (
    <footer className="bg-[#1E1B18] text-[#FAF7F2] pt-16 pb-24 sm:pb-16 border-t border-[#332D28]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-14 border-b border-[#332D28]">
          
          {/* Brand & Mission Column */}
          <div className="md:col-span-5 space-y-4">
            <span className="font-serif text-3xl tracking-[0.25em] font-semibold uppercase block">
              THE QI
            </span>
            <p className="text-sm text-[#FAF7F2]/70 leading-relaxed max-w-sm">
              Rooted in Eastern herbalism and founded in New York City in 2019. We partner directly with regenerative family farms to bring whole-flower botanical wellness into your daily living space.
            </p>
            <div className="text-xs text-[#FAF7F2]/50 tracking-wider uppercase space-x-3 pt-2">
              <span>NYC Est. 2019</span>
              <span aria-hidden="true">·</span>
              <span>As seen on Shark Tank</span>
              <span aria-hidden="true">·</span>
              <span>Vogue · Forbes · Bon Appétit</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2 space-y-3">
            <p className="text-xs font-semibold tracking-widest text-[#E8D8C3] uppercase">
              The Journey
            </p>
            <ul className="space-y-2 text-xs text-[#FAF7F2]/70">
              <li><a href="#hero" className="hover:text-white transition-colors">Batch 01 Pre-Order</a></li>
              <li><a href="#ritual" className="hover:text-white transition-colors">The Daily Ritual</a></li>
              <li><a href="#botanicals" className="hover:text-white transition-colors">Six Whole Botanicals</a></li>
              <li><a href="#clinical" className="hover:text-white transition-colors">Clinical Research</a></li>
              <li><a href="#founder" className="hover:text-white transition-colors">Founder Story</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">Pre-Order FAQ</a></li>
            </ul>
          </div>

          {/* Sourcing & Transparency */}
          <div className="md:col-span-2 space-y-3">
            <p className="text-xs font-semibold tracking-widest text-[#E8D8C3] uppercase">
              Integrity
            </p>
            <ul className="space-y-2 text-xs text-[#FAF7F2]/70">
              <li><span>Single-Origin Farms</span></li>
              <li><span>Zero Artificial Flavors</span></li>
              <li><span>Plastic-Free Whole Flowers</span></li>
              <li><span>Third-Party Lab Tested</span></li>
              <li><span>Carbon-Neutral Shipping</span></li>
            </ul>
          </div>

          {/* Harvest Newsletter Dispatch */}
          <div className="md:col-span-3 space-y-3">
            <p className="text-xs font-semibold tracking-widest text-[#E8D8C3] uppercase">
              Harvest Dispatches
            </p>
            <p className="text-xs text-[#FAF7F2]/70 leading-relaxed">
              Receive updates on Batch 01 curing, farm harvest journals, and exclusive pre-order notifications.
            </p>

            {subscribed ? (
              <div className="p-3 bg-[#2D3D32] rounded-md text-xs text-white flex items-center gap-2">
                <Check className="w-4 h-4 text-[#C5A059]" />
                <span>You are on the Batch 01 harvest list.</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 bg-[#2C2621] text-xs px-3 py-2.5 rounded border border-[#443C34] text-white placeholder-[#FAF7F2]/40 focus:outline-none focus:border-[#A65D37]"
                />
                <button
                  type="submit"
                  className="px-3.5 py-2.5 bg-[#A65D37] hover:bg-[#8C4724] text-white rounded text-xs font-semibold uppercase tracking-wider transition-colors shrink-0"
                  aria-label="Subscribe"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Bottom copyright and legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#FAF7F2]/50 gap-4">
          <p>© 2019–2027 The Qi Inc. All rights reserved. New York City.</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-white transition-colors cursor-pointer">Privacy Policy</span>
            <span className="hover:text-white transition-colors cursor-pointer">Terms of Service</span>
            <span className="hover:text-white transition-colors cursor-pointer">Accessibility</span>
            <span className="hover:text-white transition-colors cursor-pointer">care@the-qi.com</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
