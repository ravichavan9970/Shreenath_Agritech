import React, { useState } from 'react';
import { X, MessageCircle, Phone, ArrowRight, Sprout } from 'lucide-react';

export default function BookingModal({ isOpen, onClose, lang, contact, varieties }) {
  if (!isOpen) return null;

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    location: '',
    crop: 'टोमॅटो (Tomato)',
    quantity: '५,००० रोपे',
    date: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const text = encodeURIComponent(
      lang === 'mr'
        ? `*नवीन रोप बुकिंग / चौकशी (श्रीनाथ ॲग्रीटेक)*\n\n👤 नाव: ${formData.name}\n📱 मोबाईल: ${formData.phone}\n📍 गाव/पत्ता: ${formData.location}\n🌱 पीक: ${formData.crop}\n📦 संख्या: ${formData.quantity}\n📅 तारीख: ${formData.date || 'लवकरात लवकर'}\n\nकृपया दर व बुकिंग उपलब्धतेची माहिती द्या.`
        : `*Seedling Booking Inquiry (Shreenath Agritech)*\n\n👤 Name: ${formData.name}\n📱 Phone: ${formData.phone}\n📍 Location: ${formData.location}\n🌱 Crop: ${formData.crop}\n📦 Quantity: ${formData.quantity}\n📅 Date: ${formData.date || 'Earliest'}\n\nPlease confirm availability and wholesale rate.`
    );

    window.open(`https://wa.me/${contact.whatsapp}?text=${text}`, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/75 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div className="relative bg-white rounded-3xl max-w-lg w-full shadow-2xl border border-stone-200 overflow-hidden my-8">
        {/* Header */}
        <div className="flex items-center justify-between p-5 bg-gradient-to-r from-emerald-800 to-green-900 text-white">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-white/20 flex items-center justify-center">
              <Sprout className="w-5 h-5 text-amber-300" />
            </div>
            <div>
              <h3 className="text-lg font-black leading-tight">
                {lang === 'mr' ? 'आगाऊ रोप बुकिंग' : 'Seedling Booking Request'}
              </h3>
              <p className="text-xs text-emerald-200">
                {lang === 'mr' ? 'श्रीनाथ ॲग्रीटेक • सटाणा (नाशिक)' : 'Shreenath Agritech • Satana (Nashik)'}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-emerald-100 hover:text-white hover:bg-white/10 transition cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body Form */}
        <form onSubmit={handleSubmit} className="p-5 sm:p-6 space-y-4 text-xs sm:text-sm">
          <div>
            <label className="block font-bold text-stone-800 mb-1">
              {lang === 'mr' ? 'शेतकऱ्याचे नाव:' : 'Farmer Name:'} *
            </label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder={lang === 'mr' ? 'उदा. सचिन पाटील' : 'e.g. Ramesh Patil'}
              className="w-full bg-stone-50 border border-stone-300 rounded-xl px-3.5 py-2.5 font-medium focus:ring-2 focus:ring-emerald-600 focus:outline-none"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block font-bold text-stone-800 mb-1">
                {lang === 'mr' ? 'मोबाईल नंबर:' : 'Mobile Number:'} *
              </label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="उदा. 9604983818"
                className="w-full bg-stone-50 border border-stone-300 rounded-xl px-3.5 py-2.5 font-medium focus:ring-2 focus:ring-emerald-600 focus:outline-none"
              />
            </div>

            <div>
              <label className="block font-bold text-stone-800 mb-1">
                {lang === 'mr' ? 'गाव / तालुका:' : 'Village / Taluka:'} *
              </label>
              <input
                type="text"
                required
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                placeholder={lang === 'mr' ? 'उदा. सटाणा / मालेगाव' : 'e.g. Satana / Malegaon'}
                className="w-full bg-stone-50 border border-stone-300 rounded-xl px-3.5 py-2.5 font-medium focus:ring-2 focus:ring-emerald-600 focus:outline-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block font-bold text-stone-800 mb-1">
                {lang === 'mr' ? 'पिकाचे नाव:' : 'Crop:'} *
              </label>
              <select
                value={formData.crop}
                onChange={(e) => setFormData({ ...formData, crop: e.target.value })}
                className="w-full bg-stone-50 border border-stone-300 rounded-xl px-3 py-2.5 font-bold focus:ring-2 focus:ring-emerald-600 focus:outline-none"
              >
                <option value="टोमॅटो हायब्रीड">टोमॅटो (Tomato)</option>
                <option value="टरबूज / खरबूज">टरबूज (Watermelon)</option>
                <option value="पपई तैवान ७८६">पपई तैवान ७८६ (Papaya)</option>
                <option value="पत्ता कोबी (वीर ३३३/युरो २)">पत्ता कोबी (Cabbage)</option>
                <option value="मिरची हायब्रीड">मिरची (Chilli)</option>
                <option value="वांगी हायब्रीड">वांगी (Brinjal)</option>
                <option value="फुलकोबी">फुलकोबी (Cauliflower)</option>
                <option value="ढोबळी मिरची">ढोबळी मिरची (Capsicum)</option>
                <option value="झेंडू फुले">झेंडू (Marigold)</option>
              </select>
            </div>

            <div>
              <label className="block font-bold text-stone-800 mb-1">
                {lang === 'mr' ? 'रोपांची संख्या:' : 'Quantity:'} *
              </label>
              <input
                type="text"
                required
                value={formData.quantity}
                onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                placeholder="उदा. ५,०००"
                className="w-full bg-stone-50 border border-stone-300 rounded-xl px-3.5 py-2.5 font-medium focus:ring-2 focus:ring-emerald-600 focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block font-bold text-stone-800 mb-1">
              {lang === 'mr' ? 'अपेक्षित लागवड तारीख:' : 'Expected Planting Date:'}
            </label>
            <input
              type="date"
              value={formData.date}
              onChange={(e) => setFormData({ ...formData, date: e.target.value })}
              className="w-full bg-stone-50 border border-stone-300 rounded-xl px-3.5 py-2.5 font-medium focus:ring-2 focus:ring-emerald-600 focus:outline-none"
            />
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-black py-3 px-4 rounded-xl shadow-lg transition cursor-pointer text-sm"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>{lang === 'mr' ? 'व्हॉट्सॲपवर बुकिंग पाठवा' : 'Send Booking on WhatsApp'}</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </button>
          </div>
        </form>

        {/* Footer Direct Call */}
        <div className="p-4 bg-stone-50 border-t border-stone-200 text-center text-xs text-stone-600">
          <span>{lang === 'mr' ? 'किंवा थेट फोनवर बुकिंगसाठी कॉल करा:' : 'Or call directly for booking:'} </span>
          <a href={`tel:${contact.phone}`} className="font-bold text-emerald-800 hover:underline">
            {contact.phoneDisplay}
          </a>
        </div>
      </div>
    </div>
  );
}
