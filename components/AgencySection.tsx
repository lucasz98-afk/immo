import React from 'react';
import { Reveal } from './ui/Reveal';
import { Download, Anchor, ShieldCheck, Gem, Building2, MapPin } from 'lucide-react';
import Button from './ui/Button';
import { motion } from 'framer-motion';

const AgencySection: React.FC = () => {
  return (
    <section id="services" className="py-24 md:py-40 bg-brand-cream relative overflow-hidden">
      {/* Background Watermark - Heritage */}
      <div className="absolute top-20 left-[-5%] text-[15rem] md:text-[25rem] font-serif text-brand-dark/[0.03] select-none pointer-events-none leading-none z-0">
        1975
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20 items-end">
          <div className="lg:col-span-7">
            <Reveal>
              <div className="flex items-center gap-3 mb-6">
                <span className="h-[1px] w-12 bg-brand-orange"></span>
                <span className="text-brand-orange text-xs font-bold tracking-[0.3em] uppercase">La Agencia</span>
              </div>
              <h2 className="text-5xl md:text-7xl lg:text-8xl font-serif text-brand-dark leading-[0.9] tracking-tight">
                Tradición & <br />
                <span className="italic text-brand-gray/50">Vanguardia.</span>
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-5">
            <Reveal delay={0.2}>
              <p className="text-lg md:text-xl text-brand-dark/80 font-serif leading-relaxed border-l-2 border-brand-orange/30 pl-6">
                "Desde 1975, transformando el sueño de vivir en la Venecia española en una realidad tangible y segura."
              </p>
            </Reveal>
          </div>
        </div>

        {/* Main Content Grid - Broken Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          
          {/* Left Column: Visuals & Trust Signals */}
          <div className="lg:col-span-5 relative">
            <Reveal delay={0.3}>
              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl group">
                <div className="absolute inset-0 bg-brand-dark/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <motion.img 
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.8 }}
                  src="https://www.immocenterempuriabrava.com/sites/default/files/inline-images/immocenter-services_0.jpeg" 
                  alt="Immocenter Team & Office" 
                  className="w-full aspect-[3/4] object-cover"
                />
                
                {/* Floating Stats Card */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-6 rounded-xl border border-white z-20 shadow-lg">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-3xl font-serif text-brand-dark">2.000+</p>
                      <p className="text-[10px] uppercase tracking-widest text-brand-gray font-bold">Propiedades en Cartera</p>
                    </div>
                    <div className="h-10 w-[1px] bg-brand-dark/10"></div>
                    <div>
                      <p className="text-3xl font-serif text-brand-dark">48</p>
                      <p className="text-[10px] uppercase tracking-widest text-brand-gray font-bold">Años de Historia</p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* CBRAI Badge - Trust Signal */}
            <Reveal delay={0.5}>
              <div className="mt-8 flex items-start gap-4 p-6 bg-white rounded-2xl border border-brand-dark/5 shadow-sm">
                {/* UPDATED: White background for icon, with border to define it */}
                <div className="p-3 bg-white border border-gray-100 text-brand-orange rounded-full shrink-0 shadow-sm">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-brand-dark text-sm uppercase tracking-wide mb-1">Garantía Certificada</h4>
                  <p className="text-sm text-brand-dark/60 leading-relaxed">
                    Miembro oficial de la asociación inmobiliaria <strong className="text-brand-dark">CBRAI</strong>. Trabajamos en estrecha colaboración con la red más prestigiosa de la Costa Brava.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Editorial Content */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-12">
            
            {/* Intro Text */}
            <Reveal delay={0.4}>
              <div className="space-y-6">
                <h3 className="text-2xl font-serif text-brand-dark">
                  Immobiliaria Empuriabrava: <span className="text-brand-orange">Casas, Villas & Pisos.</span>
                </h3>
                <p className="text-brand-dark/70 font-light leading-relaxed text-lg">
                  Immo Center Empuriabrava se ha convertido en una de las mayores agencias de propiedades responsables de la venta y alquiler de bienes, marinas, villas y apartamentos en <strong className="font-medium text-brand-dark">Ampuriabrava, Castellón de Ampurias y Fortià</strong>.
                </p>
                <p className="text-brand-dark/70 font-light leading-relaxed text-sm">
                  ¿Busca una casa de vacaciones, una villa, un estudio o apartamento en venta o alquiler? Nuestra base de datos contiene las características de productos que cumplen con los requisitos más exigentes.
                </p>
              </div>
            </Reveal>

            {/* Specialization Grid (Bento Style) */}
            <Reveal delay={0.6}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-5 bg-white rounded-2xl border border-brand-dark/5 hover:border-brand-orange/50 hover:shadow-lg transition-all duration-300 group">
                  <Anchor className="text-brand-orange mb-3 group-hover:scale-110 transition-transform" size={24} />
                  <h5 className="font-bold text-brand-dark text-xs uppercase tracking-widest mb-1">Especialistas en Amarres</h5>
                  <p className="text-xs text-brand-gray">Casas con acceso directo al canal.</p>
                </div>
                <div className="p-5 bg-white rounded-2xl border border-brand-dark/5 hover:border-brand-orange/50 hover:shadow-lg transition-all duration-300 group">
                  <Gem className="text-brand-orange mb-3 group-hover:scale-110 transition-transform" size={24} />
                  <h5 className="font-bold text-brand-dark text-xs uppercase tracking-widest mb-1">Villas de Lujo</h5>
                  <p className="text-xs text-brand-gray">Propiedades exclusivas con piscina.</p>
                </div>
                <div className="p-5 bg-white rounded-2xl border border-brand-dark/5 hover:border-brand-orange/50 hover:shadow-lg transition-all duration-300 group">
                  <Building2 className="text-brand-orange mb-3 group-hover:scale-110 transition-transform" size={24} />
                  <h5 className="font-bold text-brand-dark text-xs uppercase tracking-widest mb-1">Inversión</h5>
                  <p className="text-xs text-brand-gray">Locales comerciales y solares.</p>
                </div>
                <div className="p-5 bg-white rounded-2xl border border-brand-dark/5 hover:border-brand-orange/50 hover:shadow-lg transition-all duration-300 group">
                  <MapPin className="text-brand-orange mb-3 group-hover:scale-110 transition-transform" size={24} />
                  <h5 className="font-bold text-brand-dark text-xs uppercase tracking-widest mb-1">Ubicación Prime</h5>
                  <p className="text-xs text-brand-gray">Castelló d'Empúries & Fortià.</p>
                </div>
              </div>
            </Reveal>

            {/* CTA Section */}
            <Reveal delay={0.8}>
              <div className="pt-6 border-t border-brand-dark/10 mt-6">
                <p className="text-sm text-brand-dark/60 mb-6 italic">
                  "Introduzca su presupuesto y deseos, o busque en nuestras Ofertas Especiales para comprar su amarre, villa, casa o apartamento."
                </p>
                <div className="flex flex-col sm:flex-row gap-6 items-center">
                  <Button 
                    variant="primary" 
                    size="lg" 
                    icon={<Download size={20} />}
                    className="w-full sm:w-auto shadow-xl shadow-brand-orange/20"
                  >
                    DESCARGUE LA GUÍA
                  </Button>
                  <a href="#contact" className="group flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-brand-dark hover:text-brand-orange transition-colors">
                    <span>Contactar con la agencia</span>
                    <span className="w-8 h-[1px] bg-brand-dark group-hover:bg-brand-orange transition-colors"></span>
                  </a>
                </div>
              </div>
            </Reveal>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AgencySection;