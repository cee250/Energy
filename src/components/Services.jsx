import React from 'react';
import { ArrowUpRight, BatteryCharging, CarFront, ChefHat, CookingPot, Sun } from 'lucide-react';

const serviceList = [
  { icon: Sun, title: 'Photovoltaic systems', description: 'Supply and installation of photovoltaic equipment for dependable, lower-carbon power generation.', image: '/images/solar-panels.jpg' },
  { icon: BatteryCharging, title: 'Energy storage', description: 'Storage solutions that help clients use energy when it is needed and strengthen operational continuity.', image: '/images/battery-storage.jpg' },
  { icon: CarFront, title: 'EV charging stations', description: 'Electric vehicle charging infrastructure planned around the needs of sites, fleets, and facilities.', image: '/images/solar-rooftop.jpg' },
  { icon: CookingPot, title: 'Clean cooking equipment', description: 'Supply and installation of cleaner cooking equipment for institutions and other operating environments.', image: '/images/water-pumping.jpg' },
  { icon: ChefHat, title: 'Smart kitchens', description: 'Smart kitchen installations for schools and corporate institutions, designed for practical day-to-day use.', image: '/images/solar-hero.jpg' }
];

export default function Services({ onOpenQuote }) {
  return (
    <section id="services" className="py-20 lg:py-28 bg-white border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl"><p className="eyebrow">Our services</p><h2 className="section-title">Energy infrastructure built around real operating needs.</h2></div>
          <p className="max-w-md text-slate-600 leading-relaxed">Our scope brings generation, storage, mobility, and institutional cooking solutions into one practical service offering.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {serviceList.map(({ icon: Icon, title, description, image }, index) => (
            <article key={title} className={`group overflow-hidden rounded-2xl border border-slate-200 bg-[#f7f8f5] ${index === 0 ? 'lg:col-span-2' : ''}`}>
              <div className="h-44 overflow-hidden"><img src={image} alt="" className="w-full h-full object-cover grayscale-[15%] group-hover:scale-105 transition-transform duration-500" /></div>
              <div className="p-6"><div className="flex items-start justify-between gap-4"><div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center"><Icon className="w-5 h-5" /></div><ArrowUpRight className="w-5 h-5 text-slate-400 group-hover:text-emerald-700 transition-colors" /></div><h3 className="text-xl font-semibold text-slate-950 mt-5">{title}</h3><p className="text-sm text-slate-600 leading-relaxed mt-2 max-w-lg">{description}</p><button onClick={onOpenQuote} className="mt-5 text-sm font-bold text-emerald-700 hover:text-emerald-900">Discuss this service →</button></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
