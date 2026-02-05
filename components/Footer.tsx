import React from 'react';
import { Instagram, Linkedin, Twitter, Facebook, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

interface FooterProps { }

const Footer: React.FC<FooterProps> = () => {
    return (
        <footer className="py-24 bg-wispr-dark relative z-10 border-t border-white/5">
            <div className="max-w-[1200px] mx-auto px-6">
                <div className="flex md:flex-row justify-between items-center gap-16 mb-20 text-left flex-wrap">
                    {/* Brand Section */}
                    <div className="flex-[2] space-y-8">
                        <Logo variant="light" />
                        <p className="text-slate-400 text-[18px] leading-[1.6] max-w-sm font-sodo">
                            Engineering systemic scalability for the global enterprise. The unified sales layer that bridges the gap between visibility and closing.
                        </p>
                        <div className="flex gap-5">
                            {[
                                { Icon: Instagram, href: 'https://www.instagram.com/codim.ai/', label: 'Instagram' },
                                { Icon: Linkedin, href: 'https://www.linkedin.com/in/shivam-gupta-089518308/', label: 'LinkedIn' },
                                { Icon: Twitter, href: 'https://x.com/codim_ai?s=20', label: 'Twitter' },
                                { Icon: Facebook, href: 'https://www.facebook.com/people/CodimAi/61578209616406/', label: 'Facebook' }
                            ].map(({ Icon, href, label }) => (
                                <a
                                    key={label}
                                    href={href}
                                    className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:bg-wispr-purple hover:border-wispr-purple transition-all duration-300 group"
                                    aria-label={label}
                                >
                                    <Icon size={20} strokeWidth={1.5} className="group-hover:scale-110 transition-transform" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="flex-1 space-y-8">
                        <h4 className="font-brand font-black text-[13px] uppercase tracking-[0.3em] text-wispr-purple/80">Navigation</h4>
                        <ul className="space-y-4">
                            <li><Link to="/" className="font-sodo font-bold text-slate-400 hover:text-white transition-colors text-base">Home</Link></li>
                            <li><Link to="/tech" className="font-sodo font-bold text-slate-400 hover:text-white transition-colors text-base">Our Tech</Link></li>
                            <li><Link to="/pricing" className="font-sodo font-bold text-slate-400 hover:text-white transition-colors text-base">Pricing</Link></li>
                            <li><Link to="/article" className="font-sodo font-bold text-slate-400 hover:text-white transition-colors text-base">Article</Link></li>

                        </ul>
                    </div>

                    {/* Address Section */}
                    <div className="flex-1 space-y-8">
                        <h4 className="font-brand font-black text-[13px] uppercase tracking-[0.3em] text-wispr-purple/80">Office</h4>
                        <div className="flex gap-4 group cursor-default">
                            <div className="mt-1">
                                <MapPin size={18} className="text-wispr-purple transition-opacity" />
                            </div>
                            <div className="space-y-1">
                                <p className="font-sodo font-bold text-slate-400 text-base leading-relaxed">
                                    Mumbai, Maharashtra,<br />
                                    India
                                </p>
                                <p className="font-sodo font-bold text-wispr-purple text-sm pt-2"> <a href="mailto:Support@codimai.com">Support@codimai.com</a></p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
                    <p className="text-slate-500 text-[14px] font-medium font-sodo">
                        &copy; {new Date().getFullYear()} Codimai . All rights reserved.
                    </p>
                    <div className="flex gap-10 text-[12px] font-black text-slate-500 uppercase tracking-widest font-brand">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                        <a href="#" className="hover:text-white transition-colors">Cookies</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;