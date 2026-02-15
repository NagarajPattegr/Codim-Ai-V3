
import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import type { FAQItem } from '../types';

const FAQSection: React.FC<{ faqs: FAQItem[], theme?: 'light' | 'dark' }> = ({ faqs, theme = 'dark' }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const isLight = theme === 'light';

  return (
    <section className={`py-24 px-6 ${isLight ? 'bg-white' : 'bg-transparent'}`}>
      <div className="max-w-4xl mx-auto">
        <h2 className={`text-3xl md:text-4xl font-bold mb-12 text-center ${isLight ? 'text-slate-900' : 'text-white'}`}>
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`rounded-2xl border overflow-hidden transition-all duration-500 ${openIndex === index
                  ? 'bg-wispr-purple border-wispr-purple shadow-[0_20px_40px_-10px_rgba(109,40,217,0.4)]'
                  : isLight
                    ? 'bg-slate-50 border-slate-200'
                    : 'glass border-white/5'
                }`}
            >
              <button
                className={`w-full px-8 py-6 flex items-center justify-between text-left transition-colors duration-500 ${openIndex === index
                    ? 'bg-white/5'
                    : isLight
                      ? 'hover:bg-slate-100'
                      : 'hover:bg-white/5'
                  }`}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <h3 className={`text-lg font-semibold pr-8 transition-colors duration-500 ${openIndex === index
                    ? 'text-white'
                    : isLight
                      ? 'text-slate-800'
                      : 'text-white'
                  }`}>
                  {faq.question}
                </h3>
                <div className={`shrink-0 transition-colors duration-500 ${openIndex === index ? 'text-white' : 'text-cyan-600'
                  }`}>
                  {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                </div>
              </button>
              <div
                className={`px-8 overflow-hidden transition-all duration-500 ease-in-out ${openIndex === index ? 'max-h-[500px] pb-8' : 'max-h-0'}`}
              >
                <p className={`leading-relaxed max-w-2xl transition-colors duration-500 ${openIndex === index
                    ? 'text-white/90 font-medium'
                    : isLight
                      ? 'text-slate-600'
                      : 'text-slate-400'
                  }`}>
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
