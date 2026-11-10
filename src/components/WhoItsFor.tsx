import React from 'react';
import { Check, X, Moon, Coffee, Sparkles, MonitorSmartphone } from 'lucide-react';

export const WhoItsFor: React.FC = () => {
  const personas = [
    {
      icon: MonitorSmartphone,
      title: 'The Screen-Tired Multi-Tasker',
      situation: 'Staring at monitors for 8+ hours with tired eyes, neck tension, and midday mental fatigue.',
      howItHelps: 'Royal Chrysanthemum and Golden Osmanthus deliver potent luteolin to cool optic stress and soothe somatic nervous tension without caffeine crashes.',
    },
    {
      icon: Moon,
      title: 'The Restless Night Sleeper',
      situation: 'Lying in bed with racing thoughts, waking up groggy from synthetic melatonin gummies.',
      howItHelps: 'Sacred Blue Lotus provides gentle nuciferine to ease bedtime somatic restlessness, guiding you into naturally restorative deep slow-wave REM sleep.',
    },
    {
      icon: Coffee,
      title: 'The Coffee Reducer',
      situation: 'Love warm comforting morning drinks, but exhausted by caffeine jitters, acid reflux, or cortisol spikes.',
      howItHelps: 'Rich, honeyed, whole-plant mouthfeel delivers comforting ritual satisfaction and steady adrenal vitality with 0.0g caffeine and zero acid.',
    },
    {
      icon: Sparkles,
      title: 'The Clean Skin & Longevity Seeker',
      situation: 'Looking to combat environmental oxidative stress and dull skin with whole-food cellular bioactives.',
      howItHelps: 'Shangri-La Rose and Lycium Goji provide natural vitamin C, anthocyanins, and polysaccharides to nourish collagen and impart a dewy internal glow.',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-[#FAF7F2] border-b border-[#E8DFD8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <span className="text-xs font-semibold tracking-[0.2em] text-[#A65D37] uppercase mb-2 block">
            INTENTIONAL WELLNESS
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1E1B18] font-semibold tracking-tight leading-[1.15] mb-4 text-balance">
            Is The Qi Whole-Flower Ritual Right for You?
          </h2>
          <p className="text-sm sm:text-base text-[#4A443E] leading-relaxed">
            Crafted for modern humans navigating fast-paced, high-stress environments who yearn for a grounding, sensory connection to the natural world.
          </p>
        </div>

        {/* 4 Personas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {personas.map((persona, index) => {
            const Icon = persona.icon;
            return (
              <div
                key={index}
                className="p-6 sm:p-8 rounded-2xl bg-white border border-[#E8DFD8] flex flex-col justify-between shadow-2xs hover:shadow-xs transition-shadow"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-[#FAF7F2] border border-[#E8DFD8] flex items-center justify-center text-[#A65D37] mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-[#1E1B18] mb-2">
                    {persona.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#7E756B] mb-4 italic">
                    "{persona.situation}"
                  </p>
                </div>
                <div className="pt-4 border-t border-[#E8DFD8]/60 flex items-start gap-2.5 text-xs sm:text-sm text-[#4A443E]">
                  <Check className="w-4 h-4 text-[#A65D37] shrink-0 mt-0.5" />
                  <span>{persona.howItHelps}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Comparison: Who It's For vs Who It's Not For */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* YES FOR */}
          <div className="p-6 rounded-xl bg-white border border-[#A65D37]/30 shadow-2xs">
            <div className="flex items-center gap-2 mb-4 text-[#A65D37] font-semibold text-xs tracking-wider uppercase">
              <Check className="w-4 h-4" />
              <span>Perfect For You If:</span>
            </div>
            <ul className="space-y-3 text-xs sm:text-sm text-[#4A443E]">
              <li className="flex items-start gap-2">
                <span className="text-[#A65D37] font-bold">✓</span>
                <span>You appreciate tactile, beautiful moments that look and feel like intentional art.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#A65D37] font-bold">✓</span>
                <span>You seek calm nervous system regulation rather than heart-thumping stimulants.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#A65D37] font-bold">✓</span>
                <span>You care about knowing exactly which heritage mountain region grew your botanicals.</span>
              </li>
            </ul>
          </div>

          {/* NOT FOR */}
          <div className="p-6 rounded-xl bg-[#F5EFEB] border border-[#E8DFD8]">
            <div className="flex items-center gap-2 mb-4 text-[#7E756B] font-semibold text-xs tracking-wider uppercase">
              <X className="w-4 h-4 text-[#7E756B]" />
              <span>Not For You If:</span>
            </div>
            <ul className="space-y-3 text-xs sm:text-sm text-[#7E756B]">
              <li className="flex items-start gap-2">
                <span>✕</span>
                <span>You want an instant sugary powder drink mix or synthetic energy shot.</span>
              </li>
              <li className="flex items-start gap-2">
                <span>✕</span>
                <span>You don't wish to take 3 quiet minutes to let hot water bloom an intact flower.</span>
              </li>
              <li className="flex items-start gap-2">
                <span>✕</span>
                <span>You prefer disposable bleach-treated tea bag dust with artificial flavor sprays.</span>
              </li>
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
};
