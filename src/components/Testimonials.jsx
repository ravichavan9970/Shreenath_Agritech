import React from 'react';
import { Star, CheckCircle } from 'lucide-react';

export default function Testimonials({ lang, testimonials }) {
  return (
    <section className="py-12 sm:py-16 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <div className="inline-block bg-emerald-100 text-emerald-900 border border-emerald-300 text-xs sm:text-sm font-black px-3.5 py-1 rounded-full mb-2">
            ⭐ {lang === 'mr' ? 'शेतकऱ्यांचे अनुभव' : 'Farmer Reviews'}
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-stone-900 tracking-tight">
            {lang === 'mr' ? 'शेतकरी काय म्हणतात?' : 'What Farmers Say'}
          </h2>
          <p className="text-stone-600 mt-1 text-sm sm:text-base font-medium">
            {lang === 'mr'
              ? 'नाशिक, सटाणा, कळवण व मालेगाव परिसरातील शेतकऱ्यांचे खरे अनुभव.'
              : 'Real feedback from progressive farmers who planted our seedlings.'}
          </p>
        </div>

        {/* 3 Simple Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-stone-50 rounded-2xl p-6 border border-stone-200 shadow-2xs flex flex-col justify-between"
            >
              <div>
                {/* 5 Stars */}
                <div className="flex text-amber-400 gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-stone-800 text-sm sm:text-base leading-relaxed font-medium italic mb-4">
                  "{t.quote[lang]}"
                </p>
              </div>

              {/* Farmer Info */}
              <div className="pt-3 border-t border-stone-200 flex items-center justify-between">
                <div>
                  <h4 className="font-black text-stone-900 text-base flex items-center gap-1.5">
                    <span>{t.name}</span>
                    <CheckCircle className="w-4 h-4 text-emerald-600" />
                  </h4>
                  <p className="text-xs text-stone-500 font-bold">
                    {t.village[lang]}
                  </p>
                  <p className="text-xs text-emerald-800 font-bold mt-0.5">
                    🌱 {t.crop[lang]}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
