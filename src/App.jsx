import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import Projects from './components/Projects';
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
      {/* Dark Green Fixed Header */}
      <Navbar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        onOpenQuote={openQuoteModal}
      />

      {/* Main Content Sections */}
      <main className="pt-16">
        <Hero onOpenQuote={openQuoteModal} />
        <AboutUs />
        <Services onOpenQuote={openQuoteModal} />
        <Projects onOpenQuote={openQuoteModal} />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Quote Request Modal */}
      {isQuoteModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-fadeIn">
          <div className="relative w-full max-w-xl bg-white rounded-2xl border border-slate-200 shadow-2xl p-6 max-h-[90vh] overflow-y-auto">
            <button
              onClick={closeQuoteModal}
              className="absolute top-4 right-4 p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-full border border-slate-200"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 mb-2">
              <div className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                <Zap className="w-4 h-4" />
              </div>
              <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">
                Mashariki Energy Proposal
              </span>
            </div>

            <h3 className="text-xl font-bold text-slate-900 mb-1">Request Proposal</h3>
            <p className="text-xs text-slate-500 mb-5">
              Fill out your details to receive a customized technical solar proposal.
            </p>

            <Contact isModal={true} onClose={closeQuoteModal} />
          </div>
        </div>
      )}
    </div>
  );
}
