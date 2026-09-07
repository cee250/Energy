import React, { useState } from 'react';
import TopBar from './components/TopBar';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import Projects from './components/Projects';
import SolarCalculator from './components/SolarCalculator';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { X, Zap } from 'lucide-react';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  const openQuoteModal = () => setIsQuoteModalOpen(true);
  const closeQuoteModal = () => setIsQuoteModalOpen(false);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-emerald-500 selection:text-slate-950">
      {/* Top Bar & Navigation Header */}
      <TopBar />
      <Navbar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        onOpenQuote={openQuoteModal}
      />

      {/* Main Sections */}
      <main>
        <Hero onOpenQuote={openQuoteModal} />
        <AboutUs />
        <Services onOpenQuote={openQuoteModal} />
        <Projects onOpenQuote={openQuoteModal} />
        <SolarCalculator onOpenQuote={openQuoteModal} />
        <Contact />
      </main>

      {/* Footer */}
      <Footer onOpenQuote={openQuoteModal} />

      {/* Global Proposal Request Modal */}
      {isQuoteModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-2xl bg-slate-950 rounded-3xl border border-slate-800 shadow-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto glow-emerald">
            <button
              onClick={closeQuoteModal}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white hover:bg-slate-900 rounded-full border border-slate-800"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500/30">
                <Zap className="w-4 h-4" />
              </div>
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest">
                Fast-Track Feasibility Request
              </span>
            </div>

            <h3 className="text-2xl font-bold text-white mb-2">Request Technical Solar Proposal</h3>
            <p className="text-xs text-slate-400 mb-6">
              Complete your facility profile to receive an engineered solar PV blueprint and financial payback model within 4 hours.
            </p>

            <Contact isModal={true} onClose={closeQuoteModal} />
          </div>
        </div>
      )}
    </div>
  );
}
