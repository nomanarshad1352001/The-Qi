import React, { useState } from 'react';
import { Botanical } from '../types';
import { Sparkles, Info, CheckCircle2, ChevronRight } from 'lucide-react';

export const BotanicalsGrid: React.FC = () => {
  const [selectedBotanical, setSelectedBotanical] = useState<Botanical | null>(null);

  const botanicals: Botanical[] = [
    {
      id: 'chrysanthemum',
      name: 'Royal Chrysanthemum',
      latinName: 'Chrysanthemum morifolium',
      origin: 'Huangshan Mountain Heritage Terraces, China',
      elevation: '2,800 ft above sea level',
      primaryBenefit: 'Internal cooling, screen-fatigued eye relief, and cellular liver detoxification.',
      tastingNotes: 'Crisp floral sweetness, delicate honeycomb, clean lingering botanical nectar.',
      bioactives: ['Luteolin', 'Apigenin', 'Chlorogenic Acid', 'Quercetin Glycosides'],
      traditionalRole: 'In TCM, Royal Chrysanthemum pacifies Liver Yang and clears systemic heat accrued from stress and blue-light devices.',
      tag: 'Liver & Vision Reset',
    },
    {
      id: 'rose',
      name: 'Shangri-La Rose',
      latinName: 'Rosa damascena var. trigintipetala',
      origin: 'Tibetan Plateau Glacial Basin, Yunnan',
      elevation: '10,000 ft alpine sanctuary',
      primaryBenefit: 'Skin radiance, cellular collagen support, and heart-opening emotional ease.',
      tastingNotes: 'Intensely fragrant Turkish rose petal, velvet berries, mild citrus sweetness.',
      bioactives: ['Geraniol', 'Natural Vitamin C', 'Pelargonidin Anthocyanins', 'Kaempferol'],
      traditionalRole: 'Treasured in imperial court medicine to invigorate sluggish blood Qi, ease hormonal mood swings, and nourish skin elasticity.',
      tag: 'Radiant Skin & Heart Qi',
    },
    {
      id: 'blue-lotus',
      name: 'Sacred Blue Lotus',
      latinName: 'Nymphaea caerulea',
      origin: 'Regenerative Subtropical Wetland Wildcraft',
      elevation: 'Pristine organic freshwater basin',
      primaryBenefit: 'Somatic nervous system relaxation, dream recall, and deep sleep onset.',
      tastingNotes: 'Subtle sweet earth, ethereal violet, delicate dried anise blossom.',
      bioactives: ['Nuciferine', 'Aporphine Terpenes', 'Bioflavonoid Bio-Complex'],
      traditionalRole: 'Venerated since antiquity as a botanical tranquilizer that calms the wandering spirit (Shen) and facilitates profound meditative stillness.',
      tag: 'Deep REM Sleep & Rest',
    },
    {
      id: 'osmanthus',
      name: 'Golden Osmanthus',
      latinName: 'Osmanthus fragrans',
      origin: 'Guilin Karst River Terraces',
      elevation: '1,500 ft limestone foothills',
      primaryBenefit: 'Digestive comfort, gut microbiome balance, and natural mood elevation.',
      tastingNotes: 'Ripe golden apricots, warm wildflower honey, peachy floral brightness.',
      bioactives: ['Acteoside', 'Phenylpropanoid Glycosides', 'Carotenoids'],
      traditionalRole: 'Dispels stomach chill, promotes smooth metabolic digestion, and naturally lifts cloudy depressive feelings through volatile aromatherapy.',
      tag: 'Gut Harmony & Mood',
    },
    {
      id: 'goji-date',
      name: 'Red Jujube & Goji Berry',
      latinName: 'Ziziphus jujuba & Lycium barbarum',
      origin: 'Ningxia Sun-Drenched Loess Plateau',
      elevation: '3,200 ft mineral rich valley',
      primaryBenefit: 'Adrenal vitality, sustained stamina without caffeine, and blood nourishment.',
      tastingNotes: 'Caramelized sun-dried dates, sweet tart berry, warm malted richness.',
      bioactives: ['Lycium Barbarum Polysaccharides (LBP)', 'Betaine', 'Zeaxanthin', 'Jujubosides'],
      traditionalRole: 'The sovereign duo of Eastern tonic herbalism—replenishing vital marrow, calming palpitations, and rebuilding depleted adrenals.',
      tag: 'Cellular Stamina & Blood Tonic',
    },
    {
      id: 'astragalus',
      name: 'Astragalus & Schisandra',
      latinName: 'Astragalus membranaceus & Schisandra chinensis',
      origin: 'Changbai Mountain Bio-Reserve',
      elevation: '4,500 ft pristine coniferous forest',
      primaryBenefit: 'Deep cellular immunity, protective defensive Qi (Wei Qi), and lung endurance.',
      tastingNotes: 'Earthy wood tones, sweet bean bark, harmonious five-flavor tart zest.',
      bioactives: ['Astragalosides IV', 'Schisandrins A & B', 'Formononetin Isoflavones'],
      traditionalRole: 'Strengthens the exterior barrier against environmental pathogens while modulating the endocrine hypothalamic-pituitary-adrenal (HPA) axis.',
      tag: 'Immune Shield & Longevity',
    },
  ];

  return (
    <section id="botanicals" className="py-16 md:py-24 bg-white border-b border-[#E8DFD8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="text-xs font-semibold tracking-[0.2em] text-[#A65D37] uppercase mb-2 block">
            THE SIX WHOLE BOTANICALS
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1E1B18] font-semibold tracking-tight leading-[1.15] mb-4 text-balance">
            Six Sacred Plants. Zero Fillers. 100% Pure Whole Blossoms.
          </h2>
          <p className="text-sm sm:text-base text-[#4A443E] leading-relaxed">
            Every botanical is handpicked at peak dawn blossom, sun-cured or gently low-temperature dehydrated to protect the volatile terpene matrix. No artificial flavoring, no citric acid, no powdered extracts.
          </p>
        </div>

        {/* Flatlay Photography Banner */}
        <div className="relative rounded-2xl overflow-hidden border border-[#E8DFD8] mb-12 bg-[#F5EFEB] aspect-16/9 max-h-[380px] group">
          <img
            src="/src/assets/images/six_botanicals_flatlay_1794350714342.jpg"
            alt="Handmade ceramic dishes displaying the six whole botanicals on natural linen"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center group-hover:scale-[1.01] transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-6 sm:p-8">
            <p className="text-xs sm:text-sm text-white/95 max-w-xl font-medium drop-shadow-xs">
              ✦ Handcrafted in ceramic pinching dishes: intact whole flower heads, wild berries, and sun-cured root slices untouched by industrial machinery.
            </p>
          </div>
        </div>

        {/* 6 Botanicals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {botanicals.map((botanical) => (
            <div
              key={botanical.id}
              className="p-6 rounded-xl bg-[#FAF7F2] border border-[#E8DFD8] hover:border-[#A65D37] transition-all flex flex-col justify-between group shadow-2xs hover:shadow-xs"
            >
              <div>
                {/* Clean unboxed metadata separator */}
                <div className="flex items-center gap-2 text-xs text-[#A65D37] font-medium mb-2">
                  <span>{botanical.tag}</span>
                  <span aria-hidden="true">·</span>
                  <span className="text-[#7E756B]">{botanical.elevation}</span>
                </div>

                <h3 className="font-serif text-2xl font-bold text-[#1E1B18] mb-1 group-hover:text-[#A65D37] transition-colors">
                  {botanical.name}
                </h3>
                <p className="font-serif italic text-xs text-[#7E756B] mb-4">
                  {botanical.latinName}
                </p>

                <p className="text-xs sm:text-sm text-[#4A443E] mb-4 leading-relaxed">
                  {botanical.primaryBenefit}
                </p>

                <div className="p-3 bg-white/80 rounded-lg border border-[#E8DFD8]/60 mb-4 text-xs text-[#4A443E]">
                  <strong className="text-[#1E1B18] block mb-1">Tasting Profile:</strong>
                  <span>{botanical.tastingNotes}</span>
                </div>
              </div>

              <div>
                <button
                  type="button"
                  onClick={() => setSelectedBotanical(botanical)}
                  className="w-full py-2.5 px-3 rounded-md border border-[#E8DFD8] bg-white hover:bg-[#FAF7F2] text-xs font-semibold tracking-wider uppercase text-[#1E1B18] flex items-center justify-center gap-1 transition-colors cursor-pointer"
                >
                  <span>Explore Bioactives & Sourcing</span>
                  <ChevronRight className="w-3.5 h-3.5 text-[#A65D37]" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Sourcing Promise Ribbon */}
        <div className="mt-12 p-6 rounded-xl bg-[#FAF7F2] border border-[#E8DFD8] grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          <div className="flex flex-col items-center">
            <span className="font-serif text-lg font-bold text-[#1E1B18] mb-1">Single-Origin Terroir</span>
            <p className="text-xs text-[#7E756B] max-w-xs">
              Every flower harvested from its historic ecological birthplace for authentic phytochemical profiles.
            </p>
          </div>
          <div className="flex flex-col items-center sm:border-x sm:border-[#E8DFD8]">
            <span className="font-serif text-lg font-bold text-[#1E1B18] mb-1">Zero Synthetic Flavors</span>
            <p className="text-xs text-[#7E756B] max-w-xs">
              We never use "natural flavoring", stevia, silicon dioxide anti-caking agents, or preservatives.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-serif text-lg font-bold text-[#1E1B18] mb-1">Regenerative Soil Care</span>
            <p className="text-xs text-[#7E756B] max-w-xs">
              Grown without commercial pesticides, chemical synthetic fertilizers, or wastewater runoff.
            </p>
          </div>
        </div>

      </div>

      {/* Interactive Botanical Deep-Dive Modal */}
      {selectedBotanical && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-[#FAF7F2] rounded-2xl max-w-xl w-full p-6 sm:p-8 border border-[#E8DFD8] shadow-2xl relative animate-in fade-in zoom-in-95 duration-200">
            <button
              onClick={() => setSelectedBotanical(null)}
              className="absolute top-4 right-4 p-2 text-[#7E756B] hover:text-[#1E1B18] text-sm uppercase tracking-wider"
              aria-label="Close details"
            >
              ✕
            </button>

            <span className="text-xs font-semibold tracking-widest text-[#A65D37] uppercase mb-1 block">
              {selectedBotanical.tag}
            </span>
            <h3 className="font-serif text-3xl font-bold text-[#1E1B18] mb-1">
              {selectedBotanical.name}
            </h3>
            <p className="font-serif italic text-sm text-[#7E756B] mb-6">
              {selectedBotanical.latinName}
            </p>

            <div className="space-y-4 text-xs sm:text-sm text-[#4A443E]">
              <div className="p-3.5 bg-white rounded-lg border border-[#E8DFD8]">
                <strong className="text-[#1E1B18] block mb-1">Origin & Terroir:</strong>
                <p>{selectedBotanical.origin} ({selectedBotanical.elevation})</p>
              </div>

              <div className="p-3.5 bg-white rounded-lg border border-[#E8DFD8]">
                <strong className="text-[#1E1B18] block mb-1">Active Phytochemicals:</strong>
                <div className="flex flex-wrap gap-2 mt-1">
                  {selectedBotanical.bioactives.map((bio) => (
                    <span key={bio} className="text-xs font-mono bg-[#FAF7F2] px-2 py-1 rounded border border-[#E8DFD8]">
                      {bio}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-3.5 bg-white rounded-lg border border-[#E8DFD8]">
                <strong className="text-[#1E1B18] block mb-1">Ancient Eastern Medical Role:</strong>
                <p>{selectedBotanical.traditionalRole}</p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#E8DFD8] flex justify-end">
              <button
                type="button"
                onClick={() => setSelectedBotanical(null)}
                className="px-5 py-2.5 bg-[#1E1B18] text-white text-xs font-semibold tracking-wider uppercase rounded-md hover:bg-[#A65D37] transition-colors"
              >
                Close Deep Dive
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
