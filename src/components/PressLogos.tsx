import React, { useState } from 'react';
import { Quote } from 'lucide-react';

export const PressLogos: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const pressQuotes = [
    {
      outlet: 'VOGUE',
      quote: 'The Qi has turned our frantic daily tea habit into an intoxicating, mindful sensory experience that grounds the spirit.',
      author: 'Beauty & Wellness Edit',
      fontStyle: 'font-serif tracking-[0.25em] text-lg font-bold',
    },
    {
      outlet: 'SHARK TANK',
      quote: 'A remarkable synthesis of ancient Eastern herbal medicine and modern luxury ritual that resonated deeply with the Sharks.',
      author: 'Season 13 Feature',
      fontStyle: 'font-sans tracking-[0.18em] text-base font-black uppercase',
    },
    {
      outlet: 'FORBES',
      quote: 'Redefining CPG wellness through single-origin, whole-flower integrity and radical agricultural transparency.',
      author: 'Next 1000 Honoree',
      fontStyle: 'font-serif tracking-[0.15em] text-lg font-semibold',
    },
    {
      outlet: 'BON APPÉTIT',
      quote: 'A breathtaking spectacle in a clear glass cup that genuinely calms your nervous system after a marathon day.',
      author: 'Highly Recommended',
      fontStyle: 'font-serif italic tracking-[0.08em] text-lg font-normal',
    },
  ];

  return (
    <section className="py-12 md:py-16 bg-[#F5EFEB] border-b border-[#E8DFD8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Subtle section label */}
        <p className="text-center text-xs font-semibold tracking-[0.2em] text-[#7E756B] uppercase mb-8">
          AS CELEBRATED IN
        </p>

        {/* Press Wordmark Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 md:gap-16 mb-8">
          {pressQuotes.map((item, index) => (
            <button
              key={item.outlet}
              onClick={() => setActiveTab(index)}
              className={`transition-all py-2 px-3 border-b-2 cursor-pointer ${
                activeTab === index
                  ? 'border-[#A65D37] text-[#1E1B18] opacity-100 scale-105'
                  : 'border-transparent text-[#7E756B] opacity-60 hover:opacity-90 hover:text-[#1E1B18]'
              }`}
              aria-label={`View ${item.outlet} review`}
            >
              <span className={item.fontStyle}>{item.outlet}</span>
            </button>
          ))}
        </div>

        {/* Active Quote Card */}
        <div className="max-w-3xl mx-auto text-center px-4">
          <Quote className="w-8 h-8 text-[#A65D37]/40 mx-auto mb-3" />
          <p className="font-serif text-lg sm:text-2xl text-[#1E1B18] italic leading-relaxed mb-3">
            "{pressQuotes[activeTab].quote}"
          </p>
          <div className="text-xs text-[#7E756B] tracking-wider uppercase">
            <span>{pressQuotes[activeTab].outlet}</span>
            <span aria-hidden="true" className="mx-2">·</span>
            <span>{pressQuotes[activeTab].author}</span>
          </div>
        </div>

      </div>
    </section>
  );
};
