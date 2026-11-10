import React, { useState } from 'react';
import { Droplets, Sparkles, Wind, RotateCcw, Clock, Thermometer } from 'lucide-react';
import steepingImage from '../assets/images/steeping_daily_ritual_1794350713554.jpg';

export const DailyRitual: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      number: '01',
      title: 'Awaken the Vessel',
      time: '0:00 MIN',
      tagline: 'Place one whole blossom in your favorite glass cup',
      instruction: 'Take a single intact dried whole flower from your numbered canister. Notice the delicate stem and vibrant natural pigments. Place it gently at the base of a clear glass mug or server.',
      tip: 'Pro-tip: Clear borosilicate glass lets light illuminate the expanding petals.',
    },
    {
      number: '02',
      title: 'Pour & Watch It Bloom',
      time: '0:30 MIN',
      tagline: 'Pour 8–10 oz of hot water (195°F – 205°F)',
      instruction: 'Gently stream hot water directly over the center of the blossom. Within seconds, watch the tight dried petals hydrate, soften, and bloom into full botanical glory, releasing golden medicinal nectar.',
      tip: 'Water Temperature: Just off the boil (around 200°F) activates delicate polyphenols without scalding floral oils.',
    },
    {
      number: '03',
      title: 'Inhale & Ground',
      time: '1:30 MIN',
      tagline: 'Cup the warm vessel & take 3 deep belly breaths',
      instruction: 'Before taking your first sip, rest both hands around the warm glass. Close your eyes and inhale the floral vapor. This simple somatic grounding cue signals your nervous system to switch from fight-or-flight into rest-and-digest.',
      tip: 'Aromatherapy effect: Volatile floral terpenes enter the olfactory bulb to lower heart rate.',
    },
    {
      number: '04',
      title: 'Sip & Re-Steep 3x',
      time: '3:00+ MIN',
      tagline: 'Enjoy warm; re-steep up to 3 times all day',
      instruction: 'Sip slowly and savor the subtle honeyed, herbal notes. Because whole flowers have intact cellular walls, they never turn bitter or astringent. Simply top off with hot water 2 to 3 times throughout your day.',
      tip: 'Zero waste: 1 single flower provides your hydration ritual from morning focus through evening peace.',
    },
  ];

  return (
    <section id="ritual" className="py-16 md:py-24 bg-[#FAF7F2] border-b border-[#E8DFD8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <span className="text-xs font-semibold tracking-[0.2em] text-[#A65D37] uppercase mb-2 block">
            HOW TO USE IT
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1E1B18] font-semibold tracking-tight leading-[1.15] mb-4 text-balance">
            The Daily Mindful Ritual: 3 Minutes to Ground Your Mind
          </h2>
          <p className="text-sm sm:text-base text-[#4A443E] leading-relaxed">
            More than just tea. A daily ceremonial reset to slow down your heart rate, step away from screens, and nourish your cellular vitality.
          </p>
        </div>

        {/* Content Split: Steeping Image + Step Walkthrough */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Image with interactive overlay */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden border border-[#E8DFD8] bg-[#F3ECE5] shadow-sm aspect-4/3 group">
              <img
                src={steepingImage}
                alt="Hot water being poured from kettle into glass mug blooming a whole purple lotus flower"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-500"
              />
              
              {/* Steeping Parameters Badge */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md p-4 rounded-xl border border-[#E8DFD8]/80 flex items-center justify-between shadow-xs">
                <div className="flex items-center gap-2">
                  <Thermometer className="w-4 h-4 text-[#A65D37]" />
                  <div>
                    <p className="text-[10px] text-[#7E756B] uppercase tracking-wider">Water Temp</p>
                    <p className="text-xs font-bold text-[#1E1B18] tabular-nums">195°F – 205°F</p>
                  </div>
                </div>

                <div className="h-7 w-px bg-[#E8DFD8]" />

                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#A65D37]" />
                  <div>
                    <p className="text-[10px] text-[#7E756B] uppercase tracking-wider">Steep Time</p>
                    <p className="text-xs font-bold text-[#1E1B18] tabular-nums">3 Minutes</p>
                  </div>
                </div>

                <div className="h-7 w-px bg-[#E8DFD8]" />

                <div className="flex items-center gap-2">
                  <RotateCcw className="w-4 h-4 text-[#A65D37]" />
                  <div>
                    <p className="text-[10px] text-[#7E756B] uppercase tracking-wider">Re-Steep</p>
                    <p className="text-xs font-bold text-[#1E1B18] tabular-nums">Up to 3 Times</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Step Selector */}
          <div className="lg:col-span-6 space-y-4">
            {steps.map((step, index) => (
              <div
                key={step.number}
                onClick={() => setActiveStep(index)}
                className={`p-5 rounded-xl border-2 transition-all cursor-pointer ${
                  activeStep === index
                    ? 'border-[#A65D37] bg-white shadow-xs'
                    : 'border-[#E8DFD8] bg-[#FAF7F2] hover:border-[#7E756B] hover:bg-white/60'
                }`}
              >
                <div className="flex items-start justify-between gap-4 mb-1">
                  <div className="flex items-center gap-3">
                    <span
                      className={`font-mono text-xs font-bold px-2 py-0.5 rounded-sm ${
                        activeStep === index
                          ? 'bg-[#A65D37] text-white'
                          : 'bg-[#E8DFD8] text-[#4A443E]'
                      }`}
                    >
                      {step.number}
                    </span>
                    <h3 className="font-serif text-lg font-bold text-[#1E1B18]">
                      {step.title}
                    </h3>
                  </div>
                  <span className="text-[11px] font-mono text-[#7E756B] uppercase tracking-wider shrink-0">
                    {step.time}
                  </span>
                </div>

                <p className="text-xs font-medium text-[#A65D37] mb-2">
                  {step.tagline}
                </p>

                {activeStep === index && (
                  <div className="space-y-2.5 pt-2 border-t border-[#E8DFD8]/60 animate-in fade-in duration-300">
                    <p className="text-xs sm:text-sm text-[#4A443E] leading-relaxed">
                      {step.instruction}
                    </p>
                    <p className="text-xs italic text-[#7E756B] bg-[#F5EFEB] p-2.5 rounded-md">
                      ✦ {step.tip}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
