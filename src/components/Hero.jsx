import React, { useState, useEffect, useRef } from 'react';
import { Sun, ShieldCheck, ArrowRight, Building2, CheckCircle2, Award, Zap } from 'lucide-react';

// Animated Count-Up Component
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
    { target: 185, suffix: '+ MW', label: 'Installed Capacity', sub: 'Across 420+ Sites' },
    { target: 420, suffix: '+', label: 'Commercial Projects', sub: 'C&I & Industrial' },
    { target: 35, suffix: '%', label: 'Avg Utility Bill Cut', sub: 'Guaranteed Savings' },
    { target: 25, suffix: ' Yrs', label: 'Panel Performance', sub: 'Tier-1 BNEF Rated' }
  ];

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative bg-slate-900 text-white overflow-hidden pb-16">
      
      {/* Background Image Layer with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=1600&q=80"
          alt="Mashariki Solar Field Background"
          className="w-full h-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/90 to-slate-950/95" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-16 md:pt-24 pb-20">
        
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Energia Pre-title */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-500/20 text-emerald-400 text-xs font-extrabold uppercase tracking-widest border border-emerald-500/30">
              <Sun className="w-3.5 h-3.5 text-emerald-400" />
              <span>// MASHARIKI ENERGY • EAST AFRICA</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
              Innovative <span className="text-emerald-400">Solar Energy</span> & Commercial Power Infrastructure
            </h1>

            <p className="text-base sm:text-lg text-slate-300 max-w-xl font-normal leading-relaxed">
              <strong>Mashariki Energy</strong> delivers end-to-end solar panel installations, Commercial & Industrial (C&I) microgrids, and agricultural water pumping systems across Rwanda and East Africa.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={onOpenQuote}
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-base px-8 py-4 rounded-xl shadow-lg shadow-emerald-600/25 transition-all hover:scale-105"
              >
                <span>Get Free Solar Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => scrollTo('services')}
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-slate-800/80 hover:bg-slate-700 text-white font-bold text-base px-7 py-4 rounded-xl border border-slate-700 backdrop-blur-sm transition-all"
              >
                <span>Explore Services</span>
              </button>
            </div>

            <div className="pt-4 border-t border-slate-800/80 grid grid-cols-2 gap-4 text-xs font-semibold text-slate-300">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Tier-1 Monocrystalline Modules</span>
              </div>
              <div className="flex items-center gap-2">
                <Building2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Zero-CAPEX PPA Options</span>
              </div>
            </div>

          </div>

          {/* Right Hero Feature Card */}
          <div className="lg:col-span-5">
            <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 shadow-2xl backdrop-blur-md space-y-3">
              <div className="aspect-[16/10] rounded-xl overflow-hidden relative shadow-sm">
                <img
                  src="https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=1200&q=80"
                  alt="Mashariki Commercial Solar Installation"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-3 left-3 bg-slate-950/90 backdrop-blur-sm text-white px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-2 border border-slate-800">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  <span>Commercial Solar PV Array</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="p-3 bg-slate-950/80 rounded-xl border border-slate-800 text-center">
                  <span className="text-slate-400 block text-[11px]">System Reliability</span>
                  <span className="font-bold text-emerald-400 text-sm">99.92% Grid Uptime</span>
                </div>
                <div className="p-3 bg-slate-950/80 rounded-xl border border-slate-800 text-center">
                  <span className="text-slate-400 block text-[11px]">Est. Bill Cut</span>
                  <span className="font-bold text-white text-sm">Up to 85% Savings</span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* Energia Signature Overlapping Stats Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 -mt-10">
        <div className="bg-white rounded-2xl border border-slate-200 shadow-xl p-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-slate-900">
          {stats.map((s, idx) => (
            <div key={idx} className="space-y-1 border-r border-slate-100 last:border-r-0 px-2">
              <p className="text-3xl font-extrabold text-emerald-600 font-mono">
                <AnimatedCounter endValue={s.target} suffix={s.suffix} duration={2000} />
              </p>
              <p className="text-xs font-bold text-slate-900">{s.label}</p>
              <p className="text-[11px] text-slate-500">{s.sub}</p>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
