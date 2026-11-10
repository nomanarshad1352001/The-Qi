import React, { useState } from 'react';
import { X, Sparkles } from 'lucide-react';

export const AnnouncementBar: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="relative bg-[#1E1B18] text-[#FAF7F2] text-xs font-medium tracking-wide py-2 px-4 transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 text-center pr-6">
        <Sparkles className="w-3.5 h-3.5 text-[#C5A059] shrink-0 inline" />
        <span>
          <strong className="font-semibold text-[#E8D8C3]">BATCH 01 PRE-ORDER:</strong> Pre-orders open now for February 2027 delivery. Limited to 2,500 numbered ritual sets.
        </span>
      </div>
      <button
        onClick={() => setIsVisible(false)}
        aria-label="Dismiss banner"
        className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-[#FAF7F2]/60 hover:text-[#FAF7F2] transition-colors"
      >
        <X className="w-3.5 h-3.5" />
      </button>
    </div>
  );
};
