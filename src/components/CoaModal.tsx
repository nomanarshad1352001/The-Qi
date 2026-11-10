import React from 'react';
import { X, CheckCircle2, ShieldCheck, Download, ExternalLink } from 'lucide-react';

interface CoaModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CoaModal: React.FC<CoaModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const testPanels = [
    {
      test: 'Heavy Metals: Lead (Pb)',
      method: 'ICP-MS (AOAC 2015.01)',
      standard: '< 0.500 ppm',
      result: '< 0.005 ppm (ND)',
      status: 'PASSED',
    },
    {
      test: 'Heavy Metals: Cadmium (Cd)',
      method: 'ICP-MS (AOAC 2015.01)',
      standard: '< 0.200 ppm',
      result: '< 0.002 ppm (ND)',
      status: 'PASSED',
    },
    {
      test: 'Heavy Metals: Arsenic (As)',
      method: 'ICP-MS (AOAC 2015.01)',
      standard: '< 0.200 ppm',
      result: '< 0.005 ppm (ND)',
      status: 'PASSED',
    },
    {
      test: 'Heavy Metals: Mercury (Hg)',
      method: 'ICP-MS (AOAC 2015.01)',
      standard: '< 0.100 ppm',
      result: '< 0.001 ppm (ND)',
      status: 'PASSED',
    },
    {
      test: 'Multi-Residue Pesticide Screen (240+ compounds)',
      method: 'LC-MS/MS & GC-MS/MS',
      standard: 'Zero Detectable Limits',
      result: '0.00 ppm (100% ND)',
      status: 'PASSED',
    },
    {
      test: 'Microplastic Particulate Scan (Filter Assay)',
      method: 'FTIR Spectroscopy',
      standard: '0 particles / 100g',
      result: '0.00 particles detected',
      status: 'PASSED',
    },
    {
      test: 'Total Bioactive Polyphenols & Flavonoids',
      method: 'HPLC UV-Vis Assay',
      standard: '> 45.0 mg / g',
      result: '168.4 mg / g (3.7x baseline)',
      status: 'EXCEPTIONAL',
    },
    {
      test: 'Microbiological Safety (Salmonella, E. coli, Yeast/Mold)',
      method: 'USP <2021> / <2022>',
      standard: 'Absence / 10g',
      result: 'Negative / Absent',
      status: 'PASSED',
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
      <div className="relative w-full max-w-2xl bg-[#FAF7F2] rounded-2xl border border-[#E8DFD8] shadow-2xl overflow-hidden max-h-[90vh] flex flex-col animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="p-6 bg-white border-b border-[#E8DFD8] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#FAF7F2] border border-[#E8DFD8] flex items-center justify-center text-[#A65D37]">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif text-xl font-bold text-[#1E1B18]">
                Certificate of Analysis (COA)
              </h3>
              <p className="text-xs font-mono text-[#7E756B]">
                Batch 01 · Lot #QI-B01-2027 · ISO/IEC 17025 Accredited
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-[#7E756B] hover:text-[#1E1B18] transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Table Content */}
        <div className="p-6 overflow-y-auto space-y-6">
          <div className="p-4 bg-[#F5EFEB] rounded-xl text-xs text-[#4A443E] leading-relaxed border border-[#E8DFD8]">
            <p>
              <strong>Analytical Standard:</strong> This Certificate of Analysis certifies that the botanical harvest lot for <em>The Qi Whole-Flower Daily Longevity Elixir (Batch 01)</em> has undergone exhaustive quantitative purity and bioactive assay screening by an independent certified third-party testing facility.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-[#E8DFD8] text-[#7E756B] uppercase font-mono text-[10px] tracking-wider">
                  <th className="py-2.5 pr-4">Test Description</th>
                  <th className="py-2.5 px-3">Method</th>
                  <th className="py-2.5 px-3">Standard Limit</th>
                  <th className="py-2.5 px-3">Result</th>
                  <th className="py-2.5 pl-3 text-right">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E8DFD8]/60">
                {testPanels.map((panel, idx) => (
                  <tr key={idx} className="hover:bg-white/60 transition-colors">
                    <td className="py-3 pr-4 font-medium text-[#1E1B18]">{panel.test}</td>
                    <td className="py-3 px-3 text-[#7E756B] font-mono text-[11px]">{panel.method}</td>
                    <td className="py-3 px-3 text-[#7E756B] font-mono text-[11px]">{panel.standard}</td>
                    <td className="py-3 px-3 font-mono text-[11px] font-semibold text-[#1E1B18]">{panel.result}</td>
                    <td className="py-3 pl-3 text-right">
                      <span className="inline-flex items-center gap-1 font-mono text-[10px] font-bold text-[#2D3D32] bg-[#E8DFD8]/60 px-2 py-0.5 rounded">
                        <CheckCircle2 className="w-3 h-3 text-[#2D3D32]" />
                        {panel.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="grid grid-cols-2 gap-4 text-xs text-[#7E756B] pt-4 border-t border-[#E8DFD8]">
            <div>
              <p className="font-semibold text-[#1E1B18]">Lead Principal Analyst:</p>
              <p>Dr. Elena Rostova, Ph.D., Bio-Analytical Chemistry</p>
            </div>
            <div>
              <p className="font-semibold text-[#1E1B18]">Verification Date:</p>
              <p>November 2026 · Batch Retain Period: 36 Months</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-white border-t border-[#E8DFD8] flex items-center justify-between">
          <span className="text-xs text-[#7E756B]">
            All lots sealed under nitrogen flush in food-grade tin.
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2 bg-[#1E1B18] text-white text-xs font-semibold tracking-wider uppercase rounded-md hover:bg-[#A65D37] transition-colors"
          >
            Close Report
          </button>
        </div>

      </div>
    </div>
  );
};
