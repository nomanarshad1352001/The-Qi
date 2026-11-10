import React from 'react';
import { Sparkles, HeartHandshake, Sprout } from 'lucide-react';

export const FounderStory: React.FC = () => {
  return (
    <section id="founder" className="py-16 md:py-24 bg-[#FAF7F2] border-b border-[#E8DFD8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Founder Image Column */}
          <div className="lg:col-span-5">
            <div className="relative">
              {/* Decorative subtle border frame */}
              <div className="relative rounded-2xl overflow-hidden border border-[#E8DFD8] shadow-sm bg-[#F3ECE5] aspect-3/4">
                <img
                  src="/src/assets/images/founder_lisa_li_1794350712064.jpg"
                  alt="Lisa Li, Founder of The Qi, in her NYC botanical studio"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center"
                />
              </div>

              {/* Founder caption badge */}
              <div className="mt-4 flex items-center justify-between text-xs text-[#7E756B]">
                <span className="font-serif italic text-sm text-[#1E1B18]">Lisa Li</span>
                <span className="uppercase tracking-wider">Founder & Formulator · NYC, Est. 2019</span>
              </div>
            </div>
          </div>

          {/* Story Narrative Column */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            <span className="text-xs font-semibold tracking-[0.2em] text-[#A65D37] uppercase mb-2">
              FOUNDED IN NYC · 2019
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1E1B18] font-semibold tracking-tight leading-[1.15] mb-6 text-balance">
              "Wellness isn't another item on your to-do list. It’s a 3-minute sensory pause to return home to yourself."
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-[#4A443E] leading-relaxed">
              <p>
                Growing up, my grandmother never reached for a pill when stress or fatigue arrived. She’d brew whole Chrysanthemum blossoms and wild jujube dates in hot water. To her, health was governed by <em>Qi (氣)</em>—the vital life energy that animates everything around and within us.
              </p>
              
              <p>
                Years later, as a corporate executive working 70-hour weeks in Manhattan, I reached a point of complete adrenal exhaustion. Looking for solace in mainstream wellness, I found only synthetic powders, caffeinated energy spikes, and dusty commercial tea bags shedding billions of microplastics.
              </p>

              <p>
                In 2019, I started The Qi to revive the lost art of Eastern whole-flower herbalism. When we took our whole-flower mission onto <strong>Shark Tank</strong>, our goal was simple: prove that mindful, regenerative plant medicine can thrive on the modern kitchen counter.
              </p>
              
              <p>
                This new <strong>Whole-Flower Daily Longevity Elixir</strong> is our culmination of five years of botanical sourcing across high-altitude regenerative mountain sanctuaries. It is our most potent, pure, and grounding creation yet.
              </p>
            </div>

            {/* Three Pillar Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 pt-8 border-t border-[#E8DFD8]">
              <div>
                <Sprout className="w-5 h-5 text-[#A65D37] mb-2" />
                <h3 className="font-serif text-base font-bold text-[#1E1B18] mb-1">Zero Dust, Ever</h3>
                <p className="text-xs text-[#7E756B] leading-normal">
                  Intact whole blossoms preserve 100% of delicate volatile oils and bio-flavonoids.
                </p>
              </div>

              <div>
                <HeartHandshake className="w-5 h-5 text-[#A65D37] mb-2" />
                <h3 className="font-serif text-base font-bold text-[#1E1B18] mb-1">Heritage Farming</h3>
                <p className="text-xs text-[#7E756B] leading-normal">
                  Direct fair-trade partnerships with 4th-generation heirloom flower growers.
                </p>
              </div>

              <div>
                <Sparkles className="w-5 h-5 text-[#A65D37] mb-2" />
                <h3 className="font-serif text-base font-bold text-[#1E1B18] mb-1">Shark Tank Backed</h3>
                <p className="text-xs text-[#7E756B] leading-normal">
                  Recognized nationally for authentic herbal innovation and radical transparency.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
