import React, { useEffect, useRef, useState } from 'react';
import type { SalesTool } from '../../types';
import { getIcon } from '../../constants';
import AnimatedMockUI from './AnimatedMockUI';
import { ArrowRight, Sparkles } from 'lucide-react';

interface ToolSectionProps {
    tool: SalesTool;
    index: number;
    forceTheme?: 'light' | 'dark' | 'cream';
    onBookDemo?: () => void;
}

const ToolSection: React.FC<ToolSectionProps> = ({ tool, index, forceTheme, onBookDemo }) => {
    const themes = ['light', 'cream', 'dark'];
    const currentTheme = forceTheme || themes[index % themes.length];
    const isEven = index % 2 === 0;
    const sectionRef = useRef<HTMLElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.15 }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    const bgStyles = {
        light: 'bg-white',
        cream: 'bg-[#fbfaf2]',
        dark: 'bg-[#161616] text-white'
    };

    const textSecondaryStyles = {
        light: 'text-slate-400',
        cream: 'text-slate-400',
        dark: 'text-white/30'
    };

    return (
        <section
            ref={sectionRef}
            id={tool.id}
            className={`w-full py-12 md:py-20 border-b border-black/5 transition-all duration-1000 relative z-10 overflow-hidden ${bgStyles[currentTheme as keyof typeof bgStyles]}`}
        >
            <div className={`max-w-7xl mx-auto px-6 flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-24 lg:gap-32`}>

                {/* Staged Content Column */}
                <div className="w-full lg:w-1/2">

                    {/* 1. Category Tag */}
                    <div className="mb-12 overflow-hidden">
                        <div className={`inline-flex items-center gap-3 px-7 py-3 rounded-full border shadow-sm transition-all duration-1000 cubic-bezier(0.19, 1, 0.22, 1) ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'} ${currentTheme === 'dark'
                            ? 'bg-white/5 border-white/10 text-white'
                            : 'bg-[#161616] text-white border-black/10'
                            }`}>
                            <div className="p-1 rounded-md bg-[#8B5CF6] text-black transition-transform duration-700 hover:rotate-12">
                                {getIcon(tool.iconName, 14)}
                            </div>
                            <span className="font-brand text-[11px] font-black uppercase tracking-[0.4em]">{tool.category}</span>
                        </div>
                    </div>

                    {/* 2. Main Title - Big Descender Staging */}
                    <div className="overflow-hidden mb-10">
                        <h2 className={`font-lander text-5xl md:text-8xl lg:text-[7rem] font-bold tracking-tighter leading-[0.8] transition-all duration-1000 delay-100 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-[1.2em] opacity-0'} ${currentTheme === 'dark' ? 'text-white' : 'text-[#161616]'}`}>
                            {tool.title}
                        </h2>
                    </div>

                    {/* 3. Hook Quote */}
                    <div className="overflow-hidden mb-16">
                        <p className={`font-lander text-xl md:text-3xl font-medium italic leading-relaxed transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'} ${textSecondaryStyles[currentTheme as keyof typeof textSecondaryStyles]}`}>
                            "{tool.hook}"
                        </p>
                    </div>

                    {/* 4. Benefits List - Staggered point-by-point reveal */}
                    <div className="space-y-10 font-sodo mb-24">
                        {tool.benefits.map((benefit, i) => (
                            <div
                                key={i}
                                className={`flex items-start gap-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}
                                style={{ transitionDelay: `${400 + i * 200}ms` }}
                            >
                                <div className="w-4 h-4 rounded-full bg-[#8B5CF6] mt-2.5 shrink-0 shadow-[0_0_20px_rgba(139,92,246,0.6)] animate-pulse" style={{ animationDelay: `${i * 0.4}s` }}></div>
                                <span className={`text-xl md:text-2xl font-bold leading-snug transition-all duration-500 hover:text-[#8B5CF6] cursor-default ${currentTheme === 'dark' ? 'text-white/60' : 'text-slate-600'
                                    }`}>{benefit}</span>
                            </div>
                        ))}
                    </div>

                    {/* 5. CTA Button - Final Stage Lift */}
                    <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`} style={{ transitionDelay: '1200ms' }}>
                        <button
                            onClick={onBookDemo}
                            className={`px-8 md:px-14 py-5 md:py-9 rounded-2xl md:rounded-[3rem] font-black font-brand text-[11px] md:text-[13px] uppercase tracking-[0.3em] md:tracking-[0.4em] transition-all flex items-center justify-center lg:justify-start gap-4 md:gap-8 group active:scale-95 shadow-2xl relative overflow-hidden w-full sm:w-auto ${currentTheme === 'dark'
                                ? 'bg-white text-[#161616] hover:bg-[#8B5CF6]'
                                : 'bg-[#161616] text-white hover:bg-black'
                                }`}>
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-[1500ms]"></div>
                            <span>Explore {tool.name} Architecture</span>
                            <ArrowRight size={20} className="md:w-6 md:h-6 group-hover:translate-x-4 transition-transform" />
                        </button>
                    </div>
                </div>

                {/* 6. Visual Column - Huge Staged Entry */}
                <div className={`w-full lg:w-1/2 relative transition-all duration-[1400ms] delay-500 transform-gpu ${isVisible ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-90 translate-y-64'}`}>
                    <div className={`absolute -inset-40 blur-[180px] rounded-full transition-all duration-[2500ms] ${isVisible ? 'opacity-100 scale-125' : 'opacity-0 scale-50'} ${currentTheme === 'dark' ? 'bg-[#8B5CF6]/20' : 'bg-[#8B5CF6]/15'}`}></div>

                    <AnimatedMockUI
                        toolName={tool.name}
                        className="relative z-10"
                        theme={currentTheme === 'dark' ? 'dark' : 'light'}
                    />

                    {/* Floatie Icons */}
                    <div className={`absolute -top-24 -right-16 w-40 h-40 border border-[#8B5CF6]/15 rounded-full flex items-center justify-center transition-all duration-1000 delay-[1.5s] ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}>
                        <Sparkles className="text-[#8B5CF6]/30 animate-pulse" size={48} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ToolSection;
