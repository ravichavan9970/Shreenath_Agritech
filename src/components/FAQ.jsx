import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

export default function FAQ({ lang, faqs }) {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-16 sm:py-24 bg-stone-50 border-t border-stone-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-1.5 bg-emerald-100 text-emerald-900 border border-emerald-300 text-xs sm:text-sm font-bold px-3 py-1 rounded-full mb-3">
            <HelpCircle className="w-4 h-4 text-emerald-700" />
            <span>{lang === 'mr' ? 'शेतकऱ्यांचे नेहमीचे प्रश्न' : 'Frequently Asked Questions'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-stone-900 tracking-tight">
            {lang === 'mr' ? 'नेहमी विचारले जाणारे प्रश्न (FAQ)' : 'Common Questions About Seedling Orders'}
          </h2>
          <p className="text-stone-600 mt-2 text-base">
            {lang === 'mr'
              ? 'रोप बुकिंग, वाहतूक आणि गुणवत्तेबाबत सर्व माहिती येथे जाणून घ्या.'
              : 'Clear answers on nursery bookings, doorstep delivery, and quality assurance.'}
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3.5">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-stone-200 shadow-2xs overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full text-left p-5 sm:p-6 font-bold text-stone-900 flex items-center justify-between gap-4 hover:bg-stone-50 transition cursor-pointer"
                >
                  <span className="text-base sm:text-lg">
                    {faq.q[lang]}
                  </span>
                  <span className="shrink-0 p-1.5 rounded-full bg-stone-100 text-stone-600">
                    {isOpen ? <ChevronUp className="w-5 h-5 text-emerald-700" /> : <ChevronDown className="w-5 h-5" />}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-stone-700 text-sm sm:text-base leading-relaxed border-t border-stone-100 bg-stone-50/50">
                    <p>{faq.a[lang]}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
