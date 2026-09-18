import React from 'react';
import { Check, Compass, FlaskConical, Handshake, Settings2, WalletCards } from 'lucide-react';

const talents = [
  ['Market development', Compass],
  ['Scientific research strength', FlaskConical],
  ['Professional operation and maintenance', Settings2],
  ['Industrial resources', Handshake],
  ['Strong capital', WalletCards]
];

export default function AboutUs() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-[#f7f8f5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          <div className="lg:col-span-5"><p className="eyebrow">About Mashariki Energy</p><h2 className="section-title">A capable partner for long-term energy projects.</h2><p className="mt-6 text-slate-600 leading-relaxed">Mashariki Energy Ltd brings together market understanding, technical capability, operational discipline, and industrial resources to help clients move from energy requirements to dependable infrastructure.</p><div className="mt-8 p-5 rounded-2xl bg-[#173f2b] text-white"><p className="text-sm text-white/70">Our approach</p><p className="mt-2 text-lg font-medium leading-relaxed">Plan carefully. Install responsibly. Support the system for the long term.</p></div></div>
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-5">
            <div className="sm:col-span-2"><h3 className="text-xl font-semibold text-slate-950">Strengths and advantages</h3><div className="grid sm:grid-cols-2 gap-3 mt-5">{['Smart power station monitoring system','Shared operation and maintenance center','Customized power station insurance support for long-term stability','Post-evaluation support and spare-parts management'].map((item) => <div key={item} className="flex gap-3 p-4 rounded-xl bg-white border border-slate-200"><Check className="w-5 h-5 text-emerald-700 shrink-0" /><span className="text-sm text-slate-700 leading-relaxed">{item}</span></div>)}</div></div>
            <div className="sm:col-span-2 pt-4"><h3 className="text-xl font-semibold text-slate-950">Team talent</h3><div className="mt-5 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">{talents.map(([label, Icon]) => <div key={label} className="flex items-center gap-3 p-4 rounded-xl border border-slate-200 bg-white"><Icon className="w-5 h-5 text-emerald-700 shrink-0" /><span className="text-sm font-medium text-slate-700">{label}</span></div>)}</div></div>
          </div>
        </div>
      </div>
    </section>
  );
}
