import React, { useRef } from 'react';
import { Home, TrendingUp, Search, CheckCircle2, BarChart3 } from 'lucide-react';
import Button from './ui/Button';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const ValuationSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Mouse position logic for interactive background
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 50, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 50, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    
    const width = rect.width;
    const height = rect.height;
    
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const xPct = (mouseX / width) - 0.5;
    const yPct = (mouseY / height) - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  };

  // Parallax transform for background elements
  const bgX = useTransform(mouseXSpring, [-0.5, 0.5], ["-50px", "50px"]);
  const bgY = useTransform(mouseYSpring, [-0.5, 0.5], ["-50px", "50px"]);
  const bgXInv = useTransform(mouseXSpring, [-0.5, 0.5], ["50px", "-50px"]);
  const bgYInv = useTransform(mouseYSpring, [-0.5, 0.5], ["50px", "-50px"]);

  return (
    <section className="py-20 px-4 md:px-8 relative">
       {/* Section container */}
      <div className="max-w-7xl mx-auto" onMouseMove={handleMouseMove} ref={containerRef}>
        {/* Main Card */}
        <div className="relative rounded-[48px] overflow-hidden bg-brand-charcoal shadow-2xl min-h-[650px] flex flex-col items-center justify-center text-center px-6 isolate border border-white/5 group perspective-1000">
          
          {/* Background Effects - Deep Orange Fade */}
          <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/40 via-[#120804] to-[#050505] z-0" />
          
          {/* Interactive Ambient Light Orbs */}
          <motion.div 
            style={{ x: bgXInv, y: bgYInv }}
            className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-brand-orange/20 blur-[120px] rounded-full mix-blend-screen pointer-events-none opacity-60" 
          />
          <motion.div 
            style={{ x: bgX, y: bgY }}
            className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-blue-900/10 blur-[100px] rounded-full mix-blend-screen pointer-events-none" 
          />
          
          {/* Subtle Tech Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] z-0 pointer-events-none" />

          {/* Floating UI Elements (Decorations) */}
          <FloatingCard 
            className="absolute top-24 left-[8%] hidden xl:flex"
            icon={<TrendingUp size={18} className="text-emerald-400" />}
            label="Tendencia Empuriabrava"
            value="+5.2% Anual"
            delay={0}
            xOffset={-10}
            parallax={{ x: bgX, y: bgY }}
          />
          
          <FloatingCard 
            className="absolute bottom-40 right-[12%] hidden xl:flex"
            icon={<CheckCircle2 size={18} className="text-brand-orange" />}
            label="Precisión"
            value="Datos Verificados"
            delay={1.5}
            xOffset={10}
            parallax={{ x: bgXInv, y: bgYInv }}
          />

           <FloatingCard 
            className="absolute top-32 right-[8%] hidden xl:flex"
            icon={<BarChart3 size={18} className="text-blue-400" />}
            label="Valoraciones hoy"
            value="124 Propiedades"
            delay={0.8}
            xOffset={5}
            parallax={{ x: bgX, y: bgY }}
          />

          {/* Main Content */}
          <div className="relative z-10 max-w-4xl mx-auto space-y-10 flex flex-col items-center">
            
            {/* Icon Group */}
            <motion.div 
              initial={{ scale: 0.5, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, type: "spring" }}
              className="relative inline-flex items-center justify-center mb-4"
            >
               <div className="absolute inset-0 bg-brand-orange/30 blur-2xl rounded-full animate-pulse" />
               <div className="w-24 h-24 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/10 rounded-[2rem] flex items-center justify-center relative shadow-[0_0_50px_-10px_rgba(192,77,24,0.4)] ring-1 ring-white/20">
                  <Home size={40} className="text-white drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)]" />
               </div>
            </motion.div>
            
            {/* Typography */}
            <div className="space-y-6">
              <h2 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white leading-[0.9] tracking-tight drop-shadow-2xl">
                ¿Cuánto vale <br />
                <span className="italic text-white/90">su casa?</span>
              </h2>
              
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="inline-block"
              >
                <p className="text-2xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-brand-orange via-orange-200 to-brand-orange font-light tracking-wide pb-2">
                  Estime su propiedad gratis
                </p>
              </motion.div>
              
              <p className="text-base md:text-lg text-white/50 font-normal max-w-lg mx-auto leading-relaxed pt-2">
                Descubra el valor real de mercado. Nuestros expertos analizan cientos de puntos de datos en tiempo real.
              </p>
            </div>

            {/* CTA Input Group - Visual Mockup */}
            <motion.div 
               initial={{ width: "80%", opacity: 0 }}
               whileInView={{ width: "100%", opacity: 1 }}
               transition={{ delay: 0.5, duration: 0.8 }}
               className="pt-6 w-full flex flex-col items-center gap-5"
            >
               {/* Mock Input for Visual Flair */}
               <div className="w-full max-w-[500px] h-16 bg-white border border-white/10 rounded-full pl-6 pr-2 flex items-center gap-4 shadow-2xl transition-all duration-300 group cursor-text relative overflow-hidden">
                  
                  {/* Fixed: Input background is solid white for contrast, button is solid orange */}
                  <Search size={20} className="text-brand-dark/40 z-10" />
                  <span className="text-brand-dark/40 text-base flex-1 text-left font-light z-10 hidden sm:block">Introduzca su dirección...</span>
                  <span className="text-brand-dark/40 text-base flex-1 text-left font-light z-10 sm:hidden">Dirección...</span>
                  
                  {/* UPDATED BUTTON: Orange BG, White Text */}
                  <Button size="md" className="shrink-0 bg-brand-orange text-white hover:bg-brand-dark hover:text-white border-none shadow-lg py-3 px-8 z-10">
                    CALCULAR
                  </Button>
               </div>
               
               <div className="flex items-center gap-6 text-[10px] md:text-xs text-white/30 tracking-widest uppercase font-semibold">
                  <span className="flex items-center gap-2"><div className="w-1 h-1 bg-green-500 rounded-full"></div> 100% Gratuito</span>
                  <span className="flex items-center gap-2"><div className="w-1 h-1 bg-brand-orange rounded-full"></div> Confidencial</span>
               </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Helper Component for Floating UI Cards
interface FloatingCardProps {
  className?: string;
  icon: React.ReactNode;
  label: string;
  value: string;
  delay: number;
  xOffset?: number;
  parallax?: any;
}

const FloatingCard: React.FC<FloatingCardProps> = ({ className, icon, label, value, delay, xOffset = 0, parallax }) => (
  <motion.div 
    initial={{ y: 20, opacity: 0, x: xOffset }}
    whileInView={{ y: 0, opacity: 1, x: 0 }}
    transition={{ delay, duration: 1, type: "spring" }}
    style={parallax}
    className={`bg-white/5 backdrop-blur-xl border border-white/10 p-3 pr-6 rounded-2xl flex items-center gap-4 shadow-2xl pointer-events-none select-none z-20 hover:bg-white/10 transition-colors ${className}`}
  >
    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-white/10 to-transparent border border-white/5 flex items-center justify-center shadow-inner">
      {icon}
    </div>
    <div className="text-left">
      <p className="text-[9px] uppercase tracking-wider text-white/40 font-bold mb-0.5">{label}</p>
      <p className="text-white font-sans font-medium text-sm leading-none">{value}</p>
    </div>
  </motion.div>
);

export default ValuationSection;