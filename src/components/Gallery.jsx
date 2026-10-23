import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, X } from 'lucide-react';

export default function Gallery({ lang, images }) {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  // Pick the best 8 representative authentic photos from the nursery
  const displayPhotos = images.slice(0, 8);

  return (
    <section id="gallery" className="py-12 sm:py-16 bg-stone-50 border-b border-stone-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Smooth Scroll Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-3xl mx-auto mb-8 sm:mb-10"
        >
          <div className="inline-block bg-emerald-100 text-emerald-900 border border-emerald-300 text-xs sm:text-sm font-black px-3.5 py-1 rounded-full mb-2">
            <Camera className="w-4 h-4 inline mr-1 text-emerald-700" />
            <span>{lang === 'mr' ? 'नर्सरीचे खरे फोटो' : 'Real Nursery Photos'}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-stone-900 tracking-tight">
            {lang === 'mr' ? 'आमची रोपे व हायटेक पॉलीहाऊस' : 'Our Seedlings & Greenhouse Facility'}
          </h2>
          <p className="text-stone-600 mt-2 text-sm sm:text-base font-medium">
            {lang === 'mr'
              ? 'सटाणा-कळवण रोड येथील नर्सरीमधील रोपे, पांढरी मुळे आणि सुरक्षित वाहनांचे फोटो.'
              : 'Authentic pictures of seedling trays, strong white root balls and dispatch.'}
          </p>
        </motion.div>

        {/* 8 Photo Grid with Staggered Scroll-In */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
          {displayPhotos.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.5,
                delay: (idx % 4) * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ scale: 1.03, y: -4, transition: { duration: 0.2 } }}
              onClick={() => setSelectedPhoto(img)}
              className="group relative rounded-2xl overflow-hidden aspect-[4/3] bg-stone-200 border border-stone-300 shadow-2xs hover:shadow-lg transition-all cursor-pointer"
            >
              <img
                src={img.src}
                alt={img.caption[lang]}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-108"
                loading="lazy"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-stone-950/80 via-stone-950/40 to-transparent p-2 sm:p-2.5 text-white">
                <p className="text-[11px] sm:text-xs font-bold truncate">
                  {img.caption[lang]}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Animated Image Lightbox */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setSelectedPhoto(null)}
            className="fixed inset-0 z-50 bg-stone-950/90 backdrop-blur-sm flex items-center justify-center p-4 cursor-pointer"
          >
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-4 right-4 text-white bg-stone-800 hover:bg-stone-700 p-2.5 rounded-full cursor-pointer transition shadow-lg"
            >
              <X className="w-6 h-6" />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="max-w-3xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedPhoto.src}
                alt={selectedPhoto.caption[lang]}
                className="w-full max-h-[80vh] object-contain rounded-2xl shadow-2xl border border-stone-800"
              />
              <p className="text-white text-center font-bold text-base mt-3">
                {selectedPhoto.caption[lang]}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
