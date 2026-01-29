import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import QuickAccess from './components/QuickAccess';
import AgencySection from './components/AgencySection';
import ValuationSection from './components/ValuationSection';
import PropertiesGrid from './components/PropertiesGrid';
import ContactFooter from './components/ContactFooter';
import CustomCursor from './components/ui/CustomCursor';
import Sidebar from './components/Sidebar';
import { motion } from 'framer-motion';

function App() {
  // Sidebar starts closed by default
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      // Only force close on small screens if it happens to be open,
      // but never force open on desktop anymore.
      if (window.innerWidth < 1280) { 
        setIsSidebarOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="min-h-screen bg-brand-cream font-sans selection:bg-brand-orange selection:text-white overflow-x-hidden">
      <CustomCursor />
      
      {/* Sidebar Component - Now purely floating */}
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

      {/* Main Layout Wrapper */}
      <div className="relative w-full">
        <Navbar />
        
        <main className="w-full relative">
          <Hero />
          <QuickAccess />
          <PropertiesGrid />
          <ValuationSection />
          <AgencySection />
        </main>
        
        <ContactFooter />
      </div>
    </div>
  );
}

export default App;