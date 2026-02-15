
import React, { useEffect, useMemo, useRef } from 'react';
import { X, ShieldCheck, Mail, MapPin } from 'lucide-react';

interface PrivacyPolicyModalProps {
    open: boolean;
    onClose: () => void;
}

const PrivacyPolicyModal: React.FC<PrivacyPolicyModalProps> = ({ open, onClose }) => {
    const dialogRef = useRef<HTMLDivElement>(null);

    // Stable unique ids for accessibility.
    const ids = useMemo(
        () => ({
            title: `privacy-modal-title-${Math.random().toString(16).slice(2)}`,
            desc: `privacy-modal-desc-${Math.random().toString(16).slice(2)}`,
        }),
        []
    );

    useEffect(() => {
        if (!open) return;

        // Prevent background scroll while open.
        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';

        return () => {
            document.body.style.overflow = previousOverflow;
        };
    }, [open]);

    useEffect(() => {
        if (!open) return;

        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                e.preventDefault();
                onClose();
                return;
            }

            // Minimal focus trap.
            if (e.key === 'Tab') {
                const root = dialogRef.current;
                if (!root) return;

                const focusables = Array.from(
                    root.querySelectorAll<HTMLElement>(
                        'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'
                    )
                ).filter((el) => !el.hasAttribute('aria-hidden'));

                if (focusables.length === 0) return;

                const first = focusables[0];
                const last = focusables[focusables.length - 1];
                const active = document.activeElement as HTMLElement | null;

                if (e.shiftKey) {
                    if (!active || active === first) {
                        e.preventDefault();
                        last.focus();
                    }
                } else {
                    if (active === last) {
                        e.preventDefault();
                        first.focus();
                    }
                }
            }
        };

        window.addEventListener('keydown', onKeyDown);
        return () => window.removeEventListener('keydown', onKeyDown);
    }, [open, onClose]);

    if (!open) return null;

    return (
        <div
            className="fixed inset-0 z-[100] flex items-center justify-center px-4 py-6"
            role="presentation"
        >
            {/* Backdrop */}
            <button
                aria-label="Close privacy policy modal"
                className="fixed inset-0 bg-wispr-dark/80 backdrop-blur-md cursor-pointer"
                onClick={onClose}
                type="button"
            />

            {/* Dialog */}
            <div
                ref={dialogRef}
                role="dialog"
                aria-modal="true"
                aria-labelledby={ids.title}
                aria-describedby={ids.desc}
                className="relative w-full max-w-4xl my-auto rounded-[2rem] md:rounded-[3.5rem] overflow-hidden shadow-[0_80px_160px_rgba(0,0,0,0.5)] border border-white/10 max-h-[90vh] flex flex-col bg-white"
            >
                {/* Header */}
                <div className="flex items-start justify-between gap-4 p-7 md:p-10 border-b border-slate-100 flex-shrink-0 bg-white relative z-10">
                    <div className="flex-1">
                        <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-wispr-dark text-wispr-cream border border-white/5 shadow-xl">
                            <ShieldCheck size={14} className="text-wispr-purple" />
                            <span className="font-brand text-[10px] font-black uppercase tracking-[0.4em]">
                                Legal Documentation
                            </span>
                        </div>

                        <h2
                            id={ids.title}
                            className="mt-6 font-lander text-3xl md:text-5xl font-bold tracking-tighter text-wispr-dark leading-tight"
                        >
                            Privacy Policy
                        </h2>
                        <p id={ids.desc} className="mt-3 text-slate-500 font-brand text-[10px] uppercase tracking-widest font-black opacity-60">
                            Last updated: February 2026
                        </p>
                    </div>

                    <button
                        type="button"
                        onClick={onClose}
                        className="absolute top-6 right-6 w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 flex items-center justify-center transition-all active:scale-90 cursor-pointer z-[60]"
                        aria-label="Close"
                    >
                        <X size={20} strokeWidth={2.5} />
                    </button>
                </div>

                {/* Content Area */}
                <div className="p-8 md:p-12 overflow-y-auto flex-1 min-h-0 custom-scrollbar-light bg-[#fcfcfd]">
                    <div className="space-y-12 font-sodo text-lg leading-relaxed text-slate-700 max-w-3xl mx-auto">
                        <section className="space-y-6">
                            <p>
                                This Privacy Policy explains how <strong>CodimAi</strong> (“CodimAi”, “we”, “us”, or “our”) collects, uses,
                                shares, and protects your information when you use our website
                                <strong> codimai.com</strong>, our products, and related services (collectively, the “Services”).
                            </p>
                            <p className="p-8 bg-wispr-dark text-wispr-cream rounded-3xl border border-white/5 italic shadow-2xl">
                                By using our Services, you agree to the practices described in this Privacy Policy.
                                <strong className="text-wispr-purple"> If you do not agree, do not use our Services.</strong>
                            </p>
                        </section>

                        <hr className="border-slate-200" />

                        {/* Sections */}
                        {[
                            {
                                title: "1. Who We Are",
                                content: (
                                    <div className="space-y-6">
                                        <ul className="space-y-4 list-none pl-0">
                                            <li className="flex items-center gap-4"><div className="w-2 h-2 rounded-full bg-wispr-purple" /> <span className="font-bold text-wispr-dark">Company name:</span> CodimAi</li>
                                            <li className="flex items-start gap-4"><MapPin className="text-wispr-purple shrink-0 mt-1" size={18} /> <span><strong className="text-wispr-dark">Registered address:</strong> PLT NO NANOTECHNOLOY CENTRE CTS NO 4094 G-Block, BKC, Bandra (E), Mumbai City – 400055, Maharashtra, India</span></li>
                                            <li className="flex items-center gap-4"><Mail className="text-wispr-purple shrink-0" size={18} /> <span className="break-all text-sm md:text-base"><strong className="text-wispr-dark">Email:</strong> privacy@codimai.com, support@codimai.com</span></li>
                                        </ul>
                                        <p>CodimAi provides AI-based automation solutions including WhatsApp automation, chatbots, and workflow automation.</p>
                                    </div>
                                )
                            },
                            {
                                title: "2. Information We Collect",
                                content: (
                                    <div className="space-y-8">
                                        <div className="space-y-4">
                                            <h5 className="text-xl font-bold text-wispr-dark">2.1 Information You Provide</h5>
                                            <ul className="list-disc pl-6 space-y-2 marker:text-wispr-purple">
                                                <li>Name, business name, email, phone number</li>
                                                <li>Login credentials (passwords are hashed)</li>
                                                <li>Billing details (we do not store full card data)</li>
                                                <li>Automation workflows, message templates, uploaded contact lists</li>
                                                <li>Support communications and feedback</li>
                                            </ul>
                                        </div>
                                        <div className="space-y-4">
                                            <h5 className="text-xl font-bold text-wispr-dark">2.2 Information Collected Automatically</h5>
                                            <ul className="list-disc pl-6 space-y-2 marker:text-wispr-purple">
                                                <li>IP address, browser, device, operating system</li>
                                                <li>Pages visited, session duration, feature usage</li>
                                                <li>Cookies and analytics data</li>
                                            </ul>
                                        </div>
                                    </div>
                                )
                            },
                            {
                                title: "3. How We Use Your Information",
                                content: (
                                    <ul className="list-disc pl-6 space-y-2 marker:text-wispr-purple">
                                        <li>Provide and operate our Services</li>
                                        <li>Improve performance, security, and usability</li>
                                        <li>Communicate service updates and support</li>
                                        <li>Marketing (with opt-out controls)</li>
                                        <li>Legal and regulatory compliance</li>
                                    </ul>
                                )
                            },
                            {
                                title: "4. Customer Data & End Users",
                                content: (
                                    <p>When our customers use CodimAi to communicate with their users, the customer is the <strong>Data Controller</strong> and CodimAi acts as a <strong>Data Processor</strong>.</p>
                                )
                            },
                            {
                                title: "5. Data Sharing",
                                content: (
                                    <div className="space-y-4">
                                        <p>We do not sell personal data. We may share data with:</p>
                                        <ul className="list-disc pl-6 space-y-2 marker:text-wispr-purple">
                                            <li>Cloud hosting, analytics, and payment providers</li>
                                            <li>Integration partners configured by you</li>
                                            <li>Legal authorities when required</li>
                                            <li>During mergers or acquisitions</li>
                                        </ul>
                                    </div>
                                )
                            },
                            {
                                title: "9. Your Rights",
                                content: (
                                    <div className="space-y-6">
                                        <ul className="list-disc pl-6 space-y-2 marker:text-wispr-purple">
                                            <li>Access, correction, deletion</li>
                                            <li>Restriction and objection</li>
                                            <li>Data portability</li>
                                            <li>Withdraw consent</li>
                                        </ul>
                                        <div className="p-6 bg-purple-100 rounded-[2rem] border border-purple-200 text-wispr-dark font-bold text-center">
                                            Contact <a href="mailto:privacy@codimai.com" className="text-wispr-purple underline underline-offset-4 break-all">privacy@codimai.com</a> to exercise your rights.
                                        </div>
                                    </div>
                                )
                            }
                        ].map((section, idx) => (
                            <React.Fragment key={idx}>
                                <section className="space-y-6">
                                    <h3 className="text-2xl font-lander font-bold text-wispr-dark">{section.title}</h3>
                                    {section.content}
                                </section>
                                <hr className="border-slate-200" />
                            </React.Fragment>
                        ))}

                        <section className="space-y-6">
                            <h3 className="text-2xl font-lander font-bold text-wispr-dark">13. Contact Us</h3>
                            <div className="bg-wispr-dark text-white p-10 rounded-[2.5rem] shadow-2xl relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-wispr-purple/10 blur-3xl -z-10 group-hover:bg-wispr-purple/20 transition-all" />
                                <div className="space-y-4 relative z-10">
                                    <p className="flex flex-wrap gap-x-3 gap-y-1"><span className="flex items-center gap-3"><Mail className="text-wispr-purple" size={18} /> <strong>Email:</strong></span> <span className="break-all opacity-70">privacy@codimai.com</span></p>
                                    <div className="flex flex-col">
                                        <div className="flex items-start gap-3">
                                            <MapPin className="text-wispr-purple mt-1" size={18} />
                                            <div className="flex flex-col">
                                                <strong>Address:</strong>
                                                <span className="opacity-70">CodimAi – Privacy Office</span>
                                                <span className="opacity-70 text-sm md:text-base break-words">PLT NO NANOTECHNOLOY CENTRE CTS NO 4094 G-Block, BKC, Bandra (E), Mumbai – 400055, Maharashtra, India</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicyModal;
