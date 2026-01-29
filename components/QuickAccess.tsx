import React from 'react';
import { Home, Key, TrendingUp, BookOpen, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const QuickAccess: React.FC = () => {
  const actions = [
    {
      icon: <Home size={32} />,
      title: "Comprar Propiedad",
      desc: "Villas, Casas y Apartamentos",
      href: "#sales",
      delay: 0
    },
    {
      icon: <Key size={32} />,
      title: "Alquiler Vacacional",
      desc: "Estancias inolvidables",
      href: "#rentals",
      delay: 0.1
    },
    {
      icon: <TrendingUp size={32} />,
      title: "Vender mi Casa",
      desc: "Valoración gratuita",
      href: "#valuation",
      delay: 0.2
    },
    {
      icon: <BookOpen size={32} />,
      title: "Noticias & Blog",
      desc: "Actualidad inmobiliaria",
      href: "#news",
      delay: 0.3
    }
  ];

  return (
    <section className="bg-white py-12 border-b border-gray-100 relative z-30 -mt-10 rounded-t-[40px]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between mb-8">
           <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-brand-gray/60">Accesos Directos</span>
           <span className="hidden md:block w-full h-[1px] bg-gray-100 ml-6"></span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {actions.map((action, index) => (
            <motion.a 
              key={index}
              href={action.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: action.delay, duration: 0.5 }}
              className="group p-6 rounded-2xl bg-brand-cream/50 border border-brand-dark/5 hover:border-brand-orange/30 hover:bg-white hover:shadow-lg transition-all duration-300 flex flex-col items-start gap-4"
            >
              <div className="w-14 h-14 rounded-full bg-white text-brand-dark flex items-center justify-center border border-gray-100 group-hover:bg-brand-orange group-hover:text-white transition-colors duration-300 shadow-sm">
                {action.icon}
              </div>
              <div>
                <h3 className="font-serif text-xl text-brand-dark font-medium leading-tight mb-1 group-hover:text-brand-orange transition-colors">
                  {action.title}
                </h3>
                <p className="text-sm text-brand-gray/70">{action.desc}</p>
              </div>
              <div className="mt-2 w-8 h-8 rounded-full border border-brand-dark/10 flex items-center justify-center text-brand-dark/30 group-hover:border-brand-orange group-hover:text-brand-orange transition-all">
                <ArrowRight size={14} className="-rotate-45 group-hover:rotate-0 transition-transform duration-300" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickAccess;