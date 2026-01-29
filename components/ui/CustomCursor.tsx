import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Check if hovering over interactive elements
      if (
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.closest('button') ||
        target.closest('a') ||
        target.tagName === 'SELECT' ||
        target.classList.contains('cursor-pointer') ||
        target.tagName === 'INPUT'
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", mouseMove);
    window.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [isVisible]);

  // Hide cursor on touch devices strictly via JS check too
  if (typeof navigator !== 'undefined' && navigator.maxTouchPoints > 0) return null;

  return (
    <>
      {/* Main Dot - Solid Orange */}
      <motion.div
        className="fixed top-0 left-0 w-2.5 h-2.5 bg-brand-orange rounded-full pointer-events-none z-[9999] shadow-[0_0_10px_rgba(192,77,24,0.5)]"
        animate={{
          x: mousePosition.x - 5,
          y: mousePosition.y - 5,
          scale: isVisible ? (isHovering ? 0.5 : 1) : 0,
          opacity: isVisible ? 1 : 0
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.1 }}
      />
      
      {/* Follower Ring - Orange Border */}
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 border border-brand-orange rounded-full pointer-events-none z-[9998]"
        animate={{
          x: mousePosition.x - 20,
          y: mousePosition.y - 20,
          scale: isVisible ? (isHovering ? 1.5 : 1) : 0,
          opacity: isVisible ? (isHovering ? 1 : 0.4) : 0,
          backgroundColor: isHovering ? 'rgba(192, 77, 24, 0.05)' : 'transparent',
          borderColor: isHovering ? 'rgba(192, 77, 24, 0.8)' : 'rgba(192, 77, 24, 0.3)'
        }}
        transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      />
    </>
  );
};

export default CustomCursor;