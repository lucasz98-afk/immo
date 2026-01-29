import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft, ArrowUpRight, Clock, MapPin } from 'lucide-react';
import { PROPERTIES } from '../constants';
import { Property } from '../types';

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, setIsOpen }) => {
  // Select just 3 properties and add fake timestamps for "Live Feed" feel
  const newProperties = PROPERTIES.slice(0, 3).map((p, i) => ({
    ...p,
    timeAgo: i === 0 ? 'Hace 2h' : i === 1 ? 'Hace 5h' : 'Ayer'
  }));

  return (
    <>
      {/* 1. Toggle Button (Floating Pill) - Arrow pointing RIGHT to Open */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0, x: -20 }}
            animate={{ scale: 1, opacity: 1, x: 0 }}
            exit={{ scale: 0, opacity: 0, x: -20 }}
            onClick={() => setIsOpen(true)}
            whileHover={{ x: 5 }} // Micro-interaction: nudge right
            className="fixed left-6 bottom-8 z-[60] group outline-none"
          >
            <div className="relative">
                {/* Pulse Glow Effect behind button */}
                <div className="absolute inset-0 bg-brand-orange rounded-full animate-ping opacity-20 duration-2000" />
                <div className="absolute inset-0 bg-brand-orange/40 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* The Button Itself */}
                <div className="w-14 h-14 bg-[#121212] border border-white/10 text-white rounded-full flex items-center justify-center shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] transition-all duration-300 relative z-10 overflow-hidden">
                    {/* Inner sheen */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-50" />
                    
                    <ChevronRight size={24} className="text-white group-hover:text-brand-orange transition-colors" />
                </div>
                
                {/* Elegant Tooltip */}
                <div className="absolute left-16 top-1/2 -translate-y-1/2 flex flex-col opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-[-10px] group-hover:translate-x-0 pointer-events-none">
                    <span className="text-[10px] font-bold text-brand-dark bg-white/90 backdrop-blur px-3 py-1 rounded-full shadow-lg whitespace-nowrap tracking-wide">
                        VER NOVEDADES
                    </span>
                </div>
            </div>
          </motion.button>
        )}
      </AnimatePresence>

      {/* 2. The Floating Glass Capsule */}
      <AnimatePresence>
        {isOpen && (
            <motion.aside
                initial={{ x: -400, opacity: 0, filter: "blur(10px)" }}
                animate={{ x: 0, opacity: 1, filter: "blur(0px)" }}
                exit={{ x: -400, opacity: 0, filter: "blur(10px)" }}
                transition={{ 
                    type: "spring", 
                    stiffness: 400, 
                    damping: 40,
                    mass: 1
                }}
                className="fixed top-24 bottom-8 left-4 md:left-8 w-[340px] z-[60] flex flex-col pointer-events-none"
            >
                {/* Close Button (Attached to outside, pointing LEFT to Close) */}
                <motion.button
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    onClick={() => setIsOpen(false)}
                    className="absolute -right-12 top-0 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-brand-dark transition-all duration-300 pointer-events-auto shadow-lg group"
                >
                    <ChevronLeft size={20} className="group-hover:-translate-x-0.5 transition-transform" />
                </motion.button>

                {/* Actual Card Container */}
                {/* UPDATED: Reduced opacity to 0.6 and increased backdrop-blur to 3xl for real glass effect */}
                <div className="w-full h-full pointer-events-auto flex flex-col relative overflow-hidden rounded-[2.5rem] border border-white/10 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.8)] bg-[#050505]/60 backdrop-blur-3xl">
                    
                    {/* Lighting Effects (Borders) */}
                    <div className="absolute inset-0 rounded-[2.5rem] border border-white/5 pointer-events-none z-20" />
                    <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-50 z-20" />

                    {/* Content Layer */}
                    <div className="relative z-10 flex flex-col h-full">
                        
                        {/* Header */}
                        <div className="px-6 py-6 pb-4 border-b border-white/5 bg-gradient-to-b from-white/5 to-transparent">
                             <div className="flex items-center gap-2 mb-2">
                                <div className="relative flex h-2 w-2">
                                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-orange opacity-75"></span>
                                  <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-orange"></span>
                                </div>
                                <span className="text-[9px] font-bold text-brand-orange tracking-[0.25em] uppercase">Live Feed</span>
                            </div>
                            <h2 className="text-2xl font-serif text-white">Últimas Llegadas</h2>
                            <p className="text-white/40 text-xs mt-1 font-light">Actualizado en tiempo real</p>
                        </div>

                        {/* Scrollable List */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-hide">
                            {newProperties.map((property, idx) => (
                                <GlassCard key={property.id} property={property} index={idx} />
                            ))}
                        </div>

                        {/* Footer */}
                        <div className="p-4 border-t border-white/5 bg-[#050505]/50 backdrop-blur-md">
                            <button className="relative w-full py-4 rounded-2xl bg-white/5 border border-white/10 overflow-hidden group transition-all duration-300 hover:border-brand-orange/50">
                                <div className="absolute inset-0 bg-brand-orange/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                                <div className="relative z-10 flex items-center justify-center gap-3 text-white">
                                    <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Ver Inventario Completo</span>
                                    <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                </div>
                            </button>
                        </div>

                    </div>
                </div>
            </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
};

// High-Fidelity Glass Card
const GlassCard: React.FC<{ property: any; index: number }> = ({ property, index }) => {
    return (
        <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 + (index * 0.1) }}
            className="group relative rounded-2xl overflow-hidden bg-white/[0.03] border border-white/5 hover:border-white/20 hover:bg-white/[0.06] transition-all duration-500 cursor-pointer"
        >
            <div className="flex p-3 gap-4">
                {/* Image Thumbnail with inner shadow/glow */}
                <div className="w-24 h-24 rounded-xl overflow-hidden shrink-0 relative shadow-lg">
                    <img 
                        src={property.image} 
                        alt={property.type} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100" 
                    />
                    {/* Time Badge Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-1 bg-gradient-to-t from-black/80 to-transparent">
                        <div className="flex items-center gap-1 justify-center">
                            <Clock size={8} className="text-brand-orange" />
                            <span className="text-[8px] text-white/90 font-medium">{property.timeAgo}</span>
                        </div>
                    </div>
                </div>

                {/* Info */}
                <div className="flex flex-col justify-center min-w-0 flex-1 py-1">
                    <div className="flex justify-between items-start mb-1">
                        <div className="bg-brand-orange/10 px-2 py-0.5 rounded text-[8px] font-bold text-brand-orange uppercase tracking-wider">
                            Nuevo
                        </div>
                    </div>
                    
                    <h3 className="text-white text-base font-serif leading-tight mb-1 truncate group-hover:text-brand-orange transition-colors">
                        {property.type}
                    </h3>
                    
                    <div className="flex items-center gap-1.5 text-white/40 mb-3">
                        <MapPin size={10} />
                        <p className="text-[10px] uppercase tracking-wider font-bold truncate">
                            {property.location.split('-')[0]}
                        </p>
                    </div>

                    <div className="flex items-center justify-between mt-auto">
                         <span className="text-white font-medium text-sm tracking-tight">{property.price}</span>
                         <div className="w-6 h-6 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-brand-orange group-hover:border-brand-orange group-hover:text-white text-white/30 transition-all duration-300">
                            <ChevronRight size={12} />
                         </div>
                    </div>
                </div>
            </div>
            
            {/* Hover Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-shimmer pointer-events-none" />
        </motion.div>
    )
}

export default Sidebar;