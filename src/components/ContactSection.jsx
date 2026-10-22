import React from 'react';
import { MapPin, Phone, MessageCircle, Clock, Navigation, Sprout } from 'lucide-react';

export default function ContactSection({ lang, contact }) {
  return (
    <footer id="contact" className="bg-stone-900 text-stone-200 pt-8 pb-16 sm:pt-16 sm:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-8 items-start pb-8 border-b border-stone-800">
          {/* Left: Contact Info (Col 7) */}
          <div className="lg:col-span-6 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl overflow-hidden bg-stone-950 shadow-md border border-stone-700 shrink-0 p-0.5 flex items-center justify-center">
                <img
                  src={contact.logo || "/images/logo.jpg"}
                  alt="श्रीनाथ ॲग्रीटेक लोगो"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-black text-white">
                  {lang === 'mr' ? 'श्रीनाथ ॲग्रीटेक' : 'Shrinath Agritech'}
                </h3>
                <p className="text-xs font-bold text-emerald-400">
                  {lang === 'mr' ? 'होलसेल भाजीपाला रोप नर्सरी' : 'Wholesale Vegetable Seedling Nursery'}
                </p>
              </div>
            </div>

            <div className="space-y-3.5 text-sm sm:text-base">
              {/* Phone */}
              <div className="flex items-start gap-3 bg-stone-800/80 p-3.5 sm:p-4 rounded-2xl border border-stone-700">
                <Phone className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs text-stone-400 block font-bold">
                    {lang === 'mr' ? 'थेट फोन करा किंवा व्हॉट्सॲप करा:' : 'Call or WhatsApp:'}
                  </span>
                  <a
                    href={`tel:${contact.phone}`}
                    className="text-xl sm:text-2xl font-black text-amber-300 hover:underline block mt-0.5"
                  >
                    {contact.phoneDisplay}
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-3 bg-stone-800/80 p-3.5 sm:p-4 rounded-2xl border border-stone-700">
                <MapPin className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs text-stone-400 block font-bold">
                    {lang === 'mr' ? 'नर्सरी पत्ता:' : 'Nursery Address:'}
                  </span>
                  <p className="font-bold text-white mt-0.5 leading-snug">
                    {contact.address[lang]}
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-stone-400 px-1">
                <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{contact.workingHours[lang]}</span>
              </div>
            </div>

            {/* Quick Action Buttons (50-50 Equal Grid) */}
            <div className="grid grid-cols-2 gap-2.5 pt-1">
              <a
                href={`https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(
                  lang === 'mr'
                    ? 'नमस्कार श्रीनाथ ॲग्रीटेक, मला भाजीपाला रोपांची चौकशी करायची आहे.'
                    : 'Hello Shrinath Agritech, I want to inquire about vegetable seedlings.'
                )}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-1.5 sm:gap-2 bg-emerald-600 hover:bg-emerald-700 active:scale-95 text-white font-black py-3 px-2 sm:px-3 rounded-xl text-xs sm:text-sm transition shadow-md text-center"
              >
                <MessageCircle className="w-4 h-4 fill-white shrink-0" />
                <span>{lang === 'mr' ? 'व्हॉट्सॲप' : 'WhatsApp'}</span>
              </a>

              <a
                href={`tel:${contact.phone}`}
                className="flex items-center justify-center gap-1.5 sm:gap-2 bg-amber-400 hover:bg-amber-300 active:scale-95 text-stone-950 font-black py-3 px-2 sm:px-3 rounded-xl text-xs sm:text-sm transition shadow-md text-center"
              >
                <Phone className="w-4 h-4 shrink-0" />
                <span>{lang === 'mr' ? 'थेट फोन लावा' : 'Call Directly'}</span>
              </a>
            </div>
          </div>

          {/* Right: Embedded Interactive Map */}
          <div className="lg:col-span-6 flex flex-col gap-2.5">
            <div className="h-56 sm:h-80 rounded-2xl overflow-hidden border-2 border-stone-700 shadow-lg bg-stone-800">
              <iframe
                src={contact.googleMapsEmbed}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Shrinath Agritech Nursery Satana Kalwan Road"
              ></iframe>
            </div>

            {/* Single Clear Map Action Button */}
            <a
              href={contact.googleMapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 active:scale-98 text-white py-3 px-4 rounded-xl font-bold text-sm sm:text-base transition shadow-md cursor-pointer border border-emerald-500"
            >
              <Navigation className="w-4 h-4 sm:w-5 sm:h-5 fill-white" />
              <span>{lang === 'mr' ? '📍 थेट लोकेशन व रस्ता पहा' : '📍 Open Location & Directions'}</span>
            </a>
          </div>
        </div>

        {/* Footer Bottom (Compact - No Empty Space) */}
        <div className="pt-4 text-center text-xs text-stone-500 font-semibold">
          <p>© {new Date().getFullYear()} श्रीनाथ ॲग्रीटेक (Shrinath Agritech) • सटाणा-कळवण रोड, मल्हारवाडी, मुंजवाड, ता. सटाणा, जि. नाशिक - ४२३३०१.</p>
          <p className="mt-0.5 text-emerald-600 font-bold">शेतकऱ्यांच्या सेवेत तत्पर!</p>
        </div>
      </div>
    </footer>
  );
}
