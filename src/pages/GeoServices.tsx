import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import Navbar from '../../components/Navbar';
import StickyBar from '../../components/StickyBar';
import Footer from '../../components/Footer';
import BookDemoModal from '../../components/BookDemoModal';
import PrivacyPolicyModal from '../../components/PrivacyPolicyModal';
import TermsConditionsModal from '../../components/TermsConditionsModal';
import FAQSection from '../../components/FAQSection';
import { SERVICES, COMPANY_NAME } from '../../constants';
import type { ServiceDetail } from '../../types';

const GeoServices: React.FC = () => {
    const [isBookModalOpen, setIsBookModalOpen] = useState(false);
    const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);
    const [isTermsModalOpen, setIsTermsModalOpen] = useState(false);

    const openBookModal = () => setIsBookModalOpen(true);
    const closeBookModal = () => setIsBookModalOpen(false);
    const openPrivacyModal = () => setIsPrivacyModalOpen(true);
    const closePrivacyModal = () => setIsPrivacyModalOpen(false);
    const openTermsModal = () => setIsTermsModalOpen(true);
    const closeTermsModal = () => setIsTermsModalOpen(false);

    // Specifically for the GEO page
    const service = SERVICES.find((s: ServiceDetail) => s.id === 'geo');

    if (!service) {
        return (
            <div className="min-h-screen bg-wispr-dark flex flex-col items-center justify-center text-white p-6">
                <h1 className="text-2xl font-bold mb-4">Service Not Found</h1>
                <Link to="/" className="text-wispr-purple hover:underline">Return to Home</Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-wispr-cream selection:bg-wispr-purple selection:text-white flex flex-col">
            <Navbar onBookDemo={openBookModal} />

            <main className="flex-grow">
                {/* Hero Section */}
                <section className="relative pt-32 pb-40 px-6 overflow-hidden bg-wispr-cream">
                    {/* Background Refined Gradients & Mesh */}
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <div className="absolute top-[-10%] left-[-5%] w-[50%] h-[50%] bg-wispr-purple/15 blur-[120px] rounded-full animate-float opacity-70"></div>
                        <div className="absolute bottom-[-10%] right-[-5%] w-[45%] h-[45%] bg-purple-600/10 blur-[100px] rounded-full animate-float-slow opacity-50" style={{ animationDelay: '-3s' }}></div>
                        <div className="absolute inset-0 grid-bg-light opacity-[0.12]"></div>
                    </div>

                    <div className="max-w-7xl mx-auto relative z-10">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <div className="reveal-advanced active">
                                <nav className="flex items-center space-x-2 text-[10px] font-brand font-black uppercase tracking-[0.4em] text-wispr-purple/60 mb-8">
                                    <Link to="/" className="hover:text-wispr-purple transition-colors">Home</Link>
                                    <span>/</span>
                                    <span className="text-wispr-purple">{service.title}</span>
                                </nav>
                                <h1 className="font-lander text-5xl md:text-8xl font-bold text-wispr-dark mb-10 leading-[0.9] tracking-tighter">
                                    {service.title} by <br />
                                    <span className="text-gradient relative inline-block">
                                        {COMPANY_NAME}
                                        <span className="absolute -bottom-2 left-0 w-full h-1 bg-wispr-purple/20 -rotate-1 rounded-full"></span>
                                    </span>
                                </h1>
                                <p className="font-sodo text-xl text-slate-600 mb-12 leading-relaxed max-w-xl">
                                    {service.longDescription}
                                </p>
                                <div className="flex flex-wrap gap-6">
                                    <button
                                        onClick={openBookModal}
                                        className="relative group overflow-hidden px-12 py-6 accent-gradient rounded-[2rem] text-white font-brand font-black text-sm uppercase tracking-widest transition-all hover:scale-105 hover:shadow-[0_20px_60px_-15px_rgba(139,92,246,0.5)]"
                                    >
                                        <span className="relative z-10">Start Your {service.id.toUpperCase()} Strategy</span>
                                        <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 skew-x-[25deg]"></div>
                                    </button>
                                </div>
                            </div>

                            <div className="relative reveal-advanced active" style={{ transitionDelay: '200ms' }}>
                                <div className="bg-white p-12 md:p-16 rounded-[4rem] border border-wispr-dark/5 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.08)] relative overflow-hidden group">
                                    <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-wispr-purple to-transparent opacity-50"></div>
                                    <h3 className="font-lander text-3xl font-bold text-wispr-dark mb-10">Why Choose {COMPANY_NAME}?</h3>
                                    <div className="space-y-8">
                                        {[
                                            "Proprietary 7-phase GEO audit process",
                                            "Real-time tracking across 10+ AI engines",
                                            "Expert entity mapping & schema deployment",
                                            "Dedicated AI citation strategists"
                                        ].map((item, i) => (
                                            <div key={i} className="flex items-start space-x-5 group/item">
                                                <div className="w-8 h-8 rounded-xl bg-wispr-purple/10 flex items-center justify-center text-wispr-purple shrink-0 group-hover/item:bg-wispr-purple group-hover/item:text-white transition-all duration-500">
                                                    <CheckCircle2 size={18} />
                                                </div>
                                                <span className="font-sodo text-slate-600 text-lg group-hover/item:text-wispr-dark transition-colors duration-500">{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Content Sections */}
                <section className="py-40 px-6 bg-wispr-dark relative overflow-hidden">
                    <div className="absolute inset-0 grid-bg-dark opacity-10"></div>
                    <div className="max-w-4xl mx-auto relative z-10">
                        <div className="space-y-32">
                            {service.sections.map((section, idx) => (
                                <div key={idx} className="reveal-advanced" style={{ transitionDelay: `${idx * 150}ms` }}>
                                    <div className="inline-flex items-center space-x-3 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md">
                                        <span className="text-[10px] font-brand font-black uppercase tracking-[0.4em] text-wispr-purple">Phase 0{idx + 1}</span>
                                    </div>
                                    <h2 className="font-lander text-4xl md:text-6xl font-bold text-white mb-10 tracking-tight">
                                        {section.heading}
                                    </h2>
                                    <p className="font-sodo text-xl text-slate-400 leading-relaxed mb-12">
                                        {section.content}
                                    </p>
                                    {section.bullets && (
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            {section.bullets.map((bullet, i) => (
                                                <div key={i} className="bg-white/5 p-8 rounded-[2rem] border border-white/10 hover:border-wispr-purple/40 transition-all duration-500 group">
                                                    <div className="flex items-center space-x-4">
                                                        <div className="w-2 h-2 accent-gradient rounded-full group-hover:scale-150 transition-transform"></div>
                                                        <span className="font-sodo text-slate-300 text-lg">{bullet}</span>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Comparison Section */}
                <section className="py-40 px-6 bg-wispr-cream">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-24 reveal-advanced">
                            <h2 className="font-lander text-4xl md:text-7xl font-bold text-wispr-dark mb-8 tracking-tighter">
                                Strategic <span className="text-wispr-purple italic">Advantage</span>
                            </h2>
                            <p className="font-sodo text-slate-600 text-xl max-w-2xl mx-auto">
                                Comparison: Traditional SEO vs {COMPANY_NAME}'s {service.id.toUpperCase()}
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            <div className="bg-white p-12 rounded-[4rem] border border-wispr-dark/5 shadow-xl reveal-advanced">
                                <h3 className="font-brand font-black text-xs uppercase tracking-[0.4em] text-slate-400 mb-12">Traditional SEO Includes</h3>
                                <ul className="space-y-6">
                                    {[
                                        "Keyword research & density",
                                        "Backlink building",
                                        "On-page optimization",
                                        "Meta tag management"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-center space-x-4 text-slate-500 font-sodo text-lg">
                                            <span className="text-red-400/60 font-bold">•</span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                    <li className="pt-6 text-red-400/80 font-brand font-black text-[10px] uppercase tracking-widest border-t border-slate-100 italic">
                                        No AI answer optimization
                                    </li>
                                </ul>
                            </div>
                            <div className="bg-wispr-dark p-12 rounded-[4rem] shadow-[0_40px_100px_-20px_rgba(109,40,217,0.3)] relative overflow-hidden reveal-advanced group">
                                <div className="absolute inset-0 grid-bg-dark opacity-10"></div>
                                <h3 className="font-brand font-black text-xs uppercase tracking-[0.4em] text-wispr-purple mb-12 relative z-10">{service.id.toUpperCase()} Strategy Includes</h3>
                                <ul className="space-y-8 relative z-10">
                                    {[
                                        "Entity relationship auditing",
                                        "AI-ready content restructuring",
                                        "LLM citation equity building",
                                        "Generative search visibility tracking"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-center space-x-5 group/item">
                                            <div className="w-8 h-8 rounded-full bg-wispr-purple/20 flex items-center justify-center text-wispr-purple shrink-0 group-hover/item:scale-110 transition-transform">
                                                <CheckCircle2 size={18} />
                                            </div>
                                            <span className="font-sodo text-slate-300 text-xl font-medium">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQs Section */}
                <div className="bg-black py-20 px-6">
                    <FAQSection faqs={service.faqs} theme="dark" />
                </div>

                {/* Final CTA */}
                <section className="py-48 px-6 bg-wispr-cream">
                    <div className="max-w-5xl mx-auto bg-white p-20 md:p-32 rounded-[5rem] border-4 border-wispr-dark text-center overflow-hidden relative reveal-advanced shadow-2xl">
                        <div className="absolute -top-32 -left-32 w-96 h-96 bg-purple-800/10 blur-[150px] rounded-full"></div>
                        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-purple-600/10 blur-[150px] rounded-full"></div>

                        <h2 className="font-lander text-4xl md:text-8xl font-bold text-wispr-dark mb-10 relative z-10 leading-[0.9] tracking-tighter">
                            Ready to secure your <span className="text-gradient">AI visibility</span>?
                        </h2>
                        <p className="font-sodo text-xl md:text-2xl text-slate-600 mb-16 relative z-10 max-w-2xl mx-auto leading-relaxed">
                            Join the elite brands that have mastered the generation search landscape.
                        </p>
                        <div className="flex justify-center relative z-10">
                            <button
                                onClick={openBookModal}
                                className="px-14 py-6 accent-gradient rounded-2xl text-white font-brand font-black text-sm uppercase tracking-widest hover:scale-110 hover:rotate-[-2deg] transition-all shadow-2xl shadow-purple-700/30 flex items-center space-x-4"
                            >
                                <span>Schedule Your Audit</span>
                                <ArrowRight size={20} />
                            </button>
                        </div>
                    </div>
                </section>
            </main>

            <StickyBar onBookDemo={openBookModal} />
            <Footer onPrivacyClick={openPrivacyModal} onTermsClick={openTermsModal} />

            <BookDemoModal open={isBookModalOpen} onClose={closeBookModal} />
            <PrivacyPolicyModal open={isPrivacyModalOpen} onClose={closePrivacyModal} />
            <TermsConditionsModal open={isTermsModalOpen} onClose={closeTermsModal} />
        </div>
    );
};

export default GeoServices;
