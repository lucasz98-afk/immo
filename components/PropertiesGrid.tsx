import React, { useRef, useState } from 'react';
import { PROPERTIES } from '../constants';
import { Property } from '../types';
import { Reveal } from './ui/Reveal';
import { ArrowRight, ChevronLeft, ChevronRight, BedDouble, Bath, Maximize, MapPin, Car, Anchor, Waves, Sun, Trees, Hash, Heart, Share2, Scan } from 'lucide-react';
import { motion, useMotionValue, AnimatePresence } from 'framer-motion';

const PropertiesGrid: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  
  // Custom scroll handler
  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = window.innerWidth * 0.6;
      scrollRef.current.scrollBy({
        left: direction === 'right' ? scrollAmount : -scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="sales" className="py-32 bg-brand-cream relative overflow-hidden border-b border-gray-200">
      
      {/* Header Container */}
      <div className="max-w-7xl mx-auto px-6 mb-12 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8">
           <Reveal>
             <div className="flex items-center gap-3 mb-4">
                <span className="w-2 h-2 rounded-full bg-brand-orange animate-pulse"></span>
                <h4 className="text-brand-orange text-xs font-bold tracking-[0.3em] uppercase">Selección Exclusiva</h4>
             </div>
             <h2 className="text-5xl md:text-8xl font-serif text-brand-dark leading-[0.85] tracking-tight">
               Nuestras <br/> <span className="italic text-brand-gray/40">Propiedades</span>
             </h2>
           </Reveal>
           
           <Reveal delay={0.2}>
             <div className="flex items-center gap-6">
                <div className="hidden md:flex gap-2">
                   <button onClick={() => scroll('left')} className="w-12 h-12 rounded-full border border-brand-dark/10 flex items-center justify-center hover:bg-brand-dark hover:text-white transition-all duration-300">
                      <ChevronLeft size={20} />
                   </button>
                   <button onClick={() => scroll('right')} className="w-12 h-12 rounded-full border border-brand-dark/10 flex items-center justify-center hover:bg-brand-dark hover:text-white transition-all duration-300">
                      <ChevronRight size={20} />
                   </button>
                </div>
                <a href="#" className="group flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase text-brand-dark">
                  <span>Ver inventario completo</span>
                  <div className="w-8 h-[1px] bg-brand-dark group-hover:w-12 transition-all duration-300"></div>
                </a>
             </div>
           </Reveal>
        </div>
      </div>

      {/* Full Width Carousel */}
      <div 
        ref={scrollRef}
        className="w-full overflow-x-auto pb-24 pt-10 hide-scrollbar cursor-grab active:cursor-grabbing pl-6 md:pl-[max(2rem,calc(50vw-40rem))]"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        <div className="flex gap-6 md:gap-10 w-max pr-12 items-center">
          {PROPERTIES.map((property, index) => (
            <PropertyCard key={property.id} property={property} index={index} />
          ))}
          
          {/* "View More" End Card */}
          <div className="min-w-[300px] md:min-w-[400px] h-[600px] flex items-center justify-center relative group cursor-pointer rounded-[2.5rem] overflow-hidden bg-white/50 border border-brand-dark/5 hover:bg-white hover:shadow-xl transition-all duration-500">
             <div className="flex flex-col items-center gap-6 relative z-10">
                <div className="w-24 h-24 rounded-full border border-brand-dark/10 flex items-center justify-center group-hover:bg-brand-orange group-hover:border-brand-orange group-hover:text-white transition-all duration-500">
                   <ArrowRight size={32} />
                </div>
                <div className="text-center">
                   <span className="block text-brand-dark font-serif text-3xl italic mb-2">Descubrir Todo</span>
                   <span className="text-[10px] uppercase tracking-[0.2em] text-brand-gray">Más de 200 propiedades</span>
                </div>
             </div>
          </div>
        </div>
      </div>

    </section>
  );
};

const PropertyCard: React.FC<{ property: Property, index: number }> = ({ property, index }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    x.set(e.clientX - rect.left);
    y.set(e.clientY - rect.top);
  };

  // Helper to generate list of available amenities based on booleans
  const getAmenities = () => {
    const items = [];
    if (property.specs.pool) items.push({ label: 'Piscina Privada', icon: Waves });
    if (property.specs.parking) items.push({ label: 'Garaje Doble', icon: Car });
    if (property.specs.mooring) items.push({ label: 'Amarre', icon: Anchor });
    if (property.specs.terrace) items.push({ label: 'Terraza Solarium', icon: Sun });
    if (property.specs.garden) items.push({ label: 'Jardín', icon: Trees });
    if (property.specs.seaView) items.push({ label: 'Vistas al Mar', icon: Scan });
    return items;
  };

  const amenities = getAmenities();

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "0px -100px" }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className={`relative h-[600px] ${property.widthClass || 'min-w-[500px]'} rounded-[2.5rem] overflow-hidden group select-none shadow-[0_10px_30px_-10px_rgba(0,0,0,0.1)] hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.3)] transition-shadow duration-700`}
    >
      {/* 1. Background Image Layer - Scale Logic Adjusted for "Wider View" */}
      <div className="absolute inset-0 bg-brand-charcoal overflow-hidden">
         <motion.img
            src={property.image}
            alt={property.type}
            className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out will-change-transform"
            style={{ 
              scale: isHovered ? 1.05 : 1.15, // Starts zoomed in slightly, zooms OUT on hover for better context, or vice versa. Let's do Zoom In slowly.
              transformOrigin: "center center"
            }}
            animate={{ scale: isHovered ? 1.1 : 1 }} // Let's actually Start at 1 (Full View) and zoom in SLOWLY to 1.1
         />
         {/* Gradient Overlay - Cinematic Fade */}
         <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/10 opacity-60 group-hover:opacity-40 transition-opacity duration-700" />
      </div>

      {/* 2. Quick Actions (Top Right) - Appears on Hover */}
      <div className="absolute top-6 right-6 flex gap-2 z-20 translate-y-[-10px] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
         <button className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-brand-orange transition-colors">
            <Heart size={16} />
         </button>
         <button className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-brand-dark transition-colors">
            <Share2 size={16} />
         </button>
      </div>

      {/* 3. Status Tag (Top Left) - Always visible but styled */}
      <div className="absolute top-6 left-6 flex flex-col gap-2 items-start z-20 pointer-events-none">
         {property.isExclusive && (
            <div className="bg-brand-orange text-white px-3 py-1 rounded-full shadow-lg">
               <span className="text-[9px] font-bold uppercase tracking-[0.2em]">Exclusiva</span>
            </div>
         )}
         <div className="bg-black/30 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
             <span className="text-white text-[9px] font-bold uppercase tracking-[0.2em] flex items-center gap-2">
               <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span>
               En Venta
             </span>
         </div>
      </div>

      {/* 4. The "Ultra-Luxe Dashboard" (Bottom) */}
      <div className="absolute bottom-6 left-6 right-6 z-30">
        <motion.div 
          layout
          className="bg-white/95 backdrop-blur-2xl rounded-[2rem] p-6 shadow-[0_8px_32px_rgba(0,0,0,0.15)] border border-white/50 relative overflow-hidden"
        >
          {/* Subtle Grain Texture inside the card */}
          <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] pointer-events-none" />

          {/* Header Info */}
          <motion.div layout className="relative z-10 flex justify-between items-start mb-4">
             <div className="flex-1 pr-4">
                <h3 className="font-serif text-2xl text-brand-dark leading-none mb-2 truncate tracking-tight">{property.type}</h3>
                <div className="flex items-center gap-2 text-brand-gray/80">
                   <MapPin size={12} className="text-brand-orange shrink-0" />
                   <p className="text-[10px] uppercase tracking-widest font-bold truncate">{property.location}</p>
                </div>
             </div>
             <div className="text-right shrink-0">
                <p className="text-xl font-serif text-brand-dark font-medium">{property.price}</p>
             </div>
          </motion.div>

          {/* Collapsible Content - Using AnimatePresence for smooth height animation */}
          <motion.div 
            layout
            className="relative z-10 overflow-hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ 
               height: isHovered ? 'auto' : 0, 
               opacity: isHovered ? 1 : 0,
               marginTop: isHovered ? 16 : 0 // Adds margin only when open
            }}
            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
             
             {/* Divider */}
             <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-brand-dark/10 to-transparent mb-5" />

             {/* 1. Technical Specs Row - Clean & Minimal */}
             <div className="flex justify-between items-center mb-6 px-2">
                <div className="flex flex-col items-center gap-1 group/icon">
                   <BedDouble size={18} className="text-brand-gray group-hover/icon:text-brand-orange transition-colors" />
                   <span className="text-xs font-bold text-brand-dark">{property.specs.bedrooms} <span className="font-normal text-brand-gray/60 text-[10px] uppercase">Hab.</span></span>
                </div>
                <div className="w-[1px] h-6 bg-brand-dark/5"></div>
                <div className="flex flex-col items-center gap-1 group/icon">
                   <Bath size={18} className="text-brand-gray group-hover/icon:text-brand-orange transition-colors" />
                   <span className="text-xs font-bold text-brand-dark">{property.specs.bathrooms} <span className="font-normal text-brand-gray/60 text-[10px] uppercase">Baños</span></span>
                </div>
                <div className="w-[1px] h-6 bg-brand-dark/5"></div>
                <div className="flex flex-col items-center gap-1 group/icon">
                   <Maximize size={18} className="text-brand-gray group-hover/icon:text-brand-orange transition-colors" />
                   <span className="text-xs font-bold text-brand-dark">{property.specs.area} <span className="font-normal text-brand-gray/60 text-[10px] uppercase">m²</span></span>
                </div>
             </div>

             {/* 2. Amenities List - The "Editorial" Look */}
             {/* Instead of pills, we use a clean grid with small icons and text */}
             <div className="bg-brand-cream/40 rounded-xl p-4 mb-4 border border-brand-dark/5">
                <div className="grid grid-cols-2 gap-y-3 gap-x-4">
                  {amenities.slice(0, 6).map((item, i) => (
                    <div key={i} className="flex items-center gap-2">
                       <item.icon size={12} className="text-brand-orange shrink-0" />
                       <span className="text-[10px] font-medium text-brand-dark/80 uppercase tracking-wide truncate">{item.label}</span>
                    </div>
                  ))}
                </div>
             </div>

             {/* Footer: Ref & CTA */}
             <div className="flex justify-between items-center pt-1">
                <div className="flex items-center gap-1.5 text-brand-gray/40 group/ref cursor-help">
                   <Hash size={12} />
                   <span className="text-[9px] font-mono tracking-wider group-hover/ref:text-brand-dark transition-colors">{property.ref}</span>
                </div>
                
                <button className="flex items-center gap-2 bg-brand-dark text-white pl-5 pr-4 py-2.5 rounded-full hover:bg-brand-orange hover:shadow-lg hover:shadow-brand-orange/20 transition-all duration-300 group/btn">
                   <span className="text-[9px] font-bold uppercase tracking-[0.2em]">Ver Ficha</span>
                   <ArrowRight size={12} className="group-hover/btn:translate-x-1 transition-transform duration-300" />
                </button>
             </div>

          </motion.div>
        </motion.div>
      </div>

    </motion.div>
  );
};

export default PropertiesGrid;