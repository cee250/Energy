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
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-emerald-500 selection:text-white">
      {/* Top Bar & Navigation */}
      <TopBar />
      <Navbar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        onOpenQuote={openQuoteModal}
      />

      {/* Main Content Sections */}
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

      {/* Global Quote Request Modal */}
      {isQuoteModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
          <div className="relative w-full max-w-2xl bg-white rounded-3xl border border-slate-200 shadow-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto">
            <button
              onClick={closeQuoteModal}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-full border border-slate-200"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                <Zap className="w-4 h-4" />
              </div>
              <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">
                RENERG Rwanda Consultation
              </span>
            </div>

            <h3 className="text-2xl font-bold text-slate-900 mb-2">Request Renewable Energy Proposal</h3>
            <p className="text-xs text-slate-500 mb-6">
              Complete your project details to receive a customized technical solar design and cost assessment from our Kigali engineering team.
            </p>

            <Contact isModal={true} onClose={closeQuoteModal} />
          </div>
        </div>
      )}
    </div>
  );
}
