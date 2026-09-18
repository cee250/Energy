import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { X, Zap } from 'lucide-react';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#f7f8f5] text-slate-800 font-sans selection:bg-emerald-600 selection:text-white">
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} onOpenQuote={() => setIsQuoteModalOpen(true)} />
      <main className="pt-[104px]">
        <Hero onOpenQuote={() => setIsQuoteModalOpen(true)} />
        <AboutUs />
        <Services onOpenQuote={() => setIsQuoteModalOpen(true)} />
        <WhyChooseUs />
        <Contact />
      </main>
      <Footer />

      {isQuoteModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm" role="dialog" aria-modal="true" aria-label="Request a proposal">
          <div className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl p-6 max-h-[90vh] overflow-y-auto">
            <button onClick={() => setIsQuoteModalOpen(false)} className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-full" aria-label="Close proposal form">
              <X className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center"><Zap className="w-4 h-4" /></div>
              <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">Mashariki Energy</span>
            </div>
            <h2 className="text-2xl font-bold text-slate-950 mb-1">Start a conversation</h2>
            <p className="text-sm text-slate-500 mb-5">Share a few details and our team will respond with the right next step.</p>
            <Contact isModal onClose={() => setIsQuoteModalOpen(false)} />
          </div>
        </div>
      )}
    </div>
  );
}
