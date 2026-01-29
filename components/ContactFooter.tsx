import React from 'react';
import { Instagram, Facebook, ArrowUpRight, Send, MapPin, Phone, Mail } from 'lucide-react';
import Button from './ui/Button';

const ContactFooter: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    // Container wrapper to handle the "floating" spacing
    <div className="px-4 pb-4 md:px-6 md:pb-6 pt-20 bg-brand-cream relative z-20">
      
      {/* Floating Footer Card */}
      <footer id="contact" className="bg-brand-charcoal rounded-[2.5rem] md:rounded-[4rem] overflow-hidden text-white relative shadow-2xl">
        
        {/* Top Gradient Accent */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-orange via-purple-500 to-brand-orange opacity-50" />
        
        {/* Background Noise/Texture */}
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] pointer-events-none" />

        {/* Main Content */}
        <div className="px-8 py-16 md:px-16 md:py-20 lg:px-24">
           
           <div className="flex flex-col lg:flex-row lg:justify-between gap-16 lg:gap-24 mb-24">
              
              {/* Left Column: Brand & CTA */}
              <div className="lg:w-1/2 space-y-12">
                 <div className="space-y-6">
                    {/* UPDATED: Footer Logo */}
                    <img 
                       src="https://nexto.agency/wp-content/uploads/2026/01/logo.png" 
                       alt="Immocenter" 
                       className="h-16 w-auto object-contain brightness-0 invert mb-8 opacity-90"
                    />
                    
                    <h2 className="text-5xl md:text-7xl lg:text-8xl font-serif leading-[0.9] tracking-tight">
                       Let's build <br/>
                       <span className="text-brand-gray italic">your dream.</span>
                    </h2>
                 </div>
                 
                 <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                    <Button variant="primary" size="lg" className="!bg-white !text-brand-dark hover:!bg-brand-orange hover:!text-white !px-10 !py-5 shadow-2xl shadow-white/10">
                       Hablemos
                    </Button>
                    <div className="flex -space-x-4 ml-4">
                       {[1,2,3].map(i => (
                          <div key={i} className="w-12 h-12 rounded-full border-2 border-brand-charcoal bg-gray-600 overflow-hidden">
                             <img src={`https://randomuser.me/api/portraits/men/${i+20}.jpg`} className="w-full h-full object-cover" />
                          </div>
                       ))}
                       <div className="w-12 h-12 rounded-full border-2 border-brand-charcoal bg-brand-orange flex items-center justify-center text-xs font-bold z-10">
                          +5
                       </div>
                    </div>
                    <span className="text-sm text-gray-400 ml-2">Agentes disponibles</span>
                 </div>
              </div>

              {/* Right Column: Navigation & Contacts */}
              <div className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-12">
                 
                 <div className="space-y-8">
                    <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-brand-orange mb-6">Oficina Central</h4>
                    <div className="space-y-6">
                       <a href="#" className="group flex items-start gap-4 text-gray-400 hover:text-white transition-colors">
                          <MapPin className="shrink-0 mt-1 text-brand-orange" size={20} />
                          <span className="leading-relaxed group-hover:underline decoration-brand-orange decoration-1 underline-offset-4">Edificio IMMOCENTER<br/>Bahía 94 B<br/>17487 Empuriabrava</span>
                       </a>
                       <a href="tel:+34972451450" className="group flex items-center gap-4 text-gray-400 hover:text-white transition-colors">
                          <Phone className="shrink-0 text-brand-orange" size={20} />
                          <span className="text-xl font-serif text-white group-hover:text-brand-orange transition-colors">00 34 972 451 450</span>
                       </a>
                       <a href="mailto:info@immocenter.es" className="group flex items-center gap-4 text-gray-400 hover:text-white transition-colors">
                          <Mail className="shrink-0 text-brand-orange" size={20} />
                          <span>info@immocenter.es</span>
                       </a>
                    </div>
                 </div>

                 <div className="space-y-8">
                    <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-brand-orange mb-6">Menu</h4>
                    <ul className="space-y-4">
                       {['Propiedades', 'Alquiler', 'Servicios', 'Valoración', 'Blog'].map((item) => (
                          <li key={item}>
                             <a href="#" className="text-2xl font-serif text-gray-500 hover:text-white hover:pl-4 transition-all duration-300 block">
                                {item}
                             </a>
                          </li>
                       ))}
                    </ul>
                 </div>

              </div>
           </div>

           {/* Bottom Bar */}
           <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="text-gray-500 text-xs tracking-wider uppercase flex gap-6">
                 <span>© 2024 Immocenter</span>
                 <a href="#" className="hover:text-white transition-colors">Privacidad</a>
                 <a href="#" className="hover:text-white transition-colors">Legal</a>
              </div>

              <div className="flex items-center gap-4">
                 <SocialButton icon={<Instagram size={18} />} />
                 <SocialButton icon={<Facebook size={18} />} />
                 <button 
                    onClick={scrollToTop}
                    className="ml-4 px-6 py-3 rounded-full border border-white/20 text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-brand-charcoal transition-all duration-300 group"
                 >
                    Volver Arriba <span className="inline-block ml-1 group-hover:-translate-y-1 transition-transform">↑</span>
                 </button>
              </div>
           </div>

        </div>
      </footer>
    </div>
  );
};

const SocialButton = ({ icon }: { icon: React.ReactNode }) => (
  <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-brand-orange hover:scale-110 transition-all duration-300">
    {icon}
  </a>
);

export default ContactFooter;