import React, { useState } from 'react';
import { Calculator, MessageCircle, ArrowRight } from 'lucide-react';

export default function PlantCalculator({ lang, contact }) {
  // Simple crop presets that every farmer understands
  const crops = [
    {
      id: 'tomato',
      name: { mr: 'टोमॅटो (Tomato)', en: 'Tomato' },
      icon: '🍅',
      perAcre: 7000,
      spacing: '४ x १.५ फूट',
    },
    {
      id: 'watermelon',
      name: { mr: 'टरबूज / खरबूज', en: 'Watermelon / Melon' },
      icon: '🍉',
      perAcre: 4800,
      spacing: '६ x १.५ फूट',
    },
    {
      id: 'papaya',
      name: { mr: 'पपई तैवान ७८६', en: 'Papaya Taiwan 786' },
      icon: '🍈',
      perAcre: 1000,
      spacing: '८ x ८ फूट',
    },
    {
      id: 'cabbage',
      name: { mr: 'पत्ता कोबी / फ्लॉवर', en: 'Cabbage / Cauliflower' },
      icon: '🥬',
      perAcre: 14000,
      spacing: '२ x १.५ फूट',
    },
    {
      id: 'chilli',
      name: { mr: 'मिरची हायब्रीड', en: 'Chilli' },
      icon: '🌶️',
      perAcre: 8000,
      spacing: '३.५ x १.५ फूट',
    },
    {
      id: 'brinjal',
      name: { mr: 'वांगी हायब्रीड', en: 'Brinjal' },
      icon: '🍆',
      perAcre: 5400,
      spacing: '४ x २ फूट',
    },
  ];

  const [selectedCrop, setSelectedCrop] = useState(crops[0]);
  const [acreCount, setAcreCount] = useState(1); // can be 0.25 (10 gunthe), 0.5 (20 gunthe), 1, 2, 3

  // Quick area options
  const quickAreas = [
    { label: { mr: '१० गुंठे', en: '10 Guntha' }, val: 0.25 },
    { label: { mr: '२० गुंठे (१/२ एकर)', en: 'Half Acre' }, val: 0.5 },
    { label: { mr: '१ एकर', en: '1 Acre' }, val: 1 },
    { label: { mr: '२ एकर', en: '2 Acres' }, val: 2 },
    { label: { mr: '३ एकर', en: '3 Acres' }, val: 3 },
  ];

  // Calculate total seedlings
  const totalSeedlings = Math.round(selectedCrop.perAcre * acreCount);

  const getAreaText = () => {
    if (acreCount === 0.25) return lang === 'mr' ? '१० गुंठे' : '10 Gunthas';
    if (acreCount === 0.5) return lang === 'mr' ? '२० गुंठे (१/२ एकर)' : 'Half Acre';
    return `${acreCount} ${lang === 'mr' ? 'एकर' : 'Acre(s)'}`;
  };

  const waMessage = encodeURIComponent(
    lang === 'mr'
      ? `नमस्कार श्रीनाथ ॲग्रीटेक,\nमी वेबसाईटवरील रोप गणकयंत्र पाहिले. मला खालील रोपांची चौकशी करायची आहे:\n\n🌱 पीक: ${selectedCrop.name.mr}\n📐 क्षेत्र: ${getAreaText()}\n📦 अंदाजे लागणारी रोपे: ${totalSeedlings.toLocaleString()} रोपे\n\nकृपया चालू दर आणि बुकिंग उपलब्ध तारीख सांगावी.`
      : `Hello Shrinath Agritech,\nI checked the Seedling Calculator on your website. I want to inquire about:\n\n🌱 Crop: ${selectedCrop.name.en}\n📐 Area: ${getAreaText()}\n📦 Seedlings Needed: ~${totalSeedlings.toLocaleString()} plants\n\nPlease share current pricing and delivery date.`
  );

  return (
    <section id="calculator" className="py-12 sm:py-16 bg-stone-100 border-b border-stone-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-1.5 bg-emerald-100 text-emerald-900 border border-emerald-300 text-xs sm:text-sm font-black px-3.5 py-1 rounded-full mb-2">
            <Calculator className="w-4 h-4 text-emerald-700" />
            <span>{lang === 'mr' ? 'शेतकऱ्यांसाठी मोफत साधन' : 'Free Tool'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-stone-900 tracking-tight">
            {lang === 'mr' ? 'सोपे रोप गणकयंत्र (Seedling Calculator)' : 'Simple Seedling Calculator'}
          </h2>
          <p className="text-stone-600 mt-1 text-sm sm:text-base font-medium">
            {lang === 'mr'
              ? 'फक्त पीक आणि जमीन निवडा - किती रोपे लागतील ते लगेच समजेल!'
              : 'Pick your crop and land area to instantly see how many seedlings you need.'}
          </p>
        </div>

        {/* The Simple Calculator Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border-2 border-stone-200 space-y-6">
          {/* Step 1: Select Crop */}
          <div>
            <label className="block text-sm sm:text-base font-black text-stone-900 mb-2.5">
              १. {lang === 'mr' ? 'तुमचे पीक निवडा:' : 'Step 1: Select Your Crop:'}
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
              {crops.map((c) => (
                <button
                  key={c.id}
                  type="button"
                  onClick={() => setSelectedCrop(c)}
                  className={`p-3 rounded-2xl border-2 text-left font-bold transition flex items-center gap-2 cursor-pointer ${
                    selectedCrop.id === c.id
                      ? 'border-emerald-600 bg-emerald-50 text-emerald-950 ring-2 ring-emerald-500/20 shadow-xs'
                      : 'border-stone-200 bg-stone-50 text-stone-700 hover:bg-stone-100'
                  }`}
                >
                  <span className="text-xl sm:text-2xl">{c.icon}</span>
                  <span className="text-xs sm:text-sm leading-tight">{c.name[lang]}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Step 2: Select Area */}
          <div>
            <label className="block text-sm sm:text-base font-black text-stone-900 mb-2.5">
              २. {lang === 'mr' ? 'तुमची जमीन किती आहे?' : 'Step 2: Select Your Land Area:'}
            </label>
            <div className="flex flex-wrap gap-2">
              {quickAreas.map((qa, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setAcreCount(qa.val)}
                  className={`px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition cursor-pointer ${
                    acreCount === qa.val
                      ? 'bg-emerald-700 text-white shadow-md'
                      : 'bg-stone-100 text-stone-800 hover:bg-stone-200 border border-stone-200'
                  }`}
                >
                  {qa.label[lang]}
                </button>
              ))}
            </div>
          </div>

          {/* Big Clear Result Box */}
          <div className="bg-gradient-to-br from-emerald-800 to-green-900 text-white rounded-2xl p-6 text-center shadow-lg">
            <span className="text-xs sm:text-sm text-emerald-200 font-bold block uppercase tracking-wider">
              {lang === 'mr' ? 'तुम्हाला लागतील अंदाजे रोपे:' : 'Seedlings Required:'}
            </span>

            <div className="text-4xl sm:text-5xl font-black text-amber-300 my-2">
              ~{totalSeedlings.toLocaleString()} {lang === 'mr' ? 'रोपे' : 'plants'}
            </div>

            <p className="text-xs sm:text-sm text-emerald-100 font-medium">
              🌱 {selectedCrop.name[lang]} • {getAreaText()} • {lang === 'mr' ? 'शिफारस अंतर' : 'Spacing'}: {selectedCrop.spacing}
            </p>

            {/* Instant WhatsApp Order */}
            <div className="mt-5">
              <a
                href={`https://wa.me/${contact.whatsapp}?text=${waMessage}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-amber-400 hover:bg-amber-300 active:bg-amber-500 text-stone-950 font-black px-6 py-3.5 rounded-xl text-sm sm:text-base shadow-lg transition"
              >
                <MessageCircle className="w-5 h-5 fill-stone-950" />
                <span>{lang === 'mr' ? 'ही रोपे व्हॉट्सॲपवर बुक करा' : 'Book on WhatsApp'}</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
