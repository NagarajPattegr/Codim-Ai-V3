import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="workflow" className="pt-32 pb-16 md:pt-40 md:pb-20 px-6 bg-white flex flex-col items-center relative overflow-hidden">
      {/* Dynamic Background Path */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] select-none">
        <svg className="w-full h-full" viewBox="0 0 1440 1000" preserveAspectRatio="none">
          <path d="M0,200 C400,100 800,900 1440,200" stroke="#161616" strokeWidth="60" fill="none" className="animate-shimmer" />
        </svg>
      </div>

      <div className="max-w-5xl text-center mb-20 z-10 px-4">
        <div className="reveal-advanced">
          <span className="text-wispr-purple font-black tracking-[0.5em] uppercase text-[12px] mb-8 block bg-wispr-purple/10 w-fit mx-auto px-6 py-2 rounded-full">Engineering Lifecycle</span>
          <h2 className="font-lander text-6xl md:text-[9rem] font-bold mb-12 leading-[0.8] tracking-tighter">
            One continuous flow.<br />
            <span className="text-slate-300">13 Stages of Growth.</span>
          </h2>
          <p className="text-xl md:text-2xl text-slate-500 max-w-2xl mx-auto font-medium leading-relaxed font-sodo">
            A comprehensive, automated sales architecture that bridges the gap between your tools and your revenue.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;