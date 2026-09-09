import React, { useState, useEffect, useRef } from 'react';
import { Sun, ShieldCheck, ArrowRight, Building2 } from 'lucide-react';

// Animated Count-Up Hook / Component
function AnimatedCounter({ endValue, suffix = '', prefix = '', duration = 2000 }) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const target = parseInt(endValue, 10);
          if (isNaN(target)) return;

          const startTime = performance.now();

          const animate = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            // Ease-out quad formula
            const easeOut = 1 - (1 - progress) * (1 - progress);
            const current = Math.floor(easeOut * target);

            setCount(current);

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setCount(target);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [endValue, duration, hasAnimated]);

  return (
    <span ref={ref}>
      {prefix}{count}{suffix}
    </span>
  );
}

export default function Hero({ onOpenQuote }) {
  const stats = [
    { target: 185, suffix: '+ MW', label: 'Installed Capacity' },
    { target: 420, suffix: '+', label: 'Commercial Deployments' },
    { target: 35, suffix: '%', label: 'Avg Utility Bill Cut' },
    { target: 25, suffix: ' Yrs', label: 'Panel Performance Warranty' }
  ];

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="py-16 md:py-20 bg-gradient-to-b from-emerald-50/40 via-white to-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider border border-emerald-200">
              <Sun className="w-3.5 h-3.5 text-emerald-600" />
              <span>Mashariki Energy • Clean Power Solutions</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Powering East Africa with <span className="text-emerald-600">Clean Solar Energy</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 max-w-xl font-normal leading-relaxed">
              <strong>Mashariki Energy</strong> delivers turnkey solar PV installations, Commercial & Industrial (C&I) microgrids, and solar water pumping systems across Rwanda and East Africa.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 pt-2">
              <button
                onClick={onOpenQuote}
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-base px-7 py-3.5 rounded-xl shadow-sm transition-colors"
              >
                <span>Get Free Solar Proposal</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => scrollTo('services')}
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-700 font-bold text-base px-6 py-3.5 rounded-xl border border-slate-200 shadow-sm transition-colors"
              >
                <span>Our Services</span>
              </button>
            </div>

            <div className="pt-4 border-t border-slate-200 grid grid-cols-2 gap-4 text-xs font-semibold text-slate-600">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Tier-1 Monocrystalline Equipment</span>
              </div>
              <div className="flex items-center gap-2">
                <Building2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Zero-CAPEX PPA Options</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Photo */}
          <div className="lg:col-span-6">
            <div className="bg-white p-3 rounded-2xl border border-slate-200 shadow-md space-y-3">
              <div className="aspect-[16/10] rounded-xl overflow-hidden relative shadow-sm">
                <img
                  src="https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=1200&q=80"
                  alt="Mashariki Energy Solar Installation"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-3 left-3 bg-slate-900/80 backdrop-blur-sm text-white px-3 py-1.5 rounded-lg text-xs font-medium flex items-center gap-2 border border-slate-700">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  <span>Commercial Solar PV Array • Mashariki Energy</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="p-3 bg-slate-50 rounded-lg border border-slate-100 text-center">
                  <span className="text-slate-500 block text-[11px]">System Reliability</span>
                  <span className="font-bold text-emerald-600 text-sm">99.92% Grid Uptime</span>
                </div>
                <div className="p-3 bg-slate-50 rounded-lg border border-slate-100 text-center">
                  <span className="text-slate-500 block text-[11px]">Est. Bill Cut</span>
                  <span className="font-bold text-slate-900 text-sm">Up to 85% Savings</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Animated Counting Stats Bar */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((s, idx) => (
            <div key={idx} className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm text-center">
              <p className="text-2xl sm:text-3xl font-extrabold text-emerald-600 font-mono">
                <AnimatedCounter endValue={s.target} suffix={s.suffix} duration={2000} />
              </p>
              <p className="text-xs font-semibold text-slate-600 mt-1">{s.label}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
