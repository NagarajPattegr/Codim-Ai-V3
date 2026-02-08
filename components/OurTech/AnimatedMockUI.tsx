import React, { useState, useEffect, useMemo } from 'react';
import {
    CheckCircle2, ShieldCheck,
    Cpu, Search,
    Mail, Calendar,
    CreditCard,
    TrendingUp,
    Sparkles, Star, Zap, UserPlus,
    Activity, Target,
    Layout, Heart, Share2
} from 'lucide-react';

interface AnimatedMockUIProps {
    toolName: string;
    className?: string;
    theme?: 'light' | 'dark';
}

const AnimatedMockUI: React.FC<AnimatedMockUIProps> = ({ toolName, className = "", theme = 'light' }) => {
    const isDark = theme === 'dark';
    const [activeStep, setActiveStep] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveStep((prev) => (prev + 1) % 4);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const variant = useMemo(() => {
        const name = toolName.toLowerCase();
        if (name.includes('geo')) return 'geo';
        if (name.includes('apollo')) return 'apollo';
        if (name.includes('clay')) return 'clay';
        if (name.includes('brevo')) return 'brevo';
        if (name.includes('calendly')) return 'calendly';
        if (name.includes('gamma')) return 'gamma';
        if (name.includes('airtable')) return 'airtable';
        if (name.includes('stripe')) return 'stripe';
        if (name.includes('notion')) return 'notion';
        if (name.includes('tally')) return 'tally';
        if (name.includes('hubspot')) return 'hubspot';
        if (name.includes('analytics')) return 'analytics';
        if (name.includes('hub') || name.includes('automation')) return 'hub';
        return 'default';
    }, [toolName]);

    const renderContent = () => {
        switch (variant) {
            case 'hubspot':
                return (
                    <div className="relative z-10 flex flex-col items-center gap-12 w-full max-w-[420px]">
                        <div className="w-full h-[220px] bg-white/90 backdrop-blur-2xl rounded-[3.5rem] p-12 shadow-[0_50px_120px_rgba(0,0,0,0.1)] border border-white flex items-center justify-between relative group/card transition-transform duration-700 hover:scale-105">
                            <div className="w-24 h-24 bg-wispr-purple/10 rounded-[2rem] flex items-center justify-center text-wispr-purple shadow-inner">
                                <Cpu size={48} strokeWidth={2.5} />
                            </div>
                            <div className="flex-1 ml-10 space-y-6">
                                <div className="w-full h-4 bg-slate-100/50 rounded-full overflow-hidden relative">
                                    <div
                                        className="absolute inset-y-0 left-0 bg-wispr-purple transition-all duration-1000 cubic-bezier(0.19, 1, 0.22, 1)"
                                        style={{ width: activeStep % 2 === 0 ? '35%' : '75%' }}
                                    ></div>
                                </div>
                                <div className="w-2/3 h-4 bg-slate-50 rounded-full opacity-60"></div>
                            </div>
                            <div className="absolute -top-4 -right-4 w-12 h-12 bg-white rounded-full shadow-lg border border-slate-50 flex items-center justify-center animate-bounce">
                                <TrendingUp size={18} className="text-emerald-500" />
                            </div>
                        </div>

                        <button className="bg-gradient-to-r from-emerald-500 to-teal-400 text-wispr-dark px-12 py-5 rounded-full font-brand font-black text-[11px] uppercase tracking-[0.4em] shadow-[0_20px_50px_rgba(16,185,129,0.3)] animate-pulse hover:scale-105 transition-transform active:scale-95 border border-white/20">
                            Live Sync Active
                        </button>
                    </div>
                );

            case 'clay':
                return (
                    <div className="relative z-10 flex flex-col items-center gap-4 group/clay transform hover:scale-105 transition-transform duration-700 w-full max-w-[480px]">
                        {/* Browser Mockup - Matches Screenshot */}
                        <div className="w-full bg-white/60 backdrop-blur-xl rounded-[3rem] shadow-[0_60px_120px_rgba(0,0,0,0.1)] border border-white/80 overflow-hidden">
                            {/* Window Controls */}
                            <div className="px-10 py-5 flex gap-2 border-b border-slate-100/50 bg-slate-50/30">
                                <div className="w-3 h-3 rounded-full bg-slate-200"></div>
                                <div className="w-3 h-3 rounded-full bg-slate-200"></div>
                                <div className="w-3 h-3 rounded-full bg-slate-200"></div>
                            </div>

                            <div className="p-12">
                                {/* Header Profile - Matches Screenshot */}
                                <div className="flex items-center gap-6 mb-12">
                                    <div className="w-16 h-16 bg-[#e6fcf5] rounded-[1.5rem] flex items-center justify-center text-[#20c997] shadow-sm">
                                        <UserPlus size={32} />
                                    </div>
                                    <div className="space-y-2.5 flex-1">
                                        <div className="h-3 w-40 bg-slate-100/80 rounded-full"></div>
                                        <div className="h-2 w-24 bg-slate-50 rounded-full"></div>
                                    </div>
                                </div>

                                {/* Data Rows - Matches Screenshot */}
                                <div className="space-y-4">
                                    {[1, 2, 3].map(i => (
                                        <div
                                            key={i}
                                            className={`flex items-center justify-between p-6 bg-white/90 rounded-[2rem] border border-slate-50 shadow-sm transition-all duration-700 ${activeStep >= i - 1 ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                                                }`}
                                            style={{ transitionDelay: `${i * 150}ms` }}
                                        >
                                            <div className="flex items-center gap-6 flex-1">
                                                <div className={`w-3.5 h-3.5 rounded-full ${activeStep >= i - 1 ? 'bg-[#20c997] shadow-[0_0_10px_rgba(32,201,151,0.5)]' : 'bg-slate-100'}`}></div>
                                                <div className="h-2.5 w-3/4 bg-slate-100/60 rounded-full"></div>
                                            </div>
                                            <div className={`h-8 w-20 rounded-full ${activeStep >= i - 1 ? 'bg-[#e6fcf5]' : 'bg-slate-50'} transition-colors`}></div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                );

            case 'brevo':
                return (
                    <div className="relative z-10 flex flex-col items-center gap-8 w-full max-w-[400px]">
                        <div className="w-full bg-white rounded-[3rem] p-10 shadow-2xl border border-slate-100">
                            <div className="flex items-center gap-5 mb-10 pb-6 border-b border-slate-50">
                                <div className="w-12 h-12 bg-blue-50 text-blue-500 rounded-xl flex items-center justify-center"><Mail size={24} /></div>
                                <div className="flex-1 h-3 bg-slate-100 rounded-full"></div>
                            </div>
                            <div className="space-y-6">
                                {[1, 2].map(i => (
                                    <div key={i} className={`p-6 rounded-2xl border transition-all duration-700 ${activeStep >= i ? 'bg-blue-50/50 border-blue-100 translate-x-4' : 'bg-white border-slate-50'}`}>
                                        <div className="flex justify-between items-center">
                                            <div className="w-32 h-2 bg-slate-200 rounded-full"></div>
                                            <div className={`w-3 h-3 rounded-full ${activeStep >= i ? 'bg-blue-400 animate-ping' : 'bg-slate-100'}`}></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                );

            case 'gamma':
                return (
                    <div className="relative z-10 grid grid-cols-2 gap-6 w-full max-w-[440px]">
                        {[1, 2, 3].map(i => (
                            <div key={i} className={`aspect-[4/3] bg-white rounded-[2rem] border border-slate-100 shadow-xl p-6 transition-all duration-1000 ${activeStep === i - 1 ? 'scale-110 -translate-y-4 ring-4 ring-fuchsia-100 z-20' : 'opacity-40 grayscale'}`}>
                                <div className="w-10 h-10 bg-fuchsia-50 text-fuchsia-500 rounded-lg mb-4 flex items-center justify-center"><Layout size={20} /></div>
                                <div className="space-y-2">
                                    <div className="h-2 w-full bg-slate-100 rounded-full"></div>
                                    <div className="h-2 w-3/4 bg-slate-50 rounded-full"></div>
                                </div>
                            </div>
                        ))}
                    </div>
                );

            case 'airtable':
                return (
                    <div className="relative z-10 flex gap-6 w-full max-w-[480px]">
                        {[1, 2, 3].map(col => (
                            <div key={col} className="flex-1 space-y-4">
                                <div className="h-1.5 w-full bg-slate-100 rounded-full mb-6"></div>
                                {[1, 2].map(row => (
                                    <div key={row} className={`p-5 bg-white rounded-2xl border border-slate-50 shadow-md transition-all duration-1000 ${activeStep === (col + row) % 4 ? 'bg-indigo-50 border-indigo-100 -translate-y-2' : ''}`}>
                                        <div className="w-full h-2 bg-slate-50 rounded-full mb-3"></div>
                                        <div className="flex gap-2">
                                            <div className="w-3 h-3 rounded-full bg-slate-100"></div>
                                            <div className="w-8 h-3 rounded-full bg-slate-100"></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                );

            case 'notion':
                return (
                    <div className="relative z-10 w-full max-w-[380px] bg-white rounded-[2.5rem] p-10 shadow-2xl border border-slate-100">
                        <div className="flex items-center gap-4 mb-10 pb-6 border-b">
                            <div className="w-12 h-12 bg-slate-50 text-slate-800 rounded-xl flex items-center justify-center font-black">N</div>
                            <div className="h-4 w-32 bg-slate-100 rounded-full"></div>
                        </div>
                        <div className="space-y-6">
                            {[1, 2, 3, 4].map(i => (
                                <div key={i} className="flex items-center gap-5 group">
                                    <div className={`w-6 h-6 rounded-md border-2 transition-all duration-500 ${activeStep >= i - 1 ? 'bg-slate-800 border-slate-800' : 'border-slate-100'}`}>
                                        {activeStep >= i - 1 && <CheckCircle2 size={16} className="text-white" />}
                                    </div>
                                    <div className={`h-2.5 flex-1 bg-slate-100 rounded-full transition-opacity ${activeStep >= i - 1 ? 'opacity-30 line-through' : 'opacity-100'}`}></div>
                                </div>
                            ))}
                        </div>
                    </div>
                );

            case 'tally':
                return (
                    <div className="relative z-10 flex flex-col items-center gap-10">
                        <div className="bg-white p-12 rounded-[3.5rem] shadow-2xl border border-slate-100 w-full max-w-[400px] text-center">
                            <div className="flex justify-center gap-3 mb-8">
                                {[1, 2, 3, 4, 5].map(i => (
                                    <Star key={i} size={32} className={`transition-all duration-500 ${activeStep >= i - 1 ? 'text-yellow-400 fill-yellow-400 scale-125' : 'text-slate-100'}`} />
                                ))}
                            </div>
                            <div className="space-y-4">
                                <div className="h-3 w-3/4 mx-auto bg-slate-50 rounded-full"></div>
                                <div className="h-3 w-1/2 mx-auto bg-slate-50 rounded-full opacity-50"></div>
                            </div>
                        </div>
                        <div className="bg-teal-500 text-white px-10 py-5 rounded-3xl flex items-center gap-4 shadow-xl animate-float-slow">
                            <Heart size={20} fill="white" />
                            <span className="font-brand font-black text-[11px] uppercase tracking-widest">NPS Score: 9.8</span>
                        </div>
                    </div>
                );

            case 'calendly':
                return (
                    <div className="relative z-10 flex flex-col items-center gap-6">
                        <div className="w-full max-w-[380px] bg-white/90 backdrop-blur-2xl rounded-[3rem] p-8 border border-white shadow-[0_40px_100px_rgba(0,0,0,0.08)] flex items-center justify-between animate-fade-in-up">
                            <div className="flex items-center gap-6">
                                <div className="w-16 h-16 bg-wispr-purple/10 rounded-2xl flex items-center justify-center text-wispr-purple">
                                    <Calendar size={28} />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <div className="w-32 h-2.5 bg-slate-100 rounded-full overflow-hidden">
                                        <div className="h-full bg-wispr-purple transition-all duration-1000" style={{ width: activeStep % 2 === 0 ? '60%' : '100%' }}></div>
                                    </div>
                                    <div className="w-20 h-2 bg-slate-50 rounded-full"></div>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-4 h-4 rounded-full bg-emerald-400 shadow-[0_0_15px_rgba(52,211,153,0.5)] animate-pulse"></div>
                                <ShieldCheck size={20} className="text-slate-200" />
                            </div>
                        </div>
                        <div className="flex gap-4 sm:gap-6 w-full max-w-[380px]">
                            <div className="flex-1 bg-white/90 backdrop-blur-2xl rounded-[2.5rem] p-7 border border-white shadow-xl flex flex-col items-start gap-4 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-blue-50 text-blue-500 rounded-xl flex items-center justify-center"><CheckCircle2 size={20} /></div>
                                    <span className="text-[10px] font-brand font-black text-slate-300 uppercase tracking-widest">Booking</span>
                                </div>
                                <span className="text-lg font-black text-wispr-dark">Available</span>
                            </div>
                            <div className="flex-1 bg-white/90 backdrop-blur-2xl rounded-[2.5rem] p-7 border border-white shadow-xl flex flex-col justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
                                <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
                                    <div className="h-full bg-wispr-purple transition-all duration-1000" style={{ width: '88%' }}></div>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-[10px] font-brand font-black text-slate-300 uppercase tracking-widest">Rate</span>
                                    <span className="text-[12px] font-black text-wispr-purple">88%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                );

            case 'stripe':
                return (
                    <div className="relative z-10 flex flex-col items-center gap-6">
                        <div className={`w-full max-w-[360px] ${isDark ? 'bg-white/10' : 'bg-white'} rounded-[3rem] p-10 border border-white/20 shadow-2xl relative overflow-hidden`}>
                            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-400/10 blur-3xl rounded-full"></div>
                            <div className="flex justify-between items-start mb-12">
                                <div className="w-14 h-14 bg-emerald-500/10 rounded-2xl flex items-center justify-center text-emerald-500">
                                    <CreditCard size={28} />
                                </div>
                                <div className="text-right">
                                    <div className="text-[10px] font-black opacity-30 uppercase tracking-widest mb-1">Status</div>
                                    <div className="text-emerald-500 font-black text-sm">SETTLED</div>
                                </div>
                            </div>
                            <div className="space-y-4 mb-10">
                                <div className="h-4 w-3/4 bg-slate-100/10 rounded-full"></div>
                                <div className="h-4 w-1/2 bg-slate-100/10 rounded-full opacity-50"></div>
                            </div>
                            <div className="flex items-center gap-4 py-6 border-t border-white/5">
                                <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center text-wispr-dark scale-110 shadow-lg animate-bounce">
                                    <CheckCircle2 size={20} strokeWidth={3} />
                                </div>
                                <div className="font-brand font-black text-xl">+$2,497.00</div>
                            </div>
                        </div>
                    </div>
                );

            case 'apollo':
                return (
                    <div className="relative z-10 flex flex-col items-center justify-center">
                        <div className="w-full max-w-[400px] aspect-square rounded-full border border-wispr-purple/10 flex items-center justify-center relative">
                            <div className="absolute inset-0 animate-[spin_10s_linear_infinite]">
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[2px] h-1/2 bg-gradient-to-t from-wispr-purple to-transparent"></div>
                            </div>
                            <div className="w-[300px] h-[300px] rounded-full border border-wispr-purple/5 bg-wispr-purple/[0.02] flex items-center justify-center">
                                {activeStep % 2 === 0 && (
                                    <div className="absolute w-12 h-12 bg-wispr-purple/20 rounded-2xl flex items-center justify-center animate-pulse">
                                        <Target className="text-wispr-purple" size={24} />
                                    </div>
                                )}
                            </div>
                            <div className="absolute bottom-10 right-0 bg-white shadow-2xl p-5 rounded-3xl border border-slate-100 animate-float-slow">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-blue-500"><Search size={20} /></div>
                                    <div>
                                        <div className="text-[9px] font-black opacity-30 uppercase tracking-widest">Lead Identified</div>
                                        <div className="text-sm font-bold">VP Product @ Slack</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                );

            case 'geo':
                return (
                    <div className="relative z-10 flex flex-col items-center gap-8">
                        <div className="grid grid-cols-2 gap-4 w-full max-w-[400px]">
                            {[1, 2, 3, 4].map(i => (
                                <div key={i} className={`p-6 rounded-[2rem] border transition-all duration-700 ${activeStep === i - 1 ? 'bg-wispr-purple text-white scale-105 shadow-2xl' : 'bg-white/80 border-white text-slate-400 opacity-60'}`}>
                                    <div className="flex items-center gap-3 mb-4">
                                        <Cpu size={18} />
                                        <span className="text-[9px] font-black uppercase tracking-widest">Model {i}</span>
                                    </div>
                                    <div className="h-2 w-full bg-current opacity-20 rounded-full mb-2"></div>
                                    <div className="h-2 w-2/3 bg-current opacity-20 rounded-full"></div>
                                </div>
                            ))}
                        </div>
                        <div className="bg-wispr-dark text-white px-8 py-4 rounded-full flex items-center gap-4 shadow-2xl animate-pulse">
                            <Sparkles className="text-wispr-purple" />
                            <span className="font-brand font-black text-xs uppercase tracking-[0.3em]">AI Indexing Live</span>
                        </div>
                    </div>
                );

            case 'analytics':
                return (
                    <div className="relative z-10 flex items-end gap-3 h-[300px]">
                        {[40, 70, 45, 90, 65, 80, 50, 95].map((h, i) => (
                            <div key={i} className="group relative">
                                <div
                                    className={`w-10 bg-wispr-purple/20 rounded-t-xl transition-all duration-1000 origin-bottom ${activeStep === i % 4 ? 'bg-wispr-purple h-[var(--h)] scale-x-110' : 'h-[var(--h-muted)]'}`}
                                    style={{
                                        '--h': `${h}%`,
                                        '--h-muted': `${h * 0.6}%`
                                    } as any}
                                ></div>
                                {activeStep === i % 4 && (
                                    <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-wispr-dark text-white text-[10px] px-3 py-1.5 rounded-lg animate-bounce">
                                        {h}%
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                );

            case 'hub':
                return (
                    <div className="relative z-10 flex items-center justify-center w-full max-w-[400px] aspect-square">
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-[300px] h-[300px] rounded-full border-2 border-dashed border-wispr-purple/20 animate-[spin_20s_linear_infinite]"></div>
                        </div>
                        <div className="w-24 h-24 bg-wispr-dark rounded-3xl flex items-center justify-center text-wispr-purple shadow-2xl z-20 animate-pulse">
                            <Share2 size={40} />
                        </div>
                        {[0, 60, 120, 180, 240, 300].map((deg, i) => (
                            <div
                                key={i}
                                className="absolute w-12 h-12 bg-white rounded-xl shadow-xl border flex items-center justify-center transition-all duration-1000"
                                style={{
                                    transform: `rotate(${deg}deg) translate(${activeStep === i % 4 ? '160px' : '140px'}) rotate(-${deg}deg)`,
                                    opacity: activeStep === i % 4 ? 1 : 0.4
                                }}
                            >
                                {i % 2 === 0 ? <Zap size={20} className="text-wispr-purple" /> : <Activity size={20} className="text-slate-400" />}
                            </div>
                        ))}
                    </div>
                );

            default:
                return (
                    <div className="relative z-10 flex flex-col items-center gap-8 group-hover/mock:-translate-y-4 transition-all duration-700">
                        <div className="w-80 h-48 bg-white/80 backdrop-blur-xl rounded-[2.5rem] p-10 shadow-2xl border border-white flex items-center justify-between">
                            <div className="w-16 h-16 bg-wispr-purple/10 rounded-2xl flex items-center justify-center text-wispr-purple">
                                <Cpu size={32} />
                            </div>
                            <div className="space-y-4 flex-1 ml-8">
                                <div className="h-3 w-full bg-slate-100 rounded-full overflow-hidden">
                                    <div className="h-full bg-wispr-purple transition-all duration-1000" style={{ width: activeStep % 2 === 0 ? '40%' : '80%' }}></div>
                                </div>
                                <div className="h-3 w-2/3 bg-slate-50 rounded-full"></div>
                            </div>
                        </div>
                        <div className="bg-emerald-400 text-wispr-dark px-10 py-5 rounded-3xl font-brand font-black text-xs uppercase tracking-[0.4em] shadow-xl animate-bounce">
                            Live Sync Active
                        </div>
                    </div>
                );
        }
    };

    return (
        <div className={`relative flex flex-col items-center justify-center w-full min-h-[500px] perspective-xl group/mock ${className}`}>
            {/* Background Decor */}
            <div className={`absolute w-[600px] h-[600px] rounded-full blur-[160px] opacity-15 pointer-events-none transition-all duration-1000 ${isDark ? 'bg-wispr-purple' : 'bg-[#8B5CF6]/40'
                } ${activeStep % 2 === 0 ? 'scale-110' : 'scale-90'}`}></div>

            {/* Visual content based on variant */}
            <div className="w-full flex justify-center transition-transform duration-700">
                {renderContent()}
            </div>

            {/* Floating Sparkles for extra polish */}
            <div className="absolute top-10 right-10 w-24 h-24 bg-white/30 backdrop-blur-md rounded-full border border-white/20 flex items-center justify-center shadow-lg animate-float-slow opacity-60">
                <Sparkles className="text-wispr-purple/30" size={32} />
            </div>
            <div className="absolute bottom-10 left-10 w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full border border-white/10 flex items-center justify-center shadow-md animate-float-slow opacity-40" style={{ animationDelay: '2s' }}>
                <Sparkles className="text-wispr-purple/20" size={24} />
            </div>
        </div>
    );
};

export default AnimatedMockUI;
