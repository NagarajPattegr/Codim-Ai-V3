import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
    CheckCircle2,
    Search,
    Brain,
    ShieldCheck,
    Zap,
    ArrowRight,
    Quote,
    Globe,
    Cpu,
    TrendingUp,
    Activity
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import Navbar from '../../components/Navbar';
import StickyBar from '../../components/StickyBar';
import Footer from '../../components/Footer';
import BookDemoModal from '../../components/BookDemoModal';
import PrivacyPolicyModal from '../../components/PrivacyPolicyModal';
import TermsConditionsModal from '../../components/TermsConditionsModal';
import { COMPANY_NAME, SERVICES } from '../../constants';

// Swiper imports
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';

// Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

const StatCard: React.FC<{ val: string; label: string; delay: number; Icon: LucideIcon }> = ({ val, label, delay, Icon }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [isCentered, setIsCentered] = useState(false);
    const cardRef = React.useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                setTimeout(() => setIsVisible(true), delay);
            }
        }, { threshold: 0.1 });

        // Observer for detecting when card is in the center region of the screen
        const centerObserver = new IntersectionObserver((entries) => {
            setIsCentered(entries[0].isIntersecting);
        }, {
            threshold: 0,
            rootMargin: "0px -35% 0px -35%"
        });

        if (cardRef.current) {
            observer.observe(cardRef.current);
            centerObserver.observe(cardRef.current);
        }
        return () => {
            observer.disconnect();
            centerObserver.disconnect();
        };
    }, [delay]);

    return (
        <div
            ref={cardRef}
            className={`group relative flex items-center gap-8 py-12 px-14 border transition-all duration-1000 mx-10 shrink-0 overflow-hidden min-w-[460px] rounded-[2.5rem]
                ${isCentered
                    ? 'bg-white border-wispr-purple/40 scale-105 z-20 shadow-[0_30px_70px_-20px_rgba(139,92,246,0.15)]'
                    : 'bg-white border-wispr-dark/5 scale-100 z-10 shadow-sm'}
            `}
        >
            {/* Animated Edge Border */}
            <div className={`absolute top-0 left-0 h-[2px] bg-gradient-to-r from-transparent via-wispr-purple to-transparent transition-all duration-1000 ${isVisible ? 'w-full' : 'w-0'}`}></div>

            <div className={`relative z-10 p-6 rounded-2xl transition-all duration-500 
                ${isCentered ? 'bg-wispr-purple/10 text-wispr-purple scale-110' : 'bg-wispr-purple/5 text-wispr-purple/40'}
            `}>
                <Icon size={48} strokeWidth={1} />
            </div>

            <div className="relative z-10 flex flex-col">
                <div className={`text-6xl font-black mb-1 tracking-tighter transition-colors duration-500
                    ${isCentered ? 'text-wispr-dark' : 'text-wispr-dark/40'}
                `}>
                    {val}
                </div>
                <div className={`text-[10px] uppercase tracking-[0.4em] font-brand font-black leading-tight transition-colors duration-500
                    ${isCentered ? 'text-wispr-purple' : 'text-slate-400'}
                `}>
                    {label}
                </div>
            </div>

            {/* Subtle Gradient Glow */}
            <div className={`absolute -right-32 -top-32 w-64 h-64 blur-[80px] rounded-full pointer-events-none transition-opacity duration-1000
                ${isCentered ? 'bg-wispr-purple/20 opacity-100' : 'bg-wispr-purple/5 opacity-0'}
            `}></div>
        </div>
    );
};

const Home: React.FC = () => {
    useEffect(() => {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: "0px 0px -10% 0px"
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    const [isBookModalOpen, setIsBookModalOpen] = useState(false);
    const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);
    const [isTermsModalOpen, setIsTermsModalOpen] = useState(false);

    const openBookModal = () => setIsBookModalOpen(true);
    const closeBookModal = () => setIsBookModalOpen(false);

    const openPrivacyModal = () => setIsPrivacyModalOpen(true);
    const closePrivacyModal = () => setIsPrivacyModalOpen(false);

    const openTermsModal = () => setIsTermsModalOpen(true);
    const closeTermsModal = () => setIsTermsModalOpen(false);

    return (
        <div className="min-h-screen bg-wispr-cream selection:bg-wispr-purple selection:text-white">
            <Navbar onBookDemo={openBookModal} />

            <main>
                {/* Hero Section - PREMIUM ENHANCED */}
                <section className="relative min-h-[75vh] flex items-center pt-4 pb-0 px-6 overflow-hidden bg-wispr-cream">
                    {/* Background Refined Gradients & Mesh */}
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <div className="absolute top-[-10%] left-[-5%] w-[50%] h-[50%] bg-wispr-purple/15 blur-[120px] rounded-full animate-float opacity-70"></div>
                        <div className="absolute bottom-[-10%] right-[-5%] w-[45%] h-[45%] bg-purple-400/10 blur-[100px] rounded-full animate-float-slow opacity-50" style={{ animationDelay: '-3s' }}></div>
                        <div className="absolute top-[20%] right-[10%] w-[30%] h-[30%] bg-blue-400/10 blur-[120px] rounded-full animate-float opacity-40" style={{ animationDelay: '-5s' }}></div>

                        {/* Subtle Grid Interaction */}
                        <div className="absolute inset-0 grid-bg-light opacity-[0.12]"></div>
                    </div>

                    <div className="max-w-7xl mx-auto text-center relative z-10 w-full">
                        {/* New Premium Badge */}
                        <div className="inline-flex items-center space-x-3 px-6 py-2 glass border border-wispr-purple/20 rounded-full mb-8 reveal-advanced active group cursor-default shadow-sm transition-all hover:border-wispr-purple/40">
                            <div className="relative">
                                <span className="absolute inset-0 bg-wispr-purple/30 rounded-full blur-sm group-hover:blur-md transition-all"></span>
                                <span className="relative block w-2 h-2 bg-wispr-purple rounded-full animate-pulse"></span>
                            </div>
                            <span className="text-[10px] font-brand font-black uppercase tracking-[0.5em] text-wispr-purple/70 group-hover:text-wispr-purple transition-colors">
                                Defining AI Visibility
                            </span>
                        </div>

                        <h1 className="font-lander text-6xl md:text-[9.5rem] font-bold text-wispr-dark mb-8 tracking-tighter leading-[0.82] reveal-advanced active" style={{ transitionDelay: '100ms' }}>
                            Dominate the <br />
                            <span className="text-gradient relative inline-block">
                                AI Search
                                <span className="absolute -bottom-2 md:-bottom-4 left-0 w-full h-1 md:h-2 bg-wispr-purple/20 -rotate-1 rounded-full"></span>
                            </span> Era
                        </h1>

                        <p className="font-sodo text-xl md:text-2xl text-slate-600/90 max-w-3xl mx-auto mb-12 leading-relaxed reveal-advanced active" style={{ transitionDelay: '200ms' }}>
                            {COMPANY_NAME} is your strategic partner for <span className="text-wispr-dark font-bold italic">Generative Engine Optimization</span>. We ensure your brand is cited as the primary authority in AI-powered answers.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 reveal-advanced active" style={{ transitionDelay: '300ms' }}>
                            <Link to="/contact" className="relative group overflow-hidden px-14 py-6 accent-gradient rounded-[2rem] text-white font-brand font-black text-sm uppercase tracking-widest transition-all hover:scale-105 hover:shadow-[0_20px_60px_-15px_rgba(139,92,246,0.6)]">
                                <span className="relative z-10">Start Your Audit</span>
                                <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 skew-x-[25deg]"></div>
                            </Link>

                            <Link to="/geo-services" className="px-14 py-6 glass border-2 border-wispr-dark/20 rounded-[2rem] text-wispr-dark font-brand font-black text-sm uppercase tracking-widest hover:bg-wispr-dark hover:text-white hover:border-wispr-dark transition-all duration-500 shadow-sm">
                                Explore Services
                            </Link>
                        </div>

                        {/* Scroll Indicator */}
                        <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-30 reveal-advanced active" style={{ transitionDelay: '500ms' }}>
                            <span className="text-[9px] uppercase tracking-[0.4em] font-brand font-black text-wispr-dark">Discover Future</span>
                            <div className="w-[1px] h-12 bg-gradient-to-b from-wispr-dark via-wispr-dark to-transparent"></div>
                        </div>
                    </div>
                </section>

                {/* Stats Marquee Section - WHITE */}
                <section className="bg-white border-y border-wispr-dark/5 overflow-hidden py-4 md:py-8 mb-20">
                    <div className="animate-marquee flex items-center">
                        <StatCard val="500+" label="Brands Optimized" delay={0} Icon={Globe} />
                        <StatCard val="10+" label="AI Platforms Tracked" delay={100} Icon={Cpu} />
                        <StatCard val="47%" label="Avg. Mention Increase" delay={200} Icon={TrendingUp} />
                        <StatCard val="24/7" label="AIO Monitoring" delay={300} Icon={Activity} />
                        {/* Duplicate for seamless loop */}
                        <StatCard val="500+" label="Brands Optimized" delay={400} Icon={Globe} />
                        <StatCard val="10+" label="AI Platforms Tracked" delay={500} Icon={Cpu} />
                        <StatCard val="47%" label="Avg. Mention Increase" delay={600} Icon={TrendingUp} />
                        <StatCard val="24/7" label="AIO Monitoring" delay={700} Icon={Activity} />
                        <StatCard val="500+" label="Brands Optimized" delay={800} Icon={Globe} />
                        <StatCard val="10+" label="AI Platforms Tracked" delay={900} Icon={Cpu} />
                        <StatCard val="47%" label="Avg. Mention Increase" delay={1000} Icon={TrendingUp} />
                        <StatCard val="24/7" label="AIO Monitoring" delay={1100} Icon={Activity} />
                    </div>
                </section>


                {/* Problem/Solution Section - DARK (Even) */}
                <section className="py-32 px-6 relative overflow-hidden bg-wispr-dark border-y border-white/5">
                    <div className="absolute inset-0 grid-bg-dark opacity-20"></div>
                    <div className="max-w-7xl mx-auto relative z-10">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                            <div className="reveal-advanced active">
                                <h2 className="font-lander text-4xl md:text-6xl font-bold text-white mb-10 leading-[0.95] tracking-tighter">
                                    Traditional SEO doesn't guarantee visibility in <span className="text-purple-400">AI answers</span>—{COMPANY_NAME} bridges that gap.
                                </h2>
                                <p className="font-sodo text-lg text-slate-400 mb-12 leading-relaxed">
                                    As Large Language Models (LLMs) redefine search behavior, your existing rankings might not translate into AI citations. {COMPANY_NAME} focuses on Entity Engineering and Generative Engine Optimization to ensure you are the answer, not just a result.
                                </p>
                                <ul className="space-y-6">
                                    {[
                                        "Entity mapping for AI knowledge graphs",
                                        "Citation authority building across LLMs",
                                        "AI-friendly content restructuring",
                                        "Real-time visibility tracking"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-center space-x-4 text-slate-300 font-brand font-black text-sm uppercase tracking-wider">
                                            <CheckCircle2 size={22} className="text-purple-400 shrink-0" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="w-full perspective-xl">
                                <Swiper
                                    effect={'coverflow'}
                                    grabCursor={true}
                                    centeredSlides={true}
                                    slidesPerView={'auto'}
                                    initialSlide={1}
                                    coverflowEffect={{
                                        rotate: 40,
                                        stretch: -20,
                                        depth: 400,
                                        modifier: 1.5,
                                        slideShadows: true,
                                    }}
                                    autoplay={{
                                        delay: 4000,
                                        disableOnInteraction: false,
                                    }}
                                    pagination={{
                                        clickable: true,
                                        dynamicBullets: true,
                                    }}
                                    modules={[EffectCoverflow, Pagination, Autoplay]}
                                    className="pb-24 !overflow-visible"
                                >
                                    {[
                                        { icon: Search, title: "AI Search", desc: "Optimizing for Perplexity, ChatGPT, and Gemini." },
                                        { icon: Brain, title: "Entity Building", desc: "Establishing your brand as a primary source." },
                                        { icon: ShieldCheck, title: "Brand Safety", desc: "Protecting your narrative in AI summaries." },
                                        { icon: Zap, title: "Fast Results", desc: "Strategic shifts visible in 60-90 days." }
                                    ].map((feature, i) => (
                                        <SwiperSlide key={i} className="max-w-[320px] md:max-w-[400px] px-4">
                                            <div className="bg-white/5 p-10 rounded-[2.5rem] border border-white/5 hover:border-purple-500/30 transition-all group h-[400px] flex flex-col items-center text-center justify-center backdrop-blur-sm">
                                                <div className="w-16 h-16 accent-gradient rounded-2xl flex items-center justify-center text-white mb-8 group-hover:rotate-12 transition-transform shadow-xl shadow-purple-500/10">
                                                    <feature.icon size={32} />
                                                </div>
                                                <h3 className="text-2xl font-brand font-black uppercase tracking-tight text-white mb-4">{feature.title}</h3>
                                                <p className="text-slate-400 text-base leading-relaxed font-sodo">{feature.desc}</p>
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Services Overview - CREAM (Odd) */}
                <section className="py-40 px-6 bg-wispr-cream">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-24 reveal-advanced active">
                            <h2 className="font-lander text-4xl md:text-7xl font-bold text-wispr-dark mb-8 tracking-tighter">Expert {COMPANY_NAME} Services</h2>
                            <p className="font-sodo text-slate-600 max-w-2xl mx-auto text-xl leading-relaxed">
                                We specialize in the technical methodologies required for visibility in the next generation of generative search engines.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch">
                            {SERVICES.map((service, i) => (
                                <div key={i} className="bg-white p-16 rounded-[3.5rem] border border-wispr-dark/5 flex flex-col hover:border-wispr-purple/20 transition-all duration-500 hover:-translate-y-2 group reveal-advanced active shadow-sm hover:shadow-2xl" style={{ transitionDelay: `${i * 100}ms` }}>
                                    <h3 className="font-lander text-3xl md:text-4xl font-bold text-wispr-dark mb-8 leading-tight tracking-tight">{service.title}</h3>
                                    <p className="font-sodo text-slate-600 text-lg mb-12 leading-relaxed flex-grow">{service.description}</p>
                                    <Link to={`/${service.slug}`} className="group inline-flex items-center space-x-3 text-wispr-purple font-brand font-black text-[13px] uppercase tracking-[0.3em] w-fit">
                                        <span>Learn More</span>
                                        <ArrowRight size={20} className="group-hover:translate-x-3 transition-transform" />
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Trust & Testimonial - PREMIUM REDESIGN */}
                <section className="py-44 px-6 bg-black relative overflow-hidden">
                    {/* Background Ambient Glows - Enhanced */}
                    <div className="absolute inset-0 pointer-events-none">
                        <div className="absolute top-[-10%] left-[-5%] w-[60%] h-[60%] bg-wispr-purple/10 blur-[150px] rounded-full animate-float opacity-40"></div>
                        <div className="absolute bottom-[-10%] right-[-5%] w-[50%] h-[50%] bg-purple-400/10 blur-[130px] rounded-full animate-float-slow opacity-30"></div>

                        {/* Subtle Pattern Overlay */}
                        <div className="absolute inset-0 grid-bg-dark opacity-10"></div>
                    </div>

                    <div className="max-w-6xl mx-auto relative z-10">
                        <div className="text-center mb-20 reveal-advanced active">
                            <div className="inline-flex items-center space-x-3 px-6 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-wispr-purple opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-wispr-purple"></span>
                                </span>
                                <span className="text-[11px] font-brand font-black uppercase tracking-[0.5em] text-wispr-purple">Proven Impact</span>
                            </div>
                        </div>

                        <div className="relative group max-w-5xl mx-auto">
                            {/* Decorative Elements */}
                            <div className="absolute -top-16 -left-12 md:-left-20 text-wispr-purple/15 font-serif text-[280px] leading-none select-none pointer-events-none">“</div>
                            <div className="absolute -bottom-60 -right-12 md:-right-20 text-wispr-purple/15 font-serif text-[280px] leading-none select-none pointer-events-none">”</div>

                            <div className="bg-gradient-to-br from-indigo-950/40 via-purple-950/60 to-wispr-purple/30 backdrop-blur-2xl p-14 md:p-28 rounded-[5rem] border border-white/10 relative overflow-hidden reveal-advanced active shadow-[0_50px_100px_-20px_rgba(0,0,0,0.8)] group-hover:border-wispr-purple/40 transition-all duration-700">
                                {/* Animated Inner Glow */}
                                <div className="absolute inset-0 bg-gradient-to-tr from-wispr-purple/10 via-transparent to-purple-400/5 opacity-50"></div>

                                <blockquote className="relative z-10 text-center">
                                    <p className="font-lander text-4xl md:text-6xl font-medium text-white mb-20 leading-[1.05] tracking-tight italic">
                                        "We saw <span className="text-wispr-purple drop-shadow-[0_0_15px_rgba(139,92,246,0.5)]">47% more brand mentions</span> in AI answers within 90 days. Traditional SEO wasn't translating to ChatGPT visibility. {COMPANY_NAME}'s strategy solved what others couldn't."
                                    </p>

                                    <footer className="flex flex-col items-center gap-10">
                                        <div className="h-px w-24 bg-gradient-to-r from-transparent via-wispr-purple/50 to-transparent"></div>
                                    </footer>
                                </blockquote>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Final CTA - CREAM */}
                <section className="py-48 px-6 bg-wispr-cream">
                    <div className="max-w-5xl mx-auto bg-white p-20 md:p-32 rounded-[5rem] border border-wispr-dark/10 text-center overflow-hidden relative reveal-advanced active shadow-2xl">
                        <div className="absolute -top-32 -left-32 w-96 h-96 bg-purple-600/10 blur-[150px] rounded-full"></div>
                        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-purple-400/10 blur-[150px] rounded-full"></div>

                        <h2 className="font-lander text-4xl md:text-8xl font-bold text-wispr-dark mb-10 relative z-10 leading-[0.9] tracking-tighter">
                            Stop being <span className="text-gradient">invisible</span> to AI search engines.
                        </h2>
                        <p className="font-sodo text-xl md:text-2xl text-slate-600 mb-16 relative z-10 max-w-2xl mx-auto leading-relaxed">
                            Join 500+ brands that have secured their place in the future of conversational search with {COMPANY_NAME}.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-10 relative z-10">
                            <Link to="/contact" className="px-12 py-6 accent-gradient rounded-2xl text-white font-brand font-black text-sm uppercase tracking-widest hover:scale-110 hover:rotate-[-2deg] transition-all shadow-2xl shadow-purple-500/30">
                                Schedule Your Free Audit
                            </Link>
                            <Link to="/education" className="text-wispr-dark font-brand font-black text-sm uppercase tracking-widest hover:text-wispr-purple transition-all flex items-center space-x-4 group">
                                <span>Read Our GEO Guide</span>
                                <ArrowRight size={22} className="group-hover:translate-x-3 transition-transform" />
                            </Link>
                        </div>
                    </div>
                </section>
            </main>

            <StickyBar onBookDemo={openBookModal} />
            <Footer onPrivacyClick={openPrivacyModal} onTermsClick={openTermsModal} />

            <BookDemoModal open={isBookModalOpen} onClose={closeBookModal} />
            <PrivacyPolicyModal open={isPrivacyModalOpen} onClose={closePrivacyModal} />
            <TermsConditionsModal open={isTermsModalOpen} onClose={closeTermsModal} />
        </div >

    );
};

export default Home;
