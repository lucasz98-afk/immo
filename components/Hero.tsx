import React, { useState, useRef } from 'react';
import { Search, ChevronDown, MapPin, Anchor, Home, BedDouble, Bath, PlusCircle, MinusCircle, Check, Ruler, Hash } from 'lucide-react';
import Button from './ui/Button';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';

const Hero: React.FC = () => {
  const [searchMode, setSearchMode] = useState<'buy' | 'rent'>('buy');
  const [showAdvanced, setShowAdvanced] = useState(true); // Default to open for visibility
  
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  // Parallax Background only. Text stays visible (no opacity fade).
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <section ref={ref} id="hero" className="relative w-full min-h-[140vh] md:min-h-screen pb-20 bg-brand-dark flex flex-col justify-center items-center overflow-hidden">
      
      {/* Background Image - Persistent & High Quality */}
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute inset-0 z-0"
      >
        {/* Overlay oscuro pero que permita ver la belleza del canal */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-brand-dark/90 z-10" />
        <img
          src="https://img.youtube.com/vi/vyktQaZ2x7c/maxresdefault.jpg"
          alt="Empuriabrava Canal View"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Content Container */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 pt-32 md:pt-40 flex flex-col items-center">
        
        {/* Main Heading - Static & High Contrast */}
        <div className="text-center mb-10 w-full">
           <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-center gap-4 mb-4"
          >
            <div className="h-[1px] w-12 bg-white/80"></div>
            <span className="text-white/90 font-sans uppercase tracking-[0.3em] text-[10px] md:text-xs font-bold">
              Real Estate Empuriabrava
            </span>
            <div className="h-[1px] w-12 bg-white/80"></div>
          </motion.div>

          <h1 className="text-5xl md:text-7xl lg:text-[7rem] font-serif text-white leading-[0.9] tracking-tight drop-shadow-2xl mb-2">
            EMPURIABRAVA
          </h1>
          <p className="text-white/80 text-lg md:text-2xl font-light font-serif italic">
            La Venecia de la Costa Brava
          </p>
        </div>

        {/* SEARCH CONSOLE - The "Command Center" */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="w-full max-w-6xl bg-white rounded-t-3xl rounded-b-3xl md:rounded-b-[2rem] shadow-[0_20px_80px_-10px_rgba(0,0,0,0.5)] overflow-hidden"
        >
          {/* Tabs Header */}
          <div className="flex w-full text-center font-bold tracking-widest text-sm uppercase border-b border-gray-100">
            <button 
              onClick={() => setSearchMode('buy')}
              className={`flex-1 py-5 md:py-6 transition-all duration-300 relative ${searchMode === 'buy' ? 'text-brand-orange bg-white' : 'text-gray-400 bg-gray-50 hover:bg-gray-100'}`}
            >
              Comprar
              {searchMode === 'buy' && <motion.div layoutId="tab-indicator" className="absolute bottom-0 left-0 right-0 h-1 bg-brand-orange" />}
            </button>
            <button 
              onClick={() => setSearchMode('rent')}
              className={`flex-1 py-5 md:py-6 transition-all duration-300 relative ${searchMode === 'rent' ? 'text-brand-orange bg-white' : 'text-gray-400 bg-gray-50 hover:bg-gray-100'}`}
            >
              Alquilar
              {searchMode === 'rent' && <motion.div layoutId="tab-indicator" className="absolute bottom-0 left-0 right-0 h-1 bg-brand-orange" />}
            </button>
          </div>

          {/* Filter Body */}
          <div className="p-6 md:p-8 lg:p-10 bg-white">
            
            {/* Primary Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-6">
               
               {/* Región */}
               <div className="space-y-2">
                  <label className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">Región</label>
                  <div className="relative group">
                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-brand-orange w-4 h-4" />
                    <select className="w-full bg-gray-50 border border-gray-200 text-brand-dark rounded-lg py-3 pl-10 pr-8 appearance-none focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange transition-all font-medium">
                      <option>Todas las zonas</option>
                      <option>Empuriabrava</option>
                      <option>Roses</option>
                      <option>Santa Margarita</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
                  </div>
               </div>

               {/* Tipo Inmueble */}
               <div className="space-y-2">
                  <label className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">Tipo de Inmueble</label>
                  <div className="relative group">
                    <Home className="absolute left-3 top-1/2 -translate-y-1/2 text-brand-orange w-4 h-4" />
                    <select className="w-full bg-gray-50 border border-gray-200 text-brand-dark rounded-lg py-3 pl-10 pr-8 appearance-none focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange transition-all font-medium">
                      <option>Todos los tipos</option>
                      <option>Casa / Villa</option>
                      <option>Apartamento</option>
                      <option>Amarre</option>
                      <option>Terreno</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
                  </div>
               </div>

               {/* Presupuesto */}
               <div className="space-y-2">
                  <label className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">Presupuesto Máx</label>
                  <div className="relative group">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-brand-orange font-bold text-sm">€</span>
                    <select className="w-full bg-gray-50 border border-gray-200 text-brand-dark rounded-lg py-3 pl-9 pr-8 appearance-none focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange transition-all font-medium">
                      <option>Sin límite</option>
                      <option>200.000 €</option>
                      <option>500.000 €</option>
                      <option>1.000.000 €</option>
                      <option>+ 1.000.000 €</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
                  </div>
               </div>

               {/* Referencia */}
               <div className="space-y-2">
                  <label className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">Referencia</label>
                  <div className="relative group">
                    <Hash className="absolute left-3 top-1/2 -translate-y-1/2 text-brand-orange w-4 h-4" />
                    <input type="text" placeholder="Ej: 1234" className="w-full bg-gray-50 border border-gray-200 text-brand-dark rounded-lg py-3 pl-10 pr-4 focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange transition-all font-medium placeholder-gray-400" />
                  </div>
               </div>

            </div>

            <AnimatePresence>
              {showAdvanced && (
                <motion.div 
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8 pt-2 border-t border-gray-100">
                    
                    {/* Habitaciones */}
                    <div className="space-y-2 mt-4">
                        <label className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">Habitaciones (Mín)</label>
                        <div className="relative">
                          <BedDouble className="absolute left-3 top-1/2 -translate-y-1/2 text-brand-dark/40 w-4 h-4" />
                          <select className="w-full bg-white border border-gray-200 text-brand-dark rounded-lg py-2.5 pl-10 pr-8 text-sm focus:border-brand-orange focus:outline-none">
                            <option>Cualquiera</option>
                            <option>1+</option>
                            <option>2+</option>
                            <option>3+</option>
                            <option>4+</option>
                          </select>
                        </div>
                    </div>

                    {/* Baños */}
                    <div className="space-y-2 mt-4">
                        <label className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">Baños (Mín)</label>
                        <div className="relative">
                          <Bath className="absolute left-3 top-1/2 -translate-y-1/2 text-brand-dark/40 w-4 h-4" />
                          <select className="w-full bg-white border border-gray-200 text-brand-dark rounded-lg py-2.5 pl-10 pr-8 text-sm focus:border-brand-orange focus:outline-none">
                            <option>Cualquiera</option>
                            <option>1+</option>
                            <option>2+</option>
                            <option>3+</option>
                          </select>
                        </div>
                    </div>

                    {/* Tipo de Amarre */}
                    <div className="space-y-2 mt-4">
                        <label className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">Tipo de Amarre</label>
                        <div className="relative">
                          <Anchor className="absolute left-3 top-1/2 -translate-y-1/2 text-brand-dark/40 w-4 h-4" />
                          <select className="w-full bg-white border border-gray-200 text-brand-dark rounded-lg py-2.5 pl-10 pr-8 text-sm focus:border-brand-orange focus:outline-none">
                            <option>Indiferente</option>
                            <option>Antes de los puentes</option>
                            <option>Después de los puentes</option>
                          </select>
                        </div>
                    </div>

                    {/* Medidas Amarre */}
                    <div className="space-y-2 mt-4">
                        <label className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">Amarre (Metros)</label>
                        <div className="flex gap-2">
                           <div className="relative w-1/2">
                              <input type="number" placeholder="Longitud" className="w-full bg-white border border-gray-200 rounded-lg py-2.5 px-3 text-sm focus:border-brand-orange focus:outline-none" />
                           </div>
                           <div className="relative w-1/2">
                              <input type="number" placeholder="Ancho" className="w-full bg-white border border-gray-200 rounded-lg py-2.5 px-3 text-sm focus:border-brand-orange focus:outline-none" />
                           </div>
                        </div>
                    </div>

                  </div>

                  {/* Checkboxes */}
                  <div className="flex flex-wrap gap-x-8 gap-y-4 mb-8">
                     {['Vistas al mar', 'Piscina', 'Garaje / Parking', 'Con ascensor'].map((feature) => (
                       <label key={feature} className="flex items-center gap-2 cursor-pointer group select-none">
                          <div className="w-5 h-5 border-2 border-gray-200 rounded flex items-center justify-center group-hover:border-brand-orange transition-colors bg-white">
                             <Check size={14} className="text-brand-orange opacity-0 group-hover:opacity-50 checked:opacity-100" />
                             {/* Note: In a real form, this would be a real input type checkbox */}
                          </div>
                          <span className="text-sm text-brand-dark/70 group-hover:text-brand-dark transition-colors">{feature}</span>
                       </label>
                     ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Action Bar */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 border-t border-gray-100 pt-6">
               <button 
                 onClick={() => setShowAdvanced(!showAdvanced)}
                 className="text-xs font-bold tracking-widest uppercase text-gray-400 hover:text-brand-orange transition-colors flex items-center gap-2"
               >
                 {showAdvanced ? <MinusCircle size={16} /> : <PlusCircle size={16} />}
                 {showAdvanced ? 'Menos Opciones' : 'Más Filtros'}
               </button>

               <Button variant="primary" size="lg" className="w-full md:w-auto shadow-xl shadow-brand-orange/20 !py-4 !px-12 !text-lg">
                 <Search size={20} />
                 BUSCAR PROPIEDADES
               </Button>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;