import React from 'react';
import { Activity, ClipboardCheck, Headphones, ShieldCheck } from 'lucide-react';

const strengths = [
  { icon: Activity, title: 'Smart monitoring', desc: 'Visibility into power-station performance to support informed decisions.' },
  { icon: Headphones, title: 'Shared O&M center', desc: 'A coordinated operation and maintenance approach for continuity after installation.' },
  { icon: ShieldCheck, title: 'Stability support', desc: 'Customized insurance support designed around long-term project stability.' },
  { icon: ClipboardCheck, title: 'Aftercare that continues', desc: 'Post-evaluation support and spare-parts management help protect the investment.' }
];

export default function WhyChooseUs() {
  return <section id="why-us" className="py-20 lg:py-24 bg-[#173f2b] text-white"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div className="max-w-2xl mb-12"><p className="eyebrow eyebrow-dark">Why Mashariki Energy</p><h2 className="section-title text-white">The work does not stop when installation is complete.</h2><p className="mt-5 text-white/70 leading-relaxed">We pair equipment supply with the monitoring, operations, and support systems needed to keep energy projects useful over time.</p></div><div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">{strengths.map(({ icon: Icon, title, desc }) => <div key={title} className="p-6 rounded-2xl bg-white/10 border border-white/10"><Icon className="w-6 h-6 text-[#c9e86b]" /><h3 className="mt-5 font-semibold text-lg">{title}</h3><p className="mt-2 text-sm text-white/65 leading-relaxed">{desc}</p></div>)}</div></div></section>;
}
