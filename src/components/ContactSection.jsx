import React from 'react';
import { MapPin, Phone, MessageCircle, Clock, Navigation, Sprout } from 'lucide-react';

export default function ContactSection({ lang, contact }) {
  return (
    <footer id="contact" className="bg-stone-900 text-stone-200 pt-12 pb-24 sm:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-8 items-start pb-10 border-b border-stone-800">
          {/* Left: Contact Info (Col 7) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 rounded-2xl overflow-hidden bg-stone-950 shadow-md border border-stone-700 shrink-0 p-0.5 flex items-center justify-center">
                <img
                  src={contact.logo || "/images/logo.jpg"}
                  alt="श्रीनाथ ॲग्रीटेक लोगो"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
              <div>
                <h3 className="text-2xl font-black text-white">
                  {lang === 'mr' ? 'श्रीनाथ ॲग्रीटेक' : 'Shreenath Agritech'}
                </h3>
                <p className="text-xs font-bold text-emerald-400">
                  {lang === 'mr' ? 'होलसेल भाजीपाला रोप नर्सरी' : 'Wholesale Vegetable Seedling Nursery'}
                </p>
              </div>
            </div>

            <div className="space-y-4 text-sm sm:text-base">
              {/* Phone */}
              <div className="flex items-start gap-3 bg-stone-800/80 p-4 rounded-2xl border border-stone-700">
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
              <div className="flex items-start gap-3 bg-stone-800/80 p-4 rounded-2xl border border-stone-700">
                <MapPin className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs text-stone-400 block font-bold">
                    {lang === 'mr' ? 'नर्सरी पत्ता:' : 'Nursery Address:'}
                  </span>
                  <p className="font-bold text-white mt-0.5 leading-snug">
                    {contact.address[lang]}
                  </p>
                  <a
                    href={contact.googleMapsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-300 hover:text-amber-200 mt-2.5 bg-stone-700/80 hover:bg-stone-700 px-3 py-1.5 rounded-lg border border-stone-600 transition cursor-pointer"
                  >
                    <Navigation className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>{lang === 'mr' ? '📍 गुगल मॅप्सवर थेट लोकेशन पहा' : '📍 Open in Google Maps'}</span>
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-center gap-3 text-xs sm:text-sm text-stone-400 px-2">
                <Clock className="w-4 h-4 text-emerald-400" />
                <span>{contact.workingHours[lang]}</span>
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href={`https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(
                  lang === 'mr'
                    ? 'नमस्कार श्रीनाथ ॲग्रीटेक, मला भाजीपाला रोपांची चौकशी करायची आहे.'
                    : 'Hello Shreenath Agritech, I want to inquire about vegetable seedlings.'
                )}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-black px-5 py-3 rounded-xl text-sm transition"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>{lang === 'mr' ? 'व्हॉट्सॲपवर मेसेज करा' : 'Message on WhatsApp'}</span>
              </a>

              <a
                href={`tel:${contact.phone}`}
                className="flex items-center gap-2 bg-amber-400 hover:bg-amber-300 text-stone-950 font-black px-5 py-3 rounded-xl text-sm transition"
              >
                <Phone className="w-4 h-4" />
                <span>{lang === 'mr' ? 'थेट फोन लावा' : 'Call Directly'}</span>
              </a>
            </div>
          </div>

          {/* Right: Embedded Interactive Map */}
          <div className="lg:col-span-6 flex flex-col gap-3">
            <div className="relative h-64 sm:h-80 rounded-2xl overflow-hidden border-2 border-stone-700 shadow-lg bg-stone-800">
              <iframe
                src={contact.googleMapsEmbed}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Shreenath Agritech Nursery Satana Kalwan Road"
              ></iframe>
              <div className="absolute top-2.5 left-2.5 bg-stone-900/90 backdrop-blur-xs text-white text-[11px] sm:text-xs font-bold px-2.5 py-1 rounded-lg border border-stone-700 flex items-center gap-1.5 shadow-md pointer-events-none">
                <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>श्रीनाथ ॲग्रीटेक, मुंजवाड (सटाणा)</span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              <a
                href={contact.googleMapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white border border-emerald-500 p-3 rounded-xl font-bold text-xs sm:text-sm transition shadow-sm cursor-pointer"
              >
                <Navigation className="w-4 h-4" />
                <span>{lang === 'mr' ? '📍 थेट गुगल मॅप्स उघडा' : '📍 Open in Google Maps'}</span>
              </a>

              <a
                href={contact.googleMapsDirections || contact.googleMapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-stone-800 hover:bg-stone-700 text-amber-300 border border-stone-700 p-3 rounded-xl font-bold text-xs sm:text-sm transition cursor-pointer"
              >
                <MapPin className="w-4 h-4 text-amber-400" />
                <span>{lang === 'mr' ? '🚗 रस्ता व दिशा (Directions)' : '🚗 Get Directions'}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-6 text-center text-xs text-stone-500 font-semibold">
          <p>© {new Date().getFullYear()} श्रीनाथ ॲग्रीटेक (Shreenath Agritech) • सटाणा-कळवण रोड, मल्हारवाडी, मुंजवाड, ता. सटाणा, जि. नाशिक - ४२३३०१.</p>
          <p className="mt-1 text-emerald-600 font-bold">शेतकऱ्यांच्या सेवेत तत्पर!</p>
        </div>
      </div>
    </footer>
  );
}
