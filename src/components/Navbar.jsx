import React, { useState } from 'react';
import { Phone, MessageCircle, Menu, X, Sprout } from 'lucide-react';

export default function Navbar({ lang, contact, onOpenBookingModal }) {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: '#varieties', label: { mr: 'आमची रोपे', en: 'Our Seedlings' } },
    { href: '#calculator', label: { mr: 'रोप गणकयंत्र', en: 'Seedling Calculator' } },
    { href: '#tech', label: { mr: 'नर्सरीचे फायदे', en: 'Why Choose Us' } },
    { href: '#gallery', label: { mr: 'नर्सरी फोटो', en: 'Photos' } },
    { href: '#contact', label: { mr: 'पत्ता व संपर्क', en: 'Contact' } },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/98 backdrop-blur-md border-b border-stone-200 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 sm:h-20">
          {/* Brand Name (without mono; active call button icon) */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            <a
              href={`tel:${contact.phone}`}
              className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-emerald-700 hover:bg-emerald-600 text-white flex items-center justify-center shadow-md shadow-emerald-800/20 border border-emerald-600 shrink-0 transition active:scale-95 cursor-pointer"
              title={lang === 'mr' ? 'थेट कॉल करा: ' + contact.phoneDisplay : 'Call Directly: ' + contact.phoneDisplay}
            >
              <Phone className="w-5 h-5 text-amber-300" />
            </a>
            <a href="#" className="group flex flex-col">
              <div className="flex items-baseline gap-1">
                <span className="text-xl sm:text-2xl font-black text-stone-900 tracking-tight group-hover:text-emerald-800 transition">
                  {lang === 'mr' ? 'श्रीनाथ ॲग्रीटेक' : 'Shrinath Agritech'}
                </span>
              </div>
              <p className="text-xs sm:text-xs font-bold text-emerald-800">
                {lang === 'mr' ? 'होलसेल भाजीपाला रोप नर्सरी • सटाणा (नाशिक)' : 'Wholesale Vegetable Seedling Nursery • Satana'}
              </p>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-bold text-stone-700">
            {navLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                className="hover:text-emerald-700 transition py-1"
              >
                {link.label[lang]}
              </a>
            ))}
          </nav>

          {/* Desktop Direct Call & WhatsApp Buttons */}
          <div className="hidden sm:flex items-center gap-2.5">
            <a
              href={`tel:${contact.phone}`}
              className="flex items-center gap-1.5 bg-stone-100 hover:bg-stone-200 text-stone-900 px-3.5 py-2.5 rounded-xl font-bold text-sm border border-stone-300 transition"
            >
              <Phone className="w-4 h-4 text-emerald-600" />
              <span>{contact.phoneDisplay}</span>
            </a>

            <a
              href={`https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(
                lang === 'mr'
                  ? 'नमस्कार श्रीनाथ ॲग्रीटेक, मला भाजीपाला रोपांची चौकशी करायची आहे.'
                  : 'Hello Shrinath Agritech, I want to inquire about vegetable seedlings.'
              )}`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2.5 rounded-xl font-bold text-sm shadow-md transition"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>{lang === 'mr' ? 'व्हॉट्सॲप' : 'WhatsApp'}</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href={`tel:${contact.phone}`}
              className="sm:hidden p-2 rounded-xl bg-stone-100 text-stone-900 border border-stone-300"
              title="Call"
            >
              <Phone className="w-5 h-5 text-emerald-700" />
            </a>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl text-stone-700 hover:bg-emerald-50 transition cursor-pointer"
              aria-label="Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden bg-white border-b border-stone-200 px-4 pt-3 pb-6 shadow-xl">
          <div className="flex flex-col space-y-2.5 font-bold text-stone-800 text-base">
            {navLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="px-3 py-2.5 rounded-xl hover:bg-emerald-50 hover:text-emerald-800 transition"
              >
                {link.label[lang]}
              </a>
            ))}

            <div className="pt-3 border-t border-stone-200 flex flex-col gap-2.5">
              <a
                href={`https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(
                  lang === 'mr'
                    ? 'नमस्कार श्रीनाथ ॲग्रीटेक, मला रोपांची चौकशी करायची आहे.'
                    : 'Hello Shrinath Agritech, I want to inquire about seedlings.'
                )}`}
                target="_blank"
                rel="noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-emerald-600 text-white py-3.5 rounded-xl font-bold text-base shadow-sm"
              >
                <MessageCircle className="w-5 h-5 fill-white" />
                <span>{lang === 'mr' ? 'व्हॉट्सॲपवर बोला' : 'Chat on WhatsApp'}</span>
              </a>

              <a
                href={`tel:${contact.phone}`}
                className="w-full flex items-center justify-center gap-2 bg-stone-900 text-white py-3.5 rounded-xl font-bold text-base shadow-sm"
              >
                <Phone className="w-5 h-5 text-emerald-400" />
                <span>{contact.phoneDisplay}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
