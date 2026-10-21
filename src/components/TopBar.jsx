import React from 'react';
import { Phone, MapPin, Globe, Sparkles } from 'lucide-react';

export default function TopBar({ lang, setLang, contact }) {
  return (
    <div className="bg-emerald-900 text-white text-xs sm:text-sm py-2 px-4 border-b border-emerald-800">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
        {/* Left: Simple announcement */}
        <div className="flex items-center gap-2 font-medium">
          <span className="bg-amber-400 text-stone-950 font-black px-2 py-0.5 rounded-full text-xs animate-pulse">
            {lang === 'mr' ? 'बुकिंग सुरू!' : 'Bookings Open!'}
          </span>
          <span className="font-semibold hidden sm:inline">
            {lang === 'mr'
              ? 'भाजीपाला रोपांचे आगाऊ बुकिंग सुरू आहे • सटाणा-कळवण रोड (नाशिक)'
              : 'Advance vegetable seedling bookings open • Satana-Kalwan Rd (Nashik)'}
          </span>
          <span className="font-semibold sm:hidden">
            {lang === 'mr' ? 'रोपांचे बुकिंग सुरू आहे' : 'Bookings open'}
          </span>
        </div>

        {/* Right: Location, Phone & Simple Language Button */}
        <div className="flex items-center gap-3 sm:gap-4">
          <a
            href={contact.googleMapsLink || "https://goo.gl/maps/uourzdP5nz3txvgu7?g_st=aw"}
            target="_blank"
            rel="noreferrer"
            className="hidden md:flex items-center gap-1 text-emerald-200 hover:text-white font-semibold text-xs transition"
          >
            <MapPin className="w-3.5 h-3.5 text-amber-400" />
            <span>{lang === 'mr' ? 'सटाणा-कळवण रोड, सटाणा' : 'Satana-Kalwan Rd, Satana'}</span>
          </a>

          <a
            href={`tel:${contact.phone}`}
            className="flex items-center gap-1.5 font-bold hover:text-amber-300 transition text-xs sm:text-sm"
          >
            <Phone className="w-3.5 h-3.5 text-amber-400" />
            <span>{contact.phoneDisplay}</span>
          </a>

          {/* Simple Language Switcher */}
          <button
            onClick={() => setLang(lang === 'mr' ? 'en' : 'mr')}
            className="flex items-center gap-1 bg-emerald-800 hover:bg-emerald-700 text-white px-2.5 py-1 rounded-lg text-xs font-bold transition border border-emerald-700 cursor-pointer"
            title="भाषा बदला / Change Language"
          >
            <Globe className="w-3.5 h-3.5 text-emerald-300" />
            <span>{lang === 'mr' ? 'English' : 'मराठी'}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
