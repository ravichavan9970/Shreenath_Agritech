import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Sun, Truck, Check } from 'lucide-react';

export default function NurseryTech({ lang }) {
  const highlights = [
    {
      icon: ShieldCheck,
      title: { mr: '१००% रोगमुक्त व पांढरी मुळे', en: '100% Disease-Free & Strong Roots' },
      desc: {
        mr: 'निर्जंतुक कोकोपीट व प्रो-ट्रे तंत्रज्ञानामुळे रोपांच्या मुळांचे मजबूत जाळे तयार होते. शेतात लावल्यानंतर रोपे २ दिवसांत वाढ सुरू करतात.',
        en: 'Grown in sterile cocopeat pro-trays for dense white root formation and immediate establishment in fields.'
      },
      image: '/images/seedling-root-system.jpg',
      points: {
        mr: ['बुरशी व किडींपासून १००% मुक्त', 'पांढऱ्या मुळांचे सशक्त जाळे', 'उगवण क्षमता ९९%'],
        en: ['Fungus and pest free', 'Vigorous white feeder roots', '99% germination vigor']
      }
    },
    {
      icon: Sun,
      title: { mr: 'कडक उन्हासाठी विशेष हार्डनिंग', en: 'Open Sun-Hardened Seedlings' },
      desc: {
        mr: 'नर्सरीमधून शेतात जाण्यापूर्वी रोपांना उन्हाचा सराव दिला जातो. त्यामुळे थेट उन्हात लागवड केल्यानंतर एकही रोप सुकून मरत नाही.',
        en: 'Hardened in natural sunlight before dispatch so seedlings never suffer transplant shock or wilt in open heat.'
      },
      image: '/images/sun-hardening-nursery.jpg',
      points: {
        mr: ['उन्हात तग धरण्याची क्षमता', 'कमी पाणी आणि उष्णतेत टिकणारे', 'लागवडीनंतर मरणार नाही'],
        en: ['Withstands field heat', 'Zero transplant shock', 'Guaranteed field survival']
      }
    },
    {
      icon: Truck,
      title: { mr: 'थेट शेतावर सुरक्षित डिलिव्हरी', en: 'Direct Farm Gate Delivery' },
      desc: {
        mr: 'आमच्या विशेष सुरक्षित वाहनांद्वारे ट्रे न हलता व रोपे न तुटता थेट तुमच्या शेताच्या बांधावर सुरक्षितपणे पोहोचवली जातात.',
        en: 'Cushioned and ventilated vehicles ensure trays arrive at your farm gate fresh, undamaged, and ready for planting.'
      },
      image: '/images/farm-delivery-vehicle.jpg',
      points: {
        mr: ['वेळेवर खात्रीशीर पोहोच', 'ट्रे सुरक्षित राहण्याची हमी', 'नाशिक, धुळे, जळगाव व इतर जिल्हे'],
        en: ['On-time farm delivery', 'Zero tray breakage', 'Across Nashik, Dhule, Jalgaon & all Maharashtra']
      }
    }
  ];

  return (
    <section id="tech" className="py-12 sm:py-16 bg-white border-b border-stone-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Smooth Scroll Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-3xl mx-auto mb-10"
        >
          <div className="inline-block bg-emerald-100 text-emerald-900 border border-emerald-300 text-xs sm:text-sm font-black px-3.5 py-1 rounded-full mb-2">
            {lang === 'mr' ? '⭐ आमची खासियत' : '⭐ Our Strengths'}
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-stone-900 tracking-tight">
            {lang === 'mr' ? 'श्रीनाथ ॲग्रीटेकची रोपे का निवडावीत?' : 'Why Choose Shrinath Agritech Seedlings?'}
          </h2>
          <p className="text-stone-600 mt-2 text-sm sm:text-base font-medium">
            {lang === 'mr'
              ? 'आम्ही फक्त रोपे विकत नाही, तर शेतकऱ्यांच्या भरघोस उत्पादनाची आणि फायद्याची खात्री देतो.'
              : 'Dedicated to bumper yields and healthy crop establishment for every grower.'}
          </p>
        </motion.div>

        {/* 3 Large Simple Cards with Staggered Scroll Reveal */}
        <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.55,
                  delay: idx * 0.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className="bg-stone-50 rounded-3xl border-2 border-stone-200 overflow-hidden shadow-xs hover:shadow-xl hover:border-emerald-600 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="relative aspect-[16/10] overflow-hidden bg-stone-200">
                    <img
                      src={item.image}
                      alt={item.title[lang]}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>

                  <div className="p-5 sm:p-6 space-y-3">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
                        <Icon className="w-5 h-5 text-emerald-700" />
                      </div>
                      <h3 className="text-lg font-black text-stone-900 leading-tight group-hover:text-emerald-800 transition-colors">
                        {item.title[lang]}
                      </h3>
                    </div>

                    <p className="text-xs sm:text-sm text-stone-700 font-medium leading-relaxed">
                      {item.desc[lang]}
                    </p>

                    <div className="pt-2 border-t border-stone-200/80 space-y-1.5">
                      {item.points[lang].map((pt, pIdx) => (
                        <div key={pIdx} className="flex items-center gap-2 text-xs font-bold text-stone-800">
                          <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                          <span>{pt}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
