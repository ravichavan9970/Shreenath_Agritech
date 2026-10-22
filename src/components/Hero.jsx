import React from 'react';
import { Phone, MessageCircle, CheckCircle2, Truck, ShieldCheck, Sun, ArrowDown } from 'lucide-react';

export default function Hero({ lang, contact, onOpenBookingModal }) {
  return (
    <section className="relative bg-gradient-to-b from-emerald-50 via-white to-stone-50 pt-6 pb-12 sm:pt-10 sm:pb-16 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left Text & Big Buttons */}
          <div className="lg:col-span-7 space-y-5 text-center lg:text-left">
            {/* Tag */}
            <div className="inline-flex items-center gap-1.5 bg-emerald-100 border border-emerald-300 px-3.5 py-1.5 rounded-full text-emerald-900 text-xs sm:text-sm font-bold">
              <span>🌱</span>
              <span>
                {lang === 'mr'
                  ? 'तुमची विश्वासार्ह होलसेल भाजीपाला रोप नर्सरी'
                  : 'Your Trusted Wholesale Vegetable Seedling Nursery'}
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-stone-900 tracking-tight leading-tight">
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
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-stone-700 leading-relaxed font-medium max-w-2xl mx-auto lg:mx-0">
              {lang === 'mr'
                ? 'टोमॅटो, टरबूज, पपई तैवान ७८६, कोबी, मिरची व इतर सर्व भाजीपाला रोपे होलसेल दरात उपलब्ध. हायटेक पॉलीहाऊसमध्ये वाढवलेली व उन्हात टिकणारी खात्रीशीर रोपे.'
                : 'Wholesale seedlings for Tomato, Watermelon, Papaya Taiwan 786, Cabbage, Chilli and more. Hardened inside climate-controlled polyhouses.'}
            </p>

            {/* Two Giant Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3 pt-2">
              <a
                href={`https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(
                  lang === 'mr'
                    ? 'नमस्कार श्रीनाथ ॲग्रीटेक, मला भाजीपाला रोपांची माहिती व दर सांगा.'
                    : 'Hello Shrinath Agritech, please share seedling availability and pricing.'
                )}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-4 rounded-2xl font-black text-base sm:text-lg shadow-lg shadow-emerald-700/25 transition active:scale-95"
              >
                <MessageCircle className="w-6 h-6 fill-white" />
                <span>{lang === 'mr' ? 'व्हॉट्सॲपवर ऑर्डर द्या' : 'Order on WhatsApp'}</span>
              </a>

              <a
                href={`tel:${contact.phone}`}
                className="flex items-center justify-center gap-2 bg-stone-900 hover:bg-stone-800 text-white px-6 py-4 rounded-2xl font-black text-base sm:text-lg shadow-md transition active:scale-95"
              >
                <Phone className="w-5 h-5 text-amber-400" />
                <span>{lang === 'mr' ? 'थेट कॉल करा' : 'Call Directly'}</span>
              </a>
            </div>

            {/* 4 Simple Highlights */}
            <div className="grid grid-cols-2 gap-3 pt-4 text-left">
              <div className="flex items-center gap-2 bg-white p-3 rounded-xl border border-stone-200 shadow-2xs">
                <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
                <span className="text-xs sm:text-sm font-bold text-stone-800">
                  {lang === 'mr' ? '१००% रोगमुक्त रोपे' : '100% Disease-Free'}
                </span>
              </div>

              <div className="flex items-center gap-2 bg-white p-3 rounded-xl border border-stone-200 shadow-2xs">
                <Sun className="w-5 h-5 text-amber-500 shrink-0" />
                <span className="text-xs sm:text-sm font-bold text-stone-800">
                  {lang === 'mr' ? 'उन्हात टिकणारे हार्डनिंग' : 'Sun-Hardened'}
                </span>
              </div>

              <div className="flex items-center gap-2 bg-white p-3 rounded-xl border border-stone-200 shadow-2xs">
                <Truck className="w-5 h-5 text-emerald-600 shrink-0" />
                <span className="text-xs sm:text-sm font-bold text-stone-800">
                  {lang === 'mr' ? 'शेतावर थेट डिलिव्हरी' : 'Farm Gate Delivery'}
                </span>
              </div>

              <div className="flex items-center gap-2 bg-white p-3 rounded-xl border border-stone-200 shadow-2xs">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span className="text-xs sm:text-sm font-bold text-stone-800">
                  {lang === 'mr' ? 'थेट होलसेल दर' : 'Wholesale Rates'}
                </span>
              </div>
            </div>
          </div>

          {/* Right Real Nursery Photo Card */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-3xl p-3 border-2 border-emerald-600/30 shadow-xl overflow-hidden">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
                <img
                  src="/images/polyhouse-nursery-1.jpg"
                  alt="श्रीनाथ ॲग्रीटेक हायटेक नर्सरी"
                  className="w-full h-full object-cover"
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
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-emerald-800 hover:text-emerald-950"
                >
                  <span>{lang === 'mr' ? 'खाली रोपांची यादी पहा' : 'View Seedling Varieties Below'}</span>
                  <ArrowDown className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
