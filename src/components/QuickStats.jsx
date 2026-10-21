import React from 'react';
import { Users, Sprout, Award, MapPin, Truck, CheckCircle } from 'lucide-react';

export default function QuickStats({ lang }) {
  const stats = [
    {
      icon: Users,
      value: '१०,०००+',
      valueEn: '10,000+',
      label: { mr: 'समाधानी शेतकरी', en: 'Satisfied Farmers' },
      desc: { mr: 'नाशिक, धुळे, जळगाव व संपूर्ण महाराष्ट्र', en: 'Across Nashik, Dhule, Jalgaon & Maharashtra' }
    },
    {
      icon: Sprout,
      value: '५० लाख+',
      valueEn: '5 Million+',
      label: { mr: 'निरोगी रोपांची निर्मिती', en: 'Vigorous Seedlings Raised' },
      desc: { mr: 'दरवर्षी उच्च दर्जाचे दर्जेदार उत्पादन', en: 'Annually produced under expert supervision' }
    },
    {
      icon: Award,
      value: '९९%',
      valueEn: '99%',
      label: { mr: 'उगवण व जगण्याचे प्रमाण', en: 'Field Survival Rate' },
      desc: { mr: 'हार्डनिंगमुळे रोपे शेतात मरत नाहीत', en: 'Transplant shock-resistant root systems' }
    },
    {
      icon: Truck,
      value: '२४-४८ तास',
      valueEn: '24-48 Hours',
      label: { mr: 'शेतावर थेट डिलिव्हरी', en: 'Direct Farm Gate Delivery' },
      desc: { mr: 'सुरक्षित विशेष वाहनांद्वारे वाहतूक', en: 'Shock-proof tray transport vehicles' }
    }
  ];

  return (
    <section className="bg-emerald-900 text-white py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#15803d_1px,transparent_1px)] [background-size:16px_16px] opacity-20"></div>

      <div className="max-w-7xl mx-auto relative">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="bg-emerald-800/60 border border-emerald-700/60 rounded-2xl p-5 hover:bg-emerald-800 transition duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-300 flex items-center justify-center mb-3">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-amber-300 tracking-tight">
                  {lang === 'mr' ? stat.value : stat.valueEn}
                </div>
                <div className="text-base sm:text-lg font-bold text-white mt-1">
                  {stat.label[lang]}
                </div>
                <div className="text-xs text-emerald-200/80 mt-1 font-normal leading-relaxed">
                  {stat.desc[lang]}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
