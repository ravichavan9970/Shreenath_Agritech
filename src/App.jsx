import React, { useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
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

  // Smooth scroll progress tracking
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    restDelta: 0.001,
  });

  return (
    <div className="min-h-screen bg-stone-50 font-['Mukta',_'Plus_Jakarta_Sans',_sans-serif] text-stone-900 flex flex-col antialiased relative selection:bg-emerald-200 selection:text-emerald-950">
      {/* Dynamic Smooth Scroll Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-600 via-emerald-400 to-amber-400 z-50 origin-left pointer-events-none shadow-sm"
        style={{ scaleX }}
      />

      {/* Navigation Header */}
      <Navbar
        lang={lang}
        setLang={setLang}
        contact={siteData.contact}
      />

      {/* Main Content */}
      <main className="flex-grow">
        {/* Hero Section with Fluid Entry */}
        <Hero
          lang={lang}
          contact={siteData.contact}
        />

        {/* Major Seedling Varieties Cards with Staggered Scroll-In */}
        <VarietiesCatalog
          lang={lang}
          contact={siteData.contact}
          varieties={siteData.varieties}
        />

        {/* Super Simple Seedling Calculator with Animated Results */}
        <PlantCalculator
          lang={lang}
          contact={siteData.contact}
        />

        {/* 3 Core Strengths / Nursery Advantages with Scroll-Reveal */}
        <NurseryTech
          lang={lang}
        />

        {/* Real Nursery Photos with Zoom Hover & Lightbox */}
        <Gallery
          lang={lang}
          images={siteData.galleryImages}
        />
      </main>

      {/* Contact & Address with Google Maps */}
      <ContactSection
        lang={lang}
        contact={siteData.contact}
      />

      {/* Mobile Sticky Bottom Action Bar (Call & WhatsApp) */}
      <FloatingActionButtons
        lang={lang}
        contact={siteData.contact}
      />
    </div>
  );
}
