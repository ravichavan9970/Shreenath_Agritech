import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Phone, Check, Search } from 'lucide-react';

export default function VarietiesCatalog({ lang, contact, varieties, onSelectVariety }) {
  const [searchTerm, setSearchTerm] = useState('');

  const filtered = varieties.filter((v) => {
    if (!searchTerm) return true;
    const term = searchTerm.toLowerCase();
    return (
      v.name.mr.toLowerCase().includes(term) ||
      v.name.en.toLowerCase().includes(term) ||
      v.popularBrands.join(' ').toLowerCase().includes(term)
    );
  });

  return (
    <section id="varieties" className="py-12 sm:py-16 bg-white border-b border-stone-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Smooth Scroll Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-3xl mx-auto mb-8 sm:mb-12"
        >
          <div className="inline-block bg-emerald-100 text-emerald-900 border border-emerald-300 text-xs sm:text-sm font-black px-3.5 py-1 rounded-full mb-2">
            {lang === 'mr' ? '🌱 आमची प्रमुख रोपे' : '🌱 Available Seedlings'}
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-stone-900 tracking-tight">
            {lang === 'mr' ? 'भाजीपाला व फळपिकांची दर्जेदार रोपे' : 'Premium Vegetable & Melon Seedlings'}
          </h2>
          <p className="text-stone-600 mt-2 text-sm sm:text-base font-medium">
            {lang === 'mr'
              ? 'सर्व नामांकित कंपन्यांच्या हायब्रीड वाणांची खात्रीशीर, निरोगी व उन्हात टिकणारी रोपे मिळतील.'
              : 'Certified hybrid seedlings raised with high field vigor and disease resistance.'}
          </p>

          {/* Simple Search with smooth reveal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="mt-5 max-w-md mx-auto"
          >
            <div className="relative">
              <Search className="w-5 h-5 text-stone-400 absolute left-3.5 top-3" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder={lang === 'mr' ? 'रोपाचे नाव शोधा (उदा. टोमॅटो, पपई, कोबी)...' : 'Search seedlings (e.g. Tomato, Papaya)...'}
                className="w-full bg-stone-50 border border-stone-300 rounded-xl pl-11 pr-4 py-2.5 text-sm sm:text-base font-bold focus:ring-2 focus:ring-emerald-600 focus:outline-none placeholder:text-stone-400 transition-all shadow-2xs"
              />
            </div>
          </motion.div>
        </motion.div>

        {/* Big Simple Cards Grid with Staggered Scroll-In */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filtered.map((v, idx) => {
            const waMessage = encodeURIComponent(
              lang === 'mr'
                ? `नमस्कार श्रीनाथ ॲग्रीटेक,\nमला *${v.name.mr}* या रोपांचे दर व बुकिंग करायचे आहे.\nकृपया चालू दर आणि उपलब्ध तारीख सांगा.`
                : `Hello Shrinath Agritech,\nI want to book *${v.name.en}* seedlings.\nPlease share pricing and delivery schedule.`
            );

            return (
              <motion.div
                key={v.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.55,
                  delay: (idx % 3) * 0.1, // Stagger cards per row
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className="bg-white rounded-3xl border-2 border-stone-200 overflow-hidden shadow-sm hover:shadow-xl hover:border-emerald-600 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Photo with Badge & smooth image zoom */}
                  <div className="relative aspect-[16/10] bg-stone-100 overflow-hidden">
                    <img
                      src={v.image}
                      alt={v.name[lang]}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3 bg-emerald-700 text-white text-xs font-black px-2.5 py-1 rounded-lg shadow-md">
                      {v.badge[lang]}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5 sm:p-6 space-y-3.5">
                    {/* Name */}
                    <h3 className="text-xl sm:text-2xl font-black text-stone-900 leading-tight group-hover:text-emerald-800 transition-colors">
                      {v.name[lang]}
                    </h3>

                    {/* Popular Varieties Tags */}
                    <div>
                      <span className="text-xs font-bold text-stone-500 uppercase tracking-wide block mb-1.5">
                        {lang === 'mr' ? 'प्रसिद्ध कंपन्या व वाण:' : 'Popular Varieties:'}
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {v.popularBrands.map((brand, bIdx) => (
                          <span
                            key={bIdx}
                            className="bg-emerald-50 text-emerald-950 border border-emerald-300 text-xs font-bold px-2 py-0.5 rounded-md"
                          >
                            {brand}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Description in simple words */}
                    <p className="text-stone-700 text-xs sm:text-sm leading-relaxed font-medium">
                      {v.description[lang]}
                    </p>

                    {/* Simple benefits checklist */}
                    <div className="pt-2 border-t border-stone-100 space-y-1">
                      {v.features[lang].slice(0, 3).map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-2 text-xs font-bold text-stone-800">
                          <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Big Action Buttons at Bottom of Card */}
                <div className="p-4 sm:p-5 pt-0 flex items-center gap-2">
                  <a
                    href={`https://wa.me/${contact.whatsapp}?text=${waMessage}`}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 active:scale-95 text-white py-3 px-3 rounded-xl font-black text-sm shadow-sm transition-all"
                  >
                    <MessageCircle className="w-4 h-4 fill-white" />
                    <span>{lang === 'mr' ? 'व्हॉट्सॲप चौकशी' : 'WhatsApp Inquiry'}</span>
                  </a>

                  <a
                    href={`tel:${contact.phone}`}
                    className="flex items-center justify-center p-3 rounded-xl bg-stone-100 hover:bg-stone-200 active:scale-95 text-stone-900 border border-stone-300 font-bold transition-all"
                    title={lang === 'mr' ? 'थेट फोन करा' : 'Call'}
                  >
                    <Phone className="w-4 h-4 text-emerald-700" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
