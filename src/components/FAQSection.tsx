import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'When does my Batch 01 pre-order ship?',
      a: 'Pre-orders are officially open now in December to reserve your allocation of our limited autumn harvest. Official shipments begin in early February 2027. As soon as your numbered canister is hand-packed and dispatched from our New York studio, you’ll receive an email and SMS with real-time tracking.',
    },
    {
      q: 'Why are pre-orders limited to 2,500 units?',
      a: 'Unlike industrial tea factories that purchase mass-market pulverized fannings, The Qi exclusively sources whole, unbroken blossoms from heritage family farms at altitudes above 2,800 to 10,000 feet. These delicate flowers bloom only once annually and must be handpicked at dawn. Batch 01 represents our first small-lot release.',
    },
    {
      q: 'How many times can I re-steep a single whole flower?',
      a: 'Each whole flower can be re-steeped 2 to 3 times throughout your day! Because whole botanical cells remain intact (rather than crushed into dust), tannins are not broken, which means the tea never turns bitter or astringent. 1 single flower yields over 24 to 30 oz of nourishing botanical elixir.',
    },
    {
      q: 'Does it contain any caffeine, sugars, or artificial flavorings?',
      a: 'Zero. The Qi Whole-Flower Daily Longevity Elixir is 100% naturally caffeine-free, sugar-free, calorie-free, and contains zero synthetic flavorings, citric acid, or preservatives. You can enjoy it first thing in the morning or 30 minutes before bed without disrupting sleep architecture.',
    },
    {
      q: 'What is included in the 3-Month Longevity Ritual Set?',
      a: 'The 3-Month Set is our recommended ritual experience. It includes three cylinder canisters (90 daily whole-flower rituals), plus a complimentary Hand-Blown Ribbed Borosilicate Glass Tasting Cup ($28 retail value), free carbon-neutral US shipping, and Batch 01 numbered certificate.',
    },
    {
      q: 'How does the Subscribe & Save option work?',
      a: 'Subscribing locks in an extra 15% discount for the lifetime of your ritual. Your subsequent refills will automatically ship every 30 or 90 days after your initial February 2027 delivery. You have 100% flexibility: you can pause, skip a delivery, adjust cadence, or cancel anytime directly in your customer portal or via SMS reply.',
    },
    {
      q: 'What is the 30-Day Mindful Ritual Guarantee?',
      a: 'We want you to experience the transformative tranquility of whole-flower botanical living completely risk-free. Once your order arrives in February 2027, take 30 full days to immerse yourself in the ritual. If you don’t feel noticeably calmer, more rested, and centered, simply email us at care@the-qi.com for a prompt, 100% full refund.',
    },
    {
      q: 'Can I consume this if I am pregnant or nursing?',
      a: 'While our botanicals are pure, organically wildcrafted culinary whole flowers and berries traditionally enjoyed for generations, every body is unique. We always recommend showing the botanical ingredients list to your healthcare provider or OB-GYN prior to starting any new herbal regimen.',
    },
  ];

  return (
    <section id="faq" className="py-16 md:py-24 bg-white border-b border-[#E8DFD8]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="text-xs font-semibold tracking-[0.2em] text-[#A65D37] uppercase mb-2 block">
            FREQUENTLY ASKED QUESTIONS
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#1E1B18] font-semibold tracking-tight leading-[1.15] mb-4">
            Everything You Need to Know About the Launch & Pre-Order
          </h2>
          <p className="text-sm sm:text-base text-[#4A443E]">
            Have a question about our harvest, steeping ritual, or February 2027 shipping schedule?
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="border border-[#E8DFD8] rounded-xl overflow-hidden transition-colors bg-[#FAF7F2]"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-white/60 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-base sm:text-lg font-bold text-[#1E1B18]">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#A65D37] shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-[#4A443E] leading-relaxed border-t border-[#E8DFD8]/40 animate-in fade-in duration-200">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Support contact info */}
        <div className="mt-12 text-center text-xs text-[#7E756B]">
          <p>
            Still have questions? Reach out to our herbal care concierge at{' '}
            <a href="mailto:care@the-qi.com" className="text-[#A65D37] font-medium underline">
              care@the-qi.com
            </a>
            . We typically reply within 2 hours.
          </p>
        </div>

      </div>
    </section>
  );
};
