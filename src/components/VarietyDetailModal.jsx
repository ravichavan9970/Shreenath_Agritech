import React, { useState } from 'react';
import { X, Check, MessageCircle, Phone, Calendar, Ruler, ShieldAlert, Sparkles } from 'lucide-react';

export default function VarietyDetailModal({ variety, lang, contact, onClose }) {
  if (!variety) return null;

  const [activeImage, setActiveImage] = useState(variety.gallery[0] || variety.image);

  const waText = encodeURIComponent(
    lang === 'mr'
      ? `नमस्कार श्रीनाथ ॲग्रीटेक,\nमला *${variety.name.mr}* या रोपांचे बुकिंग करायचे आहे.\nकृपया चालू दर व डिलिव्हरी माहिती द्यावी.`
      : `Hello Shreenath Agritech,\nI would like to book *${variety.name.en}* seedlings.\nPlease provide rates and delivery schedule.`
  );

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div className="relative bg-white rounded-3xl max-w-3xl w-full shadow-2xl border border-stone-200 overflow-hidden my-8">
        {/* Top Header */}
        <div className="flex items-center justify-between p-4 sm:p-6 border-b border-stone-100 bg-stone-50">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100/70 px-2.5 py-0.5 rounded-md">
              {variety.badge[lang]}
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-stone-900 mt-1">
              {variety.name[lang]}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-stone-500 hover:text-stone-900 hover:bg-stone-200 transition cursor-pointer"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-4 sm:p-6 space-y-6">
          {/* Main Photo & Thumbnails */}
          <div>
            <div className="aspect-[16/9] rounded-2xl overflow-hidden bg-stone-100 border border-stone-200 shadow-inner">
              <img
                src={activeImage}
                alt={variety.name[lang]}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Thumbnails */}
            {variety.gallery && variety.gallery.length > 1 && (
              <div className="flex items-center gap-2.5 mt-3">
                {variety.gallery.map((img, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveImage(img)}
                    className={`relative w-20 aspect-video rounded-xl overflow-hidden border-2 transition cursor-pointer ${
                      activeImage === img ? 'border-emerald-600 ring-2 ring-emerald-500/20' : 'border-stone-200 opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="Thumbnail" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Description */}
          <div>
            <h4 className="text-sm font-bold text-stone-900 mb-1">
              {lang === 'mr' ? 'रोपांचे स्वरूप व वैशिष्ट्ये:' : 'Description & Characteristics:'}
            </h4>
            <p className="text-stone-700 text-sm leading-relaxed">
              {variety.description[lang]}
            </p>
          </div>

          {/* Specs Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 bg-stone-50 p-4 rounded-2xl border border-stone-200 text-xs">
            <div>
              <span className="text-stone-500 block font-medium">
                {lang === 'mr' ? 'नर्सरी वाढ कालावधी:' : 'Nursery Maturity:'}
              </span>
              <span className="font-bold text-stone-900 text-sm flex items-center gap-1 mt-0.5">
                <Calendar className="w-3.5 h-3.5 text-emerald-600" />
                {variety.leadTime[lang]}
              </span>
            </div>

            <div>
              <span className="text-stone-500 block font-medium">
                {lang === 'mr' ? 'शिफारस अंतर:' : 'Recommended Spacing:'}
              </span>
              <span className="font-bold text-stone-900 text-sm flex items-center gap-1 mt-0.5">
                <Ruler className="w-3.5 h-3.5 text-emerald-600" />
                {variety.defaultSpacing}
              </span>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <span className="text-stone-500 block font-medium">
                {lang === 'mr' ? 'प्रति एकर अंदाजे रोपे:' : 'Density Per Acre:'}
              </span>
              <span className="font-bold text-emerald-800 text-sm flex items-center gap-1 mt-0.5">
                <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                {variety.plantsPerAcre.toLocaleString()} {lang === 'mr' ? 'रोपे' : 'plants'}
              </span>
            </div>
          </div>

          {/* Popular Brands */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500 mb-2">
              {lang === 'mr' ? 'उपलब्ध कंपनी वाण व हायब्रीड जाती:' : 'Commercial Brands & Hybrid Varieties:'}
            </h4>
            <div className="flex flex-wrap gap-2">
              {variety.popularBrands.map((brand, idx) => (
                <span
                  key={idx}
                  className="bg-emerald-50 text-emerald-900 border border-emerald-200 px-2.5 py-1 rounded-lg text-xs font-semibold"
                >
                  {brand}
                </span>
              ))}
            </div>
          </div>

          {/* Features bullet list */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500 mb-1">
              {lang === 'mr' ? 'श्रीनाथ ॲग्रीटेकचे फायदे:' : 'Key Advantages:'}
            </h4>
            <div className="grid sm:grid-cols-2 gap-2">
              {variety.features[lang].map((feat, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs text-stone-800 font-medium">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer CTAs */}
        <div className="p-4 sm:p-6 border-t border-stone-200 bg-stone-50 flex flex-wrap items-center justify-between gap-3">
          <div className="text-xs text-stone-600">
            <span className="font-bold text-stone-900 block">{contact.phoneDisplay}</span>
            <span>{lang === 'mr' ? 'थेट नर्सरीवर संपर्क करा' : 'Contact Nursery directly'}</span>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={`tel:${contact.phone}`}
              className="px-4 py-2.5 rounded-xl border border-stone-300 font-bold text-xs sm:text-sm text-stone-800 hover:bg-white transition"
            >
              {lang === 'mr' ? 'कॉल करा' : 'Call'}
            </a>

            <a
              href={`https://wa.me/${contact.whatsapp}?text=${waText}`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm shadow-md transition"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>{lang === 'mr' ? 'ही रोपे बुक करा' : 'Book These Seedlings'}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
