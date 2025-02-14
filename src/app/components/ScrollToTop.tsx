'use client';

import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed right-8 p-3 rounded-full bg-black/50 backdrop-blur-sm border border-white/10 text-white transition-all duration-300 hover:scale-110 hover:bg-black/70 hover:border-neon-cyan hover:shadow-[0_0_15px_rgba(0,255,255,0.5)] z-[9999] bottom-[14.5rem] md:bottom-[7rem] ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      aria-label="Scroll to top"
    >
      <ArrowUp className="w-6 h-6" />
    </button>
  );
};

export default ScrollToTop;