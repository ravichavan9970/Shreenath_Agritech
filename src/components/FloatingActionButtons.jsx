import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';

export default function FloatingActionButtons({ lang, contact }) {
  const waText = encodeURIComponent(
    lang === 'mr'
      ? 'नमस्कार श्रीनाथ ॲग्रीटेक, मला भाजीपाला रोपांचे दर व माहिती हवी आहे.'
      : 'Hello Shreenath Agritech, I would like to know seedling availability and rates.'
  );

  return (
    <>
      {/* Desktop Floating WhatsApp Button (Bottom Right) */}
      <div className="hidden sm:block fixed bottom-6 right-6 z-40">
        <a
          href={`https://wa.me/${contact.whatsapp}?text=${waText}`}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-black px-5 py-3.5 rounded-full shadow-2xl hover:scale-105 active:scale-95 transition-all"
          title="Chat on WhatsApp"
        >
          <MessageCircle className="w-6 h-6 fill-white" />
          <span className="text-sm font-black">
            {lang === 'mr' ? 'व्हॉट्सॲपवर बोला' : 'Chat on WhatsApp'}
          </span>
        </a>
      </div>

      {/* Mobile Sticky Bottom Bar (Fixed to bottom for easy 1-thumb touch) */}
      <div className="sm:hidden fixed bottom-0 inset-x-0 z-40 bg-white border-t-2 border-stone-200 p-2.5 shadow-2xl flex items-center justify-between gap-2.5">
        <a
          href={`tel:${contact.phone}`}
          className="flex-1 flex items-center justify-center gap-2 bg-stone-900 active:bg-stone-800 text-white py-3 px-3 rounded-xl font-black text-sm shadow-md"
        >
          <Phone className="w-4 h-4 text-amber-400" />
          <span>{lang === 'mr' ? 'कॉल करा' : 'Call'}</span>
        </a>

        <a
          href={`https://wa.me/${contact.whatsapp}?text=${waText}`}
          target="_blank"
          rel="noreferrer"
          className="flex-1 flex items-center justify-center gap-2 bg-emerald-600 active:bg-emerald-700 text-white py-3 px-3 rounded-xl font-black text-sm shadow-md"
        >
          <MessageCircle className="w-4 h-4 fill-white" />
          <span>{lang === 'mr' ? 'व्हॉट्सॲप' : 'WhatsApp'}</span>
        </a>
      </div>
    </>
  );
}
