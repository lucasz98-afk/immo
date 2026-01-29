import React from 'react';
import { motion } from 'framer-motion';
import Magnetic from './Magnetic';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'outline' | 'ghost' | 'glass';
  className?: string;
  onClick?: () => void;
  icon?: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
}

const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', className = '', onClick, icon, size = 'md' }) => {
  const baseStyles = "relative overflow-hidden rounded-full font-medium transition-all duration-300 flex items-center justify-center gap-3 group z-10";
  
  const sizeStyles = {
    sm: "px-6 py-2 text-sm",
    md: "px-8 py-3.5 text-sm tracking-wide",
    lg: "px-10 py-5 text-base tracking-wide",
  };

  const variants = {
    primary: "bg-brand-orange text-white shadow-lg hover:shadow-brand-orange/40",
    outline: "border border-brand-dark/20 text-brand-dark hover:bg-brand-dark hover:text-white hover:border-brand-dark",
    ghost: "text-brand-dark hover:text-brand-orange",
    glass: "bg-white/10 backdrop-blur-md text-brand-dark border border-white/40 hover:bg-white/30 hover:border-white/60 shadow-glass"
  };

  return (
    <Magnetic>
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={`${baseStyles} ${sizeStyles[size]} ${variants[variant]} ${className}`}
        onClick={onClick}
      >
        <span className="relative z-10 flex items-center gap-2">
          {children}
          {icon && <span className="transition-transform duration-300 group-hover:translate-x-1">{icon}</span>}
        </span>
      </motion.button>
    </Magnetic>
  );
};

export default Button;