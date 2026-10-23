import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageCircle, CheckCircle2, Truck, ShieldCheck, Sun, ArrowDown } from 'lucide-react';

export default function Hero({ lang, contact, onOpenBookingModal }) {
  return (
    <section className="relative bg-gradient-to-b from-emerald-50 via-white to-stone-50 pt-4 pb-8 sm:pt-10 sm:pb-16 border-b border-stone-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-10 items-center">
          {/* Left Text & Big Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 space-y-4 sm:space-y-5 text-center lg:text-left"
          >
            {/* Tag */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="inline-flex items-center gap-1.5 bg-emerald-100 border border-emerald-300 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full text-emerald-900 text-xs sm:text-sm font-bold shadow-2xs"
            >
              <span className="inline-block animate-bounce">🌱</span>
              <span>
                {lang === 'mr'
                  ? 'तुमची विश्वासार्ह होलसेल भाजीपाला रोप नर्सरी'
                  : 'Your Trusted Wholesale Vegetable Seedling Nursery'}
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="text-2xl sm:text-4xl lg:text-5xl font-black text-stone-900 tracking-tight leading-tight"
            >
              {lang === 'mr' ? (
                <>
                  निरोगी रोपे, भरघोस उत्पादन,{' '}
                  <span className="text-emerald-700 underline decoration-amber-400 decoration-4">
                    समृद्ध शेतकरी!
                  </span>
                </>
              ) : (
                <>
                  Healthy Seedlings, Bumper Harvest,{' '}
                  <span className="text-emerald-700 underline decoration-amber-400 decoration-4">
                    Prosperous Farmers!
                  </span>
                </>
              )}
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-xs sm:text-base text-stone-700 leading-relaxed font-medium max-w-2xl mx-auto lg:mx-0"
            >
              {lang === 'mr'
                ? 'टोमॅटो, टरबूज, पपई तैवान ७८६, कोबी, मिरची व इतर सर्व भाजीपाला रोपे होलसेल दरात उपलब्ध. हायटेक पॉलीहाऊसमध्ये वाढवलेली व उन्हात टिकणारी खात्रीशीर रोपे.'
                : 'Wholesale seedlings for Tomato, Watermelon, Papaya Taiwan 786, Cabbage, Chilli and more. Hardened inside climate-controlled polyhouses.'}
            </motion.p>

            {/* Two Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-2.5 sm:gap-3 pt-1"
            >
              <a
                href={`https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(
                  lang === 'mr'
                    ? 'नमस्कार श्रीनाथ ॲग्रीटेक, मला भाजीपाला रोपांची माहिती व दर सांगा.'
                    : 'Hello Shrinath Agritech, please share seedling availability and pricing.'
                )}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 hover:scale-[1.02] text-white px-5 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-black text-sm sm:text-lg shadow-md sm:shadow-lg shadow-emerald-700/25 transition-all active:scale-95 cursor-pointer"
              >
                <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 fill-white" />
                <span>{lang === 'mr' ? 'व्हॉट्सॲपवर ऑर्डर द्या' : 'Order on WhatsApp'}</span>
              </a>

              <a
                href={`tel:${contact.phone}`}
                className="flex items-center justify-center gap-2 bg-stone-900 hover:bg-stone-800 hover:scale-[1.02] text-white px-5 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-black text-sm sm:text-lg shadow-sm sm:shadow-md transition-all active:scale-95 cursor-pointer"
              >
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400" />
                <span>{lang === 'mr' ? 'थेट कॉल करा' : 'Call Directly'}</span>
              </a>
            </motion.div>

            {/* 4 Simple Highlights with staggered reveal */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="grid grid-cols-2 gap-2 sm:gap-3 pt-2 text-left"
            >
              <div className="flex items-center gap-2 bg-white hover:bg-emerald-50/50 p-2.5 sm:p-3 rounded-xl border border-stone-200 shadow-2xs transition-colors">
                <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600 shrink-0" />
                <span className="text-xs sm:text-sm font-bold text-stone-800 leading-tight">
                  {lang === 'mr' ? '१००% रोगमुक्त रोपे' : '100% Disease-Free'}
                </span>
              </div>

              <div className="flex items-center gap-2 bg-white hover:bg-amber-50/50 p-2.5 sm:p-3 rounded-xl border border-stone-200 shadow-2xs transition-colors">
                <Sun className="w-4 h-4 sm:w-5 sm:h-5 text-amber-500 shrink-0" />
                <span className="text-xs sm:text-sm font-bold text-stone-800 leading-tight">
                  {lang === 'mr' ? 'उन्हात टिकणारे हार्डनिंग' : 'Sun-Hardened'}
                </span>
              </div>

              <div className="flex items-center gap-2 bg-white hover:bg-emerald-50/50 p-2.5 sm:p-3 rounded-xl border border-stone-200 shadow-2xs transition-colors">
                <Truck className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600 shrink-0" />
                <span className="text-xs sm:text-sm font-bold text-stone-800 leading-tight">
                  {lang === 'mr' ? 'शेतावर थेट डिलिव्हरी' : 'Farm Gate Delivery'}
                </span>
              </div>

              <div className="flex items-center gap-2 bg-white hover:bg-emerald-50/50 p-2.5 sm:p-3 rounded-xl border border-stone-200 shadow-2xs transition-colors">
                <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600 shrink-0" />
                <span className="text-xs sm:text-sm font-bold text-stone-800 leading-tight">
                  {lang === 'mr' ? 'थेट होलसेल दर' : 'Wholesale Rates'}
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Real Nursery Photo Card with smooth entry */}
          <motion.div
            initial={{ opacity: 0, x: 30, scale: 0.96 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ delay: 0.35, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 mt-4 lg:mt-0"
          >
            <div className="bg-white rounded-2xl sm:rounded-3xl p-2.5 sm:p-3 border-2 border-emerald-600/30 shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-emerald-600/60">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] group">
                <img
                  src="/images/polyhouse-nursery-1.jpg"
                  alt="श्रीनाथ ॲग्रीटेक हायटेक नर्सरी"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <p className="text-base sm:text-lg font-black leading-tight">
                    {lang === 'mr'
                      ? 'श्रीनाथ ॲग्रीटेक हायटेक नर्सरी'
                      : 'Shrinath Agritech Hi-Tech Polyhouse'}
                  </p>
                  <p className="text-xs text-emerald-300 font-semibold mt-0.5">
                    {lang === 'mr' ? 'सटाणा-कळवण रोड, मल्हारवाडी, मुंजवाड (ता. सटाणा)' : 'Satana-Kalwan Rd, Malharwadi, Satana'}
                  </p>
                </div>
              </div>

              <div className="p-3 text-center">
                <a
                  href="#varieties"
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-emerald-800 hover:text-emerald-950 transition-colors"
                >
                  <span>{lang === 'mr' ? 'खाली रोपांची यादी पहा' : 'View Seedling Varieties Below'}</span>
                  <ArrowDown className="w-4 h-4 animate-bounce" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
