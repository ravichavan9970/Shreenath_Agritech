import React, { useState } from 'react';
import { Phone, MessageCircle, Menu, X, Sprout, Globe } from 'lucide-react';

export default function Navbar({ lang, setLang, contact, onOpenBookingModal }) {
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
        <div className="flex items-center justify-between py-2.5 sm:py-3.5 min-h-[60px] sm:min-h-[76px]">
          {/* Logo & Name */}
          <a href="#" className="flex items-center gap-2 sm:gap-3 min-w-0 max-w-[70%] sm:max-w-none">
            <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl overflow-hidden bg-stone-950 shadow-sm border border-stone-200 shrink-0 flex items-center justify-center p-0.5">
              <img
                src={contact.logo || "/images/logo.jpg"}
                alt="श्रीनाथ ॲग्रीटेक लोगो"
                className="w-full h-full object-cover rounded-lg sm:rounded-xl"
              />
            </div>
            <div className="min-w-0">
              <div className="flex items-baseline">
                <span className="text-base sm:text-2xl font-black text-stone-900 tracking-tight leading-snug truncate">
                  {lang === 'mr' ? 'श्रीनाथ ॲग्रीटेक' : 'Shrinath Agritech'}
                </span>
              </div>
              <p className="text-[10px] sm:text-xs font-bold text-emerald-800 leading-tight truncate">
                <span className="sm:hidden">{lang === 'mr' ? 'रोप नर्सरी • सटाणा' : 'Vegetable Nursery • Satana'}</span>
                <span className="hidden sm:inline">{lang === 'mr' ? 'होलसेल भाजीपाला रोप नर्सरी • सटाणा (नाशिक)' : 'Wholesale Vegetable Seedling Nursery • Satana'}</span>
              </p>
            </div>
          </a>

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

          {/* Desktop Direct Call & WhatsApp Buttons + Language Switcher */}
          <div className="hidden sm:flex items-center gap-2.5">
            {setLang && (
              <button
                onClick={() => setLang(lang === 'mr' ? 'en' : 'mr')}
                className="flex items-center gap-1.5 bg-stone-100 hover:bg-stone-200 text-stone-800 px-3.5 py-2.5 rounded-xl text-xs font-bold transition border border-stone-300 cursor-pointer shadow-2xs"
                title="भाषा बदला / Change Language"
              >
                <Globe className="w-4 h-4 text-emerald-700" />
                <span>{lang === 'mr' ? 'English' : 'मराठी'}</span>
              </button>
            )}

            <a
              href={`tel:${contact.phone}`}
              className="flex items-center gap-1.5 bg-stone-100 hover:bg-stone-200 text-stone-900 px-4 py-2.5 rounded-xl font-bold text-sm border border-stone-300 transition cursor-pointer shadow-2xs"
              title={lang === 'mr' ? `कॉल करा: ${contact.phoneDisplay}` : `Call: ${contact.phoneDisplay}`}
            >
              <Phone className="w-4 h-4 text-emerald-600" />
              <span>{lang === 'mr' ? 'थेट कॉल करा' : 'Call Us'}</span>
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

          {/* Mobile Right: Lang + Menu Button */}
          <div className="flex lg:hidden items-center gap-1.5 sm:gap-2 shrink-0">
            {setLang && (
              <button
                onClick={() => setLang(lang === 'mr' ? 'en' : 'mr')}
                className="flex items-center gap-1 bg-stone-100 hover:bg-stone-200 text-stone-800 px-2 py-1.5 rounded-lg text-xs font-bold border border-stone-300 cursor-pointer"
                title="भाषा बदला / Change Language"
              >
                <Globe className="w-3.5 h-3.5 text-emerald-700" />
                <span>{lang === 'mr' ? 'EN' : 'मराठी'}</span>
              </button>
            )}

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-1.5 sm:p-2 rounded-xl text-stone-700 hover:bg-emerald-50 transition cursor-pointer"
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
                <span>{lang === 'mr' ? 'थेट कॉल करा' : 'Call Directly'}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
