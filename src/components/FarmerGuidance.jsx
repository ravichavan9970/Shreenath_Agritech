import React from 'react';
import { HelpCircle, PhoneCall, MessageCircle, FileText, CheckCircle2, Lightbulb, ShieldAlert } from 'lucide-react';

export default function FarmerGuidance({ lang, contact }) {
  const guidePoints = [
    {
      title: { mr: '१. मोफत तांत्रिक सल्ला (Free Technical Agronomy)', en: '1. Free Technical Agronomy Advice' },
      desc: {
        mr: 'रोप लागवडीपूर्वी जमिनीची मशागत, बेड तयार करणे, मल्चिंग पेपर (२५ ते ३० मायक्रॉन) आणि ड्रीप अंतराबाबत तज्ञांकडून विनामूल्य मार्गदर्शन.',
        en: 'Expert advice on land preparation, raised bed formation, 25-30 micron mulching paper, and inline drip layout.'
      },
      tag: { mr: 'लागवड पूर्व', en: 'Pre-Planting' }
    },
    {
      title: { mr: '२. वॉटरिंग व ड्रेन्चिंग वेळापत्रक (Drenching Schedule)', en: '2. Drenching & Establishment Care' },
      desc: {
        mr: 'लागवडीनंतर पहिल्या ३ ते ७ दिवसांत मुळांचा विकास होण्यासाठी ह्युमिक ऍसिड, १९:१९:१९ व बुरशीनाशक ड्रेन्चिंगचा अचूक डोस.',
        en: 'Prescribed root development schedule using humic acid, 19:19:19 soluble fertilizer and preventive fungicide drenching.'
      },
      tag: { mr: 'पहिला आठवडा', en: 'Week 1' }
    },
    {
      title: { mr: '३. कीड व रोग नियंत्रण वेळापत्रक (Pest & Disease Control)', en: '3. Pest & Disease Management' },
      desc: {
        mr: 'थ्रीप्स, तुडतुडे, नागअळी, करपा व व्हायरस प्रतिबंधासाठी आधुनिक जैविक व रासायनिक फवारणीचे काटेकोर वेळापत्रक.',
        en: 'Preventive spray calendar against thrips, leaf miner, early blight, and viral vectors to safeguard heavy fruit setting.'
      },
      tag: { mr: 'वाढ अवस्था', en: 'Vegetative Stage' }
    },
    {
      title: { mr: '४. शेतकरी प्रशिक्षण व कार्यशाळा (Workshops)', en: '4. Farmer Training Workshops' },
      desc: {
        mr: 'उत्पादन वाढ आणि खर्च कमी करण्यासाठी स्थानिक पातळीवर वेळोवेळी शेतकरी मार्गदर्शन मेळावे व प्रशिक्षण सत्रे.',
        en: 'Periodic on-ground progressive farmer meets, crop demonstrations, and yield enhancement workshops.'
      },
      tag: { mr: 'शेती मेळावे', en: 'Field Days' }
    }
  ];

  return (
    <section className="py-16 sm:py-20 bg-emerald-950 text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-emerald-700/20 blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Heading & Guidance Cards */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-1.5 bg-emerald-800/80 text-emerald-300 border border-emerald-700 text-xs sm:text-sm font-bold px-3 py-1 rounded-full">
              <HelpCircle className="w-4 h-4 text-emerald-400" />
              <span>{lang === 'mr' ? 'शेतकऱ्यांसाठी मोफत सेवा' : 'Dedicated Farmer Support'}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              {lang === 'mr'
                ? 'शेतकऱ्यांसाठी आमची मदत आणि मार्गदर्शन'
                : 'Free Agronomic Advice & Post-Planting Guidance'}
            </h2>

            <p className="text-emerald-100/90 text-sm sm:text-base leading-relaxed">
              {lang === 'mr'
                ? 'श्रीनाथ ॲग्रीटेकचे नाते केवळ रोपे देण्यापुरते मर्यादित नाही. लागवडीपासून ते पहिला तोडा बाजारात जाईपर्यंत प्रत्येक टप्प्यावर आमचे कृषी तज्ञ शेतकऱ्यांच्या सोबत असतात.'
                : 'Our relationship does not end at seedling delivery. Our team guides you through field preparation, drenching schedules, drip fertigation, and disease management.'}
            </p>

            <div className="space-y-4 pt-2">
              {guidePoints.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-emerald-900/60 border border-emerald-800/80 rounded-2xl p-4 sm:p-5 hover:bg-emerald-900 transition"
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <h3 className="font-bold text-white text-base">
                      {item.title[lang]}
                    </h3>
                    <span className="text-[11px] font-bold bg-amber-400/20 text-amber-300 px-2.5 py-0.5 rounded-md">
                      {item.tag[lang]}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-emerald-200/90 leading-relaxed">
                    {item.desc[lang]}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Expert Consultation Card */}
          <div className="lg:col-span-5">
            <div className="bg-white text-stone-900 rounded-3xl p-6 sm:p-8 shadow-2xl border border-stone-200 space-y-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-800 rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-xs">
                  <PhoneCall className="w-8 h-8 text-emerald-700" />
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-stone-900">
                  {lang === 'mr' ? 'कृषी तज्ञ हेल्पलाइन' : 'Farmer Agronomy Helpline'}
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 mt-1">
                  {lang === 'mr'
                    ? 'कोणतीही अडचण किंवा सल्ला हवा असल्यास थेट आमच्या तज्ञांना संपर्क करा.'
                    : 'Call or WhatsApp us for instant advice on seedling care and fertigation.'}
                </p>
              </div>

              {/* Direct Call & WhatsApp Buttons */}
              <div className="space-y-3">
                <a
                  href={`tel:${contact.phone}`}
                  className="w-full flex items-center justify-center gap-2 bg-stone-900 hover:bg-stone-800 text-white py-3.5 px-4 rounded-xl font-black text-sm transition shadow-md"
                >
                  <PhoneCall className="w-4 h-4 text-emerald-400" />
                  <span>{contact.phoneDisplay}</span>
                </a>

                <a
                  href={`https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(
                    lang === 'mr'
                      ? 'नमस्कार श्रीनाथ ॲग्रीटेक, मला शेती व्यवस्थापन व रोप लागवडीबाबत सल्ला हवा आहे.'
                      : 'Hello Shrinath Agritech, I need agronomic advice regarding seedling management.'
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white py-3.5 px-4 rounded-xl font-black text-sm transition shadow-md"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>{lang === 'mr' ? 'व्हॉट्सॲपवर फोटो पाठवा' : 'Send Crop Photo on WhatsApp'}</span>
                </a>
              </div>

              {/* Assurances list */}
              <div className="pt-4 border-t border-stone-100 text-xs text-stone-600 space-y-2">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{lang === 'mr' ? 'कोणतेही शुल्क नाही - १००% मोफत मार्गदर्शन' : '100% Free Guidance For Farmers'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{lang === 'mr' ? 'सकाळी ९:०० ते संध्याकाळी ६:०० सतत उपलब्ध' : 'Available 9:00 AM to 6:00 PM Daily'}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
