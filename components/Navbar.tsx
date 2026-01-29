import React, { useState, useEffect } from 'react';
import { Menu, X, Globe, ArrowRight, Phone, Mail, ChevronRight, ChevronLeft, Facebook, Instagram } from 'lucide-react';
import { NAV_ITEMS } from '../constants';
import { motion, AnimatePresence } from 'framer-motion';
import Button from './ui/Button';

const Navbar: React.FC = () => {
  // Logic States
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDeepScrolled, setIsDeepScrolled] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false); // Controls the desktop manual expansion
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    // Initial check
    handleResize();

    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 50);
      
      // Deep scroll logic only relevant for Desktop
      const deepThreshold = 850;
      const isDeep = scrollY > deepThreshold;
      setIsDeepScrolled(isDeep);

      // Auto-collapse when scrolling back up to top area
      if (!isDeep) {
        setIsExpanded(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isMobileMenuOpen]);

  // Derived state for Desktop view logic
  const isDesktopCompact = !isMobile && isDeepScrolled && !isExpanded;

  return (
    <>
      {/* Floating Dynamic Island Navbar */}
      <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-4 pointer-events-none transition-all duration-500">
        <motion.nav
          initial={{ y: -100, width: '90%' }}
          animate={{ 
            y: 0, 
            width: isMobile ? 'calc(100% - 32px)' : 'fit-content',
            minWidth: isMobile ? 'auto' : (isDesktopCompact ? '0' : '600px'),
            backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.85)' : 'rgba(255, 255, 255, 0)',
            backdropFilter: isScrolled ? 'blur(20px)' : 'blur(0px)',
            borderColor: isScrolled ? 'rgba(255, 255, 255, 0.5)' : 'transparent',
            paddingLeft: isScrolled ? '0.75rem' : '0rem', 
            paddingRight: isScrolled ? '0.75rem' : '0rem',
            paddingTop: isScrolled ? '0.5rem' : '1rem',
            paddingBottom: isScrolled ? '0.5rem' : '1rem',
            gap: isDesktopCompact ? '0.5rem' : '1rem'
          }}
          transition={{ 
            type: "spring", 
            stiffness: 300, 
            damping: 25,
            mass: 0.8,
            layout: { duration: 0.3 }
          }}
          className={`
            pointer-events-auto relative rounded-full flex items-center justify-between overflow-hidden
            ${isScrolled ? 'shadow-[0_8px_32px_rgba(0,0,0,0.08)] border' : ''}
            ${!isScrolled && !isMobile ? 'px-8' : ''} 
          `}
        >
           {/* Logo Section */}
          <div className={`flex items-center transition-all duration-500 ${isScrolled ? 'pr-2' : 'pr-0 lg:pr-8'} gap-3`}>
            {/* UPDATED: Image Logo */}
            <motion.div 
               className="flex items-center"
               layout
            >
               <img 
                  src="https://nexto.agency/wp-content/uploads/2026/01/logo.png" 
                  alt="Immocenter Empuriabrava" 
                  className={`h-10 w-auto object-contain transition-all duration-500 ${!isScrolled ? 'brightness-0 invert' : ''}`}
               />
            </motion.div>
            
            {/* Logo Text hidden since image contains logo likely, or if image is just icon we can keep text. 
                Assuming image is full logo based on filename 'logo.png'. 
                If user wants text + icon, we would keep text. Let's hide text to be safe with image logo.
            */}
          </div>

          {/* Desktop Links Container */}
          <motion.div 
            animate={{ 
              width: isDesktopCompact ? 0 : 'auto',
              opacity: isDesktopCompact ? 0 : 1,
            }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:flex items-center overflow-hidden"
          >
            <div className="flex items-center gap-6 xl:gap-8 px-4 whitespace-nowrap">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className={`relative text-xs font-medium tracking-widest uppercase transition-colors hover:text-brand-orange group py-2
                    ${isScrolled ? 'text-brand-dark' : 'text-white'}
                  `}
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-brand-orange transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Actions Section */}
          <div className="flex items-center gap-2 pl-2">
            
            {/* DESKTOP: Contact Button */}
             <div className="hidden lg:block">
                <Button 
                  size="sm" 
                  variant={isScrolled ? 'primary' : 'glass'}
                  className={!isScrolled ? '!rounded-full !px-6 !text-white !border-white/30 hover:!bg-white/20 hover:!text-white' : ''}
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  CONTACTO
                </Button>
             </div>

            {/* Language Selector */}
            <motion.button 
               layout
               className={`flex items-center gap-2 text-xs font-bold tracking-widest transition-colors px-2
               ${isScrolled ? 'text-brand-dark hover:text-brand-orange' : 'text-white hover:text-brand-orange'}`}
            >
              ES <Globe size={14} />
            </motion.button>

             {/* DESKTOP: Expand Toggle Arrow */}
            {!isMobile && isDeepScrolled && (
                <motion.button
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0, opacity: 0 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsExpanded(!isExpanded)}
                  className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ml-1
                    ${isExpanded 
                      ? 'bg-brand-charcoal/10 text-brand-dark hover:bg-brand-charcoal/20' 
                      : 'bg-brand-orange text-white hover:bg-brand-orange/90 shadow-lg'}
                  `}
                >
                  {isExpanded ? <ChevronLeft size={16} /> : <ChevronRight size={16} />}
                </motion.button>
            )}
            
            {/* MOBILE: Menu Trigger */}
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMobileMenuOpen(true)}
              className={`lg:hidden w-10 h-10 rounded-full flex items-center justify-center transition-colors ${isScrolled ? 'bg-brand-charcoal text-white' : 'bg-white/20 text-white backdrop-blur-md'}`}
            >
              <Menu size={18} />
            </motion.button>
            
          </div>
        </motion.nav>
      </div>

      {/* Ultra-Luxury Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed inset-0 z-[80] bg-brand-charcoal flex flex-col pointer-events-auto"
          >
            {/* Menu Header */}
            <div className="flex justify-between items-center px-6 py-6 md:px-12 md:py-8 border-b border-white/10">
               <div className="flex items-center gap-3">
                  {/* UPDATED: Mobile Menu Logo (White Version) */}
                  <img 
                      src="https://nexto.agency/wp-content/uploads/2026/01/logo.png" 
                      alt="Immocenter" 
                      className="h-10 w-auto object-contain brightness-0 invert"
                  />
               </div>
               <button 
                 onClick={() => setIsMobileMenuOpen(false)}
                 className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-brand-charcoal transition-all duration-300"
               >
                 <X size={20} />
               </button>
            </div>

            {/* Menu Body */}
            <div className="flex-1 overflow-y-auto px-6 py-8 md:px-12 flex flex-col lg:flex-row gap-12 lg:gap-24">
               
               {/* Navigation List */}
               <div className="flex-1 flex flex-col justify-center space-y-2">
                  {NAV_ITEMS.map((item, index) => (
                    <motion.a
                      key={item.label}
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + index * 0.1, duration: 0.5, ease: "easeOut" }}
                      className="group flex items-center justify-between border-b border-white/5 py-4 md:py-6"
                    >
                      <span className="text-3xl md:text-5xl font-serif text-white/90 group-hover:text-brand-orange transition-colors duration-300 group-hover:pl-4">
                        {item.label}
                      </span>
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 -translate-x-4 group-hover:translate-x-0 text-brand-orange">
                        <ArrowRight size={24} />
                      </span>
                    </motion.a>
                  ))}
               </div>

               {/* Menu Footer */}
               <motion.div 
                 initial={{ opacity: 0, y: 50 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ delay: 0.5, duration: 0.6 }}
                 className="lg:w-1/3 bg-white/5 rounded-3xl p-8 flex flex-col justify-between border border-white/5"
               >
                  <div>
                    <h5 className="text-brand-orange text-xs font-bold tracking-[0.2em] uppercase mb-6">Contacto Directo</h5>
                    <div className="space-y-6">
                       <a href="tel:+34972451450" className="flex items-center gap-4 text-white hover:text-brand-orange transition-colors group">
                          <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-brand-orange transition-colors">
                            <Phone size={18} />
                          </div>
                          <span className="text-xl font-serif">00 34 972 451 450</span>
                       </a>
                       <a href="mailto:info@immocenter.es" className="flex items-center gap-4 text-white hover:text-brand-orange transition-colors group">
                          <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-brand-orange transition-colors">
                            <Mail size={18} />
                          </div>
                          <span className="text-lg font-light">empuriabrava@immocenter.es</span>
                       </a>
                    </div>
                  </div>

                  <div className="mt-12 pt-8 border-t border-white/10 flex justify-between items-center">
                     <div className="flex gap-4">
                        <a href="#" className="text-white/60 hover:text-white transition-colors"><Facebook size={20} /></a>
                        <a href="#" className="text-white/60 hover:text-white transition-colors"><Instagram size={20} /></a>
                     </div>
                     <p className="text-white/40 text-xs tracking-wider">EST. 1975</p>
                  </div>
               </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;