import React, { useState, useEffect } from 'react';
import { Calendar, ArrowRight } from 'lucide-react';

interface StickyBarProps {
  onBookDemo?: () => void;
}

const StickyBar: React.FC<StickyBarProps> = ({ onBookDemo }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Appear after 500px, but hide if scrolling up or at the very top
      if (currentScrollY > 500 && currentScrollY > lastScrollY) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <div className={`fixed bottom-10 left-0 right-0 z-50 flex justify-center pointer-events-none transition-all duration-1000 ease-[cubic-bezier(0.19,1,0.22,1)] ${isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-32 opacity-0 scale-90'
      }`}>
      <button
        type="button"
        onClick={onBookDemo}
        className="pointer-events-auto bg-wispr-dark/80 backdrop-blur-2xl text-white px-5 sm:px-8 py-3 sm:py-4 rounded-[2rem] flex items-center gap-3 sm:gap-6 shadow-[0_30px_70px_rgba(0,0,0,0.4)] hover:scale-105 hover:bg-wispr-dark transition-all duration-300 border border-white/10 active:scale-95 group"
      >
        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-wispr-purple rounded-[1rem] flex items-center justify-center text-wispr-dark shadow-2xl transition-transform group-hover:rotate-12">
          <Calendar size={20} strokeWidth={3} />
        </div>
        <div className="flex flex-col items-center leading-tight">
          <span className="font-brand font-black text-[11px] sm:text-sm tracking-tight text-center">CodimAI Labs</span>
          <span className="font-brand text-[8px] sm:text-[9px] opacity-40 uppercase tracking-[0.3em] mt-1 text-center">Free Pipeline Audit</span>
        </div>
        <div className="w-[1.5px] h-6 bg-white/10 mx-1 sm:mx-0"></div>
        <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform opacity-60 group-hover:opacity-100" />
      </button>
    </div>
  );
};

export default StickyBar;