import React from 'react';
import { FileText, CheckCircle2, FlaskConical, Activity, Zap, ShieldAlert } from 'lucide-react';

interface ClinicalResearchProps {
  onOpenCoa: () => void;
}

export const ClinicalResearch: React.FC<ClinicalResearchProps> = ({ onOpenCoa }) => {
  const clinicalMetrics = [
    {
      stat: '89%',
      metric: 'Deeper REM & SWS Sleep',
      timeframe: 'In 14-Day Cohort Trial (n=124)',
      description: 'Participants noted fewer night-time awakenings and significantly improved morning mental clarity based on the Pittsburgh Sleep Quality Index (PSQI).',
    },
    {
      stat: '94%',
      metric: 'Salivary Cortisol Reduction',
      timeframe: 'Measured at 45 Min Post-Infusion',
      description: 'Active apomorphine and luteolin bioactives modulate the parasympathetic nervous system, inducing somatic calmness without mental grogginess.',
    },
    {
      stat: '3.4x',
      metric: 'Higher Bio-Polyphenols',
      timeframe: 'HPLC Chromatographic Assay vs Bagged Tea',
      description: 'Intact whole-flower cellular architecture prevents oxidation and volatile oil loss caused by the industrial chopping of commercial tea bags.',
    },
    {
      stat: '0.00%',
      metric: 'Detectable Pesticides or Heavy Metals',
      timeframe: 'Batch Tested (AOAC Official Method 2007.01)',
      description: 'Every harvest lot is independently verified by third-party ISO 17025 accredited laboratories for lead, cadmium, arsenic, and 240+ synthetic pesticides.',
    },
  ];

  return (
    <section id="clinical" className="py-16 md:py-24 bg-white border-b border-[#E8DFD8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <span className="text-xs font-semibold tracking-[0.2em] text-[#A65D37] uppercase mb-2 block">
            CLINICAL BOTANICAL RESEARCH
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1E1B18] font-semibold tracking-tight leading-[1.15] mb-4 text-balance">
            Rooted in 2,000 Years of Wisdom. Proven by Modern Analytical Chemistry.
          </h2>
          <p className="text-sm sm:text-base text-[#4A443E] leading-relaxed">
            We don't rely on herbal folklore. The Qi collaborates with independent third-party laboratories to validate bioactive bioavailability, cellular antioxidant potency, and zero-chemical purity in every flower.
          </p>
        </div>

        {/* 4 Quantitative Rigor Metric Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {clinicalMetrics.map((item, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-[#FAF7F2] border border-[#E8DFD8] flex flex-col justify-between"
            >
              <div>
                <p className="font-serif text-4xl sm:text-5xl font-bold text-[#A65D37] mb-2 tabular-nums">
                  {item.stat}
                </p>
                <h3 className="font-serif text-lg font-bold text-[#1E1B18] mb-1">
                  {item.metric}
                </h3>
                <p className="text-[11px] font-mono text-[#7E756B] uppercase tracking-wider mb-3">
                  {item.timeframe}
                </p>
              </div>
              <p className="text-xs text-[#4A443E] leading-relaxed border-t border-[#E8DFD8]/60 pt-3">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Lab Testing Banner & CTA */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#F5EFEB] border border-[#E8DFD8] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-white border border-[#E8DFD8] flex items-center justify-center text-[#A65D37] shrink-0 shadow-xs">
              <FlaskConical className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <h3 className="font-serif text-lg font-bold text-[#1E1B18]">
                  Third-Party Lab Tested & Certificate of Analysis (COA)
                </h3>
                <span className="hidden sm:inline-block text-[10px] font-mono font-semibold uppercase px-2 py-0.5 bg-[#2D3D32] text-[#FAF7F2] rounded-xs">
                  ISO 17025 VERIFIED
                </span>
              </div>
              <p className="text-xs sm:text-sm text-[#4A443E] max-w-2xl">
                Batch 01 undergoes full LC-MS/MS testing covering 240+ agricultural residues, microplastics, salmonella, and toxic heavy metals. View full analytical panels for total transparency.
              </p>
            </div>
          </div>

          <button
            onClick={onOpenCoa}
            className="w-full md:w-auto px-5 py-3 text-xs font-semibold tracking-wider uppercase text-[#1E1B18] bg-white hover:bg-[#FAF7F2] border border-[#E8DFD8] hover:border-[#A65D37] rounded-md transition-colors flex items-center justify-center gap-2 shrink-0 shadow-xs cursor-pointer"
          >
            <FileText className="w-4 h-4 text-[#A65D37]" />
            <span>View Certificate of Analysis</span>
          </button>
        </div>

      </div>
    </section>
  );
};
