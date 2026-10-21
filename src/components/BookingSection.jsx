import React, { useState } from 'react';
import { Send, Phone, MessageCircle, Calendar, MapPin, CheckCircle2, Sprout, ArrowRight } from 'lucide-react';

export default function BookingSection({ lang, contact, varieties }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    location: '',
    crop: 'टोमॅटो (Tomato)',
    quantity: '५,०००',
    date: '',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const text = encodeURIComponent(
      lang === 'mr'
        ? `*नवीन रोप बुकिंग / चौकशी (श्रीनाथ ॲग्रीटेक)*\n\n👤 शेतकऱ्याचे नाव: ${formData.name || 'शेतकरी बांधव'}\n📱 मोबाईल: ${formData.phone || 'उपलब्ध नाही'}\n📍 गाव/पत्ता: ${formData.location || 'महाराष्ट्र'}\n🌱 पीक व वाण: ${formData.crop}\n📦 रोपांची संख्या: ${formData.quantity}\n📅 लागवड तारीख: ${formData.date || 'लवकरात लवकर'}\n📝 इतर सूचना: ${formData.notes || 'काही नाही'}\n\nकृपया बुकिंग खात्री करून चालू दर सांगावेत.`
        : `*New Seedling Booking Request (Shrinath Agritech)*\n\n👤 Farmer Name: ${formData.name || 'Not provided'}\n📱 Phone: ${formData.phone || 'Not provided'}\n📍 Village/Location: ${formData.location || 'Maharashtra'}\n🌱 Crop: ${formData.crop}\n📦 Quantity: ${formData.quantity}\n📅 Expected Date: ${formData.date || 'Earliest'}\n📝 Notes: ${formData.notes || 'None'}\n\nPlease confirm availability and share final pricing.`
    );

    window.open(`https://wa.me/${contact.whatsapp}?text=${text}`, '_blank');
    setSubmitted(true);
  };

  const steps = [
    {
      num: '१',
      numEn: '1',
      title: { mr: 'पिकाचा वाण निवडा', en: 'Choose Variety' },
      desc: { mr: 'टोमॅटो, टरबूज, पपई, कोबी इत्यादींमधील तुमचा आवडता ब्रँड निवडा.', en: 'Select your preferred hybrid brand or variety according to market demand.' }
    },
    {
      num: '२',
      numEn: '2',
      title: { mr: 'रोपांची संख्या व तारीख ठरवा', en: 'Set Quantity & Date' },
      desc: { mr: 'तुमच्या क्षेत्रफळानुसार लागवडीची अंदाजे तारीख आणि रोपांची संख्या सांगा.', en: 'Specify acreage, seedlings needed and your target transplanting date.' }
    },
    {
      num: '३',
      numEn: '3',
      title: { mr: 'बुकिंगची पुष्टी करा', en: 'Confirm Booking' },
      desc: { mr: 'व्हॉट्सॲप किंवा फोनवर संपर्क करून आपले रोप बुकिंग आगाऊ नोंदवा.', en: 'Confirm order via WhatsApp or a brief phone call with advance token.' }
    },
    {
      num: '४',
      numEn: '4',
      title: { mr: 'थेट शेतात सुरक्षित डिलिव्हरी', en: 'Safe Farm Delivery' },
      desc: { mr: 'ठरलेल्या दिवशी ताजी, निरोगी व हार्डनिंग झालेली रोपे थेट तुमच्या शेतात पोहोचतील.', en: 'Vigorous, hardened seedlings delivered right to your farm gate in pristine condition.' }
    }
  ];

  return (
    <section id="booking-section" className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 bg-emerald-100 text-emerald-900 border border-emerald-300 text-xs sm:text-sm font-bold px-3 py-1 rounded-full mb-3">
            <Sprout className="w-4 h-4 text-emerald-700" />
            <span>{lang === 'mr' ? 'सोपी व जलद प्रक्रिया' : 'Fast & Seamless Booking'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-stone-900 tracking-tight">
            {lang === 'mr' ? 'संपर्क आणि ऑर्डर कशी द्याल?' : 'How to Order Seedlings'}
          </h2>
          <p className="text-stone-600 mt-2 text-base">
            {lang === 'mr'
              ? 'तुम्ही तुमच्या गरजेनुसार रोपे ऑर्डर करू शकता आणि आम्ही ती तुमच्यापर्यंत सुरक्षितपणे पोहोचवू.'
              : 'Book your vegetable seedlings in 4 easy steps with guaranteed doorstep delivery.'}
          </p>
        </div>

        {/* 4 Steps Visual Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="bg-stone-50 rounded-2xl p-6 border border-stone-200 relative group hover:border-emerald-500 hover:bg-emerald-50/40 transition duration-300"
            >
              <div className="w-10 h-10 rounded-xl bg-emerald-700 text-white font-black flex items-center justify-center text-lg mb-4 shadow-sm">
                {lang === 'mr' ? step.num : step.numEn}
              </div>
              <h3 className="font-bold text-stone-900 text-base mb-1.5">
                {step.title[lang]}
              </h3>
              <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                {step.desc[lang]}
              </p>
            </div>
          ))}
        </div>

        {/* Interactive Booking Form Card */}
        <div className="bg-gradient-to-br from-stone-900 to-emerald-950 rounded-3xl p-6 sm:p-10 lg:p-12 text-white shadow-2xl">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            {/* Form Info (Col 5) */}
            <div className="lg:col-span-5 space-y-5">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-300 bg-amber-400/20 px-3 py-1 rounded-full">
                {lang === 'mr' ? 'थेट नर्सरी ऑर्डर' : 'Direct Nursery Booking'}
              </span>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white leading-tight">
                {lang === 'mr'
                  ? 'श्रीनाथ ॲग्रीटेकसोबत तुमच्या शेतीचा विकास करा!'
                  : 'Cultivate High Profits With Shrinath Agritech!'}
              </h3>
              <p className="text-emerald-100/90 text-sm leading-relaxed">
                {lang === 'mr'
                  ? 'श्रीनाथ ॲग्रीटेक तुम्हाला दर्जेदार रोप, आधुनिक तंत्रज्ञान आणि उत्कृष्ट सेवा यांचा संगम देतो. आजच संपर्क साधा आणि ताजी रोपांची खात्री करा!'
                  : 'We blend cutting-edge nursery infrastructure with deep agronomic care to deliver seedlings that thrive in your fields.'}
              </p>

              <div className="pt-2 space-y-3 text-sm">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-800 text-emerald-300 flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-emerald-300 block">{lang === 'mr' ? 'फोन बुकिंग:' : 'Phone Booking:'}</span>
                    <a href={`tel:${contact.phone}`} className="font-bold text-white hover:text-amber-300 transition">
                      {contact.phoneDisplay}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-800 text-emerald-300 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-emerald-300 block">{lang === 'mr' ? 'नर्सरी पत्ता:' : 'Nursery Location:'}</span>
                    <span className="font-medium text-white">{contact.address[lang]}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Actual Form (Col 7) */}
            <div className="lg:col-span-7 bg-white text-stone-900 rounded-2xl p-6 sm:p-8 shadow-xl">
              <h4 className="text-lg font-black text-stone-900 mb-4 pb-2 border-b border-stone-100">
                {lang === 'mr' ? 'आगाऊ रोप मागणी अर्ज (Booking Form)' : 'Advance Seedling Booking Form'}
              </h4>

              <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-bold text-stone-800 mb-1">
                      {lang === 'mr' ? 'शेतकऱ्याचे नाव (Farmer Name):' : 'Farmer Name:'} *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder={lang === 'mr' ? 'उदा. रोहित ठोके' : 'e.g. Ramesh Patil'}
                      className="w-full bg-stone-50 border border-stone-300 rounded-xl px-3.5 py-2.5 font-medium focus:ring-2 focus:ring-emerald-600 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-stone-800 mb-1">
                      {lang === 'mr' ? 'मोबाईल नंबर (WhatsApp No):' : 'Mobile Number:'} *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="उदा. 9876543210"
                      className="w-full bg-stone-50 border border-stone-300 rounded-xl px-3.5 py-2.5 font-medium focus:ring-2 focus:ring-emerald-600 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-bold text-stone-800 mb-1">
                      {lang === 'mr' ? 'गाव / तालुका / जिल्हा:' : 'Village / Taluka / District:'} *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      placeholder={lang === 'mr' ? 'उदा. सटाणा / मालेगाव / कळवण' : 'e.g. Satana, Malegaon, Kalwan'}
                      className="w-full bg-stone-50 border border-stone-300 rounded-xl px-3.5 py-2.5 font-medium focus:ring-2 focus:ring-emerald-600 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-stone-800 mb-1">
                      {lang === 'mr' ? 'पिकाचे नाव व वाण (Crop Variety):' : 'Crop & Variety:'} *
                    </label>
                    <select
                      value={formData.crop}
                      onChange={(e) => setFormData({ ...formData, crop: e.target.value })}
                      className="w-full bg-stone-50 border border-stone-300 rounded-xl px-3.5 py-2.5 font-bold focus:ring-2 focus:ring-emerald-600 focus:outline-none"
                    >
                      <option value="टोमॅटो - योगी / आर्यमान / ६२४२">टोमॅटो (Tomato - Yogi / Aryaman / 6242)</option>
                      <option value="टरबूज - सागर किंग / मॅक्स">टरबूज (Watermelon - Sagar King / Max)</option>
                      <option value="पपई तैवान ७८६ (रेड लेडी)">पपई तैवान ७८६ (Papaya Taiwan 786)</option>
                      <option value="पत्ता कोबी - वीर ३३३ / युरो २">पत्ता कोबी (Cabbage - Veer 333 / Euro 2)</option>
                      <option value="मिरची - सितारा / तेजा ४ / रेवती">मिरची (Chilli - Sitara / Teja 4)</option>
                      <option value="वांगी - पंचगंगा / अजय">वांगी (Brinjal - Panchganga / Ajay)</option>
                      <option value="फ्लॉवर - गिरीजा / स्नोबॉल">फ्लॉवर (Cauliflower - Girija)</option>
                      <option value="ढोबळी मिरची (कॅप्सिकम)">ढोबळी मिरची (Capsicum)</option>
                      <option value="झेंडू फुले रोपे">झेंडू (Marigold Flowers)</option>
                      <option value="इतर वाण (Other)">इतर वाण (Other)</option>
                    </select>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-bold text-stone-800 mb-1">
                      {lang === 'mr' ? 'रोपांची संख्या (Number of Seedlings):' : 'Seedlings Quantity:'} *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.quantity}
                      onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                      placeholder="उदा. ५,००० रोपे"
                      className="w-full bg-stone-50 border border-stone-300 rounded-xl px-3.5 py-2.5 font-medium focus:ring-2 focus:ring-emerald-600 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-stone-800 mb-1">
                      {lang === 'mr' ? 'अपेक्षित लागवड तारीख:' : 'Target Plantation Date:'}
                    </label>
                    <input
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full bg-stone-50 border border-stone-300 rounded-xl px-3.5 py-2.5 font-medium focus:ring-2 focus:ring-emerald-600 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-bold text-stone-800 mb-1">
                    {lang === 'mr' ? 'काही विशेष सूचना (Optional Notes):' : 'Notes / Special Requests:'}
                  </label>
                  <textarea
                    rows="2"
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder={lang === 'mr' ? 'उदा. बांधावर डिलिव्हरी हवी आहे.' : 'e.g. Need doorstep transport to farm'}
                    className="w-full bg-stone-50 border border-stone-300 rounded-xl px-3.5 py-2 font-medium focus:ring-2 focus:ring-emerald-600 focus:outline-none resize-none"
                  ></textarea>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-black py-3.5 px-4 rounded-xl shadow-lg transition active:scale-95 cursor-pointer text-sm sm:text-base"
                  >
                    <MessageCircle className="w-5 h-5 fill-white" />
                    <span>
                      {lang === 'mr'
                        ? 'व्हॉट्सॲपवर त्वरित बुकिंग पाठवा'
                        : 'Submit Booking via WhatsApp'}
                    </span>
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </button>

                  {submitted && (
                    <p className="text-center text-xs text-emerald-700 font-bold mt-2">
                      ✅ {lang === 'mr' ? 'तुमचा अर्ज व्हॉट्सॲपवर उघडला गेला आहे.' : 'WhatsApp inquiry launched.'}
                    </p>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
