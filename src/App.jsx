import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import VarietiesCatalog from './components/VarietiesCatalog';
import PlantCalculator from './components/PlantCalculator';
import NurseryTech from './components/NurseryTech';
import Gallery from './components/Gallery';
import ContactSection from './components/ContactSection';
import FloatingActionButtons from './components/FloatingActionButtons';
import { siteData } from './data/content';

export default function App() {
  const [lang, setLang] = useState('mr'); // Marathi by default, with English option

  return (
    <div className="min-h-screen bg-stone-50 font-['Mukta',_'Plus_Jakarta_Sans',_sans-serif] text-stone-900 flex flex-col antialiased">
      {/* Navigation Header */}
      <Navbar
        lang={lang}
        setLang={setLang}
        contact={siteData.contact}
      />

      {/* 3. Main Content */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero
          lang={lang}
          contact={siteData.contact}
        />

        {/* Major Seedling Varieties Cards */}
        <VarietiesCatalog
          lang={lang}
          contact={siteData.contact}
          varieties={siteData.varieties}
        />

        {/* Super Simple Seedling Calculator */}
        <PlantCalculator
          lang={lang}
          contact={siteData.contact}
        />

        {/* 3 Core Strengths / Nursery Advantages */}
        <NurseryTech
          lang={lang}
        />

        {/* Real Nursery Photos */}
        <Gallery
          lang={lang}
          images={siteData.galleryImages}
        />
      </main>

      {/* 4. Contact & Address with Google Maps */}
      <ContactSection
        lang={lang}
        contact={siteData.contact}
      />

      {/* 5. Mobile Sticky Bottom Action Bar (Call & WhatsApp) */}
      <FloatingActionButtons
        lang={lang}
        contact={siteData.contact}
      />
    </div>
  );
}
